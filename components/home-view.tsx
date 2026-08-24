"use client";

import { useState } from "react";

import { ChatView } from "@/components/chat/chat-view";
import { type PortfolioView } from "@/components/chat/view-toggle";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProfileSection } from "@/components/profile-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteNav } from "@/components/site-nav";
import { SkillsSection } from "@/components/skills-section";

export function HomeView() {
  const [view, setView] = useState<PortfolioView>("classic");

  return (
    <>
      <SiteNav view={view} onViewChange={setView} />

      <main
        id="main"
        className="min-h-screen bg-background px-5 pb-16 pt-6 text-foreground md:px-8 md:pb-24 md:pt-10"
      >
        {view === "chat" ? (
          <div className="mx-auto w-full max-w-5xl">
            <ChatView />
          </div>
        ) : (
          <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <ProfileSection />

            <div className="space-y-14">
              <ExperienceSection />
              <ProjectsSection />
              <SkillsSection />
              <ContactSection />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
