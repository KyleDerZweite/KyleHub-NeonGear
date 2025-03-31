'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiFile, FiMaximize2, FiMinimize2 } from 'react-icons/fi'

interface MarkdownEditorProps {
    title: string;
    filename: string;
    content: string;
}

export default function MarkdownEditor({ title, filename, content }: MarkdownEditorProps) {
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Split content by lines for line numbers
    const lines = content.split('\n');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`editor-container border border-purple-700/30 rounded-lg overflow-hidden bg-[#1e1e2e] ${
                isFullscreen ? 'fixed inset-0 z-50 m-0 rounded-none' : 'mx-auto my-12 max-w-4xl'
            }`}
        >
            {/* Editor Title Bar */}
            <div className="editor-title-bar flex items-center justify-between bg-[#181825] p-3 border-b border-purple-700/30">
                <div className="flex items-center">
                    <div className="window-controls flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex items-center">
                        <FiFile className="text-blue-400 mr-2" />
                        <span className="text-gray-300 font-medium">{filename}</span>
                    </div>
                </div>

                <div className="flex items-center">
                    <button
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        className="text-gray-400 hover:text-white p-1"
                    >
                        {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
                    </button>
                </div>
            </div>

            {/* Editor Tabs */}
            <div className="editor-tabs flex bg-[#191828] border-b border-purple-700/30">
                <div className="tab active px-4 py-2 bg-[#1e1e2e] border-r border-purple-700/30 text-blue-300 flex items-center">
                    <span>{filename}</span>
                </div>
            </div>

            {/* Editor Content */}
            <div className="editor-content flex">
                {/* Line Numbers */}
                <div className="line-numbers py-4 px-2 text-right select-none bg-[#191828] text-gray-500 border-r border-purple-700/30 font-mono text-sm">
                    {lines.map((_, i) => (
                        <div key={i} className="line-number">
                            {i + 1}
                        </div>
                    ))}
                </div>

                {/* Markdown Content */}
                <div className="markdown-content p-4 overflow-auto w-full">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-300">
                        {title}
                    </h1>

                    <div className="markdown-body prose prose-invert prose-purple max-w-none">
                        {lines.map((line, i) => {
                            // Basic Markdown parsing for visual effect
                            if (line.startsWith('# ')) {
                                return <h1 key={i} className="text-2xl font-bold text-purple-300 mt-6">{line.substring(2)}</h1>;
                            } else if (line.startsWith('## ')) {
                                return <h2 key={i} className="text-xl font-semibold text-blue-300 mt-5">{line.substring(3)}</h2>;
                            } else if (line.startsWith('### ')) {
                                return <h3 key={i} className="text-lg font-medium text-cyan-300 mt-4">{line.substring(4)}</h3>;
                            } else if (line.startsWith('- ')) {
                                return <div key={i} className="flex"><span className="text-purple-400 mr-2">•</span><p className="text-gray-300">{line.substring(2)}</p></div>;
                            } else if (line.startsWith('**')) {
                                const content = line.replace(/\*\*/g, '');
                                return <p key={i} className="font-bold text-white">{content}</p>;
                            } else if (line.startsWith('_')) {
                                const content = line.replace(/_/g, '');
                                return <p key={i} className="italic text-gray-300">{content}</p>;
                            } else if (line.trim() === '---') {
                                return <hr key={i} className="border-t border-purple-700/30 my-4" />;
                            } else if (line.trim() === '') {
                                return <div key={i} className="h-4"></div>;
                            } else {
                                return <p key={i} className="text-gray-300">{line}</p>;
                            }
                        })}
                    </div>
                </div>

                {/* Fake Minimap */}
                <div className="minimap hidden md:block w-16 py-4 bg-[#191828] border-l border-purple-700/30">
                    <div className="minimap-content h-full px-2">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="h-1 mb-1 rounded bg-gray-600/20"></div>
                        ))}
                        <div className="h-1 mb-1 rounded bg-blue-400/40"></div>
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="h-1 mb-1 rounded bg-gray-600/20"></div>
                        ))}
                        <div className="h-1 mb-1 rounded bg-blue-400/40"></div>
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="h-1 mb-1 rounded bg-gray-600/20"></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div className="status-bar flex items-center justify-between bg-[#181825] p-2 border-t border-purple-700/30 text-xs text-gray-400">
                <div className="flex items-center">
                    <span className="mr-4">Markdown</span>
                    <span>UTF-8</span>
                </div>
                <div>
                    Last Updated: 2025-03-28 21:33:44
                </div>
            </div>
        </motion.div>
    )
}