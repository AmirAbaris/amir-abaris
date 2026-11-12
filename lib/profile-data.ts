/**
 * Brand layer.
 *
 * Keep the headline aligned with the roles this portfolio targets. Preserve
 * the actual job titles in the experience timeline.
 */
export const profile = {
  name: "Amir Mahdi Zarei Nejad",
  noun: "Full Stack Developer",
  stackLine: "React · Next.js · Angular · React Native · Swift · TypeScript",

  /**
   * The "who am I" answer.
   */
  summary:
    "Full-stack developer specializing in scalable design systems, full-stack architecture, and AI-native agentic workflows. Experienced in shipping web and mobile applications with React, Next.js, Angular, React Native, and Swift/SwiftUI, backed by backend and tooling expertise in TypeScript, Python, Go, and Node.js.",

  location: "Karaj, Iran",
  phone: "+98 990 809 7789",
  email: "thisisamirabaris@gmail.com",

  /** Stated once, quietly, in the closing CTA only. */
  availability: {
    open: true,
    label: "Open to full-stack developer roles",
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
