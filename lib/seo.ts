import { profile } from "@/lib/profile-data";
import { skillGroups } from "@/lib/skills-data";

export const seoConfig = {
  name: "Amir Mahdi Zarei Nejad",
  title: "Amir Mahdi Zarei Nejad | Frontend Engineer",
  titleTemplate: "%s | Amir Mahdi Zarei Nejad",
  description:
    "Frontend engineer building production web and mobile applications with React, Next.js, Angular, and TypeScript, focused on accessibility, performance, API integration, and maintainable state management.",
  locale: "en_US",
  category: "technology",
  jobTitle: "Frontend Engineer",
  location: {
    city: "Karaj",
    country: "Iran",
  },
  email: "thisisamirabaris@gmail.com",
  twitterCreator: "@abaris_aa",
  profileImage: "/images/real_aba.jpeg",
  ogImage: "/opengraph-image",
  keywords: [
    "Amir Mahdi Zarei Nejad",
    "Frontend Engineer",
    "Software Engineer, Frontend",
    "مهندس فرانت‌اند",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "TypeScript Developer",
    "React Native Developer",
    "Frontend Performance",
    "Web Accessibility",
    "Frontend Engineer Portfolio",
    "Karaj Frontend Engineer",
    "Frontend Architecture",
    "React Native Notifications",
    "Viewport-Based Map Fetching",
  ],
  links: profile.links,
  skills: [
    ...skillGroups.flatMap((group) => group.skills),
    "Web Accessibility",
    "Frontend Architecture",
  ],
} as const;

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
    /\/+$/,
    "",
  );
}

export function getAbsoluteUrl(path = "/") {
  return new URL(path, `${getSiteUrl()}/`).toString();
}
