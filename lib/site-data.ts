export type Experience = {
  title: string;
  company: string;
  location: string;
  duration: string;
  /** Copy may mark real metrics with **double asterisks**; see MetricText. */
  achievements: string[];
};

export type Project = {
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
  /** Source is the only outbound link; live hosting is being wound down. */
  repoUrl: string;
  previewImage?: string;
};

export const experiences: Experience[] = [
  {
    title: "Frontend Developer (Contract)",
    company: "MelkPro",
    location: "Remote",
    duration: "Aug 2025 – Jan 2026",
    achievements: [
      "Shipped **2 products**, a B2B real estate platform and its B2C customer-facing site, across web and mobile with Next.js 15, React, and Expo.",
      "Delivered instant cross-platform updates by building a real-time notification system on WebSockets and Pusher, removing the need for client polling.",
      "Consolidated server-state handling onto TanStack Query and Zustand, replacing scattered fetch logic with a single caching layer.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Codinoob",
    location: "Tehran, Iran",
    duration: "Feb 2025 – Jul 2025",
    achievements: [
      "Delivered **2 production client projects** end to end, owning the frontend from first component to release with React, Next.js, and TypeScript.",
      "Made the product installable and app-like by shipping it as a Progressive Web App with Next.js.",
      "Cut redundant network calls by moving REST integration onto Redux Toolkit and RTK Query with client-side caching.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Nilasoft",
    location: "Remote",
    duration: "Jan 2024 – Feb 2025",
    achievements: [
      "Improved rendering performance and maintainability across Angular applications by migrating them to Angular Signals.",
      "Raised accessibility and mobile responsiveness on high-traffic landing pages.",
      "Shipped interactive Leaflet maps and helped maintain coding standards across the engineering team.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Weeto",
    tagline: "Scheduling platform, built and deployed solo",
    year: "2026",
    role: "Solo build, full stack",
    stack: [
      "Next.js",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Docker",
      "sqlc",
      "Nginx",
    ],
    highlights: [
      "Built a scheduling conflict engine handling overlapping bookings, timezone-aware windows, and buffer times.",
      "Architected the backend in Go with pgxpool, sqlc (type-safe SQL), and goose migrations; deployed via Docker and Nginx over HTTPS.",
      "Shipped an async email worker with Resend for confirmations, reminders, and cancellations, with retry logic on failure.",
    ],
    repoUrl: "https://github.com/AmirAbaris/weeto-backend",
    previewImage: "/images/weeto.jpg",
  },
  {
    title: "Endpoint Forge",
    tagline: "Mock API workbench for frontend teams",
    year: "2026",
    role: "**3-person team**, full stack",
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Drizzle ORM",
      "Docker",
    ],
    highlights: [
      "Co-built an open-source mock API workbench that lets frontend developers simulate and test API responses with no backend running.",
      "Built end to end with Next.js and NestJS, using Drizzle ORM for type-safe database access; containerized and deployed with Docker.",
      "Implemented tenant-based routing for multi-user workspaces plus a bilingual landing page on a reusable component architecture.",
    ],
    repoUrl: "https://github.com/Bytepute/endpointForge",
    previewImage: "/images/endpoint-forge.jpg",
  },
];
