interface SkillCategoryProps {
  title: string;
  skills: string[];
  highlight?: boolean;
}

function SkillCategory({ title, skills, highlight }: SkillCategoryProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-2">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={`px-3 py-1 bg-primary/10 text-primary rounded-full text-sm ${
              highlight ? "font-medium" : ""
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
      title: "Frontend Frameworks",
      skills: ["React", "Next.js", "React Native (Expo)", "Angular"],
      highlight: true,
    },
    {
      title: "Languages & Core",
      skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      title: "Styling & UI",
      skills: ["TailwindCSS", "SCSS", "Responsive Design"],
    },
    {
      title: "State & Data",
      skills: ["Redux", "RTK Query", "React Query", "REST APIs"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitLab CI/CD", "Jira", "Vercel", "Agile/Scrum"],
    },
  ];

  return (
    <div className="relative pl-8 md:pl-8">
      <div className="absolute left-4 md:left-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary top-2" />
      <h2 className="text-xl font-semibold mb-4">Skills & Technologies</h2>
      <div className="space-y-4">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
}

