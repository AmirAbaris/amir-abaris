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
    label: "Frontend",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Angular"],
  },
  {
    label: "UI & state",
    skills: ["Tailwind CSS", "TanStack Query", "Zustand", "Redux Toolkit", "RTK Query"],
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
    label: "Tooling",
    skills: ["Node.js", "Git"],
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
};
