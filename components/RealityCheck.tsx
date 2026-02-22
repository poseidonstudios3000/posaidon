import React from 'react';

export const RealityCheck: React.FC = () => {
  return (
    <section className="w-full h-screen snap-start snap-always flex items-center justify-center relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8 leading-tight">
            AI isn't the product. <br />
            <span className="text-gadget-accent text-glow">Your time is.</span>
          </h2>
          
          <p className="text-lg md:text-2xl text-gray-400 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            We don't sell tools. We sell the <span className="text-white font-bold">40 hours a week</span> you’re wasting on production. 
            POSAIDON integrates into your workflow to automate the boring stuff so you can focus on the big wins.
          </p>
        </div>
      </div>
    </section>
  );
};