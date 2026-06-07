import React from 'react';
import stackImage from '../assets/about/divyanshu_img.jpeg';

const About = () => {
  const educationTimeline = [
    {
      institution: "MMMUT Gorakhpur",
      degree: "B.Tech CSE",
      period: "2024–2027",
      details: "CGPA: 7.61"
    },
    {
      institution: "Government Polytechnic Gorakhpur",
      degree: "Diploma Civil Engineering",
      period: "2021–2023",
      details: "Percentage: 73.2%"
    },
    {
      institution: "Class XII",
      degree: "Senior Secondary Education",
      period: "2020",
      details: "Percentage: 76%"
    },
    {
      institution: "Class X",
      degree: "Secondary Education",
      period: "2018",
      details: "Percentage: 72.8%"
    }
  ];

  return (
    <section id="about" className="bg-[#ff2a2a] pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Side: Developer Badge ID Card */}
        <div className="flex flex-col items-center w-full lg:w-[350px] shrink-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-4 shadow-[0_25px_50px_rgba(0,0,0,0.5)] relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/10 text-white">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/40 rounded-full shadow-inner"></div>
              </div>

              {/* Photo Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border border-white/10 mb-4 mt-2">
                <img 
                  src={stackImage} 
                  alt="Divyanshu Nath Tripathi" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Badge Meta details */}
              <div className="text-center font-mono">
                <p className="text-red-500 text-sm font-bold tracking-widest uppercase">Developer ID</p>
                <h3 className="text-base font-bold text-white tracking-wide mt-1 uppercase">Divyanshu Nath Tripathi</h3>
                <p className="text-gray-400 text-[10px] mt-0.5">MMMUT CSE Student</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content & Education Timeline */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white relative z-20">
          
          <div className="inline-block border border-white/30 bg-white/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-white font-bold mb-6 backdrop-blur-md">
            Profile Info
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">About Me</h2>
          
          <p className="text-base md:text-lg font-bold leading-relaxed max-w-3xl text-red-50 mb-10">
            I am a Computer Science Engineering student at MMMUT Gorakhpur with experience in Full Stack Development, AI/ML, Computer Vision, and Backend Systems.
            I enjoy building scalable applications, intelligent systems, and solving real-world problems through technology.
          </p>

          {/* Education Timeline */}
          <div className="border-l-2 border-white/20 pl-6 space-y-8 relative">
            <h3 className="text-xl font-black text-black tracking-wide uppercase mb-6">Education</h3>
            
            {educationTimeline.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Bullet node */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-red-600 group-hover:bg-black transition-colors duration-300"></div>
                
                {/* Details card */}
                <div className="bg-white/5 border border-white/10 hover:border-white/30 rounded-2xl p-4 backdrop-blur-sm transition-all duration-300">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-red-300 font-mono">{edu.period}</span>
                  <h4 className="text-lg font-black text-white mt-1">{edu.institution}</h4>
                  <p className="text-sm font-semibold text-red-100">{edu.degree}</p>
                  <p className="text-xs font-mono text-white/70 mt-1">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#111111]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
