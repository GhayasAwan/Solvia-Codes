import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from 'framer-motion';
import { 
  ArrowRight, Sparkles, Send, Mail, MapPin, Phone, 
  Code2, Smartphone, Palette, ShieldCheck, ArrowDown
} from 'lucide-react';
import { company } from '../data/siteData.js';
import SolarSystemOrbit from '../components/SolarSystemOrbit.jsx';
import CylinderCarousel from '../components/CylinderCarousel.jsx';
import TestimonialBook from '../components/TestimonialBook.jsx';
import MorphWord from '../components/MorphWord.jsx';
import heroVideo from '../import/hero section video.mp4';

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

// macOS Dock Component
function GlassDock() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const dockItems = [
    { label: 'GitHub', icon: GithubIcon, href: 'https://github.com', color: 'hover:text-navy hover:bg-navy/10' },
    { label: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com', color: 'hover:text-pink-500 hover:bg-pink-500/10' },
    { label: 'WhatsApp', icon: WhatsappIcon, href: 'https://wa.me/1234567890', color: 'hover:text-green-500 hover:bg-green-500/10' },
    { label: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com', color: 'hover:text-blue-500 hover:bg-blue-500/10' },
    { label: 'Email', icon: Mail, href: 'mailto:hello@solviacodes.com', color: 'hover:text-teal hover:bg-teal/10' }
  ];

  // Dynamic macOS-like scale math based on hovered neighbor index
  const getScale = (idx) => {
    if (hoveredIdx === null) return 1;
    const distance = Math.abs(idx - hoveredIdx);
    if (distance === 0) return 1.6; // Hovered
    if (distance === 1) return 1.3; // Immediate neighbor
    if (distance === 2) return 1.1; // Secondary neighbor
    return 1;
  };

  return (
    <div className="relative mt-12 flex flex-col items-center">
      <span className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-3">Quick Connect Dock</span>
      <div 
        className="flex items-end gap-3 px-4 py-3 rounded-3xl bg-skyblue/30 border border-skyblue/40 backdrop-blur-2xl shadow-soft h-18 transition-colors duration-500"
        onMouseLeave={() => setHoveredIdx(null)}
      >
        {dockItems.map((item, idx) => {
          const scale = getScale(idx);
          const Icon = item.icon;
          return (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIdx(idx)}
              animate={{ 
                scale: scale,
                y: hoveredIdx === idx ? -10 : 0
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className={`relative flex items-center justify-center w-12 h-12 rounded-2xl border border-skyblue/40 bg-white transition-all duration-300 text-navy/50 shadow-card ${item.color} origin-bottom`}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.span 
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -45, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                    className="absolute px-2.5 py-1 text-[9px] font-black uppercase tracking-widest bg-white border border-skyblue/30 text-navy rounded-lg shadow-card pointer-events-none whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              <Icon size={20} />
            </motion.a>
          );
        })}
      </div>
    </div>
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
          
          <div className="mb-8 relative z-10">
            <span className="text-[10px] font-black uppercase tracking-widest text-teal bg-teal/10 border border-teal/20 px-3 py-1 rounded-full">
              About Solvia Codes
            </span>
          </div>

          <ScrollHighlightText 
            text="We are developers, creators, and structural engineers. We specialize in transforming complex problems into fluid, interactive, and visually stunning digital products. Through clean system architecture, custom WebGL algorithms, and glassmorphic designs, we make your software scale effortlessly while keeping users highly engaged."
            scrollY={scrollYProgress}
            range={[0.12, 0.62]}
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
      role: "CEO & Solutions Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Spearheading system architecture, full-stack development, and custom interactive engine implementations.",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Warda Mehmood",
      role: "Lead UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80",
      bio: "Crafting premium user interfaces, cohesive design systems, and stunning interactive layouts.",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <section id="team" className="py-24 relative bg-beige border-t border-skyblue/30 transition-colors duration-500 overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-teal/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container-page max-w-4xl px-4 relative z-10 mx-auto">
        
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
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-[32px] border border-skyblue/40 bg-white/80 backdrop-blur-2xl shadow-soft flex flex-col sm:flex-row items-center gap-6 group hover:border-teal/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Member Portrait */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-skyblue/30 group-hover:border-teal/40 transition-colors duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bio & Details */}
              <div className="flex-1 text-center sm:text-left">
                <span className="text-[9px] font-black uppercase tracking-widest text-teal bg-teal/10 px-2 py-0.5 rounded">
                  {member.role}
                </span>
                <h4 className="text-lg font-bold text-navy mt-2 font-display">
                  {member.name}
                </h4>
                <p className="text-xs text-navy/55 mt-2 leading-relaxed">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex items-center justify-center sm:justify-start gap-4 mt-4 text-navy/40">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-navy transition-colors">
                    <GithubIcon size={16} />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal transition-colors">
                    <LinkedinIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
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
      <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-beige transition-colors duration-500">
        
        {/* Ambient Video Background Loop - Pinned & Sticky */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-25 z-0"
          src={heroVideo}
        />
        
        {/* Visual gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-beige/70 via-beige/85 to-beige z-[1]" />
        
        <div className="container-page relative z-10 text-center flex flex-col items-center justify-center h-full pt-16 px-4 mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-skyblue/40 shadow-card mb-6">
            <Sparkles size={14} className="text-teal animate-pulse" />
            <span className="text-[10px] font-black tracking-widest text-navy uppercase">Interactive 3D Portfolio</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[1.05] max-w-5xl text-navy font-display">
            Smart Software
            <MorphWord 
              words={["Solutions", "Ecosystems", "Interfaces"]}
            />
            for Digital Leaders
          </h1>

          <p className="mt-6 text-xs sm:text-base text-navy/65 max-w-2xl leading-relaxed">
            We shape raw concepts into high-converting interfaces, complex cloud backends, and fully custom interactive web products.
          </p>

          <div className="mt-12 flex flex-col items-center gap-2 animate-bounce opacity-60">
            <span className="text-[9px] font-black uppercase tracking-widest text-navy/50">Scroll down to explore</span>
            <div className="w-4 h-6 border-2 border-teal/50 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-1 bg-teal rounded-full" />
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
      <section id="services" className="py-32 relative bg-beige border-t border-skyblue/30 transition-colors duration-500">
        <div className="container-page mx-auto px-4">
          <SolarSystemOrbit />
        </div>
      </section>

      {/* ========================================== */}
      {/* PROJECTS SECTION (Stacked Cards)           */}
      {/* ========================================== */}
      <div id="work">
        <CylinderCarousel />
      </div>

      {/* ========================================== */}
      {/* TESTIMONIALS SECTION (Interactive Book)   */}
      {/* ========================================== */}
      <section id="testimonials" className="py-32 relative bg-beige border-t border-skyblue/30 transition-colors duration-500">
        <div className="container-page mx-auto px-4">
          <TestimonialBook />
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

              {/* Integrates the requested Glass Dock for social links inside the contact card! */}
              <GlassDock />
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
