import { ArrowRight, CheckCircle2, Send, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ThreeHeroBackground from '../components/ThreeHeroBackground.jsx';
import {
  company,
  contactDetails,
  processSteps,
  projects,
  services,
  socialLinks,
  teamMembers,
  testimonials
} from '../data/siteData.js';
import TestimonialsCarousel from './TestimonialsCarousel.jsx';

export default function Home() {
  return (
    <>
      <section id="home" className="relative isolate scroll-mt-20 overflow-hidden bg-ink text-white">
        <ThreeHeroBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(14,165,163,0.24),transparent_28%),linear-gradient(90deg,rgba(7,17,31,0.98),rgba(7,17,31,0.78))]" />
        <div className="container-page relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-12 px-5 pb-20 pt-28 sm:px-6 sm:pt-32 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28 lg:pt-36">
          <AnimatedSection className="max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
              Digital Product and Growth Studio
            </div>
            <h1 className="mt-7 max-w-4xl font-display text-5xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
              {company.name}
            </h1>
            <p className="mt-6 max-w-2xl text-base font-bold uppercase tracking-[0.24em] text-brand sm:text-lg">
              {company.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              We design, develop, and market clean digital experiences for businesses that want to look credible,
              work faster, and grow online with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-teal-950/20 transition hover:bg-teal-600"
              >
                Start a Project <ArrowRight size={18} />
              </a>
              <a
                href="#work"
                className="focus-ring inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-4 text-sm font-extrabold text-white transition hover:border-white/45 hover:bg-white/10"
              >
                View Work
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 text-sm text-slate-300 sm:grid-cols-3">
              {['Web/App Development', 'UI/UX Design', 'Marketing Systems'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-brand" size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection className="hidden lg:block" delay={0.15}>
            <div className="ml-auto max-w-[460px] rounded-lg border border-white/10 bg-white/[0.06] p-4 shadow-lift backdrop-blur">
              <div className="rounded-md bg-white p-6 text-ink">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">Solvia Method</p>
                    <h2 className="mt-3 max-w-sm font-display text-2xl font-extrabold leading-tight">
                      One team. Clear digital execution.
                    </h2>
                  </div>
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-ink text-brand">
                    <Sparkles size={21} />
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                    {services.map((service, index) => {
                      const Icon = service.icon;

                      return (
                        <div key={service.title} className="flex items-center gap-4 rounded-md border border-line bg-cloud px-4 py-3">
                          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-white text-brand shadow-sm">
                            <Icon size={19} />
                          </span>
                          <div>
                            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                              Service 0{index + 1}
                            </p>
                            <p className="mt-1 font-display text-base font-extrabold">{service.title}</p>
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-md border border-line">
                    {[
                      ['Clean', 'UI'],
                      ['Fast', 'Code'],
                      ['Smart', 'Growth']
                    ].map(([top, bottom]) => (
                      <div key={bottom} className="border-r border-line p-3 text-center last:border-r-0">
                        <p className="font-display text-lg font-extrabold">{top}</p>
                        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">{bottom}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection id="about" className="section-pad scroll-mt-20 bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Strategy, clean execution, and digital growth under one roof.
            </h2>
          </div>
          <div className="grid gap-6 text-slate-600 sm:grid-cols-2">
            <p>
              {company.name} helps businesses turn ideas into useful digital experiences. From websites and apps
              to design systems and marketing campaigns, we connect the full journey from planning to launch.
            </p>
            <p>
              Our work is built around practical strategy, clear communication, and reliable execution. Every
              project is designed to look professional, work smoothly, and support real business goals.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-cloud">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Team</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                The people behind Solvia Codes.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              Add real names, roles, skills, and profile details here when your final team information is ready.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <article
                key={`${member.role}-${index}`}
                className="overflow-hidden rounded-lg border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-ink text-white">
                  <div className="flex h-24 w-24 items-center justify-center rounded-md border border-white/15 bg-white/10 font-display text-3xl font-extrabold">
                    {member.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand">Member 0{index + 1}</p>
                  <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">{member.name}</h3>
                  <p className="mt-2 text-sm font-bold text-slate-700">{member.role}</p>
                  <p className="mt-4 rounded-md bg-cloud px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    {member.focus}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="services" className="section-pad scroll-mt-20">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Build, design, and grow.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              A focused digital team for businesses that want fewer handoffs and better execution across product,
              brand, and marketing.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="work" className="section-pad scroll-mt-20 bg-white">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Selected concept work.</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="process" className="section-pad scroll-mt-20">
        <div className="container-page">
          <p className="eyebrow">Process</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">A clear path from brief to launch.</h2>
          <div className="mt-12 grid gap-0 overflow-hidden rounded-lg border border-line bg-white shadow-sm md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="border-b border-line p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-8">
                <span className="text-sm font-extrabold text-brand">0{index + 1}</span>
                <h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div id="testimonials" className="scroll-mt-20">
        <TestimonialsCarousel testimonials={testimonials} />
      </div>

      <AnimatedSection id="contact" className="section-pad scroll-mt-20 bg-cloud">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Tell Solvia Codes what you are building next.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Use this form for website, app, design, marketing, social media, or long-term digital support inquiries.
            </p>
          </div>

          <form className="rounded-lg border border-line bg-white p-6 shadow-soft sm:p-8 lg:row-span-2">
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

          <aside className="space-y-6">
            <div className="rounded-lg bg-ink p-7 text-white shadow-lift">
              <h3 className="font-display text-2xl font-extrabold">Contact Info</h3>
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
              <h3 className="font-display text-2xl font-extrabold">Social</h3>
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
