import React, { useEffect, useState, useRef } from 'react';
import { Instagram, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Listen to the main app container for scroll events instead of window
    // because the app uses a full-height overflow container for snap scrolling.
    const container = document.getElementById('app-container');
    const handleScroll = () => {
      if (container) {
        setScrolled(container.scrollTop > 20);
      }
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    
    container?.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (key: string) => {
    setMobileMenuOpen(false);
    // Map nav items to Section IDs
    const sectionMap: Record<string, string> = {
      'Content': 'service-content',
      'Avatars': 'service-avatars',
      'SEO/GEO': 'service-seo',
      'Custom': 'service-custom'
    };

    const targetId = sectionMap[key];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    const container = document.getElementById('app-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = ['Content', 'Avatars', 'SEO/GEO', 'Custom'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] flex justify-center pt-4 md:pt-6 px-4 transition-all duration-300 ${scrolled ? 'translate-y-[-10px]' : ''}`}>
      <div className={`w-full max-w-6xl bg-black/80 md:bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-3 md:p-2.5 flex items-center justify-between shadow-2xl transition-all duration-500 ${scrolled ? 'scale-95' : 'bevel-out'}`}>
        
        {/* Left: Trident Logo - Clickable & Visible on Mobile */}
        <div 
          onClick={handleLogoClick}
          className="order-1 flex items-center gap-3 md:gap-4 pl-2 md:pl-4 pr-4 md:pr-6 md:border-r border-white/10 cursor-pointer group select-none"
        >
           <div className="w-10 h-10 bevel-in rounded-lg bg-black flex items-center justify-center text-gadget-accent group-hover:bg-gadget-accent/10 transition-colors">
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
           <div className="block">
              <p className="text-sm md:text-xl font-brand text-white leading-none tracking-wide group-hover:text-gadget-accent transition-colors">POSAIDON STUDIOS</p>
           </div>
        </div>

        {/* Middle: Nav */}
        <nav className="order-2 flex-1 md:flex-none flex justify-center lg:justify-center">
            {/* Desktop Horizontal List */}
            <div className="hidden md:flex items-center gap-8 text-[9px] font-mono font-black text-gadget-label uppercase tracking-widest px-6">
                {navItems.map((item) => (
                    <button 
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="hover:text-gadget-accent transition-colors focus:outline-none min-w-[60px] text-center"
                    >
                    {item}
                    </button>
                ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="md:hidden relative" ref={dropdownRef}>
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-2 border rounded-lg backdrop-blur-md transition-all ${mobileMenuOpen ? 'bg-gadget-accent/10 border-gadget-accent text-gadget-accent' : 'bg-black/40 border-white/10 text-gray-400'}`}
                >
                    Services 
                    <ChevronDown size={14} className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu Overlay */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-[#1a1d21] border border-white/10 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col py-2 z-50 transition-all duration-200 origin-top ${mobileMenuOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleNavClick(item)}
                            className="w-full text-left px-5 py-3 text-[10px] font-mono font-bold text-gray-400 hover:text-gadget-accent hover:bg-white/5 uppercase tracking-widest transition-colors flex items-center justify-between group"
                        >
                            {item}
                            <span className="w-1 h-1 rounded-full bg-gadget-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        </button>
                    ))}
                </div>
            </div>
        </nav>

        {/* Right: CTA */}
        <div className="order-3 flex items-center gap-4 pr-2 md:pr-6 ml-auto md:ml-0">
           <a href="https://www.instagram.com/posaidonstudios/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gadget-accent transition-colors">
              <Instagram size={24} />
           </a>
        </div>
      </div>
    </header>
  );
};