export type ContributionDay = {
  date: string;
  level: number;
};

export type ContributionActivity = {
  total: number;
  days: ContributionDay[];
};

/** GitHub's public profile calendar, refreshed once a day. No token is needed. */
export async function getGithubContributions(): Promise<ContributionActivity | null> {
  try {
    const response = await fetch(
      "https://github.com/users/AmirAbaris/contributions",
      {
        headers: { "User-Agent": "AmirAbaris-Portfolio" },
        next: { revalidate: 86_400 },
        signal: AbortSignal.timeout(7_000),
      },
    );

    if (!response.ok) return null;

    const html = await response.text();
    const totalMatch = html.match(
      /<h2[^>]*id="js-contribution-activity-description"[^>]*>\s*([\d,]+)/,
    );
    const days: ContributionDay[] = [];

    for (const [cell] of html.matchAll(/<td\b[^>]*ContributionCalendar-day[^>]*>/g)) {
      const date = cell.match(/\bdata-date="(\d{4}-\d{2}-\d{2})"/);
      const level = cell.match(/\bdata-level="([0-4])"/);
      if (date && level) days.push({ date: date[1], level: Number(level[1]) });
    }

    if (!totalMatch || days.length < 300) return null;

    return {
      total: Number(totalMatch[1].replaceAll(",", "")),
      days: days.sort((a, b) => a.date.localeCompare(b.date)),
    };
  } catch {
    return null;
  }
}
