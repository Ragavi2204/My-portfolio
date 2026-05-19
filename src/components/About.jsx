import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { summary, location } = portfolioData.personalInfo;
  const { education } = portfolioData;

  return (
    <section id="about" className="py-24 px-6 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(209,107,165,0.05)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-outfit uppercase tracking-[0.4em] text-xs mb-3 block font-bold">Profile</span>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 text-white tracking-tight">About <span className="text-gradient">Me</span></h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-sm" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Summary Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
            
            <h3 className="text-2xl md:text-3xl font-bold font-outfit mb-8 flex items-center gap-4 text-white tracking-tight">
              <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20 shadow-sm">
                <Briefcase size={28} />
              </div>
              Professional Profile
            </h3>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-10 font-inter font-light">
              {summary}
            </p>
            
            <div className="flex items-center gap-4 text-gray-200 bg-white/5 w-fit px-8 py-4 rounded-full border border-white/10 shadow-md hover:border-primary/40 transition-all duration-300">
              <MapPin size={22} className="text-primary" />
              <span className="text-sm font-bold tracking-[0.2em] uppercase">{location}</span>
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-outfit mb-10 flex items-center gap-4 text-white tracking-tight">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary border border-secondary/20 shadow-sm">
                <GraduationCap size={28} />
              </div>
              Academic Journey
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-primary/40 before:to-transparent">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary shadow-glow z-10" />
                  <div className="glass-card p-8 rounded-2xl border border-white/10 hover:border-secondary/40 transition-all duration-300 group shadow-lg relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-all" />
                    
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                      <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-secondary transition-colors font-outfit tracking-tight">{edu.institution}</h4>
                      <span className="text-[10px] font-bold bg-white/5 text-secondary px-4 py-2 rounded-full border border-secondary/20 flex items-center gap-2 uppercase tracking-[0.2em]">
                        <Calendar size={14} /> {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6 font-inter text-base font-light leading-relaxed">{edu.degree}</p>
                    <div className="text-primary font-bold font-outfit tracking-[0.1em] text-sm uppercase bg-primary/5 w-fit px-5 py-1.5 rounded-lg border border-primary/20 shadow-inner">{edu.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
