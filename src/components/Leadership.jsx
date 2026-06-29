import { leadershipData } from '../data/portfolioData';

const Leadership = () => {
  return (
    <section id="leadership" className="bg-[#0B0B0B] py-28 px-6 md:px-12 w-full relative overflow-hidden border-t border-white/5">
      {/* Background blurs */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-accent-emerald/30 bg-accent-emerald/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-accent-emerald font-bold mb-4">
            Organizational Roles
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-display">
            Leadership &amp; Influence
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-medium leading-relaxed mt-4">
            Fostering technical growth, leading developer communities, and building structural frameworks to nurture peer talents.
          </p>
        </div>

        {/* Leadership Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" data-aos="fade-up" data-aos-delay="100">
          
          {/* Card 1: Society Info & Profile Card (Glassmorphic) */}
          <div className="lg:col-span-1 bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md flex flex-col justify-between hover:border-accent-blue/30 transition-all duration-300">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest text-accent-blue uppercase block mb-4">Society Branding</span>
              <h3 className="text-2xl font-black text-white font-display leading-tight mb-2">CSIS MMMUT</h3>
              <p className="text-gray-400 text-xs font-mono leading-relaxed mb-6">
                Computer Science &amp; Innovation Society
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-emerald rounded-full mb-8" />
              <p className="text-sm text-gray-300 leading-relaxed">
                As the executive committee Vice-President, I spearhead operations, align research focus areas, and build high-impact tech events for the computing community.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5">
              <span className="text-[10px] font-mono text-accent-emerald font-bold uppercase tracking-wider block mb-1">Current Tenure</span>
              <span className="text-sm font-bold text-white">{leadershipData.period}</span>
            </div>
          </div>

          {/* Card 2: Responsibilities List (Double width) */}
          <div className="lg:col-span-2 bg-[#121212]/50 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md flex flex-col justify-between hover:border-accent-emerald/30 transition-all duration-300">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-accent-emerald uppercase block">Active Responsibility</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white font-display mt-1">{leadershipData.role}</h3>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-xs font-bold self-start sm:self-auto">
                  Executive Board
                </span>
              </div>

              <div className="space-y-5">
                {leadershipData.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent-blue/15 flex items-center justify-center text-accent-blue text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed font-normal">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Community Scale</span>
                <span className="text-lg font-black text-white font-display">200+ Active Members</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">Event Reach</span>
                <span className="text-lg font-black text-white font-display">500+ Campus Students</span>
              </div>
            </div>

          </div>

          {/* Card 3: The Uncertain Engineer (Full width card) */}
          <div className="lg:col-span-3 bg-[#121212]/50 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md flex flex-col justify-between hover:border-accent-blue/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div className="flex-1">
                <span className="text-[10px] font-mono font-bold tracking-widest text-accent-blue uppercase block mb-2">Personal Initiative</span>
                <h3 className="text-2xl md:text-3xl font-black text-white font-display leading-tight mb-4">The Uncertain Engineer</h3>
                <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
                  The Uncertain Engineer is my personal initiative where I document my journey as a computer science student exploring technology with curiosity instead of certainty. Through this platform, I share what I'm learning, the projects I'm building, the mistakes I make, and the lessons I learn along the way. My goal is to encourage students to embrace uncertainty, keep learning, and build meaningful solutions instead of waiting to become "perfect."
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end justify-between shrink-0 self-stretch md:self-auto pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-white/5 md:pl-8">
                <a 
                  href="https://www.linkedin.com/company/the-uncertain-engineer/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-xs font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,102,255,0.3)] inline-flex items-center gap-2 mb-4"
                >
                  Read My Journey
                  <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-accent-emerald text-xl font-black font-display">“</span>
                <p className="text-gray-400 text-sm italic font-medium leading-relaxed">
                  Growth begins the moment you stop fearing uncertainty.
                </p>
                <span className="text-accent-emerald text-xl font-black font-display">”</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Leadership;
