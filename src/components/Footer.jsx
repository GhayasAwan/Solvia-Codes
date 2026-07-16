import { company, navLinks, socialLinks } from '../data/siteData.js';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="container-page px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-extrabold">{company.name}</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">{company.tagline}</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Quick Links</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {navLinks.map((link) => (
                <a key={link.to} href={link.to} className="text-slate-300 transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Social</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-slate-300 transition hover:border-brand hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          Copyright {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
