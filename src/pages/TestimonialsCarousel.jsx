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
    <AnimatedSection className="section-pad bg-ink text-white">
      <div className="container-page max-w-5xl text-center">
        <p className="eyebrow">Testimonials</p>
        <div className="mx-auto mt-7 flex h-14 w-14 items-center justify-center rounded-md bg-white/10 text-brand">
          <Quote size={30} />
        </div>
        <blockquote className="mx-auto mt-8 max-w-4xl font-display text-2xl font-bold leading-relaxed text-white sm:text-4xl">
          "{testimonial.quote}"
        </blockquote>
        <p className="mt-6 font-bold">{testimonial.name}</p>
        <p className="mt-1 text-sm text-slate-300">{testimonial.role}</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 transition hover:border-brand hover:bg-white/10"
            aria-label="Previous testimonial"
            onClick={() => move(-1)}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 transition hover:border-brand hover:bg-white/10"
            aria-label="Next testimonial"
            onClick={() => move(1)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
