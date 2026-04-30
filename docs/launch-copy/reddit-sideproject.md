# Reddit r/SideProject — Postwave

> Subreddit: r/SideProject (also viable: r/indiehackers, r/Entrepreneur, r/startups)
> Tone: honest, technical, anti-marketing. Reddit punishes hype hard.
> Word count target: ~500 words main post + ~150 self-comment
> Emoji rule: zero. Reddit hates emoji in /r/SideProject.

---

## 3 candidate titles (pick one based on subreddit mood)

1. `I'm building a multi-platform launcher for indie hackers (global + China). Here's what I learned about the gap.`
2. `Built 8 side projects, each died at the same step: distribution. So I'm building the tool I wish I had.`
3. `Why no launch tool covers both western platforms and China — and what I'm building to fix it`

**Recommendation**: title 2 — most honest, most clickable, fits SideProject vibe.

---

## Main post

```
TL;DR: Building Postwave — paste your product URL, AI generates 10+ platform-native posts (Reddit / X / Threads / Dev.to + China's Jike / V2EX), one-click publish or one-click jump. BYO API key. $19/mo. Phase 0 waitlist now: {{LANDING_URL}}

---

I've shipped 8 side projects in the past 3 years. Every single one died at the same step: distribution.

Building the product takes 3 months. Launching it takes 1 day. Then crickets.

Two weeks ago I finally stopped blaming myself and started looking at the tools. Here's what I found.

What I researched

- Buffer / Hootsuite / Postiz: social schedulers. They serve influencers, not product launchers. Also: zero China platforms.
- Antxiao'er / Yimei (China's equivalents): zero western platforms. UI from 2015.
- Typefully: Twitter-only, beautifully built, but you still need 6 other tools.
- Hypefury: great cross-platform autoplugs, but no China.
- Product Hunt / Indie Hackers: those are sites, not tools.

For an indie shipping to both global + China audiences, the current stack is: Buffer ($30/mo) + Antxiao'er ($14/mo) + manual everything for HN / IH / Dev.to. Two paid tools, two writing styles, two UIs to learn.

Nobody is doing both sides seriously. That's the gap.

What Postwave does

Input: your product URL.
Output: native-format content for each platform — Reddit longform, X thread, Threads carousel, Dev.to article, IH pitch, Jike short hook, V2EX tech post.

Distribution split:
- Direct API (OAuth): Reddit, X, Threads, Mastodon, Dev.to, Bluesky
- Semi-auto (draft + one-click jump): Product Hunt, Hacker News, Indie Hackers, LinkedIn
- Container proxy (Playwright + Electron): Jike, V2EX (China)
- Generate-only (anti-bot too aggressive): Xiaohongshu, Zhihu, Bilibili, Weibo

After publish: data pulled at 24h / 72h / 168h to show which platform actually drove signups for your specific product.

Tech stack (for the curious)

- Next.js 15 + tRPC + shadcn/ui (Vercel)
- Postgres + Drizzle (Neon)
- BullMQ + Redis (Upstash)
- Anthropic SDK, Claude Sonnet 4.6 + Opus 4.7 with prompt caching
- China rail: Electron + Playwright on Aliyun ECS (Vercel can't run chromium)
- Stripe for billing

Three deliberate constraints

1. BYO API key. You bring your X / Reddit / Threads tokens. We never charge you for X's $0.01/post — that's between you and X.
2. China rail starts with 2 platforms only (Jike + V2EX). Not 6. Container automation is a maintenance nightmare and I'd rather do 2 deeply than 6 shallow.
3. Skipping affiliate tracking, revenue dashboards, and "growth automation" buzzwords. Stripe Atlas already solves billing.

Current status

Phase 0 — landing + waitlist. This Reddit post itself is a dogfood test (written 50% with Postwave's AI prompt-template draft, 50% manual). I'm publishing every Phase 0 metric publicly: which platforms convert, what the CTR was, where I got rate-limited.

Phase 1 (MVP, 4-6 weeks): direct-API on 6 western platforms + China rail on Jike/V2EX.
Phase 2 (3-6 months): demand-pool integration — scrape r/SaaS, r/SideProject, Jike, V2EX to surface real indie pain points in real time.

Pricing (when Phase 1 ships):
- Solo $19/mo (1 product)
- Maker $29/mo (3 products) — recommended
- Studio $59/mo (10 products + multi-account matrix)

First 100 waitlist signups: 50% off year 1, locked permanently.

Asks

- If you've tried Postiz / Buffer / Typefully / Hypefury for indie launches, what made you stop? Honest critique > praise here.
- If you're shipping to both global + China, how many tools are you running and how much does it cost you per month?
- If you've dealt with China platform anti-bot (Jike, Xiaohongshu, Bilibili), I'd love to know which traps to avoid.

Waitlist: {{LANDING_URL}}
```

---

## Self-comment (post immediately after submission, top-comment yourself)

```
Few things I left out of the post to keep it short:

1. Why "Postwave" — Post (verb) + Wave (one product = one wave reaching multiple shores). Domain is postwave.so because every reasonable .com is taken in 2026 and I'm okay with that.

2. Self-hosting — I'll open-source the platform-adapter layer once Phase 1 ships (following Postiz's model). The AI prompt templates will stay closed.

3. Risk I'm most worried about — China platform bans. My answer: rate limit hard (max 3 posts per platform per day per account), keep cookies isolated per user, give users a "generate-only, I'll paste manually" fallback they can switch to anytime.

4. Why not Phase 3 / monetization tracking — researched it, decided affiliate + revenue dashboards are commodity (Stripe Atlas, Paddle, Lemon Squeezy already solve them). I'd rather go deep on launching + demand discovery than wide on commodity features.

Happy to answer specific tech questions.
```

---

## Posting tips

- **Best time**: Tuesday/Wednesday 9-11am EST (US peak indie hacker activity on Reddit)
- **Don't link drop**: link goes ONLY at top (TL;DR) and bottom (Asks). One mid-post link triggers spam filters.
- **No images** in the post body for r/SideProject — text posts perform 2-3x better than link posts here.
- **Engagement window**: stay online for 4 hours after posting. Reply to every comment in <30min for the first 2 hours; Reddit ranking algo weights early comment velocity heavily.
- **Cross-post strategy**: Wait 48h, then cross-post (don't repost — use Reddit's cross-post feature) to r/indiehackers and r/Entrepreneur. Same title, identical content; Reddit allows cross-posts but penalizes verbatim reposts.

---

## Comment reply templates

If accused of "another launch tool":
> Fair. The differentiator I'm betting on is the China rail + the demand-pool Phase 2. If those don't matter to you, Postiz is genuinely good and free to self-host. I'd rather lose a sale than oversell.

If asked "why BYO API key":
> Two reasons. (1) X charges $0.01 per post via API — if I batch buy I have to either raise prices or rate-limit; making it BYO means cost transparency for you. (2) Third-party posting is the #1 cause of platform bans. Your token, your account, lowest risk.

If asked about ban risk on China rail:
> Honest answer: nonzero. We rate-limit to 3 posts/platform/day, isolate cookies per user, never share infra with other users. If a platform clamps down (likely for Xiaohongshu, why we skip it), we drop direct posting and fall back to generate-only mode. Users can also self-toggle to that mode anytime.

If asked "are you open source":
> Phase 1 ships closed. Once stable, I'll open-source the platform-adapter layer (so you can self-host like Postiz). AI prompt templates stay closed for now — they're the moat.
