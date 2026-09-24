import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { getGithubContributions } from "@/lib/github-contributions";
import { profile } from "@/lib/profile-data";

export async function ContributionGrid() {
  const activity = await getGithubContributions();

  return (
    <section aria-labelledby="activity-heading" className="portfolio-section">
      <div className="portfolio-section-heading">
        <h2 id="activity-heading">GitHub activity</h2>
        <Link href={profile.links.github} target="_blank" rel="noopener noreferrer" className="portfolio-quiet-link">
          Profile <ArrowUpRightIcon aria-hidden="true" className="size-3" />
        </Link>
      </div>

      {activity ? (
        <>
          <div className="portfolio-graph-scroll" role="img" aria-label={`${activity.total.toLocaleString("en-US")} GitHub contributions in the last year`}>
            <div className="portfolio-months" aria-hidden="true">
              {activity.days.map((day, index) => {
                const currentDate = new Date(`${day.date}T00:00:00Z`);
                const month = currentDate.getUTCMonth();
                const previousMonth = index === 0 ? -1 : new Date(`${activity.days[index - 1].date}T00:00:00Z`).getUTCMonth();
                if (month === previousMonth) return null;
                // A partial first month crowds the next label; GitHub's graph
                // starts close to a month boundary for much of the year.
                if (index === 0) {
                  const nextMonth = Date.UTC(currentDate.getUTCFullYear(), month + 1, 1);
                  if ((nextMonth - currentDate.getTime()) / 86_400_000 < 14) return null;
                }
                const weekdayOffset = new Date(`${activity.days[0].date}T00:00:00Z`).getUTCDay();
                const column = Math.floor((weekdayOffset + index) / 7) + 1;
                return <span key={day.date} style={{ gridColumn: `${column} / span 3` }}>{new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" }).format(currentDate)}</span>;
              })}
            </div>
            <div className="portfolio-graph" aria-hidden="true">
              {Array.from({ length: new Date(`${activity.days[0].date}T00:00:00Z`).getUTCDay() }, (_, index) => (
                <span key={`padding-${index}`} className="portfolio-graph-empty" />
              ))}
              {activity.days.map((day) => (
                <span key={day.date} className={`portfolio-graph-cell portfolio-graph-level-${day.level}`} title={`${day.date}: GitHub activity level ${day.level}`} />
              ))}
            </div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {activity.total.toLocaleString("en-US")} contributions in the last year
          </p>
        </>
      ) : (
        <p className="text-sm leading-6 text-muted-foreground">
          My contribution history is available on <Link href={profile.links.github} target="_blank" rel="noopener noreferrer" className="portfolio-inline-emphasis">GitHub</Link>.
        </p>
      )}
    </section>
  );
}
