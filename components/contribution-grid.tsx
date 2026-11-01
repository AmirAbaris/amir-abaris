import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { ContributionGridInteractive } from "@/components/contribution-grid-interactive";
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
        <ContributionGridInteractive activity={activity} />
      ) : (
        <p className="text-sm leading-6 text-muted-foreground">
          My contribution history is available on <Link href={profile.links.github} target="_blank" rel="noopener noreferrer" className="portfolio-inline-emphasis">GitHub</Link>.
        </p>
      )}
    </section>
  );
}
