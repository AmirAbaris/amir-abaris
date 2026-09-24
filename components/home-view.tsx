import Link from "next/link";
import { ArrowUpRightIcon, MessageCircleIcon } from "lucide-react";

import { ContributionGrid } from "@/components/contribution-grid";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/profile-data";

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

        <SocialLinks />
      </header>

      <div className="mt-8 flex flex-col gap-3 text-[16px] leading-[1.48] tracking-[-0.012em] text-foreground sm:mt-9">
        <p>
          Hey, I&apos;m Amir, a frontend engineer based in <span className="portfolio-inline-emphasis">{profile.location}</span>. I build thoughtful web and mobile interfaces with React, Next.js, TypeScript, and React Native.
        </p>
        <p>
          I focus on the engineering behind fast, reliable interfaces: rendering performance, accessible interactions, and predictable client state. I&apos;ve put that work into production web and mobile products over the past two years.
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
      <p className="portfolio-credit">Design inspired by <a href="https://maxkatz.me/" target="_blank" rel="noopener noreferrer">Max Katz</a>.</p>
    </main>
  );
}
