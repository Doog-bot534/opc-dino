import { ChapterHead } from "@/components/chapter-head";
import { t } from "@/i18n";

/** Map pain card → english tag for principle.k mono key */
const KEYS = [
  { k: "/ 01 · ship", en: "Built but nobody knows." },
  { k: "/ 02 · rewrite", en: "Same product, 7 different posts." },
  { k: "/ 03 · split", en: "Two tools, two regions, twice the cost." },
];

export function Pain() {
  const dict = t.pain;
  return (
    <section
      id="pain"
      className="border-t border-[var(--line-2)] bg-[var(--bg)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ChapterHead n="/ 01" t="PAIN" cn="痛点" aside="§ / 做完没人知道" />

        <p className="reveal mx-auto mb-12 max-w-3xl text-balance text-lg leading-relaxed text-[var(--ink-2)] sm:text-xl">
          做 indie 的人，都在
          <span className="mark"> 这三件事 </span>
          上反复
          <span className="mark">栽</span>
          <span className="fade">。</span>
          <span className="block mt-2 text-sm text-[var(--muted)]">
            {dict.subtitle}
          </span>
        </p>

        <div className="principles reveal d1">
          {dict.items.map((item, i) => {
            const meta = KEYS[i] ?? { k: `/ 0${i + 1}`, en: "" };
            return (
              <div key={i} className="principle">
                <span className="k">{meta.k}</span>
                <h3>
                  <span>{item.title}</span>
                  {meta.en ? <span className="en">{meta.en}</span> : null}
                </h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
