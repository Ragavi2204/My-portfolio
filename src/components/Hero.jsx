import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Download, ArrowRight, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ResumeViewer from './ResumeViewer';

// Use direct paths for assets in the public folder
const profileImg = `${import.meta.env.BASE_URL}profile.jpg`;
const resumePdf = `${import.meta.env.BASE_URL}Ragavi_Resume.pdf`;

const Hero = () => {
  const { name, github, linkedin, email } = portfolioData.personalInfo;
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-20 px-6 relative overflow-hidden bg-dark">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-1.5 rounded-full bg-white/5 border border-primary/20 mb-6 shadow-sm"
          >
            <span className="text-primary font-outfit uppercase tracking-[0.3em] text-[10px] font-bold">
              Software Developer Portfolio
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit leading-tight mb-5 tracking-tight text-white">
            Hi, I'm <span className="text-gradient">Ragavi R</span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl text-secondary font-bold mb-6 h-8 font-inter tracking-tight">
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "AI & DS Student",
                "React Specialist",
                "Java Enthusiast"
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </div>

          <p className="text-gray-300 text-sm md:text-base mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-inter font-light">
            I specialize in building <span className="text-primary font-medium">elegant</span>, high-performance web applications with a focus on modern design and <span className="text-secondary font-medium">premium user experiences</span>.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="px-6 py-3.5 bg-white/5 border border-white/10 glass-card rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group text-white uppercase tracking-wider shadow-lg"
            >
              <Eye size={18} className="group-hover:text-primary transition-colors" /> View Resume
            </button>
            
            <a 
              href={resumePdf}
              download="Ragavi_Resume.pdf"
              className="px-6 py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 uppercase tracking-wider"
            >
              <Download size={18} /> Download CV
            </a>

            <a href={portfolioData.personalInfo.gmailLink} target="_blank" rel="noreferrer">
              <button
                className="px-6 py-3.5 border border-white/10 glass-card rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 text-white uppercase tracking-wider shadow-lg"
              >
                Contact Me <ArrowRight size={18} className="text-secondary" />
              </button>
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 pt-2">
            <a href={github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-secondary transition-all transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href={portfolioData.personalInfo.gmailLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-all transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          <div className="relative w-64 h-64 md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px]">
            {/* Elegant Glow & Rings */}
            <div className="absolute -inset-8 bg-primary/10 rounded-full blur-[80px] animate-pulse-slow" />
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/30 rounded-[2.5rem] rotate-6 animate-pulse" />
            
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden glass shadow-2xl floating border border-white/20">
              <img 
                src={profileImg} 
                alt="Ragavi R"
                className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-110"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"; // Fallback
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-plum/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Glass Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass-card px-6 py-4 rounded-2xl border border-white/20 flex flex-col gap-1 backdrop-blur-2xl shadow-xl"
            >
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Status</span>
              <span className="text-sm font-bold text-white uppercase tracking-widest">Available for Hire</span>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Resume Modal */}
      <ResumeViewer 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        resumeUrl={resumePdf}
      />
    </section>
  );
};

export default Hero;
