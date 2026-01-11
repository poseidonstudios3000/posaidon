import React, { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navStates, setNavStates] = useState<Record<string, string>>({
    Content: 'Content',
    Avatars: 'Avatars',
    'SEO/GEO': 'SEO/GEO',
    Custom: 'Custom'
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (key: string) => {
    setNavStates(prev => ({ ...prev, [key]: 'Coming Soon' }));
    setTimeout(() => {
      setNavStates(prev => ({ ...prev, [key]: key }));
    }, 2000);
  };

  const navItems = ['Content', 'Avatars', 'SEO/GEO', 'Custom'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] flex justify-center pt-4 md:pt-6 px-4 transition-all duration-300 ${scrolled ? 'translate-y-[-10px]' : ''}`}>
      <div className={`w-full max-w-6xl bg-black/80 md:bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-3 md:p-2.5 flex flex-wrap md:flex-nowrap items-center justify-between shadow-2xl transition-all duration-500 ${scrolled ? 'scale-95' : 'bevel-out'}`}>
        
        {/* Left: Trident Logo */}
        <div className="order-1 flex items-center gap-4 pl-2 md:pl-4 pr-6 md:border-r border-white/10">
           <div className="w-10 h-10 bevel-in rounded-lg bg-black flex items-center justify-center text-gadget-accent group cursor-default">
              {/* Tech Trident Logo */}
              <svg 
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                fill="none" 
                className="group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.8)] transition-all duration-300"
              >
                {/* Center Shaft */}
                <path d="M12 2L10.5 5H13.5L12 2Z" fill="currentColor" />
                <rect x="11.5" y="6" width="1" height="16" fill="currentColor" className="opacity-80" />
                
                {/* Left Prong (Circuit Style) */}
                <path d="M6 6L4.5 9H7.5L6 6Z" fill="currentColor" />
                <path d="M6 10V16L11.5 19" stroke="currentColor" strokeWidth="1" strokeLinecap="square" className="opacity-60" />
                
                {/* Right Prong (Circuit Style) */}
                <path d="M18 6L16.5 9H19.5L18 6Z" fill="currentColor" />
                <path d="M18 10V16L12.5 19" stroke="currentColor" strokeWidth="1" strokeLinecap="square" className="opacity-60" />
                
                {/* Base Node */}
                <circle cx="12" cy="19" r="1.5" fill="currentColor" />
              </svg>
           </div>
           <div className="hidden lg:block">
              <p className="text-xl font-brand text-white leading-none tracking-wide">POSAIDON STUDIOS</p>
           </div>
        </div>

        {/* Mobile: Nav moves to bottom row. Desktop: Middle */}
        <nav className="order-3 md:order-2 w-full md:w-auto flex justify-center items-center gap-4 md:gap-8 text-[10px] md:text-[9px] font-mono font-black text-gadget-label uppercase tracking-widest px-2 md:px-6 mt-4 md:mt-0 pt-4 md:pt-0 border-t border-white/10 md:border-t-0">
           {navItems.map((item) => (
             <button 
               key={item}
               onClick={() => handleNavClick(item)}
               className="hover:text-gadget-accent transition-colors focus:outline-none min-w-max md:min-w-[60px] text-center"
             >
               {navStates[item]}
             </button>
           ))}
        </nav>

        {/* Right: CTA */}
        <div className="order-2 md:order-3 flex items-center gap-4 pr-2 md:pr-6 ml-auto">
           <a href="https://www.instagram.com/posaidonstudios/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gadget-accent transition-colors">
              <Instagram size={24} />
           </a>
        </div>
      </div>
    </header>
  );
};