"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChapterHead } from "@/components/chapter-head";
import { Parts } from "@/components/parts";
import { useLocale } from "@/lib/locale-provider";

export function FAQ() {
  const { t } = useLocale();
  const dict = t.faq;
  return (
    <section
      id="faq"
      className="border-t border-[var(--line-2)] bg-[var(--bg)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <ChapterHead {...dict.chapter} />

        <p className="reveal mb-10 text-base text-[var(--muted)]">
          <Parts parts={dict.titleParts} />
        </p>

        <Accordion
          type="single"
          collapsible
          className="reveal d1 rounded-2xl border border-[var(--line)] bg-[var(--bg-1)] px-6"
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
