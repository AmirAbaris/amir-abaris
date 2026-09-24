import Link from "next/link";
import {
  ArrowUpRightIcon,
  FileTextIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MessageCircleIcon,
} from "lucide-react";

import { ContributionGrid } from "@/components/contribution-grid";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { profile } from "@/lib/profile-data";

const socialLinks = [
  { label: "GitHub", href: profile.links.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.links.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: MailIcon },
  { label: "Résumé", href: profile.links.resume, icon: FileTextIcon },
] as const;

export function HomeView() {
  return (
    <main id="main" className="portfolio-shell">
      <header id="top" className="portfolio-header">
        <div>
          <h1 className="text-[15px] font-semibold tracking-[-0.015em] text-foreground">
            {profile.name}
          </h1>
          <p className="mt-1 text-[15px] text-muted-foreground">{profile.noun}</p>
        </div>

        <nav aria-label="Social links" className="flex items-center gap-1 sm:gap-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="portfolio-icon-link"
            >
              <Icon aria-hidden="true" className="size-[15px]" strokeWidth={1.8} />
            </Link>
          ))}
        </nav>
      </header>

      <div className="mt-8 flex flex-col gap-3 text-[16px] leading-[1.48] tracking-[-0.012em] text-foreground sm:mt-9">
        <p>
          Hey, I&apos;m Amir, a frontend engineer based in <span className="portfolio-inline-emphasis">{profile.location}</span>. I build thoughtful web and mobile interfaces with React, Next.js, TypeScript, and React Native.
        </p>
        <p>
          Over the past two years, I&apos;ve shipped real-time features, API-driven products, and responsive experiences. I also build backend systems with Go, Node.js, and PostgreSQL.
        </p>
      </div>

      <div className="relative mt-6 flex flex-wrap items-center gap-2">
        {profile.availability.open ? (
          <div className="portfolio-note" aria-label={profile.availability.label}>
            <span>open to work</span>
            <svg viewBox="0 0 52 22" fill="none" aria-hidden="true">
              <path d="M2 2c9 13 21 13 45 12m0 0-8-7m8 7-8 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ) : null}
        <Link href={`mailto:${profile.email}`} className="portfolio-button portfolio-button-primary">
          Get in touch
        </Link>
        <Link href="/chat" className="portfolio-button portfolio-button-secondary">
          <MessageCircleIcon aria-hidden="true" className="size-3.5" />
          Chat with my AI clone
        </Link>
      </div>

      <div className="mt-12 flex flex-col gap-11 sm:mt-13 sm:gap-12">
        <ContributionGrid />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
      </div>

      <footer id="contact" className="portfolio-footer">
        <div>
          <h2 className="text-[15px] font-semibold text-foreground">Let&apos;s talk</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Have a role, project, or interesting problem in mind?
          </p>
        </div>
        <Link href={`mailto:${profile.email}`} className="portfolio-footer-link">
          {profile.email}
          <ArrowUpRightIcon aria-hidden="true" className="size-3.5" />
        </Link>
      </footer>
    </main>
  );
}
