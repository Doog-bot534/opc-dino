"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { t } from "@/i18n";

export function Hero() {
  const dict = t.hero;
  const count = t.meta.waitlistCount;

  return (
    <section className="relative isolate overflow-hidden">
      {/* 背景：径向渐变 + grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.35_0.02_270/0.6),transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,oklch(1_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 pt-20 pb-24 text-center sm:px-6 sm:pt-28 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Badge
            variant="secondary"
            className="gap-1.5 rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs font-medium backdrop-blur"
          >
            <Sparkles className="h-3 w-3" />
            {dict.badge}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-6 text-balance bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl"
        >
          {dict.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          {dict.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="#waitlist">
              {dict.ctaPrimary}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
          >
            <Link href="#solution">{dict.ctaSecondary}</Link>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 text-xs text-muted-foreground"
        >
          <span className="font-medium text-foreground">+{count}</span>{" "}
          {t.waitlistForm.countSuffix}
          {dict.socialProof ? ` · ${dict.socialProof}` : null}
        </motion.p>
      </div>
    </section>
  );
}
