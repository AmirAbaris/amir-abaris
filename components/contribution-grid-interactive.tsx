"use client";

import { useId, useMemo, useState } from "react";
import type { KeyboardEvent } from "react";
import type { ContributionActivity, ContributionDay } from "@/lib/github-contributions";

function formatDate(dateString: string) {
  const date = new Date(`${dateString}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function ContributionGridInteractive({
  activity,
}: {
  activity: ContributionActivity;
}) {
  const [activeDate, setActiveDate] = useState<string | null>(null);
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);
  const gridId = useId();

  const daysMap = useMemo(() => {
    const map = new Map<string, ContributionDay>();
    for (const day of activity.days) {
      map.set(day.date, day);
    }
    return map;
  }, [activity.days]);

  const activeDay = activeDate ? daysMap.get(activeDate) : null;

  const weekdayOffset = useMemo(() => {
    if (!activity.days.length) return 0;
    return new Date(`${activity.days[0].date}T00:00:00Z`).getUTCDay();
  }, [activity.days]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === "ArrowRight") {
      nextIndex = Math.min(index + 1, activity.days.length - 1);
    } else if (event.key === "ArrowLeft") {
      nextIndex = Math.max(index - 1, 0);
    } else if (event.key === "ArrowDown") {
      nextIndex = Math.min(index + 1, activity.days.length - 1);
    } else if (event.key === "ArrowUp") {
      nextIndex = Math.max(index - 1, 0);
    } else {
      return;
    }
    event.preventDefault();
    const targetDay = activity.days[nextIndex];
    if (targetDay) {
      setActiveDate(targetDay.date);
      const nextButton = document.getElementById(`${gridId}-cell-${targetDay.date}`);
      nextButton?.focus();
    }
  };

  return (
    <div className="portfolio-contribution-wrapper">
      <div
        className="portfolio-graph-scroll"
        role="region"
        aria-label="GitHub contribution calendar"
        tabIndex={0}
      >
        <div className="portfolio-months" aria-hidden="true">
          {activity.days.map((day, index) => {
            const currentDate = new Date(`${day.date}T00:00:00Z`);
            const month = currentDate.getUTCMonth();
            const previousMonth =
              index === 0
                ? -1
                : new Date(`${activity.days[index - 1].date}T00:00:00Z`).getUTCMonth();
            if (month === previousMonth) return null;
            if (index === 0) {
              const nextMonth = Date.UTC(currentDate.getUTCFullYear(), month + 1, 1);
              if ((nextMonth - currentDate.getTime()) / 86_400_000 < 14) return null;
            }
            const column = Math.floor((weekdayOffset + index) / 7) + 1;
            return (
              <span
                key={day.date}
                style={{ gridColumn: `${column} / span 3` }}
              >
                {new Intl.DateTimeFormat("en", {
                  month: "short",
                  timeZone: "UTC",
                }).format(currentDate)}
              </span>
            );
          })}
        </div>

        <div
          className="portfolio-graph"
          role="grid"
          aria-label={`${activity.total.toLocaleString("en-US")} contributions in the last year`}
        >
          {Array.from({ length: weekdayOffset }, (_, index) => (
            <span key={`padding-${index}`} className="portfolio-graph-empty" aria-hidden="true" />
          ))}

          {activity.days.map((day, index) => {
            const isDimmed = hoveredLevel !== null && day.level !== hoveredLevel;
            const isHighlighted = hoveredLevel !== null && day.level === hoveredLevel;
            const isActive = activeDate === day.date;

            return (
              <button
                key={day.date}
                id={`${gridId}-cell-${day.date}`}
                type="button"
                className={`portfolio-graph-cell portfolio-graph-level-${day.level} ${
                  isDimmed ? "is-dimmed" : ""
                } ${isHighlighted ? "is-highlighted" : ""} ${isActive ? "is-active" : ""}`}
                aria-label={day.label}
                aria-pressed={isActive}
                onMouseEnter={() => setActiveDate(day.date)}
                onMouseLeave={() => setActiveDate((curr) => (curr === day.date ? null : curr))}
                onFocus={() => setActiveDate(day.date)}
                onBlur={() => setActiveDate((curr) => (curr === day.date ? null : curr))}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            );
          })}
        </div>
      </div>

      <div className="portfolio-graph-footer">
        <div className="portfolio-graph-status" aria-live="polite">
          {activeDay ? (
            <span className="portfolio-graph-status-active">
              <span
                className={`portfolio-graph-level-dot portfolio-graph-level-${activeDay.level}`}
                aria-hidden="true"
              />
              <strong className="text-foreground">
                {activeDay.count === 0 ? "No" : activeDay.count} contribution{activeDay.count === 1 ? "" : "s"}
              </strong>{" "}
              on {formatDate(activeDay.date)}
            </span>
          ) : (
            <span className="text-muted-foreground">
              {activity.total.toLocaleString("en-US")} contributions in the last year
            </span>
          )}
        </div>

        <div className="portfolio-graph-legend" aria-label="Contribution activity legend">
          <span className="portfolio-graph-legend-label">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <button
              key={level}
              type="button"
              className={`portfolio-graph-legend-cell portfolio-graph-level-${level} ${
                hoveredLevel === level ? "is-active" : ""
              }`}
              aria-label={`Highlight level ${level} days`}
              onMouseEnter={() => setHoveredLevel(level)}
              onMouseLeave={() => setHoveredLevel(null)}
              onFocus={() => setHoveredLevel(level)}
              onBlur={() => setHoveredLevel(null)}
            />
          ))}
          <span className="portfolio-graph-legend-label">More</span>
        </div>
      </div>
    </div>
  );
}
