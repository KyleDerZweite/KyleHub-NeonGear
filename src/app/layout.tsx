import '@/styles/tailwind.css'
import { Metadata } from 'next'
import Link from 'next/link'
import { FiHome } from 'react-icons/fi'

export const metadata: Metadata = {
    title: 'NeonGear | Discord Bot',
    description: 'A Discord bot for moderation, fun, economy, and leveling',
}

export default function NeonGearLayout({
                                           children,
                                       }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="bg-gradient-to-b from-black to-cyberpunk-dark min-h-screen flex flex-col">
        <header className="py-6 bg-gradient-to-r from-purple-900/80 to-blue-900/80 backdrop-blur-sm border-b border-purple-500/30">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/neongear" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex items-center justify-center">
                        <span className="text-lg font-bold">NG</span>
                    </div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                        NeonGear
                    </h1>
                </Link>
                <nav className="flex gap-6">
                    <Link href="/neongear/privacy-policy" className="hover:text-purple-300 transition-colors text-gray-200">
                        Privacy Policy
                    </Link>
                    <Link href="/neongear/terms-of-service" className="hover:text-purple-300 transition-colors text-gray-200">
                        Terms of Service
                    </Link>
                    <Link href="/public" className="flex items-center gap-2 hover:text-purple-300 transition-colors text-gray-200">
                        <FiHome /> KyleHub
                    </Link>
                </nav>
            </div>
        </header>

        <main className="flex-grow">
            {children}
        </main>


        </body>
        </html>
    )
}