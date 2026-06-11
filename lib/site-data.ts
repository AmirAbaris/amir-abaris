export type Experience = {
  title: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
};

export type Project = {
  title: string;
  tagline: string;
  year: string;
  stack: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl?: string;
};

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "MelkPro",
    location: "Remote",
    duration: "08/2025 - 01/2026",
    achievements: [
      "Built a B2B real estate platform using Next.js 15 and Expo for web and mobile applications.",
      "Implemented real-time notifications with WebSockets and Pusher, reducing update latency from ~8s to under 1s.",
      "Architected scalable state management using TanStack Query and Zustand and developed reusable UI systems with shadcn/ui and NativeWind.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Codinoob",
    location: "Tehran, Iran",
    duration: "02/2025 - 07/2025",
    achievements: [
      "Developed responsive client projects using Next.js and TypeScript.",
      "Improved API data flow and reduced boilerplate using Redux Toolkit and RTK Query.",
      "Managed testing and deployments through GitLab CI/CD in Agile workflows.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Nilasoft",
    location: "Remote",
    duration: "01/2024 - 02/2025",
    achievements: [
      "Modernized Angular applications using Angular Signals to improve rendering performance.",
      "Improved accessibility and mobile responsiveness for high-traffic landing pages.",
      "Integrated Leaflet maps and collaborated on maintaining coding standards across projects.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Shenora",
    tagline: "No-code portfolio generator",
    year: "2026",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "shadcn/ui",
    ],
    highlights: [
      "Built end-to-end: auth (JWT + Google OAuth), onboarding form, and public portfolio pages at /[username].",
      "Server-only DAL with Server Actions, DTOs, and Next.js 16 Cache Components.",
      "Users go live in under 5 minutes — sign up, answer questions, share a stable public URL.",
    ],
    liveUrl: "https://shenora.vercel.app",
  },
];
