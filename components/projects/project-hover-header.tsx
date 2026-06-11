"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ProjectPreviewContent } from "@/components/projects/project-preview-content";
import type { Project } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type ProjectHoverHeaderProps = Pick<
  Project,
  "title" | "tagline" | "liveUrl" | "previewImage"
>;

export function ProjectHoverHeader({
  title,
  tagline,
  liveUrl,
  previewImage,
}: ProjectHoverHeaderProps) {
  if (!previewImage) {
    return (
      <div className="space-y-0.5">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{tagline}</p>
      </div>
    );
  }

  return (
    <HoverCard openDelay={120} closeDelay={80}>
      <HoverCardTrigger asChild>
        <button
          type="button"
          className={cn(
            "group/header w-fit space-y-0.5 rounded-sm text-left outline-none hover:cursor-pointer",
            "transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
          aria-label={`Preview ${title}`}
        >
          <h3 className="font-semibold text-foreground underline decoration-transparent decoration-2 underline-offset-4 transition-[color,decoration-color] group-hover/header:decoration-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground transition-colors group-hover/header:text-foreground/80">
            {tagline}
          </p>
        </button>
      </HoverCardTrigger>

      <HoverCardContent
        side="left"
        align="start"
        sideOffset={12}
        className="w-[min(100vw-2rem,26rem)] overflow-hidden p-0 shadow-lg"
      >
        <ProjectPreviewContent
          title={title}
          tagline={tagline}
          liveUrl={liveUrl}
          previewImage={previewImage}
        />
      </HoverCardContent>
    </HoverCard>
  );
}
