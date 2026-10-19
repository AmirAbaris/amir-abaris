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
] as const;

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Swift"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "Angular", "SwiftUI"],
  },
  {
    label: "Styling",
    skills: ["Tailwind CSS"],
  },
  {
    label: "State & data",
    skills: ["Angular Signals", "RxJS", "TanStack Query", "Zustand", "Redux Toolkit", "RTK Query", "SwiftData"],
  },
  {
    label: "Testing",
    skills: ["Jest", "Cypress"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo"],
  },
  {
    label: "APIs & maps",
    skills: ["REST APIs", "WebSockets", "Pusher", "Leaflet"],
  },
  {
    label: "Tools & backend",
    skills: ["Git", "Docker", "Sentry", "Node.js", "Express", "NestJS", "Go", "PostgreSQL", "Prisma", "Xcode"],
  },
];

export const skillIcons: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  React: "react",
  "Next.js": "nextdotjs",
  "Tailwind CSS": "tailwindcss",
  "TanStack Query": "reactquery",
  Zustand: "zustand",
  Angular: "angular",
  "React Native": "reactnative",
  Expo: "expo",
  "Node.js": "nodedotjs",
  Git: "git",
  Docker: "docker",
  Express: "express",
  NestJS: "nestjs",
  Go: "go",
  PostgreSQL: "postgresql",
  Prisma: "prisma",
  Swift: "swift",
  SwiftUI: "swiftui",
  SwiftData: "swiftdata",
  Xcode: "xcode",
  "Angular Signals": "angular",
  RxJS: "rxjs",
  "Redux Toolkit": "redux",
  "RTK Query": "reactquery",
  "REST APIs": "restapi",
  WebSockets: "websocket",
  Pusher: "pusher",
  Leaflet: "leaflet",
  Jest: "jest",
  Cypress: "cypress",
  Sentry: "sentry",
};
