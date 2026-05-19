import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 px-6 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(209,107,165,0.05)_0%,transparent_60%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-outfit uppercase tracking-[0.4em] text-xs mb-3 block font-bold">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 text-white tracking-tight">Certifications & <span className="text-gradient">Badges</span></h2>
          <div className="w-16 h-[3px] bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-sm" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-[2rem] border border-white/10 hover:border-primary/40 transition-all duration-300 group flex flex-col items-center text-center shadow-lg relative overflow-hidden h-full"
            >
              <div className="mb-8 p-6 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-all duration-300 relative border border-primary/20 shadow-sm">
                <Award size={48} className="text-primary" />
              </div>
              
              <h4 className="text-lg md:text-xl font-bold font-outfit mb-4 text-white leading-tight group-hover:text-primary transition-colors tracking-tight flex-grow">{cert.name}</h4>
              <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.2em] mb-8 bg-secondary/5 px-6 py-2 rounded-full border border-secondary/20">{cert.provider}</p>
              
              <button
                onClick={() => setSelectedCert(cert)}
                className="mt-auto w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                View Credential <ExternalLink size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                <h3 className="text-xl font-bold font-outfit text-white">{selectedCert.name}</h3>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-4 bg-dark/50 flex items-center justify-center min-h-[400px]">
                {selectedCert.image.endsWith('.pdf') ? (
                  <iframe 
                    src={selectedCert.image} 
                    className="w-full h-[70vh] rounded-xl"
                    title={selectedCert.name}
                  />
                ) : (
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.name} 
                    className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=1000";
                    }}
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
