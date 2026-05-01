"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { t } from "@/i18n";

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

      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 pt-24 pb-28 text-center sm:px-8 sm:pt-32 sm:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-white/60 px-3 py-1 text-xs font-medium text-[var(--ink-2)] backdrop-blur">
            <Sparkles className="h-3 w-3 text-[var(--brand)]" />
            {dict.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-7 text-balance font-medium text-[var(--ink)] text-[44px] leading-[1.02] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[88px] lg:leading-[0.98]"
        >
          {dict.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-2xl text-balance text-base text-[var(--muted)] sm:text-lg"
        >
          {dict.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <Link
            href="#waitlist"
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[var(--ink)] px-8 py-3.5 text-base font-medium text-[var(--bg)] transition-opacity hover:opacity-90 sm:w-auto"
          >
            {dict.ctaPrimary}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#solution"
            className="inline-flex w-full items-center justify-center rounded-full border border-[var(--line)] bg-transparent px-8 py-3.5 text-base font-medium text-[var(--ink)] transition-colors hover:bg-[var(--bg-1)] sm:w-auto"
          >
            {dict.ctaSecondary}
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-7 text-xs text-[var(--muted)]"
        >
          <span className="font-semibold text-[var(--ink)]">+{count}</span>{" "}
          {t.waitlistForm.countSuffix}
          {dict.socialProof ? ` · ${dict.socialProof}` : null}
        </motion.p>
      </div>
    </section>
  );
}
