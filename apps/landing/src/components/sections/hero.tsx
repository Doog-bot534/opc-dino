"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { t } from "@/i18n";

/**
 * Hero — dinolabs style
 *
 * Layout (≥1024px): 1.15fr | 0.85fr   left = content, right = terminal
 * Mobile: single column, terminal stacks below
 *
 * Signature dinolabs touches:
 *   - mono eyebrow with brand-blue brackets
 *   - H1 with .mark (brand) and .fade (muted) inline word highlighting
 *   - dark terminal block (visual anchor in an otherwise light page)
 */
export function Hero() {
  const dict = t.hero;
  const count = t.meta.waitlistCount;

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
            <span>独立开发者 · indie launch tool</span>
            <span className="bracket">]</span>
          </span>

          <h1 className="reveal d1 mt-7 text-balance font-medium text-[var(--ink)] text-[44px] leading-[1.02] tracking-[-0.02em] sm:text-6xl md:text-[64px] lg:text-[72px] lg:leading-[0.98]">
            <span className="fade">让你做的</span>
            <span className="mark"> 好东西</span>
            <span className="fade">，被它该</span>
            <span className="mark"> 被看见的人</span>
            <span className="fade"> 看见。</span>
          </h1>

          <p className="reveal d2 mt-6 max-w-xl text-balance text-base text-[var(--muted)] sm:text-lg">
            一个 URL，AI 拆出 <em className="brand">10+ 平台原生发声</em> — 把你{" "}
            <span className="mark">6 个月写的代码</span>，
            <span className="fade">从工程师朋友圈，</span>推到{" "}
            <span className="mark">真正会用的人</span> 面前。
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
            <span className="title">~ opc@dino · launch.sh</span>
            <span className="meta">zsh</span>
          </div>
          <div className="term-body">
            <div className="term-line">
              <span className="prompt">$</span>
              <span className="user">opcdino launch </span>
              <span className="accent">https://your-product.com</span>
            </div>
            <div className="term-line">
              <span className="dim">  → 抓取产品页面，提炼卖点 / 用户画像…</span>
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
              <span className="dim">with hooks</span>
            </div>
            <div className="term-line">
              <span className="ok">✓</span>
              V2EX · <span className="str">720 chars</span>{" "}
              <span className="dim">tech-style</span>
            </div>
            <div className="term-line">
              <span className="ok">✓</span>
              Dev.to · <span className="str">1500 chars</span>{" "}
              <span className="dim">markdown</span>
            </div>
            <div className="term-line">
              <span className="arrow">→</span>
              <span className="dim">5 platforms ready · 7 待人工 review</span>
            </div>
            <div className="term-line">
              <span className="accent">●</span> <span className="user">RUNNING</span>
            </div>
          </div>
          <div className="term-footer">
            <span>next 16 · drizzle · resend</span>
            <span>
              <span className="val">●</span>WAITLIST
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
