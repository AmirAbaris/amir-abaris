/**
 * Brand layer.
 *
 * Keep the headline aligned with the roles this portfolio targets. Preserve
 * the actual job titles in the experience timeline.
 */
export const profile = {
  name: "Amir Mahdi Zarei Nejad",
  noun: "Frontend Engineer",
  stackLine: "React · Next.js · TypeScript · React Native",

  /**
   * The "who am I" answer.
   */
  summary:
    "I'm a frontend engineer building production web and mobile interfaces with React, Next.js, TypeScript, and React Native. My work focuses on maintainable feature-based architecture, accessible interactions, map data fetching for the visible area, real-time notifications, and predictable client state.",

  location: "Karaj, Iran",
  email: "thisisamirabaris@gmail.com",

  /** Stated once, quietly, in the closing CTA only. */
  availability: {
    open: true,
    label: "Open to frontend engineering roles",
  },

  links: {
    github: "https://github.com/AmirAbaris",
    linkedin: "https://www.linkedin.com/in/amir-mahdi-zarei-nejad-40005526a",
    x: "https://x.com/abaris_aa",
    resume:
      "https://7lg03ct7vc.ufs.sh/f/PyyzXFE2HKsLXol18qUD1FyBp3HI90J6ZdzxmPWVObtLgcQ8",
  },
} as const;

export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
