import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import {
    Server,
    Cloud,
    Box,
    Shield,
    Terminal,
    Cpu,
    GitBranch,
    Database,
    Globe
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const skills = [
    { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
    { name: 'Kubernetes', icon: Globe, color: 'text-blue-400' },
    { name: 'Terraform', icon: Box, color: 'text-purple-400' },
    { name: 'CI/CD', icon: GitBranch, color: 'text-green-400' },
    { name: 'Observability', icon: Database, color: 'text-cyan-400' }, // Mapping roughly to monitoring/data
    { name: 'Security', icon: Shield, color: 'text-red-400' },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
};

const floatingCardVariants: Variants = {
    animate: (i: number) => ({
        y: [0, -15, 0],
        transition: {
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
        },
    }),
};

const AboutMe: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" ref={ref} className="py-20 lg:py-32 relative overflow-hidden bg-white dark:bg-background-dark">
            {/* Background Grid - low opacity */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="flex flex-col gap-8"
                    >
                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                                I design, automate, and scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">production-grade</span> cloud systems.
                            </h2>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                            <p>
                                With a deep focus on <strong>reliability</strong>, <strong>scalability</strong>, and <strong>developer experience</strong>, I build infrastructure that solves real business problems.
                            </p>
                            <p>
                                I don't just deploy resources; I engineer resilient platforms using modern DevOps practices. From orchestrating Kubernetes clusters to defining infrastructure-as-code, my goal is to make deployment boring and uptime guaranteed.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-transparent hover:border-primary/30 transition-all duration-300 cursor-default"
                                >
                                    <skill.icon className={cn("w-4 h-4 transition-colors duration-300 group-hover:text-primary", skill.color)} />
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end">
                        {/* Abstract Network/Graph Background */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 400 400">
                                <motion.path
                                    d="M50,200 Q200,50 350,200 T50,200"
                                    stroke="url(#grad1)"
                                    strokeWidth="1"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{ duration: 3, ease: "easeInOut" }}
                                />
                                <motion.path
                                    d="M50,200 Q200,350 350,200 T50,200"
                                    stroke="url(#grad1)"
                                    strokeWidth="1"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                                    transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
                                />
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: "#6366f1", stopOpacity: 0.2 }} />
                                        <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 0.2 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Floating Cards */}
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Center Core */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                            >
                                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[1px] shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]">
                                    <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                                        <Server className="w-10 h-10 text-white" />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Orbiting Elements */}
                            <motion.div
                                custom={1}
                                variants={floatingCardVariants}
                                animate="animate"
                                className="absolute top-[10%] right-[15%] z-10"
                            >
                                <div className="glass-card p-4 rounded-xl flex items-center gap-3 w-40 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="p-2 rounded-lg bg-orange-500/10">
                                        <Cloud className="w-5 h-5 text-orange-500" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400">Provider</span>
                                        <span className="text-sm font-semibold dark:text-gray-200">AWS</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                custom={2}
                                variants={floatingCardVariants}
                                animate="animate"
                                className="absolute bottom-[20%] left-[5%] z-30"
                            >
                                <div className="glass-card p-4 rounded-xl flex items-center gap-3 w-44 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="p-2 rounded-lg bg-blue-500/10">
                                        <Globe className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400">Orchestration</span>
                                        <span className="text-sm font-semibold dark:text-gray-200">Kubernetes</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                custom={3}
                                variants={floatingCardVariants}
                                animate="animate"
                                className="absolute bottom-[10%] right-[5%] z-10"
                            >
                                <div className="glass-card p-4 rounded-xl flex items-center gap-3 w-36 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="p-2 rounded-lg bg-purple-500/10">
                                        <Box className="w-5 h-5 text-purple-500" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400">IaC</span>
                                        <span className="text-sm font-semibold dark:text-gray-200">Terraform</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                custom={0}
                                variants={floatingCardVariants}
                                animate="animate"
                                className="absolute top-[20%] left-[0%] z-10"
                            >
                                <div className="glass-card p-4 rounded-xl flex items-center gap-3 w-36 hover:-translate-y-1 transition-transform duration-300">
                                    <div className="p-2 rounded-lg bg-green-500/10">
                                        <Terminal className="w-5 h-5 text-green-500" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400">Scripting</span>
                                        <span className="text-sm font-semibold dark:text-gray-200">Bash / Go</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
