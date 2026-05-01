import type { Part } from "@/i18n";

/**
 * Render an array of mark/fade/plain/brand parts as inline spans.
 * Used for headlines that mix highlight (`mark`), muted (`fade`), plain, and brand-colored em.
 */
export function Parts({ parts }: { parts: readonly Part[] }) {
  return (
    <>
      {parts.map((p, i) => {
        if (p.kind === "mark") return <span key={i} className="mark">{p.text}</span>;
        if (p.kind === "fade") return <span key={i} className="fade">{p.text}</span>;
        if (p.kind === "brand") return <em key={i} className="brand">{p.text}</em>;
        return <span key={i}>{p.text}</span>;
      })}
    </>
  );
}
