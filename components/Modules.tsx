import React from 'react';
import { Cpu, Layers, Activity, Radio, Shield, Globe } from 'lucide-react';

const moduleData = [
  { id: '01', title: 'Kernel logic', desc: 'Core operational substrate for low-latency command execution.', icon: Cpu },
  { id: '02', title: 'Signal flux', desc: 'High-frequency data streaming with encrypted packet-layer protocols.', icon: Radio },
  { id: '03', title: 'Mesh Layer', desc: 'Multi-threaded organic interfacing for seamless biomechanical sync.', icon: Layers },
  { id: '04', title: 'Global apex', desc: 'Distributed node network providing 99.9% uptime across all sectors.', icon: Globe },
  { id: '05', title: 'Risk Protocol', desc: 'Real-time threat detection and synthetic redundancy deployment.', icon: Shield },
  { id: '06', title: 'Flux Telemetry', desc: 'Advanced analytics for live system performance monitoring.', icon: Activity },
];

export const Modules: React.FC = () => {
  return (
    <section id="modules" className="py-24 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-gadget-accent"></div>
              <span className="text-[10px] font-mono font-bold text-gadget-accent uppercase tracking-[0.4em]">Integrated_Systems</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">Core_Modules</h2>
          </div>
          <p className="max-w-md text-sm font-mono text-gadget-label uppercase leading-relaxed">
            Choose your interface parameters. Each module is optimized for high-pressure industrial and digital environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moduleData.map((item) => (
            <div key={item.id} className="group relative p-8 bg-black/40 backdrop-blur-md rounded-3xl bevel-out border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:bg-black/60 cursor-pointer">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bevel-in rounded-xl bg-black/50 flex items-center justify-center text-gadget-accent group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <span className="text-3xl font-black text-white/5 font-display group-hover:text-gadget-accent/10 transition-colors">{item.id}</span>
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-gadget-accent transition-colors">{item.title}</h3>
              <p className="text-xs text-gray-400 font-mono leading-relaxed uppercase">{item.desc}</p>
              
              {/* Card Decoration */}
              <div className="absolute bottom-6 right-6 flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-gadget-accent opacity-20 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gadget-accent opacity-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};