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
    "I'm a frontend engineer building production web and mobile interfaces with React, Next.js, TypeScript, and React Native. Across approximately 2 years of professional work, I've focused on rendering performance, accessible interactions, API integration, and maintainable client state for real products.",

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
    resume:
      "https://7lg03ct7vc.ufs.sh/f/PyyzXFE2HKsLtHN3xCMwcRqn2V7OJHKCg1Mpf3yX0jr6Ysib",
  },
} as const;

export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
