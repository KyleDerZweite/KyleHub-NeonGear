import { type NextConfig } from 'next'

const config: NextConfig = {
    reactStrictMode: true,
    // Remove swcMinify as it's now enabled by default in newer Next.js versions
    images: {
        domains: ['images.unsplash.com'],
    },
    // Add any other valid configuration options here
}

export default config