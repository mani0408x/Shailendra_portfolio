import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the huge text overlay
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "25%"]);

  return (
    <section ref={ref} id="contact" className="bg-[#0B0B0B] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-white/5">
      {/* Huge Background Text Overlay */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white/[0.02] uppercase tracking-tighter select-none scale-y-[1.6] origin-top font-display"
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#121212]/90 backdrop-blur-xl border-t border-l border-white/5 w-full md:w-[90%] lg:w-[85%] p-8 md:p-16 text-white flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Left Column: Contact Cards */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold tracking-[0.2em] mb-12 uppercase text-accent-blue">
                Reach Me
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight font-display">
                Let's collaborate on your next project.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 hover:border-accent-blue/30 transition-colors">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">Phone</span>
                <a href={`tel:${personalInfo.socials.phone.replace(/\s+/g, '')}`} className="text-sm font-bold hover:text-accent-blue transition-colors">{personalInfo.socials.phone}</a>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 hover:border-accent-emerald/30 transition-colors">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">Email</span>
                <a href={`mailto:${personalInfo.socials.email}`} className="text-sm font-bold hover:text-accent-emerald transition-colors break-all">{personalInfo.socials.email}</a>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 hover:border-accent-blue/30 transition-colors">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">GitHub</span>
                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-accent-blue transition-colors break-all">
                  {personalInfo.socials.github.replace("https://github.com/", "github.com/")}
                </a>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 hover:border-accent-emerald/30 transition-colors">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">LinkedIn</span>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:text-accent-emerald transition-colors break-all">
                  {personalInfo.socials.linkedin.replace("https://www.linkedin.com/in/", "linkedin.com/in/")}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 w-full mt-6 lg:mt-0">
            <form className="flex flex-col gap-8 w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    required
                    placeholder="Full Name" 
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-base focus:outline-none focus:border-accent-blue transition-colors placeholder-gray-600 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    required
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-base focus:outline-none focus:border-accent-blue transition-colors placeholder-gray-600 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Company Name" 
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-base focus:outline-none focus:border-accent-blue transition-colors placeholder-gray-600 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="Subject" 
                    className="w-full bg-transparent border-b border-white/10 pb-3 text-base focus:outline-none focus:border-accent-blue transition-colors placeholder-gray-600 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <textarea 
                    id="message" 
                    required
                    placeholder="Type your message here" 
                    className="w-full min-h-[100px] bg-transparent border-b border-white/10 pb-3 text-base focus:outline-none focus:border-accent-blue transition-colors placeholder-gray-600 font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Section */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-4">
                <div className="flex items-start gap-3 text-xs font-medium text-gray-400">
                  <input 
                    type="checkbox" 
                    id="permission" 
                    required
                    className="mt-0.5 w-4 h-4 rounded-sm border-white/10 bg-transparent text-accent-blue focus:ring-accent-blue focus:ring-offset-0 cursor-pointer" 
                    style={{ accentColor: "#0066FF" }}
                  />
                  <label htmlFor="permission" className="cursor-pointer max-w-[240px] leading-snug">
                    I consent to being contacted by email about this request.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="px-8 py-3 rounded-full bg-accent-blue hover:bg-accent-blue/90 border border-transparent text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 group whitespace-nowrap self-start sm:self-auto hover:shadow-[0_0_20px_rgba(0,102,255,0.4)] cursor-pointer"
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
