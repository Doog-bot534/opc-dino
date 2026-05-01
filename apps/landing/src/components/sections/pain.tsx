import { Clock, Languages, Megaphone } from "lucide-react";

import { t } from "@/i18n";

const icons = [Megaphone, Clock, Languages];

export function Pain() {
  const dict = t.pain;
  return (
    <section className="border-t border-[var(--line-2)] bg-[var(--bg)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-medium tracking-[-0.02em] text-[var(--ink)] text-3xl sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-balance text-base text-[var(--muted)]">
            {dict.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((item, i) => {
            const Icon = icons[i] ?? Megaphone;
            return (
              <div
                key={i}
                className="rounded-2xl border border-[var(--line)] bg-[var(--bg-1)] p-7 transition-colors hover:border-[var(--brand)]/40"
              >
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-white text-[var(--brand)] border border-[var(--line)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
