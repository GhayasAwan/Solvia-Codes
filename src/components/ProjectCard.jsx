export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
        />
        <div className="absolute inset-0 flex translate-y-4 items-end bg-gradient-to-t from-ink via-ink/60 to-transparent p-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm font-medium leading-6 text-white">{project.summary}</p>
        </div>
      </div>
      <div className="p-6">
        <span className="rounded-md bg-brand/10 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-brand">
          {project.category}
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-ink">{project.title}</h3>
      </div>
    </article>
  );
}
