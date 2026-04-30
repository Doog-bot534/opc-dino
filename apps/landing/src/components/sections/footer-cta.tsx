import Link from "next/link";
import { Mail } from "lucide-react";

import { WaitlistForm } from "@/components/waitlist-form";
import { t } from "@/i18n";

/** 用 simple-icons CDN 当 footer 社交图标 */
function BrandIcon({ slug, alt }: { slug: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}/9f9fa9`}
      alt={alt}
      width={14}
      height={14}
      className="h-3.5 w-3.5"
    />
  );
}

export function FooterCTA() {
  const dict = t.ctaFooter;
  const f = t.footer;
  return (
    <section
      id="waitlist"
      className="relative isolate overflow-hidden border-t border-border/50 bg-background"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,oklch(0.4_0.05_270/0.5),transparent_70%)]"
      />

      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <h2 className="text-balance bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-5xl">
          {dict.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-base text-muted-foreground">
          {dict.subtitle}
        </p>

        <div className="mx-auto mt-8 max-w-md">
          <WaitlistForm source="footer" />
        </div>

        <p className="mx-auto mt-6 max-w-xl whitespace-pre-line text-xs leading-relaxed text-muted-foreground/80">
          {dict.smallNote}
        </p>
      </div>

      <footer className="border-t border-border/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">{t.meta.siteName}</span>
            <span className="text-muted-foreground/60">·</span>
            <span>{f.tagline}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://twitter.com/opcdino_so"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <BrandIcon slug="x" alt="Twitter" />
              {f.twitter}
            </Link>
            <Link
              href="https://github.com/opcdino"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <BrandIcon slug="github" alt="GitHub" />
              {f.github}
            </Link>
            <Link
              href="mailto:hi@opcdino.so"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
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
