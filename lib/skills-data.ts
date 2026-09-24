export type SkillGroup = {
  label: string;
  skills: string[];
};

/** Set in display type at the top of the section. */
export const primarySkills = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
] as const;

export const skillGroups: SkillGroup[] = [
  {
    label: "Language",
    skills: ["TypeScript", "JavaScript", "Go"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TanStack Query", "Zustand", "Angular"],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo"],
  },
  {
    label: "Backend & Data",
    skills: [
      "Node.js",
      "PostgreSQL",
      "Express",
      "NestJS",
      "Prisma",
    ],
  },
  {
    label: "Infrastructure",
    skills: ["Docker", "Nginx", "Linux", "Git"],
  },
];

export const skillIcons: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  Go: "go",
  React: "react",
  "Next.js": "nextdotjs",
  "Tailwind CSS": "tailwindcss",
  "TanStack Query": "reactquery",
  Zustand: "zustand",
  Angular: "angular",
  "React Native": "reactnative",
  Expo: "expo",
  "Node.js": "nodedotjs",
  PostgreSQL: "postgresql",
  Express: "express",
  NestJS: "nestjs",
  Prisma: "prisma",
  Docker: "docker",
  Nginx: "nginx",
  Linux: "linux",
  Git: "git",
};
