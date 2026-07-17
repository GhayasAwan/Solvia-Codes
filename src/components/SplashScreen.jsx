import React from 'react';
import { motion } from 'framer-motion';
import logoVideo from '../import/logovideo.mp4';

export default function SplashScreen({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
    >
      <video
        src={logoVideo}
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
        className="w-full h-full object-cover max-w-full max-h-full"
      />
    </motion.div>
  );
}
