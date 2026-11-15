/**
 * Brand layer.
 *
 * Keep the headline aligned with the roles this portfolio targets. Preserve
 * the actual job titles in the experience timeline.
 */
export const profile = {
  name: "Amir Mahdi Zarei Nejad",
  noun: "Full-Stack Developer",
  stackLine: "TypeScript · Node.js · Next.js · PostgreSQL · Python · Go",

  /**
   * The "who am I" answer.
   */
  summary:
    "A full-stack developer with 2+ years of production experience building web, mobile, and applied-AI systems. After starting in frontend (React, Next.js, Angular, React Native), I now build end-to-end products and open-source developer tools across TypeScript, Node.js, Python/FastAPI, Go, PostgreSQL, and LLM/RAG workflows.",

  location: "Karaj, Iran",
  phone: "+98 990 809 7789",
  email: "thisisamirabaris@gmail.com",

  /** Stated once, quietly, in the closing CTA only. */
  availability: {
    open: true,
    label: "Open to full-stack and applied-AI product roles in Karaj, Tehran, hybrid, or remote.",
  },

  links: {
    github: "https://github.com/AmirAbaris",
    linkedin: "https://www.linkedin.com/in/amir-mahdi-zarei-nejad-40005526a",
    x: "https://x.com/abaris_aa",
    resume:
      "https://7lg03ct7vc.ufs.sh/f/PyyzXFE2HKsL0dEG6nwtGXPHDROiZmQeF3254VCsUarb1hoW",
  },
} as const;

export const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
