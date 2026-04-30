/**
 * 平台清单 — 用于 Platforms 区块和 Phase 1 配置。
 * icon slug 对应 simpleicons.org 的 slug；fallback 用文字 logo。
 */

export type PlatformRegion = "overseas" | "china";

export interface Platform {
  slug: string;
  name: string;
  region: PlatformRegion;
  /** simple-icons slug。某些平台无 icon 时用 null，渲染文字徽标。 */
  icon: string | null;
  /** 品牌色（不一定使用；保留备用） */
  color?: string;
}

export const platforms: Platform[] = [
  // 海外
  { slug: "reddit", name: "Reddit", region: "overseas", icon: "reddit", color: "#FF4500" },
  { slug: "x", name: "X", region: "overseas", icon: "x", color: "#000000" },
  { slug: "threads", name: "Threads", region: "overseas", icon: "threads", color: "#000000" },
  { slug: "mastodon", name: "Mastodon", region: "overseas", icon: "mastodon", color: "#6364FF" },
  { slug: "devto", name: "Dev.to", region: "overseas", icon: "devdotto", color: "#0A0A0A" },
  { slug: "bluesky", name: "Bluesky", region: "overseas", icon: "bluesky", color: "#0085FF" },
  { slug: "producthunt", name: "Product Hunt", region: "overseas", icon: "producthunt", color: "#DA552F" },
  { slug: "hackernews", name: "Hacker News", region: "overseas", icon: "ycombinator", color: "#FF6600" },
  { slug: "indiehackers", name: "Indie Hackers", region: "overseas", icon: "indiehackers", color: "#0E2439" },
  // LinkedIn 已从 simple-icons 移除，用文字徽章兜底
  { slug: "linkedin", name: "LinkedIn", region: "overseas", icon: null, color: "#0A66C2" },

  // 中国
  { slug: "jike", name: "即刻", region: "china", icon: null },
  { slug: "v2ex", name: "V2EX", region: "china", icon: null },
  { slug: "xiaohongshu", name: "小红书", region: "china", icon: "xiaohongshu", color: "#FF2442" },
  { slug: "weibo", name: "微博", region: "china", icon: "sinaweibo", color: "#E6162D" },
  { slug: "bilibili", name: "B站", region: "china", icon: "bilibili", color: "#00A1D6" },
  { slug: "zhihu", name: "知乎", region: "china", icon: "zhihu", color: "#0084FF" },
];
