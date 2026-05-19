import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState('');
  const name = "RAGAVI";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(name.slice(0, i));
      i++;
      if (i > name.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-plum"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: "circOut" }}
    >
      <div className="relative">
        <motion.div
          className="absolute -inset-20 bg-primary/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <div className="relative flex flex-col items-center">
          <motion.h1 
            className="text-5xl md:text-8xl font-bold text-white tracking-tighter font-outfit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {text}<span className="text-primary font-black animate-pulse">.</span>
          </motion.h1>
          
          <div className="mt-8 overflow-hidden w-48 h-[1px] bg-white/5 relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
      
          <motion.p 
            className="mt-6 text-gray-400 uppercase tracking-[0.5em] text-[10px] font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Creative Developer
          </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
