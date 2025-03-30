'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiFileText, FiShield, FiCode, FiTerminal } from 'react-icons/fi'

export default function NeonGearHome() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center py-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-blue-400 flex items-center justify-center mx-auto mb-8 shadow-glow">
                    <FiTerminal className="text-4xl" />
                </div>

                <h1 className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
                    NeonGear
                </h1>

                <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12">
                    A powerful Discord bot for moderation, fun, economy, and leveling.
                    Designed to enhance your server experience with cyberpunk flair.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full"
            >
                <Link href="/neongear/privacy-policy">
                    <div className="editor-card p-6 rounded-lg border border-purple-500/30 bg-[#1e1e2e] backdrop-blur-sm hover:border-purple-400/50 transition-all hover:transform hover:scale-[1.02]">
                        <div className="editor-header flex items-center mb-4">
                            <div className="window-controls flex space-x-2 mr-4">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <FiShield className="text-purple-400 mr-2" />
                            <span className="text-gray-300">privacy-policy.md</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 text-blue-300">Privacy Policy</h2>
                        <div className="editor-preview h-20 overflow-hidden text-xs text-gray-400 font-mono">
                            <div className="flex">
                                <span className="text-gray-500 w-6 text-right pr-2">1</span>
                                <span className="text-purple-300"># Privacy Policy</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 w-6 text-right pr-2">2</span>
                                <span></span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 w-6 text-right pr-2">3</span>
                                <span className="text-gray-400 italic">_Last Updated: 2025-03-28_</span>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link href="/neongear/terms-of-service">
                    <div className="editor-card p-6 rounded-lg border border-purple-500/30 bg-[#1e1e2e] backdrop-blur-sm hover:border-purple-400/50 transition-all hover:transform hover:scale-[1.02]">
                        <div className="editor-header flex items-center mb-4">
                            <div className="window-controls flex space-x-2 mr-4">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <FiFileText className="text-blue-400 mr-2" />
                            <span className="text-gray-300">terms-of-service.md</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 text-blue-300">Terms of Service</h2>
                        <div className="editor-preview h-20 overflow-hidden text-xs text-gray-400 font-mono">
                            <div className="flex">
                                <span className="text-gray-500 w-6 text-right pr-2">1</span>
                                <span className="text-purple-300"># Terms of Service</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 w-6 text-right pr-2">2</span>
                                <span></span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-500 w-6 text-right pr-2">3</span>
                                <span className="text-gray-400 italic">_Last Updated: 2025-03-28_</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-12 text-center"
            >
                <Link href="/" className="text-purple-300 hover:text-purple-400 transition-colors flex items-center justify-center gap-2">
                    <FiCode className="mr-1" /> Return to KyleHub.dev
                </Link>
            </motion.div>
        </div>
    )
}