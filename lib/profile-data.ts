/**
 * Brand layer.
 *
 * `noun` is permanent and must match the title used on LinkedIn and on any
 * tailored CV. Per-job tailoring happens on the CV via a modifier
 * ("Frontend-focused …", "Backend-focused …") and never touches this string.
 */
export const profile = {
  name: "Amir Mahdi Zarei Nejad",
  noun: "Full-Stack Developer",
  stackLine: "TypeScript · React/Next.js · Node · PostgreSQL",

  /**
   * The "who am I" answer.
   *
   * The middle sentence is a workflow claim, which is defensible today. Upgrade
   * it to a product claim ("and I build features that use AI") only once a
   * shipped project documents its eval results, cost per request, and p95
   * latency. Claiming it earlier invites an interview question with no answer.
   */
  summary:
    "I take products from an empty repo to production on my own: frontend, API, database, and deploy. I build with AI tooling daily. I'm not an ML researcher and don't pretend to be.",

  location: "Karaj, Iran",
  email: "thisisamirabaris@gmail.com",

  /** Stated once, quietly, in the closing CTA only. */
  availability: {
    open: true,
    label: "Open to full-stack and frontend roles",
  },

  links: {
    github: "https://github.com/AmirAbaris",
    linkedin:
      "https://www.linkedin.com/in/amir-mahdi-zarei-nejad-40005526a",
    resume:
      "https://7lg03ct7vc.ufs.sh/f/PyyzXFE2HKsLt027FaMwcRqn2V7OJHKCg1Mpf3yX0jr6Ysib",
  },
} as const;

export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
