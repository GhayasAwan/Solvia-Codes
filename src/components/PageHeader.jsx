import AnimatedSection from './AnimatedSection.jsx';

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <AnimatedSection className="relative overflow-hidden border-b border-line bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(14,165,163,0.14),transparent_30%)]" />
      <div className="container-page relative max-w-4xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.04] text-ink sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      </div>
    </AnimatedSection>
  );
}
