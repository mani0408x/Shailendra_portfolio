import { achievementsData } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="bg-[#0B0B0B] py-28 px-6 md:px-12 w-full relative overflow-hidden border-t border-white/5 text-white">
      {/* Background stars / grid */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#0066FF_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-accent-emerald/30 bg-accent-emerald/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-accent-emerald font-bold mb-4">
            Honors
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-display">
            Achievements
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievementsData.map((ach, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="relative group bg-white/[0.02] border border-white/5 hover:border-accent-emerald/30 rounded-3xl p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.04]"
            >
              <div className="flex items-start gap-5">
                {/* Achievement Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shrink-0 group-hover:bg-accent-emerald/10 group-hover:border-accent-emerald/20 transition-all duration-300">
                  {ach.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black text-white group-hover:text-accent-emerald transition-colors duration-300 font-display">
                    {ach.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
