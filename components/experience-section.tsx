"use client";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
}

function ExperienceItem({
  title,
  company,
  location,
  duration,
  achievements,
}: ExperienceItemProps) {
  return (
    <article className="grid gap-3 border-t border-border pt-5 sm:grid-cols-[9rem_1fr]">
      <div className="space-y-1 text-sm text-muted-foreground">
        <p>{duration}</p>
        <p>{location}</p>
      </div>

      <div className="space-y-2">
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
        <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
      </div>
    </article>
  );
}

export function ExperienceSection() {
  const experiences: ExperienceItemProps[] = [
    {
      title: "Frontend Developer",
      company: "MelkPro",
      location: "Remote",
      duration: "08/2025 - 01/2026",
      achievements: [
        "Built a B2B real estate platform using Next.js 15 and Expo for web and mobile applications.",
        "Implemented real-time notifications with WebSockets and Pusher, reducing update latency from ~8s to under 1s.",
        "Architected scalable state management using TanStack Query and Zustand and developed reusable UI systems with shadcn/ui and NativeWind.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Codinoob",
      location: "Tehran, Iran",
      duration: "02/2025 - 07/2025",
      achievements: [
        "Developed responsive client projects using Next.js and TypeScript.",
        "Improved API data flow and reduced boilerplate using Redux Toolkit and RTK Query.",
        "Managed testing and deployments through GitLab CI/CD in Agile workflows.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Nilasoft",
      location: "Remote",
      duration: "01/2024 - 02/2025",
      achievements: [
        "Modernized Angular applications using Angular Signals to improve rendering performance.",
        "Improved accessibility and mobile responsiveness for high-traffic landing pages.",
        "Integrated Leaflet maps and collaborated on maintaining coding standards across projects.",
      ],
    },
  ];

  return (
    <section className="space-y-5">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Experience
        </p>
        <h2 className="mt-2 text-2xl font-semibold">Recent Work</h2>
      </div>
      <div className="space-y-7">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
