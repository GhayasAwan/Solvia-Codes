import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group relative overflow-hidden rounded-lg border border-line bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-soft">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-ink opacity-0 transition group-hover:opacity-100" />
      <div className="flex h-13 w-13 items-center justify-center rounded-md bg-ink text-white shadow-sm">
        <Icon size={24} />
      </div>
      <h3 className="mt-7 font-display text-2xl font-bold text-ink">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
      <Link
        to={`/services#${service.slug}`}
        className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-brand transition group-hover:gap-3"
      >
        Learn More <ArrowRight size={16} />
      </Link>
    </article>
  );
}
