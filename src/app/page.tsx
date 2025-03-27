import React from 'react';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white font-tech relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="cyber-grid"></div>
                <div className="steampunk-gear gear-1"></div>
                <div className="steampunk-gear gear-2"></div>
                <div className="steampunk-gear gear-3"></div>
            </div>

            {/* Neon Lines */}
            <div className="absolute top-0 left-0 w-full h-1 cyber-line"></div>
            <div className="absolute top-0 right-0 h-full w-1 cyber-line vertical"></div>

            {/* Main Content */}
            <div className="relative z-10">
                <header className="p-6 md:p-8 flex justify-between items-center border-b border-purple-500/30">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                            <span className="font-bold text-xl">K</span>
                        </div>
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">KyleHub.dev</h1>
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Projects</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
                        </ul>
                    </nav>
                </header>

                <main className="container mx-auto px-6 py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-glow">
                                Coding the <span className="text-purple-400">Future</span> with Retro Flair
                            </h2>
                            <p className="text-xl text-gray-300">
                                Where modern technology meets steampunk aesthetics and cyberpunk innovation.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="cyber-button bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-3 rounded">
                                    Explore
                                </button>
                                <button className="steampunk-button px-8 py-3 rounded border-2 border-amber-600 text-amber-500 hover:text-amber-400">
                                    Connect
                                </button>
                            </div>
                        </div>

                        <div className="tech-card p-6 rounded-lg border border-purple-500/30 bg-black/60 backdrop-blur-sm">
                            <div className="terminal-header flex items-center mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                <span className="text-gray-400 text-sm">terminal@kylehub.dev</span>
                            </div>
                            <div className="font-mono text-green-400 space-y-2">
                                <p>$ <span className="typing-effect">Welcome to KyleHub.dev</span></p>
                                <p>$ <span className="typing-effect">Solving today's challenges with tomorrow's code</span></p>
                                <p className="text-purple-300">$ <span className="typing-effect">Code Riddle:</span></p>
                                <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto text-sm">
{`function mystery(n) {
  return n === 0 
    ? 1 
    : n * mystery(n - 1);
}

// What concept does this demonstrate?
// And what's mystery(5)?`}
                </pre>
                                <p className="text-gray-400 text-sm">// Hover here for answer: <span className="answer-reveal">Recursion; 120 (5 factorial)</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Discord Widget Section */}
                    <section className="mt-20 py-10 border-t border-purple-500/30">
                        <h3 className="text-2xl font-bold mb-8 text-center text-glow-subtle">Join Our Community</h3>
                        <div className="discord-widget-container mx-auto max-w-md h-[500px] bg-gray-800/50 border border-purple-500/30 rounded-lg">
                            {/* Discord Widget Placeholder - Replace with your Discord widget embed code */}
                            <div className="flex items-center justify-center h-full">
                                <p className="text-center text-gray-400">
                                    [Discord Widget Goes Here]<br />
                                    <span className="text-sm">Paste your Discord widget embed code here</span>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack Section */}
                    <section className="mt-20">
                        <h3 className="text-2xl font-bold mb-8 text-center text-glow-subtle">Powered By</h3>
                        <div className="flex flex-wrap justify-center gap-6 items-center">
                            <div className="tech-badge">Next.js</div>
                            <div className="tech-badge">TypeScript</div>
                            <div className="tech-badge">Tailwind CSS</div>
                            <div className="tech-badge">React</div>
                        </div>
                    </section>
                </main>

                <footer className="border-t border-purple-500/30 p-8 mt-16">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400">&copy; {new Date().getFullYear()} KyleHub.dev. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">GitHub</a>
                            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">LinkedIn</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}