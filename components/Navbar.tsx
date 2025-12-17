
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-blue-500 to-indigo-700 text-white shadow-lg shadow-indigo-500/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-indigo-500/50 group-hover:rotate-[10deg]">
              <span className="material-symbols-outlined text-2xl font-light">cloud_done</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
              <span className="font-display lowercase">santosh</span>
              <span className="text-indigo-500 dark:text-indigo-400">.exe</span>
            </h2>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <a 
                key={item.name}
                className="text-sm font-medium text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-white transition-colors" 
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={toggleTheme}
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 transition-all active:scale-95"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-[20px] transition-transform duration-500 group-hover:rotate-12">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <button className="hidden sm:flex h-11 items-center justify-center rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10 dark:shadow-white/5">
              Hire Me
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex md:hidden items-center justify-center rounded-xl p-2 text-gray-600 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-72 bg-white dark:bg-surface-dark shadow-2xl transition-transform duration-500 ease-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col p-8 pt-24 gap-6">
            {navLinks.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-white p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="mt-4 flex h-14 w-full items-center justify-center rounded-xl bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-500/20 active:scale-95">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
