import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection.jsx';

export default function TestimonialsCarousel({ testimonials }) {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  const move = (direction) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <AnimatedSection className="section-pad" style={{ backgroundColor: '#011C40' }}>
      <div className="container-page max-w-5xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#54ACBF]">Testimonials</p>
        <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl text-white mb-12">What our clients say.</h2>
        
        <div 
          className="group mx-auto rounded-[2.5rem] p-10 sm:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(1,28,64,0.5)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(84,172,191,0.25)] border border-[#26658C] hover:border-[#54ACBF] cursor-default"
          style={{ background: 'linear-gradient(145deg, #023859 0%, #011C40 100%)' }}
        >
          {/* Top highlight glow on hover */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#54ACBF] to-[#A7EBF2] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {/* Decorative quote mark */}
          <div className="absolute top-6 left-6 text-[#26658C]/30 rotate-180 pointer-events-none">
            <Quote size={120} />
          </div>

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-[0_10px_30px_rgba(84,172,191,0.3)]" style={{ background: 'linear-gradient(135deg,#54ACBF,#26658C)' }}>
            <Quote size={28} className="text-white" />
          </div>
          
          <blockquote className="mx-auto mt-8 max-w-3xl font-display text-2xl font-semibold leading-relaxed text-white sm:text-3xl relative z-10">
            "{testimonial.quote}"
          </blockquote>
          
          <div className="mt-10 relative z-10">
            <p className="font-extrabold text-[#A7EBF2] text-xl transition-colors duration-300 group-hover:text-white">{testimonial.name}</p>
            <p className="mt-2 text-xs font-bold text-[#54ACBF] uppercase tracking-[0.2em]">{testimonial.role}</p>
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            type="button"
            className="focus-ring flex h-12 w-12 items-center justify-center rounded-xl border transition hover:scale-110"
            style={{ borderColor: '#26658C', backgroundColor: '#023859', color: '#A7EBF2' }}
            aria-label="Previous testimonial"
            onClick={() => move(-1)}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            className="focus-ring flex h-12 w-12 items-center justify-center rounded-xl border transition hover:scale-110"
            style={{ borderColor: '#26658C', backgroundColor: '#023859', color: '#A7EBF2' }}
            aria-label="Next testimonial"
            onClick={() => move(1)}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
