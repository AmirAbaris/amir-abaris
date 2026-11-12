export type SkillGroup = {
  label: string;
  skills: string[];
};

/** Core technologies used in the portfolio chat's background context. */
export const primarySkills = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "React Native",
  "Swift",
] as const;

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "Swift"],
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
      "SwiftData",
      "TanStack Query",
      "Zustand",
      "Redux Toolkit",
      "RTK Query",
      "CoreLocation",
      "MapKit",
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Drizzle ORM",
      "SQLModel",
      "REST APIs",
      "WebSockets",
      "Pusher",
    ],
  },
  {
    label: "AI & Agentic Workflows",
    skills: ["Vercel Eve", "OpenRouter", "Agentic Workflows"],
  },
  {
    label: "Testing & DevOps",
    skills: ["Jest", "Cypress", "Git", "Docker", "Sentry", "Xcode"],
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
  Sentry: "sentry",
  Xcode: "xcode",
};
