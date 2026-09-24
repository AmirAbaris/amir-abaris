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
      "PostgreSQL",
      "Express",
      "NestJS",
      "Prisma",
      "sqlc",
    ],
  },
  {
    label: "Infrastructure",
    skills: ["Docker", "Nginx", "Linux", "Git"],
  },
];
