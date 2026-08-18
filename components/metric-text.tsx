import { Fragment } from "react";

/**
 * Renders copy that marks its own metrics with **double asterisks**.
 *
 * Numbers are the most credible thing on the page, so they get foreground
 * weight while the sentence around them stays muted. Marking is explicit
 * rather than regex-detected, because auto-bolding digits would also catch
 * numbers like "Next.js 15".
 */
export function MetricText({ children }: { children: string }) {
  const parts = children.split(/\*\*(.+?)\*\*/g);

  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-foreground">
            {part}
          </strong>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
