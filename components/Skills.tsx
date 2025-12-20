import React from 'react';
import { motion } from 'framer-motion';
import {
    Cloud,
    Server,
    Terminal,
    Code,
    Database,
    Shield,
    Globe,
    Cpu,
    Layers
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const categories = [
    {
        title: "Cloud & Infrastructure",
        icon: Cloud,
        skills: ["AWS", "Azure", "Terraform", "Ansible", "Pulumi"],
        color: "bg-blue-500/10 text-blue-500",
        delay: 0.1
    },
    {
        title: "Containerization & Orchestration",
        icon: Layers,
        skills: ["Docker", "Kubernetes", "Helm", "Istio", "ArgoCD"],
        color: "bg-orange-500/10 text-orange-500",
        delay: 0.2
    },
    {
        title: "CI/CD & DevOps",
        icon: Terminal,
        skills: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI"],
        color: "bg-green-500/10 text-green-500",
        delay: 0.3
    },
    {
        title: "Monitoring & Observability",
        icon: Globe,
        skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "Splunk"],
        color: "bg-purple-500/10 text-purple-500",
        delay: 0.4
    },
    {
        title: "Security & Networking",
        icon: Shield,
        skills: ["Vault", "SonarQube", "WAF", "VPC Networking", "Zero Trust"],
        color: "bg-red-500/10 text-red-500",
        delay: 0.5
    },
    {
        title: "Scripting & Backend",
        icon: Code,
        skills: ["Python", "Go", "Bash", "Node.js", "TypeScript"],
        color: "bg-yellow-500/10 text-yellow-500",
        delay: 0.6
    }
];

const Skills: React.FC = () => {
    return (
        <section id="stack" className="py-20 lg:py-32 bg-gray-50 dark:bg-black/20">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
                    >
                        My Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400"
                    >
                        A curated list of tools and technologies I use to build resilient, scalable platforms.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: category.delay }}
                            className="group relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-black/5 dark:hover:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className={cn("inline-flex p-3 rounded-2xl mb-6 transition-transform group-hover:scale-110 duration-300", category.color)}>
                                <category.icon className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm font-medium rounded-lg bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-transparent group-hover:border-black/5 dark:group-hover:border-white/10 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
