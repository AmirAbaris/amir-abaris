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
  stackLine: "TypeScript · React/Next.js · Node · PostgreSQL",

  /**
   * The "who am I" answer.
   */
  summary:
    "My experience is frontend-heavy, but I ship full stack when a project needs it, TypeScript, Next.js, and Prisma end to end, plus Go and Node on the side. Melkbot's live on Cafe Bazaar with real users. Right now I'm deliberately pushing into backend, systems design, and CS fundamentals while studying Computer Science, and using Claude Code, Cursor, and Codex daily as part of how I actually build.",

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
      "https://7lg03ct7vc.ufs.sh/f/PyyzXFE2HKsLtlIWu5MwcRqn2V7OJHKCg1Mpf3yX0jr6Ysib",
  },
} as const;

export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
