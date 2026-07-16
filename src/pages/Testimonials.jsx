import PageHeader from '../components/PageHeader.jsx';
import { testimonials } from '../data/siteData.js';
import TestimonialsCarousel from './TestimonialsCarousel.jsx';

export default function Testimonials() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Client feedback from digital projects and growth campaigns."
        description="A professional preview of the kind of client experience Solvia Codes aims to deliver on every project."
      />
      <TestimonialsCarousel testimonials={testimonials} />
    </>
  );
}
