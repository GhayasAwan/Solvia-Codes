import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ThreeHeroBackground from '../components/ThreeHeroBackground.jsx';
import { company, processSteps, projects, services, testimonials } from '../data/siteData.js';
import TestimonialsCarousel from './TestimonialsCarousel.jsx';

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        <ThreeHeroBackground />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.24),transparent_32%),linear-gradient(90deg,rgba(15,23,42,0.94),rgba(15,23,42,0.70))]" />
        <div className="container-page relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <p className="eyebrow">Digital Product and Growth Studio</p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              {company.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">{company.tagline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-950/20 transition hover:bg-teal-600"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link
                to="/work"
                className="focus-ring inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-white/45 hover:bg-white/10"
              >
                View Work
              </Link>
            </div>
          </AnimatedSection>
          <div className="hidden lg:block" />
        </div>
      </section>

      <AnimatedSection className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
              Strategy, clean execution, and digital growth under one roof.
            </h2>
          </div>
          <div className="space-y-5 text-slate-600">
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

      <AnimatedSection className="section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Build, design, and grow.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Selected concept work.</h2>
            </div>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm font-bold text-brand">
              Explore all projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad">
        <div className="container-page">
          <p className="eyebrow">Process</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">A clear path from brief to launch.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-line bg-white p-6">
                <span className="text-sm font-extrabold text-coral">0{index + 1}</span>
                <h3 className="mt-4 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <TestimonialsCarousel testimonials={testimonials} />
    </>
  );
}
