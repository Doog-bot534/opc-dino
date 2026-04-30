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
      className="border-t border-border/50 bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-3 text-balance text-muted-foreground">
            {dict.subtitle}
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-xl border border-border/60 bg-card/30 px-5 py-1 backdrop-blur"
        >
          {dict.items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="py-4 text-base font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent>
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
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
