import { dict as zhDict } from "./zh-CN";
import { dict as enDict } from "./en";

export type Locale = "en" | "zh";
export const DEFAULT_LOCALE: Locale = "en";

export const dicts: Record<Locale, typeof zhDict> = {
  en: enDict,
  zh: zhDict,
};

export type { Dict, Part } from "./zh-CN";
