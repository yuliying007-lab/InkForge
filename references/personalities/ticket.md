# P03 · 票根感 ticket

登机牌头部（FROM→TO）、虚线撕裂边、STEP编号、印章倾斜、等宽编号。
从「分心」飞到「专注」的票——轻松、有趣、实用。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">

<!-- 登机牌头部 -->
<section style="background-color:{{HIGHLIGHT_BG}};border:1px solid #e5e5e5;border-radius:12px 12px 0 0;padding:20px 24px 16px;">

<!-- 顶部信息行 -->
<section style="display:flex;justify-content:space-between;align-items:center;margin:0 0 12px 0;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:2px;">BOARDING · 专注号</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:1px;">NO. {{ISSUE}}</p>
</section>

<!-- FROM → TO -->
<section style="margin:0 0 16px 0;">
<p style="font-size:10px;color:{{PRIMARY}};margin:0 0 4px 0;letter-spacing:1px;">FROM&nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp;TO</p>
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0;letter-spacing:2px;">{{FROM}}&nbsp;&nbsp;· · ✈ · ·&nbsp;&nbsp;{{TO}}</p>
</section>

<!-- 标题 -->
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 6px 0;line-height:1.3;">{{TITLE}}</h1>
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 12px 0;line-height:1.3;">{{TITLE_LINE2}}</h1>

<!-- 航班信息 -->
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:1px;">DURATION: {{DURATION}}&nbsp;&nbsp;·&nbsp;&nbsp;GATE: A1</p>

</section>

<!-- 虚线撕裂 -->
<section style="border-bottom:2px dashed #d0d0d0;margin:0;"></section>

<!-- 正文区域 -->
<section style="background-color:{{BG}};border:1px solid #e5e5e5;border-top:none;border-radius:0 0 12px 12px;padding:24px 24px 32px;">
```

用户提示：`{{FROM}}` 和 `{{TO}}` 从文章主题中提取一对概念对比词（如 DISTRACTED→FOCUSED，新手→专家，混乱→清晰）。`{{DURATION}}` 是阅读时长估计。

### section_heading

```html
<!-- STEP 标签 -->
<section style="display:inline-block;border:2px solid {{PRIMARY}};border-radius:4px;padding:2px 10px;margin:32px 0 12px 0;">
<p style="font-size:11px;font-weight:700;color:{{PRIMARY}};margin:0;letter-spacing:2px;">STEP · {{NUM}}</p>
</section>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0 0 16px 0;line-height:1.4;">{{HEADING}}</h2>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};padding:1px 4px;font-weight:600;color:{{PRIMARY}};">[ {{TEXT}} ]</span>
```

### blockquote

```html
<!-- 引用（虚线边框卡片） -->
<section style="border:2px dashed {{TEXT_LIGHT}};border-radius:8px;padding:16px 20px;margin:32px 0;">
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 8px 0;letter-spacing:1px;">— QUOTE / 引言 —</p>
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.8;font-style:italic;">"{{QUOTE}}"</p>
</section>
```

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 14px 0;line-height:1.8;padding-left:4px;"><span style="font-weight:600;color:{{TEXT_LIGHT}};">·{{NUM}}·</span>&nbsp;&nbsp;{{ITEM}}</p>
```

### separator

```html
<section style="border-bottom:2px dashed #d0d0d0;margin:48px 0;"></section>
```

### image_placeholder

```html
<section style="background-color:{{HIGHLIGHT_BG}};border:2px dashed #d0d0d0;border-radius:8px;padding:40px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 图片位置 ]</p>
</section>
```

### article_footer

```html
<!-- 虚线 -->
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:32px 0 16px 0;text-align:center;letter-spacing:4px;">- - - ✈ - - -</p>

<!-- 底部信息 -->
<section style="display:flex;justify-content:space-between;align-items:flex-end;margin:0 0 16px 0;">
<section>
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0 0 2px 0;letter-spacing:1px;">DATE · {{YEAR}}</p>
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:1px;">STAMP · APPROVED</p>
</section>
<section style="border:2px solid {{PRIMARY}};border-radius:4px;padding:4px 12px;">
<p style="font-size:12px;font-weight:700;color:{{PRIMARY}};margin:0;">点个&nbsp;&nbsp;在看</p>
</section>
</section>

</section>
</section>
```
