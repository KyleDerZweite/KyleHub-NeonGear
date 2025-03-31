import '@/styles/tailwind.css'
import { Metadata } from 'next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

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
        <Navbar/>
        <main className="flex-grow">
            {children}

        </main>
        <Footer/>

        </body>
        </html>
    )
}