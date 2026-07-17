import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamMembers } from '../data/siteData.js';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality for infinity loop
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying, teamMembers.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    setIsAutoPlaying(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
    setIsAutoPlaying(false);
  };

  const variants = {
    center: { 
      x: "-50%", 
      y: "-50%",
      scale: 1, 
      zIndex: 5, 
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.6, type: "spring", bounce: 0.15 }
    },
    left: { 
      x: "-120%", 
      y: "-50%",
      scale: 0.8, 
      zIndex: 4, 
      opacity: 0.7, 
      rotateY: 10,
      transition: { duration: 0.6, type: "spring", bounce: 0.15 }
    },
    right: { 
      x: "20%", 
      y: "-50%",
      scale: 0.8, 
      zIndex: 4, 
      opacity: 0.7, 
      rotateY: -10,
      transition: { duration: 0.6, type: "spring", bounce: 0.15 }
    },
    hiddenLeft: { 
      x: "-150%", 
      y: "-50%",
      scale: 0.6, 
      zIndex: 3, 
      opacity: 0, 
      rotateY: 20,
      transition: { duration: 0.6 }
    },
    hiddenRight: { 
      x: "50%", 
      y: "-50%",
      scale: 0.6, 
      zIndex: 3, 
      opacity: 0, 
      rotateY: -20,
      transition: { duration: 0.6 }
    }
  };

  const getPosition = (index) => {
    const len = teamMembers.length;
    const diff = index - currentIndex;
    let offset = diff % len;
    
    // Normalize offset to be within -len/2 and len/2
    if (offset > Math.floor(len / 2)) offset -= len;
    if (offset < -Math.floor(len / 2)) offset += len;

    if (offset === 0) return "center";
    if (offset === -1) return "left";
    if (offset === 1) return "right";
    if (offset < -1) return "hiddenLeft";
    if (offset > 1) return "hiddenRight";
  };

  return (
    <div 
      className="relative w-full max-w-5xl mx-auto h-[600px] flex items-center justify-center overflow-visible"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {teamMembers.map((member, index) => {
        const position = getPosition(index);
        
        return (
          <motion.div
            key={member.name + index}
            className="absolute top-1/2 left-1/2 w-[320px] sm:w-[360px] h-[500px]"
            initial={false}
            animate={position}
            variants={variants}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            {/* Card Content - Taller Design */}
            <div className="w-full h-full rounded-[2rem] shadow-[0_20px_50px_rgba(2,56,89,0.5)] p-6 flex flex-col justify-between overflow-hidden relative group"
                 style={{ backgroundColor: '#023859', border: '1px solid #26658C' }}>
              
              {/* Top part - Member Name and Role */}
              <div className="z-10 text-center mt-4">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#54ACBF] mb-2">Member 0{index + 1}</p>
                <h3 className="font-display text-2xl font-extrabold text-white">{member.name}</h3>
                <p className="text-sm font-bold text-[#A7EBF2]/80 mt-1">{member.role}</p>
              </div>

              {/* Middle part - Initials or Avatar */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-32 rounded-full flex items-center justify-center font-display text-5xl font-extrabold shadow-inner transform group-hover:scale-110 transition-transform duration-500"
                     style={{ backgroundColor: 'rgba(84,172,191,0.1)', color: '#54ACBF', border: '1px solid #26658C' }}>
                  {member.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')
                    .slice(0, 2)}
                </div>
              </div>

              {/* Bottom part - Details and Plus Button */}
              <div className="z-10 flex items-end justify-between w-full mt-auto">
                <div className="px-4 py-3 rounded-2xl shadow-sm max-w-[70%]" style={{ backgroundColor: '#011C40', border: '1px solid #26658C' }}>
                  <p className="text-xs font-semibold text-[#A7EBF2]/90 line-clamp-2 leading-relaxed">
                    {member.bio || member.focus}
                  </p>
                </div>
                <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow flex-shrink-0 hover:scale-110"
                        style={{ background: 'linear-gradient(135deg,#54ACBF,#26658C)', color: 'white' }}>
                  <Plus size={20} strokeWidth={3} />
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Navigation Buttons */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button 
          onClick={handlePrev}
          className="w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors hover:bg-[#54ACBF] hover:text-white"
          style={{ backgroundColor: '#023859', color: '#54ACBF', border: '1px solid #26658C' }}
        >
          <ChevronLeft size={24} />
        </button>
        
        {/* Pagination Dots */}
        <div className="flex gap-2">
          {teamMembers.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoPlaying(false);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-6' : 'opacity-40 hover:opacity-100'
              }`}
              style={{ backgroundColor: '#54ACBF' }}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          className="w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors hover:bg-[#54ACBF] hover:text-white"
          style={{ backgroundColor: '#023859', color: '#54ACBF', border: '1px solid #26658C' }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
