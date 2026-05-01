"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLocale } from "@/lib/locale-provider";
import { Parts } from "@/components/parts";

/**
 * Hero — dinolabs style
 *
 * Layout (≥1024px): 1.15fr | 0.85fr   left = content, right = terminal
 * Mobile: single column, terminal stacks below
 *
 * Title and subtitle render via mark/fade Parts arrays from i18n dict —
 * one component, both languages.
 */
export function Hero() {
  const { t } = useLocale();
  const dict = t.hero;
  const count = t.meta.waitlistCount;
  const term = dict.terminal;

  return (
    <section className="relative isolate overflow-hidden bg-[var(--bg)]">
      {/* 背景：极淡品牌色径向渐变 + light grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, var(--brand-glow), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(17,24,39,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        {/* Left — content */}
        <div className="flex flex-col">
          <span className="hero-eyebrow reveal">
            <span className="bracket">[</span>
            <span>{dict.eyebrow}</span>
            <span className="bracket">]</span>
          </span>

          <h1 className="reveal d1 mt-7 text-balance font-medium text-[var(--ink)] text-[44px] leading-[1.02] tracking-[-0.02em] sm:text-6xl md:text-[64px] lg:text-[72px] lg:leading-[0.98]">
            <Parts parts={dict.titleParts} />
          </h1>

          <p className="reveal d2 mt-6 max-w-xl text-balance text-base text-[var(--muted)] sm:text-lg">
            <Parts parts={dict.subtitleParts} />
          </p>

          <div className="reveal d3 mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              href="#waitlist"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--ink)] px-7 py-3.5 text-base font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
            >
              {dict.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#solution"
              className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-transparent px-7 py-3.5 text-base font-medium text-[var(--ink)] transition-colors hover:bg-[var(--bg-1)]"
            >
              {dict.ctaSecondary}
            </Link>
          </div>

          <p className="reveal d4 mt-6 text-xs text-[var(--muted)]">
            <span className="font-semibold text-[var(--ink)]">+{count}</span>{" "}
            {t.waitlistForm.countSuffix}
            {dict.socialProof ? (
              <>
                {" · "}
                <span className="fade">{dict.socialProof}</span>
              </>
            ) : null}
          </p>
        </div>

        {/* Right — terminal */}
        <aside className="terminal reveal d2 mx-auto w-full lg:mx-0" aria-hidden>
          <div className="term-chrome">
            <span className="d" />
            <span className="d" />
            <span className="d" />
            <span className="title">{term.title}</span>
            <span className="meta">{term.meta}</span>
          </div>
          <div className="term-body">
            <div className="term-line">
              <span className="prompt">$</span>
              <span className="user">{term.lines.cmdUser}</span>
              <span className="accent">{term.lines.cmdUrl}</span>
            </div>
            <div className="term-line">
              <span className="dim">{term.lines.ingest}</span>
            </div>
            <div className="term-line">
              <span className="ok">✓</span>
              Reddit <span className="dim">r/SideProject</span> ·{" "}
              <span className="str">487 chars</span>
            </div>
            <div className="term-line">
              <span className="ok">✓</span>
              X thread · <span className="str">8 posts</span>
            </div>
            <div className="term-line">
              <span className="ok">✓</span>
              即刻 · <span className="str">270 字</span>{" "}
              <span className="dim">{term.lines.readyDim}</span>
            </div>
            <div className="term-line">
              <span className="ok">✓</span>
              V2EX · <span className="str">720 chars</span>{" "}
              <span className="dim">{term.lines.techStyle}</span>
            </div>
            <div className="term-line">
              <span className="ok">✓</span>
              Dev.to · <span className="str">1500 chars</span>{" "}
              <span className="dim">{term.lines.markdown}</span>
            </div>
            <div className="term-line">
              <span className="arrow">→</span>
              <span className="dim">{term.lines.summary}</span>
            </div>
            <div className="term-line">
              <span className="accent">●</span>{" "}
              <span className="user">{term.lines.running}</span>
            </div>
          </div>
          <div className="term-footer">
            <span>{term.stack}</span>
            <span>
              <span className="val">●</span>
              {term.waitlistTag}
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
