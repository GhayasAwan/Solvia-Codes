import AnimatedSection from '../components/AnimatedSection.jsx';
import PageHeader from '../components/PageHeader.jsx';
import { company, teamMembers } from '../data/siteData.js';

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A digital partner built for businesses that need polish, clarity, and pace."
        description="Solvia Codes brings development, design, and marketing together so your digital presence feels consistent from first idea to final launch."
      />
      <AnimatedSection className="section-pad">
        <div className="container-page grid gap-6 lg:grid-cols-3">
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
            <article key={title} className="relative overflow-hidden rounded-lg border border-line bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="absolute inset-x-0 top-0 h-1 bg-brand" />
              <h2 className="font-display text-2xl font-extrabold">{title}</h2>
              <p className="mt-5 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad bg-white">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Team</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                The people behind Solvia Codes.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              Replace these details with each team member's real name, role, skills, and intro when you are ready.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <article
                key={`${member.role}-${index}`}
                className="group overflow-hidden rounded-lg border border-line bg-cloud shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-ink text-white">
                  <div className="flex h-24 w-24 items-center justify-center rounded-md border border-white/15 bg-white/10 font-display text-3xl font-extrabold">
                    {member.name
                      .split(' ')
                      .map((part) => part[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand">Member 0{index + 1}</p>
                  <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">{member.name}</h3>
                  <p className="mt-2 text-sm font-bold text-slate-700">{member.role}</p>
                  <p className="mt-4 rounded-md bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    {member.focus}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
