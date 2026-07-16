import AnimatedSection from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { company } from '../data/siteData.js';

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A digital partner built for businesses that need polish, clarity, and pace."
        description="Solvia Codes brings development, design, and marketing together so your digital presence feels consistent from first idea to final launch."
      />
      <AnimatedSection className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {[
            ['Mission', 'Help ambitious businesses turn ideas into reliable digital products, strong brand experiences, and measurable online growth.'],
            [
              'Founding Story',
              `${company.name} was created to solve a common problem: businesses often need a website, app, design, and marketing support, but managing separate vendors slows everything down. Our studio brings those services into one clear workflow.`
            ],
            [
              'What Makes Us Different',
              'We focus on practical solutions, not overcomplicated processes. Every project balances clean design, solid development, clear messaging, and growth-focused thinking from the beginning.'
            ]
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-line bg-white p-7 shadow-sm">
              <h2 className="font-display text-2xl font-bold">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
