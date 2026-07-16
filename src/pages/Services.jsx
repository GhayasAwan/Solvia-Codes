import AnimatedSection from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/siteData.js';

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Multi-service support for websites, apps, brand experiences, and online growth."
        description="Choose one focused service or combine development, design, and marketing into a connected project handled by one digital partner."
      />
      <AnimatedSection className="section-pad">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div id={service.slug} key={service.title} className="scroll-mt-24">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
