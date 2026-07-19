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
  previewImage?: string;
  githubUrl?: string;
  accessAlert?: {
    title: string;
    description: string;
  };
};

export const experiences: Experience[] = [
  {
    title: "Frontend Developer (Contract)",
    company: "MelkPro",
    location: "Remote",
    duration: "Aug 2025 – Jan 2026",
    achievements: [
      "Developed a B2B real estate platform and B2C customer-facing website using Next.js 15, React, and Expo across web and mobile applications.",
      "Designed and implemented a real-time notification system using WebSockets and Pusher, enabling instant updates across the platform.",
      "Architected frontend data management using TanStack Query and Zustand, improving application scalability and maintainability.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Codinoob",
    location: "Tehran, Iran",
    duration: "Feb 2025 – Jul 2025",
    achievements: [
      "Delivered end-to-end frontend development for 2 production client projects, building features with React, Next.js, and TypeScript.",
      "Built a Progressive Web App (PWA) with Next.js, providing an installable, app-like user experience.",
      "Integrated REST APIs using Redux Toolkit and RTK Query, implementing efficient client-side caching and asynchronous state management.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Nilasoft",
    location: "Remote",
    duration: "Jan 2024 – Feb 2025",
    achievements: [
      "Modernized Angular applications by adopting Angular Signals, improving rendering performance and maintainability.",
      "Enhanced accessibility and mobile responsiveness across high-traffic landing pages.",
      "Integrated interactive maps with Leaflet and collaborated on maintaining coding standards across the engineering team.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Weeto",
    tagline: "Scheduling Platform",
    year: "2026",
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
      "Developed a scheduling conflict engine handling overlapping bookings, timezone-aware windows, and buffer times.",
      "Architected backend in Go with pgxpool, sqlc (type-safe SQL), and goose migrations; deployed via Docker and Nginx with HTTPS.",
      "Built an async email worker with Resend for transactional emails (confirmations, reminders, cancellations) with retry logic.",
    ],
    liveUrl: "https://weeto.ir",
    previewImage: "/images/weeto.jpg",
  },
  {
    title: "Endpoint Forge",
    tagline: "Mock API workbench for frontend teams",
    year: "2026",
    stack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Drizzle ORM",
      "Docker",
    ],
    highlights: [
      "Co-developed an open-source mock API workbench in a 3-person team, enabling frontend developers to simulate and test API responses without a backend.",
      "Built end-to-end with Next.js (frontend) and NestJS (backend), using Drizzle ORM for type-safe database operations; containerized and deployed with Docker.",
      "Implemented tenant-based routing for multi-user workspaces and a bilingual landing page with reusable component architecture.",
    ],
    liveUrl: "https://endpointforge.ir/",
    previewImage: "/images/endpoint-forge.jpg",
    githubUrl: "https://github.com/Bytepute/endpointForge",
    accessAlert: {
      title: "Not accessible outside Iran",
      description:
        "The live site is only reachable from inside Iran due to server hosting limitations. The project is fully open source — browse the code on GitHub.",
    },
  },
];
