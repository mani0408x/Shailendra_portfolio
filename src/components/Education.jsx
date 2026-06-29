import { educationTimeline } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="bg-[#0B0B0B] py-28 px-6 md:px-12 w-full relative overflow-hidden border-t border-white/5">
      {/* Decorative background blurs */}
      <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-accent-emerald/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-accent-blue/30 bg-accent-blue/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-accent-blue font-bold mb-4">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-display">
            Education
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-white/10 pl-6 ml-4 md:pl-10 md:ml-8 space-y-12">
          
          {educationTimeline.map((edu, idx) => (
            <div 
              key={idx} 
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Timeline Node Ring */}
              <div className="absolute -left-[31px] md:-left-[49px] top-1.5 w-4 h-4 rounded-full bg-bg-dark border-2 border-accent-emerald group-hover:bg-accent-emerald group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
              
              {/* Modern Glassmorphic Detail Card */}
              <div className="bg-white/[0.02] border border-white/5 hover:border-accent-blue/20 rounded-3xl p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.04]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-accent-blue transition-colors duration-300 font-display">
                      {edu.institution}
                    </h3>
                    <p className="text-accent-emerald font-semibold text-sm md:text-base mt-1">
                      {edu.degree} &bull; <span className="text-gray-300 font-normal">{edu.major}</span>
                    </p>
                  </div>
                  <span className="inline-block px-4 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/25 text-accent-blue text-xs font-mono font-bold tracking-wider uppercase self-start md:self-auto">
                    {edu.period}
                  </span>
                </div>
                
                <p className="text-sm md:text-base text-gray-400 leading-relaxed font-normal">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
