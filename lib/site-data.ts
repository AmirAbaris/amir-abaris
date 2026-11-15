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
      "Designed, built, and shipped **Diffly**, a live platform for practicing code review of AI-generated code (**Next.js, FastAPI, SQLModel, Pydantic, PostgreSQL on Neon, JWT auth**) with a deterministic evaluation engine, **25 challenges**, and a Gemini-powered generator.",
      "Co-developed **EndpointForge**, an open-source mock API workbench, in a **3-person team** with a **NestJS** backend, **PostgreSQL with Drizzle**, tenant-based routing, and **Docker**.",
      "Built **Weeto**, a full-stack interview scheduling app end to end with a **Go** backend, **PostgreSQL, sqlc, and migrations**, a timezone-aware conflict engine, an async email worker, and a web frontend.",
      "Built **jobinja-agent**, an AI agent that searches Jobinja listings and applies while pausing for **human-in-the-loop approval** before submitting, using **Vercel Eve and OpenRouter** with a fallback model.",
      "Built **Personal Codebase RAG** from scratch without LangChain, implementing overlapping chunking, embeddings, **Postgres with pgvector**, cosine search, and answers with file:line citations.",
      "Published **webhook-kit**, a zero-dependency, edge-compatible webhook signature verification toolkit in **TypeScript**, on **npm**.",
      "Shipped **Parked**, an offline-first iPhone app for remembering where you parked, built with **SwiftUI, SwiftData, and CoreLocation**; live on **SibApp**.",
    ],
  },
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
    title: "Diffly",
    tagline: "Live platform for practicing code review of AI-generated pull requests",
    year: "2026",
    role: "Independent build · Full-stack & AI",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "SQLModel", "Pydantic", "PostgreSQL", "Gemini"],
    highlights: [
      "Built an interactive review platform where users flag defects line by line and get scored by a **deterministic evaluation engine** on line precision, recall, and false positives.",
      "Engineered a **Next.js** frontend and **FastAPI** backend using **SQLModel, Pydantic, PostgreSQL on Neon**, and **JWT authentication**.",
      "Shipped **25 curated challenges** across Python, TypeScript, Go, and Rust plus a **Gemini-powered BYOK** challenge generator, covered by a **168-test pytest suite**.",
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
      "Co-built an open-source mock API workbench in a **3-person team** with tenant-based workspace routing, reusable design-system components, and a bilingual landing page for frontend development and testing.",
      "Contributed to the end-to-end architecture and implementation using **Next.js, NestJS, PostgreSQL, Drizzle ORM, and Docker**.",
    ],
    repoUrl: "https://github.com/Bytepute/endpointForge",
    showGitHubStars: true,
    previewImage: "/images/endpoint-forge.jpg",
  },
  {
    title: "Personal Codebase RAG",
    tagline: "Codebase retrieval and Q&A built from scratch with pgvector and file:line citations",
    year: "2026",
    role: "Independent build · Applied AI & RAG",
    stack: ["TypeScript", "PostgreSQL", "pgvector", "OpenRouter", "Docker"],
    highlights: [
      "Built a retrieval-augmented generation pipeline **from scratch without LangChain**, indexing source repositories via overlapping line-based chunking.",
      "Stored chunk embeddings in **PostgreSQL with pgvector** and ran **cosine-similarity search** over OpenRouter embeddings.",
      "Generated grounded codebase answers with exact **file:line citations** from retrieved chunks.",
    ],
    repoUrl: "https://github.com/AmirAbaris/personal-codebase-rag",
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
    title: "jobinja-agent",
    tagline: "Autonomous job-hunting AI agent with human-in-the-loop approvals",
    year: "2026",
    role: "Independent build · Agent workflow",
    stack: ["TypeScript", "Vercel Eve", "OpenRouter", "AI Agents"],
    highlights: [
      "Built an autonomous job-hunting AI agent on **Vercel Eve** that searches live Jobinja listings and applies via authenticated tool calls.",
      "Engineered **human-in-the-loop approval flows** before submitting applications, automated batch execution, and LLM fallback via **OpenRouter**.",
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
      "Shipped an offline-first native iOS app on **SibApp** for saving rich parking memories (photos, floor/spot details, GPS distance, and Apple Maps routing) using spec-driven agentic workflows.",
      "Engineered with **SwiftUI, SwiftData, CoreLocation, and MapKit**; memories work offline and directions open in Apple Maps.",
    ],
    repoUrl: "https://github.com/AmirAbaris/Parked",
    liveUrl: "https://sibapp.com/applications/parked",
  },
];
