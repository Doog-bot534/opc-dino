# Product Hunt — OPC.Dino (Coming Soon)

> Phase: PH "Coming Soon" page (pre-launch waitlist on PH itself)
> Goal: collect upvote-pledges from PH users before actual launch day
> Note: PH "Coming Soon" doesn't ship to the daily leaderboard — purpose is to warm up an audience for the real launch (Phase 1 end)

---

## Tagline candidates (≤60 chars each — PH hard limit)

1. `Launch your indie product on 10+ platforms — global + China` (60 chars exactly)
2. `One URL → 10+ platform-native posts. Indie launch, simplified.` (62 chars — needs trim)
3. `AI launches your product everywhere. Including the China rail.` (61 chars — needs trim)
4. `Paste your product URL. Reach indie hackers everywhere.` (54 chars)
5. `The launch tool indie hackers shipping to both shores need.` (59 chars)

**Recommendation**: candidate 1. Spells out the differentiator (global + China) in the tagline itself, which is the entire pitch.

If candidate 1 is too long, fallback: candidate 4 — wider appeal, less specific but still clear.

---

## 60-second launch video script — English version

> Format: screen recording + voiceover. No talking head. Music: minimal lofi. Caption track included.

```
[0:00–0:05] HOOK — text on dark screen
"I've shipped 8 side projects. Every one died at distribution."

[0:05–0:12] PROBLEM montage
Voiceover: "Building takes months. Launching is one day. Then nothing."
Visual: timer counting 90 days → empty waitlist counter "4 signups"

[0:12–0:22] DEMO — paste URL
Voiceover: "OPC.Dino changes one thing. You paste your product URL —"
Visual: cursor pastes "yourproduct.com" into OPC.Dino

[0:22–0:35] DEMO — multi-platform output
Voiceover: "— and AI generates native-format content for every platform.
Reddit longform. X thread. Threads carousel. Dev.to article. Indie Hackers pitch.
And — this is the part nobody else does — Jike and V2EX for the China audience."
Visual: cards cascade out, each labeled with platform logo and content preview

[0:35–0:45] DEMO — publish
Voiceover: "One click to publish where APIs allow. One click to jump where they don't.
24, 72, 168 hour data pulled automatically — so you know which platform actually worked."
Visual: publish button → status dots turn green → data graph appears

[0:45–0:55] PRICING + INTEGRITY
Voiceover: "Bring your own API keys. Nineteen dollars a month for Solo. We never touch your tokens."
Visual: pricing card + lock icon

[0:55–1:00] CTA
Voiceover: "Phase 0 waitlist open now. First hundred get fifty percent off year one."
Visual: opc.dinolabs.online URL + "Join Waitlist" button glow
```

---

## 60-second launch video script — 中文版

> 同样的画面，中文配音。微博 / 即刻 / 视频号 / 小红书 短视频版同步用。

```
[0:00–0:05] 钩子文字
"做了 8 个独立项目。每一个都死在了发布这一步。"

[0:05–0:12] 问题蒙太奇
旁白："写代码 3 个月。发布 1 天。然后没人来。"
画面：90 天倒计时 → waitlist 计数器卡在 4

[0:12–0:22] 演示 — 粘贴 URL
旁白："OPC.Dino 只改一件事。你贴上产品 URL —"
画面：光标把 "yourproduct.com" 粘进 OPC.Dino

[0:22–0:35] 演示 — 多平台输出
旁白："— AI 帮你拆出每个平台的原生内容。
Reddit 长帖、X thread、Dev.to 博客、Indie Hackers pitch。
还有 — 别人都没做的那部分 — 即刻和 V2EX，中文圈也覆盖。"
画面：内容卡瀑布展开，每张配平台 logo + 文案预览

[0:35–0:45] 演示 — 发布
旁白："API 直发的一键发出。半自动的一键跳转。
24/72/168 小时自动回收数据 — 哪个平台对你的产品最有效，一目了然。"
画面：发布按钮 → 状态点变绿 → 数据曲线浮现

[0:45–0:55] 价格 + 透明
旁白："BYO API key — 你自己的账号、你自己的额度。$19/月起。我们永远不持有你的密码。"
画面：价格卡 + 锁图标

[0:55–1:00] CTA
旁白："Phase 0 waitlist 开放。前 100 名首年五折永久锁定。"
画面：opc.dinolabs.online + "加入 Waitlist" 按钮高亮
```

---

## Detailed description (PH "Coming Soon" page body, ~350 words)

```
OPC.Dino is a multi-platform launcher for indie hackers and one-person companies (OPC) shipping products to both global and China audiences.

The problem

Indie shipping is now lopsided: writing code is fast, distribution is slow. Existing tools force a choice: Buffer/Postiz/Typefully cover the western web but ignore China; Antxiao'er/Yimei cover China but ignore the west. An indie shipping to both pays for two tools, learns two writing styles, and copies content across by hand.

The solution

Paste your product URL. OPC.Dino's AI reads it and generates native-format content for each platform — Reddit longform, X thread, Dev.to article, IH pitch, Jike short hook, V2EX tech post — each tuned to that platform's reader, not auto-translated.

For platforms with open APIs (Reddit, X, Threads, Mastodon, Dev.to, Bluesky), OPC.Dino publishes directly via OAuth — using your account, your tokens. For platforms without write APIs (Product Hunt, Hacker News, Indie Hackers, LinkedIn), we generate the draft and one-click jump you to the publish page. For China platforms (Jike, V2EX), we use a Playwright + Electron container running on Aliyun ECS to publish on your behalf, with rate limits and per-user cookie isolation.

After publishing, we pull engagement data at 24h, 72h, and 168h — showing exactly which platform converted for your product.

What's deliberately not in scope

- No affiliate tracking. No revenue dashboards. Stripe Atlas solves those.
- China rail starts with 2 platforms only — we'd rather go deep than wide.
- BYO API key — your tokens, your accounts, your control. We never charge you for X's per-post API fees.

Pricing (when Phase 1 ships, ~6 weeks)

- Solo $19/mo — 1 product
- Maker $29/mo — 3 products (recommended)
- Studio $59/mo — 10 products + multi-account matrix

First 100 waitlist signups: 50% off year 1, locked permanently.

Built by one indie hacker (me), in public. Every Phase 0 metric is published. Every architectural decision is up for critique.
```

---

## 5 product screenshot specs (for PH gallery)

> PH allows up to 8 images. Use 5 for the Coming Soon page; reserve 3 for the actual launch day with v1 product screenshots.

### Screenshot 1 — Hero

**What to show**: OPC.Dino landing page hero. URL input field with placeholder `https://your-product.com`. Below it: cascading platform cards (Reddit, X, Dev.to, Jike, V2EX, IH).

**Caption**: "One URL in. Ten+ platform-native posts out. Both global and China — finally one tool."

### Screenshot 2 — Platform coverage matrix

**What to show**: a clean grid. Rows = platforms (10+), columns = "Direct API / Semi-auto / Container / Generate-only". Green checkmarks per row showing which method per platform.

**Caption**: "Every platform handled the right way. APIs where they exist, smart fallbacks where they don't."

### Screenshot 3 — Content preview cards

**What to show**: side-by-side preview of the same product launched as 4 different platform posts — Reddit (long format), X (thread), Dev.to (technical blog), Jike (Chinese short post). Each in its native UI skin.

**Caption**: "AI doesn't translate. It rewrites for each platform's readers."

### Screenshot 4 — 24/72/168h analytics

**What to show**: a dashboard with three time-series curves — Reddit, Dev.to, V2EX — showing impressions and waitlist conversions at 24/72/168 hour markers. Highlight which platform drove most signups.

**Caption**: "Know which platform actually worked. Not the loudest — the one that converted."

### Screenshot 5 — BYO API key flow

**What to show**: settings screen with provider rows (X, Reddit, Threads, Mastodon, Dev.to). Each shows OAuth status badge ("Connected" / "Connect"). One row expanded with a 3-step inline guide.

**Caption**: "Your accounts, your keys, your control. OPC.Dino never holds your passwords."

---

## PH-specific posting tips

- **Coming Soon teaser**: post 4-6 weeks before real launch. Build email list via PH's "Notify me" button.
- **Maker comment**: write a maker intro comment (~150 words) to post 30 min after page goes live. Reuse the "About / Why" content.
- **Hunter strategy**: don't self-hunt — find a hunter with 1k+ followers who launches indie tools. Post on r/ProductHunt and Twitter to find one.
- **Real launch day timing**: 12:01am PST on a Tuesday or Wednesday (weekend launches under-perform 40-60% on PH).
- **Don't ship to PH while still in waitlist mode** — PH's "no upvote begging" rule punishes coming-soon-y products that submit prematurely.
