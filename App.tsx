import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-gadget-accent selection:text-black transition-all duration-1000 dark bg-common bg-obsidian-ether">
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero showCircuitry={false} />
      </main>
      <footer className="py-8 px-6 border-t border-white/10 bg-black/60 backdrop-blur-md relative z-20">
        <div className="container mx-auto flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-xs font-mono font-bold text-white uppercase tracking-widest">
            POSAIDON STUDIOS AI Marketing Agency Dubai & worldwide
          </p>
          <p className="text-[10px] font-mono text-gadget-label uppercase">
            Copyright 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;