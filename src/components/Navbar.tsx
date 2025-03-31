'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scrolled])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' }
    ]

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/public" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
              <span className="text-white">Kyle</span>Hub
              <span className="text-cyberpunk-accent">.</span>
            </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <motion.nav
                        className="hidden md:flex space-x-8 mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={navVariants}
                    >
                        {navLinks.map((link) => (
                            <motion.div key={link.name} variants={itemVariants}>
                                <Link
                                    href={link.href}
                                    className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <FiX className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <FiMenu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/90 backdrop-blur-lg">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${
                                    pathname === link.href
                                        ? 'bg-primary-500/20 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    )
}

export default Navbar
