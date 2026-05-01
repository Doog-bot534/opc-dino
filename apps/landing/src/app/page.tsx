import { Hero } from "@/components/sections/hero";
import { Pain } from "@/components/sections/pain";
import { Solution } from "@/components/sections/solution";
import { Platforms } from "@/components/sections/platforms";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FooterCTA } from "@/components/sections/footer-cta";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <>
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
    </>
  );
}
