import { company, navLinks, socialLinks, services } from '../data/siteData.js';
import { Heart, Mail, Phone, MapPin, Clock } from 'lucide-react';
import fibiconLogo from '../import/new_logo_circle.jpg';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-skyblue/15 relative overflow-hidden">
      {/* Background glow bubble */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-skyblue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-page py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Col 1: Brand & Socials */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full overflow-hidden shadow-[0_0_15px_rgba(86,124,141,0.3)] bg-transparent">
                <img src={fibiconLogo} alt="Logo" className="w-full h-full object-cover scale-[1.07] origin-center" />
              </div>
              <span className="leading-tight">
                <span className="block font-display text-lg font-bold text-white">{company.name}</span>
                <span className="block text-[10px] font-bold text-skyblue uppercase tracking-widest">{company.tagline}</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-skyblue/70 mb-8 max-w-xs">
              We help businesses transform concepts into premium 3D and interactive digital products.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-skyblue/15 text-skyblue/60 transition-all hover:border-teal hover:text-teal hover:bg-teal/5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-skyblue/60 transition hover:text-teal inline-flex w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide">Services</h4>
            <div className="flex flex-col gap-3 text-sm font-medium">
              {services.map((service) => (
                <a
                  key={service.title}
                  href="#services"
                  className="text-skyblue/60 transition hover:text-teal inline-flex w-fit"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <h4 className="font-bold text-white mb-6 tracking-wide">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm font-medium text-skyblue/60">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-teal shrink-0 mt-0.5" />
                <a href={`mailto:${company.email}`} className="hover:text-teal transition">{company.email}</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-teal shrink-0 mt-0.5" />
                <a href={`tel:${company.phone}`} className="hover:text-teal transition">{company.phone}</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-teal shrink-0 mt-0.5" />
                <span>{company.location}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-teal shrink-0 mt-0.5" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-skyblue/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-skyblue/50">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
