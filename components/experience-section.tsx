"use client";

import { useState } from "react";
import { BriefcaseBusinessIcon, ChevronDownIcon } from "lucide-react";

import { MetricText } from "@/components/metric-text";
import { experiences } from "@/lib/site-data";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="experience" aria-labelledby="experience-heading" className="portfolio-section">
      <div className="portfolio-section-heading">
        <h2 id="experience-heading">Experience</h2>
        <button type="button" className="portfolio-quiet-link" aria-expanded={expanded} aria-controls="experience-details" onClick={() => setExpanded((value) => !value)}>
          {expanded ? "See less" : "See more"}
          <ChevronDownIcon aria-hidden="true" className={`size-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>

      <ol className="portfolio-timeline">
        {experiences.map((experience, index) => (
          <li key={experience.company} className="portfolio-timeline-item">
            <span className={`portfolio-timeline-dot ${index === 0 ? "portfolio-timeline-dot-current" : ""}`} aria-hidden="true" />
            <div className="portfolio-timeline-title">
              <span className="portfolio-mini-icon"><BriefcaseBusinessIcon aria-hidden="true" className="size-3.5" strokeWidth={1.6} /></span>
              <span>{experience.company}</span>
            </div>
            <p className="mt-1.5 text-xs text-muted-foreground">{experience.duration}</p>
          </li>
        ))}
      </ol>

      <div id="experience-details" hidden={!expanded} className="portfolio-experience-details">
        {experiences.map((experience) => (
          <article key={experience.company} className="border-t border-border py-4 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-sm font-medium text-foreground">{experience.title} <span className="text-muted-foreground">· {experience.company}</span></h3>
              <span className="text-xs text-muted-foreground">{experience.location}</span>
            </div>
            <ul className="mt-2 flex flex-col gap-1.5 pl-4 text-[13px] leading-[1.55] text-muted-foreground marker:text-foreground list-disc">
              {experience.achievements.map((achievement) => <li key={achievement}><MetricText>{achievement}</MetricText></li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
