import { type NextConfig } from 'next'

const config: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    // Add any other valid configuration options here
}

export default config