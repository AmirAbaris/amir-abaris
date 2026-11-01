"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { BriefcaseBusinessIcon, ChevronDownIcon } from "lucide-react";

import { MetricText } from "@/components/metric-text";
import { experiences } from "@/lib/site-data";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState(false);
  const [highlightedCompany, setHighlightedCompany] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const [heights, setHeights] = useState<{ compact: number; detailed: number } | null>(null);

  const handleTimelineClick = (company: string) => {
    setExpanded(true);
    setHighlightedCompany(company);
    setTimeout(() => {
      const el = document.getElementById(`exp-${company}`);
      el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 150);
  };

  useLayoutEffect(() => {
    const timeline = timelineRef.current;
    const details = detailsRef.current;
    if (!timeline || !details) return;

    const measure = () => {
      const compact = Math.ceil(timeline.getBoundingClientRect().height);
      const detailed = Math.ceil(details.getBoundingClientRect().height);
      setHeights((current) =>
        current?.compact === compact && current.detailed === detailed
          ? current
          : { compact, detailed }
      );
    };

    const observer = new ResizeObserver(measure);
    observer.observe(timeline);
    observer.observe(details);
    measure();
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" aria-labelledby="experience-heading" className="portfolio-section">
      <div className="portfolio-section-heading">
        <h2 id="experience-heading">Experience</h2>
        <button
          type="button"
          className="portfolio-quiet-link portfolio-clickable"
          aria-expanded={expanded}
          aria-controls="experience-details"
          onClick={() => {
            setExpanded((value) => !value);
            if (expanded) setHighlightedCompany(null);
          }}
        >
          {expanded ? "See less" : "See more"}
          <ChevronDownIcon
            aria-hidden="true"
            className={`size-3 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`portfolio-experience-panels ${expanded ? "is-expanded" : ""}`}
        style={heights ? { height: expanded ? heights.detailed : heights.compact } : undefined}
      >
        <div
          ref={timelineRef}
          className="portfolio-experience-panel"
          aria-hidden={expanded}
          inert={expanded}
        >
          <ol className="portfolio-timeline">
            {experiences.map((experience, index) => (
              <li key={experience.company} className="portfolio-timeline-item">
                <button
                  type="button"
                  onClick={() => handleTimelineClick(experience.company)}
                  className="group portfolio-timeline-btn text-left w-full cursor-pointer focus-visible:outline-none"
                  aria-label={`View details for ${experience.title} at ${experience.company}`}
                >
                  <span
                    className={`portfolio-timeline-dot ${
                      index === 0 ? "portfolio-timeline-dot-current" : ""
                    } group-hover:scale-125 transition-transform duration-200`}
                    aria-hidden="true"
                  />
                  <div className="portfolio-timeline-title">
                    <span className="portfolio-mini-icon group-hover:border-foreground/40 group-hover:scale-105 transition-all duration-200">
                      <BriefcaseBusinessIcon
                        aria-hidden="true"
                        className="size-3.5"
                        strokeWidth={1.6}
                      />
                    </span>
                    <span className="group-hover:underline group-hover:underline-offset-2">
                      {experience.company}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground tabular-nums">
                    {experience.duration}
                  </p>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div
          ref={detailsRef}
          id="experience-details"
          className="portfolio-experience-panel"
          aria-hidden={!expanded}
          inert={!expanded}
        >
          <div className="portfolio-experience-details">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                id={`exp-${experience.company}`}
                className={`portfolio-experience-entry transition-colors duration-500 rounded-md ${
                  highlightedCompany === experience.company
                    ? "bg-muted/40 -mx-3 px-3"
                    : ""
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="text-sm font-medium text-foreground">
                      {experience.title}{" "}
                      <span className="text-muted-foreground">· {experience.company}</span>
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground tabular-nums">
                      {experience.duration} · {experience.location}
                    </p>
                  </div>
                </div>
                <ul className="mt-2.5 flex flex-col gap-1.5 pl-4 text-[13px] leading-[1.55] text-muted-foreground marker:text-foreground list-disc">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>
                      <MetricText>{achievement}</MetricText>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
