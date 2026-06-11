import { ProfileSection } from "@/components/profile-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { getAbsoluteUrl, seoConfig } from "@/lib/seo";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": getAbsoluteUrl("/#person"),
  name: seoConfig.name,
  jobTitle: seoConfig.jobTitle,
  description: seoConfig.description,
  url: getAbsoluteUrl("/"),
  image: getAbsoluteUrl(seoConfig.profileImage),
  email: `mailto:${seoConfig.email}`,
  telephone: seoConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: seoConfig.location.city,
    addressCountry: seoConfig.location.country,
  },
  sameAs: [seoConfig.links.github, seoConfig.links.linkedin],
  knowsAbout: seoConfig.skills,
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground md:px-8 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <ProfileSection />

        <div className="space-y-12 md:pt-2">
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
        </div>
      </div>
    </main>
  );
}
