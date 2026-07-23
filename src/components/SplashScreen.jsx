import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from '../import/logo.webp';

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-navy text-white"
    >
      {/* Background glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none bg-teal/20" />

      <div className="flex flex-col items-center gap-6 z-10">
        {/* Glowing Logo Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          className="relative w-36 h-36 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(86,124,141,0.5)]"
        >
          {/* Continuous spinning outer dashed ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 border-[3px] border-dashed border-teal/40 rounded-full"
          />
          {/* Continuous spinning outer dotted ring */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[22px] border-[2px] border-dotted border-skyblue/30 rounded-full"
          />
          {/* Pulsing glow behind image */}
          <motion.div 
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-teal/20 rounded-full blur-md pointer-events-none"
          />
          
          <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center z-10 bg-transparent">
            <img src={logo} alt="Logo" width="144" height="144" decoding="async" className="w-full h-full object-cover scale-[1.07] origin-center" />
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl font-black uppercase tracking-[0.25em] font-display bg-clip-text text-transparent bg-gradient-to-r from-white via-skyblue to-teal"
          >
            Solvia Codes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[9px] font-black uppercase tracking-widest mt-1 text-skyblue"
          >
            Creative Technology Studio
          </motion.p>
        </div>

        {/* Loader bar */}
        <div className="w-40 h-1 rounded-full overflow-hidden border mt-4 bg-teal/15 border-teal/20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-teal to-skyblue"
          />
        </div>
      </div>
    </motion.div>
  );
}
