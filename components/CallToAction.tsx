import React from 'react';

export const CallToAction: React.FC = () => {
  return (
    <section className="w-full h-screen snap-start snap-always flex flex-col items-center justify-center relative z-10 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gadget-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 text-center relative flex-grow flex flex-col justify-center">
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter mb-6">
          Ready to speed up?
        </h2>
        <p className="text-xl text-gray-400 font-mono mb-16">
          Let’s see where you’re wasting time.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* BEAM BUTTON START */}
          <button className="relative group min-w-[240px]">
            <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-transparent via-gadget-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow blur-sm"></div>
            {/* The marching ants / beam effect is achieved by the spin of a conic gradient or simpler CSS animation. Let's use a simpler masking technique for the border beam for broader compatibility without complex tailwind config changes */}
            <span className="absolute -inset-[1px] rounded-lg overflow-hidden">
                <span className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#39ff14_50%,#0000_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </span>
            
            <div className="relative px-8 py-5 bg-[#0f1113] rounded-lg border border-white/20 group-hover:border-transparent transition-colors flex items-center justify-center">
              <span className="font-black text-lg uppercase tracking-[0.2em] text-white group-hover:text-gadget-accent group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.8)] transition-all">
                Start The Audit
              </span>
            </div>
          </button>
          {/* BEAM BUTTON END */}

          {/* GHOST BUTTON START */}
          <button className="group relative px-8 py-5 text-lg font-black uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors">
            View Work
            <span className="absolute bottom-2 left-0 w-0 h-[2px] bg-gadget-accent group-hover:w-full transition-all duration-300 ease-out"></span>
          </button>
          {/* GHOST BUTTON END */}

        </div>
      </div>

      {/* Integrated Footer */}
      <footer className="w-full py-8 px-6 bg-transparent relative z-20 mt-auto">
        <div className="container mx-auto flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-xs font-mono font-bold text-white uppercase tracking-widest opacity-50">
            POSAIDON STUDIOS AI Performance Marketing Agency Dubai & worldwide
          </p>
          <p className="text-[10px] font-mono text-gadget-label uppercase">
            Copyright 2025
          </p>
        </div>
      </footer>
    </section>
  );
};