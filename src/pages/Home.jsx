import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { 
  ArrowRight, Sparkles, Send, Mail, MapPin, Phone, 
  Code2, Smartphone, Palette, ShieldCheck, ArrowDown
} from 'lucide-react';
import { company } from '../data/siteData.js';
import SolarSystemOrbit from '../components/SolarSystemOrbit.jsx';
import MorphWord from '../components/MorphWord.jsx';
import heroVideo from '../import/hero section video.mp4';
import SocialFlipButton from '../components/SocialFlipButton.jsx';
import TeamCard from '../components/TeamCard.jsx';
import wardaImg from '../import/warda.png';
import hamzaImg from '../import/hamza.png';
import ghayasImg from '../import/ghayas.png';
import faizanImg from '../import/faizan.jpg';

// Custom SVG Brand Icons
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsappIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

// Inline component for the Scroll Highlight text inside About stage card
function ScrollHighlightText({ text, scrollY, range }) {
  const words = text.split(" ");
  const [start, end] = range;

  return (
    <p className="flex flex-wrap justify-center text-lg sm:text-2xl md:text-3xl text-navy/30 font-medium leading-relaxed max-w-4xl mx-auto">
      {words.map((word, i) => {
        const wordStart = start + (i / words.length) * (end - start);
        const wordEnd = start + ((i + 1) / words.length) * (end - start);
        
        // Transform opacity and blur based on dynamic scroll range
        const opacity = useTransform(scrollY, [wordStart, wordEnd], [0.2, 1]);
        const scale = useTransform(scrollY, [wordStart, wordEnd], [0.98, 1]);
        const blurVal = useTransform(scrollY, [wordStart, wordEnd], [3, 0]);
        const blur = useTransform(blurVal, (v) => `blur(${v}px)`);

        return (
          <motion.span 
            key={i} 
            style={{ opacity, scale, filter: blur }}
            className="inline-block mr-2 mb-2 transition-all duration-75 text-navy font-bold"
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}



// AboutSection Standalone scroll reveal component
function AboutSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.05, 0.25], [0.95, 1]);

  return (
    <section ref={targetRef} id="about" className="py-32 relative bg-beige transition-colors duration-500 overflow-hidden border-t border-skyblue/30">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-skyblue/25 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        style={{ opacity, scale }}
        className="container-page max-w-4xl px-4 relative z-10 mx-auto"
      >
        <div className="w-full p-8 sm:p-14 rounded-[32px] border border-skyblue/40 bg-white/70 backdrop-blur-2xl shadow-soft relative overflow-hidden text-center transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-teal/8 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 relative z-10"
          >
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-widest bg-gradient-to-br from-navy via-teal to-skyblue bg-clip-text text-transparent drop-shadow-sm font-display inline-block">
              About
            </h2>
          </motion.div>

          <ScrollHighlightText 
            text="We are developers, creators, and structural engineers. We specialize in transforming complex problems into fluid, interactive, and visually stunning digital products. Through clean system architecture, custom WebGL algorithms, and glassmorphic designs, we make your software scale effortlessly while keeping users highly engaged."
            scrollY={scrollYProgress}
            range={[0.0, 0.35]}
          />
        </div>
      </motion.div>
    </section>
  );
}

// TeamSection Component
function TeamSection() {
  const teamMembers = [
    {
      name: "Ghayas Awan",
      role: "Founder & COO",
      image: ghayasImg,
      bio: "Spearheading system architecture, full-stack development, and custom interactive engine implementations.",
      github: "https://github.com/GhayasAwan/3d-product-project.git",
      linkedin: "https://www.linkedin.com/in/ghayas-awan-a056333a1"
    },
    {
      name: "Muhammad Hamza",
      role: "Co-Founder & CEO",
      image: hamzaImg,
      bio: "Leading development teams, driving technical strategy, and engineering robust, scalable software architectures.",
      github: "https://github.com/muhammad-hamzadev",
      linkedin: "https://www.linkedin.com/in/muhammad-hamza-deve",
      portfolio: "https://hamzax.me/"
    },
    {
      name: "Warda Mehmood",
      role: "UI/UX Designer & Frontend Dev",
      image: wardaImg,
      bio: "Crafting premium user interfaces, cohesive design systems, and stunning interactive frontend experiences.",
      github: "https://github.com/WardaMehmood",
      linkedin: "https://www.linkedin.com/in/warda-mehmood-212101292/"
    },
    {
      name: "Muhammad Faizan",
      role: "Senior Backend & PWA Dev",
      image: faizanImg,
      bio: "Architecting powerful backend infrastructures, APIs, and progressive web applications with seamless performance.",
      github: "https://github.com/Faizan-ux-dot",
      linkedin: "https://www.linkedin.com/in/muhammad-faizan-a9ab85281"
    }
  ];

  return (
    <section id="team" className="py-24 relative bg-beige border-t border-skyblue/30 transition-colors duration-500 overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-teal/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container-page max-w-6xl px-4 relative z-10 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-widest text-teal bg-teal/10 border border-teal/20 px-3 py-1 rounded-full">
            Our Team
          </span>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-navy mt-4 font-display">
            The Minds Behind Solvia
          </h3>
          <p className="mt-3 text-navy/55 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
            Meet the engineers and creators building next-generation digital platforms and user experiences.
          </p>
        </div>

        {/* Grid of Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {teamMembers.map((member, idx) => (
            <TeamCard key={idx} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default function Home() {
  const containerRef = useRef(null);
  
  return (
    <div ref={containerRef} className="bg-beige text-navy min-h-screen relative overflow-hidden selection:bg-teal selection:text-white transition-colors duration-500">
      
      {/* GLOBAL BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-skyblue/25 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[500px] h-[500px] bg-gradient-to-bl from-skyblue/20 to-transparent rounded-full blur-[130px] pointer-events-none" />

      {/* ========================================== */}
      {/* HERO SECTION (Simplified - No Pinning)     */}
      {/* ========================================== */}
      <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy transition-colors duration-500">
        
        {/* Ambient Video Background Loop - More Visible */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
          src={heroVideo}
        />
        
        {/* Visual gradient overlays - significantly lighter so video is very visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/10 via-navy/30 to-navy/80 z-[1] pointer-events-none" />

        {/* ---- Floating Animated Tool Logos ---- */}
        {/* React */}
        <div className="absolute top-[12%] left-[8%] z-[2] animate-float-slow opacity-30 pointer-events-none">
          <svg width="48" height="48" viewBox="-11.5 -10.232 23 20.463" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="2.05" fill="#61DAFB"/>
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        </div>
        {/* Next.js */}
        <div className="absolute top-[18%] right-[10%] z-[2] animate-float-medium opacity-25 pointer-events-none" style={{ animationDelay: '1s' }}>
          <svg width="44" height="44" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="90" r="85" stroke="white" strokeWidth="4" fill="none"/>
            <path d="M72 63v54l42-54" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <line x1="117" y1="63" x2="117" y2="99" stroke="white" strokeWidth="6" strokeLinecap="round"/>
          </svg>
        </div>
        {/* Figma */}
        <div className="absolute bottom-[22%] left-[6%] z-[2] animate-float-fast opacity-20 pointer-events-none" style={{ animationDelay: '2s' }}>
          <svg width="32" height="48" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 28.5a9.5 9.5 0 1 1 0-19h9.5v19H19Z" fill="#A259FF"/>
            <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" fill="#0ACF83"/>
            <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z" fill="#FF7262"/>
            <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" fill="#A259FF"/>
          </svg>
        </div>
        {/* Node.js */}
        <div className="absolute bottom-[28%] right-[7%] z-[2] animate-float-slow opacity-25 pointer-events-none" style={{ animationDelay: '0.5s' }}>
          <svg width="44" height="48" viewBox="0 0 256 289" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.155.795-.53 1.855-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.082c0-1.325-.53-2.385-1.59-2.915L128.925 19.167c-1.06-.53-2.385-.53-3.18 0L20.005 80.432c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.635 7.95 25.44-1.325 25.44-10.6V93.682c0-1.59 1.325-3.18 3.18-3.18h13.515c1.59 0 3.18 1.325 3.18 3.18v120.845c0 20.936-11.395 33.126-31.27 33.126-6.095 0-10.865 0-24.38-6.625L10.4 224.598C3.775 220.888 0 213.733 0 206.048V83.877c0-7.685 3.775-14.84 10.4-18.55L116.14 4.11c6.36-3.71 14.84-3.71 21.2 0L243.6 65.327c6.625 3.71 10.4 10.865 10.4 18.55v122.17c0 7.685-3.775 14.84-10.4 18.55L137.86 285.814c-3.18 1.855-6.89 2.65-9.86 2.65Z" fill="#539E43"/>
          </svg>
        </div>
        {/* Tailwind CSS */}
        <div className="absolute top-[35%] left-[15%] z-[2] animate-float-medium opacity-20 pointer-events-none" style={{ animationDelay: '1.5s' }}>
          <svg width="50" height="30" viewBox="0 0 54 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2Z" fill="#38BDF8"/>
          </svg>
        </div>
        {/* TypeScript */}
        <div className="absolute top-[45%] right-[14%] z-[2] animate-float-fast opacity-20 pointer-events-none" style={{ animationDelay: '3s' }}>
          <svg width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="256" height="256" rx="20" fill="#3178C6"/>
            <path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.259 4.492-2.906 8.048-6.796 10.669-11.672 2.621-4.875 3.931-10.937 3.931-18.186 0-5.236-.871-9.777-2.613-13.625-1.742-3.848-4.147-7.234-7.214-10.157-3.067-2.924-6.665-5.525-10.793-7.804-4.128-2.278-8.583-4.441-13.365-6.488-3.513-1.496-6.697-2.953-9.553-4.37-2.856-1.418-5.302-2.875-7.34-4.371-2.037-1.496-3.612-3.108-4.726-4.833-1.114-1.726-1.671-3.732-1.671-6.017 0-2.111.5-3.982 1.5-5.613 1-1.63 2.38-3.011 4.14-4.142 1.76-1.13 3.856-1.994 6.288-2.591 2.432-.596 5.081-.895 7.948-.895 1.971 0 4.071.155 6.302.463 2.23.309 4.468.81 6.714 1.5 2.246.691 4.393 1.555 6.44 2.591 2.048 1.037 3.905 2.285 5.571 3.745v-25.72c-4.084-1.611-8.59-2.818-13.519-3.62-4.928-.803-10.513-1.204-16.754-1.204-6.564 0-12.782.705-18.654 2.115-5.871 1.41-11.03 3.621-15.477 6.632-4.447 3.011-7.98 6.912-10.598 11.703-2.618 4.79-3.927 10.562-3.927 17.315 0 8.652 2.547 16.007 7.642 22.066 5.095 6.059 12.637 11.004 22.625 14.834 3.922 1.497 7.585 3.011 10.988 4.545 3.404 1.534 6.359 3.165 8.866 4.892 2.508 1.726 4.484 3.667 5.928 5.822 1.443 2.154 2.165 4.633 2.165 7.435 0 1.94-.442 3.72-1.328 5.339-.885 1.62-2.238 3.012-4.059 4.178-1.821 1.166-4.105 2.072-6.853 2.72-2.748.647-5.968.97-9.661.97-6.389 0-12.582-1.217-18.579-3.65-5.998-2.434-11.276-5.968-15.835-10.603ZM108.322 133.781h28.207V110H50v23.781h28.108v77.803h30.214v-77.803Z" fill="white"/>
          </svg>
        </div>
        {/* VS Code */}
        <div className="absolute bottom-[15%] left-[20%] z-[2] animate-float-slow opacity-15 pointer-events-none" style={{ animationDelay: '2.5s' }}>
          <svg width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M180.948 252.545L5.768 197.023.395 189.858l-.29-124.466 5.918-7.48L180.948 3.35l74.656 36.593v175.855l-74.656 36.747Z" fill="#0065A9"/>
            <path d="M180.948 3.35L5.768 57.912l-.29 124.466 5.918 7.48 169.552-53.93V3.35Z" fill="#007ACC"/>
            <path d="M180.948 135.928L5.768 189.858l-.29-124.466L180.948 3.35v132.578Z" fill="#1F9CF0"/>
            <g opacity=".25">
              <path d="M109.149 128.041l71.799-55.7V71.99L88.62 128.041l92.328 56.05v-16.16l-71.8-41.89Z" fill="white"/>
            </g>
          </svg>
        </div>
        {/* GitHub Octocat silhouette */}
        <div className="absolute top-[60%] right-[22%] z-[2] animate-float-medium opacity-15 pointer-events-none" style={{ animationDelay: '0.8s' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z"/>
          </svg>
        </div>

        <div className="container-page relative z-10 text-center flex flex-col items-center justify-center h-full pt-16 px-4 mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 shadow-card mb-5 backdrop-blur-md">
            <Sparkles size={12} className="text-skyblue animate-pulse" />
            <span className="text-[9px] font-black tracking-widest text-white/80 uppercase">Interactive 3D Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.1] max-w-4xl text-white font-display drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
            Smart Software
            <MorphWord 
              words={["Solutions", "Ecosystems", "Interfaces"]}
            />
            <div className="mt-2 md:mt-3">for Digital Leaders</div>
          </h1>

          <p className="mt-5 text-[11px] sm:text-sm text-white/60 max-w-xl leading-relaxed">
            We shape raw concepts into high-converting interfaces, complex cloud backends, and fully custom interactive web products.
          </p>

          <div className="mt-10 flex flex-col items-center gap-2 animate-bounce opacity-50">
            <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Scroll down to explore</span>
            <div className="w-4 h-6 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-1 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* ABOUT SECTION (Standalone Scroll Reveal)   */}
      {/* ========================================== */}
      <AboutSection />
      <TeamSection />

      {/* ========================================== */}
      {/* SERVICES SECTION (Solar System Orbit)      */}
      {/* ========================================== */}
      <section id="services" className="py-32 relative bg-navy text-white border-t border-skyblue/30 transition-colors duration-500">
        <div className="container-page mx-auto px-4">
          <SolarSystemOrbit />
        </div>
      </section>

      {/* ========================================== */}
      {/* PROJECTS SECTION (Coming Soon)             */}
      {/* ========================================== */}
      <section id="work" className="py-32 relative bg-beige text-navy border-t border-skyblue/30 transition-colors duration-500">
        <div className="container-page mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-teal bg-teal/10 border border-teal/20 px-3 py-1 rounded-full">
              Our Work
            </span>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-navy mt-4 font-display">
              Featured Projects
            </h3>
          </div>
          
          <div className="w-full max-w-2xl p-10 rounded-[32px] border border-skyblue/40 bg-white/80 backdrop-blur-2xl shadow-soft flex flex-col items-center justify-center text-center relative overflow-hidden group">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-teal/10 to-skyblue/10 rounded-full blur-[80px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
             <Code2 size={48} className="text-teal mb-6 opacity-80" />
             <h4 className="text-2xl sm:text-3xl font-black text-navy font-display mb-3 relative z-10">
               Coming Soon
             </h4>
             <p className="text-navy/60 max-w-md text-sm sm:text-base leading-relaxed relative z-10">
               We are currently curating our best interactive projects and case studies. Check back shortly to explore our custom software and digital experiences.
             </p>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* CONTACT SECTION (Form & Glass Dock)        */}
      {/* ========================================== */}
      <section id="contact" className="py-32 relative bg-beige border-t border-skyblue/30 transition-colors duration-500">
        <div className="container-page max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs font-black tracking-[0.25em] text-teal uppercase mb-4">Start a Project</p>
            <h3 className="text-3xl sm:text-5xl font-black text-navy">Let's Build Together</h3>
            <p className="mt-3 text-navy/55 text-sm max-w-md mx-auto leading-relaxed">
              Have a product idea or system that needs premium 3D engineering? Shoot us a message!
            </p>
          </div>

          {/* Form & Info Split */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* Contact Details Card */}
            <div className="p-8 rounded-3xl border border-skyblue/40 bg-white/80 backdrop-blur-xl flex flex-col justify-between shadow-soft relative overflow-hidden transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <h4 className="text-xl font-bold text-navy mb-6">Contact Information</h4>
                
                <div className="flex flex-col gap-6 text-sm font-medium text-navy/70">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-skyblue/20 border border-skyblue/30 flex items-center justify-center text-teal">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-navy/40 uppercase tracking-wider font-bold">Email Address</span>
                      <a href="mailto:hello@solviacodes.com" className="hover:text-teal transition-colors">hello@solviacodes.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-skyblue/20 border border-skyblue/30 flex items-center justify-center text-teal">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-navy/40 uppercase tracking-wider font-bold">Phone Number</span>
                      <a href="tel:+923001234567" className="hover:text-teal transition-colors">+92 300 1234567</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-skyblue/20 border border-skyblue/30 flex items-center justify-center text-teal">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-navy/40 uppercase tracking-wider font-bold">HQ Location</span>
                      <span className="text-navy">Lahore, Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Integrates the requested Social Flip Button for social links inside the contact card! */}
              <SocialFlipButton />
            </div>

            {/* Simple Form card */}
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="p-8 rounded-3xl border border-skyblue/40 bg-white/50 backdrop-blur-xl flex flex-col justify-between shadow-soft gap-5 transition-colors duration-500"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy/50 mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white border border-skyblue/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal text-navy transition-colors placeholder:text-navy/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy/50 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-white border border-skyblue/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal text-navy transition-colors placeholder:text-navy/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy/50 mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Hey, let's talk about building an app..." 
                  className="w-full bg-white border border-skyblue/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal text-navy transition-colors resize-none placeholder:text-navy/30"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-navy to-teal text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(86,124,141,0.3)] transition-shadow active:scale-95 duration-150"
              >
                <span>Send Inquiry</span>
                <Send size={15} />
              </button>
            </form>

          </div>
        </div>
      </section>

    </div>
  );
}
