import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-6 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-outfit uppercase tracking-[0.4em] text-xs mb-3 block font-bold">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 text-white tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-sm" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-[2rem] border border-white/10 hover:border-primary/40 transition-all duration-300 group shadow-xl flex flex-col h-full overflow-hidden"
            >
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary border border-primary/20">
                      <Code size={20} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold font-outfit text-white group-hover:text-primary transition-colors tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-300 text-base mb-8 font-inter font-light leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold rounded-lg border border-primary/20 uppercase tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
