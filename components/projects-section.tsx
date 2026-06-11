import Link from "next/link";
import { ArrowUpRightIcon, GithubIcon } from "lucide-react";
import { projects, type Project } from "@/lib/site-data";

type ProjectItemProps = Project;

function ProjectItem({
  title,
  tagline,
  year,
  stack,
  highlights,
  liveUrl,
  githubUrl,
}: ProjectItemProps) {
  return (
    <article className="grid gap-3 border-t border-border pt-5 sm:grid-cols-[9rem_1fr]">
      <div className="space-y-1 text-sm text-muted-foreground">
        <p>{year}</p>
        <p>Personal Project</p>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{tagline}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Live demo
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
          {githubUrl ? (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Source
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-5">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Projects
        </p>
        <h2 className="mt-2 text-2xl font-semibold">Things I&apos;ve Built</h2>
      </div>
      <div className="space-y-7">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
