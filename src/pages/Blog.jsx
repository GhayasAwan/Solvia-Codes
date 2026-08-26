import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Clock, ArrowRight, ArrowLeft, ArrowUpRight, Globe, X, Sparkles, BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs, company } from '../data/siteData.js';

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Lock body scroll when reading an article modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedArticle]);



  return (
    <div className="min-h-screen bg-beige text-navy pt-32 pb-24 sm:pt-36 sm:pb-28">
      <div className="container-page max-w-4xl mx-auto px-4 sm:px-6">


        {/* Page Hero Header Card Box */}
        <div className="w-full rounded-[28px] sm:rounded-[32px] border border-skyblue/40 bg-white/95 backdrop-blur-xl shadow-soft p-7 sm:p-10 text-center max-w-4xl mx-auto mb-10 sm:mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-teal/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-teal bg-teal/15 border border-teal/30 px-3.5 py-1 rounded-full shadow-xs mb-3">
            <BookOpen size={12} className="text-teal" />
            <span>INSIGHTS & ARTICLES</span>
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy font-display tracking-tight leading-tight mt-1">
            Solvia Codes's <span className="text-teal">Case Studies</span>
          </h1>

          <p className="mt-3 text-navy-800 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Explore in-depth architectural analyses, design systems, and full-stack engineering breakdowns from our live client deployments.
          </p>
        </div>

        {/* Blog Cards Grid (Compact & Balanced Sizing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-2xl sm:rounded-3xl border border-skyblue/40 bg-white/95 p-4 sm:p-5 shadow-soft flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Thumbnail container (Fills card frame edge-to-edge) */}
                <div className="relative w-full rounded-2xl overflow-hidden mb-3.5 bg-slate-900/5 border border-skyblue/40 shadow-inner aspect-[16/9] max-h-[195px]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Date & Read Time Meta */}
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-teal mb-1.5">
                  <Calendar size={12} className="text-teal" />
                  <span>{blog.date}</span>
                  <span>•</span>
                  <Clock size={11} />
                  <span>{blog.readTime}</span>
                  <span>•</span>
                  <span>Solvia Case Study</span>
                </div>

                {/* Title & Description */}
                <h2 className="text-base sm:text-lg font-bold text-navy font-display leading-snug">
                  {blog.title}
                </h2>
                <p className="mt-1.5 text-navy-800 text-xs leading-relaxed font-medium line-clamp-2">
                  {blog.summary}
                </p>

                {/* Tech Tags */}
                {blog.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {blog.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-bold text-navy-700 bg-skyblue/30 border border-skyblue/40 px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Action */}
              <div className="pt-3.5 mt-3.5 border-t border-skyblue/20 flex items-center justify-between">
                <span className="text-[10px] font-bold text-navy/85">
                  Full Case Study
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(blog)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-navy text-white hover:bg-teal transition-all text-xs font-bold tracking-wide group/link shadow-sm cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-[32px] bg-gradient-to-br from-navy via-navy to-teal text-white relative overflow-hidden shadow-lift flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[10px] font-black uppercase tracking-widest text-skyblue bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Start Your Project
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-display mt-3 leading-tight">
              Ready to build high-performance web software?
            </h3>
            <p className="mt-2 text-skyblue/90 text-xs sm:text-sm leading-relaxed">
              Let's engineer your custom SaaS, interactive web platform, or full brand experience with precision.
            </p>
          </div>

          <Link
            to="/#contact"
            className="px-6 py-3.5 rounded-2xl bg-white text-navy font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-skyblue transition-colors shrink-0 shadow-lg"
          >
            Get In Touch
          </Link>
        </div>

      </div>

      {/* ========================================== */}
      {/* ARTICLE READER MODAL                       */}
      {/* ========================================== */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-navy/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl border border-skyblue/40 shadow-2xl overflow-hidden flex flex-col my-auto text-navy"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-skyblue/20">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-teal flex items-center gap-1.5 bg-teal/10 px-3 py-1 rounded-full border border-teal/20">
                    <Clock size={12} />
                    {selectedArticle.readTime}
                  </span>
                  <span className="text-xs font-bold text-navy-700">
                    • Solvia Case Study
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-teal hover:text-white text-navy flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close article modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {/* Title & Date */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal mb-2">
                    <Calendar size={13} />
                    <span>{selectedArticle.date}</span>
                    <span>•</span>
                    <span>Solvia Codes Engineering Breakdown</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-navy font-display leading-tight">
                    {selectedArticle.title}
                  </h2>
                </div>

                {/* Cover Image in crisp aspect container */}
                <div className="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-skyblue/30 shadow-inner flex items-center justify-center p-2">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-auto object-contain rounded-xl max-h-[320px]"
                  />
                </div>

                {/* Summary Lead paragraph */}
                <p className="text-sm sm:text-base font-semibold text-navy/85 leading-relaxed bg-beige/60 p-4 rounded-2xl border border-skyblue/30">
                  {selectedArticle.summary}
                </p>

                {/* Tags */}
                {selectedArticle.tags && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedArticle.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-bold text-navy-700 bg-skyblue/30 border border-skyblue/40 px-3 py-1 rounded-lg"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Article Sections */}
                {selectedArticle.sections && (
                  <div className="space-y-6 pt-2">
                    {selectedArticle.sections.map((section, sIdx) => (
                      <div key={sIdx} className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-extrabold text-navy font-display">
                          {section.heading}
                        </h3>
                        {section.content && (
                          <p className="text-sm sm:text-base text-navy-800 leading-relaxed font-medium">
                            {section.content}
                          </p>
                        )}
                        {section.bullets && (
                          <ul className="space-y-2 mt-2">
                            {section.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-navy-800 font-medium leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0 mt-2" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Call to Action */}
              <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-50 border-t border-skyblue/20">
                <span className="text-xs font-bold text-navy/60">
                  Engineered by Solvia Codes
                </span>
                {selectedArticle.link && (
                  <a
                    href={selectedArticle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-navy to-teal text-white hover:opacity-90 transition-opacity text-xs font-bold shadow-md"
                  >
                    <Globe size={14} />
                    <span>Visit Live Platform</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
