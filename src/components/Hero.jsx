import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import heroImage from '../assets/about/divyanshu_img.jpeg';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  const rotatingTitles = [
    'Full Stack Developer',
    'MERN Developer',
    'AI Engineer',
    'Computer Vision Enthusiast',
    'Backend Developer'
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    const titleInterval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2500);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col justify-center">
      {/* Background Image */}
      {/* Background Image - Positioned to the right on larger screens */}
      <img
        src={heroImage}
        alt="Background"
        className="absolute top-0 right-0 w-full md:w-[55%] h-full object-cover object-top z-0 opacity-40 filter grayscale brightness-50"
      />

      {/* Dark Overlay Gradients for seamless text contrast and blending */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 md:via-black/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 px-6 pt-32 pb-16 md:px-12 max-w-7xl mx-auto flex flex-col justify-between w-full h-full min-h-screen">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex-1 flex flex-col justify-center items-start text-left max-w-3xl w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-500 text-xs md:text-sm font-bold tracking-wider uppercase mb-6" data-aos="fade-down">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            Welcome to my portfolio
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-4xl sm:text-5xl md:text-7xl font-black mb-4 tracking-tight leading-tight"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-red-500">
              Divyanshu Nath Tripathi
            </span>
          </h1>

          {/* Rotating Subtitles */}
          <div className="h-10 md:h-14 overflow-hidden mb-6" data-aos="fade-up" data-aos-delay="100">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-red-500 text-xl md:text-3xl font-extrabold tracking-wide uppercase"
              >
                {rotatingTitles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-300 text-sm sm:text-base md:text-lg font-medium mb-10 max-w-xl leading-relaxed"
          >
            Building scalable web applications, AI-powered systems, computer vision solutions, and modern digital experiences using MERN, Node.js, React, Python, and Machine Learning.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap items-center gap-4 w-full"
          >
            <a href="#projects" className="px-6 py-3 text-sm md:text-base rounded-full bg-red-600 text-white font-bold hover:bg-red-700 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300 transform hover:scale-105">
              View Projects
            </a>
            
            <a href="/resume.pdf" download className="px-6 py-3 text-sm md:text-base rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>

            <a href="#contact" className="px-6 py-3 text-sm md:text-base rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
              Contact Me
            </a>
          </div>
        </div>

        {/* Bottom Section: Stats Cards */}
        <div className="mt-12 w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full" data-aos="fade-up" data-aos-delay="400">
            {[
              { val: '3+', label: 'Projects' },
              { val: '10+', label: 'Technologies' },
              { val: '1+', label: 'Internship Exp.' },
              { val: '5+', label: 'Certifications' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:border-red-500/50 hover:bg-white/10 transition-all duration-300">
                <p className="text-2xl sm:text-3xl font-black text-red-500 mb-1">{stat.val}</p>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
