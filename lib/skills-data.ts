export type SkillGroup = {
  label: string;
  skills: string[];
};

/** Set in display type at the top of the section. */
export const primarySkills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
] as const;

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend & Data",
    skills: [
      "Go",
      "PostgreSQL",
      "Express",
      "NestJS",
      "Prisma",
      "sqlc",
    ],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Expo"],
  },
  {
    label: "Frontend Engineering",
    skills: ["TanStack Query", "Zustand", "Angular"],
  },
  {
    label: "Infrastructure",
    skills: ["Docker", "Nginx", "Linux", "Git"],
  },
];
