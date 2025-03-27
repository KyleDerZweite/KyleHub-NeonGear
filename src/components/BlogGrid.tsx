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
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'The Future of Web Development',
        excerpt: 'Exploring how AI and new frameworks are reshaping the web development landscape.',
        date: 'March 20, 2025',
        image: '/images/blog-1.jpg',
        tags: ['AI', 'WebDev', 'Future']
    },
    {
        id: '2',
        title: 'Steampunk Aesthetics in Modern UI Design',
        excerpt: 'How vintage industrial elements can enhance digital interfaces.',
        date: 'March 15, 2025',
        image: '/images/blog-2.jpg',
        tags: ['UI/UX', 'Steampunk', 'Design']
    },
    {
        id: '3',
        title: 'Optimizing React Performance',
        excerpt: 'Best practices for creating lightning-fast React applications.',
        date: 'March 10, 2025',
        image: '/images/blog-3.jpg',
        tags: ['React', 'Performance', 'JavaScript']
    },
    {
        id: '4',
        title: 'The Art of Cyberpunk Typography',
        excerpt: 'Typography choices that create an authentic cyberpunk atmosphere.',
        date: 'March 5, 2025',
        image: '/images/blog-4.jpg',
        tags: ['Typography', 'Cyberpunk', 'Design']
    }
]

const BlogGrid = () => {
    return (
        <section id="featured" className="py-24 bg-cyberpunk-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
              Featured Articles
            </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Dive into our latest thoughts on technology, design, and the digital frontier.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
                                </div>
                                <div className="mt-4">
                                    <div className="flex gap-2 flex-wrap mb-2">
                                        {post.tags.map((tag) => (
                                            <span key={tag}
                                                  className="text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded">
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold group-hover:text-primary-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 mt-2 text-sm">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-4 flex justify-between items-center">
                                        <span className="text-xs text-gray-500">{post.date}</span>
                                        <span
                                            className="text-secondary-500 group-hover:translate-x-1 transition-transform">
                      Read more →
                    </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/blog" className="btn btn-secondary">
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BlogGrid