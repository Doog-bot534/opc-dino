# OPC.Dino Landing

> Phase 0 — landing + waitlist
> 域名：[opcdino.so](https://opcdino.so)
> 文案来源：`/Volumes/硬盘/项目/opc-launchos/docs/launch-copy/landing-copy.md`

## 本地开发

```bash
pnpm install
pnpm dev   # http://localhost:3000
```

## 构建

```bash
pnpm build
pnpm start
```

## 结构

```
src/
├── app/
│   ├── api/waitlist/route.ts   # Resend audience 接入
│   ├── layout.tsx              # 根 layout + SEO meta
│   └── page.tsx                # 拼装 7 个 section
├── components/
│   ├── sections/               # 7 个 landing 区块
│   │   ├── hero.tsx
│   │   ├── pain.tsx
│   │   ├── solution.tsx
│   │   ├── platforms.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   └── footer-cta.tsx
│   ├── site-nav.tsx            # 顶部导航
│   ├── waitlist-form.tsx       # 复用的邮箱表单
│   └── ui/                     # shadcn 组件
├── i18n/
│   ├── zh-CN.ts                # 主文案（Phase 0 仅中文）
│   ├── en.ts                   # stub，Phase 1 再补
│   └── index.ts                # 默认导出 zh-CN
└── lib/
    ├── platforms.ts            # 平台清单（10 海外 + 6 中国）
    └── utils.ts                # cn() 工具
```

## 环境变量

- `NEXT_PUBLIC_SITE_URL` — 站点 URL，默认 `https://opcdino.so`
- `RESEND_API_KEY` — Resend 后端 key
- `RESEND_AUDIENCE_ID` — waitlist 对应的 Resend audience

## 部署

Vercel 直连此 monorepo 子目录 `apps/landing/`。
