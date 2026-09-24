export const seoConfig = {
  name: "Amir Mahdi Zarei Nejad",
  title: "Amir Mahdi Zarei Nejad | Frontend Engineer",
  titleTemplate: "%s | Amir Mahdi Zarei Nejad",
  description:
    "Frontend engineer building fast, accessible web and mobile interfaces with React, Next.js, TypeScript, and React Native, with a focus on performance and maintainable architecture.",
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
    "TypeScript Developer",
    "React Native Developer",
    "Frontend Performance",
    "Web Accessibility",
    "Frontend Engineer Portfolio",
    "Karaj Frontend Engineer",
  ],
  links: {
    github: "https://github.com/AmirAbaris",
    linkedin: "https://www.linkedin.com/in/amir-mahdi-zarei-nejad-40005526a",
    resume:
      "https://7lg03ct7vc.ufs.sh/f/PyyzXFE2HKsLWcZZowyPM2IolCJa5jOYpgUfdxH1TuyRVSiA",
  },
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "React Native",
    "Expo",
    "TailwindCSS",
    "Angular",
    "Web Accessibility",
    "TanStack Query",
    "Zustand",
    "Next.js 16",
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
