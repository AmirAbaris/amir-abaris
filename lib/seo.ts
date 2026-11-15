import { profile } from "@/lib/profile-data";
import { skillGroups } from "@/lib/skills-data";

export const seoConfig = {
  name: "Amir Mahdi Zarei Nejad",
  title: "Amir Mahdi Zarei Nejad | Full-Stack Developer",
  titleTemplate: "%s | Amir Mahdi Zarei Nejad",
  description:
    "Full-Stack Developer with 2+ years of production experience shipping end-to-end web platforms, APIs, and developer tools across TypeScript, Next.js, Node.js, Python/FastAPI, Go, PostgreSQL, and verification-first agentic workflows.",
  locale: "en_US",
  category: "technology",
  jobTitle: "Full-Stack Developer",
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
    "Full-Stack Developer",
    "Full Stack Developer",
    "Applied AI Developer",
    "Software Engineer",
    "Open-Source Developer Tools",
    "برنامه‌نویس فول‌استک",
    "TypeScript Developer",
    "Node.js Developer",
    "Next.js Developer",
    "PostgreSQL",
    "FastAPI",
    "Python",
    "Go Developer",
    "NestJS",
    "Drizzle ORM",
    "RAG",
    "AI Agents",
    "React Developer",
    "React Native Developer",
    "Angular Developer",
    "Swift Developer",
    "Karaj Full-Stack Developer",
  ],
  links: profile.links,
  skills: [
    ...skillGroups.flatMap((group) => group.skills),
    "Full-Stack Architecture",
    "Open-Source Developer Tools",
    "Design Systems",
    "Web Accessibility",
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
