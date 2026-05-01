# 🌙 今晚操作手册 — OPC.Dino Phase 0 launch

> 准备日期：2026-05-01
> Landing：https://opc.dinolabs.online ✅ 已上线
> Resend：✅ 已配，端到端验证通过
> 7 平台稿子：✅ 全部 ready-to-paste 在 `docs/launch-copy/` 下

---

## 0️⃣ 开干前 5 分钟自检

- [ ] 推 design commit（landing 视觉跟 dinolabs 对齐了，没推 Vercel 显示老版）：
  ```bash
  cd /Volumes/硬盘/项目/opc-launchos && git push origin main
  ```
- [ ] 等 Vercel 部署完（绿点：https://vercel.com/doog-bot534/opc-dino），手机访问 https://opc.dinolabs.online 确认新设计上线
- [ ] 手机相册存好 1-2 张 hero 截图（即刻 / Twitter 配图用）

---

## 🎯 今晚（中国时间 20:00-23:00）发 4 个平台

> 全部"自己手发"，不走自动化。原因：建立账号信任 + 真人语气是 indie 圈唯一有效的 build in public 玩法。

### ① 即刻（21:00 起）— 主战场，最先发

**为啥先发**：你的 ICP 浓度最高、即刻独立开发圈晚上 21-22:30 是黄金时段、社区氛围鼓励 build in public。

- 📝 稿子：[`jike.md`](./jike.md) 整段复制（粘贴前看一眼最后两段标签 `#独立开发 #出海 #一人公司`）
- 🔗 入口：https://web.okjike.com → 新建动态（顶部加号）
- 🖼 配图：建议 hero 截图 1 张（手机端那张就行，看起来更原生）
- ⚙️ 圈子选择：发"独立开发"（首选）/"一人公司"（备选）
- 💬 发完立即做：自己评论一句钓评论钩子 — `jike.md` 末尾的"首条评论"段
- ⏰ 30 分钟后：刷一刷别人评论，认真回每一条（哪怕是 emoji 也回）

### ② 中文 Twitter（21:30）— 同步首发

**为啥同步**：即刻发完热度起来，朋友会顺手 RT 到推特，错过这窗口很可惜。

- 📝 稿子：[`twitter-zh.md`](./twitter-zh.md) — 这是个 thread（8-12 条），不是单帖
- 🔗 入口：https://x.com/compose/post
- 💡 关键：每条 ≤280 字符，**最后一条务必带 link**：https://opc.dinolabs.online
- 📌 发完：去自己 profile 把第一条 thread 钉顶（Pin）

### ③ V2EX（22:00）— 技术宅口吻

**为啥这时间**：V2EX 晚上 22 点前后是浏览高峰，技术宅都在线。

- 📝 稿子：[`v2ex.md`](./v2ex.md)
- 🔗 入口：https://v2ex.com/new/create — **节点选 `/go/create`**（独立开发）
- ⚠️ V2EX 红线：
  - 标题别用 emoji 或夸张语气，会被认为 spam
  - 不要 24h 内发第二个帖（账号会被站长警告）
  - 帖子里 link 不能超过 2 个

### ④ Reddit r/SideProject（22:30）— 海外首发

**为啥放最后**：Reddit 反 spam 严，要等 IP / 账号有"非营销"行为才发。前面发了即刻 / X，浏览器留下了正常的 session 行为，比直接进 Reddit 发安全。

- 📝 稿子：[`reddit-sideproject.md`](./reddit-sideproject.md)
- 🔗 入口：https://www.reddit.com/r/SideProject/submit
- ⚠️ Reddit 红线：
  - 标题不要带 "promote" / "launch" / "$" 这种营销词
  - 帖子 body 里至少有 1 段是"问问题"（求反馈），不要纯介绍
  - 发完**别立刻** cross-post 到其他 sub，至少等 24h
  - 用稿子文件里的 self-comment 模板，发完立刻自己评论补充技术细节
- 💡 如果账号 < 30 天 / karma < 100：**改发 r/IndieDev 或 r/IMadeThis**，这俩门槛低

---

## 📅 明天 / 后天（不要今晚发完）

### 明早（北京 09:00-11:00 = US 晚上）

- **Dev.to**: [`devto.md`](./devto.md)
  - 🔗 https://dev.to/new
  - 这是技术博客长文，时间窗松，明天慢慢发就行
  - 标签建议：`#sideproject #indie #ai #saas`
  - 预计阅读 5+ 分钟，所以代码片段务必保留

### 明天下午（14:00-16:00）

- **Indie Hackers**: [`indiehackers.md`](./indiehackers.md)
  - 🔗 https://www.indiehackers.com/post/new
  - 选"Building in Public"或"Sharing My Story"分类
  - 800-1200 字 problem-solution 叙事，不要硬卖
  - 发完去 Milestones 板块同步发一条短的"first 100 waitlist"

### 周末（找个早上）

- **Product Hunt "Coming Soon"**: [`producthunt-coming-soon.md`](./producthunt-coming-soon.md)
  - 🔗 https://www.producthunt.com/posts/new （切到 "Coming Soon" 标签）
  - 完全 UI 操作，没 API 走法
  - tagline 3 个候选选 1 个最响的
  - 5 张截图要先准备好（screenshot 文件夹里有 desktop 1-3 + mobile 1-3，挑 5 张）

### 任何时候（机会型）

- **Hacker News Show HN**: 没 API，纯手动
  - 🔗 https://news.ycombinator.com/submit
  - 标题格式：`Show HN: OPC.Dino – AI launcher for indie devs (China + global)`
  - body 短，链接放第一行，3-4 段背景
  - **不要 cross-post 同稿子到 HN**，要重写一份更技术的（参考 `devto.md` 的开头改写）
  - HN 时区：US morning 7-9am 发最有效（北京时间晚上 22-24 点）

---

## 📊 24h / 72h / 168h 数据回收清单

发完每个平台后，记下：

| 平台 | 发布时间 | URL | 24h 互动 | 72h waitlist 增长 | 168h 总评论 |
|---|---|---|---|---|---|
| 即刻 | | | | | |
| Twitter 中文 | | | | | |
| V2EX | | | | | |
| Reddit r/SideProject | | | | | |
| Dev.to | | | | | |
| Indie Hackers | | | | | |
| PH Coming Soon | | | | | |
| HN Show HN | | | | | |

每天睡前 Telegram 发一条给我，我帮你跑数据 + 写第二天行动建议。

---

## 🚦 红绿灯（每日复盘）

### 🟢 绿灯 = 继续按节奏发
- waitlist 每天 +5 以上
- 单平台帖至少 1 条认真评论 / 互动

### 🟡 黄灯 = 调整文案
- waitlist 每天 +1-4
- 评论但都是"看起来不错"的浅评，没人问细节
- → 改 hook 句，把"产品 URL → 多平台"改成更具体的痛点描述

### 🔴 红灯 = Phase 0 暂停重评估
- waitlist 7 天 <20
- 即刻 / V2EX 多个帖被 0 评论 / 0 点赞
- 评论里反复出现"和 X 有啥区别"——说明定位没说清
- → 暂停剩下平台，回去改 ICP / 改文案，或者考虑改产品

---

## 🆘 遇到这些情况，立刻 Telegram 我

- 任何平台账号被警告 / 限流 / 删帖 → 我帮你判断为啥 + 申诉策略
- waitlist 突然涌进来一波（>10 in 1h）→ 看流量从哪来，加固那个渠道
- 评论里有人深度提问技术细节 → 我帮你写技术回答（避免你瞎答把工程秘密漏了）
- 看到竞品来踩 → 我帮你写不撕逼但站得住的回应

---

## 📞 Telegram 直接联系我的关键词

- "数据" → 我跑当前 waitlist + 各平台帖数据汇总
- "改 hook" → 我重写一遍即刻 / Twitter 的开头钩子
- "回评论" → 你贴别人评论，我给你 3 种回法选
- "再写一稿" → 你说要发哪个新平台，我直接出文案

---

## ✅ 出门前最后再确认一次

- [ ] design commit 已 push
- [ ] https://opc.dinolabs.online 显示新设计（蓝色品牌、Outfit 字体、light theme）
- [ ] 手机存了 hero 截图
- [ ] 手机能登录：即刻 / X / V2EX / Reddit
- [ ] Telegram 通知开了（我的提醒能收到）

干杯 🦖
