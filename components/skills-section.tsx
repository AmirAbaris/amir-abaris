import { primarySkills, skillGroups } from "@/lib/skills-data";

/** Label / values row. Reads as a spec sheet rather than a badge wall. */
function SkillRow({ label, skills }: { label: string; skills: string[] }) {
  return (
    <div className="grid gap-1 border-t border-border py-3.5 sm:grid-cols-[8rem_1fr] sm:gap-6">
      <p className="font-mono text-[0.6875rem] tracking-[0.08em] text-muted-foreground sm:pt-0.5">
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
    <section id="skills" className="scroll-mt-20 space-y-6">
      <div>
        <h2 className="font-display text-[1.75rem] font-semibold tracking-[-0.02em] text-pretty">
          Technical Focus
        </h2>
        <p className="mt-2 max-w-lg text-[15px] leading-7 text-muted-foreground">
          Production frontend engineering, independent backend systems, and
          the infrastructure used to ship both.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-foreground">
        {primarySkills.map((skill, index) => (
          <span key={skill} className="flex items-center gap-x-2">
            {skill}
            {index < primarySkills.length - 1 ? (
              <span className="text-primary" aria-hidden>
                ·
              </span>
            ) : null}
          </span>
        ))}
      </div>

      <div>
        {skillGroups.map((group) => (
          <SkillRow key={group.label} {...group} />
        ))}
      </div>
    </section>
  );
}
