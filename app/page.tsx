import { ProfileSection } from "@/components/profile-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center py-12 md:py-0 p-8">
      <div className="container max-w-6xl flex justify-center flex-col md:flex-row gap-12 items-center md:items-start">
        <ProfileSection />

        <div className="relative md:w-1/2 md:py-6">
          <div className="absolute left-4 md:left-0 h-[calc(100%-2rem)] w-px bg-border top-3 md:my-6" />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
        </div>
      </div>
    </main>
  );
}
