import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const skillGroups = [
    { category: "Languages", items: skills.languages, icon: Code2 },
    { category: "Frontend", items: skills.frontend, icon: Layout },
    { category: "Backend", items: skills.backend, icon: Server },
    { category: "Database", items: skills.database, icon: Database },
    { category: "Tools", items: skills.tools, icon: Wrench },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-outfit uppercase tracking-[0.4em] text-xs mb-3 block font-bold">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 text-white tracking-tight">Technical <span className="text-gradient">Skills</span></h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-sm" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-300 group shadow-lg flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 group-hover:scale-110 transition-transform shadow-sm">
                  <skillGroup.icon size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-outfit text-white tracking-tight">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-white/5 text-gray-300 text-sm font-medium rounded-xl border border-white/10 hover:border-secondary/40 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
