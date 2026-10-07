"use client";

import type { SVGProps } from "react";
import Link from "next/link";
import { FileTextIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { profile } from "@/lib/profile-data";

function XLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.583-6.63 7.583H.48l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.49h2.039L6.482 3.24H4.296l13.315 17.403Z" />
    </svg>
  );
}

const links = [
  { label: "GitHub", href: profile.links.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, icon: LinkedinIcon },
  { label: "X", href: profile.links.x, icon: XLogo },
  { label: "Email", href: `mailto:${profile.email}`, icon: MailIcon },
  { label: "Résumé", href: profile.links.resume, icon: FileTextIcon },
] as const;

export function SocialLinks() {
  return (
    <nav aria-label="Social links" className="flex items-center gap-0 sm:gap-2">
      <TooltipProvider delayDuration={200}>
        {links.map(({ label, href, icon: Icon }) => (
          <div key={label} className={label === "Résumé" ? "portfolio-resume-link" : undefined}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="portfolio-icon-link"
                >
                  <Icon aria-hidden="true" className="size-[15px]" strokeWidth={1.8} />
                  {label === "Résumé" ? <span className="portfolio-resume-mobile-label" aria-hidden="true">Resume</span> : null}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" sideOffset={8} className="rounded-[5px] px-2 py-1 text-[11px]">
                {label}
              </TooltipContent>
            </Tooltip>
            {label === "Résumé" ? (
              <span className="portfolio-resume-note" aria-hidden="true">
                <span>My resume</span>
                <svg viewBox="0 0 76 40" fill="none">
                  <path d="M3 19C21 12 44 11 55 18C62 22 63 28 60 35M54 29L60 36L67 29" />
                </svg>
              </span>
            ) : null}
          </div>
        ))}
      </TooltipProvider>
    </nav>
  );
}
