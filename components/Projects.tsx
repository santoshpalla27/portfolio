import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "CloudCost Optimiser",
        description: "An automated cost optimization engine for AWS that identifies idle resources and suggests rightsizing opportunities using machine learning.",
        tags: ["Python", "AWS Lambda", "Terraform", "React"],
        links: { demo: "#", code: "#" },
        gradient: "from-blue-500 to-indigo-500"
    },
    {
        title: "KubeGuard Security Suite",
        description: "A Kubernetes admission controller and security scanner that prevents misconfigurations and enforces security policies in real-time.",
        tags: ["Go", "Kubernetes", "OPA Gatekeeper", "Helm"],
        links: { demo: "#", code: "#" },
        gradient: "from-green-500 to-emerald-500"
    },
    {
        title: "DevOps Dashboard",
        description: "A unified internal developer platform (IDP) aggregating metrics from Jira, GitLab, and ArgoCD to track DORA metrics.",
        tags: ["Next.js", "GraphQL", "PostgreSQL", "Docker"],
        links: { demo: "#", code: "#" },
        gradient: "from-purple-500 to-pink-500"
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 lg:py-32 relative bg-white dark:bg-background-dark overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                        >
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600 dark:text-gray-400"
                        >
                            Real-world solutions for complex infrastructure challenges.
                        </motion.p>
                    </div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                    >
                        View all projects <ArrowUpRight className="w-5 h-5" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col h-full bg-gray-50 dark:bg-white/5 rounded-3xl overflow-hidden border border-black/5 dark:border-white/5 hover:border-primary/20 transition-colors"
                        >
                            {/* Image Placeholder with Gradient */}
                            <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl inline-flex">
                                        <Github className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <a href={project.links.demo} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-600 transition-colors">
                                            Live Demo <ExternalLink className="w-4 h-4" />
                                        </a>
                                        <a href={project.links.code} className="flex-none p-3 rounded-xl bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 transition-colors text-gray-900 dark:text-white">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center md:hidden">
                    <button className="flex items-center gap-2 text-primary font-semibold">
                        View all projects <ArrowUpRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
