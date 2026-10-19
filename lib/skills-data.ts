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
    skills: ["TypeScript", "JavaScript", "Swift", "Go"],
  },
  {
    label: "Web UI",
    skills: ["React", "Next.js", "Angular", "Tailwind CSS", "Leaflet"],
  },
  {
    label: "Mobile UI",
    skills: ["React Native", "Expo", "SwiftUI"],
  },
  {
    label: "State & data",
    skills: ["Angular Signals", "RxJS", "TanStack Query", "Zustand", "Redux Toolkit", "RTK Query", "SwiftData"],
  },
  {
    label: "Backend & APIs",
    skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "Prisma", "REST APIs", "WebSockets", "Pusher"],
  },
  {
    label: "Testing",
    skills: ["Jest", "Cypress"],
  },
  {
    label: "Developer tools",
    skills: ["Git", "Docker", "Sentry", "Xcode"],
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
