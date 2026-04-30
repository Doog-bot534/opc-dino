import { ArrowRight, Globe2, Link2, Sparkles } from "lucide-react";
import { t } from "@/i18n";

const stepIcons = [Link2, Sparkles, Globe2];

export function Solution() {
  const dict = t.solution;

  return (
    <section
      id="solution"
      className="border-t border-border/50 bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-3 text-balance text-muted-foreground">
            {dict.subtitle}
          </p>
        </div>

        {/* 流程图：URL → AI → 多平台 */}
        <div className="mt-12 grid items-stretch gap-4 sm:gap-6 md:grid-cols-3">
          {dict.steps.map((step, i) => {
            const Icon = stepIcons[i] ?? Sparkles;
            return (
              <div
                key={i}
                className="relative flex flex-col rounded-xl border border-border/60 bg-card/40 p-6 backdrop-blur"
              >
                <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
                    {i + 1}
                  </span>
                  Step {i + 1}
                </div>
                <Icon className="mb-3 h-6 w-6 text-foreground" />
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
                {i < dict.steps.length - 1 ? (
                  <ArrowRight
                    aria-hidden
                    className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-muted-foreground/50 md:block"
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        {/* 代码示意 */}
        <div className="mt-10 mx-auto max-w-3xl overflow-hidden rounded-xl border border-border/60 bg-card/30 backdrop-blur">
          <div className="flex items-center gap-1.5 border-b border-border/50 bg-muted/30 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-muted-foreground">
              opc launch
            </span>
          </div>
          <pre className="overflow-x-auto p-4 text-xs leading-relaxed sm:p-5 sm:text-sm">
            <code className="font-mono text-muted-foreground">
              <span className="text-emerald-400">$</span> opc launch
              https://your-product.com{"\n"}
              <span className="text-muted-foreground/60">
                {"  → 抓取产品信息..."}
              </span>
              {"\n"}
              <span className="text-muted-foreground/60">
                {"  → AI 生成 7 平台原生格式内容..."}
              </span>
              {"\n"}
              <span className="text-foreground">
                {"  ✓ Reddit · X · Threads · Dev.to · 即刻 · V2EX · PH"}
              </span>
              {"\n"}
              <span className="text-muted-foreground/60">
                {"  → 一键发布或跳转目标平台"}
              </span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
