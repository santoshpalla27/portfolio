
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundDecor from './components/BackgroundDecor';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <BackgroundDecor />
      <Navbar />
      <main className="relative flex flex-col min-h-screen">
        <Hero />
      </main>
      
      {/* Simple Footer for completeness and responsiveness anchor */}
      <footer className="w-full py-8 border-t border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/50 backdrop-blur-sm mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} DevOps.Arch. Designed with precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
