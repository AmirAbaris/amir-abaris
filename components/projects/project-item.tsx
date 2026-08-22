import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

import { MetricText } from "@/components/metric-text";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Project } from "@/lib/site-data";

type ProjectItemProps = Project;

export function ProjectItem({
  title,
  tagline,
  year,
  role,
  stack,
  highlights,
  repoUrl,
  previewImage,
}: ProjectItemProps) {
  return (
    <article className="space-y-4 border-t border-border pt-6">
      {previewImage ? (
        <Link
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View the ${title} source on GitHub`}
          className="group block overflow-hidden rounded-xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <AspectRatio ratio={16 / 10}>
            <Image
              src={previewImage}
              alt={`${title} landing page`}
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </AspectRatio>
        </Link>
      ) : null}

      <div className="space-y-3">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-muted-foreground">
            <span>{year}</span>
            <span aria-hidden>/</span>
            <span>
              <MetricText>{role}</MetricText>
            </span>
          </div>
          <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <ul className="space-y-2 text-[15px] leading-7 text-muted-foreground">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex gap-2.5">
              <span className="mt-[0.6875rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-foreground" />
              <span>
                <MetricText>{highlight}</MetricText>
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          <GithubIcon className="h-3.5 w-3.5" />
          View source
        </Link>
      </div>
    </article>
  );
}
