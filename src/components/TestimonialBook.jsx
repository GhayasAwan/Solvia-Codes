import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, BookOpen, Star } from 'lucide-react';
import { testimonials } from '../data/siteData.js';

// Add client avatars/mock data
const bookPages = [
  {
    type: 'cover',
    title: 'Client Stories',
    subtitle: 'Read how we help startups & brands build their digital future.',
    actionText: 'Open Book to Read',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80'
  },
  ...testimonials.map((t, idx) => ({
    type: 'testimonial',
    quote: t.quote,
    name: t.name,
    role: t.role,
    rating: 5,
    project: idx === 0 ? 'Fintech Dashboard' : idx === 1 ? 'Lifestyle Application' : 'SaaS Site Launch',
    initials: t.name.split(' ').map(n => n[0]).join('')
  })),
  {
    type: 'end',
    title: 'Your Story Next?',
    subtitle: 'Let\'s collaborate and design something beautiful together.',
    actionText: 'Get in Touch',
    link: '#contact'
  }
];

export default function TestimonialBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next'); // 'next' or 'prev'

  const totalPages = bookPages.length;

  const handleNext = () => {
    if (currentPage < totalPages - 2 && !isFlipping) {
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection('prev');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  // Content render helper for pages
  const renderPageContent = (pageData) => {
    if (!pageData) return null;

    if (pageData.type === 'cover') {
      return (
        <div className="h-full flex flex-col justify-between items-center text-center p-6 sm:p-8 bg-gradient-to-br from-beige to-white">
          <div className="mt-8 flex flex-col items-center">
            <div className="w-16 h-16 rounded-3xl bg-teal/20 border border-teal/30 flex items-center justify-center text-navy-700 mb-6">
              <BookOpen size={30} className="animate-pulse" />
            </div>
            <h4 className="text-2xl font-black text-navy tracking-tight">{pageData.title}</h4>
            <p className="text-xs text-navy-800 font-medium mt-3 leading-relaxed max-w-[220px]">{pageData.subtitle}</p>
          </div>
          
          <button 
            onClick={handleNext}
            className="mb-6 px-5 py-2.5 rounded-full bg-navy text-white font-bold text-xs flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
          >
            <span>{pageData.actionText}</span>
            <ChevronRight size={14} />
          </button>
        </div>
      );
    }

    if (pageData.type === 'end') {
      return (
        <div className="h-full flex flex-col justify-between items-center text-center p-6 sm:p-8 bg-gradient-to-br from-white to-beige">
          <div className="mt-8 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-skyblue/20 border border-skyblue/30 flex items-center justify-center text-navy-700 mb-6">
              <Star size={24} className="fill-skyblue/30" />
            </div>
            <h4 className="text-xl font-bold text-navy tracking-tight">{pageData.title}</h4>
            <p className="text-xs text-navy-800 font-medium mt-3 leading-relaxed max-w-[200px]">{pageData.subtitle}</p>
          </div>
          
          <a
            href={pageData.link}
            className="mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-teal to-skyblue text-navy font-extrabold text-xs tracking-wider uppercase hover:shadow-[0_0_15px_rgba(86,124,141,0.4)] transition-shadow"
          >
            {pageData.actionText}
          </a>
        </div>
      );
    }

    // Testimonial details
    return (
      <div className="h-full flex flex-col justify-between p-6 sm:p-8 bg-white/80 backdrop-blur-md">
        <div>
          {/* Rating stars & Quote Icon */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(pageData.rating)].map((_, i) => (
                <Star key={i} size={12} className="fill-amber-400" />
              ))}
            </div>
            <Quote size={24} className="text-teal/20" />
          </div>

          {/* Quote Text */}
          <p className="text-xs sm:text-sm text-navy/80 italic leading-relaxed font-medium">
            "{pageData.quote}"
          </p>
        </div>

        {/* User Card */}
        <div className="flex items-center gap-3.5 border-t border-skyblue/10 pt-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal to-skyblue flex items-center justify-center text-navy font-bold text-xs shadow-md">
            {pageData.initials}
          </div>
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-navy leading-none">{pageData.name}</h5>
            <p className="text-[10px] text-navy/60 mt-1">{pageData.role}</p>
            <span className="inline-block text-[9px] font-black uppercase text-teal tracking-wider mt-1 bg-teal/10 px-2 py-0.5 rounded border border-teal/15">
              {pageData.project}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Determine indices of current left and right page
  const leftPageIndex = currentPage;
  const rightPageIndex = currentPage + 1;

  return (
    <div className="w-full py-16 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-navy">
          Client{' '}
          <span className="bg-gradient-to-r from-teal to-skyblue bg-clip-text text-transparent">
            Testimonials Book
          </span>
        </h3>
        <p className="mt-3 text-navy/55 text-sm max-w-md mx-auto leading-relaxed">
          Flip through the pages of our interactive book to see what founders and teams say about their experience.
        </p>
      </div>

      {/* 3D Book Container */}
      <div className="relative w-full max-w-2xl aspect-[1.5/1] min-h-[360px] md:min-h-[420px] rounded-[2rem] bg-white p-2 sm:p-4 shadow-soft border border-skyblue/30 perspective-2000 preserve-3d">
        <div className="relative w-full h-full flex preserve-3d rounded-2xl overflow-hidden border border-skyblue/20">
          
          {/* STATIC LEFT PAGE */}
          <div className="w-1/2 h-full bg-beige border-r border-skyblue/20 flex flex-col overflow-hidden">
            {renderPageContent(bookPages[leftPageIndex])}
          </div>

          {/* STATIC RIGHT PAGE */}
          <div className="w-1/2 h-full bg-beige flex flex-col overflow-hidden">
            {renderPageContent(bookPages[rightPageIndex])}
          </div>

          {/* BOOK SPINE GLOW EFFECT */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-r from-skyblue/10 via-white to-skyblue/10 shadow-inner z-30 pointer-events-none" />

          {/* ANIMATED FLIPPING SHEET */}
          <AnimatePresence initial={false}>
            {isFlipping && (
              <motion.div
                initial={{ rotateY: flipDirection === 'next' ? 0 : -180 }}
                animate={{ rotateY: flipDirection === 'next' ? -180 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  width: '50%',
                  height: '100%',
                  top: 0,
                  left: flipDirection === 'next' ? '50%' : 0,
                  transformOrigin: flipDirection === 'next' ? 'left center' : 'right center',
                  zindex: 40,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transformStyle: 'preserve-3d'
                }}
                className="bg-beige border-r border-skyblue/20 overflow-hidden shadow-2xl"
              >
                {/* Depending on rotation angle, show front or back page */}
                {flipDirection === 'next' ? (
                  <div className="w-full h-full">
                    {renderPageContent(bookPages[leftPageIndex + 1])}
                  </div>
                ) : (
                  <div className="w-full h-full" style={{ transform: 'rotateY(180deg)' }}>
                    {renderPageContent(bookPages[leftPageIndex])}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Manual Pagination Arrows */}
      <div className="mt-8 flex items-center gap-6 relative z-10">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0 || isFlipping}
          aria-label="Previous page"
          className={`w-10 h-10 rounded-full border border-skyblue/30 flex items-center justify-center text-navy/50 hover:text-navy hover:bg-skyblue/15 active:scale-95 transition-all shadow-md ${
            currentPage === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        <span className="text-xs font-extrabold uppercase tracking-widest text-navy/40">
          Page {currentPage + 1} of {totalPages - 1}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages - 2 || isFlipping}
          aria-label="Next page"
          className={`w-10 h-10 rounded-full border border-skyblue/30 flex items-center justify-center text-navy/50 hover:text-navy hover:bg-skyblue/15 active:scale-95 transition-all shadow-md ${
            currentPage >= totalPages - 2 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
