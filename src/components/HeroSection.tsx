'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const HeroSection = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 300])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <motion.section
            ref={ref}
            className="relative h-screen w-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Background image with parallax effect */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y, opacity }}
            >
                <Image
                    src="/images/cyberpunk-bg.jpg"
                    alt="Cyberpunk landscape"
                    fill
                    quality={90}
                    priority
                    className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyberpunk-dark/80 via-cyberpunk-dark/60 to-black z-10" />
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        <span className="text-white">Welcome to </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
              KyleHub
            </span>
                        <span className="text-cyberpunk-accent">.</span>
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-primary-500 to-secondary-500 my-8 rounded-full" />
                    <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
                        Where steampunk meets cyberpunk in a digital wonderland of code and creativity.
                    </h2>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#discord"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Join my Discord
                        </motion.a>
                        <motion.a
                            href="#terminal"
                            className="btn btn-secondary"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 15px rgba(66, 213, 255, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore the Terminal
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10" />

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white opacity-60"
                >
                    <path
                        d="M12 5L12 19M12 19L6 13M12 19L18 13"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
        </motion.section>
    )
}

export default HeroSection