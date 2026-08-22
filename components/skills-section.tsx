import { aiWorkflow, primarySkills, skillGroups } from "@/lib/skills-data";

/** Label / values row. Reads as a spec sheet rather than a badge wall. */
function SkillRow({ label, skills }: { label: string; skills: string[] }) {
  return (
    <div className="grid gap-1 border-t border-border py-3.5 sm:grid-cols-[8rem_1fr] sm:gap-6">
      <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-muted-foreground sm:pt-0.5">
        {label}
      </p>
      <p className="text-[15px] leading-7 text-foreground">
        {skills.map((skill, index) => (
          <span key={skill}>
            {skill}
            {index < skills.length - 1 ? (
              <span className="text-muted-foreground/60">{", "}</span>
            ) : null}
          </span>
        ))}
      </p>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-6">
      <div>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground">
          Skills
        </p>
        <h2 className="mt-2 font-display text-[1.75rem] font-semibold tracking-[-0.02em]">
          Stack I Ship With
        </h2>
        <p className="mt-2 max-w-lg text-[15px] leading-7 text-muted-foreground">
          The tools behind{" "}
          <strong className="font-semibold text-foreground">
            50+ production features
          </strong>
          , from web and mobile UI to APIs and deployment.
        </p>
      </div>

      <div>
        <p className="font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-foreground">
          {primarySkills.map((skill, index) => (
            <span key={skill}>
              {skill}
              {index < primarySkills.length - 1 ? (
                <span className="px-2 text-primary">·</span>
              ) : null}
            </span>
          ))}
        </p>
      </div>

      <div>
        {skillGroups.map((group) => (
          <SkillRow key={group.label} {...group} />
        ))}
      </div>

      <div className="space-y-3 rounded-xl border border-border bg-muted/25 p-5">
        <p className="font-mono">
          {aiWorkflow.label}
        </p>
        <p className="max-w-lg text-[15px] leading-7 text-muted-foreground">
          {aiWorkflow.intro}
        </p>
        <div className="pt-1">
          {aiWorkflow.groups.map((group) => (
            <SkillRow key={group.label} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
