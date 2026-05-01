import Link from "next/link";
import { Check } from "lucide-react";

import { t } from "@/i18n";
import { cn } from "@/lib/utils";

export function Pricing() {
  const dict = t.pricing;

  return (
    <section
      id="pricing"
      className="border-t border-[var(--line-2)] bg-[var(--bg)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-medium tracking-[-0.02em] text-[var(--ink)] text-3xl sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-balance text-sm text-[var(--muted)] sm:text-base">
            {dict.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {dict.plans.map((plan) => {
            const recommended = plan.recommended;
            return (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col gap-5 rounded-2xl p-7 transition-all",
                  recommended
                    ? "bg-[var(--ink)] text-[var(--bg)] shadow-[0_20px_48px_-16px_rgba(17,24,39,0.35)] md:scale-[1.03]"
                    : "border border-[var(--line)] bg-[var(--bg-1)] text-[var(--ink)]",
                )}
              >
                {recommended ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--brand)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                    {dict.recommendedBadge}
                  </span>
                ) : null}

                <div>
                  <div
                    className={cn(
                      "text-xs font-semibold uppercase tracking-[0.14em]",
                      recommended ? "text-white/60" : "text-[var(--muted-2)]",
                    )}
                  >
                    {plan.name}
                  </div>
                  <div
                    className={cn(
                      "mt-1.5 text-sm",
                      recommended ? "text-white/70" : "text-[var(--muted)]",
                    )}
                  >
                    {plan.tagline}
                  </div>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span
                      className={cn(
                        "text-5xl font-medium tracking-tight",
                        recommended ? "text-white" : "text-[var(--ink)]",
                      )}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        recommended ? "text-white/60" : "text-[var(--muted)]",
                      )}
                    >
                      {dict.perMonth}
                    </span>
                  </div>
                </div>

                <ul className="flex flex-1 flex-col gap-3">
                  {plan.features.map((f, idx) => (
                    <li
                      key={idx}
                      className={cn(
                        "flex items-start gap-2.5 text-sm",
                        recommended ? "text-white/90" : "text-[var(--ink-2)]",
                      )}
                    >
                      <Check
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0",
                          recommended ? "text-[var(--brand)]" : "text-[var(--brand)]",
                        )}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#waitlist"
                  className={cn(
                    "inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-opacity",
                    recommended
                      ? "bg-[var(--bg)] text-[var(--ink)] hover:opacity-90"
                      : "border border-[var(--line)] bg-white text-[var(--ink)] hover:bg-[var(--bg-2)]",
                  )}
                >
                  {dict.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-xs text-[var(--muted)]">
          {dict.earlyBird}
        </p>
      </div>
    </section>
  );
}
