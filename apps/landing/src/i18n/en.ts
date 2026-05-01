/**
 * OPC.Dino English copy — Direction A (translated from zh-CN.ts)
 * --------------------------------------------------------------
 * Same 3 emotional anchors as the Chinese version:
 *   1. Visibility — your work has more people who need it than you think
 *   2. Purpose — you solved a real problem
 *   3. Sustainability — this can pay your bills
 *
 * H1 chosen: "Let your good work be seen by the people who actually need it."
 * (closest to the Chinese rhythm and the visibility anchor)
 */
import type { Dict } from "./zh-CN";

export const dict: Dict = {
  meta: {
    siteName: "OPC.Dino",
    siteNameZh: "OPC.Dino",
    waitlistCount: 0,
  },

  nav: {
    pricing: "Pricing",
    faq: "FAQ",
    waitlist: "Join waitlist",
    langToggle: "中文",
  },

  hero: {
    eyebrow: "indie dev · indie launch tool",
    badge: "Phase 0 · waitlist only",
    title:
      "Let your good work be seen by the people who actually need it.",
    titleParts: [
      { kind: "fade", text: "Let your" },
      { kind: "mark", text: " good work" },
      { kind: "fade", text: " be seen by the" },
      { kind: "mark", text: " people who actually need it" },
      { kind: "fade", text: "." },
    ],
    subtitle:
      "One URL. AI ships native posts to 10+ platforms — moving your 6 months of code from the engineer bubble to the people who actually need it.",
    subtitleParts: [
      { kind: "plain", text: "One URL. AI ships " },
      { kind: "brand", text: "10+ native posts" },
      { kind: "plain", text: " — moving your " },
      { kind: "mark", text: "6 months of code" },
      { kind: "plain", text: " " },
      { kind: "fade", text: "from the engineer bubble " },
      { kind: "plain", text: "to " },
      { kind: "mark", text: "the people who actually need it" },
      { kind: "plain", text: "." },
    ],
    ctaPrimary: "Join waitlist",
    ctaSecondary: "See roadmap",
    socialProof: "Global + China dual-track · BYO API key",
    terminal: {
      title: "~ opc@dino · launch.sh",
      meta: "zsh",
      lines: {
        cmdUser: "opcdino launch ",
        cmdUrl: "https://your-product.com",
        ingest: "  → reading the page, extracting hooks / audience…",
        readyDim: "with hooks",
        techStyle: "tech-style",
        markdown: "markdown",
        summary: "5 platforms ready · 7 awaiting human review",
        running: "RUNNING",
      },
      stack: "next 16 · drizzle · resend",
      waitlistTag: "WAITLIST",
    },
  },

  pain: {
    chapter: { n: "/ 01", t: "REALITY", cn: "the part nobody admits", aside: "§ / quiet truths" },
    title: "Things you already know — that nobody wants to say out loud.",
    titleParts: [
      { kind: "fade", text: "Things you already know — " },
      { kind: "mark", text: "that nobody wants to say out loud" },
      { kind: "fade", text: "." },
    ],
    subtitle: "Three things every indie feels but nobody posts about.",
    items: [
      {
        title: "Your work matters. They just can't find it.",
        description:
          "6 months of building. Only your engineer friends saw it. Not because the product is bad — because it never showed up where the people who'd actually use it are looking.",
      },
      {
        title: "Every community speaks differently.",
        description:
          "A Reddit hook tanks on Indie Hackers. An IH framing gets downvoted on Hacker News. Same product, 10 different posts. Every time.",
      },
      {
        title: "Distribution = letting value reach.",
        description:
          "You solved a real problem. They're searching for the answer. Connecting you to them is the cheapest way to make indie sustainable.",
      },
    ],
  },

  solution: {
    chapter: { n: "/ 02", t: "WORKFLOW", cn: "how it runs", aside: "§ / URL → 10+ platforms" },
    title: "One URL — translated into the voice every community actually speaks.",
    titleParts: [
      { kind: "plain", text: "One URL — " },
      { kind: "fade", text: "translated into" },
      { kind: "mark", text: " the voice every community actually speaks" },
      { kind: "fade", text: "." },
    ],
    subtitle:
      "You do one thing: paste your product URL. The parsing, writing, shipping, and tracking — AI handles all of it.",
    steps: [
      {
        title: "Drop the URL.",
        description:
          "AI reads your landing, screenshots, changelog — figures out *why* you built this thing.",
      },
      {
        title: "Translate to 10+ native voices.",
        description:
          "Reddit long-form / X thread / Indie Hackers story / Dev.to article / Hacker News pitch — each in the format that community actually reads. Not the same copy with new tags.",
      },
      {
        title: "Ship and watch.",
        description:
          "Direct API for 6 platforms. Semi-auto for 4. Container proxy for 2 China platforms. 24 / 72 / 168h interaction tracking — see which post hooked your people.",
      },
    ],
    terminalCaption: "opc launch",
    terminalLines: {
      cmd: "opc launch https://your-product.com",
      step1: "  → fetching product info...",
      step2: "  → AI generating native content for 7 platforms...",
      step3: "  ✓ Reddit · X · Threads · Dev.to · Indie Hackers · HN · PH",
      step4: "  → ship in one click, or jump to the platform",
    },
  },

  platforms: {
    chapter: { n: "/ 03", t: "REACH", cn: "global + china", aside: "§ / overseas + china" },
    title: "Global + China. One workflow.",
    titleParts: [
      { kind: "plain", text: "Global + China. " },
      { kind: "mark", text: "One workflow" },
      { kind: "fade", text: "." },
    ],
    subtitle:
      "So you don't subscribe to two tools. Or only ship to English forums and forget Chinese communities.",
    overseasLabel: "Global",
    chinaLabel: "China",
    countSuffix: "platforms",
    transparencyNote:
      "We don't fake accounts or run growth-hack farms. Every post goes out under your own account, your own OAuth / cookie. Ban risk is governed by each platform's ToS — what we can do is keep your traffic from looking like a bot.",
    statusLabels: {
      api: "Direct API",
      semi: "Semi-auto",
      draft: "Draft only",
    },
  },

  pricing: {
    chapter: { n: "/ 04", t: "PRICING", cn: "what your product earns is yours", aside: "§ / your revenue, your keep" },
    title: "What your product earns is yours.",
    titleParts: [
      { kind: "mark", text: "What your product earns is yours" },
      { kind: "fade", text: "." },
      { kind: "plain", text: " We just charge for the tool that ships it — " },
      { kind: "brand", text: "BYO API key" },
      { kind: "fade", text: ". Bring your own X / Reddit accounts. We don't buy your reach." },
    ],
    subtitle:
      "We just charge for the tool that ships it. Every tier is BYO API key — bring your own X / Reddit accounts. We don't buy your reach.",
    perMonth: "/mo",
    cta: "Join waitlist",
    recommendedBadge: "Recommended",
    earlyBird:
      "First 100 to join the waitlist in Phase 0 lock in 50% off year one — permanent.",
    plans: [
      {
        id: "solo",
        name: "Solo",
        price: 19,
        tagline: "One person, one project",
        features: [
          "1 product / project",
          "6 global + 2 China platforms · direct ship",
          "AI content generation · 50 / mo",
          "Engagement tracking · 24h checkpoint",
        ],
        recommended: false,
      },
      {
        id: "maker",
        name: "Maker",
        price: 29,
        tagline: "Multiple projects, full coverage",
        features: [
          "3 products / projects",
          "10 global + 2 China direct + 4 semi-auto",
          "AI content generation · 200 / mo",
          "Tracking at 24 / 72 / 168h + auto follow-up suggestions",
        ],
        recommended: true,
      },
      {
        id: "studio",
        name: "Studio",
        price: 59,
        tagline: "Small team, multi-account",
        features: [
          "10 products / projects",
          "Full coverage + multi-account matrix (up to 3 per platform)",
          "AI content generation · 1000 / mo + custom brand voice training",
          "Priority support + Phase 2 demand pool (free at launch)",
        ],
        recommended: false,
      },
    ],
  },

  faq: {
    chapter: { n: "/ 05", t: "FAQ", cn: "things you might be wondering", aside: "§ / asked & answered" },
    title: "Things you might be wondering.",
    titleParts: [
      { kind: "fade", text: "Things you might be" },
      { kind: "mark", text: " wondering" },
      { kind: "fade", text: ". The same things we asked ourselves." },
    ],
    subtitle: "The same things we asked ourselves.",
    items: [
      {
        q: "What is BYO API key, and why does it work that way?",
        a: "Bring-Your-Own API key — you go to the X developer console and the Reddit OAuth dashboard, get the key/token yourself, paste it into OPC.Dino, and we make the calls on your behalf. Two reasons: (1) Platforms are getting strict, and third-party posting is a high-risk ban vector — your own account is safest. (2) X's API now costs money ($0.01/post and up). If we bought it for you, we'd either raise the subscription or rate-limit you — neither is as good as you controlling your own cost. The whole OAuth flow ships with a step-by-step guide; non-engineers can finish setup in 5 minutes.",
      },
      {
        q: "Will my account get banned?",
        a: 'Global platforms run through official OAuth + official APIs at the official rate limits — ban probability is very low (same channel as posting by hand). China platforms (Jike / V2EX) go through an Electron container proxy that mimics a real browser. Any automation has non-zero ban risk. Mitigations: max 3 posts/day per platform by default, isolated cookies per account, and a one-click switch to "draft only — copy and paste yourself" mode. We don\'t guarantee no bans. We do promise: risk stays bounded, and if anything trips, we stop immediately.',
      },
      {
        q: "Can I use it now?",
        a: "Not yet. OPC.Dino is in Phase 0 — landing + waitlist. Closed beta opens around Q3 2026. This landing itself was shipped using the OPC.Dino way (manual + AI-assisted) to 7 platforms — you're looking at dogfood v0. Join the waitlist and I'll mail build updates in public (one every 2 weeks, with data). Beta access goes to early-birds first.",
      },
      {
        q: "How does global posting differ from China?",
        a: "Global (Reddit / X / Threads / Dev.to, etc.) runs on official OAuth — almost every platform has a mature API, posts go live in a second, tracking is real-time. China (Jike / V2EX) has no official write API, so we run Electron + Playwright on Alibaba Cloud ECS, simulating your browser to post. Slower (5–10s per post) and tracking lags global by ~30 minutes. Phase 1 v0 only does Jike + V2EX on the China track. Xiaohongshu / Bilibili / Zhihu have aggressive anti-bot + sensitive policies — draft-only, you ship by hand.",
      },
      {
        q: "Are my API keys and data safe?",
        a: "Keys: all OAuth tokens are AES-256 encrypted in Postgres; the encryption key lives in env vars, never in the database. I'll publish a monthly SOC 2 lite self-audit (after Phase 1 launches). Content: your product URL, generated copy, and posting analytics belong to you — we don't train models on them, don't sell to third parties, don't use them as reference material for other users. Code: after Phase 1 launches, the platforms adapter layer goes open source (Postiz model) so you can self-host.",
      },
      {
        q: "What's the roadmap?",
        a: 'Phase 0 (now → 2 weeks): landing + waitlist + dogfood-shipping ourselves. Phase 1 (4–6 weeks): MVP — 10 global + 2 China direct posting + AI content + tracking. Phase 2 (3–6 months out): demand pool — crawl Reddit / Jike / V2EX to surface indie opportunities automatically, evolving from launcher into the "OPC operating system." I am not building affiliate / referral tracking / revenue dashboards — Stripe Atlas already covers that, and it\'s not the core pain.',
      },
    ],
  },

  ctaFooter: {
    eyebrow: "/ 06 · waitlist",
    title: "Let your good work be seen by the people who actually need it.",
    titleParts: [
      { kind: "fade", text: "Let your" },
      { kind: "mark", text: " good work" },
      { kind: "fade", text: " be seen by the" },
      { kind: "mark", text: " people who actually need it" },
      { kind: "fade", text: "." },
    ],
    subtitle:
      "Join the waitlist. When v0 opens, you're first in line. First 100 lock in 50% off year one.",
    smallNote:
      "0 spam · build log every 2 weeks · unsubscribe anytime · Phase 0: this site is shipped using OPC.Dino itself (manual + AI) — you're watching the product run on itself.",
  },

  waitlistForm: {
    placeholder: "Your email",
    submit: "Join waitlist",
    submitting: "Submitting…",
    successTitle: "You're on the waitlist",
    successDescription: "We'll email you the moment v0 opens.",
    duplicateTitle: "Already subscribed",
    duplicateDescription: "This email is already on the waitlist — sit tight.",
    invalidEmail: "Enter a valid email address",
    serverError: "Submission failed. Try again in a moment.",
    countSuffix: "indie devs on the waitlist",
  },

  footer: {
    tagline: "Built by one indie dev · build in public",
    copyright: "© 2026 OPC.Dino. All rights reserved.",
    twitter: "Twitter",
    github: "GitHub",
    email: "Contact",
  },
};
