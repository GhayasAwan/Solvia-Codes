import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
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
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.6, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-3xl shadow-lg bg-gradient-to-br from-teal to-skyblue text-navy shadow-teal/30"
        >
          S
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
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-teal to-skyblue"
          />
        </div>
      </div>
    </motion.div>
  );
}
