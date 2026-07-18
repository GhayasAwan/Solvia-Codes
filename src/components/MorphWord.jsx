import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useMotionValue } from "framer-motion";

export default function MorphWord({ words, scrollYProgress, range }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const fallbackMotionValue = useMotionValue(0);
  const motionVal = scrollYProgress || fallbackMotionValue;

  // Scroll-linked rotation (if scrollYProgress is provided)
  useMotionValueEvent(motionVal, "change", (latest) => {
    if (!scrollYProgress || !range) return;
    const [start, end] = range;
    if (latest >= start && latest <= end) {
      const progress = (latest - start) / (end - start);
      const index = Math.min(
        words.length - 1,
        Math.max(0, Math.floor(progress * words.length))
      );
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    } else if (latest < start && activeIndex !== 0) {
      setActiveIndex(0);
    } else if (latest > end && activeIndex !== words.length - 1) {
      setActiveIndex(words.length - 1);
    }
  });

  // Time-based auto-rotation (fallback if scrollYProgress is NOT provided)
  useEffect(() => {
    if (scrollYProgress) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [scrollYProgress, words.length]);

  const activeWord = words[activeIndex];

  return (
    <span className="inline-flex relative h-[1.1em] min-w-[140px] sm:min-w-[190px] md:min-w-[260px] text-left align-middle mx-1 sm:mx-2 overflow-visible">
      <AnimatePresence mode="wait">
        <motion.span
          key={activeWord}
          initial={{ opacity: 0, y: 12, rotateX: -60, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, rotateX: 60, filter: 'blur(8px)' }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ display: 'inline-block' }}
          className="absolute left-0 top-0 bg-gradient-to-r from-teal via-navy to-skyblue bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(86,124,141,0.25)] font-black"
        >
          {activeWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
