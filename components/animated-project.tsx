"use client";

import { useId, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  BotIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  Code2Icon,
  StarIcon,
  WandSparklesIcon,
} from "lucide-react";

import { MetricText } from "@/components/metric-text";
import type { Project } from "@/lib/site-data";

const projectIcons = [Code2Icon, CalendarDaysIcon, WandSparklesIcon, BotIcon];

export function AnimatedProject({
  project,
  index,
  stars,
}: {
  project: Project;
  index: number;
  stars: number | null;
}) {
  const [open, setOpen] = useState(false);
  const contentId = useId();
  const Icon = projectIcons[index] ?? Code2Icon;

  return (
    <article className={`portfolio-project ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="portfolio-project-summary"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="portfolio-project-icon"><Icon aria-hidden="true" className="size-4" strokeWidth={1.6} /></span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-medium text-foreground">{project.title}</span>
          <span className="block text-[13px] leading-5 text-muted-foreground">{project.tagline}</span>
        </span>
        {stars !== null && stars > 0 ? (
          <span className="portfolio-project-stars" aria-label={`${stars} GitHub stars`}><StarIcon aria-hidden="true" className="size-3.5" />{stars}</span>
        ) : null}
        <span className="text-xs tabular-nums text-muted-foreground">{project.year}</span>
        <ChevronDownIcon aria-hidden="true" className="portfolio-project-chevron size-4" strokeWidth={1.7} />
      </button>
      <div id={contentId} className="portfolio-project-content" aria-hidden={!open} inert={!open}>
        <div className="portfolio-project-content-inner">
          <div className="portfolio-project-details">
            <p className="text-xs text-muted-foreground"><MetricText>{project.role}</MetricText> · {project.stack.join(" · ")}</p>
            <ul className="mt-2 flex flex-col gap-1.5 pl-4 text-[13px] leading-[1.55] text-muted-foreground marker:text-foreground list-disc">
              {project.highlights.map((highlight) => <li key={highlight}><MetricText>{highlight}</MetricText></li>)}
            </ul>
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="portfolio-project-source">
              View source <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
