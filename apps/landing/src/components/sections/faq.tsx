import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { t } from "@/i18n";

export function FAQ() {
  const dict = t.faq;
  return (
    <section
      id="faq"
      className="border-t border-[var(--line-2)] bg-[var(--bg)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-medium tracking-[-0.02em] text-[var(--ink)] text-3xl sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-balance text-base text-[var(--muted)]">
            {dict.subtitle}
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 rounded-2xl border border-[var(--line)] bg-[var(--bg-1)] px-6"
        >
          {dict.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-[var(--line-2)] last:border-b-0"
            >
              <AccordionTrigger className="py-5 text-base font-medium text-[var(--ink)] hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="whitespace-pre-line text-sm leading-relaxed text-[var(--muted)]">
                  {item.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
