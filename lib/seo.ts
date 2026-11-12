import { profile } from "@/lib/profile-data";
import { skillGroups } from "@/lib/skills-data";

export const seoConfig = {
  name: "Amir Mahdi Zarei Nejad",
  title: "Amir Mahdi Zarei Nejad | Frontend & Product Engineer",
  titleTemplate: "%s | Amir Mahdi Zarei Nejad",
  description:
    "Product-minded Frontend Engineer specializing in scalable design systems, full-stack architecture, and AI-native agentic workflows. Experienced in shipping web and mobile applications with React, Next.js, Angular, React Native, and Swift/SwiftUI.",
  locale: "en_US",
  category: "technology",
  jobTitle: "Frontend & Product Engineer",
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
    "Frontend & Product Engineer",
    "Frontend Engineer",
    "Design Systems",
    "Agentic Workflows",
    "Software Engineer, Frontend",
    "مهندس فرانت‌اند",
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
    "Frontend Engineer Portfolio",
    "Karaj Frontend Engineer",
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
