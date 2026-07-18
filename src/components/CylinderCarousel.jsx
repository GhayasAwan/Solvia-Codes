import React from "react";
import { cn } from "../lib/utils.js";
import { projects } from "../data/siteData.js";
import { ArrowRight } from "lucide-react";

export default function CylinderCarousel({
  items = projects,
  className,
  ...props
}) {
  // Duplicate items to ensure seamless infinite looping marquee scroll
  const doubledItems = [...items, ...items, ...items];

  return (
    <div
      className={cn(
        "w-full overflow-hidden py-24 relative z-10 bg-beige border-t border-skyblue/30 transition-colors duration-500",
        className
      )}
      {...props}
    >
      {/* Ambient Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#567C8D08_1px,transparent_1px),linear-gradient(to_bottom,#567C8D08_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />
      
      {/* Title / Description */}
      <div className="text-center mb-16 relative z-10 px-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-teal bg-teal/10 border border-teal/25 px-3 py-1 rounded-full">
          Featured Work
        </span>
        <h3 className="text-3xl sm:text-5xl font-extrabold text-navy mt-4 font-display">
          Our Immersive{"  "}
          <span className="bg-gradient-to-r from-navy via-teal to-skyblue bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(86,124,141,0.15)]">
            Horizontal Project Flow
          </span>
        </h3>
        <p className="mt-3 text-navy/60 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          Explore our system designs and interactive applications. Hover over the cards to pause the flow.
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="w-full relative flex overflow-x-hidden z-10">
        {/* Left/Right blur shadows for edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-48 bg-gradient-to-r from-beige to-transparent z-10 pointer-events-none transition-colors duration-500" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-48 bg-gradient-to-l from-beige to-transparent z-10 pointer-events-none transition-colors duration-500" />

        {/* Marquee Track */}
        <div
          className="flex gap-6 animate-marquee-flow hover:[animation-play-state:paused] cursor-pointer py-4"
          style={{
            width: "max-content"
          }}
        >
          {/* Keyframes Style injection */}
          <style>
            {`
              @keyframes marquee-flow {
                0% { transform: translateX(-33.3333%); }
                100% { transform: translateX(0%); }
              }
              .animate-marquee-flow {
                animation: marquee-flow 45s linear infinite;
              }
            `}
          </style>

          {doubledItems.map((project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              className="w-[290px] sm:w-[340px] shrink-0 rounded-3xl border border-skyblue/40 bg-white/90 backdrop-blur-xl p-4 sm:p-5 flex flex-col justify-between h-[360px] shadow-card transition-all duration-300 hover:border-teal/50 hover:-translate-y-1.5 hover:shadow-glow"
            >
              {/* Project Image */}
              <div className="relative w-full h-[160px] rounded-2xl overflow-hidden mb-4 group/img">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent opacity-85" />

                <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-widest bg-teal text-white px-2 py-0.5 rounded-md shadow-md">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="text-left">
                  <h4 className="text-base sm:text-lg font-extrabold text-navy leading-tight font-display hover:text-teal transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-navy/55 mt-2 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* External Action */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-teal mt-3 hover:text-navy transition-colors w-fit">
                  <span>Explore Case Study</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
