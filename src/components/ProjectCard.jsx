export default function ProjectCard({ project }) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(84,172,191,0.2)]"
      style={{ backgroundColor: '#023859', border: '1px solid #26658C' }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex translate-y-3 items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm font-medium leading-6 text-slate-200">{project.summary}</p>
        </div>
        {/* Green shine top line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#54ACBF] to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="p-5">
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#54ACBF]"
          style={{ backgroundColor: 'rgba(84,172,191,0.1)', border: '1px solid rgba(84,172,191,0.3)' }}
        >
          {project.category}
        </span>
        <h3 className="mt-3 font-display text-lg font-bold text-white group-hover:text-[#A7EBF2] transition-colors duration-300">
          {project.title}
        </h3>
      </div>
    </article>
  );
}
