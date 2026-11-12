import { profile } from "@/lib/profile-data";
import { skillGroups } from "@/lib/skills-data";

export const seoConfig = {
  name: "Amir Mahdi Zarei Nejad",
  title: "Amir Mahdi Zarei Nejad | Full Stack Developer",
  titleTemplate: "%s | Amir Mahdi Zarei Nejad",
  description:
    "Full Stack Developer specializing in scalable design systems, full-stack architecture, and AI-native agentic workflows. Experienced in shipping web and mobile applications with React, Next.js, Angular, React Native, and Swift/SwiftUI.",
  locale: "en_US",
  category: "technology",
  jobTitle: "Full Stack Developer",
  location: {
    city: "Karaj",
    country: "Iran",
  },
  email: "thisisamirabaris@gmail.com",
  phone: profile.phone,
  twitterCreator: "@abaris_aa",
  profileImage: "/images/real_aba.jpeg",
  ogImage: "/opengraph-image",
  keywords: [
    "Amir Mahdi Zarei Nejad",
    "Full Stack Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "Design Systems",
    "Agentic Workflows",
    "برنامه‌نویس فول‌استک",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "TypeScript Developer",
    "React Native Developer",
    "Swift Developer",
    "TanStack Query",
    "Zustand",
    "Vercel Eve",
    "Frontend Performance",
    "Web Accessibility",
    "Full Stack Developer Portfolio",
    "Karaj Full Stack Developer",
    "Frontend Architecture",
  ],
  links: profile.links,
  skills: [
    ...skillGroups.flatMap((group) => group.skills),
    "Design Systems",
    "Agentic Workflows",
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
