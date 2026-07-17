import { company, navLinks, socialLinks } from '../data/siteData.js';
import { ArrowUpRight, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#011C40', borderTop: '1px solid #26658C' }}>
      {/* Top CTA Banner */}
      <div
        className="py-14 text-center px-5"
        style={{ background: 'linear-gradient(135deg, #023859 0%, #011C40 60%)' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#54ACBF] mb-4">Ready to grow?</p>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Let&apos;s build something <span className="text-[#54ACBF]">exceptional</span>.
        </h2>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #54ACBF, #26658C)', boxShadow: '0 0 30px rgba(84,172,191,0.3)' }}
        >
          Start a Project <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Footer Grid */}
      <div className="container-page px-5 py-12 sm:px-6 lg:px-8" style={{ borderTop: '1px solid #26658C' }}>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg font-display text-sm font-extrabold text-white"
                style={{ background: 'linear-gradient(135deg, #54ACBF, #26658C)' }}
              >
                SC
              </span>
              <span className="font-display text-xl font-extrabold text-white">{company.name}</span>
            </div>
            <p className="text-sm leading-7 text-slate-400 max-w-xs">{company.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54ACBF] mb-5">Quick Links</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-[#A7EBF2]/80 transition hover:text-[#54ACBF]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#54ACBF] mb-5">Follow Us</p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#A7EBF2]/80 transition-all hover:text-[#54ACBF] hover:scale-110"
                  style={{ border: '1px solid #26658C', backgroundColor: '#023859' }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A7EBF2]/60"
          style={{ borderTop: '1px solid #26658C' }}
        >
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={12} className="text-[#54ACBF] mx-1" /> by Solvia Codes
          </p>
        </div>
      </div>
    </footer>
  );
}
