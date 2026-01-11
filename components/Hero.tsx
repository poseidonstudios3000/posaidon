import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const loopWords = ["content", "brand", "visibility"];

interface HeroProps {
  showCircuitry: boolean;
}

export const Hero: React.FC<HeroProps> = ({ showCircuitry }) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [servicesLabel, setServicesLabel] = useState('Services');

  useEffect(() => {
    const handleTyping = () => {
      const currentFullWord = loopWords[wordIndex];
      
      if (isDeleting) {
        setDisplayText(currentFullWord.substring(0, displayText.length - 1));
        setSpeed(75);
      } else {
        setDisplayText(currentFullWord.substring(0, displayText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentFullWord) {
        setSpeed(1500); // Pause at end of word
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % loopWords.length);
        setSpeed(500); // Pause before next word
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, speed]);

  const handleServicesClick = () => {
    setServicesLabel('Coming Soon');
    setTimeout(() => setServicesLabel('Services'), 2000);
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-px bg-gadget-accent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gadget-accent"></div>
      </div>

      {/* Conditional Circuitry Background */}
      {showCircuitry && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" preserveAspectRatio="none">
          <path className="circuit-line" d="M 0,100 H 200 V 400 H 600 V 200 H 1200" fill="none" stroke="#39ff14" strokeWidth="1" />
        </svg>
      )}

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-7xl">
          {/* Agency Tag - Reduced Size */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bevel-in bg-black/40 mb-8 md:mb-10 backdrop-blur-sm border border-white/5">
            <div className="w-2 h-2 rounded-full bg-gadget-accent shadow-[0_0_12px_#39ff14] animate-pulse"></div>
            <span className="text-[10px] md:text-sm font-mono font-black text-gadget-accent uppercase tracking-widest">AI Marketing Agency</span>
          </div>

          <h1 className="text-[12vw] md:text-[6vw] font-black leading-[1.1] text-white uppercase italic tracking-tighter mb-8 md:mb-12">
            <span className="block whitespace-nowrap opacity-90">BOOST YOUR</span>
            <span className="text-gadget-accent text-glow block h-[1.2em] min-h-[1.2em]">
              {displayText}
            </span>
          </h1>

          <div className="max-w-6xl">
             {/* Subtitle - Reduced Size */}
            <p className="text-lg md:text-3xl text-gray-400 font-medium leading-relaxed mb-10 md:mb-14 max-w-2xl md:max-w-none">
              We blend Artificial Intelligence with Human Strategy <br className="hidden md:block" />
              to elevate your brand above the noise
            </p>
            
            <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-10">
              {/* Primary Button - Linked to Instagram */}
              <a 
                href="https://www.instagram.com/posaidonstudios/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group px-10 py-6 md:px-14 md:py-8 bg-[#0a0c0e]/80 backdrop-blur-2xl border border-gadget-accent/40 text-white font-black uppercase tracking-widest text-base md:text-lg rounded-2xl transition-all duration-500 flex items-center justify-center md:justify-start gap-4 overflow-hidden shadow-[0_0_35px_-5px_rgba(57,255,20,0.5)] hover:shadow-[0_0_60px_-5px_rgba(57,255,20,0.8)] hover:bg-[#0a0c0e] hover:border-gadget-accent hover:-translate-y-1 w-full md:w-auto"
              >
                <span className="relative z-10 flex items-center gap-3 group-hover:text-gadget-accent transition-colors duration-300">
                  Get in touch
                  <ChevronRight size={24} />
                </span>
                {/* Beam Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer z-0"></div>
                {/* Neon Glow overlay */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-gadget-accent/50 transition-all"></div>
              </a>

              {/* Secondary Button - Coming Soon Notification */}
              <button 
                onClick={handleServicesClick}
                className="relative group px-10 py-6 md:px-14 md:py-8 bg-black/40 backdrop-blur-lg border border-white/10 text-white font-black uppercase tracking-widest text-base md:text-lg rounded-2xl transition-all duration-500 overflow-hidden hover:bg-black/60 hover:border-white/30 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.2)] hover:-translate-y-1 w-full md:w-auto"
              >
                <span className="relative z-10 group-hover:text-white transition-colors">{servicesLabel}</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer z-0"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};