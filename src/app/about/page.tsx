'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'

export default function About() {
    return (
        <div className="pt-24">
            <section className="py-16 md:py-24 bg-cyberpunk-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
                About KyleHub
              </span>
                        </h1>
                        <div
                            className="h-1 w-32 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-10 rounded-full"/>
                        <p className="text-xl text-gray-300 mb-8">
                            A modern tech platform with a unique aesthetic blend
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -30}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                        >
                            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                            <p className="text-gray-400 mb-4">
                                KyleHub was created with a vision to blend the aesthetics of steampunk and cyberpunk
                                into a unique digital experience. We believe that technology should not only be
                                functional
                                but also visually engaging and emotionally evocative.
                            </p>
                            <p className="text-gray-400 mb-4">
                                Drawing inspiration from vintage industrial elements and futuristic neon aesthetics,
                                we've created a platform that stands at the intersection of the past and the future.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <div className="p-4 bg-primary-900/50 rounded-lg border border-primary-700/30">
                                    <h3 className="text-lg font-medium text-primary-400 mb-2">Steampunk
                                        Inspirations</h3>
                                    <p className="text-gray-400 text-sm">Victorian-era industrial design elements merged
                                        with modern technology</p>
                                </div>
                                <div className="p-4 bg-secondary-900/50 rounded-lg border border-secondary-700/30">
                                    <h3 className="text-lg font-medium text-secondary-400 mb-2">Cyberpunk
                                        Aesthetics</h3>
                                    <p className="text-gray-400 text-sm">Neon-lit digital landscapes with high-tech,
                                        low-life undertones</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, x: 30}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="relative rounded-lg overflow-hidden aspect-square"
                        >
                            <Image
                                src="/images/about-image.jpg"
                                alt="Cyberpunk influenced workspace"
                                fill
                                className="object-cover"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-60"/>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-cyberpunk-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
                Core Technologies
              </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {name: "Next.js", description: "React framework for production", icon: "💻"},
                            {name: "TypeScript", description: "Typed JavaScript at scale", icon: "📝"},
                            {name: "Tailwind CSS", description: "Utility-first CSS framework", icon: "🎨"},
                            {name: "Framer Motion", description: "Animation library for React", icon: "✨"},
                        ].map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.6, delay: i * 0.1}}
                                className="p-6 bg-black/50 rounded-lg border border-gray-800 backdrop-blur-card"
                            >
                                <div className="text-4xl mb-4">{tech.icon}</div>
                                <h3 className="text-xl font-medium mb-2 text-white">{tech.name}</h3>
                                <p className="text-gray-400">{tech.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}