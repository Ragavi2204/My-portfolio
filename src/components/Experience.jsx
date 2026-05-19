import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-6 bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-outfit uppercase tracking-[0.4em] text-xs mb-3 block font-bold">Career</span>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 text-white tracking-tight">Professional <span className="text-gradient">Journey</span></h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-sm" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/5" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal w-full group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-1/2 transform md:-translate-x-1/2 w-2 h-2 bg-primary rounded-full z-10 group-hover:scale-150 transition-transform duration-300 shadow-glow" />

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ml-10 md:ml-0 glass-card p-8 md:p-10 rounded-3xl border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-lg ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                    <h3 className="text-xl md:text-2xl font-bold font-outfit text-white group-hover:text-primary transition-colors tracking-tight">{exp.role}</h3>
                    <span className="flex items-center gap-2 text-secondary font-bold bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest">
                      <Calendar size={14} /> {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400 mb-8 font-medium font-inter text-sm">
                    <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                      <Building2 size={16} className="text-primary" />
                    </div>
                    {exp.company}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-400">
                        <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                        <span className="text-sm leading-relaxed font-inter font-light">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.tech && (
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                      {exp.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold rounded-lg border border-primary/20 uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
