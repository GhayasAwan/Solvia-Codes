import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { company, navLinks } from '../data/siteData.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-ink text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-ink'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur-xl">
      <nav className="container-page flex h-20 items-center justify-between px-5 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink font-display text-sm font-extrabold text-white">
            SC
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-extrabold text-ink">{company.name}</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-brand">Digital Studio</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="focus-ring hidden rounded-md bg-ink px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800 lg:inline-flex"
        >
          Start a Project
        </NavLink>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
