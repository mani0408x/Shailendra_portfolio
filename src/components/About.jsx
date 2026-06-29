import { personalInfo } from '../data/portfolioData';
import profileImage from '../assets/about/divyanshu_img.jpeg'; // Reusing the asset path

const About = () => {
  return (
    <section id="about" className="bg-[#0B0B0B] pt-28 pb-32 px-6 md:px-12 w-full relative overflow-hidden border-t border-white/5">
      {/* Background decoration blur */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center lg:items-start">
        
        {/* Left Side: Developer Badge ID Card */}
        <div className="flex flex-col items-center w-full lg:w-[350px] shrink-0" data-aos="fade-right">
          
          <div className="relative flex justify-center w-full">
            {/* Lanyard string - electric blue/dark premium tone */}
            <div className="absolute -top-32 left-1/2 w-2 h-40 bg-accent-blue/30 transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-white/10 rounded border border-white/20 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.5)] backdrop-blur-md"></div>
            
            {/* Badge Card - Premium Glassmorphic */}
            <div className="bg-[#151515]/80 backdrop-blur-xl w-full max-w-[280px] rounded-3xl p-5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative z-20 transform -rotate-1 hover:rotate-0 transition-transform duration-500 border border-white/10 text-white">
              
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-[#151515] rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/50 rounded-full shadow-inner"></div>
              </div>

              {/* Photo Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl bg-white/[0.02] border border-white/15 mb-5 mt-2 relative group">
                <img 
                  src={profileImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
              </div>

              {/* Badge Details */}
              <div className="text-center font-mono">
                <span className="text-accent-emerald text-xs font-bold tracking-widest uppercase">Member ID • 2427</span>
                <h3 className="text-lg font-black font-display text-white tracking-tight mt-1 uppercase">{personalInfo.name}</h3>
                <p className="text-gray-400 text-[10px] mt-1 uppercase tracking-wide">Vice-President, CSIS</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" className="flex-1 text-white relative z-20 w-full">
          
          <div className="inline-block border border-accent-emerald/30 bg-accent-emerald/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-accent-emerald font-bold mb-6">
            Profile Info
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight font-display">
            About Me
          </h2>
          
          <p className="text-base md:text-lg font-medium leading-relaxed max-w-3xl text-gray-300 mb-10">
            {personalInfo.aboutBio}
          </p>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/20 transition-all duration-300">
              <h3 className="text-white font-bold text-base mb-2 font-display">Problem Solver</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Applying rigorous analysis to algorithms, data architecture, and software design to resolve latency issues and user pain points.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-emerald/20 transition-all duration-300">
              <h3 className="text-white font-bold text-base mb-2 font-display">CSIS Leadership</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Spearheading community growth as Vice-President, planning tech symposia, hackathons, and fostering innovation among students.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-emerald/20 transition-all duration-300">
              <h3 className="text-white font-bold text-base mb-2 font-display">Continuous Learning</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Constantly learning modern DevOps frameworks, testing libraries, cloud computing, and AI architectures to stay ahead.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent-blue/20 transition-all duration-300">
              <h3 className="text-white font-bold text-base mb-2 font-display">AI & Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Combining full stack web development paradigms with AI libraries to construct responsive, automated, and analytical tools.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
