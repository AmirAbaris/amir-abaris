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
    "I build web and mobile apps with React, Next.js, Angular, and TypeScript.",

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
      "https://82v7dw62v0.ufs.sh/f/JziFObAbP51EUEA0TMk6DMgVuwjtHTFUBqR3iCa5KP9NQpdG",
  },
} as const;

export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
