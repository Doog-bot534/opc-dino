"use client";

import { ChapterHead } from "@/components/chapter-head";
import { Parts } from "@/components/parts";
import { useLocale } from "@/lib/locale-provider";
import { platforms } from "@/lib/platforms";
import { cn } from "@/lib/utils";

/** 每个平台的发布状态 — 决定徽章显示 */
type Status = "api" | "semi" | "draft";

const STATUS: Record<string, Status> = {
  // 海外
  reddit: "api",
  x: "api",
  threads: "api",
  mastodon: "api",
  devto: "api",
  bluesky: "api",
  producthunt: "semi",
  hackernews: "semi",
  indiehackers: "semi",
  linkedin: "semi",
  // 中国
  jike: "api",
  v2ex: "api",
  xiaohongshu: "draft",
  weibo: "draft",
  bilibili: "draft",
  zhihu: "draft",
};

/** 没有 simple-icons 的中国平台用文字 + 颜色徽章兜底（light theme） */
const FALLBACK_BG: Record<string, string> = {
  jike: "bg-amber-50 text-amber-700 border-amber-200",
  v2ex: "bg-zinc-100 text-zinc-700 border-zinc-300",
  linkedin: "bg-sky-50 text-sky-700 border-sky-200",
};

const STATUS_STYLE: Record<Status, string> = {
  api: "bg-[var(--brand-dim)] text-[var(--brand)] border-[var(--brand)]/20",
  semi: "bg-[var(--bg-2)] text-[var(--ink-2)] border-[var(--line)]",
  draft: "bg-transparent text-[var(--muted)] border-[var(--line)]",
};

function PlatformCard({
  slug,
  name,
  icon,
  statusLabel,
}: {
  slug: string;
  name: string;
  icon: string | null;
  statusLabel: string;
}) {
  const status = STATUS[slug] ?? "draft";

  return (
    <div className="group relative flex flex-col items-center justify-between gap-3 rounded-2xl border border-[var(--line)] bg-[var(--bg-1)] p-5 transition-all hover:border-[var(--brand)]/40 hover:bg-white">
      <div className="flex h-10 w-10 items-center justify-center">
        {icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://cdn.simpleicons.org/${icon}/111827`}
            alt={name}
            width={32}
            height={32}
            className="h-8 w-8 opacity-80 transition-opacity group-hover:opacity-100"
          />
        ) : (
          <span
            className={cn(
              "grid h-9 w-9 place-items-center rounded-xl border text-xs font-semibold",
              FALLBACK_BG[slug] ?? "bg-white text-[var(--ink)] border-[var(--line)]",
            )}
          >
            {name.slice(0, 2)}
          </span>
        )}
      </div>
      <div className="text-sm font-medium text-[var(--ink)]">{name}</div>
      <span
        className={cn(
          "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium",
          STATUS_STYLE[status],
        )}
      >
        {statusLabel}
      </span>
    </div>
  );
}

export function Platforms() {
  const { t } = useLocale();
  const dict = t.platforms;
  const overseas = platforms.filter((p) => p.region === "overseas");
  const china = platforms.filter((p) => p.region === "china");

  return (
    <section
      id="platforms"
      className="border-t border-[var(--line-2)] bg-[var(--bg)] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ChapterHead {...dict.chapter} />

        <p className="reveal mx-auto mb-12 max-w-3xl text-balance text-lg leading-relaxed text-[var(--ink-2)] sm:text-xl">
          <Parts parts={dict.titleParts} />
          <span className="block mt-2 text-sm text-[var(--muted)]">
            {dict.subtitle}
          </span>
        </p>

        {/* 海外 */}
        <div className="reveal d1 mt-4">
          <div className="mb-5 flex items-center gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted-2)]">
              {dict.overseasLabel}
            </h3>
            <span className="text-xs text-[var(--muted-2)]">
              · {overseas.length} {dict.countSuffix}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {overseas.map((p) => {
              const status = STATUS[p.slug] ?? "draft";
              return (
                <PlatformCard
                  key={p.slug}
                  {...p}
                  statusLabel={dict.statusLabels[status]}
                />
              );
            })}
          </div>
        </div>

        {/* 中国 */}
        <div className="reveal d2 mt-12">
          <div className="mb-5 flex items-center gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted-2)]">
              {dict.chinaLabel}
            </h3>
            <span className="text-xs text-[var(--muted-2)]">
              · {china.length} {dict.countSuffix}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {china.map((p) => {
              const status = STATUS[p.slug] ?? "draft";
              return (
                <PlatformCard
                  key={p.slug}
                  {...p}
                  statusLabel={dict.statusLabels[status]}
                />
              );
            })}
          </div>
        </div>

        {/* 透明声明 */}
        <p className="mx-auto mt-14 max-w-3xl rounded-2xl border border-[var(--line)] bg-[var(--bg-1)] p-5 text-center text-xs leading-relaxed text-[var(--muted)]">
          {dict.transparencyNote}
        </p>
      </div>
    </section>
  );
}
