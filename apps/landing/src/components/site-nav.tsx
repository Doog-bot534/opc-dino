"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { t } from "@/i18n";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
            <Rocket className="h-4 w-4" />
          </span>
          <span>{t.meta.siteName}</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-3">
          <Link
            href="#pricing"
            className="hidden rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            {t.nav.pricing}
          </Link>
          <Link
            href="#faq"
            className="hidden rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            {t.nav.faq}
          </Link>
          <Button asChild size="sm">
            <Link href="#waitlist">{t.nav.waitlist}</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
