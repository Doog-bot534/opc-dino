"use client";

import { ChapterHead } from "@/components/chapter-head";
import { Parts } from "@/components/parts";
import { useLocale } from "@/lib/locale-provider";

/** Mono key per card — language-agnostic. The English subline only renders in zh mode. */
const KEYS = [
  { k: "/ 01 · invisible", en: "Your work matters. They just can't find it." },
  { k: "/ 02 · translate", en: "Every community speaks differently." },
  { k: "/ 03 · flow", en: "Distribution = letting value reach." },
];

export function Pain() {
  const { t, locale } = useLocale();
  const dict = t.pain;
  return (
    <section
      id="pain"
      className="border-t border-[var(--line-2)] bg-[var(--bg)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ChapterHead {...dict.chapter} />

        <p className="reveal mx-auto mb-12 max-w-3xl text-balance text-lg leading-relaxed text-[var(--ink-2)] sm:text-xl">
          <Parts parts={dict.titleParts} />
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
                  {locale === "zh" && meta.en ? (
                    <span className="en">{meta.en}</span>
                  ) : null}
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
