import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle state on scroll to add a backdrop filter
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Leadership', 'Skills', 'Achievements', 'Resume', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0B0B0B]/75 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center">
          <a href="#" className="text-white text-xl md:text-2xl font-black tracking-tight font-display hover:opacity-90 transition-opacity">
            {personalInfo.firstName}<span className="text-accent-emerald">.</span>
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-7 items-center">
          {navLinks.map((link) => {
            const isResume = link === 'Resume';
            return (
              <a 
                key={link} 
                href={isResume ? personalInfo.resumeUrl : `#${link.toLowerCase()}`}
                download={isResume}
                target={isResume ? "_blank" : undefined}
                rel={isResume ? "noopener noreferrer" : undefined}
                className="text-white/70 hover:text-white font-medium text-sm relative group transition-colors duration-300 py-1"
              >
                {link}
                {/* Micro-interaction: Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden lg:block">
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 hover:border-accent-emerald hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/80 hover:text-white focus:outline-none p-2 relative z-50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-[#0B0B0B]/98 backdrop-blur-2xl transition-all duration-500 ease-in-out z-40 flex flex-col justify-center px-12 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-20px]'
        }`}
      >
        <div className="flex flex-col space-y-6 text-left">
          {navLinks.map((link, idx) => {
            const isResume = link === 'Resume';
            return (
              <a 
                key={link} 
                href={isResume ? personalInfo.resumeUrl : `#${link.toLowerCase()}`}
                download={isResume}
                target={isResume ? "_blank" : undefined}
                rel={isResume ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-black font-display tracking-tight text-white/80 hover:text-accent-blue transition-colors border-b border-white/5 pb-2 transition-all duration-500 delay-[${idx * 50}ms]`}
              >
                {link}
              </a>
            );
          })}
          
          <div className="pt-6">
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)} 
              className="inline-block px-8 py-3 rounded-full bg-accent-blue text-white font-bold hover:bg-accent-blue/80 hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all w-full text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
