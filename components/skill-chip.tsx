import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Skill } from "@/lib/skills-data";

type SkillChipProps = {
  skill: Skill;
  featured?: boolean;
};

export function SkillChip({ skill, featured }: SkillChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-border bg-muted/25 text-foreground transition-colors hover:border-foreground/20 hover:bg-muted/45",
        featured ? "px-3.5 py-2 text-sm font-medium" : "px-3 py-1.5 text-sm",
      )}
    >
      <Image
        src={skill.icon}
        alt=""
        width={featured ? 20 : 16}
        height={featured ? 20 : 16}
        aria-hidden
        className={cn(
          "shrink-0 object-contain",
          featured ? "size-5" : "size-4",
          !skill.colored && "dark:invert",
        )}
      />
      {skill.name}
    </span>
  );
}
