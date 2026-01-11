import React from 'react';
import { Settings, Zap, Terminal } from 'lucide-react';

export const SystemStatus: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-black/40 backdrop-blur-xl rounded-[40px] bevel-out overflow-hidden border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Control Panel (Left) */}
            <div className="lg:col-span-4 p-10 bg-white/5 border-b lg:border-b-0 lg:border-r border-black/40">
              <div className="space-y-12">
                <div>
                  <h4 className="text-xs font-mono font-bold text-gadget-label uppercase tracking-[0.3em] mb-6">Calibration_Knobs</h4>
                  <div className="flex gap-8">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-[#1a1d21] knob-shadow border border-white/5 flex items-center justify-center relative cursor-pointer group hover:border-gadget-accent/30 transition-colors">
                        <div className="w-1.5 h-1.5 bg-gadget-accent rounded-full absolute top-4 left-1/2 -translate-x-1/2 shadow-[0_0_8px_#39ff14]"></div>
                        <div className="absolute inset-4 rounded-full border border-black/20"></div>
                      </div>
                      <span className="block text-[8px] font-mono text-center mt-3 text-gadget-label uppercase">Freq_Bias</span>
                    </div>
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-[#1a1d21] knob-shadow border border-white/5 flex items-center justify-center relative cursor-pointer group hover:border-gadget-accent/30 transition-colors">
                        <div className="w-1.5 h-1.5 bg-gadget-accent rounded-full absolute top-1/2 right-4 -translate-y-1/2 shadow-[0_0_8px_#39ff14]"></div>
                        <div className="absolute inset-4 rounded-full border border-black/20"></div>
                      </div>
                      <span className="block text-[8px] font-mono text-center mt-3 text-gadget-label uppercase">Flux_Gain</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-mono font-bold text-gadget-label uppercase tracking-[0.3em]">Power_Bus</h4>
                  <div className="flex items-center gap-3">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className={`h-8 w-2 rounded-sm ${i < 6 ? 'bg-gadget-accent shadow-[0_0_5px_#39ff14]' : 'bg-black/40'}`}></div>
                    ))}
                    <span className="text-xs font-mono font-bold text-gadget-accent ml-2">78%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Readout Display (Right) */}
            <div className="lg:col-span-8 p-10 lg:p-16 relative">
              <div className="absolute top-8 right-8 flex gap-2">
                <div className="w-3 h-3 bg-gadget-accent shadow-[0_0_10px_#39ff14]"></div>
                <div className="w-3 h-3 border border-gadget-label"></div>
              </div>

              <div className="flex flex-col h-full justify-between">
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Terminal size={18} className="text-gadget-accent" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-widest italic">Live_Diagnostics</span>
                  </div>
                  <div className="p-6 bevel-in bg-black/60 rounded-2xl font-mono text-[10px] text-gadget-label space-y-2 uppercase leading-relaxed border border-white/5">
                    <p className="text-white">> SYSTEM_INIT: SUCCESSFUL</p>
                    <p className="text-gadget-accent">> CORE_TEMP: 34.2 DEG_CEL // NOMINAL</p>
                    <p>> AUTHENTICATING_BIOMETRIC_LAYER...</p>
                    <p>> HANDSHAKE_PROTOCOL_ACTIVE (102.39.0.1)</p>
                    <p className="animate-pulse">> WAITING_FOR_USER_COMMAND_</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
                  <div className="max-w-xs">
                    <h5 className="text-xl font-black text-white uppercase mb-2">Synthetic Stability</h5>
                    <p className="text-[10px] font-mono text-gadget-label leading-relaxed uppercase">
                      Our architecture maintains absolute equilibrium between physical input and digital processing.
                    </p>
                  </div>
                  <button className="flex items-center gap-4 px-8 py-4 bevel-out bg-black/40 border border-white/10 text-xs font-black uppercase text-white hover:text-gadget-accent transition-colors group hover:bg-black/60">
                    Full_Report
                    <Settings size={14} className="group-hover:rotate-90 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};