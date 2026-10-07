/**
 * Brand layer.
 *
 * Keep the headline aligned with the roles this portfolio targets. Preserve
 * the actual job titles in the experience timeline.
 */
export const profile = {
  name: "Amir Mahdi Zarei Nejad",
  noun: "Frontend Engineer",
  stackLine: "React · Next.js · Angular · TypeScript",

  /**
   * The "who am I" answer.
   */
  summary:
    "I'm a frontend engineer with approximately 2 years of professional experience building production web and mobile applications with React, Next.js, Angular, and TypeScript. My work focuses on accessibility, rendering performance, API integration, and maintainable components and state management.",

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
      "https://7lg03ct7vc.ufs.sh/f/PyyzXFE2HKsLOc3QbuHT2G5WyFpLJDNvwkl7CzdotiXjVfMI",
  },
} as const;

export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
