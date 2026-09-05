---
name: InkForge
description: >
  InkForge — 微信公众号文章锻造引擎。将 Markdown 或纯文本锻造为微信公众号可直接粘贴的纯内联样式 HTML。
  支持 36 种设计人格（排版结构）× 108 种色彩主题（行业配色），3800+ 种组合。
  内置数据图表自动生成、章节标题风格库、分隔符设计库、Claude 原生 HTML/CSS 装饰插画。
  当用户提到以下任何情况时触发：微信排版、公众号排版、微信文章格式化、WeChat typesetting、
  公众号模板、微信推文排版、文章转HTML、微信内联样式、把文章排版成微信格式、
  "帮我排版"、"排版一下"、"转成微信格式"、"公众号发布格式"、InkForge。
  即使用户只说"排版"而没有明确说"微信"，也应该触发此技能——因为在中文内容创作语境下，
  排版几乎总是指微信公众号排版。
---

# InkForge · 微信公众号锻造引擎

## 核心约束：微信兼容性

微信公众号编辑器**只支持内联样式**，所有输出必须遵守：

1. **纯内联 style 属性**——不能用 `<style>` 标签、不能用 CSS class
2. **不能用外部字体/资源**——`font-family` 只能用系统字体栈
3. **不能用 JS**——纯静态 HTML
4. **配图由 Claude 生成**——Claude 使用纯 HTML/CSS 内联样式制作装饰性插画（几何图形、渐变色块、图标组合、抽象场景等），直接嵌入文章中；不使用外部图片 URL、不调用 WebSearch/WebFetch 搜索图片
5. **字体栈**：`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`
6. **等宽字体栈**：`"SF Mono", "Fira Code", "Courier New", Consolas, monospace`
7. **最外层容器**：`max-width: 677px`（微信正文区宽度），左右 padding 用 `10px`～`20px`
8. **正文字号**：14px-16px，行高 1.8-1.9，字色 `#333` 或 `#3f3f3f`
9. **段间距**：`margin-bottom: 16px-20px`

### 呼吸感间距规范（全局强制）

微信文章在手机端阅读，留白是控制阅读节奏的核心手段。以下间距为**所有人格模板必须遵守的最低标准**：

| 元素 | 间距规则 | 说明 |
|------|---------|------|
| **章节分隔符** | `margin: 48px 0` | 章节之间的最大呼吸区，让读者明确感知"翻篇" |
| **小标题（h2）** | `margin-top: 40px` | 标题前要有足够的空间与上文脱离 |
| **正文段落** | `margin-bottom: 18px` | 段落间紧凑留白，保持阅读连贯 |
| **图表/卡片/对比组件** | `margin: 32px 0` | 数据组件前后留出呼吸空间 |
| **引用块/verdict 框** | `margin: 32px 0` | 强调块需要视觉隔离 |
| **组件内部 padding** | `padding: 18px-20px` | 卡片/引用块内部留白不能太挤 |
| **连续组件之间** | 至少 `28px` 间隔 | 两个图表/卡片紧挨时，不能视觉堆砌 |
| **文章顶部 padding** | `padding-top: 28px-32px` | 开头不要贴顶 |
| **文章底部 margin** | `margin-top: 40px` | footer 前留出收尾空间 |

Claude 在组装 HTML 时，必须使用以上间距值。人格模板中若有更小的间距写法，以此规范为准覆盖。

### 长文排版规则（2000 字以上自动生效）

长文章若不加约束，装饰组件堆叠会导致视觉杂乱。Claude 在第四步组装 HTML 前，先估算文章正文字数，超过 2000 字时自动启用以下规则。

**一、组件预算**

| 文章长度 | 重型组件上限 | 中型组件上限 | 静区占比（仅含 section_heading + body_paragraph 的章节） |
|---------|------------|------------|------|
| < 2000 字 | 3 | 不限 | 不强制 |
| 2000 – 4000 字 | 3 | 5 | ≥ 30% |
| > 4000 字 | 3 | 4 | ≥ 50% |

组件分级：
- **重型**：chart（CHART-1 ~ CHART-9）、before_after、key_clause、impact_tags
- **中型**：blockquote、highlight_inline 块、list_item 组（单个加粗词不算）
- **轻型**：section_heading、body_paragraph、article_header/footer、separator

硬规则：**两个重型组件之间必须间隔至少 2 个纯文本段落**，不得背靠背出现。

**二、色彩浓度控制**

长文中 PRIMARY + SECONDARY 两个强色同时大量出现会"视觉跳跃"。启用以下约束：

- **SECONDARY 限用**：SECONDARY 色仅用于 1-2 个全文焦点位置（最核心的数据卡片标题、文章主标题装饰线等），其余组件一律使用 PRIMARY 或 TEXT_LIGHT
- **彩色背景降频**：使用 HIGHLIGHT_BG 底色的组件（卡片、引用块、高亮块）不得连续出现，两个彩色背景块之间必须隔着至少一个白底（BG）段落
- **主色面积比**：单屏视口内，带主题色（PRIMARY / SECONDARY / HIGHLIGHT_BG）的元素面积不超过约 30%，其余为白底 + TEXT 色正文，给读者视觉休息空间
- **分隔符减淡**：长文中分隔符颜色从 PRIMARY 降级为 TEXT_LIGHT，降低章节切换的视觉断裂感
- **装饰插画数量**：长文（> 4000 字）Claude 生成的装饰插画控制在 2 处（开头区域 + 结尾前），避免视觉元素过多加剧杂乱感

**三、节奏示意**

理想的长文视觉节奏为「密 → 疏 → 密 → 疏」交替：

```
article_header（重型）
  ↓ 静区：2-3 段 body_paragraph
separator
  ↓ 中型：blockquote 或 list_item
  ↓ 静区：2-3 段 body_paragraph
separator
  ↓ 重型：chart 或 before_after
  ↓ 静区：2-3 段 body_paragraph
  ↓ 中型：highlight_inline
  ↓ 静区：2-3 段 body_paragraph
article_footer
```

而非：重型 → 重型 → 中型 → 重型 → 中型 → 重型。

## 工作流

### 第一步：确定人格 + 主题

用户可能：
- **指定人格和主题**：直接使用
- **只指定一个**：未指定的那个必须弹出选择器让用户选择
- **都不指定**：两个都必须弹出选择器让用户选择
- **给参考图**：根据参考图反推最接近的人格，但仍需用户确认

**选择器触发规则（强制）：**

> **核心原则：用户必须亲自选择模板和主题，Claude 不得自动匹配跳过选择器。** 即使文章内容信号明显，也必须走"用户亲选"流程。自动匹配表仅用于在选择器中标注"推荐"，帮助用户决策，不能用于替代用户选择。

**流程（合并选择器 · 一次选完）：**

使用 `show_widget` 输出**合并选择器**，在一个面板中同时展示模板和配色，用户一次操作选完两者：

**选择器结构：**

1. **模板区（顶部）：** 展示全部 36 种人格模板，按内容类型分组为小药片（pills）。根据文章内容在匹配度最高的模板上标注「推荐」并默认高亮。模板按 6 行排列，每行一类（深度内容 / 数据信息 / 叙事人物 / 教育职场 / 生活消费 / 风格活动）。

2. **配色区（中部）：** 全部 108 套配色的色卡网格，每个色卡显示 PRIMARY（上 60%）+ SECONDARY（下 40%）的矩形色块 + 名称。按 17 个分类标签页筛选（经典中性、专业行业、生活方式……），支持搜索主题名称或编号。根据文章行业词自动推荐并默认高亮匹配的配色。

3. **实时预览区（底部）：** 用户点选模板或配色时，下方展示使用**已选模板 + 已选配色**的排版预览。预览使用用户实际文章的前 200-300 字，套用所选模板的 HTML 组件结构（article_header、section_heading、body_paragraph、blockquote、数据卡片等），将主题色值替换到实际渲染。预览区 max-height 480px，可滚动。每个模板需预设一个渲染函数，展示该模板的典型组件组合。

4. **确认按钮：** 显示「确认使用：P27 政策解读 × T66 法式优雅 ↗」，点击通过 `sendPrompt('使用模板：P27 政策解读，配色：T66 法式优雅')` 回传选择。

**色卡数据：** 将下方「主题色表」全部 108 套配色编码为 JS 数组 `[code, name, primary_hex, secondary_hex, highlight_hex, bg_hex, text_hex, textlight_hex]`，分类索引为 `[category_name, start_index, count]`。

**预览内容：** 优先使用用户实际文章内容（标题、前 2-3 段正文、一句引用）；如文章尚未提供，使用通用示例文本。

**禁止行为：**
- 禁止在用户给出文章后直接自动匹配模板和主题开始排版
- 禁止跳过选择器
- 禁止用"输出末尾注明所用模板"来替代选择器流程

自动匹配逻辑见下方「自动匹配表」——仅用于选择器中的「推荐」标注。

### 第二步：读取对应的人格模板

根据选定的人格代号，读取 `references/personalities/{代号}.md`。
每个人格文件包含该人格所有内容块的 HTML 模板。

### 第三步：应用主题色

读取下方「主题色表」，将模板中的颜色占位符替换为主题色值。

模板中使用的占位符：
- `{{PRIMARY}}` → 主色
- `{{SECONDARY}}` → 辅色
- `{{HIGHLIGHT_BG}}` → 高亮背景色
- `{{BG}}` → 整体背景色（大部分主题为 `#ffffff`，深色主题例外）
- `{{TEXT}}` → 正文字色
- `{{TEXT_LIGHT}}` → 辅助文字色（比正文浅一档）

### 第四步：解析内容并组装

将用户输入的 Markdown / 纯文本解析为内容块，依次套用人格模板：

| Markdown 元素 | 内容块名称 |
|--------------|----------|
| `# 标题` | article_header |
| `## 小标题` | section_heading（见「标题风格」） |
| 普通段落 | body_paragraph |
| `> 引用` | blockquote |
| `1. / - ` 列表 | list_item |
| `---` 分隔线 | separator（见「分隔符」） |
| `**加粗**` | highlight_inline |
| `![](img)` 或 `[图片]` | decorative_illustration（见「配图策略」） |
| 数据/表格/百分比 | 图表组件（见「图表」） |
| 文末 | article_footer |

副标题（紧跟主标题的较短文本）映射到 `article_subtitle`。

### 第四步附：标题风格

章节标题使用独立的标题风格库。读取 `references/headings.md` 获取 11 种标题装饰风格。

**使用规则：**
- 每篇文章使用**一种**标题风格保持视觉一致
- 人格模板自带的 `section_heading` 为默认值
- Claude 也可根据文章调性从标题风格库中选择更合适的风格（headings.md 中有匹配建议表）
- 用户可手动指定标题风格覆盖模板默认
- 标题颜色跟随主题色占位符

### 第四步附：分隔符

文章各章节之间插入装饰性分隔符。读取 `references/dividers.md` 获取 20 种分隔符设计。

**使用规则：**
- 每篇文章使用**一种**分隔符风格保持视觉一致
- Claude 根据人格风格自动选择匹配的分隔符（dividers.md 中有匹配建议表）
- 分隔符颜色跟随主题色
- 用户也可以指定分隔符样式

### 第四步附：配图策略

文章中的图片分两类处理：

**A. 数据图表（Claude 自主生成）**
当文章包含数据、统计、对比、排名等内容时，Claude 读取 `references/charts.md`，自动选择合适的图表组件（柱状图、统计卡片、对比卡片、漏斗图、评分图等），直接生成纯 HTML/CSS 图表嵌入文章中。
- 图表使用主题色占位符，与文章整体配色一致
- 同一篇文章中图表不超过 3 个
- 所有数字标注单位和来源

**B. 装饰插画（Claude 原生生成 · 纯 HTML/CSS）**

> **不使用外部图片。** Claude 使用纯内联样式 HTML/CSS 直接在文章中生成装饰性视觉元素，无需 WebSearch、WebFetch 或任何外部图片 URL。所有视觉元素均为 HTML 元素 + 内联 style 组合，与微信公众号完全兼容。

当文章需要视觉点缀时，Claude 根据文章内容和所选主题色，生成与文章调性匹配的装饰插画。

**可用的生成技法：**

1. **几何抽象图** — 使用 `border-radius`、`transform: rotate()`、`width/height` 组合出圆形、三角形、菱形等几何元素，搭配主题色 `{{PRIMARY}}`/`{{SECONDARY}}`/`{{HIGHLIGHT_BG}}` 构成抽象场景
2. **渐变色块横幅** — 使用 `linear-gradient` 制作全宽横幅装饰条，作为章节视觉锚点
3. **图标文字组合** — 使用 emoji + 大号字体 + 主题色背景，制作象征性图标卡片（如 🎓 代表教育、💡 代表创意、📊 代表数据）
4. **数据可视化装饰** — 利用 `width` 百分比模拟进度条、柱状图等轻量数据图形
5. **引用装饰框** — 使用多层 border、背景色叠加、圆角等制作精致的装饰性引用区域
6. **分栏信息卡** — flexbox 布局的多列信息展示卡片，用色块和图标增加视觉层次

**生成规则：**
- 所有视觉元素必须使用**纯内联 style**，不使用 CSS class、不使用 `<style>` 标签
- 颜色跟随主题色占位符（`{{PRIMARY}}`、`{{SECONDARY}}` 等），确保与文章整体配色一致
- 每篇文章插入 1-2 处装饰插画，分布在文章开头区域和中段转折处
- 装饰插画高度控制在 80px-160px，不喧宾夺主
- 长文（> 4000 字）控制在 2 处以内

**嵌入方式示例（几何抽象横幅）：**

```html
<section style="margin:32px 0;padding:24px 20px;background:linear-gradient(135deg, {{HIGHLIGHT_BG}} 0%, {{BG}} 100%);position:relative;overflow:hidden;">
<section style="position:absolute;right:-20px;top:-20px;width:80px;height:80px;border-radius:50%;background:{{PRIMARY}};opacity:0.06;"></section>
<section style="position:absolute;right:30px;bottom:-10px;width:40px;height:40px;border-radius:50%;background:{{SECONDARY}};opacity:0.08;"></section>
<p style="font-size:20px;font-weight:700;color:{{PRIMARY}};margin:0 0 6px;">{{VISUAL_TITLE}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;">{{VISUAL_SUBTITLE}}</p>
</section>
```

### 第五步：输出

输出完整 HTML，用代码块包裹。提示用户：
> 复制以上 HTML，在微信公众号后台选择「超文本」模式粘贴即可。

---

## 自动匹配表

### 人格自动匹配

| 内容信号 | 推荐人格 |
|---------|---------|
| 大量数据/百分比/统计 | infographic |
| 对话体/Q&A/采访 | podcast |
| 日记/碎碎念/第一人称叙事 | journal |
| 信/致/亲爱的/此致 | letter |
| 步骤/教程/"如何"/指南 | notebook |
| 评论/观点/深度分析 | newspaper |
| 旅行/行程/打卡 | ticket |
| 品牌/产品/知识科普 | magazine |
| 设计/极简/审美/摄影 | minimalist |
| 周报/周刊/每周回顾 | weekly-briefing |
| 案例分析/复盘/拆解/对比 | case-study |
| 发布/更新/上线/新功能/changelog | product-launch |
| 职场/求职/面试/职业规划 | career-guide |
| 通知/公告/规定/校园/行政 | campus-notice |
| 探店/攻略/本地/城市/打卡地 | local-guide |
| 专访/对话/人物故事/访谈 | interview-profile |
| 品牌故事/创业/起源/使命 | brand-story |
| 课程/讲义/课堂/教学/网课 | course-lesson |
| 招聘/岗位/JD/求贤/加入我们 | recruitment |
| 活动回顾/峰会/沙龙/复盘/现场 | event-recap |
| 社群/社区/群周报/成员/圈子 | community-update |
| TOP/排名/盘点/必看/年度/清单 | listicle |
| 评测/测评/打分/优缺点/横评/对比 | review |
| 一文读懂/科普/原理/解释/概念 | explainer |
| 政策/新规/解读/新政/变化/影响 | policy-brief |
| 推荐/好物/种草/必买/安利/好用 | recommendation |
| 时间线/大事记/里程碑/历程/编年 | timeline |
| 语录/金句/摘抄/每日一句/名言 | quote-card |
| 早报/快讯/要闻/速报/5条/资讯 | news-flash |
| 食谱/菜谱/做法/食材/烹饪/烘焙 | recipe |
| 邀请/请柬/活动报名/沙龙/发布会/开幕 | invitation |
| 月报/年报/数据/报告/复盘/增长/指标 | data-report |
| 政务/公报/红头/国企/央企/政府/通知/公文 | government-report |
| 清单/checklist/准备/必带/打勾/逐项 | checklist |
| 无明显信号的长文 | longform |

### 主题自动匹配

| 行业词 | 推荐主题 |
|-------|---------|
| 互联网/科技/产品/AI/SaaS | 科技蓝 T04 |
| 医疗/健康/口腔/医美 | 医疗青绿 T05 |
| 教育/培训/课程/知识付费 | 教育墨绿 T06 |
| 金融/投资/理财/基金 | 金融酒红 T07 |
| 法律/政策/合规/政务 | 法律政务 T08 |
| 留学/大学/签证/雅思/海外 | 留学国际 T09 |
| 房产/建筑/装修/设计 | 房产建筑 T10 |
| 汽车/机械/工业/制造 | 汽车机械 T11 |
| 农业/农村/种植/养殖 | 农业丰收 T27 |
| 电商/促销/双十一/大促/秒杀 | 电商大促 T28 |
| 物流/供应链/仓储 | 物流蓝灰 T29 |
| 数码/3C/手机/评测 | 数码极客 T50 |
| 婚礼/婚庆/婚纱 | 婚庆典礼 T51 |
| 体育/足球/篮球/运动赛事 | 体育竞技 T52 |
| 音乐/乐器/演出/音乐节 | 音乐律动 T53 |
| 学术/论文/科研/实验室 | 学术科研 T54 |
| 生活/家居/日常 | 温暖陶土 T12 |
| 美食/餐饮/食谱/探店 | 美食番茄 T13 |
| 文艺/文化/手作/阅读 | 文艺复古褐 T14 |
| 母婴/亲子/育儿 | 母婴柔粉 T15 |
| 宠物/萌宠/猫/狗 | 宠物暖黄 T16 |
| 心理/情感/疗愈/正念 | 心理薰衣草 T17 |
| 咖啡/茶/饮品 | 咖啡拿铁 T31 |
| 海洋/潜水/冲浪/水上 | 海盐苏打 T34 |
| 美妆/护肤/化妆/美容 | 美妆蜜桃 T55 |
| 园艺/植物/花卉/绿植 | 园艺草本 T56 |
| 国潮/中式/传统/汉服 | 国潮朱砂 T57 |
| 水墨/书法/国画/禅 | 水墨丹青 T58 |
| 日式/和风/日本/简约 | 日系和纸 T59 |
| 韩系/韩风/韩式/ins | 韩系奶油 T60 |
| 北欧/极简/MUJI/无印 | 北欧白桦 T61 |
| 莫兰迪/高级灰/低饱和 | 莫兰迪灰调 T62 |
| 港风/复古/怀旧/80年代 | 复古港风 T63 |
| Y2K/千禧/未来/赛博 | Y2K千禧 T64 |
| 侘寂/原木/素朴/自然材质 | 侘寂素朴 T65 |
| 法式/优雅/精致/轻奢 | 法式优雅 T66 |
| 工业/loft/水泥/粗犷 | 工业水泥 T67 |
| 田园/乡村/碎花/cottage | 田园碎花 T68 |
| 波西米亚/民族/异域 | 波西米亚 T69 |
| 少儿/童趣/幼儿/K12 | 少儿彩虹 T70 |
| 时尚/穿搭 | 时尚玫红 T18 |
| 运动/健身/活动 | 活力橙 T19 |
| 设计/艺术/创意/展览 | 创意紫 T20 |
| 旅行/户外/环保 | 自然森绿 T21 |
| 电竞/游戏/二次元 | 电竞霓虹 T22 |
| 摄影/视觉/影像 | 摄影纯黑 T23 |
| 茶道/茶文化/禅意 | 禅意茶道 T75 |
| 露营/户外/徒步/越野 | 露营户外 T76 |
| 影视/电影/剧集/胶片 | 影视胶片 T77 |
| 潮玩/手办/盲盒/收藏 | 潮玩手办 T78 |
| 古着/二手/vintage/中古 | 二手古着 T79 |
| 瑜伽/冥想/灵修/身心灵 | 瑜伽冥想 T80 |
| 赛博朋克/cyberpunk/霓虹城市/暗黑科技/未来主义 | 赛博朋克 T110 |
| 鸡尾酒/酒吧/调酒/夜生活/清爽饮品 | 莫吉托薄荷 T111 |
| 沙漠/大地色/中东/旅居/波西风情 | 沙漠玫瑰 T112 |
| 极光/北欧旅行/冰岛/自然奇观 | 极光绿紫 T113 |
| 故宫/皇家/宫廷/明清/古建筑/文物/文博 | 故宫朱墙 T114 |
| 冰川/极地/纯净/清洁/环保/净水 | 冰川蓝白 T115 |
| 巧克力/可可/甜品店/精品咖啡/深烘 | 可可摩卡 T116 |
| 节日/庆典/大促/年终 | 节庆中国红 T24 |
| 无明显行业词 | 极简墨黑 T01 |

---

## 主题色表

### 经典中性

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T01 | 极简墨黑 | #1a1a1a | #666666 | #f5f5f5 | #ffffff | #333333 | #999999 |
| T02 | 商务藏青 | #1a3a5c | #4a6f8a | #eef3f7 | #ffffff | #2d3748 | #8a9bb5 |
| T03 | 沉稳灰蓝 | #4a5568 | #718096 | #edf2f7 | #ffffff | #2d3748 | #a0aec0 |
| T49 | 暖调象牙 | #6b5c4d | #a39585 | #faf8f5 | #ffffff | #3d3530 | #b0a598 |

### 专业行业

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T04 | 科技蓝 | #2563eb | #60a5fa | #eff6ff | #ffffff | #1e293b | #94a3b8 |
| T05 | 医疗青绿 | #0d9488 | #5eead4 | #f0fdfa | #ffffff | #1e293b | #94a3b8 |
| T06 | 教育墨绿 | #166534 | #4ade80 | #f0fdf4 | #ffffff | #1e293b | #94a3b8 |
| T07 | 金融酒红 | #7f1d1d | #b91c1c | #fef2f2 | #ffffff | #1c1917 | #a8a29e |
| T08 | 法律政务 | #374151 | #991b1b | #f3f4f6 | #ffffff | #1f2937 | #9ca3af |
| T09 | 留学国际 | #1e3a5f | #b8860b | #f8f6f0 | #ffffff | #1c1917 | #a8a29e |
| T10 | 房产建筑 | #57534e | #b87333 | #fafaf9 | #ffffff | #292524 | #a8a29e |
| T11 | 汽车机械 | #44403c | #ea580c | #fafaf9 | #ffffff | #292524 | #a8a29e |
| T27 | 农业丰收 | #3f6212 | #a3e635 | #f7fee7 | #ffffff | #1a2e05 | #84cc16 |
| T28 | 电商大促 | #e11d48 | #ff6b35 | #fff1f2 | #ffffff | #1c1917 | #a8a29e |
| T29 | 物流蓝灰 | #1e40af | #64748b | #eff6ff | #ffffff | #1e293b | #94a3b8 |
| T50 | 数码极客 | #0f766e | #2dd4bf | #f0fdfa | #f8fffe | #134e4a | #5eead4 |
| T51 | 婚庆典礼 | #9f1239 | #e8b4b8 | #fff1f2 | #fffbfb | #4a1525 | #dba0a8 |
| T52 | 体育竞技 | #1d4ed8 | #f59e0b | #eff6ff | #ffffff | #1e293b | #94a3b8 |
| T53 | 音乐律动 | #9333ea | #f472b6 | #faf5ff | #ffffff | #1e1b4b | #a78bfa |
| T54 | 学术科研 | #1e3a5f | #475569 | #f1f5f9 | #ffffff | #0f172a | #64748b |

### 生活方式

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T12 | 温暖陶土 | #9a6b4a | #c4956a | #fdf8f4 | #ffffff | #3f3f3f | #a89585 |
| T13 | 美食番茄 | #dc2626 | #f97316 | #fff7ed | #ffffff | #3f3f3f | #b0a090 |
| T14 | 文艺复古褐 | #6b4423 | #a0785a | #faf6f1 | #ffffff | #3f3f3f | #a89080 |
| T15 | 母婴柔粉 | #db2777 | #f9a8d4 | #fdf2f8 | #ffffff | #3f3f3f | #c9a0b8 |
| T16 | 宠物暖黄 | #a16207 | #d97706 | #fefce8 | #ffffff | #3f3f3f | #b0a080 |
| T17 | 心理薰衣草 | #6d28d9 | #a78bfa | #f5f3ff | #ffffff | #3f3f3f | #a090c0 |
| T31 | 咖啡拿铁 | #78553a | #c8a882 | #fdf6ee | #ffffff | #3b2f2f | #b09a80 |
| T34 | 海盐苏打 | #0891b2 | #67e8f9 | #ecfeff | #ffffff | #164e63 | #a5f3fc |
| T55 | 美妆蜜桃 | #e84393 | #fd79a8 | #ffeef5 | #ffffff | #3d1f30 | #d4849e |
| T56 | 园艺草本 | #4d7c0f | #84cc16 | #f7fee7 | #fefffe | #1a2e05 | #a3e635 |

### 风格美学

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T57 | 国潮朱砂 | #b91c1c | #ca8a04 | #fef2f2 | #fdfbf7 | #1c1917 | #a8a29e |
| T58 | 水墨丹青 | #334155 | #78716c | #f8fafc | #ffffff | #1e293b | #94a3b8 |
| T59 | 日系和纸 | #92400e | #c2a67e | #fefce8 | #fffef7 | #451a03 | #c8b89a |
| T60 | 韩系奶油 | #a16853 | #d4b5a0 | #fef9f4 | #fffdfb | #44302a | #c4a898 |
| T61 | 北欧白桦 | #1e293b | #94a3b8 | #f8fafc | #ffffff | #0f172a | #cbd5e1 |
| T62 | 莫兰迪灰调 | #78716c | #a8a29e | #f5f5f4 | #fafaf9 | #44403c | #a8a29e |
| T63 | 复古港风 | #b91c1c | #fbbf24 | #fef9c3 | #fffbeb | #1c1917 | #a8a29e |
| T64 | Y2K千禧 | #d946ef | #22d3ee | #fdf4ff | #ffffff | #1e1b4b | #c084fc |
| T65 | 侘寂素朴 | #57534e | #a8a29e | #f5f5f4 | #fafaf9 | #292524 | #d6d3d1 |
| T66 | 法式优雅 | #1e3a5f | #c9a96e | #faf8f3 | #ffffff | #1c1917 | #a89880 |
| T67 | 工业水泥 | #292524 | #78716c | #e7e5e4 | #fafaf9 | #1c1917 | #a8a29e |
| T68 | 田园碎花 | #be185d | #86efac | #fdf2f8 | #fffbfb | #3f3f3f | #d4a0b8 |
| T69 | 波西米亚 | #b45309 | #dc2626 | #fffbeb | #fffef7 | #451a03 | #c8a070 |
| T70 | 少儿彩虹 | #2563eb | #f59e0b | #eff6ff | #ffffff | #1e293b | #60a5fa |

### 活力鲜明

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T18 | 时尚玫红 | #be185d | #ec4899 | #fdf2f8 | #ffffff | #1f2937 | #9ca3af |
| T19 | 活力橙 | #ea580c | #fb923c | #fff7ed | #ffffff | #1f2937 | #9ca3af |
| T20 | 创意紫 | #7c3aed | #a78bfa | #f5f3ff | #ffffff | #1f2937 | #9ca3af |
| T21 | 自然森绿 | #15803d | #4ade80 | #f0fdf4 | #ffffff | #1f2937 | #9ca3af |
| T33 | 樱花浅粉 | #ec4899 | #fbcfe8 | #fdf2f8 | #ffffff | #3f3f3f | #d4a0c0 |
| T35 | 柠檬汽水 | #ca8a04 | #fde047 | #fefce8 | #ffffff | #1f2937 | #9ca3af |
| T36 | 薄荷清新 | #059669 | #6ee7b7 | #ecfdf5 | #ffffff | #1f2937 | #9ca3af |
| T71 | 电光靛蓝 | #4f46e5 | #818cf8 | #eef2ff | #ffffff | #1e1b4b | #a5b4fc |

### 深色模式

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T22 | 电竞霓虹 | #7c3aed | #06b6d4 | #1e1b4b | #0f172a | #e2e8f0 | #94a3b8 |
| T23 | 摄影纯黑 | #ffffff | #a3a3a3 | #262626 | #171717 | #e5e5e5 | #737373 |
| T39 | 午夜蓝金 | #fbbf24 | #d97706 | #1e293b | #0f172a | #f1f5f9 | #94a3b8 |
| T40 | 暗夜翡翠 | #34d399 | #6ee7b7 | #064e3b | #0a1f17 | #ecfdf5 | #6ee7b7 |
| T41 | 深空灰紫 | #c084fc | #a78bfa | #2e1065 | #0f0720 | #f3e8ff | #a78bfa |
| T72 | 暗黑玫瑰 | #fb7185 | #f43f5e | #4c0519 | #1a0a10 | #ffe4e6 | #fda4af |

### 季节节庆

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T42 | 春日抹茶 | #4d7c0f | #bef264 | #f7fee7 | #ffffff | #1a2e05 | #84cc16 |
| T43 | 盛夏海洋 | #0369a1 | #38bdf8 | #f0f9ff | #ffffff | #0c4a6e | #7dd3fc |
| T44 | 秋日银杏 | #b45309 | #f59e0b | #fffbeb | #ffffff | #451a03 | #d97706 |
| T73 | 冬日暖炉 | #78350f | #dc2626 | #fef2f2 | #fffbf5 | #431407 | #b45309 |
| T24 | 节庆中国红 | #dc2626 | #fbbf24 | #fef2f2 | #ffffff | #1c1917 | #a8a29e |
| T47 | 圣诞红绿 | #15803d | #dc2626 | #f0fdf4 | #ffffff | #1c1917 | #a8a29e |
| T48 | 万圣南瓜 | #ea580c | #7c3aed | #fff7ed | #ffffff | #1c1917 | #a8a29e |
| T74 | 七夕粉紫 | #a855f7 | #f472b6 | #faf5ff | #fffbfe | #3b0764 | #c084fc |

### 补充特色

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T75 | 禅意茶道 | #5c4033 | #8b7355 | #f5f0eb | #fdfcfa | #3b2a1f | #a89580 |
| T76 | 露营户外 | #365314 | #ca8a04 | #f7fee7 | #fefff5 | #1a2e05 | #84cc16 |
| T77 | 影视胶片 | #1c1917 | #b45309 | #292524 | #fafaf9 | #1c1917 | #78716c |
| T78 | 潮玩手办 | #e11d48 | #8b5cf6 | #fff1f2 | #ffffff | #1e1b4b | #a78bfa |
| T79 | 二手古着 | #854d0e | #a16207 | #fef9c3 | #fffef7 | #422006 | #ca8a04 |
| T80 | 瑜伽冥想 | #7e22ce | #c4b5fd | #faf5ff | #fefcff | #3b0764 | #c4b5fd |

### 扩展经典

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T81 | 中性卡其 | #78716c | #bfb5a8 | #f5f3f0 | #ffffff | #3d3530 | #a8a29e |
| T82 | 冷灰银蓝 | #475569 | #94a3b8 | #f1f5f9 | #ffffff | #1e293b | #cbd5e1 |

### 扩展行业

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T83 | 保险灰绿 | #3f6b5e | #6b9e8a | #f0f7f4 | #ffffff | #1a3d32 | #8ab5a2 |
| T84 | 航空天蓝 | #0284c7 | #7dd3fc | #f0f9ff | #ffffff | #0c4a6e | #bae6fd |
| T85 | 酒店金棕 | #7c5e3c | #c9a96e | #faf5ed | #ffffff | #3d2e1c | #bfa67a |
| T86 | 教培橙黄 | #d97706 | #fbbf24 | #fffbeb | #ffffff | #451a03 | #f59e0b |

### 扩展生活

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T87 | 烘焙奶油 | #a16207 | #e8c874 | #fefce8 | #fffef5 | #3d2500 | #d4a730 |
| T88 | 手工木棉 | #7c5c42 | #b8977a | #faf3ec | #ffffff | #3d2e22 | #a89070 |
| T89 | 钓鱼湖蓝 | #1e6091 | #4eabd1 | #e8f4fb | #ffffff | #0a3555 | #72bfe0 |
| T90 | 读书墨香 | #3b3026 | #7a6b5a | #f7f4f0 | #fffdf8 | #2a2018 | #a09585 |

### 扩展美学

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T91 | 赤金大气 | #92400e | #d4a520 | #fef8e8 | #fffef5 | #451a03 | #c9a040 |
| T92 | 糖果马卡龙 | #c084fc | #f9a8d4 | #fdf4ff | #fff5fa | #3b0764 | #e9b5d0 |
| T93 | 新中式松绿 | #2d6a4f | #74c69d | #ecf8f0 | #ffffff | #1b4332 | #95d5ae |
| T94 | 极繁主义 | #be123c | #7c3aed | #fff0f3 | #ffffff | #1a1a2e | #a78bfa |
| T95 | 蒸汽波 | #c026d3 | #38bdf8 | #fdf4ff | #fefcff | #4a044e | #a855f7 |

### 扩展活力

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T96 | 荧光柠绿 | #65a30d | #d9f99d | #f7fee7 | #ffffff | #1a2e05 | #a3e635 |
| T97 | 珊瑚橘 | #f97316 | #fdba74 | #fff7ed | #ffffff | #431407 | #fb923c |
| T98 | 天际淡蓝 | #0ea5e9 | #7dd3fc | #f0f9ff | #ffffff | #0c4a6e | #bae6fd |
| T99 | 浆果紫红 | #a21caf | #e879f9 | #fdf4ff | #ffffff | #4a044e | #d946ef |

### 扩展深色

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T100 | 暗调咖啡 | #d4a373 | #a87c50 | #3d2b1a | #1a1008 | #f5e6d3 | #b8977a |
| T101 | 午夜森林 | #4ade80 | #22c55e | #052e16 | #0a1a0f | #ecfdf5 | #86efac |
| T102 | 星空靛蓝 | #818cf8 | #6366f1 | #1e1b4b | #0c0a2a | #e0e7ff | #a5b4fc |

### 扩展节庆

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T103 | 清明踏青 | #16a34a | #86efac | #f0fdf4 | #ffffff | #14532d | #4ade80 |
| T104 | 中秋月色 | #a16207 | #fde68a | #fefce8 | #fffef5 | #451a03 | #eab308 |
| T105 | 教师节 | #1d4ed8 | #fbbf24 | #eff6ff | #ffffff | #1e3a5f | #60a5fa |

### 扩展特色

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T106 | 亲子互动 | #ea580c | #fde047 | #fff7ed | #ffffff | #3f3f3f | #f59e0b |
| T107 | 旅行手帐 | #0d9488 | #a16207 | #f0fdfa | #ffffff | #134e4a | #b8860b |
| T108 | 电台深夜 | #6366f1 | #c4b5fd | #eef2ff | #f8f7ff | #312e81 | #a5b4fc |
| T109 | 街头涂鸦 | #dc2626 | #fbbf24 | #fef2f2 | #ffffff | #1a1a1a | #78716c |

### 第五批扩展

| 代号 | 名称 | PRIMARY | SECONDARY | HIGHLIGHT_BG | BG | TEXT | TEXT_LIGHT |
|------|------|---------|-----------|-------------|-----|------|-----------|
| T110 | 赛博朋克 | #ff2d78 | #00f0ff | #1a0a1e | #0a0510 | #f0e6f6 | #c880e0 |
| T111 | 莫吉托薄荷 | #10b981 | #a3e635 | #ecfdf5 | #ffffff | #064e3b | #6ee7b7 |
| T112 | 沙漠玫瑰 | #be6a5a | #e8c8a0 | #fdf5f0 | #fffbf7 | #4a2520 | #c8a088 |
| T113 | 极光绿紫 | #06b6d4 | #a855f7 | #ecfeff | #ffffff | #164e63 | #67e8f9 |
| T114 | 故宫朱墙 | #a83232 | #c8a45c | #fef5f0 | #fffdf5 | #3d1010 | #b89060 |
| T115 | 冰川蓝白 | #38bdf8 | #e0f2fe | #f0f9ff | #ffffff | #0c4a6e | #7dd3fc |
| T116 | 可可摩卡 | #5c3d2e | #a07850 | #f8f0e8 | #fffcf7 | #3a2518 | #b89878 |

---

## 人格索引

读取对应文件获取该人格的 HTML 模板：

| 代号 | 人格名称 | 模板文件 | 说明 |
|------|---------|--------|------|
| P01 | 旧报纸 | `references/personalities/newspaper.md` | 长文评论/深度观点 |
| P02 | 票根感 | `references/personalities/ticket.md` | 旅行行程/打卡记录 |
| P03 | 极简和风 | `references/personalities/minimalist.md` | 设计/极简/审美内容 |
| P04 | 粗野风 | `references/personalities/brutalist.md` | 先锋/实验性/反套路 |
| P05 | 杂志感 | `references/personalities/magazine.md` | 品牌专题/深度特写 |
| P06 | 信息图卡片 | `references/personalities/infographic.md` | 数据可视化/统计呈现 |
| P07 | 手账日记 | `references/personalities/journal.md` | 个人日记/碎碎念 |
| P08 | 书信手札 | `references/personalities/letter.md` | 书信/致信体 |
| P09 | 播客对话 | `references/personalities/podcast.md` | 对话体/Q&A |
| P10 | 纯净长文 | `references/personalities/longform.md` | 通用长文/散文 |
| P11 | 笔记课堂 | `references/personalities/notebook.md` | 教程/步骤/指南 |
| P12 | 周刊简报 | `references/personalities/weekly-briefing.md` | 周报/周刊/每周回顾 |
| P13 | 案例拆解 | `references/personalities/case-study.md` | 案例分析/复盘 |
| P14 | 产品发布 | `references/personalities/product-launch.md` | 产品发布/更新日志 |
| P15 | 职场成长 | `references/personalities/career-guide.md` | 职场/求职/职业规划 |
| P16 | 校园通知 | `references/personalities/campus-notice.md` | 通知/公告/行政 |
| P17 | 本地指南 | `references/personalities/local-guide.md` | 探店/攻略/城市打卡 |
| P18 | 人物专访 | `references/personalities/interview-profile.md` | 专访/人物故事 |
| P19 | 品牌故事 | `references/personalities/brand-story.md` | 品牌故事/创业叙事 |
| P20 | 课程讲义 | `references/personalities/course-lesson.md` | 课程/教学/讲义 |
| P21 | 招聘 | `references/personalities/recruitment.md` | 招聘/岗位/加入我们 |
| P22 | 活动回顾 | `references/personalities/event-recap.md` | 活动/峰会/沙龙复盘 |
| P23 | 社群动态 | `references/personalities/community-update.md` | 社群/圈子/群周报 |
| P24 | 榜单盘点 | `references/personalities/listicle.md` | TOP N/年度盘点/清单 |
| P25 | 测评对比 | `references/personalities/review.md` | 产品评测/横评/打分 |
| P26 | 科普解说 | `references/personalities/explainer.md` | 一文读懂/概念拆解 |
| P27 | 政策解读 | `references/personalities/policy-brief.md` | 政策分析/新规解读 |
| P28 | 好物种草 | `references/personalities/recommendation.md` | 好物推荐/种草清单 |
| P29 | 时间线 | `references/personalities/timeline.md` | 大事记/里程碑/编年 |
| P30 | 语录金句 | `references/personalities/quote-card.md` | 名言/摘抄/每日一句 |
| P31 | 快讯速报 | `references/personalities/news-flash.md` | 早报/行业快讯/要闻 |
| P32 | 食谱菜谱 | `references/personalities/recipe.md` | 食谱/做法/烹饪指南 |
| P33 | 邀请函 | `references/personalities/invitation.md` | 活动邀请/发布会/沙龙请柬 |
| P34 | 数据报告 | `references/personalities/data-report.md` | 年报/月报/数据复盘 |
| P35 | 政务公报 | `references/personalities/government-report.md` | 政府/国企/央企公文风 |
| P36 | 清单指南 | `references/personalities/checklist.md` | 清单/Checklist/行前准备 |

---

## 深色模式兼容性规则

微信客户端约 30-40% 的用户使用深色模式阅读。微信深色模式会自动反转页面底色，但**不会智能处理 inline style 中的所有颜色**，容易导致文字消失、对比度丧失等问题。

生成 HTML 时必须遵守以下规则：

### 禁止项

1. **禁止纯白文字 `color:#ffffff`** 用于浅色背景上的反色块内文字——深色模式下背景被反转为白色，白字直接消失。替代方案：反色块内文字统一用 `color:#ffffff`，但该反色块的 `background-color` 必须是足够深的色值（明度 < 40%），确保深色模式反转后仍可读。
2. **禁止 `background-color:#ffffff` 作为装饰底色**——和页面底色无法区分。如需浅底色，用 `{{HIGHLIGHT_BG}}`（通常为 `#f5f5f5` 一类的浅灰/浅米），深色模式反转后会变成深灰，仍可区分。
3. **禁止仅靠颜色传递关键信息**——如"红色=错误，绿色=正确"。必须同时使用文字标签（✓ / ✗）或图标辅助。

### 安全做法

1. **正文字色用 `{{TEXT}}`**（通常 `#333` 或 `#1f2937`），不要用纯黑 `#000000`——深色模式下纯黑反转为纯白，刺眼。
2. **高亮背景用 `{{HIGHLIGHT_BG}}`**——这些色值经过设计，在深色模式反转后仍能和正文底色形成合理对比。
3. **边框用于辅助区分**——不要只靠 `background-color` 区分区域，加 `border` 作为后备线索。
4. **深色主题（T22/T23/T39-T41/T72/T100-T102/T110）需要特殊处理**——这些主题本身是深色底，微信深色模式下不会二次反转。生成时在最外层容器加 `data-darkmode="force-dark"` 属性（微信编辑器会识别）。

### 自检清单

生成 HTML 后，Claude 应在心理上执行以下检查：
- [ ] 所有 `color:#ffffff` 的文字，其父级 `background-color` 是否足够深？
- [ ] 所有 `background-color` 值，反转后（255 - R/G/B）是否仍和文字形成可读对比？
- [ ] 是否有仅靠颜色（无文字/图标）传达的关键信息？

---

## 通用系统组件

以下组件**跨所有 36 个模板通用**，不属于任何特定人格。当文章内容需要时，Claude 自动在对应位置插入。

### 通用数据表格 data_table

适用于任何需要表格的场景：价格对比、功能对比、参数列表、时间安排等。

```html
<!-- 表头 -->
<section style="display:flex;background-color:{{PRIMARY}};padding:10px 14px;">
<p style="flex:1;font-size:13px;font-weight:700;color:#ffffff;margin:0;">{{COL_1}}</p>
<p style="flex:1;font-size:13px;font-weight:700;color:#ffffff;margin:0;text-align:center;">{{COL_2}}</p>
<p style="flex:1;font-size:13px;font-weight:700;color:#ffffff;margin:0;text-align:right;">{{COL_3}}</p>
</section>
<!-- 奇数行（浅底） -->
<section style="display:flex;padding:9px 14px;background-color:{{HIGHLIGHT_BG}};">
<p style="flex:1;font-size:13px;color:{{TEXT}};margin:0;">{{CELL}}</p>
<p style="flex:1;font-size:13px;color:{{TEXT}};margin:0;text-align:center;">{{CELL}}</p>
<p style="flex:1;font-size:13px;color:{{TEXT}};margin:0;text-align:right;">{{CELL}}</p>
</section>
<!-- 偶数行（白底） -->
<section style="display:flex;padding:9px 14px;">
<p style="flex:1;font-size:13px;color:{{TEXT}};margin:0;">{{CELL}}</p>
<p style="flex:1;font-size:13px;color:{{TEXT}};margin:0;text-align:center;">{{CELL}}</p>
<p style="flex:1;font-size:13px;color:{{TEXT}};margin:0;text-align:right;">{{CELL}}</p>
</section>
```

列数灵活（2-5 列），通过增减 `<p>` 实现。奇偶行交替 `{{HIGHLIGHT_BG}}` / 透明。外层可用 `margin:22px 0;font-size:13px;` 包裹。

### 通用提示框 callout_box

四种语义类型，使用**固定色**（不跟主题色走），保证跨主题语义一致。

#### ✅ 提示 (tip)

```html
<section style="display:flex;align-items:flex-start;margin:22px 0;padding:14px 16px;background-color:#f0fdf4;border-left:3px solid #15803d;border-radius:0 6px 6px 0;">
<span style="flex-shrink:0;margin-right:10px;font-size:16px;">✅</span>
<section style="flex:1;">
<p style="font-size:12px;font-weight:700;color:#15803d;margin:0 0 4px 0;">提示</p>
<p style="font-size:14px;color:#166534;line-height:1.7;margin:0;">{{TIP_CONTENT}}</p>
</section>
</section>
```

#### ⚠️ 警告 (warning)

```html
<section style="display:flex;align-items:flex-start;margin:22px 0;padding:14px 16px;background-color:#fffbeb;border-left:3px solid #d97706;border-radius:0 6px 6px 0;">
<span style="flex-shrink:0;margin-right:10px;font-size:16px;">⚠️</span>
<section style="flex:1;">
<p style="font-size:12px;font-weight:700;color:#d97706;margin:0 0 4px 0;">注意</p>
<p style="font-size:14px;color:#92400e;line-height:1.7;margin:0;">{{WARNING_CONTENT}}</p>
</section>
</section>
```

#### ℹ️ 信息 (info)

```html
<section style="display:flex;align-items:flex-start;margin:22px 0;padding:14px 16px;background-color:#eff6ff;border-left:3px solid #2563eb;border-radius:0 6px 6px 0;">
<span style="flex-shrink:0;margin-right:10px;font-size:16px;">ℹ️</span>
<section style="flex:1;">
<p style="font-size:12px;font-weight:700;color:#2563eb;margin:0 0 4px 0;">说明</p>
<p style="font-size:14px;color:#1e40af;line-height:1.7;margin:0;">{{INFO_CONTENT}}</p>
</section>
</section>
```

#### ❌ 危险 (danger)

```html
<section style="display:flex;align-items:flex-start;margin:22px 0;padding:14px 16px;background-color:#fef2f2;border-left:3px solid #dc2626;border-radius:0 6px 6px 0;">
<span style="flex-shrink:0;margin-right:10px;font-size:16px;">❌</span>
<section style="flex:1;">
<p style="font-size:12px;font-weight:700;color:#dc2626;margin:0 0 4px 0;">危险</p>
<p style="font-size:14px;color:#991b1b;line-height:1.7;margin:0;">{{DANGER_CONTENT}}</p>
</section>
</section>
```

### 使用规则

- Claude 根据内容语义自动判断是否插入以及使用哪种类型
- 用户用 Markdown `> ⚠️ 内容` 或 `> ✅ 内容` 时，映射为对应类型
- 同一篇文章中同类型提示框不超过 3 个，避免视觉疲劳
- 提示框可以出现在任何模板中，但**不替代**模板自身的特有组件（如 explainer 的 `key_takeaway` 仍优先使用）

---

## 输出提示

生成 HTML 后，在代码块之后附上：

> 📋 复制以上 HTML → 打开微信公众号后台 → 选择「超文本」模式 → 粘贴即可。
>
> 当前使用：**{人格名称}** 人格 + **{主题名称}** 配色

---

## 尾部品牌名片

每篇文章末尾附上品牌名片，4 种样式。Claude 默认使用 **样式 B（横排名片）**；用户可指定其他样式，或在品牌配置中设置偏好样式。

所有样式使用以下占位符（从品牌配置读取）：
- `{{BRAND_NAME}}` → 公众号 / 品牌名称
- `{{TAGLINE}}` → 一句话简介
- `{{CONTACT}}` → 联系方式（微信号 / 电话 / 邮箱）
- `{{AVATAR_SRC}}` → 头像图片 src（base64 或 URL）
- `{{QR_SRC}}` → 二维码图片 src

---

### 样式 A · 居中名片

最克制，适合轻量内容、个人号。

```html
<section style="margin:32px 0 0;padding:20px 0 0;border-top:1px solid #f0f0f0;text-align:center;">
<img src="{{AVATAR_SRC}}" onerror="this.style.display='none'" style="width:52px;height:52px;border-radius:50%;margin:0 auto 10px;display:block;border:1px solid #f0f0f0;object-fit:cover;">
<p style="font-size:15px;font-weight:700;color:{{TEXT}};margin:0 0 4px;">{{BRAND_NAME}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">{{TAGLINE}}</p>
</section>
```

---

### 样式 B · 横排名片（默认）

紧凑横排，视觉占用小，不抢正文风头。

```html
<section style="margin:32px 0 0;padding:18px 0 0;border-top:1px solid #f0f0f0;display:flex;align-items:center;">
<img src="{{AVATAR_SRC}}" onerror="this.style.display='none'" style="width:44px;height:44px;border-radius:50%;flex-shrink:0;border:1px solid #f0f0f0;object-fit:cover;margin-right:12px;">
<section>
<p style="font-size:14px;font-weight:700;color:{{TEXT}};margin:0 0 3px;">{{BRAND_NAME}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;line-height:1.5;">{{TAGLINE}}</p>
</section>
</section>
```

---

### 样式 C · 名片 + 二维码

适合需要导流的号，左名片右二维码。

```html
<section style="margin:32px 0 0;padding:18px 0 0;border-top:1px solid #f0f0f0;display:flex;align-items:center;justify-content:space-between;">
<section style="display:flex;align-items:center;">
<img src="{{AVATAR_SRC}}" onerror="this.style.display='none'" style="width:44px;height:44px;border-radius:50%;flex-shrink:0;border:1px solid #f0f0f0;object-fit:cover;margin-right:12px;">
<section>
<p style="font-size:14px;font-weight:700;color:{{TEXT}};margin:0 0 3px;">{{BRAND_NAME}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">{{TAGLINE}}</p>
</section>
</section>
<img src="{{QR_SRC}}" onerror="this.style.display='none'" style="width:60px;height:60px;flex-shrink:0;margin-left:14px;border:1px solid #f0f0f0;">
</section>
```

---

### 样式 D · 卡片式

带底色的品牌区，稍有品牌感。底色跟随主题 `{{HIGHLIGHT_BG}}`。

```html
<section style="margin:32px 0 0;padding:18px;background-color:{{HIGHLIGHT_BG}};">
<section style="display:flex;align-items:center;">
<img src="{{AVATAR_SRC}}" onerror="this.style.display='none'" style="width:48px;height:48px;border-radius:50%;flex-shrink:0;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.06);object-fit:cover;margin-right:14px;">
<section>
<p style="font-size:14px;font-weight:700;color:{{TEXT}};margin:0 0 3px;">{{BRAND_NAME}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;line-height:1.5;">{{TAGLINE}}</p>
</section>
</section>
</section>
```

---

## 行业引导 CTA

文章末尾（品牌名片之前）可插入行动号召区。按**行动类型**选择，不同行业共用同一结构。

Claude 根据文章内容自动判断是否插入 CTA 及使用哪种类型；用户也可以直接指定。若用户未设置 `{{CONTACT}}` 等品牌信息，CTA 中相关字段显示为占位符提示。

---

### CTA-1 · 后台回复型

适用：知识付费 / 内容号 / 教育 / 工具类——回复关键词触发自动回复

```html
<section style="margin:28px 0;padding:20px;background-color:{{HIGHLIGHT_BG}};">
<p style="font-size:12px;font-weight:700;color:{{PRIMARY}};margin:0 0 8px;letter-spacing:1px;">{{CTA_LABEL}}</p>
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0 0 8px;line-height:1.4;">{{CTA_HOOK}}</p>
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">后台回复「<span style="font-weight:700;color:{{PRIMARY}};">{{KEYWORD}}</span>」{{CTA_REWARD}}</p>
</section>
```

变量示例：`CTA_LABEL=📚 免费领取`，`CTA_HOOK=想系统学习？先拿这份入门资料`，`KEYWORD=资料`，`CTA_REWARD=即可获取 PDF + 思维导图`

---

### CTA-2 · 预约咨询型

适用：留学 / 法律 / 理财 / 医疗 / 装修设计——预约 1 对 1 服务

```html
<section style="margin:28px 0;padding:20px;border:1px solid {{HIGHLIGHT_BG}};">
<p style="font-size:12px;font-weight:700;color:{{PRIMARY}};margin:0 0 8px;letter-spacing:1px;">{{CTA_LABEL}}</p>
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0 0 8px;line-height:1.4;">{{CTA_HOOK}}</p>
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:0 0 14px;line-height:1.7;">{{CTA_DESC}}</p>
<section style="display:flex;align-items:center;gap:10px;">
<img src="{{AVATAR_SRC}}" onerror="this.style.display='none'" style="width:36px;height:36px;border-radius:50%;border:1px solid {{HIGHLIGHT_BG}};object-fit:cover;flex-shrink:0;">
<section>
<p style="font-size:13px;font-weight:600;color:{{PRIMARY}};margin:0;">{{BRAND_NAME}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">{{CONTACT}}</p>
</section>
</section>
</section>
```

---

### CTA-3 · 到店 / 到场体验型

适用：餐饮 / 健身 / 美容 / 实体零售——凭文章到店享受福利

```html
<section style="margin:28px 0;padding:20px;border:1px solid {{HIGHLIGHT_BG}};">
<p style="font-size:12px;font-weight:700;color:{{PRIMARY}};margin:0 0 8px;letter-spacing:1px;">{{CTA_LABEL}}</p>
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0 0 8px;line-height:1.4;">{{CTA_HOOK}}</p>
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:0 0 14px;line-height:1.7;">{{CTA_DESC}}</p>
<p style="font-size:13px;color:{{TEXT}};margin:0;">📍 {{ADDRESS}} · 📞 {{CONTACT}}</p>
</section>
```

---

### CTA-4 · 社群加入型

适用：所有内容号——邀请读者加入社群 / 加微信

```html
<section style="margin:28px 0;background-color:{{PRIMARY}};padding:20px;text-align:center;">
<p style="font-size:16px;font-weight:700;color:#ffffff;margin:0 0 8px;">{{CTA_HOOK}}</p>
<p style="font-size:13px;color:rgba(255,255,255,0.7);margin:0 0 16px;line-height:1.7;">{{CTA_DESC}}</p>
<section style="display:flex;align-items:center;justify-content:center;gap:14px;">
<img src="{{AVATAR_SRC}}" onerror="this.style.display='none'" style="width:44px;height:44px;border-radius:50%;border:2px solid rgba(255,255,255,0.3);object-fit:cover;flex-shrink:0;">
<section style="text-align:left;">
<p style="font-size:13px;font-weight:600;color:#ffffff;margin:0;">{{BRAND_NAME}}</p>
<p style="font-size:12px;color:rgba(255,255,255,0.6);margin:0;">微信：{{CONTACT}}</p>
</section>
</section>
</section>
```

---

### CTA-5 · 课程 / 活动报名型

适用：教育培训 / 知识付费 / 线下活动——扫码报名

```html
<section style="margin:28px 0;padding:20px;background-color:{{HIGHLIGHT_BG}};">
<p style="font-size:12px;font-weight:700;color:{{PRIMARY}};margin:0 0 8px;letter-spacing:1px;">{{CTA_LABEL}}</p>
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0 0 8px;line-height:1.4;">{{CTA_HOOK}}</p>
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:0 0 16px;line-height:1.7;">{{CTA_DESC}}</p>
<section style="display:flex;align-items:center;justify-content:space-between;">
<section>
<p style="font-size:13px;font-weight:600;color:{{PRIMARY}};margin:0;">{{BRAND_NAME}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">{{CONTACT}}</p>
</section>
<img src="{{QR_SRC}}" onerror="this.style.display='none'" style="width:64px;height:64px;border:1px solid {{PRIMARY}};flex-shrink:0;">
</section>
</section>
```

---

### CTA-6 · 限时福利型

适用：电商 / 产品 / SaaS——限时折扣 / 免费试用

```html
<section style="margin:28px 0;padding:20px;background-color:{{HIGHLIGHT_BG}};">
<p style="font-size:12px;font-weight:700;color:{{PRIMARY}};margin:0 0 8px;letter-spacing:1px;">{{CTA_LABEL}}</p>
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0 0 8px;line-height:1.4;">{{CTA_HOOK}}</p>
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:0 0 12px;line-height:1.7;">{{CTA_DESC}}</p>
<p style="font-size:13px;color:{{PRIMARY}};font-weight:600;margin:0;">后台回复「<span style="font-weight:700;">{{KEYWORD}}</span>」领取</p>
</section>
```

---

### CTA-7 · 免费测评 / 诊断型

适用：咨询 / 健康 / 美妆 / 留学——填问卷获取个性化报告

```html
<section style="margin:28px 0;padding:20px;border:1px solid {{HIGHLIGHT_BG}};">
<p style="font-size:12px;font-weight:700;color:{{PRIMARY}};margin:0 0 8px;letter-spacing:1px;">{{CTA_LABEL}}</p>
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0 0 8px;line-height:1.4;">{{CTA_HOOK}}</p>
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:0 0 14px;line-height:1.7;">{{CTA_DESC}}</p>
<section style="display:flex;align-items:center;gap:10px;">
<img src="{{AVATAR_SRC}}" onerror="this.style.display='none'" style="width:36px;height:36px;border-radius:50%;border:1px solid {{HIGHLIGHT_BG}};object-fit:cover;flex-shrink:0;">
<section>
<p style="font-size:13px;font-weight:600;color:{{PRIMARY}};margin:0;">{{BRAND_NAME}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">后台发送「{{KEYWORD}}」获取测评</p>
</section>
</section>
</section>
```

---

### CTA-8 · 扫码关注型

适用：所有内容号——纯粹的涨粉引导，无其他行动

```html
<section style="margin:28px 0;padding:18px 0 0;border-top:1px solid {{HIGHLIGHT_BG}};text-align:center;">
<section style="display:flex;align-items:center;justify-content:space-between;max-width:280px;margin:0 auto;">
<section style="display:flex;align-items:center;gap:10px;text-align:left;">
<img src="{{AVATAR_SRC}}" onerror="this.style.display='none'" style="width:44px;height:44px;border-radius:50%;border:1px solid {{HIGHLIGHT_BG}};object-fit:cover;flex-shrink:0;">
<section>
<p style="font-size:14px;font-weight:700;color:{{TEXT}};margin:0 0 3px;">{{BRAND_NAME}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{TAGLINE}}</p>
</section>
</section>
<img src="{{QR_SRC}}" onerror="this.style.display='none'" style="width:56px;height:56px;flex-shrink:0;margin-left:12px;border:1px solid {{HIGHLIGHT_BG}};">
</section>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:10px 0 0;">长按识别二维码 · 关注不迷路</p>
</section>
```

---

### CTA 变量说明

| 变量 | 说明 | 示例 |
|------|------|------|
| `{{CTA_LABEL}}` | 顶部小标签 | `🎓 免费评估` / `🛒 粉丝专属` |
| `{{CTA_HOOK}}` | 钩子标题（引起共鸣的疑问或痛点） | `不确定自己能申到哪里？` |
| `{{CTA_DESC}}` | 补充说明（价值 + 门槛） | `发送成绩单，48h 内给你选校方案` |
| `{{KEYWORD}}` | 触发关键词 | `评估` / `资料` / `优惠` |
| `{{ADDRESS}}` | 门店地址 | `XX路 XX号` |
| `{{CTA_REWARD}}` | 领取内容描述 | `获取 PDF + 配套视频` |

---

## 品牌配置工具

**触发条件：** 用户第一次使用排版 skill，或明确说「设置品牌」「配置头像」「更新二维码」时，Claude 输出 `references/brand-config.jsx` 作为 Artifact。

**存储方式：** 用户完成配置后，Claude 将品牌信息存入对话记忆：品牌名称、Tagline、头像（base64）、二维码（base64）、偏好名片样式、偏好 CTA 类型。

**排版时调用：** 后续每次生成排版 HTML，自动将品牌信息注入 `{{BRAND_NAME}}`、`{{TAGLINE}}`、`{{AVATAR_SRC}}`、`{{QR_SRC}}` 等占位符，无需用户每次手动提供。

**降级处理：** 若用户尚未配置品牌信息，名片样式中的头像和二维码显示带虚线边框的占位区域，并附注「可在微信编辑器中替换为实际图片」。
