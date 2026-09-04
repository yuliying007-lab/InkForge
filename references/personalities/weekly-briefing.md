# P16 · 周报简报 weekly-briefing

适合周报、早报、行业资讯、一周热点。结构特征：期号栏、速览摘要、要点条目、时间线。

必填变量：`{{TITLE}}` `{{SUBTITLE}}` `{{DATE}}` `{{CONTENT}}` `{{HEADING}}`
可选变量：`{{ISSUE}}` `{{KEY_POINT_1}}` `{{KEY_POINT_2}}` `{{KEY_POINT_3}}` `{{TIME}}` `{{SOURCE}}`

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 16px;background-color:{{BG}};">
<section style="border-bottom:3px solid {{PRIMARY}};padding:28px 0 18px 0;">
<p style="margin:0 0 10px 0;"><span style="display:inline-block;font-size:11px;color:#ffffff;background-color:{{PRIMARY}};font-weight:700;padding:3px 12px;border-radius:12px;letter-spacing:1px;">BRIEFING · {{ISSUE}}</span></p>
<h1 style="font-size:24px;color:{{TEXT}};line-height:1.35;margin:0 0 8px 0;font-weight:700;">{{TITLE}}</h1>
<p style="font-size:14px;color:{{TEXT_LIGHT}};line-height:1.7;margin:0;">{{SUBTITLE}} · {{DATE}}</p>
</section>
```

### summary_box

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:8px;padding:18px 18px;margin:32px 0;">
<p style="font-size:13px;color:{{PRIMARY}};font-weight:700;margin:0 0 12px 0;">本期速览</p>
<section style="display:flex;align-items:flex-start;margin:0 0 10px 0;">
<span style="display:inline-block;background-color:{{PRIMARY}};color:#ffffff;font-size:11px;font-weight:700;width:22px;height:22px;line-height:22px;text-align:center;border-radius:50%;flex-shrink:0;margin-right:10px;">1</span>
<p style="font-size:15px;color:{{TEXT}};line-height:1.9;margin:0;">{{KEY_POINT_1}}</p>
</section>
<section style="display:flex;align-items:flex-start;margin:0 0 10px 0;">
<span style="display:inline-block;background-color:{{PRIMARY}};color:#ffffff;font-size:11px;font-weight:700;width:22px;height:22px;line-height:22px;text-align:center;border-radius:50%;flex-shrink:0;margin-right:10px;">2</span>
<p style="font-size:15px;color:{{TEXT}};line-height:1.9;margin:0;">{{KEY_POINT_2}}</p>
</section>
<section style="display:flex;align-items:flex-start;margin:0 0 0 0;">
<span style="display:inline-block;background-color:{{PRIMARY}};color:#ffffff;font-size:11px;font-weight:700;width:22px;height:22px;line-height:22px;text-align:center;border-radius:50%;flex-shrink:0;margin-right:10px;">3</span>
<p style="font-size:15px;color:{{TEXT}};line-height:1.9;margin:0;">{{KEY_POINT_3}}</p>
</section>
</section>
```

圆形编号（`border-radius:50%`）用 PRIMARY 背景白字，比纯文字 "1. 2. 3." 更有视觉节奏。

### section_heading

```html
<h2 style="font-size:18px;color:{{TEXT}};line-height:1.5;margin:34px 0 16px 0;padding-left:12px;border-left:4px solid {{PRIMARY}};">{{HEADING}}</h2>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};line-height:1.95;margin:0 0 22px 0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:700;">{{TEXT}}</span>
```

### blockquote

```html
<section style="border-left:3px solid {{SECONDARY}};padding:8px 0 8px 16px;margin:20px 0;background-color:{{HIGHLIGHT_BG}};">
<p style="font-size:14px;color:{{TEXT}};line-height:1.8;margin:0;">{{QUOTE}}</p>
</section>
```

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};line-height:1.8;margin:0 0 12px 0;">• {{ITEM}}</p>
```

### timeline_item

周报人格特有：时间线条目。左侧竖线+圆点标记时间节点。

```html
<section style="display:flex;align-items:flex-start;margin:0 0 0 4px;">
<!-- 竖线 + 圆点 -->
<section style="flex-shrink:0;width:20px;display:flex;flex-direction:column;align-items:center;margin-right:12px;">
<section style="width:8px;height:8px;background-color:{{PRIMARY}};border-radius:50%;flex-shrink:0;"></section>
<section style="width:2px;flex:1;min-height:40px;background-color:{{PRIMARY}};"></section>
</section>
<!-- 内容 -->
<section style="flex:1;padding:0 0 18px 0;">
<p style="font-size:12px;color:{{PRIMARY}};font-weight:700;margin:0 0 4px 0;">{{TIME}}</p>
<p style="font-size:15px;color:{{TEXT}};line-height:1.8;margin:0;">{{CONTENT}}</p>
</section>
</section>
```

圆点（8px `border-radius:50%`）在竖线顶部，标记每个时间节点。

### decorative_illustration

```html
<section style="background-color:{{HIGHLIGHT_BG}};border:1px dashed {{SECONDARY}};border-radius:8px;padding:36px 16px;margin:32px 0;text-align:center;">
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;">[ Claude 生成装饰插画位置 ]</p>
</section>
```

### cta_block

```html
<section style="border:1px solid {{PRIMARY}};border-radius:8px;padding:16px;margin:32px 0;text-align:center;">
<p style="font-size:15px;color:{{PRIMARY}};font-weight:700;margin:0;">收藏本期，下周继续更新</p>
</section>
```

### article_footer

```html
<section style="border-top:1px solid {{HIGHLIGHT_BG}};padding:18px 0 0 0;margin:30px 0 0 0;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};line-height:1.7;margin:0;">来源：{{SOURCE}}</p>
</section>
</section>
```

