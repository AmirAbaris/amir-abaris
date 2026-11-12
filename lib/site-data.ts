export type Experience = {
  title: string;
  company: string;
  location: string;
  duration: string;
  /** Copy may emphasize metrics and key technologies with **double asterisks**. */
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
  /** Optional link to a live listing / app store page for the project. */
  liveUrl?: string;
  /** Show the public repository star count only when it adds useful context. */
  showGitHubStars?: boolean;
  previewImage?: string;
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  duration: string;
};

export const education: Education = {
  degree: "Bachelor of Science in Computer Science",
  institution: "Azad University",
  location: "Karaj, Iran",
  duration: "2023 – Present",
};

export const experiences: Experience[] = [
  {
    title: "Frontend Engineer (Contract)",
    company: "MelkPro",
    location: "Remote",
    duration: "Aug 2025 – Jan 2026",
    achievements: [
      "Built Melkbot (B2B real-estate app in **Expo & React Native** on Cafe Bazaar) and the B2C web platform in **Next.js 15 & React** using a shared, token-driven design system.",
      "Engineered **viewport-based spatial property fetching** and a feature-sliced state layer with **TanStack Query and Zustand**.",
      "Implemented end-to-end **notification handling** with payload normalization, read-state syncing, active-chat suppression, and deep routing.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Codinoob",
    location: "Tehran, Iran",
    duration: "Feb 2025 – Apr 2025",
    achievements: [
      "Built reusable UI components and an installable **Progressive Web App (PWA)** across 2 production client projects using **React, Next.js, and TypeScript**.",
      "Integrated REST APIs with **Redux Toolkit and RTK Query** for client caching, and configured **Sentry** for production error monitoring.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Nilasoft",
    location: "Remote",
    duration: "Jan 2024 – Nov 2024",
    achievements: [
      "Modernized Angular applications with **Angular Signals**, built accessible design-system components, and managed reactive streams with **RxJS**.",
      "Implemented reactive forms, **Leaflet** interactive maps, automated unit/E2E tests, and responsive layouts across production pages.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "webhook-kit",
    tagline: "Zero-dependency, edge-compatible webhook verification toolkit on crypto.subtle",
    year: "2026",
    role: "Open-source build · Developer toolkit",
    stack: ["TypeScript", "Web Crypto API", "Next.js", "Hono", "Redis", "Cloudflare KV"],
    highlights: [
      "Built a zero-dependency, edge-compatible webhook verification toolkit on **crypto.subtle** for Node.js, Bun, Deno, and Cloudflare Workers.",
      "Solved JSON re-serialization HMAC failures via **stream cloning (req.clone())**, constant-time comparison, and replay-protection stores.",
      "Designed with **Agent-First DX**, shipping AI rules and CLI tools so coding agents (Cursor, Claude) generate safe webhook handlers.",
    ],
    repoUrl: "https://github.com/AmirAbaris/webhook-kit",
    liveUrl: "https://webhook-kit.vercel.app",
  },
  {
    title: "jobinja-agent",
    tagline: "Autonomous job-hunting AI agent with human-in-the-loop approvals",
    year: "2026",
    role: "Independent build · Agent workflow",
    stack: ["TypeScript", "Vercel Eve", "OpenRouter", "AI Agents"],
    highlights: [
      "Built an autonomous job-hunting AI agent on **Vercel Eve** that searches live Jobinja listings and applies via authenticated tool calls.",
      "Engineered **human-in-the-loop approval flows** for initial applications, automated batch execution, and LLM rate-limit fallback via **OpenRouter**.",
    ],
    repoUrl: "https://github.com/AmirAbaris/jobinja-agent",
  },
  {
    title: "Endpoint Forge",
    tagline: "Mock API workbench for building and testing frontend flows",
    year: "2026",
    role: "**3-person collaboration** · End-to-end build",
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Drizzle ORM", "Docker"],
    highlights: [
      "Co-built an open-source mock API workbench in a **3-person team** with tenant-based workspace routing, reusable design-system components, and a bilingual landing page for frontend development and testing.",
      "Contributed to the end-to-end architecture and implementation using **Next.js, NestJS, PostgreSQL, Drizzle ORM, and Docker**.",
    ],
    repoUrl: "https://github.com/Bytepute/endpointForge",
    showGitHubStars: true,
    previewImage: "/images/endpoint-forge.jpg",
  },
  {
    title: "Parked (SibApp)",
    tagline: "Offline-first native iOS app for saving rich parking memories",
    year: "2026",
    role: "Independent build · iOS app",
    stack: ["Swift", "SwiftUI", "SwiftData", "CoreLocation", "MapKit"],
    highlights: [
      "Shipped an offline-first native iOS app on **SibApp** for saving rich parking memories (photos, floor/spot details, GPS distance, and Apple Maps routing) using spec-driven agentic workflows.",
      "Engineered with **SwiftUI, SwiftData, CoreLocation, and MapKit**; memories work offline and directions open in Apple Maps.",
    ],
    repoUrl: "https://github.com/AmirAbaris/Parked",
    liveUrl: "https://sibapp.com/applications/parked",
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
];
