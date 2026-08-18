import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, GithubIcon, GlobeLockIcon } from "lucide-react";

import { MetricText } from "@/components/metric-text";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
  liveUrl,
  previewImage,
  githubUrl,
  accessAlert,
}: ProjectItemProps) {
  return (
    <article className="space-y-4 border-t border-border pt-6">
      {previewImage ? (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open the ${title} live site`}
          className="group block overflow-hidden rounded-xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <AspectRatio ratio={16 / 10}>
            <Image
              src={previewImage}
              alt={`${title} — landing page`}
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </AspectRatio>
        </Link>
      ) : null}

      <div className="space-y-3">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
            <span>{year}</span>
            <span aria-hidden>·</span>
            <span>
              <MetricText>{role}</MetricText>
            </span>
          </div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <ul className="space-y-2 text-[15px] leading-7 text-muted-foreground">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex gap-2.5">
              <span className="mt-[0.6875rem] h-1 w-1 shrink-0 rounded-full bg-brand" />
              <span>
                <MetricText>{highlight}</MetricText>
              </span>
            </li>
          ))}
        </ul>

        {accessAlert ? (
          <Alert>
            <GlobeLockIcon />
            <AlertTitle>{accessAlert.title}</AlertTitle>
            <AlertDescription>{accessAlert.description}</AlertDescription>
          </Alert>
        ) : null}

        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-brand"
          >
            Live demo
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
          {githubUrl ? (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-brand"
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
