/**
 * Brand layer.
 *
 * `noun` is permanent and must match the title used on LinkedIn and on any
 * tailored CV. Per-job tailoring happens on the CV via a modifier
 * ("Frontend-focused …", "Backend-focused …") and never touches this string.
 */
export const profile = {
  name: "Amir Mahdi Zarei Nejad",
  noun: "Full Stack Developer",
  stackLine: "TypeScript · React/Next.js · Node · PostgreSQL",

  /**
   * The "who am I" answer.
   */
  summary:
    "I build things end to end and ship them: frontend, API, database, deploy, no hand-holding. Melkbot's live on Cafe Bazaar with real users. Right now I'm heads-down on agentic AI, using Claude Code, Cursor, and Codex daily. It's how I actually work, not a buzzword I bolted on.",

  location: "Karaj, Iran",
  email: "thisisamirabaris@gmail.com",

  /** Stated once, quietly, in the closing CTA only. */
  availability: {
    open: true,
    label: "Open to full-stack and frontend roles",
  },

  links: {
    github: "https://github.com/AmirAbaris",
    linkedin: "https://www.linkedin.com/in/amir-mahdi-zarei-nejad-40005526a",
    resume:
      "https://7lg03ct7vc.ufs.sh/f/PyyzXFE2HKsLgaWy6l5uEKZ7XsqaDJz6Sc4NY198rl2jtHUe",
  },
} as const;

export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
