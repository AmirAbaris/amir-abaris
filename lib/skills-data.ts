export type Skill = {
  id: string;
  name: string;
  icon: string;
  /** Brand SVGs with baked-in color — skip dark-mode invert */
  colored?: boolean;
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export const primarySkills: Skill[] = [
  { id: "react", name: "React", icon: "/icons/skills/react.svg" },
  { id: "nextjs", name: "Next.js", icon: "/icons/skills/nextdotjs.svg" },
  {
    id: "typescript",
    name: "TypeScript",
    icon: "/icons/skills/typescript.svg",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "/icons/skills/javascript.svg",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "UI & Mobile",
    skills: [
      {
        id: "react-native",
        name: "React Native",
        icon: "/icons/skills/reactnative.svg",
        colored: true,
      },
      { id: "expo", name: "Expo", icon: "/icons/skills/expo.svg" },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: "/icons/skills/tailwindcss.svg",
      },
      {
        id: "nativewind",
        name: "NativeWind",
        icon: "/icons/skills/nativewind.svg",
      },
      { id: "shadcn", name: "shadcn/ui", icon: "/icons/skills/shadcnui.svg" },
    ],
  },
  {
    label: "State & Data",
    skills: [
      {
        id: "zustand",
        name: "Zustand",
        icon: "/icons/skills/zustand.svg",
        colored: true,
      },
      {
        id: "tanstack-query",
        name: "TanStack Query",
        icon: "/icons/skills/reactquery.svg",
      },
    ],
  },
  {
    label: "Backend & Tooling",
    skills: [
      { id: "go", name: "Go", icon: "/icons/skills/go.svg" },
      { id: "nodejs", name: "Node.js", icon: "/icons/skills/nodedotjs.svg" },
      { id: "express", name: "Express", icon: "/icons/skills/express.svg" },
      { id: "prisma", name: "Prisma", icon: "/icons/skills/prisma.svg" },
      { id: "docker", name: "Docker", icon: "/icons/skills/docker.svg" },
      { id: "git", name: "Git", icon: "/icons/skills/git.svg" },
      { id: "gitlab", name: "GitLab CI/CD", icon: "/icons/skills/gitlab.svg" },
    ],
  },
];
