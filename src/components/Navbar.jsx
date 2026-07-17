import { Menu, X, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { company, navLinks } from '../data/siteData.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4 transition-all duration-300 ${scrolled ? 'top-4' : 'top-6'}`}
    >
      <nav 
        className="flex h-16 items-center justify-between rounded-full px-6 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(1, 28, 64, 0.85)' : 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: scrolled ? '1px solid rgba(84, 172, 191, 0.2)' : '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: scrolled ? '0 10px 40px rgba(1, 28, 64, 0.3)' : '0 8px 32px rgba(0, 0, 0, 0.15)'
        }}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg font-display text-sm font-extrabold text-white transition group-hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #54ACBF, #26658C)' }}>
            SC
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-extrabold text-white">{company.name}</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#54ACBF]">Digital Studio</span>
          </span>
        </a>

        {/* Desktop Nav Links & CTA */}
        <div className="hidden lg:flex flex-1 items-center justify-end gap-6">
          <div className="flex items-center gap-2 mr-4">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-[#A7EBF2]/80 transition-all hover:bg-white/5 hover:text-[#54ACBF]"
            >
              {link.label}
            </a>
          ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-[#011C40] transition-all hover:scale-105"
            style={{ background: '#A7EBF2', boxShadow: '0 0 20px rgba(167,235,242,0.4)' }}
          >
            <Zap size={15} />
            Start Project
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border text-white lg:hidden transition hover:border-[#54ACBF]"
          style={{ borderColor: '#26658C', backgroundColor: '#023859' }}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="border-t px-5 py-4 lg:hidden" style={{ backgroundColor: '#011C40', borderColor: '#26658C' }}>
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-[#A7EBF2]/80 transition hover:bg-white/5 hover:text-[#54ACBF]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #54ACBF, #26658C)' }}
              onClick={() => setOpen(false)}
            >
              <Zap size={15} />
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
