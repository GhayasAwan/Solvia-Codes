import React from 'react';
import { Globe, ArrowUpRight, ChevronRight } from 'lucide-react';
import { projects } from '../data/siteData.js';

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative bg-beige text-navy border-t border-skyblue/30 w-full pt-14 pb-28 sm:pt-16 sm:pb-36"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 relative z-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-navy bg-teal/20 border border-teal/30 px-3 py-1 rounded-full">
            Our Work
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-navy mt-3 font-display">
            Featured Projects
          </h3>
          <p className="mt-2 text-navy-800 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-medium">
            Scroll down to explore our stacked project deck.
          </p>
        </div>

        {/* Sticky Layered Deck Stack */}
        <div className="relative w-full">
          {projects.map((project, index) => {
            const isLast = index === projects.length - 1;
            // Incremental sticky top offset: Card 0 @ 75px, Card 1 @ 100px, Card 2 @ 125px, Card 3 @ 150px...
            const stickyTop = 75 + index * 25;

            return (
              <div
                key={project.id || index}
                className="sticky w-full rounded-3xl border border-skyblue/40 bg-white shadow-[0_-12px_30px_rgba(0,0,0,0.09),0_20px_45px_rgba(11,25,44,0.12)] overflow-hidden flex flex-col md:flex-row items-stretch transition-shadow duration-300"
                style={{
                  top: `${stickyTop}px`,
                  zIndex: index + 1,
                  marginBottom: isLast ? '100px' : '45vh',
                }}
              >
                {/* Left Column: Details, Description, Action Button */}
                <div className="w-full md:w-[42%] p-5 sm:p-6 flex flex-col justify-between bg-white z-10 min-h-[300px] sm:min-h-[340px]">
                  <div>
                    {project.featured && (
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="text-[10px] font-black uppercase tracking-wider bg-teal text-white px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          Live Project
                        </span>
                      </div>
                    )}

                    <h4 className="text-xl sm:text-2xl font-extrabold text-navy font-display leading-snug mb-2">
                      {project.title}
                    </h4>

                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] sm:text-xs font-bold text-navy bg-skyblue/25 border border-skyblue/40 px-2.5 py-0.5 rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-navy-800 text-xs sm:text-sm leading-relaxed font-medium mb-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-skyblue/20 flex items-center justify-between mt-auto">
                    {project.link && project.link !== '#' ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy text-white hover:bg-teal transition-all text-xs font-bold tracking-wide shadow-md hover:shadow-lg group"
                      >
                        <Globe size={14} className="text-skyblue group-hover:rotate-12 transition-transform" />
                        <span>Visit Live Website</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <div />
                    )}

                    <span className="text-[10px] font-bold text-teal/80 uppercase tracking-widest">
                      Solvia Engineered
                    </span>
                  </div>
                </div>

                {/* Right Column: Complete 100% Uncropped Project Preview */}
                <div className="w-full md:w-[58%] bg-slate-100/90 border-t md:border-t-0 md:border-l border-skyblue/20 p-4 sm:p-6 flex items-center justify-center min-h-[260px] md:min-h-[340px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#567C8D15_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  <img
                    src={project.image}
                    alt={`${project.title} - Solvia Codes Project`}
                    className="w-full h-full object-contain rounded-xl shadow-md relative z-10"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
