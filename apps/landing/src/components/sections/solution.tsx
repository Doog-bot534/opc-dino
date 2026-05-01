import { ArrowRight, Globe2, Link2, Sparkles } from "lucide-react";
import { t } from "@/i18n";

const stepIcons = [Link2, Sparkles, Globe2];

export function Solution() {
  const dict = t.solution;

  return (
    <section
      id="solution"
      className="border-t border-[var(--line-2)] bg-[var(--bg)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-medium tracking-[-0.02em] text-[var(--ink)] text-3xl sm:text-4xl md:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-balance text-base text-[var(--muted)]">
            {dict.subtitle}
          </p>
        </div>

        {/* 流程图：URL → AI → 多平台 */}
        <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3">
          {dict.steps.map((step, i) => {
            const Icon = stepIcons[i] ?? Sparkles;
            return (
              <div
                key={i}
                className="relative flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--bg-1)] p-7"
              >
                <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted-2)]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--brand-dim)] text-[11px] font-semibold text-[var(--brand)]">
                    {i + 1}
                  </span>
                  Step {i + 1}
                </div>
                <Icon className="mb-3 h-7 w-7 text-[var(--brand)]" />
                <h3 className="text-lg font-semibold text-[var(--ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {step.description}
                </p>
                {i < dict.steps.length - 1 ? (
                  <ArrowRight
                    aria-hidden
                    className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-[var(--muted-2)] md:block"
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        {/* 代码示意 */}
        <div className="mt-12 mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_1px_3px_rgba(17,24,39,0.04)]">
          <div className="flex items-center gap-1.5 border-b border-[var(--line-2)] bg-[var(--bg-1)] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs text-[var(--muted)]">opc launch</span>
          </div>
          <pre className="overflow-x-auto p-5 text-xs leading-relaxed sm:p-6 sm:text-sm">
            <code className="font-mono text-[var(--muted)]">
              <span className="text-[var(--brand)]">$</span> opc launch
              https://your-product.com{"\n"}
              <span className="text-[var(--muted-2)]">
                {"  → 抓取产品信息..."}
              </span>
              {"\n"}
              <span className="text-[var(--muted-2)]">
                {"  → AI 生成 7 平台原生格式内容..."}
              </span>
              {"\n"}
              <span className="text-[var(--ink)]">
                {"  ✓ Reddit · X · Threads · Dev.to · 即刻 · V2EX · PH"}
              </span>
              {"\n"}
              <span className="text-[var(--muted-2)]">
                {"  → 一键发布或跳转目标平台"}
              </span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
