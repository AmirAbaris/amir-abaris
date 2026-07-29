export const seoConfig = {
  name: "Amir Mahdi Zarei Nejad",
  title: "Amir Mahdi Zarei Nejad | Software Engineer",
  titleTemplate: "%s | Amir Mahdi Zarei Nejad",
  description:
    "Software Engineer building production-ready web and mobile applications with React, Next.js, TypeScript, Go, and modern backend technologies.",
  locale: "en_US",
  category: "technology",
  jobTitle: "Software Engineer",
  location: {
    city: "Karaj",
    country: "Iran",
  },
  email: "thisisamirabaris@gmail.com",
  phone: "+989364447435",
  twitterCreator: "@abaris_aa",
  profileImage: "/images/real_aba.jpeg",
  ogImage: "/opengraph-image",
  keywords: [
    "Amir Mahdi Zarei Nejad",
    "Software Engineer",
    "Full Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Go Developer",
    "React Native Developer",
    "Software Engineering Portfolio",
    "Karaj Software Engineer",
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
    "Go",
    "Node.js",
    "Express",
    "Prisma",
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
