"use client";

import { useId, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  BotIcon,
  CarFrontIcon,
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
  const isParked = project.title === "Parked";
  const Icon = isParked ? CarFrontIcon : projectIcons[index] ?? Code2Icon;

  return (
    <article className={`portfolio-project ${isParked ? "portfolio-project-parked" : ""} ${open ? "is-open" : ""}`}>
      <h3 aria-label={project.title}>
        <button
          type="button"
          className="portfolio-project-summary"
          aria-expanded={open}
          aria-controls={contentId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="portfolio-project-icon"><Icon aria-hidden="true" className="size-[17px]" strokeWidth={1.7} /></span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium text-foreground">{project.title}</span>
            <span className="block text-[13px] leading-5 text-muted-foreground">{project.tagline}</span>
          </span>
          {isParked && <span className="portfolio-project-badge">iOS app</span>}
          {stars !== null && stars > 0 ? (
            <span className="portfolio-project-stars" aria-label={`${stars} GitHub stars`}><StarIcon aria-hidden="true" className="size-3.5" />{stars}</span>
          ) : null}
          <span className="text-xs tabular-nums text-muted-foreground">{project.year}</span>
          <ChevronDownIcon aria-hidden="true" className="portfolio-project-chevron size-4" strokeWidth={1.7} />
        </button>
      </h3>
      <div id={contentId} className="portfolio-project-content" aria-hidden={!open} inert={!open}>
        <div className="portfolio-project-content-inner">
          <div className="portfolio-project-details">
            <p className="portfolio-project-role"><MetricText>{project.role}</MetricText></p>
            <ul className="portfolio-project-stack" aria-label="Technology stack">
              {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <ul className="mt-2 flex flex-col gap-1.5 pl-4 text-[13px] leading-[1.55] text-muted-foreground marker:text-foreground list-disc">
              {project.highlights.map((highlight) => <li key={highlight}><MetricText>{highlight}</MetricText></li>)}
            </ul>
            <div className="portfolio-project-actions">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="portfolio-project-source">
                View source <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />
              </Link>
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="portfolio-project-source portfolio-project-source-primary">
                  View on SibApp <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
