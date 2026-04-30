import { t } from "@/i18n";
import { platforms } from "@/lib/platforms";
import { Badge } from "@/components/ui/badge";
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

/** 没有 simple-icons 的中国平台用文字 + 颜色徽章兜底 */
const FALLBACK_BG: Record<string, string> = {
  jike: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  v2ex: "bg-zinc-500/15 text-zinc-200 border-zinc-500/30",
  linkedin: "bg-sky-600/20 text-sky-300 border-sky-500/30",
};

const STATUS_VARIANT: Record<Status, "default" | "secondary" | "outline"> = {
  api: "default",
  semi: "secondary",
  draft: "outline",
};

function PlatformCard({
  slug,
  name,
  icon,
}: {
  slug: string;
  name: string;
  icon: string | null;
}) {
  const status = STATUS[slug] ?? "draft";
  const statusLabel = t.platforms.statusLabels[status];

  return (
    <div className="group relative flex flex-col items-center justify-between gap-3 rounded-xl border border-border/60 bg-card/40 p-4 backdrop-blur transition-colors hover:border-border">
      <div className="flex h-10 w-10 items-center justify-center">
        {icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`https://cdn.simpleicons.org/${icon}/ffffff`}
            alt={name}
            width={32}
            height={32}
            className="h-8 w-8 opacity-80 transition-opacity group-hover:opacity-100"
          />
        ) : (
          <span
            className={cn(
              "grid h-9 w-9 place-items-center rounded-md border text-xs font-semibold",
              FALLBACK_BG[slug] ?? "bg-secondary/40 text-secondary-foreground border-border/40",
            )}
          >
            {name.slice(0, 2)}
          </span>
        )}
      </div>
      <div className="text-sm font-medium text-foreground">{name}</div>
      <Badge variant={STATUS_VARIANT[status]} className="text-[10px]">
        {statusLabel}
      </Badge>
    </div>
  );
}

export function Platforms() {
  const dict = t.platforms;
  const overseas = platforms.filter((p) => p.region === "overseas");
  const china = platforms.filter((p) => p.region === "china");

  return (
    <section
      id="platforms"
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

        {/* 海外 */}
        <div className="mt-12">
          <div className="mb-4 flex items-center gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {dict.overseasLabel}
            </h3>
            <span className="text-xs text-muted-foreground/60">
              · {overseas.length} 个
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {overseas.map((p) => (
              <PlatformCard key={p.slug} {...p} />
            ))}
          </div>
        </div>

        {/* 中国 */}
        <div className="mt-12">
          <div className="mb-4 flex items-center gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {dict.chinaLabel}
            </h3>
            <span className="text-xs text-muted-foreground/60">
              · {china.length} 个
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {china.map((p) => (
              <PlatformCard key={p.slug} {...p} />
            ))}
          </div>
        </div>

        {/* 透明声明 */}
        <p className="mx-auto mt-12 max-w-3xl rounded-lg border border-border/40 bg-muted/20 p-4 text-center text-xs leading-relaxed text-muted-foreground">
          {dict.transparencyNote}
        </p>
      </div>
    </section>
  );
}
