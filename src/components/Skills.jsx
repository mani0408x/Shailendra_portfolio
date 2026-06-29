import { motion } from 'framer-motion';
import { skillsCategories, skillsData } from '../data/portfolioData';

const Skills = () => {
  // Group skills by category
  const skillsByCategory = skillsCategories.reduce((acc, cat) => {
    acc[cat.id] = {
      name: cat.name,
      skills: skillsData.filter(s => s.category === cat.id)
    };
    return acc;
  }, {});

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="bg-[#0B0B0B] py-28 px-6 md:px-12 w-full relative overflow-hidden border-t border-white/5">
      {/* Background blurs */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-accent-emerald/30 bg-accent-emerald/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-accent-emerald font-bold mb-4">
            Tech Stack
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight font-display">
            Skills &amp; Subjects
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-medium leading-relaxed mt-4">
            A comprehensive mapping of my programming stack, databases, developer tooling, and core academic study areas.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.keys(skillsByCategory).map((catId) => {
            const group = skillsByCategory[catId];
            return (
              <motion.div
                key={catId}
                variants={cardVariants}
                className="bg-white/[0.02] border border-white/5 hover:border-accent-blue/20 rounded-3xl p-6 backdrop-blur-md hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <h3 className="text-lg font-black font-display text-white mb-4 flex items-center justify-between">
                    <span>{group.name}</span>
                    <span className="text-xs font-mono font-bold text-accent-blue px-2.5 py-0.5 rounded-full bg-accent-blue/10">
                      {group.skills.length} Items
                    </span>
                  </h3>
                  
                  {/* Skills List Inside Category */}
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/5 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                          <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-gray-500 group-hover:text-accent-emerald transition-colors">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
