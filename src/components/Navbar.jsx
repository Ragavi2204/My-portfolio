import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold font-outfit tracking-wider text-white flex items-center gap-2"
        >
          <span className="text-primary text-3xl">R</span>
          <span className="tracking-[0.2em] font-light text-sm uppercase">agavi R</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="text-[12px] uppercase tracking-[0.25em] text-gray-400 hover:text-secondary cursor-pointer transition-all duration-500 relative group font-bold"
              activeClass="text-primary scale-110"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full shadow-[0_0_10px_rgba(209,107,165,0.5)]" />
            </Link>
          ))}
        </div>


        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)} className="hover:text-primary transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav overflow-hidden"
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  onClick={() => setIsOpen(false)}
                  className="text-lg uppercase tracking-[0.2em] text-gray-300"
                  activeClass="text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
