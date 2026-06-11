import { projects, experiences } from "@/lib/site-data";
import { getAbsoluteUrl, seoConfig } from "@/lib/seo";

export function buildHomeJsonLd() {
  const personId = getAbsoluteUrl("/#person");
  const websiteId = getAbsoluteUrl("/#website");
  const webpageId = getAbsoluteUrl("/#webpage");
  const projectsId = getAbsoluteUrl("/#projects");

  const sameAs = [
    seoConfig.links.github,
    seoConfig.links.linkedin,
    seoConfig.links.resume,
  ];

  const currentRole = experiences[0];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: getAbsoluteUrl("/"),
        name: seoConfig.name,
        description: seoConfig.description,
        inLanguage: "en-US",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": webpageId,
        url: getAbsoluteUrl("/"),
        name: seoConfig.title,
        description: seoConfig.description,
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: seoConfig.name,
        jobTitle: seoConfig.jobTitle,
        description: seoConfig.description,
        url: getAbsoluteUrl("/"),
        image: getAbsoluteUrl(seoConfig.profileImage),
        email: seoConfig.email,
        telephone: seoConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: seoConfig.location.city,
          addressCountry: seoConfig.location.country,
        },
        sameAs,
        knowsAbout: [...seoConfig.skills],
        worksFor: {
          "@type": "Organization",
          name: currentRole.company,
        },
        hasOccupation: {
          "@type": "Occupation",
          name: currentRole.title,
          occupationalCategory: seoConfig.jobTitle,
          skills: [...seoConfig.skills],
        },
        subjectOf: { "@id": projectsId },
      },
      {
        "@type": "ItemList",
        "@id": projectsId,
        name: "Projects",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.title,
            description: project.tagline,
            url: project.liveUrl,
            applicationCategory: "WebApplication",
            operatingSystem: "Web",
            datePublished: project.year,
            keywords: project.stack.join(", "),
            author: { "@id": personId },
            ...(project.previewImage
              ? { screenshot: getAbsoluteUrl(project.previewImage) }
              : {}),
          },
        })),
      },
    ],
  };
}
