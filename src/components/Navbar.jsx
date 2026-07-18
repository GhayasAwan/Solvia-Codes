import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { company, navLinks } from '../data/siteData.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link tracker on scroll
      const sections = navLinks.map(l => document.querySelector(l.to));
      const scrollPosition = window.scrollY + 150;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(navLinks[i].to);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex justify-center p-4 transition-all duration-355">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`relative flex w-full max-w-5xl items-center justify-between rounded-full border px-6 py-2.5 transition-all duration-500 ${
          scrolled 
            ? 'border-skyblue/60 bg-white/85 shadow-[0_24px_48px_-15px_rgba(47,65,86,0.12)] backdrop-blur-xl md:scale-95' 
            : 'border-transparent bg-white/20 backdrop-blur-md'
        }`}
      >
        {/* Glow Accent when Scrolled */}
        {scrolled && (
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-teal/8 via-skyblue/5 to-teal/8 opacity-70 blur-md transition-opacity duration-550" />
        )}

        {/* Logo / Brand */}
        <a 
          href="#home" 
          className="flex items-center gap-3 group"
          onClick={() => { setOpen(false); setActive('#home'); }}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-extrabold text-white overflow-hidden shadow-inner">
            <span className="absolute inset-0 bg-gradient-to-tr from-navy to-teal" />
            <span className="relative z-10 font-bold tracking-tight">SC</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold leading-none text-navy tracking-wide group-hover:text-teal transition-colors">
              {company.name}
            </span>
            <span className="text-[9px] font-bold text-teal uppercase tracking-widest mt-0.5">
              {company.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1.5 rounded-full bg-skyblue/25 p-1 border border-skyblue/30">
          {navLinks.map((link) => {
            const isActive = active === link.to;
            return (
              <a
                key={link.to}
                href={link.to}
                onClick={() => setActive(link.to)}
                className={`relative px-4 py-1.5 text-xs font-bold tracking-wide transition-colors duration-300 rounded-full ${
                  isActive ? 'text-white' : 'text-navy/70 hover:text-navy'
                }`}
              >
                {isActive && (
                  <motion.span 
                    layoutId="activePill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-navy to-teal shadow-[0_4px_12px_rgba(86,124,141,0.3)]"
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Controls (CTA only — no theme toggle) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-navy px-5 py-2 text-xs font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(47,65,86,0.25)]"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Start Project
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* Mobile Controls — no theme toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-skyblue/40 text-navy transition bg-white/60 hover:bg-skyblue/20"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full mt-3 w-full origin-top rounded-3xl border border-skyblue/30 bg-white/95 p-5 shadow-[0_24px_48px_-15px_rgba(47,65,86,0.15)] backdrop-blur-2xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = active === link.to;
                  return (
                    <a
                      key={link.to}
                      href={link.to}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold tracking-wide transition-all ${
                        isActive 
                          ? 'bg-gradient-to-r from-teal/15 to-skyblue/20 text-teal border border-teal/30' 
                          : 'text-navy/70 hover:bg-skyblue/10 hover:text-navy border border-transparent'
                      }`}
                      onClick={() => { setOpen(false); setActive(link.to); }}
                    >
                      <span>{link.label}</span>
                      {isActive && <div className="h-1.5 w-1.5 rounded-full bg-teal shadow-[0_0_8px_#567C8D]" />}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-navy py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]"
                  onClick={() => setOpen(false)}
                >
                  Start Project
                  <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
