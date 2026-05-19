import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ZoomIn, ZoomOut } from 'lucide-react';

const ResumeViewer = ({ isOpen, onClose, resumeUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl h-[85vh] bg-dark-plum rounded-2xl overflow-hidden glass shadow-2xl flex flex-col border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-4">
                <h3 className="text-white font-outfit font-medium">Resume Viewer</h3>
                <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5 text-[10px] text-gray-400 uppercase tracking-widest">
                  Professional Profile
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <a 
                  href={resumeUrl} 
                  download="Ragavi_Resume.pdf"
                  className="p-2 hover:bg-primary/20 rounded-full transition-colors text-gray-300 hover:text-primary"
                  title="Download Resume"
                >
                  <Download size={20} />
                </a>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-300 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Viewer Area */}
            <div className="flex-1 overflow-auto bg-[#333] p-4 md:p-8 flex justify-center">
              <div className="relative w-full max-w-4xl shadow-2xl bg-white rounded-sm overflow-hidden">
                {/* PDF Object or Fallback */}
                <object
                  data={resumeUrl}
                  type="application/pdf"
                  className="w-full h-full min-h-[70vh]"
                >
                  <div className="flex flex-col items-center justify-center h-full p-12 text-center bg-dark-plum">
                    <p className="text-gray-400 mb-6">It looks like your browser doesn't support direct PDF viewing.</p>
                    <a 
                      href={resumeUrl} 
                      download
                      className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all glow-feminine"
                    >
                      Download Resume to View
                    </a>
                  </div>
                </object>
              </div>
            </div>

            {/* Footer / Controls (Simplified for now) */}
            <div className="px-6 py-3 border-t border-white/5 bg-white/5 flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest">
              <span>Ragavi R - Portfolio 2026</span>
              <div className="flex items-center gap-4">
                <button className="hover:text-white transition-colors flex items-center gap-1">
                  <ZoomIn size={14} /> Zoom In
                </button>
                <button className="hover:text-white transition-colors flex items-center gap-1">
                  <ZoomOut size={14} /> Zoom Out
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeViewer;
