"use client";

import { experiences, type Experience } from "@/lib/site-data";

type ExperienceItemProps = Experience;

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
  return (
    <section id="experience" className="space-y-5">
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
