import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white/5 uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[90%] lg:w-[85%] p-8 md:p-16 text-white flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between"
        >
          {/* Left Column: Contact Cards */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] mb-12 uppercase opacity-90">
                Reach Me
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Let's collaborate on your next project.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="bg-black/15 border border-white/10 rounded-2xl p-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-200 block mb-1">Phone</span>
                <a href="tel:+916306987592" className="text-sm font-bold hover:underline">+91 6306987592</a>
              </div>
              <div className="bg-black/15 border border-white/10 rounded-2xl p-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-200 block mb-1">Email</span>
                <a href="mailto:divyanshutrip2003@gmail.com" className="text-sm font-bold hover:underline break-all">divyanshutrip2003@gmail.com</a>
              </div>
              <div className="bg-black/15 border border-white/10 rounded-2xl p-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-200 block mb-1">GitHub</span>
                <a href="https://github.com/DivyanshuNathTripathi" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:underline break-all">github.com/DivyanshuNathTripathi</a>
              </div>
              <div className="bg-black/15 border border-white/10 rounded-2xl p-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-200 block mb-1">LinkedIn</span>
                <a href="https://www.linkedin.com/in/divyanshu-nath-tripathi-774773334/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:underline">divyanshu-nath-tripathi</a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 w-full mt-6 lg:mt-0">
            <form className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    required
                    placeholder="Full Name" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-base focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    required
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-base focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Company Name" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-base focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Subject" 
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-base focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <textarea 
                    id="message" 
                    required
                    placeholder="Type your message here" 
                    className="w-full min-h-[100px] bg-transparent border-b border-white/40 pb-3 text-base focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-4">
                <div className="flex items-start gap-3 text-xs font-medium text-white/95">
                  <input 
                    type="checkbox" 
                    id="permission" 
                    required
                    className="mt-0.5 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 cursor-pointer" 
                    style={{ accentColor: "white" }}
                  />
                  <label htmlFor="permission" className="cursor-pointer max-w-[240px] leading-snug">
                    I consent to being contacted by email about this request.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="px-8 py-3 rounded-full border border-white text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                >
                  Send Message
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
