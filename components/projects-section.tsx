import Link from "next/link";
import { ArrowUpRightIcon, BotIcon, CalendarDaysIcon, ChevronDownIcon, Code2Icon, StarIcon, WandSparklesIcon } from "lucide-react";

import { MetricText } from "@/components/metric-text";
import { projects } from "@/lib/site-data";

async function getEndpointStars() {
  try {
    const response = await fetch("https://api.github.com/repos/Bytepute/endpointForge", {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 21600 },
    });
    if (!response.ok) return 20;
    const repository: { stargazers_count?: number } = await response.json();
    return repository.stargazers_count ?? 20;
  } catch {
    return 20;
  }
}

const projectIcons = [Code2Icon, CalendarDaysIcon, WandSparklesIcon, BotIcon];

export async function ProjectsSection() {
  const endpointStars = await getEndpointStars();
  return (
    <section id="projects" aria-labelledby="projects-heading" className="portfolio-section">
      <div className="portfolio-section-heading">
        <h2 id="projects-heading">Projects</h2>
      </div>
      <div className="flex flex-col gap-1">
        {projects.map((project, index) => {
          const Icon = projectIcons[index] ?? Code2Icon;
          return (
            <details key={project.title} className="portfolio-project group">
              <summary className="portfolio-project-summary">
                <span className="portfolio-project-icon"><Icon aria-hidden="true" className="size-4" strokeWidth={1.6} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">{project.title}</span>
                  <span className="block text-[13px] leading-5 text-muted-foreground">{project.tagline}</span>
                </span>
                {project.showGitHubStars && endpointStars > 0 ? (
                  <span className="portfolio-project-stars" aria-label={`${endpointStars} GitHub stars`}><StarIcon aria-hidden="true" className="size-3.5" />{endpointStars}</span>
                ) : null}
                <span className="text-xs tabular-nums text-muted-foreground">{project.year}</span>
                <ChevronDownIcon aria-hidden="true" className="portfolio-project-chevron size-4" strokeWidth={1.7} />
              </summary>
              <div className="portfolio-project-details">
                <p className="text-xs text-muted-foreground"><MetricText>{project.role}</MetricText> · {project.stack.join(" · ")}</p>
                <ul className="mt-2 flex flex-col gap-1.5 pl-4 text-[13px] leading-[1.55] text-muted-foreground marker:text-foreground list-disc">
                  {project.highlights.map((highlight) => <li key={highlight}><MetricText>{highlight}</MetricText></li>)}
                </ul>
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="portfolio-project-source">
                  View source <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />
                </Link>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
