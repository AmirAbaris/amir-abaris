import { SkillChip } from "@/components/skill-chip";
import { primarySkills, skillGroups } from "@/lib/skills-data";

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-5">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Skills
        </p>
        <h2 className="mt-2 text-2xl font-semibold">Stack I Ship With</h2>
        <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
          The tools behind 50+ production features, from web and mobile UI to
          APIs and deployment.
        </p>
      </div>

      <div className="space-y-6 border-t border-border pt-5">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Primary
          </p>
          <div className="flex flex-wrap gap-2">
            {primarySkills.map((skill) => (
              <SkillChip key={skill.id} skill={skill} featured />
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div key={group.label} className="space-y-2.5">
              <p className="text-xs font-medium text-muted-foreground">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillChip key={skill.id} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
