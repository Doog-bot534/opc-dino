import { dict as zhCN } from "./zh-CN";

export type Locale = "zh-CN" | "en";

// Phase 0：仅中文。语言切换 UI 待 Phase 1。
export const t = zhCN;
export type { Dict } from "./zh-CN";
