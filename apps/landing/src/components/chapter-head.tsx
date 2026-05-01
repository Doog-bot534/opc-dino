/**
 * ChapterHead — section opener in dinolabs style
 *
 *   / 01    PAIN  · 痛点                  § / 做完没人知道
 *   ─────────────────────────────────────────────────────────
 */
export function ChapterHead({
  n,
  t,
  cn,
  aside,
}: {
  /** Chapter number, e.g. "/ 01" */
  n: string;
  /** English / mono title, e.g. "PAIN" */
  t: string;
  /** Chinese small subtitle alongside, e.g. "痛点" */
  cn?: string;
  /** Right side mono note, e.g. "§ / 做完没人知道" */
  aside?: string;
}) {
  return (
    <header className="chapter-head reveal">
      <span className="n">{n}</span>
      <span className="t">
        {t}
        {cn ? <span className="cn-small">· {cn}</span> : null}
      </span>
      {aside ? <span className="aside">{aside}</span> : null}
    </header>
  );
}
