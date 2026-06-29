import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleHoverStart = () => setHovered(true);
    const handleHoverEnd = () => setHovered(false);

    const updateHoverTargets = () => {
      const targets = document.querySelectorAll('a, button, input, textarea, select, .interactive');
      targets.forEach((target) => {
        target.addEventListener('mouseenter', handleHoverStart);
        target.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateHoverTargets();
    
    // Periodically re-check for dynamic elements
    const interval = setInterval(updateHoverTargets, 1500);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(interval);
      const targets = document.querySelectorAll('a, button, input, textarea, select, .interactive');
      targets.forEach((target) => {
        target.removeEventListener('mouseenter', handleHoverStart);
        target.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-blue pointer-events-none z-[999999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        scale: hovered ? 1.6 : 1,
        backgroundColor: hovered ? 'rgba(0, 102, 255, 0.15)' : 'rgba(0, 102, 255, 0.02)',
        borderColor: hovered ? '#10B981' : '#0066FF', // transitions border to emerald on hover
      }}
      transition={{ type: 'spring', stiffness: 600, damping: 30 }}
    />
  );
};

export default CustomCursor;
