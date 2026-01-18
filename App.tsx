import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/ServiceSections';
import { CallToAction } from './components/CallToAction';

const App: React.FC = () => {
  return (
    <div id="app-container" className="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth font-sans selection:bg-gadget-accent selection:text-black dark bg-common bg-obsidian-ether no-scrollbar">
      <Navbar />
      <main>
        <Hero showCircuitry={false} />
        <Services />
        <CallToAction />
      </main>
    </div>
  );
};

export default App;