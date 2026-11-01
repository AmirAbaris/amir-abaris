export type ContributionDay = {
  date: string;
  level: number;
  count: number;
  label: string;
};

export type ContributionActivity = {
  total: number;
  maxCount: number;
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

    const tooltipMap = new Map<string, { count: number; label: string }>();
    for (const match of html.matchAll(
      /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g,
    )) {
      const id = match[1];
      const raw = match[2].trim();
      const countMatch = raw.match(/^(\d+)\s+contribution/);
      const count = countMatch ? Number.parseInt(countMatch[1], 10) : 0;
      tooltipMap.set(id, { count, label: raw });
    }

    const days: ContributionDay[] = [];
    let maxCount = 0;

    for (const [cell] of html.matchAll(/<td\b[^>]*ContributionCalendar-day[^>]*>/g)) {
      const id = cell.match(/\bid="([^"]+)"/)?.[1];
      const date = cell.match(/\bdata-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
      const level = cell.match(/\bdata-level="([0-4])"/)?.[1];

      if (date && level) {
        const tooltip = id ? tooltipMap.get(id) : undefined;
        const count = tooltip?.count ?? (Number(level) > 0 ? Number(level) : 0);
        const label = tooltip?.label ?? `${count} contributions on ${date}`;
        if (count > maxCount) maxCount = count;

        days.push({
          date,
          level: Number(level),
          count,
          label,
        });
      }
    }

    if (!totalMatch || days.length < 300) return null;

    return {
      total: Number(totalMatch[1].replaceAll(",", "")),
      maxCount,
      days: days.sort((a, b) => a.date.localeCompare(b.date)),
    };
  } catch {
    return null;
  }
}
