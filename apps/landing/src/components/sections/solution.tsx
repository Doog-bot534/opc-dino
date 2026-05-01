"use client";

import { ChapterHead } from "@/components/chapter-head";
import { Parts } from "@/components/parts";
import { useLocale } from "@/lib/locale-provider";

const KEYS = [
  { k: "/ 01 · ingest", en: "Drop the URL." },
  { k: "/ 02 · translate", en: "Translate to 10+ native voices." },
  { k: "/ 03 · ship", en: "Ship and watch." },
];

export function Solution() {
  const { t, locale } = useLocale();
  const dict = t.solution;
  const term = dict.terminalLines;

  return (
    <section
      id="solution"
      className="border-t border-[var(--line-2)] bg-[var(--bg)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ChapterHead {...dict.chapter} />

        <p className="reveal mb-12 max-w-3xl text-left text-lg leading-relaxed text-[var(--ink-2)] sm:text-xl">
          <Parts parts={dict.titleParts} />
          <span className="block mt-2 text-sm text-[var(--muted)]">
            {dict.subtitle}
          </span>
        </p>

        <div className="principles reveal d1">
          {dict.steps.map((step, i) => {
            const meta = KEYS[i] ?? { k: `/ step.0${i + 1}`, en: "" };
            return (
              <div key={i} className="principle">
                <span className="k">{meta.k}</span>
                <h3>
                  <span>{step.title}</span>
                  {locale === "zh" && meta.en ? (
                    <span className="en">{meta.en}</span>
                  ) : null}
                </h3>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Code/terminal mock — full width, matches section container */}
        <div className="reveal d2 mt-12 w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_1px_3px_rgba(17,24,39,0.04)]">
          <div className="flex items-center gap-1.5 border-b border-[var(--line-2)] bg-[var(--bg-1)] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--muted)]">
              {dict.terminalCaption}
            </span>
          </div>
          <pre className="overflow-x-auto p-5 text-xs leading-relaxed sm:p-6 sm:text-sm">
            <code className="font-[family-name:var(--font-geist-mono)] text-[var(--muted)]">
              <span className="text-[var(--brand)]">$</span> {term.cmd}
              {"\n"}
              <span className="text-[var(--muted-2)]">{term.step1}</span>
              {"\n"}
              <span className="text-[var(--muted-2)]">{term.step2}</span>
              {"\n"}
              <span className="text-[var(--ink)]">{term.step3}</span>
              {"\n"}
              <span className="text-[var(--muted-2)]">{term.step4}</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
