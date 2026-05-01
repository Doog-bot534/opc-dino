# V2EX 发布文案 — OPC.Dino

> 节点：/go/create
> 字数：~700
> 风格：技术宅口吻，介绍架构选型、当前进度，不要营销腔
> 备注：V2EX 用户对营销话术极敏感，多放技术细节、少夸自己

---

## 标题（≤80 字符）

```
[新项目] OPC.Dino — 出海 indie 的多平台 launcher，海外 API 直发 + 中国 Electron 容器
```

备选标题（如果第一条被 mod 限流）：
```
做了一个独立开发者的多平台发布工具，聊聊架构选型 — OPC.Dino
```

---

## 正文

```
背景

我自己手上有 8+ 个独立项目（Juicy / WikiBase / GEO / TON BID 之类），每个都卡在同一个地方：产品做完了，不知道怎么推。

调研了一圈现状：

- Buffer / Hootsuite / Postiz：海外 social scheduler，0 中国平台
- 蚁小二 / 易媒：中国自媒体分发，0 海外
- Typefully：只做 Twitter
- Product Hunt / IH：是站不是工具

出海中国 indie 现状是：订两套（Buffer $30 + 蚁小二 ¥99/月），还要分别学两个工具的口吻。

这就是我做 OPC.Dino 的起因。

产品定义

输入：产品 URL
输出：10+ 个平台各自的原生格式内容 + 一键发布或一键跳转
回收：24h / 72h / 168h 数据曲线

平台分类：

- API 直发（OAuth）：Reddit / X / Threads / Mastodon / Dev.to / Bluesky
- 半自动（生成稿 + 跳转）：Product Hunt / Hacker News / Indie Hackers / LinkedIn
- 容器代理（Playwright）：即刻 / V2EX
- 仅生成稿（反爬太强 / 政策敏感）：小红书 / 知乎 / B 站 / 微博

技术栈

- 前端 / API：Next.js 15 (App Router) + tRPC + Tailwind + shadcn/ui，部署 Vercel
- DB：Postgres on Neon + Drizzle ORM
- Auth：Clerk（也在评估 Better Auth）
- Job queue：BullMQ + Redis (Upstash)
- AI：Anthropic SDK，Claude Sonnet 4.6 主用 + Opus 4.7 复杂场景，含 prompt caching
- 中国轨：Electron + Playwright + chromium 多账号容器，部署阿里云 ECS（Vercel 跑不了 Playwright）
- 支付：Stripe（海外）
- 邮件：Resend / Loops 二选一，做 waitlist + transactional

几个有意思的决策点

1. BYO API key（学 Postiz）

X 的 API 现在 $0.01/post 起，如果我们替用户买，要么涨订阅价、要么限频。索性让用户自己注册 X 开发者账号、拿 token，我们零成本调。Reddit / Threads 同理。

代价是 onboarding 多 5-10 分钟，收益是单价压在 $19，用户用多用少和我无关。

2. 中国轨先做 2 个，不全做

Electron 容器维护成本很高（chromium 升级、cookie 失效、反爬变化），和海外平台数量根本不是一个数量级。所以 v0 中国轨**只做即刻 + V2EX 两个**——这两个反爬中等、ToS 相对温和。小红书 Ares 那个反爬体系，我没本事在 Phase 1 内搞定，先生成稿让用户手动发。

3. 数据回收 24/72/168h 三节点

学 Hypefury Autoplugs 的玩法：发完不是结束，发后 24h 拉一次数据、72h 再拉、168h 再拉。三个节点画曲线，能比单点数据看出"这条帖子是热度型还是长尾型"，再决定要不要追评 / cross-post。

当前进度

Phase 0 — landing + waitlist 阶段。这条帖子也是用 OPC.Dino 的内容生成（人工 + AI 辅助）方式发的，相当于 dogfood 第 0 个版本。

Roadmap：

- Phase 0（这两周）：landing + waitlist + 7 平台 dogfood 推
- Phase 1（4-6 周）：MVP，核心 10 个平台
- Phase 2（3-6 个月后）：需求池接入（爬 Reddit / 即刻 / V2EX 自动发现独立开发者机会）

价格定档（待 Phase 1 上线）：$19 / $29 / $59，BYO API key。

不做的部分

- Affiliate / 分销 tracking — 用 Stripe Atlas 自己解决就够
- Revenue tracking — 不是核心痛点
- Phase 3 变现段砍掉，专注前两段

waitlist：https://opc.dinolabs.online

欢迎技术层面拍砖：

- BullMQ vs Inngest 你会选哪个？我现在倾向 BullMQ + Upstash Redis，因为 Vercel 上 cron 不可控
- Electron 容器的 chromium 版本怎么 pin？(我现在 pin 在 124，看你们 V2EX 客户端反爬有没有踩过坑)
- Phase 2 爬虫部分，你们觉得 Python (scrapy) 还是 Node (crawlee) 更顺手？

会蹲评论。
```

---

## 字数核对

- 正文（不含标题）：约 1100 字符（中英混排实测约 700 中文字 + 代码符号）
- V2EX 单帖无硬上限，但超过 1500 字会折叠 — 这个长度刚好

---

## 发布建议

- **时段**：周二/周三上午 10:00-11:30 或晚上 22:00-23:30（V2EX 程序员上班摸鱼时段）
- **节点选择**：`/go/create` 主推；如果想多曝光，发完 12h 后再交叉发到 `/go/programmer`（V2EX 允许同帖 cross 节点，但要间隔）
- **不要**：周五晚上发（V2EX 周末活跃度低）；不要 @ 名人（V2EX 极反感）
- **首楼自评**（发完立刻补一条）：列一个 "目前已做 / 在做 / 待做" 的 checklist，给技术宅一种"看得见进度"的感觉

---

## 应对常见拍砖

如果有人质疑"又一个发布工具"：
> Postiz 我用过，海外 5 个 channel 触顶，且 0 中国平台。蚁小二我也试过，0 海外平台，且 UI 是 2015 年水准。我做的是这两个真空地带的交集。

如果有人质疑"BYO API key 用户会嫌麻烦"：
> 是会嫌。但 Postiz GitHub star 11k，证明这个模式能跑通。我们做的是把 onboarding 引导做得比 Postiz 更傻瓜，把"嫌麻烦"压到 5 分钟以内。

如果有人质疑"Electron 容器维护噩梦"：
> 完全同意，这是我最大的担忧。所以中国轨 v0 只做 2 个、不全做。如果即刻或 V2EX 反爬升级把我打死，我就降级到"只生成稿"模式，不绑死命脉在容器上。

如果有人问"开源吗"：
> Phase 1 上线后会开源 platforms adapter 部分（学 Postiz 的 self-hosted 模式）。核心 AI prompt 不开。
