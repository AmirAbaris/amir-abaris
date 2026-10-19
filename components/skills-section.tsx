import Image from "next/image";
import { BracesIcon, CircleHelpIcon, RadioIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { skillGroups, skillIcons } from "@/lib/skills-data";

export function SkillsSection() {
  const fallbackIcons: Record<string, LucideIcon> = {
    RxJS: RadioIcon,
    "Redux Toolkit": BracesIcon,
    "RTK Query": RadioIcon,
    "REST APIs": BracesIcon,
    WebSockets: RadioIcon,
  };

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
                    <Image src={`/icons/skills/${skillIcons[skill]}.svg`} alt="" aria-hidden="true" width={18} height={18} className="portfolio-skill-icon" />
                  ) : (() => {
                    const Icon = fallbackIcons[skill] ?? CircleHelpIcon;
                    return <Icon aria-hidden="true" className="portfolio-skill-icon-fallback" />;
                  })()}
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
