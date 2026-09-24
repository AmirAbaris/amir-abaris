import { skillGroups } from "@/lib/skills-data";

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="portfolio-section">
      <div className="portfolio-section-heading">
        <h2 id="skills-heading">Skills</h2>
      </div>
      <dl className="portfolio-skills-list">
        {skillGroups.map((group) => (
          <div key={group.label} className="portfolio-skill-row">
            <dt>{group.label}</dt>
            <dd>
              {group.skills.map((skill) => (
                <span key={skill} className="portfolio-skill-chip">{skill}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
