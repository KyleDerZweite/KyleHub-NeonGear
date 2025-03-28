import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { promises as fsPromises } from 'fs';

// Define repository data types
type RepoData = {
    name: string;
    description: string | null;
    stargazers_count: number;
    forks_count: number;
}

type LanguageData = Record<string, number>;

type GithubStatsData = {
    name: string;
    description: string;
    stars: number;
    forks: number;
    languages: LanguageData;
    totalBytes: number;
    updatedAt: string;
}

// Define cache directory and file
const CACHE_DIR = path.join(process.cwd(), '.cache');
const CACHE_FILE = path.join(CACHE_DIR, 'github-stats.json');
const CACHE_DURATION = 3600 * 1000; // 1 hour in milliseconds

// Types
type CachedData = {
    timestamp: number;
    data: GithubStatsData; // Replaced any with GithubStatsData
};

// Ensure cache directory exists
async function ensureCacheDir() {
    try {
        await fsPromises.mkdir(CACHE_DIR, { recursive: true });
    } catch (error) {
        console.error('Error creating cache directory:', error);
    }
}

// Read from cache
async function readCache(): Promise<CachedData | null> {
    try {
        if (!fs.existsSync(CACHE_FILE)) {
            return null;
        }

        const fileContent = await fsPromises.readFile(CACHE_FILE, 'utf8');
        const cachedData: CachedData = JSON.parse(fileContent);

        // Check if cache is still valid
        if (Date.now() - cachedData.timestamp < CACHE_DURATION) {
            return cachedData;
        }
        return null; // Cache expired
    } catch (error) {
        console.error('Error reading cache:', error);
        return null;
    }
}

// Write to cache
async function writeCache(data: GithubStatsData) { // Replaced any with GithubStatsData
    try {
        await ensureCacheDir();
        const cacheData: CachedData = {
            timestamp: Date.now(),
            data
        };
        await fsPromises.writeFile(
            CACHE_FILE,
            JSON.stringify(cacheData, null, 2)
        );
    } catch (error) {
        console.error('Error writing cache:', error);
    }
}

// Fetch GitHub data
async function fetchGitHubData(): Promise<GithubStatsData> {
    try {
        // Fetch basic repo info
        const repoResponse = await fetch('https://api.github.com/repos/KyleDerZweite/KyleHub', {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                // Add authorization if you have a GitHub token:
                // 'Authorization': `token ${process.env.GITHUB_TOKEN}`
            },
            next: { revalidate: 3600 } // Use Next.js built-in cache for 1 hour
        });

        if (!repoResponse.ok) {
            throw new Error(`GitHub API error: ${repoResponse.status}`);
        }

        const repoData = await repoResponse.json() as RepoData;

        // Fetch language stats
        const langResponse = await fetch('https://api.github.com/repos/KyleDerZweite/KyleHub/languages', {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                // 'Authorization': `token ${process.env.GITHUB_TOKEN}`
            },
            next: { revalidate: 3600 }
        });

        if (!langResponse.ok) {
            throw new Error(`GitHub API error: ${langResponse.status}`);
        }

        const langData = await langResponse.json() as LanguageData;

        // Calculate total bytes across all languages
        const totalBytes = Object.values(langData)
            .reduce((sum, bytes) => sum + bytes, 0);

        // Return formatted data
        return {
            name: repoData.name,
            description: repoData.description || 'No description available',
            stars: repoData.stargazers_count,
            forks: repoData.forks_count,
            languages: langData,
            totalBytes,
            updatedAt: new Date().toISOString()
        };
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        throw error;
    }
}

// API route handler
export async function GET() {
    try {
        // Try to get data from cache first
        const cachedData = await readCache();

        if (cachedData) {
            return NextResponse.json(cachedData.data);
        }

        // If cache miss or expired, fetch fresh data
        const freshData = await fetchGitHubData();

        // Write to cache
        await writeCache(freshData);

        return NextResponse.json(freshData);
    } catch (error) {
        console.error('Error in GitHub stats API route:', error);
        return NextResponse.json(
            { error: 'Failed to fetch GitHub repository stats' },
            { status: 500 }
        );
    }
}