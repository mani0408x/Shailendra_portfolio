import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the text fill animation + small pause before lifting the shutter
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#0B0B0B] z-[100000] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Decorative glowing blobs in background */}
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-accent-blue/10 rounded-full blur-[80px] animate-pulse-slow pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent-emerald/10 rounded-full blur-[80px] animate-pulse-slow pointer-events-none" />

          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase font-display"
          >
            {/* Background text (empty state) */}
            <div className="text-white/10 select-none">
              Shailendra<span className="text-white/15">.</span>
            </div>

            {/* Foreground text (water fill state) */}
            <motion.div 
              className="absolute top-0 left-0 text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-emerald overflow-hidden whitespace-nowrap select-none"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
            >
              Shailendra<span className="text-white">.</span>
            </motion.div>
          </motion.div>

          {/* Subtitle reveal */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-6 text-xs sm:text-sm font-mono tracking-[0.3em] text-white/40 uppercase"
          >
            Engineering Premium Experiences
          </motion.p>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
