
import React from 'react';
import Terminal from './Terminal';
import FloatingBadge from './FloatingBadge';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24 pt-28 sm:pt-32 lg:pt-40 xl:pt-48">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-20 items-center max-w-7xl mx-auto">
        {/* Left Column: Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Open to new opportunities
          </div>
          
          <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Building Resilient <br className="hidden sm:block" />
            <span className="text-gradient">Cloud Infrastructure</span>
          </h1>
          
          <p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-slate-400 lg:mx-0 leading-relaxed">
            I bridge the gap between development and operations with scalable AWS architectures, robust CI/CD pipelines, and automated security compliance.
          </p>
          
          <div className="mt-4 sm:mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start w-full">
            <button className="group flex h-14 w-full sm:w-auto max-w-[320px] sm:max-w-none cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 text-base font-bold text-white shadow-xl shadow-indigo-500/25 transition-all hover:-translate-y-1 hover:shadow-indigo-500/40 active:scale-95 hover:from-indigo-600 hover:to-indigo-600">
              <span>View Projects</span>
              <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button className="flex h-14 w-full sm:w-auto max-w-[320px] sm:max-w-none cursor-pointer items-center justify-center gap-2 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 px-8 text-base font-bold text-gray-700 dark:text-white shadow-sm transition-all hover:bg-black/10 dark:hover:bg-white/10 active:scale-95 backdrop-blur-sm">
              <span className="material-symbols-outlined text-xl">download</span>
              <span>Resume</span>
            </button>
          </div>
          
          {/* Tech Stack Icons */}
          <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:justify-start grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {[
              { label: 'AWS', icon: 'cloud_queue' },
              { label: 'Kubernetes', icon: 'hub' },
              { label: 'Terraform', icon: 'polyline' },
              { label: 'Docker', icon: 'layers' }
            ].map((tech) => (
              <div key={tech.label} className="flex items-center gap-2 group transition-transform hover:scale-110" title={tech.label}>
                <span className="material-symbols-outlined text-3xl sm:text-4xl text-gray-800 dark:text-white">{tech.icon}</span>
                <span className="font-bold text-sm hidden sm:block text-gray-600 dark:text-slate-300">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Elements */}
        <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[500px] lg:max-w-none order-1 lg:order-2">
          {/* Enhanced Glows */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[60px] sm:blur-[100px] dark:bg-indigo-500/20"></div>
          <div className="absolute left-1/3 top-1/4 -z-10 h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[80px] sm:blur-[120px]"></div>
          
          <div className="relative p-2 sm:p-0">
            <Terminal />

            {/* Badges */}
            <FloatingBadge 
              icon="dns" 
              title="Uptime" 
              value="99.99%" 
              valueColor="text-green-600 dark:text-green-400" 
              bgColor="from-orange-400 to-red-500"
              className="top-[-20px] -right-2 sm:-right-8 lg:right-0 xl:-right-12 animate-float-delayed"
            />
            
            <FloatingBadge 
              icon="security" 
              title="Security" 
              value="Automated" 
              valueColor="text-indigo-600 dark:text-indigo-400" 
              bgColor="from-blue-400 to-indigo-500"
              className="bottom-[-20px] -left-2 sm:-left-8 lg:-left-4 xl:-left-12 animate-float"
              delay="1.5s"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
