import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { company, navLinks } from '../data/siteData.js';
import logo from '../import/logo.jpg';
import { SpotlightNavbar } from './SpotlightNavbar.jsx';

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
        className={`relative flex w-full max-w-6xl mx-auto items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 shadow-soft backdrop-blur-xl border border-skyblue/20' 
            : 'bg-transparent'
        }`}
      >
        {/* Glow Accent when Scrolled */}

        {/* Logo / Brand */}
        <a 
          href="#home" 
          className="flex items-center gap-3 group"
          onClick={() => { setOpen(false); setActive('#home'); }}
        >
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full overflow-hidden shadow-[0_0_15px_rgba(86,124,141,0.3)] bg-transparent">
            <img src={logo} alt="Logo" className="w-full h-full object-cover scale-[1.07] origin-center" />
          </div>
          <div className="flex flex-col justify-center">
            <span className={`text-xl font-black uppercase tracking-widest leading-none transition-colors ${scrolled ? 'text-navy group-hover:text-teal' : 'text-white group-hover:text-skyblue'}`}>
              {company.name}
            </span>
            <span className={`text-[9px] font-semibold uppercase tracking-[0.18em] leading-none mt-0.5 transition-colors ${scrolled ? 'text-teal/70' : 'text-skyblue/70'}`}>
              {company.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-1 justify-end ml-4">
          <SpotlightNavbar
            items={navLinks}
            defaultActiveIndex={0}
            activeIndex={Math.max(0, navLinks.findIndex(l => l.to === active))}
            scrolled={scrolled}
          />
        </div>

        {/* Desktop Controls (CTA only — no theme toggle) */}
        <div className="hidden md:flex items-center gap-3">
        </div>

        {/* Mobile Controls — no theme toggle */}
        <div className="flex items-center gap-2 md:hidden ml-auto">
          <button
            type="button"
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${scrolled ? 'border-skyblue/40 text-navy bg-white/60 hover:bg-skyblue/20' : 'border-white/30 text-white bg-white/10 hover:bg-white/20'}`}
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

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
