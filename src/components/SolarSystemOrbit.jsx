import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Smartphone, Palette, Cpu, Cloud, Headphones, 
  ArrowRight, Sparkles
} from 'lucide-react';
import { SolarSystem } from './SolarSystem.jsx';
import logo from '../import/logo.webp';

// Service details matching SolarSystem item IDs
const techDetails = {
  web: {
    title: 'Web Development',
    description: 'Immersive Web Architectures',
    details: 'Building highly interactive, performance-optimized, and SEO-friendly web platforms. We specialize in Next.js, custom WebGL implementations, and micro-frontends.',
    icon: Code2,
    color: 'from-teal to-skyblue',
    glow: 'rgba(86, 124, 141, 0.4)',
  },
  mobile: {
    title: 'Mobile Applications',
    description: 'Cross-Platform Native Apps',
    details: 'Crafting stunning iOS and Android applications with native-level performance. Using Flutter and React Native to build fluid layouts, canvas rendering, and offline-first capabilities.',
    icon: Smartphone,
    color: 'from-amber-400 to-orange-400',
    glow: 'rgba(245, 158, 11, 0.4)',
  },
  uiux: {
    title: 'UI/UX Design',
    description: 'Premium Glassmorphic Interfaces',
    details: 'Creating user journeys that wow at first glance. We use custom design tokens, rich typography, glassmorphism, and micro-animations to drive massive user engagement.',
    icon: Palette,
    color: 'from-pink-400 to-rose-400',
    glow: 'rgba(236, 72, 153, 0.4)',
  },
  ai: {
    title: 'AI & Machine Learning',
    description: 'Custom Intelligence Integrations',
    details: 'Powering systems with specialized Large Language Model (LLM) endpoints, vector databases, analytics automation pipelines, and advanced semantic searches.',
    icon: Cpu,
    color: 'from-navy to-teal',
    glow: 'rgba(47, 65, 86, 0.4)',
  },
  cloud: {
    title: 'Cloud Systems',
    description: 'Serverless Edge Architecture',
    details: 'Designing robust, auto-scaling backend microservices. Multi-region redundancy, serverless routing, gRPC APIs, and zero-downtime CI/CD containerization.',
    icon: Cloud,
    color: 'from-skyblue to-teal',
    glow: 'rgba(200, 217, 230, 0.4)',
  },
  support: {
    title: 'Support & Ops',
    description: 'Continuous Integration & Telemetry',
    details: 'Ensuring your platforms run at 100% uptime with advanced telemetry reporting, active logs tracing, security audits, and ongoing dependency updates.',
    icon: Headphones,
    color: 'from-purple-400 to-violet-400',
    glow: 'rgba(139, 92, 246, 0.4)',
  }
};

export default function SolarSystemOrbit() {
  const [selectedTech, setSelectedTech] = useState(techDetails.web);

  const handleHoverChange = (id) => {
    if (id && techDetails[id]) {
      setSelectedTech(techDetails[id]);
    }
  };

  return (
    <div className="grid lg:grid-cols-[1.1fr_1.3fr] gap-12 items-center min-h-[600px] relative z-10 w-full">
      {/* Left Details Panel */}
      <div className="flex flex-col justify-center h-full">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/10 border border-teal/25 shadow-sm w-fit mb-6">
          <Sparkles size={14} className="text-teal" />
          <span className="text-[10px] font-extrabold tracking-widest text-teal uppercase">3D Tech Ecosystem</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-display">
          Explore Our Interactive <br />
          <span className="bg-gradient-to-r from-teal via-skyblue to-white bg-clip-text text-transparent">
            Service Orbit
          </span>
        </h3>

        <p className="mt-4 text-white/60 text-sm sm:text-base max-w-lg leading-relaxed">
          Hover over any orbiting tech sphere on the right to examine our core domains, toolkits, and how we build your product.
        </p>

        {/* Selected Service Card Display with Smooth Slide/Fade transition */}
        <div className="mt-8 relative min-h-[220px]">
          <AnimatePresence mode="wait">
            {selectedTech && (
              <motion.div
                key={selectedTech.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-3xl border border-skyblue/40 bg-white/80 backdrop-blur-xl relative overflow-hidden shadow-card"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal/10 to-transparent rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${selectedTech.color} flex items-center justify-center text-white shadow-lg`}>
                    <selectedTech.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy leading-tight font-display">{selectedTech.title}</h4>
                    <p className="text-xs font-semibold text-teal mt-0.5">{selectedTech.description}</p>
                  </div>
                </div>

                <p className="mt-4 text-navy/60 text-sm leading-relaxed">
                  {selectedTech.details}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-navy hover:text-teal transition-colors cursor-pointer w-fit">
                  <span>Get Started with this Service</span>
                  <ArrowRight size={14} className="text-teal" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Solar System Animation */}
      <div className="relative flex items-center justify-center w-full overflow-visible py-10">
        <SolarSystem onHoverChange={handleHoverChange} centerLogo={logo} />
      </div>
    </div>
  );
}
