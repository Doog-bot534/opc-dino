"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

import { WaitlistForm } from "@/components/waitlist-form";
import { Parts } from "@/components/parts";
import { useLocale } from "@/lib/locale-provider";

/** 用 simple-icons CDN 当 footer 社交图标 */
function BrandIcon({ slug, alt }: { slug: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}/4b5563`}
      alt={alt}
      width={14}
      height={14}
      className="h-3.5 w-3.5"
    />
  );
}

export function FooterCTA() {
  const { t } = useLocale();
  const dict = t.ctaFooter;
  const f = t.footer;
  return (
    <section
      id="waitlist"
      className="relative isolate overflow-hidden border-t border-[var(--line-2)] bg-[var(--bg-1)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, var(--brand-glow), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 sm:py-36">
        <span className="hero-eyebrow reveal mx-auto justify-center">
          <span className="bracket">[</span>
          <span>{dict.eyebrow}</span>
          <span className="bracket">]</span>
        </span>
        <h2 className="reveal d1 mt-6 text-balance font-medium tracking-[-0.02em] text-[var(--ink)] text-3xl sm:text-5xl md:text-6xl">
          <Parts parts={dict.titleParts} />
        </h2>
        <p className="reveal d2 mx-auto mt-5 max-w-xl text-balance text-base text-[var(--muted)] sm:text-lg">
          {dict.subtitle}
        </p>

        <div className="reveal d3 mx-auto mt-10 max-w-md">
          <WaitlistForm source="footer" />
        </div>

        <p className="reveal d4 mx-auto mt-7 max-w-xl whitespace-pre-line text-xs leading-relaxed text-[var(--muted)]">
          {dict.smallNote}
        </p>
      </div>

      <footer className="border-t border-[var(--line-2)] bg-[var(--bg)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-7 text-xs text-[var(--muted)] sm:flex-row sm:px-8">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[var(--ink)]">
              {t.meta.siteName}
            </span>
            <span className="text-[var(--muted-2)]">·</span>
            <span>{f.tagline}</span>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="https://twitter.com/opcdino_so"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--ink)]"
            >
              <BrandIcon slug="x" alt="Twitter" />
              {f.twitter}
            </Link>
            <Link
              href="https://github.com/opcdino"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--ink)]"
            >
              <BrandIcon slug="github" alt="GitHub" />
              {f.github}
            </Link>
            <Link
              href="mailto:hi@opc.dinolabs.online"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--ink)]"
            >
              <Mail className="h-3.5 w-3.5" />
              {f.email}
            </Link>
          </div>
          <div>{f.copyright}</div>
        </div>
      </footer>
    </section>
  );
}
