/**
 * Brand layer.
 *
 * `noun` is permanent and must match the title used on LinkedIn and on any
 * tailored CV. Per-job tailoring happens on the CV via a modifier
 * ("Frontend-focused …", "Backend-focused …") and never touches this string.
 */
export const profile = {
  name: "Amir Mahdi Zarei Nejad",
  noun: "Software Engineer",
  stackLine: "TypeScript · React · Next.js · Node.js",

  /**
   * The "who am I" answer.
   */
  summary:
    "I build and ship production web and mobile products. With approximately 2 years of professional experience, I specialize in TypeScript, React, Next.js, and React Native across frontend architecture, real-time systems, and API-driven applications. Independent projects add hands-on backend work with Go, Node.js, and PostgreSQL.",

  location: "Karaj, Iran",
  email: "thisisamirabaris@gmail.com",

  /** Stated once, quietly, in the closing CTA only. */
  availability: {
    open: true,
    label: "Open to software engineering roles",
  },

  links: {
    github: "https://github.com/AmirAbaris",
    linkedin: "https://www.linkedin.com/in/amir-mahdi-zarei-nejad-40005526a",
    resume:
      "https://7lg03ct7vc.ufs.sh/f/PyyzXFE2HKsLmwB6kWGCmyXrjDOYidPRp0WkNxbEw3GAT8so",
  },
} as const;

export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
