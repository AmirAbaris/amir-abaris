import { GraduationCapIcon } from "lucide-react";

import { education } from "@/lib/site-data";

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-heading" className="portfolio-section">
      <div className="portfolio-section-heading">
        <h2 id="education-heading">Education</h2>
      </div>

      <div className="portfolio-experience-entry">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
              <span className="portfolio-mini-icon">
                <GraduationCapIcon
                  aria-hidden="true"
                  className="size-3.5"
                  strokeWidth={1.6}
                />
              </span>
              <span>{education.institution}</span>
              <span className="text-muted-foreground">· {education.degree}</span>
            </h3>
            <p className="mt-1.5 pl-[33px] text-xs text-muted-foreground">
              {education.duration} · {education.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
