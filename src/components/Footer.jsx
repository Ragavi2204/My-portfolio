import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { name, github, linkedin, email } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-24 px-8 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center mb-20 text-center md:text-left">
          {/* Logo & Name */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold font-outfit text-white tracking-tighter">
              RAGAVI<span className="text-primary text-6xl">.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-sm mx-auto md:mx-0 font-inter font-light leading-relaxed">
              Crafting digital experiences with <span className="text-primary font-semibold">elegance</span>, precision, and <span className="text-secondary font-semibold">modern excellence</span>.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-12">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={800}
                offset={-70}
                className="text-gray-300 hover:text-secondary transition-all cursor-pointer text-sm font-bold uppercase tracking-[0.4em] relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-end">
            <a href={github} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 hover:text-primary hover:border-primary/40 transition-all duration-300">
              <Github size={20} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 hover:text-secondary hover:border-secondary/40 transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href={portfolioData.personalInfo.gmailLink} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl border border-white/10 text-gray-400 hover:text-primary hover:border-primary/40 transition-all duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-center">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em]">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.4em] flex items-center gap-4">
            Designed with <Heart size={20} className="text-primary fill-primary/30 animate-pulse" /> by <span className="text-white font-black tracking-tighter">{name}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
