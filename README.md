# OPC.Dino / opc.dinolabs.online

> 品牌名：**OPC.Dino** · 域名：[opc.dinolabs.online](https://opc.dinolabs.online)
> 当前阶段：Phase 0（landing + waitlist）
> 启动日期：2026-04-30
> 命名调研：`docs/launch-copy/brand-naming.md`

服务独立开发者 / OPC（一人公司）的产品推广 SaaS：
- 输入产品 URL → AI 生成 6-7 个平台的原生格式内容包
- 海外（Reddit / X / Threads / Mastodon / Dev.to / Bluesky / PH / HN / IH）+ 中国（即刻 / V2EX）双轨
- BYO API key 模式（用户自带平台账号 OAuth）
- $19/$29/$59 订阅

## 文档

- 完整 Plan：`/Volumes/硬盘/研究/OPC操作系统/PLAN.md`
- 需求池（Phase 2 数据源）：`/Volumes/硬盘/研究/需求池/`
- Notion 工作区：[需求池](https://app.notion.com/p/352a46fb3ce181168103e33e63dabea0)

## 目录结构

```
opc-launchos/
├── apps/
│   ├── landing/         # Phase 0 — landing + waitlist
│   ├── web/             # Phase 1 — 主产品（待开发）
│   └── electron-worker/ # Phase 1 — 中国平台自动化（待开发）
├── packages/
│   ├── db/              # Drizzle schema
│   ├── platforms/       # 各平台 adapter
│   ├── ai/              # Anthropic SDK + prompts
│   └── ui/              # 共享组件
├── docs/
│   ├── launch-copy/     # Phase 0 各平台发布文案
│   ├── platform-cheatsheet.md
│   └── prompts/         # Phase 1 各平台内容生成 prompt 模板
└── scraper/             # Phase 2 需求池爬虫
```

## Phase 0 KPIs

- ✅ Landing 上线
- ✅ 7 平台至少 5 个发了文案
- ⚠️ Gating signal：Waitlist <50 → 暂停项目重评估
