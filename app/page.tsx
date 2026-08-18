import { HomeJsonLd } from "@/components/home-json-ld";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProfileSection } from "@/components/profile-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteNav } from "@/components/site-nav";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>

      <SiteNav />

      <main
        id="main"
        className="min-h-screen bg-background px-5 pb-16 pt-6 text-foreground md:px-8 md:pb-24 md:pt-10"
      >
        <HomeJsonLd />
        <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <ProfileSection />

          <div className="space-y-14">
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </div>
        </div>
      </main>
    </>
  );
}
