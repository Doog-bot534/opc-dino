import { Clock, Languages, Megaphone } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { t } from "@/i18n";

const icons = [Megaphone, Clock, Languages];

export function Pain() {
  const dict = t.pain;
  return (
    <section className="border-t border-border/50 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-3 text-balance text-muted-foreground">
            {dict.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((item, i) => {
            const Icon = icons[i] ?? Megaphone;
            return (
              <Card
                key={i}
                className="border-border/60 bg-card/40 backdrop-blur transition-colors hover:border-border"
              >
                <CardHeader>
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-secondary text-secondary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
