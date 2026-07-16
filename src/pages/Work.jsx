import { useMemo, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/siteData.js';

const filters = ['All', 'Development', 'Design', 'Marketing'];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = useMemo(
    () => (activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter]
  );

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Work examples across product, design, and marketing."
        description="Explore sample project directions that show how Solvia Codes approaches development, UI/UX design, and social media growth."
      />
      <AnimatedSection className="section-pad">
        <div className="container-page">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`focus-ring rounded-md border px-4 py-2 text-sm font-bold transition ${
                  activeFilter === filter
                    ? 'border-ink bg-ink text-white'
                    : 'border-line bg-white text-slate-700 hover:border-brand hover:text-ink'
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
