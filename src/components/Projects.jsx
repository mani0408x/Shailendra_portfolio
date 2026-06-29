import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-[#0B0B0B] py-28 px-6 md:px-12 w-full relative overflow-hidden border-t border-white/5 text-white">
      {/* Decorative background grid and blurs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-accent-blue/30 bg-accent-blue/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-accent-blue font-bold mb-4">
            Showcase
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight font-display">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-medium leading-relaxed mt-4">
            A selection of platforms and analytical tools engineered to address concrete academic and enterprise challenges.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative bg-white/[0.02] border border-white/5 hover:border-accent-blue/30 rounded-3xl p-6 backdrop-blur-md hover:bg-white/[0.05] transition-all duration-500 cursor-pointer shadow-2xl flex flex-col justify-between min-h-[360px]"
            >
              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20">
                      +{project.tech.length - 3} More
                    </span>
                  )}
                </div>

                {/* Title & Short Desc */}
                <span className="text-[10px] font-mono text-accent-blue font-bold uppercase tracking-wider block mb-2">{project.category}</span>
                <h3 className="text-xl md:text-2xl font-black mb-3 group-hover:text-accent-blue transition-colors duration-300 font-display">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-normal mb-6">
                  {project.shortDesc}
                </p>
              </div>

              {/* Bottom Card details */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                <span className="text-[10px] font-mono text-accent-emerald font-bold tracking-wider uppercase">
                  Production Ready
                </span>
                <span className="text-xs font-bold text-white group-hover:translate-x-2 transition-all duration-300 flex items-center gap-1.5">
                  Analyze 
                  <svg className="w-4 h-4 text-accent-blue" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="bg-[#121212] border border-white/10 max-w-3xl w-full rounded-3xl p-6 md:p-8 max-h-[90vh] overflow-y-auto relative shadow-[0_25px_60px_rgba(0,0,0,0.8)] scrollbar-thin scrollbar-thumb-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white hover:text-accent-blue transition-colors"
                aria-label="Close details"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="mt-4">
                <span className="text-xs font-mono font-bold text-accent-blue uppercase tracking-widest">{selectedProject.category}</span>
                <h3 className="text-2xl md:text-4xl font-black mt-2 mb-6 leading-tight pr-10 font-display">{selectedProject.title}</h3>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Problem & Solution Grids */}
                <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                  
                  <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5">
                    <h4 className="text-white font-bold text-sm mb-2 font-mono uppercase tracking-wide flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      Problem Statement
                    </h4>
                    <p className="text-gray-400 text-sm">{selectedProject.problem}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5">
                    <h4 className="text-white font-bold text-sm mb-2 font-mono uppercase tracking-wide flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald"></span>
                      Engineering Solution
                    </h4>
                    <p className="text-gray-400 text-sm">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-base mb-2 font-mono uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent-blue font-bold shrink-0">&bull;</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.id === 3 && (
                    <div className="p-5 rounded-2xl bg-accent-emerald/5 border border-accent-emerald/10">
                      <h4 className="text-accent-emerald font-bold text-sm mb-2 font-mono uppercase tracking-wide">Performance Improvements</h4>
                      <p className="text-gray-300 text-xs font-mono">
                        Configured relational database schema indexing inside MySQL, improving query retrieval speed. Integrated Pandas vectorized functions to sanitize metrics in batches rather than row-by-row, reducing processor overhead.
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer action links */}
                <div className="flex flex-wrap gap-4 mt-10 pt-6 border-t border-white/5">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full text-xs md:text-sm font-bold bg-accent-blue hover:bg-accent-blue/90 text-white transition-all duration-300 transform hover:scale-105"
                  >
                    GitHub Code
                  </a>
                  <a 
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full text-xs md:text-sm font-bold bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    Live Demo Link
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
