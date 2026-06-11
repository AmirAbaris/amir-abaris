import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { Project } from "@/lib/site-data";

type ProjectPreviewContentProps = Pick<
  Project,
  "title" | "tagline" | "liveUrl" | "previewImage"
>;

export function ProjectPreviewContent({
  title,
  tagline,
  liveUrl,
  previewImage,
}: ProjectPreviewContentProps) {
  if (!previewImage) {
    return null;
  }

  return (
    <div className="overflow-hidden">
      <AspectRatio ratio={16 / 10}>
        <Image
          src={previewImage}
          alt={`${title} landing page preview`}
          fill
          sizes="420px"
          className="object-cover object-top"
          loading="eager"
        />
      </AspectRatio>

      <div className="space-y-2 border-t bg-card p-3">
        <div>
          <p className="text-sm font-medium text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{tagline}</p>
        </div>
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          View live site
          <ArrowUpRightIcon className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
