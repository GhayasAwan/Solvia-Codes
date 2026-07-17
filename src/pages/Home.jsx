import { ArrowRight, CheckCircle2, ChevronDown, Send, Play, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import TeamCarousel from '../components/TeamCarousel.jsx';
import heroTeamImg from '../import/hero-team.png';
import {
  company,
  contactDetails,
  processSteps,
  projects,
  services,
  socialLinks,
  testimonials
} from '../data/siteData.js';
import TestimonialsCarousel from './TestimonialsCarousel.jsx';

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section id="home" className="relative isolate scroll-mt-20 overflow-hidden min-h-screen">
        
        {/* Full background image */}
        <img
          src={heroTeamImg}
          alt="Solvia Codes team"
          className="absolute inset-0 h-full w-full object-cover z-0"
        />

        {/* Liquid gradient overlay for text readability on left side */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(90deg, rgba(1,28,64,0.95) 0%, rgba(1,28,64,0.8) 40%, rgba(2,56,89,0.3) 80%, transparent 100%)'
          }}
        />

        {/* Content - Left Mid */}
        <div className="relative z-20 flex min-h-screen items-center px-6 sm:px-10 lg:px-16 xl:px-20">
          <div className="w-full max-w-3xl pt-24 pb-12">
            
            {/* Eyebrow */}
            <AnimatedSection>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2">
                <span className="h-2 w-2 rounded-full bg-[#54ACBF] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A7EBF2]">
                  Premium IT Agency
                </span>
              </div>
            </AnimatedSection>

            {/* Heading */}
            <AnimatedSection delay={0.08}>
              <h1 className="font-display text-5xl font-extrabold leading-[1.08] text-white sm:text-6xl lg:text-7xl xl:text-[80px] mb-6">
                Get Your Business<br />
                <span className="text-[#54ACBF]">Digital Solution</span>
              </h1>
              <p className="text-[#A7EBF2]/80 text-lg leading-8 max-w-xl mb-10 font-medium">
                We design, develop, and market clean digital experiences for businesses that want to look credible, grow faster, and execute with confidence.
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection delay={0.16}>
              <div className="flex flex-wrap gap-4 mb-14">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-extrabold text-[#011C40] transition-all hover:scale-105"
                  style={{ background: '#A7EBF2', boxShadow: '0 0 25px rgba(167,235,242,0.4)' }}
                >
                  Explore More <ArrowRight size={16} />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-extrabold text-white transition-all hover:bg-white/20"
                >
                  Contact Us <ArrowRight size={16} />
                </a>
              </div>
            </AnimatedSection>

            {/* Stats Row */}
            <AnimatedSection delay={0.24}>
              <div className="flex flex-wrap gap-10 border-t border-white/20 pt-8 mt-10">
                {[
                  { value: '150+', label: 'Projects Done' },
                  { value: '50+', label: 'Happy Clients' },
                  { value: '5+', label: 'Years Experience' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl font-extrabold text-white">{stat.value}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#54ACBF] mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-xs tracking-widest uppercase font-bold text-white">Scroll</span>
          <ChevronDown size={24} className="text-[#54ACBF]" />
        </div>
      </section>


      {/* ===== ABOUT SECTION (WHITE BG) ===== */}
      <AnimatedSection id="about" className="section-pad scroll-mt-20 overflow-hidden" style={{backgroundColor:'#FFFFFF'}}>
        <div className="container-page grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* LEFT SIDE: Image Collage */}
          <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[450px] mx-auto">
             
             {/* Decorative Background Shapes */}
             <div className="absolute top-0 left-0 w-40 h-40 bg-[#54ACBF] rounded-tl-[3rem] -translate-x-6 -translate-y-6 -z-10" />
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#011C40] rounded-br-[3rem] translate-x-6 translate-y-6 -z-10" />
             
             {/* Sparkles bottom left */}
             <div className="absolute -bottom-8 -left-8 z-20 flex gap-1 text-[#54ACBF]">
               <Sparkles size={48} className="fill-[#54ACBF]" />
               <Sparkles size={24} className="mt-4 fill-[#54ACBF]" />
             </div>

             {/* 3-Image Grid Layout */}
             <div className="grid grid-cols-[1.2fr_0.8fr] gap-4 h-full relative z-10">
               {/* Left Column */}
               <div className="grid grid-rows-[1.2fr_0.8fr] gap-4">
                 <div className="overflow-hidden rounded-tl-[3rem] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-md">
                   <img src={heroTeamImg} className="w-full h-full object-cover object-left-top" alt="About Infotek" />
                 </div>
                 <div className="overflow-hidden rounded-2xl shadow-md">
                   <img src={heroTeamImg} className="w-full h-full object-cover object-bottom" alt="About Infotek" />
                 </div>
               </div>
               
               {/* Right Column (Tall) */}
               <div className="grid grid-rows-1">
                 <div className="overflow-hidden rounded-2xl shadow-md">
                   <img src={heroTeamImg} className="w-full h-full object-cover object-right" alt="About Infotek" />
                 </div>
               </div>
             </div>
             
             {/* Center Badge HIRE US */}
             <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-[120px] h-[120px] bg-white rounded-full p-2 shadow-xl border border-slate-100">
                <div className="w-full h-full bg-[#54ACBF] rounded-full flex flex-col items-center justify-center relative">
                   <div className="absolute inset-2 border border-dashed border-white/50 rounded-full animate-[spin_10s_linear_infinite]" />
                   <div className="absolute w-full h-full animate-[spin_10s_linear_infinite] pointer-events-none">
                     <svg viewBox="0 0 100 100" className="w-full h-full">
                       <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                       <text className="text-[10px] font-bold fill-white tracking-[0.2em] uppercase">
                         <textPath href="#circlePath" startOffset="0%">Hire Us • Hire Us •</textPath>
                       </text>
                     </svg>
                   </div>
                   <div className="w-10 h-10 bg-[#011C40] rounded-full flex items-center justify-center shadow-lg relative z-10 hover:scale-110 transition-transform cursor-pointer">
                     <ArrowRight size={18} className="text-white" />
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="lg:pl-6 relative">
            {/* Background Watermark */}
            <div className="absolute -top-12 -left-4 text-[60px] sm:text-[90px] font-display font-extrabold text-slate-50 pointer-events-none tracking-widest whitespace-nowrap select-none -z-10 leading-none">
              ABOUT US
            </div>

            <p className="font-bold tracking-widest uppercase text-sm flex items-center gap-2" style={{ color: '#011C40' }}>
              <span className="text-[#54ACBF] font-mono text-lg">//</span> About Us
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl" style={{ color: '#011C40' }}>
              Transforming <span className="text-[#54ACBF]">Ideas</span><br/>into <span className="text-[#54ACBF]">Digital Reality</span>
            </h2>
            <p className="mt-6 text-slate-500 text-lg leading-8 font-medium">
              We design, develop, and market clean digital experiences for businesses that want to look credible, grow faster, and execute with confidence. Every project is crafted with precision to support real business goals.
            </p>
            
            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4">
              <div>
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-[#54ACBF]">150+</p>
                <p className="text-xs font-semibold text-slate-400 mt-2">Team Members</p>
              </div>
              <div className="border-l border-slate-200 pl-4 sm:pl-6">
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-[#54ACBF]">2000+</p>
                <p className="text-xs font-semibold text-slate-400 mt-2">Happy Clients</p>
              </div>
              <div className="border-l border-slate-200 pl-4 sm:pl-6">
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-[#54ACBF]">99%</p>
                <p className="text-xs font-semibold text-slate-400 mt-2">Client Satisfaction</p>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-12">
              <p className="text-4xl text-[#011C40] italic" style={{ fontFamily: 'Georgia, serif' }}>Jenny Alexander</p>
              <p className="text-sm font-semibold text-slate-500 mt-2">Jenny Alexander <span className="text-[#54ACBF] px-1">•</span> CEO</p>
            </div>
          </div>
          
        </div>
      </AnimatedSection>


      {/* ===== TEAM SECTION (DARK BG) ===== */}
      <AnimatedSection className="section-pad relative isolate overflow-hidden" style={{backgroundColor:'#011C40'}}>
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#54ACBF] blur-[120px]" />
        </div>
        
        <div className="container-page relative z-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end text-center md:text-left">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#A7EBF2]">Our Experts</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl text-white">
                The people behind Solvia Codes.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#A7EBF2]/70">
              Meet the talented individuals who turn ideas into reality. A team of designers, engineers, and strategists.
            </p>
          </div>

          <div className="mt-16">
            <TeamCarousel />
          </div>
        </div>
      </AnimatedSection>


      {/* ===== SERVICES SECTION (WHITE BG) ===== */}
      <AnimatedSection id="services" className="section-pad scroll-mt-20" style={{backgroundColor:'#FFFFFF'}}>
        <div className="container-page text-center md:text-left">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#54ACBF]">Our Services</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl" style={{ color: '#011C40' }}>
                Build, design, and grow.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-500">
              A focused digital team for businesses that want fewer handoffs and better execution across product,
              brand, and marketing.
            </p>
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 bg-white hover:bg-[#011C40] shadow-[0_10px_40px_rgba(1,28,64,0.08)] hover:shadow-[0_20px_50px_rgba(84,172,191,0.3)] cursor-pointer border-2 border-transparent hover:border-[#54ACBF]"
              >
                {/* Accent glow on hover - keeping it transparent since border is used */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#54ACBF] to-[#26658C] opacity-0 transition-opacity duration-300" />

                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl text-[#54ACBF] transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:shadow-lg"
                  style={{ background: 'rgba(84,172,191,0.1)' }}
                >
                  <service.icon size={28} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  {String(service.order || '01').padStart(2, '0')}
                </p>

                <h3 className="mt-2 font-display text-2xl font-bold transition-colors duration-300 text-[#011C40] group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed transition-colors duration-300 text-slate-600 group-hover:text-[#A7EBF2]/80">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#54ACBF] transition-all duration-300 group-hover:gap-3">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>


      {/* ===== PORTFOLIO SECTION (DARK BG) ===== */}
      <AnimatedSection id="work" className="section-pad scroll-mt-20" style={{backgroundColor:'#011C40'}}>
        <div className="container-page">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end text-center md:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#A7EBF2]">Portfolio</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl text-white">Selected concept work.</h2>
            </div>
            <a href="#work" className="text-[#54ACBF] font-bold inline-flex items-center gap-2 hover:underline">
              View All Projects <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </AnimatedSection>


      {/* ===== PROCESS SECTION (WHITE BG) ===== */}
      <AnimatedSection id="process" className="section-pad scroll-mt-20" style={{backgroundColor:'#FFFFFF'}}>
        <div className="container-page text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#54ACBF]">Process</p>
          <h2 className="mt-4 max-w-3xl mx-auto font-display text-4xl font-extrabold sm:text-5xl" style={{ color: '#011C40' }}>
            A clear path from brief to launch.
          </h2>
          
          <div className="mt-20 grid gap-8 md:grid-cols-4 relative z-10">
            {/* Connecting dashed line behind cards */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-slate-200 -z-10" />

            {processSteps.map((step, index) => (
              <div 
                key={step.title} 
                className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(1,28,64,0.06)] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(84,172,191,0.25)] hover:bg-[#011C40] hover:border-[#26658C] text-left cursor-default"
              >
                {/* Step Number Badge */}
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-3xl font-display font-extrabold text-[#54ACBF] group-hover:bg-[#54ACBF] group-hover:border-[#54ACBF] group-hover:text-white transition-all duration-300 shadow-sm mb-8 group-hover:scale-110">
                  {index + 1}
                </div>
                
                <h3 className="font-display text-2xl font-bold text-[#011C40] group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="mt-4 text-base leading-relaxed text-slate-500 group-hover:text-[#A7EBF2]/80 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ===== TESTIMONIALS SECTION (DARK BG) ===== */}
      <div id="testimonials" className="scroll-mt-20" style={{backgroundColor:'#011C40'}}>
        <TestimonialsCarousel testimonials={testimonials} />
      </div>


      {/* ===== CONTACT SECTION (WHITE BG) ===== */}
      <AnimatedSection id="contact" className="section-pad scroll-mt-20" style={{backgroundColor:'#FFFFFF'}}>
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#54ACBF]">Contact</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl" style={{ color: '#011C40' }}>
              Tell Solvia Codes what you are building next.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              Use this form for website, app, design, marketing, social media, or long-term digital support inquiries.
            </p>
            
            <div className="mt-12 space-y-6">
              <h3 className="font-display text-2xl font-extrabold" style={{ color: '#023859' }}>Contact Info</h3>
              <div className="space-y-4">
                {contactDetails.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 items-center">
                    <div className="w-12 h-12 rounded-full bg-[#54ACBF]/10 flex items-center justify-center text-[#54ACBF]">
                      <Icon size={20} />
                    </div>
                    <span className="text-base font-semibold text-slate-600">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-display text-2xl font-extrabold mb-4" style={{ color: '#023859' }}>Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-slate-500 transition-all hover:border-[#54ACBF] hover:text-[#54ACBF] hover:bg-[#54ACBF]/5"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-2xl shadow-slate-200/50 bg-white">
            <h3 className="text-2xl font-display font-extrabold mb-8" style={{ color: '#011C40' }}>Send us a message</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-600 mb-2 block">Name</span>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition outline-none focus:border-[#54ACBF] focus:bg-white focus:ring-4 focus:ring-[#54ACBF]/10 text-[#011C40] font-medium" placeholder="John Doe" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-600 mb-2 block">Email</span>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition outline-none focus:border-[#54ACBF] focus:bg-white focus:ring-4 focus:ring-[#54ACBF]/10 text-[#011C40] font-medium"
                  placeholder="john@example.com"
                />
              </label>
            </div>
            <label className="mt-6 block">
              <span className="text-sm font-bold text-slate-600 mb-2 block">Service Required</span>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition outline-none focus:border-[#54ACBF] focus:bg-white focus:ring-4 focus:ring-[#54ACBF]/10 text-[#011C40] font-medium appearance-none">
                <option>Select a service</option>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="mt-6 block">
              <span className="text-sm font-bold text-slate-600 mb-2 block">Message</span>
              <textarea
                className="min-h-[160px] w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 transition outline-none focus:border-[#54ACBF] focus:bg-white focus:ring-4 focus:ring-[#54ACBF]/10 text-[#011C40] font-medium resize-none"
                placeholder="Share your goals, timeline, and what support you need..."
              />
            </label>
            <button
              type="button"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-extrabold text-[#011C40] transition hover:scale-[1.02]"
              style={{ background: '#A7EBF2', boxShadow: '0 10px 30px rgba(167,235,242,0.4)' }}
            >
              Send Message <Send size={18} />
            </button>
          </form>
          
        </div>
      </AnimatedSection>
    </>
  );
}
