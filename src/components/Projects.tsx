/**
 * Projects section. Content comes from portfolio.ts → projects.
 * Only projects with published: true are shown.
 * Fields left empty ("" or []) are hidden, and so are missing screenshots.
 */
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Circle, ShieldCheck } from "lucide-react";
import { headings } from "@/data/portfolio";
import { filled, getPublishedProjects } from "@/lib/content";
import { GitHubIcon } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

type ProjectView = ReturnType<typeof getPublishedProjects>[number];

const statusStyles: Record<ProjectView["status"], string> = {
  "In progress": "bg-accent-soft text-accent",
  Completed: "bg-ink text-paper",
  Planned: "bg-paper-deep text-ink-soft",
  Paused: "bg-paper-deep text-ink-soft",
};

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase">{label}</h4>
      <div className="mt-2.5 leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-ink-soft">
          {t}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project, index }: { project: ProjectView; index: number }) {
  const facts = [
    { label: "The problem", value: project.problem },
    { label: "The solution", value: project.solution },
    { label: "Who it's for", value: project.intendedUsers },
    { label: "My role", value: project.myRole },
  ].filter((f) => filled(f.value));

  return (
    <article
      id={`project-${project.id}`}
      aria-labelledby={`project-${project.id}-title`}
      className="overflow-hidden rounded-[6px] bg-paper ring-1 ring-line"
    >
      {/* Header */}
      <div className="border-b border-line p-6 md:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] tracking-[0.08em] uppercase ${statusStyles[project.status]}`}>
            <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
            {project.status}
          </span>
        </div>
        <h3 id={`project-${project.id}-title`} className="mt-5 font-display text-3xl leading-tight tracking-tight text-balance md:text-4xl">
          {project.title}
        </h3>
        {filled(project.tagline) && <p className="mt-3 max-w-2xl text-lg text-ink-soft">{project.tagline}</p>}

        {(filled(project.githubUrl) || filled(project.liveUrl)) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {filled(project.liveUrl) && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent"
              >
                Live demo <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
            {filled(project.githubUrl) && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-4 py-2 text-sm font-medium transition-colors hover:border-ink"
              >
                <GitHubIcon className="size-4" /> Source code
              </a>
            )}
          </div>
        )}
      </div>

      {/* Screenshots (only files that exist) */}
      {project.screenshots.length > 0 && (
        <div className="grid gap-px border-b border-line bg-line sm:grid-cols-2">
          {project.screenshots.map((shot) => (
            <div key={shot.src} className="relative aspect-[16/10] bg-paper-deep">
              <Image
                src={shot.src}
                alt={shot.alt || `${project.title} screenshot`}
                fill
                sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}

      {/* Problem / solution / users / role */}
      {facts.length > 0 && (
        <div className="grid gap-8 border-b border-line p-6 md:grid-cols-2 md:gap-x-14 md:gap-y-10 md:p-10">
          {facts.map((f) => (
            <Block key={f.label} label={f.label}>
              <p>{f.value}</p>
            </Block>
          ))}
        </div>
      )}

      {/* Built vs planned: kept visibly separate so nothing planned looks finished */}
      {(project.built.length > 0 || project.roadmap.length > 0) && (
        <div className="grid gap-8 border-b border-line p-6 md:grid-cols-2 md:gap-x-14 md:p-10">
          {project.built.length > 0 && (
            <Block label="Working now">
              <ul className="space-y-2">
                {project.built.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 size-[18px] shrink-0 text-ink" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Block>
          )}
          {project.roadmap.length > 0 && (
            <Block label="Roadmap · planned, not built yet">
              <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {project.roadmap.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Circle className="mt-1 size-3.5 shrink-0 text-muted" strokeWidth={2} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </div>
      )}

      {/* Skills, technologies, learning, data note */}
      <div className="grid gap-8 p-6 md:grid-cols-2 md:gap-x-14 md:p-10">
        {project.skills.length > 0 && (
          <Block label="Skills involved">
            <Tags items={project.skills} />
          </Block>
        )}
        {project.technologies.length > 0 && (
          <Block label="Technologies used">
            <Tags items={project.technologies} />
          </Block>
        )}
        {filled(project.keyLearning) && (
          <Block label="Key learning">
            <p>{project.keyLearning}</p>
          </Block>
        )}
        {filled(project.dataNote) && (
          <p className="flex gap-2.5 self-end text-sm text-muted md:col-span-2">
            <ShieldCheck className="size-4 shrink-0 translate-y-0.5" aria-hidden="true" />
            {project.dataNote}
          </p>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const projects = getPublishedProjects();
  if (projects.length === 0) return null;
  return (
    <Section id="projects" number="03" label="Projects" title={headings.projects} className="bg-paper-deep/60">
      <div className="space-y-10">
        {projects.map((project, i) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
