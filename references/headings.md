# 标题风格库

章节标题（section_heading）的装饰风格库。跟随主题色变化，通过 `{{PRIMARY}}`、`{{TEXT}}`、`{{HIGHLIGHT_BG}}` 等占位符适配。

Claude 根据人格风格自动选择合适的标题风格。每篇文章使用**一种**标题风格保持一致。

人格模板中若已定义 `section_heading`，默认使用模板自带的；但用户可手动指定本库中的任一风格覆盖。

---

## HEAD-01 · 粗下划线

经典款，适合大多数正式、商务、评测类内容。视觉锚定力强。

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};padding-bottom:10px;border-bottom:2px solid {{PRIMARY}};margin:40px 0 18px 0;line-height:1.4;">{{HEADING}}</h2>
```

---

## HEAD-02 · 左竖条

垂直方向装饰，不增加水平视觉噪音。适合报告、政策解读、数据类内容。

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};padding-left:14px;border-left:3px solid {{PRIMARY}};margin:40px 0 18px 0;line-height:1.3;">{{HEADING}}</h2>
```

---

## HEAD-03 · 纯字重

零装饰，仅靠字号字重与上方大间距区分层级。像书，最安静。适合长文、叙事、文艺类内容。

```html
<h2 style="font-size:18px;font-weight:700;color:{{TEXT}};margin:48px 0 16px 0;letter-spacing:-0.3px;line-height:1.4;">{{HEADING}}</h2>
```

---

## HEAD-04 · 幽灵编号

大号淡色编号浮于标题上方，有设计感但几乎无视觉重量。适合清单、步骤、榜单类内容。

```html
<section style="margin:40px 0 18px 0;">
<p style="font-size:32px;font-weight:700;color:{{PRIMARY}};opacity:0.07;margin:0;line-height:1;">{{NUM}}</p>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:-8px 0 0;line-height:1.3;">{{HEADING}}</h2>
</section>
```

---

## HEAD-05 · 细发丝线

保留下划线但减至 1px 浅色，视觉重量仅为 HEAD-01 的一半。适合极简、北欧、侘寂风格。

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};padding-bottom:8px;border-bottom:1px solid {{PRIMARY}};opacity:0.85;margin:40px 0 18px 0;line-height:1.4;">{{HEADING}}</h2>
```

---

## HEAD-06 · 荧光笔标记

文字底部半透明色带，模拟荧光笔划线效果。温暖、随性。适合博客、种草、推荐类内容。

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:40px 0 18px 0;line-height:1.5;"><span style="box-shadow:inset 0 -0.45em 0 {{HIGHLIGHT_BG}};">{{HEADING}}</span></h2>
```

---

## HEAD-07 · 双线夹标题

上下各一条细线夹住标题文字，经典杂志分栏感。适合杂志、特稿、深度内容。

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};border-top:1px solid {{PRIMARY}};border-bottom:1px solid {{PRIMARY}};opacity:0.85;padding:10px 0;margin:40px 0 18px 0;line-height:1.4;">{{HEADING}}</h2>
```

---

## HEAD-08 · 色带反白

全宽深色背景 + 白字，视觉冲击力最强。适合产品发布、活动、电竞、潮玩类内容。

```html
<h2 style="font-size:15px;font-weight:700;color:{{BG}};background:{{PRIMARY}};padding:8px 16px;margin:40px -16px 18px;line-height:1.4;">{{HEADING}}</h2>
```

---

## HEAD-09 · 左圆点

小实心圆点标记在标题前，极简现代。适合科技、极简、信息图类内容。

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:40px 0 18px 0;line-height:1.3;"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:{{PRIMARY}};margin-right:10px;vertical-align:middle;"></span>{{HEADING}}</h2>
```

---

## HEAD-10 · 顶部色条

装饰线在标题上方而非下方，反转视觉惯性。适合建筑、设计、现代商务类内容。

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};border-top:3px solid {{PRIMARY}};padding-top:10px;margin:40px 0 18px 0;line-height:1.4;">{{HEADING}}</h2>
```

---

## HEAD-11 · 居中短横

居中排版 + 左右短横装饰，文学感。适合书信、散文、诗歌、邀请函类内容。

```html
<h2 style="font-size:16px;font-weight:700;color:{{TEXT}};text-align:center;margin:40px 0 18px 0;letter-spacing:0.05em;line-height:1.4;"><span style="color:{{TEXT_LIGHT}};font-weight:400;">--&nbsp;&nbsp;</span>{{HEADING}}<span style="color:{{TEXT_LIGHT}};font-weight:400;">&nbsp;&nbsp;--</span></h2>
```

---

## HEAD-12 · 三角箭头

CSS 三角形指向标题，导航感强。适合步骤教程、指南、攻略类内容。

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:40px 0 18px 0;line-height:1.3;"><span style="display:inline-block;width:0;height:0;border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:8px solid {{PRIMARY}};margin-right:10px;vertical-align:middle;"></span>{{HEADING}}</h2>
```

---

## HEAD-13 · 分体标签

黑底白字编号标签 + 标题文字并排，杂志分栏感。适合杂志、专栏、系列文章类内容。

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:40px 0 18px 0;line-height:1.5;"><span style="display:inline-block;background:{{PRIMARY}};color:{{BG}};padding:2px 10px;margin-right:8px;font-size:13px;font-weight:700;">PART {{NUM}}</span>{{HEADING}}</h2>
```

---

## HEAD-14 · 3D 色块阴影

偏移实心投影，复古海报/版画风。适合潮玩、Y2K、复古港风、创意类内容。

```html
<p style="margin:40px 0 18px 0;"><span style="display:inline-block;font-size:16px;font-weight:700;color:{{TEXT}};background:{{HIGHLIGHT_BG}};padding:6px 16px;box-shadow:3px 3px 0px {{PRIMARY}};">{{HEADING}}</span></p>
```

---

## HEAD-15 · 票据虚线

虚线左边框 + 浅底色，票根/收据既视感。适合清单、盘点、探店、攻略类内容。

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};border-left:3px dashed {{TEXT_LIGHT}};padding:6px 0 6px 14px;background:{{HIGHLIGHT_BG}};margin:40px 0 18px 0;line-height:1.3;">{{HEADING}}</h2>
```

---

## 风格匹配建议

| 人格风格 | 推荐标题风格 |
|---------|-----------|
| 评测对比、深度特稿、杂志专栏 | HEAD-01 粗下划线 或 HEAD-07 双线夹标题 |
| 政策解读、数据报告、学术科研 | HEAD-02 左竖条 或 HEAD-10 顶部色条 |
| 长文叙事、散文随笔、品牌故事 | HEAD-03 纯字重 |
| 清单盘点、榜单排名、步骤教程 | HEAD-04 幽灵编号 或 HEAD-12 三角箭头 |
| 极简侘寂、北欧白桦、日系和纸 | HEAD-05 细发丝线 或 HEAD-03 纯字重 |
| 博客推荐、种草好物、生活方式 | HEAD-06 荧光笔标记 |
| 杂志版式、深度访谈、Kinfolk 风 | HEAD-07 双线夹标题 或 HEAD-13 分体标签 |
| 产品发布、电竞霓虹、潮玩手办 | HEAD-08 色带反白 或 HEAD-14 3D 色块阴影 |
| 科技蓝、信息图、数码极客 | HEAD-09 左圆点 或 HEAD-12 三角箭头 |
| 建筑设计、现代商务、产品详情 | HEAD-10 顶部色条 |
| 书信手札、邀请函、诗歌散文 | HEAD-11 居中短横 |
| 探店攻略、清单盘点、票据风格 | HEAD-15 票据虚线 |
| Y2K、复古港风、创意潮玩 | HEAD-14 3D 色块阴影 |
| 杂志专栏、系列文章、连载 | HEAD-13 分体标签 |
| 通用 / 无特殊倾向 | HEAD-01 粗下划线 |
