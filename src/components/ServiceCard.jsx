import { ArrowRight, ExternalLink } from 'lucide-react';

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article
      className="group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(84,172,191,0.2)] cursor-pointer"
      style={{ backgroundColor: '#023859', border: '1px solid #26658C' }}
    >
      {/* Blue top glow on hover */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#54ACBF] via-[#A7EBF2] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon Box */}
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl text-[#54ACBF] transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(84,172,191,0.4)]"
        style={{ background: 'linear-gradient(135deg, #023859, #011C40)', border: '1px solid #26658C' }}
      >
        <Icon size={26} />
      </div>

      {/* Service Number */}
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#54ACBF]/60">
        {String(service.order || '01').padStart(2, '0')}
      </p>

      <h3 className="mt-2 font-display text-xl font-bold text-white group-hover:text-[#A7EBF2] transition-colors duration-300">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-400">
        {service.description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#54ACBF] transition-all duration-300 group-hover:gap-3">
        <span>Learn More</span>
        <ArrowRight size={15} />
      </div>
    </article>
  );
}
