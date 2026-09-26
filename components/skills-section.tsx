import Image from "next/image";

import { skillGroups, skillIcons } from "@/lib/skills-data";

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
                <span key={skill} className="portfolio-skill-chip">
                  {skillIcons[skill] ? (
                    <Image src={`/icons/skills/${skillIcons[skill]}.svg`} alt="" aria-hidden="true" width={14} height={14} />
                  ) : null}
                  {skill}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
