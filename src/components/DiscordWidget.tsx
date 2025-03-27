'use client'

import { motion } from 'framer-motion'

const DiscordWidget = () => {
    return (
        <section id="discord" className="py-24 bg-cyberpunk-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
              Join My Community
            </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Connect with like-minded developers and enthusiasts in my Discord server.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="tech-card p-6 rounded-lg border border-purple-500/30 bg-black/60 backdrop-blur-sm">
                        <iframe
                            src="https://discord.com/widget?id=1354840927218434078&theme=dark"
                            width="350"
                            height="500"
                            allowTransparency={true}
                            frameBorder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                            className="rounded-lg"
                            title="KyleHub Discord"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default DiscordWidget