import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Smartphone, Palette, Cpu, Cloud, Headphones, 
  Sparkles, CheckCircle2
} from 'lucide-react';

const services = [
  {
    id: 'web',
    title: 'Web Development',
    subtitle: 'Immersive Web Architectures',
    description: 'Building highly interactive, performance-optimized, and SEO-friendly web platforms. We specialize in Next.js, React, WebGL, and micro-frontends.',
    icon: Code2,
    badge: 'Core Domain',
    color: 'from-teal to-skyblue',
  },
  {
    id: 'mobile',
    title: 'Mobile Applications',
    subtitle: 'Cross-Platform Native Apps',
    description: 'Crafting stunning iOS and Android applications with native-level performance using Flutter and React Native.',
    icon: Smartphone,
    badge: 'Mobile First',
    color: 'from-amber-400 to-orange-400',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    subtitle: 'Premium Glassmorphic Interfaces',
    description: 'Creating user journeys that wow at first glance using custom design tokens, modern typography, and dynamic micro-animations.',
    icon: Palette,
    badge: 'Design System',
    color: 'from-pink-400 to-rose-400',
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    subtitle: 'Custom Intelligence Integrations',
    description: 'Powering platforms with specialized LLM endpoints, vector databases, automation pipelines, and semantic search.',
    icon: Cpu,
    badge: 'AI Engine',
    color: 'from-purple-400 to-indigo-400',
  },
  {
    id: 'cloud',
    title: 'Cloud Systems',
    subtitle: 'Serverless Edge Architecture',
    description: 'Designing robust backend microservices with multi-region redundancy, serverless routing, and zero-downtime CI/CD containerization.',
    icon: Cloud,
    badge: 'DevOps & Edge',
    color: 'from-skyblue to-teal',
  },
  {
    id: 'support',
    title: 'Support & Ops',
    subtitle: 'Continuous Integration & Telemetry',
    description: 'Ensuring 100% uptime with advanced telemetry reporting, active log tracing, security audits, and continuous updates.',
    icon: Headphones,
    badge: '24/7 Monitoring',
    color: 'from-emerald-400 to-teal-500',
  }
];

export default function SolarSystemOrbit() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="w-full relative z-10 py-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-skyblue/20 border border-skyblue/30 shadow-sm mb-4">
          <Sparkles size={14} className="text-skyblue" />
          <span className="text-[10px] font-extrabold tracking-widest text-skyblue uppercase">3D Tech Ecosystem</span>
        </div>

        <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-display mb-4">
          Explore Our Core <br />
          <span className="bg-gradient-to-r from-skyblue via-teal-200 to-white bg-clip-text text-transparent">
            Service Capabilities
          </span>
        </h3>

        <p className="text-skyblue/90 text-sm sm:text-base leading-relaxed font-medium">
          Select any domain below to examine our toolkits, architectural patterns, and engineering capabilities.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Interactive Service Selector Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => {
            const isSelected = selectedService.id === service.id;
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service)}
                onMouseEnter={() => setSelectedService(service)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[140px] ${
                  isSelected 
                    ? 'bg-white/15 border-skyblue text-white shadow-[0_10px_30px_rgba(200,217,230,0.15)] scale-[1.02]' 
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-skyblue/40 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-md`}>
                    <Icon size={20} />
                  </div>
                  {isSelected && (
                    <motion.div layoutId="activeCheck" transition={{ duration: 0.2 }}>
                      <CheckCircle2 size={18} className="text-skyblue" />
                    </motion.div>
                  )}
                </div>

                <div>
                  <h4 className="text-base font-bold font-display text-white group-hover:text-skyblue transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-skyblue/80 font-medium mt-0.5">
                    {service.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Service Showcase Display Card */}
        <div className="lg:col-span-5 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="p-8 rounded-3xl border border-skyblue/40 bg-white/95 backdrop-blur-xl relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal/20 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="inline-block px-3 py-1 rounded-full bg-skyblue/30 text-navy-700 text-[10px] font-extrabold uppercase tracking-wider mb-4">
                {selectedService.badge}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${selectedService.color} flex items-center justify-center text-white shadow-lg`}>
                  <selectedService.icon size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-navy font-display leading-tight">{selectedService.title}</h4>
                  <p className="text-xs font-bold text-navy-700 mt-0.5">{selectedService.subtitle}</p>
                </div>
              </div>

              <p className="text-navy-800 text-sm leading-relaxed font-medium mt-4 pt-4 border-t border-skyblue/20">
                {selectedService.description}
              </p>

              <a 
                href="#contact" 
                className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-teal transition-colors shadow-md"
              >
                <span>Get Started with {selectedService.title}</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
