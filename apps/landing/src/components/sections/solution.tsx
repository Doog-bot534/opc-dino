import { ChapterHead } from "@/components/chapter-head";
import { t } from "@/i18n";

const KEYS = [
  { k: "/ step.01", en: "Paste a URL." },
  { k: "/ step.02", en: "AI splits it 10+ ways." },
  { k: "/ step.03", en: "Publish + collect." },
];

export function Solution() {
  const dict = t.solution;

  return (
    <section
      id="solution"
      className="border-t border-[var(--line-2)] bg-[var(--bg)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ChapterHead
          n="/ 02"
          t="SOLUTION"
          cn="把 launch 做成流水线"
          aside="§ / one URL → 10+ posts"
        />

        <p className="reveal mx-auto mb-12 max-w-3xl text-balance text-lg leading-relaxed text-[var(--ink-2)] sm:text-xl">
          你只做<span className="mark"> 一件事</span>
          <span className="fade">：贴上产品 URL。</span>剩下的{" "}
          <em className="brand">拆解 / 撰写 / 发布 / 回收数据</em>，AI 接管。
          <span className="block mt-2 text-sm text-[var(--muted)]">
            {dict.subtitle}
          </span>
        </p>

        <div className="principles reveal d1">
          {dict.steps.map((step, i) => {
            const meta = KEYS[i] ?? { k: `/ step.0${i + 1}`, en: "" };
            return (
              <div key={i} className="principle">
                <span className="k">{meta.k}</span>
                <h3>
                  <span>{step.title}</span>
                  {meta.en ? <span className="en">{meta.en}</span> : null}
                </h3>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Code/terminal mock — keep as visual anchor under principles */}
        <div className="reveal d2 mt-12 mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_1px_3px_rgba(17,24,39,0.04)]">
          <div className="flex items-center gap-1.5 border-b border-[var(--line-2)] bg-[var(--bg-1)] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--muted)]">
              opc launch
            </span>
          </div>
          <pre className="overflow-x-auto p-5 text-xs leading-relaxed sm:p-6 sm:text-sm">
            <code className="font-[family-name:var(--font-geist-mono)] text-[var(--muted)]">
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
