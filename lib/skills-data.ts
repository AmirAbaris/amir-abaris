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
    label: "UI & Mobile",
    skills: [
      "React Native",
      "Expo",
      "Tailwind CSS",
      "NativeWind",
      "shadcn/ui",
    ],
  },
  {
    label: "State & Data",
    skills: ["Zustand", "TanStack Query", "Redux Toolkit"],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "NestJS", "Go"],
  },
  {
    label: "Tooling",
    skills: ["Docker", "Git", "GitLab CI/CD", "Nginx"],
  },
];

/**
 * Kept separate from the stack groups on purpose.
 *
 * A logo wall of AI tool names is the least credible thing a portfolio can
 * carry right now, because everyone has one and none of it is checkable. What
 * makes the claim survive an interview is naming the practice, so this block
 * says what gets done with the tools rather than just listing them.
 */
export const aiWorkflow = {
  label: "AI Workflow",
  intro:
    "Part of how I work day to day, not a side interest. I write my own agent skills, wire up MCP servers so the tooling fits the codebase, and treat prompting and context design as ordinary engineering rather than a trick.",
  groups: [
    {
      label: "Daily drivers",
      skills: ["Claude Code", "Cursor", "Codex"],
    },
    {
      label: "Practice",
      skills: [
        "Agent skills",
        "MCP servers",
        "Context engineering",
        "Spec-first workflows",
      ],
    },
  ] as SkillGroup[],
};
