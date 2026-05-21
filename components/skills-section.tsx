interface SkillCategoryProps {
  title: string;
  skills: string[];
  highlight?: boolean;
}

function SkillCategory({ title, skills, highlight }: SkillCategoryProps) {
  return (
    <div className="space-y-3 border-t border-border pt-5">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`rounded-md border px-2.5 py-1 text-sm ${
              highlight
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const skillCategories: SkillCategoryProps[] = [
    {
      title: "Core",
      skills: ["React", "Next.js", "TypeScript", "JavaScript"],
      highlight: true,
    },
    {
      title: "State & Data",
      skills: ["Zustand", "TanStack Query"],
    },
    {
      title: "Mobile & UI",
      skills: ["React Native", "Expo", "TailwindCSS", "NativeWind", "shadcn/ui"],
    },
    {
      title: "Backend & Tools",
      skills: ["Node.js", "Express", "Prisma", "Git", "GitLab CI/CD"],
    },
  ];

  return (
    <section className="space-y-5">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Skills
        </p>
        <h2 className="mt-2 text-2xl font-semibold">Tools I Work With</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
