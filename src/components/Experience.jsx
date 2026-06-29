import { experienceTimeline } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0B0B0B] py-28 px-6 md:px-12 w-full relative overflow-hidden border-t border-white/5 text-white">
      {/* Decorative radial gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-accent-blue/30 bg-accent-blue/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-accent-blue font-bold mb-4">
            Professional History
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-display">
            Work Experience
          </h2>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-white/10 pl-6 ml-4 md:pl-10 md:ml-10 space-y-12">
          
          {experienceTimeline.map((exp, idx) => (
            <div key={idx} className="relative group" data-aos="fade-up" data-aos-delay={idx * 150}>
              
              {/* Dot marker - Electric Blue ring with inner green glow */}
              <div className="absolute -left-[31px] md:-left-[47px] top-2 w-5 h-5 rounded-full bg-[#0B0B0B] border-4 border-accent-blue group-hover:border-accent-emerald group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(0,102,255,0.4)]"></div>
              
              {/* Glassmorphic timeline card */}
              <div className="bg-white/[0.02] border border-white/5 hover:border-accent-blue/20 rounded-3xl p-6 md:p-8 backdrop-blur-md transition-all duration-500 shadow-2xl hover:bg-white/[0.04]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-accent-blue transition-colors duration-300 font-display">{exp.role}</h3>
                    <p className="text-accent-emerald font-bold text-sm md:text-base mt-1">{exp.company}</p>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-mono font-bold tracking-wider uppercase self-start md:self-auto">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-4">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm md:text-base text-gray-300 leading-relaxed font-normal">
                      <span className="text-accent-emerald font-bold mt-1 text-xs shrink-0">▲</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
