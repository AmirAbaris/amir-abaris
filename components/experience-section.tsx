"use client";

const getFreelanceDuration = () => {
  const startDate = new Date("2025-08-01"); // August 2025 - after Codinoob
  const months = Math.floor(
    (Date.now() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30.44)
  );
  return Math.max(months, 0); // Prevent negative numbers
};

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  techStack: string;
  achievements: string[];
}

function ExperienceItem({
  title,
  company,
  duration,
  techStack,
  achievements,
}: ExperienceItemProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-foreground font-semibold text-base">{title}</h3>
      <p className="text-sm font-medium text-foreground/80">
        {company} • {duration}
      </p>
      <p className="text-sm italic">{techStack}</p>
      <ul className="text-sm space-y-1.5 mt-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-primary">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ExperienceSection() {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Frontend Developer",
      company: "Freelance | Self-Employed",
      duration: `Aug 2025 - Present (${getFreelanceDuration()}+ months)`,
      techStack:
        "Next.js 15, Expo, TypeScript, TanStack Query, Zustand, shadcn, NativeWind",
      achievements: [
        "Built real estate web platform with Next.js 15 leveraging latest server actions for data mutations",
        "Developed B2B real estate mobile app with Expo, implementing optimistic fetches for instant UX",
        "Implemented modern state management with TanStack React Query & Zustand across web and mobile",
        "Collaborated with backend team via Scrum sprints to deliver all frontend milestones on time",
        "Built consistent design systems using shadcn (web) and NativeWind (mobile)",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Codinoob, Tehran",
      duration: "Feb 2025 - Jul 2025 (6 months)",
      techStack: "Next.js, Redux, RTK Query, TypeScript, GitLab CI/CD",
      achievements: [
        "Engineered 30+ responsive UIs using Next.js, accelerating development by 25%",
        "Refined state management with Redux & RTK Query, cutting boilerplate by 30% and reducing load times by 20%",
        "Built custom UIs from scratch without external libraries, reducing dependencies by 35%",
        "Led SSR vs. CSR decision framework, optimizing page loads by 15%",
        "Orchestrated CI/CD deployments via GitLab, reducing deployment time by 20%",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Nilasoft, Remote",
      duration: "Jan 2024 - Feb 2025 (1 year 2 months)",
      techStack: "Angular, Angular Signals, Leaflet Maps, Jira, Git",
      achievements: [
        "Revamped legacy Angular codebases with Angular Signals, reducing re-renders by 20%",
        "Enhanced high-traffic landing page UI, increasing usability scores by 15%",
        "Integrated & customized Leaflet maps, boosting engagement by 10%",
        "Adopted Agile workflows via Jira for sprint planning and task tracking",
      ],
    },
  ];

  return (
    <div className="relative pl-8 md:pl-8 pb-16">
      <div className="absolute left-4 md:left-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary top-2" />
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <div className="space-y-8 text-muted-foreground">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}
