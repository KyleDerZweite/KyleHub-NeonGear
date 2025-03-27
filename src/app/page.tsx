'use client'; // Add this at the top to mark as Client Component
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
    const [currentYear, setCurrentYear] = useState(2025);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());

        // Optional: Add interactive animations for terminal typing effect
        const typingElements = document.querySelectorAll('.typing-effect');
        typingElements.forEach((element) => {
            const text = element.textContent || '';
            element.textContent = '';
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 50);
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white font-tech relative overflow-hidden">
            <Head>
                <title>KyleHub.dev - Coding the Future with Retro Flair</title>
                <meta name="description" content="Where modern technology meets steampunk aesthetics and cyberpunk innovation" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="cyber-grid"></div>
                <div className="technical-blueprint"></div>
                <div className="steampunk-gear gear-1"></div>
                <div className="steampunk-gear gear-2"></div>
                <div className="steampunk-gear gear-3"></div>
                <div className="circuit-lines"></div>
            </div>

            {/* Small Interactive Gears */}
            <div className="steampunk-gear small-gear-1"></div>
            <div className="steampunk-gear small-gear-2"></div>

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

                    {/* System Metrics Section */}
                    <section className="mt-20 py-10 border-t border-purple-500/30">
                        <h3 className="text-2xl font-bold mb-8 text-center text-glow-subtle">System Metrics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* CPU Usage Gauge */}
                            <div className="tech-card p-5 rounded-lg">
                                <h4 className="text-center font-mono text-sm text-gray-400 mb-2">CPU UTILIZATION</h4>
                                <div className="gauge-container">
                                    <div className="gauge-outer">
                                        <div className="gauge-inner" style={{width: '68%'}}></div>
                                    </div>
                                    <div className="text-center font-mono text-lg mt-2">68%</div>
                                </div>
                                <div className="text-xs text-gray-500 mt-3 font-mono">
                                    <div className="flex justify-between">
                                        <span>THREADS: 16</span>
                                        <span>TEMP: 62°C</span>
                                    </div>
                                </div>
                            </div>

                            {/* Memory Status */}
                            <div className="tech-card p-5 rounded-lg">
                                <h4 className="text-center font-mono text-sm text-gray-400 mb-2">MEMORY ALLOCATION</h4>
                                <div className="memory-bars">
                                    {[85, 72, 63, 91, 45, 77, 81, 55].map((value, index) => (
                                        <div key={index} className="memory-bar-container">
                                            <div
                                                className="memory-bar"
                                                style={{height: `${value}%`}}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-xs text-gray-500 mt-3 font-mono">
                                    <div className="flex justify-between">
                                        <span>USED: 12.4 GB</span>
                                        <span>TOTAL: 16 GB</span>
                                    </div>
                                </div>
                            </div>

                            {/* Network Activity */}
                            <div className="tech-card p-5 rounded-lg">
                                <h4 className="text-center font-mono text-sm text-gray-400 mb-2">NETWORK ACTIVITY</h4>
                                <div className="network-graph">
                                    <svg viewBox="0 0 100 30" className="w-full h-16">
                                        <polyline
                                            points="0,30 5,25 10,27 15,20 20,15 25,18 30,10 35,15 40,12 45,5 50,8 55,13 60,7 65,10 70,5 75,15 80,10 85,20 90,15 95,8 100,12"
                                            fill="none"
                                            stroke="rgba(168, 85, 247, 0.7)"
                                            strokeWidth="1"
                                        />
                                        <polyline
                                            points="0,30 5,27 10,29 15,25 20,28 25,24 30,26 35,22 40,23 45,25 50,20 55,22 60,19 65,25 70,18 75,23 80,21 85,24 90,19 95,22 100,20"
                                            fill="none"
                                            stroke="rgba(59, 130, 246, 0.7)"
                                            strokeWidth="1"
                                        />
                                    </svg>
                                    <div className="text-xs text-gray-500 mt-1 font-mono">
                                        <div className="flex justify-between">
                                            <span>IN: 2.4 MB/s</span>
                                            <span>OUT: 1.8 MB/s</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Discord Widget Section */}
                    <section className="mt-20 py-10 border-t border-purple-500/30">
                        <h3 className="text-2xl font-bold mb-8 text-center text-glow-subtle">Join Our Community</h3>
                        <div className="discord-widget-container mx-auto max-w-md h-[500px] bg-gray-800/50 border border-purple-500/30 rounded-lg p-3">
                            {/* Discord Widget Placeholder - Replace with your Discord widget embed code */}
                            <div className="flex items-center justify-center h-full overflow-hidden rounded-md">
                                <iframe
                                    src="https://discord.com/widget?id=1354840927218434078&theme=dark"
                                    width="100%"
                                    height="100%"
                                    allowTransparency="true"
                                    frameBorder="0"
                                    className="rounded-md"
                                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
                                </iframe>
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
                        <p className="text-gray-400">&copy; {currentYear} Kyle</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="https://github.com/KyleDerZweite/KyleHub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">GitHub</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}