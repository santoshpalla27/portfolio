
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundDecor from './components/BackgroundDecor';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <BackgroundDecor />
      <Navbar />
      <main className="relative flex flex-col min-h-screen">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
