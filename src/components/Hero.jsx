import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesBg from './ParticlesBg';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(titleInterval);
  }, []);

  // Text Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-bg-dark flex flex-col justify-center">
      
      {/* Dynamic Canvas Particles in background */}
      <ParticlesBg />

      {/* Premium background radial glowing blobs */}
      <div className="absolute top-[20%] left-[15%] w-[450px] h-[450px] bg-accent-blue/10 rounded-full blur-[130px] animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accent-emerald/10 rounded-full blur-[140px] animate-pulse-slow pointer-events-none z-0" style={{ animationDelay: '2s' }} />

      {/* Content Layout Container */}
      <div className="relative z-10 px-6 pt-32 pb-16 md:px-12 max-w-7xl mx-auto flex flex-col justify-between w-full h-full min-h-screen">
        
        {/* Main Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-center items-start text-left max-w-3xl w-full"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs md:text-sm font-bold tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
            Welcome to my space
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-white text-4xl sm:text-6xl md:text-8xl font-black mb-4 tracking-tight leading-[1.05] font-display"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent-blue">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Rotating Subtitles */}
          <motion.div 
            variants={itemVariants}
            className="h-10 md:h-12 overflow-hidden mb-6"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-accent-emerald text-xl md:text-3xl font-extrabold tracking-wide uppercase font-display"
              >
                {personalInfo.roles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base md:text-lg font-normal mb-10 max-w-xl leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Buttons & Social Link Group */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 w-full mb-10"
          >
            <a 
              href="#projects" 
              className="px-7 py-3.5 text-sm rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,102,255,0.4)]"
            >
              View Projects
            </a>
            
            <a 
              href={personalInfo.resumeUrl} 
              download 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-7 py-3.5 text-sm rounded-full bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 text-white font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-accent-emerald" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Resume
            </a>

            <a 
              href="#contact" 
              className="px-7 py-3.5 text-sm rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex gap-5 text-gray-400"
          >
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/5 border border-white/5"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
            </a>
            
            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/5 border border-white/5"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a 
              href={`mailto:${personalInfo.socials.email}`}
              className="hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/5 border border-white/5"
              aria-label="Send Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Glass Stats Panels */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {[
              { val: '3+', label: 'Core Projects', border: 'hover:border-accent-blue/40' },
              { val: '15+', label: 'Technologies', border: 'hover:border-accent-emerald/40' },
              { val: '1+', label: 'Internships', border: 'hover:border-accent-blue/40' },
              { val: '20+', label: 'CSIS Members Led', border: 'hover:border-accent-emerald/40' }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className={`bg-white/[0.02] border border-white/5 rounded-2xl p-5 backdrop-blur-md transition-all duration-300 ${stat.border} hover:bg-white/[0.05]`}
              >
                <p className="text-3xl font-black text-white font-display mb-1">{stat.val}</p>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
