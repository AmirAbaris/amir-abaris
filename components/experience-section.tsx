import { MetricText } from "@/components/metric-text";
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
    <article className="grid gap-3 border-t border-border pt-6 sm:grid-cols-[8rem_1fr] sm:gap-6">
      {/* Meta is demoted so it frames the entry instead of competing with it. */}
      <div className="space-y-0.5 text-xs text-muted-foreground sm:pt-1">
        <p>{duration}</p>
        <p>{location}</p>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>

        <ul className="space-y-2 text-[15px] leading-7 text-muted-foreground">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex gap-2.5">
              <span className="mt-[0.6875rem] h-1 w-1 shrink-0 rounded-full bg-brand" />
              <span>
                <MetricText>{achievement}</MetricText>
              </span>
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
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Experience
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Recent Work
        </h2>
      </div>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
