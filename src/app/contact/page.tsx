'use client'

import {useState} from 'react'
import {motion} from 'framer-motion'
import {FiMail, FiMap, FiPhone} from 'react-icons/fi'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setSubmitResult({
                success: true,
                message: "Thanks for your message! We'll get back to you soon."
            })
            setIsSubmitting(false)
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })
        }, 1500)
    }

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
                Get In Touch
              </span>
                        </h1>
                        <div
                            className="h-1 w-32 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-10 rounded-full"/>
                        <p className="text-xl text-gray-300 mb-8">
                            Have a question or want to collaborate? Drop us a message!
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                            className="lg:col-span-2"
                        >
                            <div className="p-8 bg-cyberpunk-dark/80 rounded-lg border border-gray-800">
                                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                                {submitResult && (
                                    <div
                                        className={`mb-6 p-4 rounded-md ${submitResult.success ? 'bg-green-900/50 text-green-400 border border-green-800' : 'bg-red-900/50 text-red-400 border border-red-800'}`}>
                                        {submitResult.message}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="name"
                                                   className="block text-sm font-medium text-gray-400 mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email"
                                                   className="block text-sm font-medium text-gray-400 mb-2">
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="subject"
                                               className="block text-sm font-medium text-gray-400 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message"
                                               className="block text-sm font-medium text-gray-400 mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            placeholder="Tell us what you need..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`btn btn-primary w-full md:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <div className="p-8 bg-cyberpunk-dark/80 rounded-lg border border-gray-800 h-full">
                                <h2 className="text-2xl font-bold mb-6">Contact Info</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <FiMail className="h-6 w-6 text-primary-500"/>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-white">Email</h3>
                                            <p className="mt-1 text-gray-400">
                                                <a href="mailto:info@kylehub.dev" className="hover:text-primary-400">
                                                    info@kylehub.dev
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <FiPhone className="h-6 w-6 text-primary-500"/>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-white">Phone</h3>
                                            <p className="mt-1 text-gray-400">
                                                <a href="tel:+11234567890" className="hover:text-primary-400">
                                                    +1 (123) 456-7890
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <FiMap className="h-6 w-6 text-primary-500"/>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-white">Location</h3>
                                            <p className="mt-1 text-gray-400">
                                                123 Cyberpunk Street<br/>
                                                New Neo City, NC 10101
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-6 border-t border-gray-800">
                                    <h3 className="text-lg font-medium text-white mb-4">Operating Hours</h3>
                                    <div className="space-y-2 text-gray-400">
                                        <p>Monday - Friday: 9am - 6pm</p>
                                        <p>Saturday: 10am - 4pm</p>
                                        <p>Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
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
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-500">
                Connect With Us on Social Media
              </span>
                        </h2>
                        <div className="flex justify-center space-x-8">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}