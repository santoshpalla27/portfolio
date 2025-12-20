import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // specific requirement: "section to send gmail"
        // encoding values for URL
        const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.subject}`);
        const body = encodeURIComponent(`Hi Santosh,\n\nMy name is ${formData.name}.\n\n${formData.message}`);
        const email = "santos@example.com"; // Placeholder - would be real email

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

        window.open(gmailUrl, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-20 lg:py-32 bg-white dark:bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Details */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
                            >
                                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Connect</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-lg text-gray-600 dark:text-gray-400 mb-12"
                            >
                                Whether you have a question about my stack, want to discuss a potential project, or just want to say hi, my inbox is always open.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-8"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                                        <p className="text-gray-600 dark:text-gray-400">santos@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                                        <p className="text-gray-600 dark:text-gray-400">Bangalore, India</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-12 lg:mt-0"
                        >
                            <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">Socials</p>
                            <div className="flex gap-4">
                                {[
                                    { icon: Github, href: "#" },
                                    { icon: Linkedin, href: "#" },
                                    { icon: Twitter, href: "#" }
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className="p-3 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-white hover:bg-black dark:hover:bg-white/20 transition-all duration-300"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-lg backdrop-blur-sm">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>

                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder-gray-400 transition-all outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder-gray-400 transition-all outline-none"
                                        placeholder="Project Collaboration"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder-gray-400 transition-all outline-none resize-none"
                                        placeholder="Hi, I'd like to discuss..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-primary to-indigo-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all"
                                >
                                    Send via Gmail <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Footer Text - Integrated */}
            <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                <p className="text-xs text-gray-400 dark:text-gray-600">
                    &copy; {new Date().getFullYear()} Santosh.exe
                </p>
            </div>
        </section>
    );
};

export default Contact;
