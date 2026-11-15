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
    title: "Independent Developer",
    company: "Self-employed",
    location: "Karaj, Iran",
    duration: "Apr 2026 – Present",
    achievements: [
      "Built and shipped **Diffly**, a live **Next.js and FastAPI** code-review arena with **stateless Gemini BYOK generation** (X-Gemini-Key) so engineers create private custom PR challenges without server-side key storage, paired with a **deterministic precision/recall scoring engine** across **25+ challenges** and **PostgreSQL on Neon**.",
      "Published **webhook-kit** on **npm**, a zero-dependency **TypeScript** webhook verification toolkit on crypto.subtle for Node.js, Bun, Deno, and Cloudflare Workers with req.clone() stream handling and replay protection.",
      "Co-built **EndpointForge** in a **3-person team** with a **Next.js** UI, **NestJS** backend, **PostgreSQL with Drizzle ORM**, tenant-based workspace routing, and **Docker** deployment.",
      "Built **Weeto** end to end with a **Go** backend (**PostgreSQL, sqlc, pgx, SQL migrations**), timezone-aware conflict detection, an async email worker, and a **Next.js** frontend deployed via **Docker and Nginx**.",
      "Built **Shenora**, a no-code portfolio builder with **Next.js, TypeScript, Prisma, PostgreSQL**, JWT/Google OAuth, a **server-only data access layer**, and cache-tag revalidation for live publishing.",
      "Built **jobinja-agent** on **Vercel Eve and OpenRouter**, executing authenticated tool calls with **human-in-the-loop approval** checkpoints and model fallback before submitting applications.",
      "Shipped **Parked**, an offline-first native iOS app on **SibApp** built with **SwiftUI, SwiftData, CoreLocation, and MapKit** for saving parking details with one-tap Apple Maps routing.",
    ],
  },
  {
    title: "Frontend Engineer (Contract)",
    company: "MelkPro",
    location: "Remote",
    duration: "Aug 2025 – Jan 2026",
    achievements: [
      "Shipped **Melkbot** (**100+ B2B installs** on Cafe Bazaar in **Expo & React Native**) and the B2C web platform in **Next.js 15 & React**, unifying UI across web and mobile via a shared component library.",
      "Engineered **viewport-based spatial fetching** so map views load properties for the currently visible area alongside a feature-sliced state layer with **TanStack Query and Zustand**.",
      "Implemented **end-to-end notification pipelines** with payload normalization, cross-screen read-state sync, active-chat suppression, and deep routing.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Codinoob",
    location: "Tehran, Iran",
    duration: "Feb 2025 – Apr 2025",
    achievements: [
      "Delivered **2 production client applications** in **React, Next.js, and TypeScript**, including an installable **Progressive Web App (PWA)** and reusable UI component modules.",
      "Integrated REST APIs with **Redux Toolkit and RTK Query** for client caching, and configured **Sentry** for production error monitoring.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Nilasoft",
    location: "Remote",
    duration: "Jan 2024 – Nov 2024",
    achievements: [
      "Modernized Angular applications with **Angular Signals**, accessible UI components, and reactive **RxJS** data streams.",
      "Built reactive forms, interactive **Leaflet** maps, responsive layouts, and automated unit and E2E tests.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Diffly",
    tagline: "Code-review arena with stateless Gemini BYOK challenge generation and deterministic PR scoring",
    year: "2026",
    role: "Independent build · Full-stack & AI",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "SQLModel", "Pydantic", "PostgreSQL", "Gemini"],
    highlights: [
      "Engineered **stateless Gemini BYOK custom challenge generation** (X-Gemini-Key) so engineers create and audit private AI-PR scenarios on demand without server-side API key storage.",
      "Built an interactive **line-flagging diff review UI** in **Next.js and TypeScript** with side-by-side fix debriefs, **Zustand** state, and a **FastAPI/PostgreSQL (Neon)** evaluation engine with **JWT authentication**.",
      "Shipped **25+ curated challenges** across Python, TypeScript, Go, and Rust with **deterministic line precision/recall scoring**.",
    ],
    repoUrl: "https://github.com/AmirAbaris/diffly",
    liveUrl: "https://diffly-sigma.vercel.app",
  },
  {
    title: "webhook-kit",
    tagline: "Zero-dependency, edge-compatible webhook verification toolkit on crypto.subtle",
    year: "2026",
    role: "Open-source build · Published on npm",
    stack: ["TypeScript", "Web Crypto API", "Next.js", "Hono", "Redis", "Cloudflare KV"],
    highlights: [
      "Published on **npm** as a zero-dependency, edge-compatible webhook verification toolkit on **crypto.subtle** for Node.js, Bun, Deno, and Cloudflare Workers.",
      "Solved JSON re-serialization HMAC failures via **stream cloning (req.clone())**, constant-time comparison, and replay-protection stores.",
      "Designed with **Agent-First DX**, shipping AI rules and CLI tools so coding agents (Cursor, Claude) generate safe webhook handlers.",
    ],
    repoUrl: "https://github.com/AmirAbaris/webhook-kit",
    liveUrl: "https://webhook-kit.vercel.app",
  },
  {
    title: "Endpoint Forge",
    tagline: "Mock API workbench for building and testing frontend flows",
    year: "2026",
    role: "**3-person collaboration** · End-to-end build",
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Drizzle ORM", "Docker"],
    highlights: [
      "Co-built an open-source mock API workbench in a **3-person team** with tenant-based workspace routing, reusable UI components, and a bilingual landing page for frontend development and testing.",
      "Contributed to the end-to-end architecture and implementation using **Next.js, NestJS, PostgreSQL, Drizzle ORM, and Docker**.",
    ],
    repoUrl: "https://github.com/Bytepute/endpointForge",
    showGitHubStars: true,
    previewImage: "/images/endpoint-forge.jpg",
  },
  {
    title: "Weeto",
    tagline: "Interview scheduling platform with conflict-aware booking",
    year: "2026",
    role: "Independent build · Backend & web",
    stack: [
      "Go",
      "PostgreSQL",
      "sqlc",
      "pgx",
      "goose",
      "Next.js",
      "TypeScript",
      "Docker",
      "Nginx",
    ],
    highlights: [
      "Built a scheduling conflict engine that prevents overlapping bookings through **timezone-aware availability windows** and configurable buffer times.",
      "Implemented the backend in **Go** with **pgx, sqlc-generated** data access, **goose** SQL migrations, and **PostgreSQL**; deployed with **Docker, Nginx, and HTTPS**.",
      "Built an **asynchronous email worker** for confirmations, reminders, and cancellations, with retry handling for failed sends.",
    ],
    repoUrl: "https://github.com/AmirAbaris/weeto-backend",
    previewImage: "/images/weeto.jpg",
  },
  {
    title: "Shenora",
    tagline: "No-code portfolio builder with server-only DAL and cache-tag publishing",
    year: "2026",
    role: "Independent build · Full-stack product",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "shadcn/ui"],
    highlights: [
      "Engineered a no-code portfolio builder with **JWT and Google OAuth**, an onboarding editing workflow, and public portfolio pages.",
      "Architected a **server-only data access layer** with **Server Actions, DTOs, and Prisma**, using cache-tag revalidation so edits publish live in **under 5 minutes**.",
    ],
    repoUrl: "https://github.com/AmirAbaris/shenora",
    previewImage: "/images/shenora.jpg",
  },
  {
    title: "jobinja-agent",
    tagline: "Autonomous job-hunting AI agent with human-in-the-loop approvals",
    year: "2026",
    role: "Independent build · Agent workflow",
    stack: ["TypeScript", "Vercel Eve", "OpenRouter", "AI Agents"],
    highlights: [
      "Built an autonomous job-hunting AI agent on **Vercel Eve** that searches live Jobinja listings and executes authenticated tool calls.",
      "Engineered **human-in-the-loop approval checkpoints** before submitting applications, automated batch execution, and LLM fallback via **OpenRouter**.",
    ],
    repoUrl: "https://github.com/AmirAbaris/jobinja-agent",
  },
  {
    title: "Parked (SibApp)",
    tagline: "Offline-first native iOS app for saving rich parking memories",
    year: "2026",
    role: "Independent build · iOS app",
    stack: ["Swift", "SwiftUI", "SwiftData", "CoreLocation", "MapKit"],
    highlights: [
      "Shipped an **offline-first native iOS app** on **SibApp** for saving photo-rich parking details with **one-tap Apple Maps routing**.",
      "Engineered with **SwiftUI, SwiftData, CoreLocation, and MapKit** using spec-driven agentic workflows.",
    ],
    repoUrl: "https://github.com/AmirAbaris/Parked",
    liveUrl: "https://sibapp.com/applications/parked",
  },
];
