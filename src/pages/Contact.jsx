import { Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { contactDetails, services, socialLinks } from '../data/siteData.js';

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell Solvia Codes what you are building next."
        description="Use this form for website, app, design, marketing, social media, or long-term digital support inquiries."
      />
      <AnimatedSection className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-lg border border-line bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Name</span>
                <input className="focus-ring mt-2 w-full rounded-md border border-line bg-cloud px-4 py-3 transition focus:bg-white" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Email</span>
                <input
                  type="email"
                  className="focus-ring mt-2 w-full rounded-md border border-line bg-cloud px-4 py-3 transition focus:bg-white"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-slate-700">Service</span>
              <select className="focus-ring mt-2 w-full rounded-md border border-line bg-cloud px-4 py-3 transition focus:bg-white">
                <option>Select a service</option>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-bold text-slate-700">Message</span>
              <textarea
                className="focus-ring mt-2 min-h-40 w-full rounded-md border border-line bg-cloud px-4 py-3 transition focus:bg-white"
                placeholder="Share your goals, timeline, and what support you need."
              />
            </label>
            <button
              type="button"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-6 py-4 text-sm font-extrabold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Send Message <Send size={17} />
            </button>
          </form>

          <aside className="space-y-8">
            <div className="rounded-lg bg-ink p-7 text-white shadow-lift">
              <h2 className="font-display text-2xl font-extrabold">Contact Info</h2>
              <div className="mt-5 space-y-4">
                {contactDetails.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex gap-3 rounded-md border border-white/10 bg-white/5 p-4">
                    <Icon className="mt-1 flex-none text-brand" size={20} />
                    <span className="text-sm leading-6 text-slate-200">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-line bg-white p-7 shadow-sm">
              <h2 className="font-display text-2xl font-extrabold">Social</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-slate-700 transition hover:border-brand hover:text-brand"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </AnimatedSection>
    </>
  );
}
