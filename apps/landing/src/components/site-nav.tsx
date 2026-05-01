"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";
import { useLocale } from "@/lib/locale-provider";

export function SiteNav() {
  const { t, locale, toggle } = useLocale();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--line-2)] bg-[var(--bg)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-[var(--ink)]"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--brand)] text-white">
            <Rocket className="h-4 w-4" />
          </span>
          <span className="text-base">{t.meta.siteName}</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-3">
          <Link
            href="#pricing"
            className="hidden rounded-full px-3 py-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)] sm:inline-flex"
          >
            {t.nav.pricing}
          </Link>
          <Link
            href="#faq"
            className="hidden rounded-full px-3 py-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)] sm:inline-flex"
          >
            {t.nav.faq}
          </Link>
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch language to ${locale === "en" ? "Chinese" : "English"}`}
            className="inline-flex items-center justify-center rounded-full px-2.5 py-1.5 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
          >
            {locale === "en" ? "中文" : "EN"}
          </button>
          <Link
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-90"
          >
            {t.nav.waitlist}
          </Link>
        </nav>
      </div>
    </header>
  );
}
