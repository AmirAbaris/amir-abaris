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
    title: "Frontend Engineer (Contract)",
    company: "MelkPro",
    location: "Remote",
    duration: "Aug 2025 – Jan 2026",
    achievements: [
      "Built **Melkbot**, a B2B real-estate assistant in Expo/React Native, live in production on **Cafe Bazaar** for real users; also built the B2C customer website with Next.js 15 and React.",
      "Designed a real-time notification architecture with WebSockets and Pusher for instant updates across web and mobile clients.",
      "Established TanStack Query and Zustand patterns for API caching, asynchronous data, and maintainable client state.",
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
    title: "Weeto",
    tagline: "Scheduling platform with a Go backend, built and deployed independently",
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
    title: "Endpoint Forge",
    tagline: "Mock API workbench for frontend teams",
    year: "2026",
    role: "**3-person collaboration** · End-to-end build",
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Drizzle ORM",
      "Docker",
    ],
    highlights: [
      "Co-built an open-source mock API workbench that lets frontend teams build and test against realistic endpoints.",
      "Contributed to its end-to-end implementation with Next.js, NestJS, PostgreSQL, Drizzle ORM, and Docker.",
      "Implemented tenant-based routing for multi-user workspaces and a bilingual landing page with reusable components.",
    ],
    repoUrl: "https://github.com/Bytepute/endpointForge",
    previewImage: "/images/endpoint-forge.jpg",
  },
];
