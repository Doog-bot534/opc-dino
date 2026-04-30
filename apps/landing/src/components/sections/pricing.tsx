import Link from "next/link";
import { Check } from "lucide-react";

import { t } from "@/i18n";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Pricing() {
  const dict = t.pricing;

  return (
    <section
      id="pricing"
      className="border-t border-border/50 bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-3 text-balance text-sm text-muted-foreground sm:text-base">
            {dict.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {dict.plans.map((plan) => {
            const recommended = plan.recommended;
            return (
              <Card
                key={plan.id}
                className={cn(
                  "relative flex flex-col gap-5 p-6",
                  recommended
                    ? "ring-2 ring-primary/70 shadow-lg shadow-primary/10"
                    : "ring-foreground/10",
                )}
              >
                {recommended ? (
                  <Badge
                    variant="default"
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3"
                  >
                    {dict.recommendedBadge}
                  </Badge>
                ) : null}

                <CardHeader className="!px-0">
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {plan.name}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {plan.tagline}
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight text-foreground">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {dict.perMonth}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-4 !px-0">
                  <ul className="flex flex-1 flex-col gap-3">
                    {plan.features.map((f, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-foreground/90"
                      >
                        <Check
                          className={cn(
                            "mt-0.5 h-4 w-4 shrink-0",
                            recommended
                              ? "text-primary"
                              : "text-muted-foreground",
                          )}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    variant={recommended ? "default" : "outline"}
                    className="w-full"
                  >
                    <Link href="#waitlist">{dict.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground">
          {dict.earlyBird}
        </p>
      </div>
    </section>
  );
}
