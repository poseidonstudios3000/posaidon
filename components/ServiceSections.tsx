import React from 'react';
import { Film, Users, Map, Cpu, ArrowRight } from 'lucide-react';

const SectionHeader = ({ title, subtitle, icon: Icon }: any) => (
  <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-px bg-gadget-accent"></div>
        <span className="text-[10px] font-mono font-bold text-gadget-accent uppercase tracking-[0.4em]">{subtitle}</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter flex items-center gap-4">
        {Icon && <Icon className="text-gadget-accent/50 mb-2" size={48} />}
        {title}
      </h2>
    </div>
  </div>
);

export const ContentSection = () => (
  <section id="content" className="py-24 border-t border-white/5 relative z-10">
    <div className="container mx-auto px-6 md:px-12">
        <SectionHeader title="Content" subtitle="Generative_Media" icon={Film} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-black/40 backdrop-blur-md rounded-3xl bevel-out border border-white/5 group hover:bg-black/50 transition-colors">
                <h3 className="text-2xl font-black text-white uppercase mb-4">Hyper-Real Narratives</h3>
                <p className="text-sm font-mono text-gadget-label mb-6 leading-relaxed">
                    Automated script-to-screen pipelines utilizing the latest LLMs and diffusion models. We generate high-fidelity video content that resonates with human emotion while optimizing for algorithmic reach.
                </p>
                <div className="w-full h-48 rounded-xl bg-white/5 overflow-hidden relative border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center"></div>
                </div>
            </div>
             <div className="p-8 bg-black/40 backdrop-blur-md rounded-3xl bevel-out border border-white/5 group hover:bg-black/50 transition-colors">
                <h3 className="text-2xl font-black text-white uppercase mb-4">Dynamic Copywriting</h3>
                <p className="text-sm font-mono text-gadget-label mb-6 leading-relaxed">
                    Real-time adaptive copy generation that mutates based on user demographic and engagement metrics. Your brand voice, amplified and personified across every channel.
                </p>
                 <div className="flex flex-col gap-3 mt-8 p-6 bg-black/50 rounded-xl border border-white/5 font-mono text-xs text-gadget-accent">
                    <div>> ANALYZING_AUDIENCE_METRICS...</div>
                    <div>> GENERATING_VARIANT_A...</div>
                    <div className="text-white">> OPTIMIZATION_COMPLETE</div>
                 </div>
            </div>
        </div>
    </div>
  </section>
);

export const AvatarsSection = () => (
   <section id="avatars" className="py-24 border-t border-white/5 relative z-10">
    <div className="container mx-auto px-6 md:px-12">
        <SectionHeader title="Avatars" subtitle="Digital_Identity" icon={Users} />
        <div className="relative p-10 rounded-[40px] bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden bevel-out">
             <div className="absolute top-0 right-0 p-12 opacity-20 pointer-events-none">
                <Users size={200} className="text-white" />
             </div>
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-3xl font-black text-white uppercase mb-6">Synthetic Influencers</h3>
                    <p className="text-gray-400 font-mono text-sm leading-loose mb-8">
                        Deploy brand ambassadors that never sleep. Our rigging pipeline creates photorealistic digital humans capable of real-time interaction, live streaming, and cross-platform presence.
                    </p>
                    <button className="flex items-center gap-3 text-gadget-accent font-black uppercase tracking-widest text-xs hover:text-white transition-colors">
                        View Model Roster <ArrowRight size={14} />
                    </button>
                </div>
                 <div className="h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-screen transition-transform duration-700 group-hover:scale-105"></div>
                    <div className="w-24 h-24 rounded-full border-2 border-gadget-accent/50 flex items-center justify-center relative">
                        <div className="w-20 h-20 rounded-full bg-gadget-accent/20 animate-pulse"></div>
                    </div>
                 </div>
             </div>
        </div>
    </div>
  </section>
);

export const GeoSection = () => (
  <section id="geo" className="py-24 border-t border-white/5 relative z-10">
    <div className="container mx-auto px-6 md:px-12">
         <SectionHeader title="SEO/GEO" subtitle="Spatial_Computing" icon={Map} />
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 p-8 bg-black/40 backdrop-blur-md rounded-3xl bevel-out border border-white/5 min-h-[300px] flex flex-col justify-end relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 transition-opacity duration-500 group-hover:opacity-40"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                 <div className="relative z-10">
                    <h3 className="text-2xl font-black text-white uppercase mb-2">Location Intelligence</h3>
                    <p className="text-sm font-mono text-gray-400">Targeting audiences based on hyper-local behavioral patterns and movement data.</p>
                 </div>
            </div>
            <div className="p-8 bg-black/40 backdrop-blur-md rounded-3xl bevel-out border border-white/5 flex flex-col justify-center">
                 <div className="text-gadget-accent text-4xl font-black mb-2">98.4%</div>
                 <div className="text-xs font-mono text-white uppercase tracking-widest mb-4">Precision Accuracy</div>
                 <p className="text-xs text-gray-500 font-mono">Our GEO-mesh network ensures your message lands exactly where your audience stands physically.</p>
            </div>
         </div>
    </div>
  </section>
);

export const CustomSection = () => (
  <section id="custom" className="py-24 border-t border-white/5 relative z-10">
    <div className="container mx-auto px-6 md:px-12">
        <SectionHeader title="Custom" subtitle="Bespoke_Architecture" icon={Cpu} />
        <div className="bg-gadget-surface/50 backdrop-blur-xl border border-white/10 p-12 rounded-[2rem] text-center bevel-in relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gadget-accent to-transparent opacity-50"></div>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">Build the Impossible</h3>
            <p className="max-w-2xl mx-auto text-gray-400 font-mono mb-10 text-sm md:text-base">
                Requires a solution that doesn't exist yet? Our R&D division specializes in custom neural architectures, proprietary dataset training, and hardware-accelerated inference engines.
            </p>
            <button className="px-12 py-5 bg-white text-black font-black uppercase tracking-[0.2em] rounded-lg hover:bg-gadget-accent transition-colors duration-300 bevel-out shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Initialize Project
            </button>
        </div>
    </div>
  </section>
);