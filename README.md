<p align="center">
  <img src="https://img.shields.io/badge/Claude_Code-Skill-blueviolet?style=for-the-badge" alt="Claude Code Skill">
  <img src="https://img.shields.io/badge/WeChat-Article_Typesetting-07C160?style=for-the-badge&logo=wechat&logoColor=white" alt="WeChat">
  <img src="https://img.shields.io/badge/Personalities-36-ea580c?style=for-the-badge" alt="36 Personalities">
  <img src="https://img.shields.io/badge/Themes-108-fb923c?style=for-the-badge" alt="108 Themes">
</p>

<h1 align="center">InkForge</h1>

<p align="center">
  <strong>把文字锻造成微信公众号的精品排版</strong><br>
  <em>Forge raw text into beautifully typeset WeChat articles</em>
</p>

<p align="center">
  36 设计人格 × 108 色彩主题 = 3,888 种排版组合<br>
  <sub>36 design personalities × 108 color themes = 3,888 unique combinations</sub>
</p>

---

## 这是什么 / What is this

**InkForge** 是一个 [Claude Code](https://docs.anthropic.com/en/docs/claude-code) Skill —— 一句"帮我排版"，Claude 就能把你的文章锻造成微信公众号可直接粘贴的精排 HTML。

**InkForge** is a [Claude Code](https://docs.anthropic.com/en/docs/claude-code) Skill. Say "帮我排版" (help me typeset) and Claude forges your article into pixel-perfect HTML, ready to paste into the WeChat Official Account editor.

**不需要设计基础。不需要懂代码。给文章，出排版。**

No design skills required. No coding needed. Give it text, get a typeset article.

---

## 核心能力 / Features

### 🔨 36 种设计人格 / 36 Design Personalities

每种人格是一套完整的排版结构，决定了文章的骨架和气质。

Each personality is a complete layout structure that defines the skeleton and character of the article.

| 类别 Category | 人格 Personalities |
|---|---|
| 经典通用 Classic | 长文深读 longform · 极简留白 minimalist · 杂志感 magazine · 旧报纸 newspaper |
| 商业品牌 Business | 产品发布 product-launch · 品牌故事 brand-story · 招聘 recruitment · 数据报告 data-report |
| 知识教育 Knowledge | 科普解说 explainer · 课程讲义 course-lesson · 笔记手账 notebook · 政策解读 policy-brief |
| 生活方式 Lifestyle | 食谱 recipe · 清单 checklist · 本地探店 local-guide · 播客 podcast |
| 内容营销 Content | 案例拆解 case-study · 测评对比 review · 榜单 listicle · 推荐 recommendation |
| 新闻媒体 Media | 快讯 news-flash · 周报 weekly-briefing · 时间线 timeline · 访谈 interview-profile |
| 特殊场景 Special | 活动回顾 event-recap · 邀请函 invitation · 语录卡 quote-card · 信件 letter · 粗野风 brutalist |
| 更多 More | 社区公告 community-update · 校园通知 campus-notice · 政府报告 government-report · 信息图 infographic · 职业指南 career-guide · 门票 ticket |

### 🎨 108 套色彩主题 / 108 Color Themes

覆盖 17 大类场景，从商务藏青到赛博朋克，总有一款压中你的调性。

Spanning 17 categories — from business navy to cyberpunk neon — there's always one that matches your vibe.

| 类别 Category | 示例 Examples |
|---|---|
| 经典中性 Classic Neutral | 极简墨黑 · 商务藏青 · 沉稳灰蓝 · 暖调象牙 |
| 专业行业 Professional | 科技蓝 · 医疗青绿 · 教育墨绿 · 金融酒红 · 留学国际 |
| 生活方式 Lifestyle | 温暖陶土 · 美食番茄 · 文艺复古褐 · 咖啡拿铁 |
| 风格美学 Aesthetic | 国潮朱砂 · 水墨丹青 · 日系和纸 · 北欧白桦 · 莫兰迪灰调 |
| 活力鲜明 Vibrant | 时尚玫红 · 活力橙 · 创意紫 · 电光靛蓝 |
| 深色模式 Dark | 电竞霓虹 · 摄影纯黑 · 午夜蓝金 · 暗夜翡翠 |
| 季节节庆 Seasonal | 春日抹茶 · 盛夏海洋 · 秋日银杏 · 冬日暖炉 · 中国红 |
| 更多 More | 赛博朋克 · 故宫朱墙 · Y2K千禧 · 波西米亚 … |

### 📊 数据图表自动生成 / Auto-Generated Data Charts

Claude 识别文章中的数据内容，自动选择合适的图表组件，生成纯 HTML/CSS 图表（不依赖 JS 库）。

Claude detects data in your article and auto-generates pure HTML/CSS charts — no JS libraries needed.

- **CHART-1** 水平柱状图 Horizontal Bar — 排名、占比
- **CHART-2** 统计大数卡片 Stat Cards — KPI、核心指标
- **CHART-3** 环形进度 Ring Progress — 完成率（SVG）
- **CHART-4** A vs B 对比卡 Comparison — 两方案对比
- **CHART-5** 多维对比表 Comparison Table — 多属性逐项对比
- **CHART-6** 漏斗图 Funnel — 转化率
- **CHART-7** 评分雷达 Rating Bars — 多维评价
- **CHART-8** 时间轴柱图 Timeline Bars — 趋势数据
- **CHART-9** 优劣势对比 Pros/Cons — 优缺点双栏

### ✂️ 章节分隔符 / Section Dividers

10 种分隔符设计，根据人格风格自动匹配。

10 divider designs, auto-matched to the selected personality.

`◆ 菱形` · `● ● ● 三点` · `— 短横线` · `═ 双线` · `╌ 渐隐线` · `❋ 花纹` · `① 序号` · `❝ 引号` · `█ 色块` · `〰 波浪`

### 🖼️ 智能配图 / Smart Image Sourcing

Claude 根据文章内容自动搜索 Unsplash 免费图库和官方渠道（大学官网、企业 Press Kit、政府公开素材），直接嵌入图片链接。

Claude searches Unsplash and official channels (university press pages, corporate media kits, government resources) based on article content.

### 🎯 交互式主题选择器 / Interactive Theme Picker

108 套配色以色卡网格展示，点选后实时预览文章效果，确认后一键应用。

All 108 themes displayed as a swatch grid. Click to preview your article in real-time, then confirm to apply.

---

## 安装 / Installation

### 方式一：Claude Code CLI

```bash
claude skill install github:yuliying007-lab/InkForge
```

### 方式二：手动安装

1. 克隆本仓库 / Clone this repo:
```bash
git clone https://github.com/yuliying007-lab/InkForge.git
```

2. 复制到 Claude Skills 目录 / Copy to Claude Skills directory:
```bash
# macOS / Linux
cp -r InkForge ~/.claude/skills/InkForge

# Windows
xcopy InkForge "%USERPROFILE%\.claude\skills\InkForge" /E /I
```

3. 重启 Claude Code，输入"帮我排版"即可触发。

   Restart Claude Code. Say "帮我排版" to activate.

---

## 使用方式 / Usage

### 最简单的用法 / Simplest Usage

把文章丢给 Claude，说一句：

Just paste your article and say:

> **帮我排版**

Claude 会自动匹配最合适的人格和主题，输出完整 HTML。

Claude auto-matches the best personality and theme, then outputs ready-to-paste HTML.

### 指定风格 / Specify a Style

> **用杂志风格排版，配色用科技蓝**

> **排版成测评对比的格式，活力橙配色**

### 选择器模式 / Picker Mode

> **我想自己选排版风格和配色**

Claude 会先弹出模板选择器，再弹出配色选择器，让你自主挑选。

Claude shows the template picker first, then the theme picker — you choose both.

### 粘贴到微信 / Paste to WeChat

1. 复制 Claude 输出的 HTML 代码
2. 打开微信公众号后台 → 新建图文
3. 点击编辑器工具栏的 **「<>」**（HTML 模式 / 超文本）
4. 粘贴 HTML → 返回正常编辑模式
5. 替换图片占位为实际图片（从配图链接下载后上传）

---

## 文件结构 / File Structure

```
InkForge/
├── SKILL.md                          # 主技能文件 / Main skill definition
└── references/
    ├── personalities/                # 36 个人格模板 / 36 personality templates
    │   ├── longform.md               #   长文深读
    │   ├── minimalist.md             #   极简留白
    │   ├── review.md                 #   测评对比
    │   ├── case-study.md             #   案例拆解
    │   └── ... (36 files)
    ├── charts.md                     # 9 种图表组件 / 9 chart components
    ├── dividers.md                   # 10 种分隔符 / 10 divider designs
    ├── template-picker.jsx           # 模板选择器 / Template picker UI
    ├── theme-picker.jsx              # 配色选择器 / Theme picker UI
    └── brand-config.jsx              # 品牌配置器 / Brand config wizard
```

---

## 技术细节 / Technical Details

- **纯内联样式** — 不使用 `<style>` 标签或 CSS class，100% 兼容微信编辑器
- **零 JavaScript** — 所有输出为纯静态 HTML（SVG 环形图除外）
- **系统字体栈** — 无需外部字体资源
- **最大宽度 677px** — 匹配微信正文区域
- **深色模式兼容** — 遵循微信深色模式适配规则
- **Pure inline styles** — no `<style>` tags or CSS classes, 100% WeChat editor compatible
- **Zero JavaScript** — all output is static HTML (except SVG ring charts)
- **System font stack** — no external font resources needed
- **Max-width 677px** — matches WeChat content area
- **Dark mode compatible** — follows WeChat dark mode adaptation rules

---

## 效果示例 / Example Output

<details>
<summary>📄 测评对比人格 + 活力橙主题 / Review personality + Vibrant Orange theme</summary>

输入一篇留学专业分析文章后，InkForge 自动生成：

- D 级评分大字 + 5 维分项评分条
- 学费三档统计大数卡片
- IR vs MPP 课程双栏对比
- DFAT 薪资数据卡
- AI 影响数据环形图（SVG）
- 课程结构多维对比表
- 优劣势双栏对比
- 最终裁决框
- 菱形居中分隔符
- Unsplash 配图 × 3

全文约 6,000 字，输出 HTML 可直接粘贴至微信公众号。

</details>

---

## 许可证 / License

[MIT](LICENSE)

---

<p align="center">
  <strong>InkForge</strong> — 用 Claude 的手艺，锻造你的每一篇推文。<br>
  <em>Forging every article with Claude's craftsmanship.</em>
</p>
