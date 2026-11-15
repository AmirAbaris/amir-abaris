export type SkillGroup = {
  label: string;
  skills: string[];
};

/** Core technologies used in the portfolio chat's background context. */
export const primarySkills = [
  "TypeScript",
  "Node.js",
  "Next.js",
  "PostgreSQL",
  "Python",
  "FastAPI",
  "Go",
  "React",
  "React Native",
] as const;

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "Swift"],
  },
  {
    label: "Backend & Data",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "FastAPI",
      "SQLModel",
      "Pydantic",
      "PostgreSQL",
      "Prisma",
      "Drizzle ORM",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    label: "Frontend & Design Systems",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "Angular Signals",
      "RxJS",
      "Tailwind CSS",
      "shadcn/ui",
      "Design Systems",
      "Leaflet",
    ],
  },
  {
    label: "Mobile & State",
    skills: [
      "React Native",
      "Expo",
      "SwiftUI",
      "TanStack Query",
      "Zustand",
      "Redux Toolkit",
      "RTK Query",
    ],
  },
  {
    label: "AI & Applied LLMs",
    skills: ["Vercel Eve", "RAG & Vector Search"],
  },
  {
    label: "Testing & DevOps",
    skills: ["pytest", "Jest", "Cypress", "Docker", "Nginx", "Git", "Sentry", "Xcode"],
  },
];

export const skillIcons: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  Python: "python",
  Go: "go",
  Swift: "swift",
  React: "react",
  "Next.js": "nextdotjs",
  Angular: "angular",
  "Angular Signals": "angular",
  RxJS: "rxjs",
  "Tailwind CSS": "tailwindcss",
  "shadcn/ui": "shadcnui",
  Leaflet: "leaflet",
  "React Native": "reactnative",
  Expo: "expo",
  SwiftUI: "swiftui",
  SwiftData: "swiftdata",
  CoreLocation: "apple",
  MapKit: "apple",
  "TanStack Query": "reactquery",
  Zustand: "zustand",
  "Redux Toolkit": "redux",
  "RTK Query": "reactquery",
  "Node.js": "nodedotjs",
  NestJS: "nestjs",
  Express: "express",
  PostgreSQL: "postgresql",
  Prisma: "prisma",
  "Drizzle ORM": "drizzle",
  "REST APIs": "restapi",
  WebSockets: "websocket",
  Pusher: "pusher",
  "Vercel Eve": "vercel",
  OpenRouter: "openrouter",
  Jest: "jest",
  Cypress: "cypress",
  Git: "git",
  Docker: "docker",
  Nginx: "nginx",
  Sentry: "sentry",
  Xcode: "xcode",
};
