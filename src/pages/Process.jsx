import AnimatedSection from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { processSteps } from '../data/siteData.js';

export default function Process() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="A structured workflow with room for smart iteration."
        description="Every engagement moves through four practical phases, with clear decisions, progress updates, and deliverables at each step."
      />
      <AnimatedSection className="section-pad">
        <div className="container-page max-w-5xl">
          <div className="relative space-y-6 before:absolute before:left-5 before:top-2 before:h-full before:w-px before:bg-line md:before:left-1/2">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className={`relative grid gap-5 md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>div]:col-start-2'}`}
              >
                <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-bold">{step.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
