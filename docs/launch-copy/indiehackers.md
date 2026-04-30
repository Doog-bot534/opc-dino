# Indie Hackers — Postwave

> Format: long-form post in IH "Starting Up" or "Building in Public" category
> Length: ~1000 words
> Tone: problem-solution narrative, build-in-public data, ask for help
> Critical: IH readers downvote pure marketing within 30 minutes — must lead with problem and tradeoffs, not features

---

## Title

```
After 8 dead side projects, I figured out what was actually killing them — and started building the fix
```

Alternative titles (if title-test):
- `Why I'm building Postwave: a launcher for indie hackers shipping to both Western and Chinese platforms`
- `The $300/mo two-tool tax on indie hackers shipping globally — and what I'm building instead`

---

## Body

```
I've shipped 8 side projects in 3 years. Juicy (AI trading), WikiBase (knowledge SaaS), GEO Agent, TrustBase, a Telegram mini-app for blind auctions — different niches, different stacks, same outcome.

Each one died at the same point: distribution.

Building each took 2-3 months. Launching each took 1 day. Then crickets — 4 waitlist signups, 12 Reddit upvotes if I was lucky, and a slow drift back into the "shipped but no users" pile.

I kept blaming myself: "I'm bad at marketing. I'm an introvert. I should hire someone."

Two weeks ago I finally stopped self-flagellating and started looking at the actual tools available. What I found is the post.

The Tool Landscape, Honestly

Western web (English-first):
- Buffer / Hootsuite — social schedulers built for influencers and brands. They schedule, they don't compose for indie launches. The 5-channel cap on $30/mo plans is the wall most indies hit.
- Postiz — open-source, BYO API key, technically excellent. But 0 China support, and the UI assumes you already know what you want to post.
- Typefully — beautiful Twitter-only product. You still need 6 other tools.
- Hypefury — autoplugs are great. China: zero.

China web (Chinese-first):
- Antxiao'er ($14/mo), Yimei, Xinbang — auto-publish to Xiaohongshu / Bilibili / WeChat / Weibo. UI from 2015. Western platforms: zero.

Communities:
- Product Hunt, Hacker News, Indie Hackers — these are sites, not tools. You compose by hand.

Demand discovery:
- A few demand-pool products like ExplodingTopics exist for trends. Nothing serious for indie-niche pain extraction.

The Gap

If you're an indie shipping to both global and Chinese audiences (more of us than you think — every Chinese indie hacker on X is in this bucket), your current stack is:

- Buffer ($30) for X / LinkedIn / Threads
- Postiz (free self-hosted) or Typefully ($15) for thread-craft
- Antxiao'er ($14) for Xiaohongshu / Jike / WeChat
- Manual everything for Reddit, HN, IH, Dev.to, Product Hunt

Total: ~$60/mo, 3 logins, 2 writing styles, 0 unified analytics.

Nobody is doing both sides seriously. That's the gap I'm betting on.

What I'm Building: Postwave

One core action: paste a product URL → AI generates 10+ platform-native posts → publish via API or one-click jump.

Distribution split, by platform:
- Direct OAuth API: Reddit, X, Threads, Mastodon, Dev.to, Bluesky
- Semi-auto (draft + jump): Product Hunt, Hacker News, Indie Hackers, LinkedIn
- Container proxy (Playwright on Aliyun ECS): Jike, V2EX (China rail v0)
- Generate-only (anti-bot too aggressive): Xiaohongshu, Zhihu, Bilibili

Post-publish analytics at 24h / 72h / 168h — you find out within a week which platform actually converted, not which one made you feel popular.

Tradeoffs I Made on Purpose

1. BYO API key (learned from Postiz)
Users bring their own X / Reddit tokens. X charges $0.01 per post via API; if I batched purchase, I'd have to either raise prices or rate-limit. BYO means cost transparency. Onboarding takes 5 extra minutes — Postiz's 11k stars proved users will do it.

2. China rail starts at 2 platforms, not 6
Xiaohongshu's anti-bot (codename Ares) is the strongest in the Chinese consumer web. Bilibili sent legal letters to unofficial-API projects in Jan 2026. Zhihu has no write API. Weibo's APIs are mostly retired.

I could pretend to do all 6 and ship a fragile mess. I'd rather do 2 well and offer "generate-only" mode for the other 4.

3. Killing Phase 3 / monetization tracking
Affiliate tracking, revenue dashboards, conversion attribution — researched it, decided it's commodity. Stripe Atlas, Paddle, Lemon Squeezy already solve billing for indies. Going wide there means going shallow on launching + demand discovery. I picked depth.

The GTM Plan, In Public

Phase 0 (now → 2 weeks): landing page + waitlist. I'm hand-writing launch posts for 7 platforms (this is one of them) using AI as drafting assistant. The data from this Phase 0 — which platforms convert, what CTR was, where I got rate-limited — becomes Phase 1's prompt training material.

Phase 1 (4-6 weeks): MVP. Direct API on 6 western platforms. China rail Jike + V2EX via container. Draft + jump for PH/HN/IH/LinkedIn. Stripe billing. Pricing $19/$29/$59 per month.

Phase 2 (3-6 months out): demand-pool integration. Scrape r/SaaS, r/SideProject, r/Entrepreneur, Jike's indie circle, V2EX /go/create — surface real indie pains in real time. The launcher becomes an "OPC operating system" — find what to build, build it, launch it.

Tech Stack (for the curious)

Next.js 15 + tRPC + shadcn/ui on Vercel. Postgres (Neon) + Drizzle. BullMQ + Redis (Upstash). Anthropic SDK with prompt caching, Sonnet 4.6 main + Opus 4.7 for complex generation. China rail is Electron + Playwright on Aliyun ECS (Vercel can't run chromium). Stripe for billing.

The "obvious tradeoff" decisions:
- BullMQ over Inngest: cron is unreliable on Vercel; I want explicit control
- Drizzle over Prisma: smaller bundle, type-safety I trust more
- Clerk over Auth.js: I value 30 min saved more than $25/mo

Pricing

Solo $19, Maker $29, Studio $59 — monthly. Annual 2 months free. First 100 waitlist signups: 50% off year 1, locked permanently.

What I'd Love Help With

1. Critique the ICP framing. Is "indie hacker shipping to global + China" too narrow? My gut says no (every Chinese-speaking indie I know fits), but I'd rather hear pushback now than after Phase 1.

2. Pricing sanity check. Is $19 too cheap for the entry tier given the API costs you'll absorb (X $0.01/post is BYO, but my Anthropic costs aren't)? I budgeted $0.10/post in AI cost — running the math, $19 supports ~150 posts/mo per Solo user. Tight but workable.

3. Honest competitive positioning. If you've used Postiz / Buffer / Hypefury for indie launches and stopped — what made you stop? "It just doesn't fit indie launch" is the answer I'm betting on, but I want specifics.

4. China rail veterans — if you've automated Jike, V2EX, or anything similar, what traps am I about to walk into?

Waitlist: {{LANDING_URL}}

I'll publish every Phase 0 metric publicly. If this fails (waitlist <50 in 2 weeks, hard gate), I'll write the postmortem here too.

Built by one indie. In public. Cards on the table.
```

---

## Posting tips

- **Best time**: Tuesday/Wednesday 9-11am EST, OR Sunday 7-9pm EST (IH has a strong Sunday-evening reading habit).
- **Category**: "Starting Up" — not "Building in Public" (the latter has lower visibility right now).
- **First comment within 30 min** — IH algo weights early engagement. Self-comment with one specific data point: "Waitlist count at post time: X. Will update at 24h."
- **Tag relevant founders** in comments only if you've genuinely interacted with them before. IH's culture is anti-cold-tag.
- **Update the post 24h later** with engagement data — IH readers come back to refresh and reward transparency.

---

## Comment-reply templates

If asked "why not Postiz, since it's free":
> Postiz is genuinely good, and Phase 1 will be partially open-source for self-host. The differentiator is China rail + analytics depth + Phase 2 demand pool. If you don't ship to China and don't need 24/72/168h conversion tracking, Postiz is the right answer. I'd rather be honest about fit than oversell.

If asked "$19 is a lot for solo indies":
> Fair. The math on my side: ~$0.10 in AI cost per post × 150 posts/mo = ~$15 just in marginal cost. $19 leaves $4 for hosting + payment fees + my time. I considered $9 — at that price the unit economics break. Open to being wrong here, would love your data.

If asked "why are you confident this won't be another dead side project":
> I'm not. The gating signal is explicit: if waitlist hits <50 in 2 weeks, I stop and re-evaluate ICP. I built that quit-condition in to keep myself honest. Most projects die because the founder rationalizes too long; I'm trying to short-circuit my own future-self.
```
