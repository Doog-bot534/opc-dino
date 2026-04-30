/**
 * Postwave 中文文案
 * ---------------------------------
 * 来源：docs/launch-copy/landing-copy.md（不要改文案，只对结构做适配）
 */

export const dict = {
  meta: {
    siteName: "Postwave",
    siteNameZh: "浪播",
    waitlistCount: 0, // 占位计数，未来从 Resend Audience API 拉取
  },

  nav: {
    pricing: "价格",
    faq: "FAQ",
    waitlist: "加入 waitlist",
  },

  hero: {
    badge: "Phase 0 · 仅开放 waitlist",
    title: "一个 URL，发完所有平台。",
    subtitle:
      "AI 把你的产品拆成 10+ 平台原生内容包 — 海外、中国，一套搞定。",
    ctaPrimary: "加入 Waitlist（早鸟 5 折）",
    ctaSecondary: "看产品 Roadmap →",
    socialProof: "出海 · 中国双轨 · BYO API key",
  },

  pain: {
    title: "做 indie 的人，都在这三件事上反复栽。",
    subtitle: "需求池里的真实引语，改写自一线独立开发者。",
    items: [
      {
        title: "产品做完，没人知道",
        description:
          "你花了 3 个月写代码，发布只用 1 天。然后没人来。最痛的不是不会做，是不知道怎么推。",
      },
      {
        title: "每个平台都要重写一遍",
        description:
          "Reddit 要长帖、X 要 thread、即刻要短钩子、V2EX 要技术细节 — 一个产品发 7 遍写到崩溃。",
      },
      {
        title: "海外工具不懂中国",
        description:
          "Buffer 不发即刻，蚁小二不发 Reddit。出海 indie 现在要订两套工具，每月多花 ¥300。",
      },
    ],
  },

  solution: {
    title: "把 launch 这件事，做成一条流水线。",
    subtitle:
      "你只做一件事：贴上产品 URL。剩下的拆解、撰写、发布、回收数据，AI 接管。",
    steps: [
      {
        title: "贴上产品 URL",
        description:
          "Postwave 用 AI 读完你的产品页面，自动提炼卖点、用户画像和差异化。",
      },
      {
        title: "AI 拆出 10+ 平台原生稿",
        description:
          "中文长帖、英文 thread、技术博客、独立开发者社区 pitch — 每一份都按那个平台用户会读的方式写。",
      },
      {
        title: "一键发布 + 数据回收",
        description:
          "海外 6 平台 OAuth 直发，中国走 Electron 容器代理；24h / 72h / 168h 自动回收阅读、点赞、转化。",
      },
    ],
  },

  platforms: {
    title: "海外 + 中国，一套覆盖。",
    subtitle: "目前我们查到唯一同时认真做这两边的工具。",
    overseasLabel: "海外平台",
    chinaLabel: "中国平台",
    transparencyNote:
      "我们不会替你伪造账号，也不做养号。所有发布都用你自己的账号、你自己的 OAuth / cookie。封号风险由平台 ToS 决定，我们能做的就是降低被识别为机器的概率。",
    statusLabels: {
      api: "API 直发",
      semi: "半自动",
      draft: "暂仅生成稿",
    },
  },

  pricing: {
    title: "一档一档来，不强卖。",
    subtitle:
      "所有档位都是 BYO API key — 你自带 X / Reddit 账号，我们不替你买推文额度。",
    perMonth: "/月",
    cta: "加入 Waitlist",
    recommendedBadge: "推荐",
    earlyBird:
      "Phase 0 加入 waitlist 的前 100 名，正式上线后第一年 5 折永久锁定。",
    plans: [
      {
        id: "solo",
        name: "Solo",
        price: 19,
        tagline: "刚开始 build 的 indie，先用这个",
        features: [
          "1 个产品 / 项目",
          "海外 6 平台 + 中国 2 平台 直发",
          "AI 内容生成 50 次/月",
          "数据回收 24h 节点",
        ],
        recommended: false,
      },
      {
        id: "maker",
        name: "Maker",
        price: 29,
        tagline: "手上 2-3 个项目同时跑，每周都在 launch",
        features: [
          "3 个产品 / 项目",
          "海外 10 平台 + 中国 2 平台 直发 + 4 半自动平台",
          "AI 内容生成 200 次/月",
          "数据回收 24/72/168h 三节点 + 自动追评建议",
        ],
        recommended: true,
      },
      {
        id: "studio",
        name: "Studio",
        price: 59,
        tagline: "一人公司或 2-5 人小团队，多产品矩阵",
        features: [
          "10 个产品 / 项目",
          "全平台覆盖 + 多账号矩阵（每平台最多 3 个账号）",
          "AI 内容生成 1000 次/月 + 自定义品牌口吻训练",
          "优先客服 + 接入 Phase 2 需求池（上线后免费）",
        ],
        recommended: false,
      },
    ],
  },

  faq: {
    title: "你可能在想的几个问题",
    subtitle: "都是我们自己问过自己的。",
    items: [
      {
        q: "什么是 BYO API key？为什么要这么做？",
        a: "Bring-Your-Own API key — 你自己去 X 开发者后台、Reddit OAuth 后台拿到 key/token，填给 Postwave，我们帮你调。两个原因：(1) 平台越来越严，第三方代发是封号高发区，自己的账号最安全。(2) X 的 API 已经收费（$0.01/post 起），我们如果替你买，要么涨订阅费要么限制频率，都不如你自己控成本。整个 OAuth 流程我们做了 step-by-step 引导，不懂技术也能 5 分钟配完。",
      },
      {
        q: "我的账号会被封吗？",
        a: '海外平台用官方 OAuth + 官方 API，按官方速率限制走，被封概率极低（和你自己手动发一样的渠道）。中国平台（即刻 / V2EX）走 Electron 容器代理，模拟真实浏览器；任何自动化都有非零封号风险，对策：默认每平台每天最多 3 帖 / 单账号 cookie 隔离 / 可随时切回"只生成稿、手动复制粘贴"模式。我们不替你保证不被封，只承诺：风险可控、出问题立即停。',
      },
      {
        q: "现在能用吗？",
        a: "还不能。Postwave 在 Phase 0 — landing + waitlist 阶段，预计 2026 年 Q3 内测开放。这个 landing 本身也是用 Postwave 的方式（手动 + AI 辅助）推到 7 个平台的，你正在看的就是 dogfood 第 0 个版本。加入 waitlist 后，我会用邮件公开 build 进度（每 2 周一封，含数据），内测开放时早鸟先进。",
      },
      {
        q: "海外和中国发布有什么差异？",
        a: "海外（Reddit / X / Threads / Dev.to 等）走官方 OAuth，几乎所有平台 API 都很成熟，发布 1 秒到位、数据回收实时。中国（即刻 / V2EX）没有官方写入 API，我们用 Electron + Playwright 跑在阿里云 ECS 上，模拟你浏览器行为发布；速度慢一点（每帖 5-10 秒），数据回收比海外慢半小时。Phase 1 v0 中国轨只做即刻 + V2EX 两个；小红书 / B 站 / 知乎反爬太强 + 政策敏感，只生成稿让你手动去发。",
      },
      {
        q: "我的 API key 和数据安全吗？",
        a: "Key：所有 OAuth token 在 Postgres 用 AES-256 加密存储，加密 key 在环境变量里、不入库。我会发月度 SOC 2 lite 自检报告（Phase 1 上线后）。内容：你的产品 URL、生成文案、发布数据都是你的 — 我们不拿来训练模型、不卖第三方、不用于其他用户内容生成参考。代码：Phase 1 上线后会开源 platforms adapter 部分（学 Postiz 模式），让你可以自托管。",
      },
      {
        q: "Roadmap 是什么？",
        a: 'Phase 0（现在 → 2 周内）：landing + waitlist + dogfood 推自己。Phase 1（4-6 周）：MVP — 海外 10 + 中国 2 平台直发 + AI 内容生成 + 数据回收。Phase 2（3-6 个月后）：需求池接入 — 爬 Reddit / 即刻 / V2EX 自动发现独立开发者机会，从 launcher 升级为"OPC 操作系统"。我不打算做 affiliate / 分销跟踪 / revenue tracking — 那些用 Stripe Atlas 自己解决就够，不是核心痛点。',
      },
    ],
  },

  ctaFooter: {
    title: "先把产品做完，再来想推广 — Postwave 等你。",
    subtitle: "早鸟 waitlist 仅前 100 名享首年 5 折永久锁定。",
    smallNote:
      "由一个独立开发者在做。每两周一封 build 进度邮件，可随时退订。Phase 0 阶段，所有内容用 Postwave 自身（人工 + AI）推送 — 你看到的就是产品在跑自己。",
  },

  waitlistForm: {
    placeholder: "你的邮箱",
    submit: "加入 Waitlist",
    submitting: "提交中…",
    successTitle: "已加入 waitlist",
    successDescription: "我们会第一时间通过邮件通知你产品上线。",
    duplicateTitle: "你已订阅过",
    duplicateDescription: "邮箱已在我们的 waitlist 中，敬请期待。",
    invalidEmail: "请输入有效的邮箱地址",
    serverError: "提交失败，请稍后重试",
    countSuffix: "位独立开发者已加入 waitlist",
  },

  footer: {
    tagline: "由一个独立开发者维护 · build in public",
    copyright: "© 2026 Postwave. All rights reserved.",
    twitter: "Twitter",
    github: "GitHub",
    email: "联系我们",
  },
} as const;

export type Dict = typeof dict;
