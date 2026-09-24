"use client";

import Link from "next/link";
import { FileTextIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { profile } from "@/lib/profile-data";

const links = [
  { label: "GitHub", href: profile.links.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: MailIcon },
  { label: "Résumé", href: profile.links.resume, icon: FileTextIcon },
] as const;

export function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex items-center gap-1 sm:gap-2">
      <TooltipProvider delayDuration={200}>
        {links.map(({ label, href, icon: Icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="portfolio-icon-link"
              >
                <Icon aria-hidden="true" className="size-[15px]" strokeWidth={1.8} />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom" sideOffset={8} className="rounded-[5px] px-2 py-1 text-[11px]">
              {label}
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </nav>
  );
}
