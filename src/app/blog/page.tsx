'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface BlogPost {
    id: string
    title: string
    excerpt: string
    date: string
    image: string
    tags: string[]
    readTime: string
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'The Future of Web Development',
        excerpt: 'Exploring how AI and new frameworks are reshaping the web development landscape.',
        date: 'March 20, 2025',
        image: '/images/blog-1.jpg',
        tags: ['AI', 'WebDev', 'Future'],
        readTime: '6 min read'
    },
    {
        id: '2',
        title: 'Steampunk Aesthetics in Modern UI Design',
        excerpt: 'How vintage industrial elements can enhance digital interfaces.',
        date: 'March 15, 2025',
        image: '/images/blog-2.jpg',
        tags: ['UI/UX', 'Steampunk', 'Design'],
        readTime: '5 min read'
    },
    {
        id: '3',
        title: 'Optimizing React Performance',
        excerpt: 'Best practices for creating lightning-fast React applications.',
        date: 'March 10, 2025',
        image: '/images/blog-3.jpg',
        tags: ['React', 'Performance', 'JavaScript'],
        readTime: '8 min read'
    },
    {
        id: '4',
        title: 'The Art of Cyberpunk Typography',
        excerpt: 'Typography choices that create an authentic cyberpunk atmosphere.',
        date: 'March 5, 2025',
        image: '/images/blog-4.jpg',
        tags: ['Typography', 'Cyberpunk', 'Design'],
        readTime: '4 min read'
    },
    {
        id: '5',
        title: 'Leveraging Tailwind CSS for Rapid UI Development',
        excerpt: 'How utility-first CSS is changing front-end development workflows.',
        date: 'February 28, 2025',
        image: '/images/blog-5.jpg',
        tags: ['CSS', 'Tailwind', 'Frontend'],
        readTime: '7 min read'
    },
    {
        id: '6',
        title: 'The Power of TypeScript in Large Projects',
        excerpt: 'Why TypeScript is essential for maintaining complex JavaScript codebases.',
        date: 'February 20, 2025',
        image: '/images/blog-6.jpg',
        tags: ['TypeScript', 'JavaScript', 'Best Practices'],
        readTime: '9 min read'
    }
]

export default function Blog() {
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
                Blog & Insights
              </span>
                        </h1>
                        <div
                            className="h-1 w-32 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-10 rounded-full"/>
                        <p className="text-xl text-gray-300 mb-8">
                            Thoughts, stories and ideas from the KyleHub universe
                        </p>
                    </motion.div>

                    <div className="mt-12">
                        <div className="flex flex-wrap gap-4 justify-center mb-12">
                            <button className="px-4 py-2 bg-primary-500 rounded-full text-sm font-medium text-white">All
                                Posts
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm font-medium text-gray-300 transition-colors">Design
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm font-medium text-gray-300 transition-colors">Development
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm font-medium text-gray-300 transition-colors">Technology
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm font-medium text-gray-300 transition-colors">Aesthetics
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => (
                                <motion.div
                                    key={post.id}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: index * 0.1}}
                                >
                                    <Link href={`/blog/${post.id}`} className="block group">
                                        <div className="relative overflow-hidden rounded-lg h-60">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div
                                                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
                                            <div className="absolute bottom-4 left-4 flex gap-2">
                                                {post.tags.slice(0, 2).map((tag) => (
                                                    <span key={tag}
                                                          className="text-xs bg-primary-500/30 text-primary-400 px-2 py-1 rounded">
                            {tag}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <div
                                                className="flex justify-between items-center text-sm text-gray-400 mb-2">
                                                <span>{post.date}</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                            <h3 className="text-xl font-semibold group-hover:text-primary-400 transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-400 mt-2">
                                                {post.excerpt}
                                            </p>
                                            <div
                                                className="mt-4 text-secondary-500 group-hover:translate-x-1 transition-transform">
                                                Read article →
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 flex justify-center">
                            <div className="inline-flex rounded-md">
                                <a href="#"
                                   className="px-4 py-2 bg-gray-800 text-gray-300 rounded-l-md hover:bg-gray-700">
                                    Previous
                                </a>
                                <a href="#" className="px-4 py-2 bg-primary-500 text-white">
                                    1
                                </a>
                                <a href="#" className="px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700">
                                    2
                                </a>
                                <a href="#" className="px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700">
                                    3
                                </a>
                                <a href="#"
                                   className="px-4 py-2 bg-gray-800 text-gray-300 rounded-r-md hover:bg-gray-700">
                                    Next
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}