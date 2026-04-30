# Dev.to — OPC.Dino technical post

> Format: long-form technical blog
> Length: ~1500 words
> Tags: #sideproject #indie #ai #saas
> Tone: technical decision deep-dive — Dev.to readers want to learn, not be sold to
> Cover image suggestion: a system architecture diagram (Mermaid screenshot OK)

---

## Title (4 candidates — first one recommended)

1. `Why I'm building yet another social scheduler — and the 3 architectural bets that make it different`
2. `Building a multi-platform launcher with Next.js, BullMQ, and a stubborn opinion about API keys`
3. `One URL → 10+ native posts: how I'm wiring AI content generation across platforms with wildly different APIs`
4. `What I learned shipping 8 dead side projects, and the architecture I'm betting on for #9`

---

## Body

```
Yes, the world has Buffer, Hootsuite, Postiz, Typefully, Hypefury, and a graveyard of YC pitch decks for "the all-in-one social tool". I am, knowingly, building another one.

Bear with me — three architectural bets make OPC.Dino structurally different from anything in the current top-of-funnel tools, and I want to walk through them because indie devs reading this are exactly the people who'll have opinions worth listening to.

The Problem (in one paragraph)

I've shipped 8 side projects in 3 years. Every single one died at distribution — not at idea or code or even product-market fit. At distribution. The available tools are either Western-only (Buffer, Postiz, Typefully) or Chinese-only (Antxiao'er, Yimei). For an indie shipping to both audiences (and there are more of us than the tooling market reflects), the current stack is two paid tools, two writing voices, two analytics dashboards, and a lot of manual copy-paste. Nobody covers both rails seriously. That's the gap.

OPC.Dino: paste a product URL → AI generates platform-native content for 10+ platforms (Reddit, X, Threads, Mastodon, Dev.to, Bluesky, Product Hunt, HN, IH, LinkedIn, Jike, V2EX) → publish via API or one-click jump → analytics at 24h/72h/168h.

Now the bets.

Bet 1: BYO API key, on principle

Most launch tools want to own the connection layer — they negotiate platform partnerships, manage tokens, and abstract the "how do I post?" away from users. OPC.Dino does the opposite: the user brings their own X / Reddit / Threads / Mastodon API tokens, runs through their own OAuth flow, and OPC.Dino just orchestrates.

This sounds like a worse user experience. Why?

Three reasons:

1. X charges $0.01/post via API now. If I batch-buy and bake it into pricing, my $19 tier has to either raise to $39 or rate-limit you. Making it BYO means cost transparency: you pay X what X charges, I get nothing in the middle.

2. Third-party posting is the #1 cause of platform bans. Your account, your token, your OAuth — the platform sees your normal usage pattern, not "third-party app posting on behalf of 5,000 users". Lower ban risk, structurally.

3. It opens the door to self-hosting. Postiz proved this with 11k stars on GitHub. Indie devs trust BYO + self-host more than managed-everything.

Pseudo-code for the OAuth orchestration:

```typescript
// packages/platforms/x/index.ts
export async function publishToX(args: {
  userId: string,
  content: string,
  scheduledAt?: Date
}) {
  const token = await db.platformTokens.findFirst({
    where: { userId: args.userId, platform: 'x' }
  })
  if (!token) throw new PlatformNotConnectedError('x')

  const client = new XClient({ accessToken: token.accessToken })

  if (args.scheduledAt && args.scheduledAt > new Date()) {
    return await queue.add('publish-x', args, {
      delay: args.scheduledAt.getTime() - Date.now()
    })
  }

  const result = await client.tweets.create({ text: args.content })
  await db.posts.update({
    where: { id: args.postId },
    data: { externalId: result.data.id, status: 'published' }
  })
  return result
}
```

The pattern repeats per platform. Each adapter is a single file, ~150 lines, isolated dependency on the platform's SDK. New platform = new file, no core changes. Postiz figured this out; I'm just stealing the pattern.

Bet 2: Run a Chromium container for the China rail (Jike, V2EX)

Western web is API-rich. Chinese consumer platforms are the opposite — Jike has no public write API, V2EX has only an unofficial REST you should use carefully, Xiaohongshu has the strongest anti-bot stack in Chinese-language consumer web (codename "Ares"), and Bilibili sent legal cease-and-desist letters to unofficial-API GitHub projects in January 2026.

For an indie shipping to a Chinese audience, you can't ignore these platforms. But you also can't naively scrape them.

OPC.Dino's compromise: a tiered automation strategy.

Tier A — Direct API (low risk, full automation): Reddit, X, Threads, Mastodon, Dev.to, Bluesky.

Tier B — Semi-auto (no automation, but draft generation): Product Hunt, HN, IH, LinkedIn. OPC.Dino generates the platform-native draft + opens the publish page in your browser. You hit "submit". Friction tax: ~10 seconds per platform. Worth it.

Tier C — Container proxy (medium risk, automated): Jike, V2EX. OPC.Dino runs a Playwright + Electron + Chromium worker on Aliyun ECS, logs in with your cookies (encrypted at rest, AES-256), and publishes via simulated browser interaction. Rate-limited to 3 posts/platform/day. User cookies are isolated per-account; we never share infrastructure between users.

Tier D — Generate-only (don't try to automate): Xiaohongshu, Zhihu, Bilibili, Weibo. AI generates the draft, you copy-paste manually. We tell users this upfront and don't pretend otherwise. Honesty > feature parity.

Why split into tiers instead of trying to automate everything? Because the maintenance cost of fighting Xiaohongshu's Ares for one platform is more than the maintenance cost of supporting 6 western platforms combined. I'd rather go deep on what works than wide on what crumbles.

Why ECS, not Vercel/Railway/Fly?

Vercel can't run Chromium (serverless cold-start kills Playwright). Railway and Fly can, but ECS in Aliyun has lower latency to Chinese platforms (it's already in the same network) and the bill is in CNY (good for the bookkeeping if you're a Chinese-resident indie).

The tradeoff: I'm now running infra in two clouds. Vercel for the Next.js app, Aliyun ECS for the worker. CD pipelines duplicate. Not free.

Bet 3: AI generation per-platform, not auto-translation

The lazy version of this product is "AI writes one post, then translates/reformats for each platform". That's what the existing tools do, more or less.

The bet: Reddit longform, X thread, Dev.to article, IH pitch, Jike short-hook, V2EX tech-deep — these aren't translations of each other. They're different genres written for different reading patterns. AI gets one shot per genre, with a per-platform prompt template trained on what actually performs there.

Pseudocode:

```typescript
// packages/ai/generators/index.ts
const PLATFORM_PROMPTS: Record<Platform, PromptTemplate> = {
  reddit_sideproject: {
    persona: "indie hacker writing for r/SideProject — anti-marketing tone",
    structure: "TL;DR / problem / research / solution / asks",
    constraints: ["zero emoji", "max 600 words", "lead with TL;DR"],
    cacheKey: "reddit_sideproject_v3"
  },
  x_thread: {
    persona: "indie founder threading a build-in-public update",
    structure: "hook / 3-7 supporting tweets / CTA",
    constraints: ["each tweet ≤280 chars", "tweet 1 = data hook"],
    cacheKey: "x_thread_v3"
  },
  jike: {
    persona: "Chinese indie dev posting to /独立开发 circle",
    structure: "pain hook / build-in-public update / data tease",
    constraints: ["≤280 Chinese chars", "no emoji clutter", "tag #独立开发"],
    cacheKey: "jike_v3"
  },
  // ... 8 more platforms
}

export async function generateForPlatform(args: {
  platform: Platform,
  productUrl: string,
  productSummary: string,
  voiceProfile?: UserVoiceProfile
}) {
  const template = PLATFORM_PROMPTS[args.platform]
  const cachedSystem = buildCachedSystemPrompt(template)  // Anthropic prompt caching

  return await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 2000,
    system: cachedSystem,  // cached, paid once
    messages: [{
      role: 'user',
      content: renderUserMessage(args)
    }]
  })
}
```

Anthropic's prompt caching is the unlock here. Per-platform system prompts are 800-1500 tokens (long persona + structure + constraints + few-shot examples); without caching, generating 10 platforms = 10 × 1500 = 15,000 system tokens per launch. With prompt caching, system tokens are cached at 1/10th cost on cache hit, dropping that to ~1,500-effective tokens per launch. Pricing math becomes workable.

Phase 0 (the Phase 0 I'm in right now) is collecting real performance data per platform. Phase 1 prompt templates get retrained on what actually got upvoted, replied to, and converted. Phase 0 is, deliberately, training data collection.

What I'm Skipping (and Why)

- Affiliate tracking — Stripe Atlas, Paddle, Lemon Squeezy solve billing-side attribution
- Revenue dashboards — every billing tool has these built in
- Multi-tenant team features — Phase 1 is solo. Maybe Phase 2 if Studio tier demands it
- Mobile apps — web responsive is enough for the launcher use case

Less is more. Most launcher tools die from feature sprawl, not feature gaps.

Current Status

Phase 0 — landing + waitlist. Phase 1 starts in 2 weeks if waitlist >50 (gating signal; <50 = hard reset on ICP). Phase 1 MVP in 4-6 weeks. Phase 2 (demand-pool integration) 3-6 months out.

Tech stack confirmed:
- Next.js 15 (App Router) + tRPC + shadcn/ui on Vercel
- Postgres (Neon) + Drizzle ORM
- BullMQ + Redis (Upstash)
- Anthropic SDK (Claude Sonnet 4.6 main, Opus 4.7 for complex) + prompt caching
- Electron + Playwright on Aliyun ECS for China rail
- Clerk auth, Stripe billing, Resend email

Pricing $19 / $29 / $59 per month, BYO API key throughout.

If you've shipped anything indie and have opinions on the bets above — especially "you're wrong about BYO key" or "you're wrong about not chasing Xiaohongshu" — I'd love to hear it before I'm too deep in to course-correct cheaply.

Waitlist: {{LANDING_URL}}

Tags: #sideproject #indie #ai #saas
```

---

## Posting tips

- **Best time on Dev.to**: Tuesday/Wednesday 9am EST. Avoid Mondays (low engagement) and Fridays (everyone reads on weekend, but the velocity boost happens early).
- **Cover image**: a clean architecture diagram (boxes for Next.js / BullMQ / Aliyun ECS / Anthropic / Postgres). Mermaid → PNG works.
- **Series**: tag this post as part of a "Building OPC.Dino in Public" series. Dev.to series get more inbound subscribers than one-off posts.
- **Cross-post canonical**: if you have a personal blog, set canonical URL there and Dev.to as the syndication. Otherwise Dev.to first.
- **Ladder**: 24h after this post, follow up with "Update: Phase 0 first 7 days — what worked, what didn't" and link back. Dev.to readers reward continued narrative.

---

## Comment-reply templates

If asked "why not just use Postiz?":
> Postiz is excellent for what it does, and Phase 1 will partially open-source the adapter layer (similar pattern to Postiz). The differentiator is the China rail and the demand-pool Phase 2. If you don't ship to China audiences and don't need conversion tracking at 24/72/168h, Postiz is genuinely the right answer.

If asked "BullMQ vs Inngest":
> I considered Inngest. The deciding factor: I want explicit retry/backoff control for platform-specific rate limits (X has different rate-limit semantics than Reddit). BullMQ + Redis gives me that lever; Inngest hides too much. If your job graph is more event-driven and less rate-limit-driven, Inngest is probably better.

If asked "Anthropic vs OpenAI":
> Picked Claude Sonnet 4.6 for content quality (subjectively better at long-form indie-hacker voice in my A/B tests) + prompt caching pricing model. Opus 4.7 for the harder generation cases. Could swap providers — the AI module is a thin wrapper over `messages.create()` — but I'm not planning to.

If asked "what's your biggest risk":
> Honestly? China platform anti-bot evolution. If Jike or V2EX clamps down on container automation, I drop to "generate-only" mode for that platform — which still works, just adds 30 seconds of friction per post. Built the fallback in from day one.
```
