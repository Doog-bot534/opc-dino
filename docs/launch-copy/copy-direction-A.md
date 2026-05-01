# Copy Direction A — 全站文案重写规范

> 用户拍板方向：**「让你做的好东西，被它该被看见的人看见」**
> 创建日期：2026-05-01
> 应用方式：视觉 polish agent 跑完后，把这套文案+ mark/fade 结构应用到 i18n/zh-CN.ts

## 核心 3 个情感锚点（贯穿全站）

1. 你做的东西比你想的**有人需要**（被看见）
2. 你解决了**真问题**（有意义）
3. 这件事能**养活你**（可持续）

任何文案都要至少踩中 1 个锚点。

---

## Hero

**eyebrow**:
```
[ 独立开发者 · indie launch tool ]
```

**H1**（精选 mark/fade 词）：
```
<fade>让你做的</fade> <mark>好东西</mark><fade>，</fade>
<fade>被它该被看见的人</fade> <mark>看见</mark><fade>。</fade>
```
渲染："让你做的 **好东西**，被它该被看见的人 **看见**。"

**Sub**:
```
一个 URL，AI 拆出 <mark>10+ 平台原生发声</mark>。
把你 <mark>6 个月写的代码</mark>，<fade>从工程师朋友圈</fade>，
推到 <mark>真正会用的人</mark> 面前。
```

**CTA**：主按钮「加入 waitlist」/ 次按钮「了解更多」

---

## / 01 · Pain

**chapter-head**:
- n: `/ 01`
- t: `痛点 / Reality`
- aside: `§ / 没人说但都懂`

**Section title**:
```
你早就知道的事，<fade>但没人愿意说出来。</fade>
```

**3 cards**:

### Card 1
- k: `/ 01 · invisible`
- h3 zh: 你做的东西比你想的有人需要
- h3 en: Your work matters. They just can't find it.
- p: `6 个月磨出来的产品，最后只有工程师朋友看见。不是产品不好，是它从没出现在` <mark>真正会用它的人</mark> `面前。`

### Card 2
- k: `/ 02 · translate`
- h3 zh: 每个社区有自己的方言
- h3 en: Every community speaks differently.
- p: `Reddit 的 hook 在即刻没用，即刻的痛点开场到 V2EX 会被踩。` <fade>同一个产品，要写 10 份文案。每次。</fade>

### Card 3
- k: `/ 03 · flow`
- h3 zh: 推广不是营销，是让价值流动
- h3 en: Distribution = letting value reach.
- p: `你解决了真问题。他们正在搜索答案。` <mark>把你和他们连上</mark>，<fade>是让 indie 这件事</fade> <mark>能养活你</mark> <fade>的最便宜的方法。</fade>

---

## / 02 · Solution

**chapter-head**:
- n: `/ 02`
- t: `工作流 / Workflow`
- aside: `§ / URL → 10 平台`

**Section title**:
```
一个 URL，<fade>翻译成</fade> <mark>每个社区都听得懂的话</mark>。
```

**3 steps**:

### Step 1
- k: `/ 01 · ingest`
- h3 zh: 把产品 URL 拍进去
- h3 en: Drop the URL.
- p: `AI 读你的 landing、screenshot、changelog，理解` <mark>你为什么做这个东西</mark>`。`

### Step 2
- k: `/ 02 · translate`
- h3 zh: AI 写出 10+ 平台的发声
- h3 en: Translate to 10+ native voices.
- p: `Reddit 长帖 / X thread / 即刻短钩 / V2EX 技术贴 / Dev.to 博客 —` <mark>每个平台原生格式</mark>`，` <fade>不是同款文案换标签。</fade>

### Step 3
- k: `/ 03 · ship`
- h3 zh: 一键发，同时回收数据
- h3 en: Ship and watch.
- p: `海外 6 个 API 直发，半自动 4 个一键打开，中国 2 个容器代理。24/72/168h 盯互动，` <mark>哪条文案钓到了你的人</mark>`，回头就知道。`

---

## / 03 · Platforms

**chapter-head**:
- n: `/ 03`
- t: `覆盖 / Reach`
- aside: `§ / 海外 + 中国`

**Section title**:
```
海外 + 中国，<mark>一起覆盖</mark>。
```

**Sub**:
```
<fade>不让你订两套工具，</fade>也不让你只发英文圈、<fade>忘了中文社区。</fade>
```

（platform logo 网格保留，每个 logo 下面的状态徽章保留：API 直发 / 半自动 / 暂仅生成稿）

---

## / 04 · Pricing

**chapter-head**:
- n: `/ 04`
- t: `价格 / Pricing`
- aside: `§ / 你赚多少归你`

**Section title**:
```
<mark>你产品赚多少，归你</mark>。
<fade>我们只赚把它推出去的工具费。</fade>
```

**3 tiers** — 重写 tagline：

### Solo · $19/月
- tagline: `一个人，一个项目`
- features:
  - 5 个平台无限发
  - AI launch package — 每月 4 次
  - 24/72/168h 数据回收
  - BYO API key

### Maker · $29/月（推荐）
- tagline: `多个项目，全平台覆盖`
- features:
  - 10+ 平台无限发
  - AI launch package — 无限
  - Autoplugs 长尾收割
  - 邮件通知 + Slack/Discord webhook

### Studio · $59/月
- tagline: `小团队，多人协作`
- features:
  - 一切 Maker 功能
  - 3 席位
  - 多 launch 并行
  - 优先支持

---

## / 05 · FAQ

**chapter-head**:
- n: `/ 05`
- t: `答疑 / FAQ`
- aside: `§ / 你大概想问`

**Section title**:
```
<fade>你可能在想的</fade> <mark>几个问题</mark>。
```

**6 个 FAQ**（保留原有 6 条，但调一下文字以贴合新方向）：

1. **BYO API key 是什么？为什么要我提供？**
   你账号上发的，永远是你的账号在发。我们不替你买流量、不存你的密码、不替你触发平台 ToS。你掌握所有 OAuth + token，随时撤销。

2. **现在能用吗？**
   还在 Phase 0。你看到的是 waitlist。早鸟首年 5 折锁定。预计 Q3 开放内测，前 100 名 priority。

3. **海外和中国差异是？**
   海外平台（X / Reddit / Threads / Mastodon / Dev.to / Bluesky）走官方 API，真自动发布。中国平台（即刻 / V2EX）走容器代理浏览器自动化，走你自己的 cookie。小红书 / B站 / 知乎只生成稿，你手动发（避免触发反爬封号）。

4. **数据安全怎么保证？**
   API key 加密存储；session/cookie 永远不离开你自己的容器；所有发布日志可审计；用户随时可一键吊销 + 删除全部数据。

5. **和 Buffer / Postiz / 蚁小二 有啥不一样？**
   Buffer / Postiz 不发即刻 / V2EX / 小红书；蚁小二 / 易媒不发 Reddit / X / Dev.to。OPC.Dino 是**唯一同时做海外 + 中国**的工具，专门服务出海中国 indie。

6. **Roadmap 是什么？**
   Phase 0 (现在): waitlist；Phase 1 (4-6 周): 多平台 launch MVP；Phase 2 (3-6 月): 需求池 — 帮你找下一个值得做的项目。

---

## / 06 · Footer CTA

**Section title**:
```
让你的<mark>好东西</mark>，
<fade>被它该被看见的人</fade> <mark>看见</mark>。
```

**Sub**:
```
加入 waitlist。<fade>等 v0 开门的时候，</fade>你是 <mark>第一批拿钥匙的人</mark>。
```

**邮箱表单 placeholder**: `name@email.com`
**提交按钮**: `加入 waitlist`
**底部小字**: `<fade>0 spam · 2 周一封 build log · 随时退订</fade>`

---

## SEO Meta（layout.tsx）

- **title**: `OPC.Dino — 让你的好东西，被它该被看见的人看见`
- **description**: `独立开发者的多平台 launch 工具。一个 URL，AI 拆出 Reddit / X / 即刻 / V2EX / Dev.to 等 10+ 平台原生发声，海外 + 中国双轨。BYO API key，$19 起。`
- **og:image 文字**: `让你的好东西，被需要的人看见 | OPC.Dino`

---

## 应用方式（agent 跑完后）

1. 读 `src/i18n/zh-CN.ts` 当前结构
2. 按上面 7 个 section + footer + meta 替换字符串
3. 凡是有 `<mark>...</mark>` / `<fade>...</fade>` 标记的，**拆成多个 i18n key**：
   ```ts
   // 例如 hero.title 拆成
   hero: {
     title: {
       fade1: "让你做的",
       mark1: "好东西",
       fade2: "，被它该被看见的人",
       mark2: "看见",
       fade3: "。"
     }
   }
   ```
   或在组件里直接 hardcode JSX（更直观）。
4. 同步检查 layout.tsx SEO meta 已替换
5. `pnpm build` 验证 0 error
6. 截图重出
7. commit `feat(copy): rewrite to direction A — emotional resonance with OPC ICP`
