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
  /** Show the public repository star count only when it adds useful context. */
  showGitHubStars?: boolean;
  previewImage?: string;
};

export const experiences: Experience[] = [
  {
    title: "Frontend Engineer (Contract)",
    company: "MelkPro",
    location: "Remote",
    duration: "Aug 2025 – Jan 2026",
    achievements: [
      "Built **Melkbot**, a B2B real-estate assistant for agents with Expo and React Native, released on **Cafe Bazaar**; also built the B2C customer website with Next.js 15 and React.",
      "Implemented viewport-based property fetching for the map, loading data for the area users are viewing instead of fetching all listings at once.",
      "Organized the web and Expo apps by feature, grouping APIs, hooks, types, and utilities; established TanStack Query and Zustand patterns for server data and client state.",
      "Implemented in-app notification and push-tap flows, normalizing payloads, marking opened notifications as read, suppressing message banners in active chats, and routing file, deal, and message notifications to the relevant UI.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Codinoob",
    location: "Tehran, Iran",
    duration: "Feb 2025 – Apr 2025",
    achievements: [
      "Delivered frontend engineering for **2 production client projects**, collaborating with backend developers and designers to ship React, Next.js, and TypeScript features.",
      "Built an installable Progressive Web App with Next.js.",
      "Integrated REST APIs with Redux Toolkit and RTK Query, including client-side caching and asynchronous state management.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Nilasoft",
    location: "Remote",
    duration: "Jan 2024 – Nov 2024",
    achievements: [
      "Modernized Angular applications by migrating them to Angular Signals for better rendering performance and maintainability.",
      "Improved accessibility and mobile responsiveness across high-traffic landing pages.",
      "Built interactive Leaflet maps and contributed to team coding standards through code review.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Endpoint Forge",
    tagline: "Mock API workbench for building and testing frontend flows",
    year: "2026",
    role: "**3-person collaboration** · End-to-end build",
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Drizzle ORM", "Docker"],
    highlights: [
      "Co-built an open-source mock API workbench in a **3-person team** so frontend teams can build and test against realistic endpoints.",
      "Implemented tenant-based workspace routing and a bilingual landing page with reusable components.",
      "Contributed to the end-to-end implementation using Next.js, NestJS, PostgreSQL, Drizzle ORM, and Docker.",
    ],
    repoUrl: "https://github.com/Bytepute/endpointForge",
    showGitHubStars: true,
    previewImage: "/images/endpoint-forge.jpg",
  },
  {
    title: "Shenora",
    tagline: "Portfolio builder with a clean editing and publishing flow",
    year: "2026",
    role: "Independent build · Full-stack product",
    stack: ["Next.js", "TypeScript", "Prisma", "shadcn/ui"],
    highlights: [
      "Built a portfolio builder with an editing workflow and published public portfolio pages.",
      "Organized authentication, data queries, and mutations in a server-only data access layer with safe view models.",
      "Used cache tags and targeted invalidation so published portfolio changes appear after edits.",
    ],
    repoUrl: "https://github.com/AmirAbaris/shenora",
  },
  {
    title: "Weeto",
    tagline: "Scheduling platform with conflict-aware booking",
    year: "2026",
    role: "Independent build · Backend & web",
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
      "Built a scheduling conflict engine that prevents overlapping bookings through timezone-aware availability windows and configurable buffer times.",
      "Implemented the backend in Go with pgxpool, sqlc-generated data access, SQL migrations, and PostgreSQL; deployed with Docker, Nginx, and HTTPS.",
      "Built an asynchronous email worker for confirmations, reminders, and cancellations, with retry handling for failed sends.",
    ],
    repoUrl: "https://github.com/AmirAbaris/weeto-backend",
    previewImage: "/images/weeto.jpg",
  },
  {
    title: "Jobinja Agent",
    tagline: "Conversational job search with a user-controlled application flow",
    year: "2026",
    role: "Independent build · Agent workflow",
    stack: ["TypeScript", "Eve", "OpenRouter"],
    highlights: [
      "Built a conversational workflow that searches live Jobinja listings by keyword and location.",
      "Added a user approval step before the first application in a conversation.",
      "Implemented a model fallback through OpenRouter to keep the assistant usable.",
    ],
    repoUrl: "https://github.com/AmirAbaris/jobinja-agent",
  },
];
