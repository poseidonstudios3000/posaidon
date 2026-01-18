import React from 'react';
import { Search, MousePointerClick, BarChart3, ChevronRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  const auditPoints = [
    {
      icon: Search,
      title: "SEO/GEO Audit",
      text: "Identify ranking gaps and \"Answer Engine\" visibility."
    },
    {
      icon: MousePointerClick,
      title: "UX & Funnel Audit",
      text: "Pinpoint where users drop off and lose interest."
    },
    {
      icon: BarChart3,
      title: "CPL/CPO Analysis",
      text: "See if your ad spend is actually profitable."
    }
  ];

  return (
    <section className="w-full h-screen snap-start snap-always flex flex-col items-center justify-center relative z-10 overflow-hidden border-t border-white/5 bg-black/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gadget-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 text-center relative flex-grow flex flex-col justify-center py-12">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none">
            Stop guessing. <br />
            <span className="text-gadget-accent text-glow">Start knowing.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Your current strategy has leaks. We find them. We offer comprehensive <span className="text-white font-medium">Deep-Dive Audits</span> to identify exactly where you are losing money or traffic.
          </p>
        </div>

        {/* Audit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {auditPoints.map((point, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-2xl flex flex-col items-center hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-gadget-accent/10 flex items-center justify-center text-gadget-accent mb-4 group-hover:scale-110 transition-transform">
                <point.icon size={24} />
              </div>
              <h3 className="text-white font-bold uppercase tracking-wide mb-2 text-sm">{point.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          
          {/* BEAM BUTTON START */}
          <button className="relative group min-w-[260px]">
            <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-transparent via-gadget-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow blur-sm"></div>
            <span className="absolute -inset-[1px] rounded-lg overflow-hidden">
                <span className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#39ff14_50%,#0000_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </span>
            
            <div className="relative px-8 py-5 bg-[#0f1113] rounded-lg border border-white/20 group-hover:border-transparent transition-colors flex items-center justify-center">
              <span className="font-black text-lg uppercase tracking-[0.2em] text-white group-hover:text-gadget-accent group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.8)] transition-all flex items-center gap-3">
                REQUEST AN AUDIT
                <ChevronRight size={18} />
              </span>
            </div>
          </button>
          {/* BEAM BUTTON END */}

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