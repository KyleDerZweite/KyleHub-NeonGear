import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import '@/styles/tailwind.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
})

const spaceMono = Space_Mono({
    subsets: ['latin'],
    variable: '--font-space-mono',
    weight: ['400', '700'],
    display: 'swap'
})

export const metadata: Metadata = {
    title: 'KyleHub',
    description: 'A modern, state-of-the-art website with steampunk and cyberpunk aesthetics',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceMono.variable}`}>
        <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="fixed inset-0 bg-cyber-grid z-[-1] opacity-20"></div>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    )
}