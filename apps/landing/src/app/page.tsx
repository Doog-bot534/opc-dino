import { Hero } from "@/components/sections/hero";
import { Pain } from "@/components/sections/pain";
import { Solution } from "@/components/sections/solution";
import { Platforms } from "@/components/sections/platforms";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FooterCTA } from "@/components/sections/footer-cta";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SiteNav } from "@/components/site-nav";
import { LocaleProvider } from "@/lib/locale-provider";
import type { Locale } from "@/i18n";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const initial: Locale = params.lang === "zh" ? "zh" : "en";

  return (
    <LocaleProvider initial={initial}>
      <SiteNav />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <Platforms />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </main>
      <RevealOnScroll />
    </LocaleProvider>
  );
}
