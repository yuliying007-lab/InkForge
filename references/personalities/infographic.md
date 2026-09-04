# P10 · 信息图卡片 infographic

大数字统计、进度条、对比双栏、数据卡片、图标符号。
数据报告感，适合行业分析和趋势解读。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:32px 24px 24px;">

<!-- 栏目标签 -->
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 12px 0;letter-spacing:3px;font-weight:600;">📊 DATA INSIGHT · 数据洞察</p>

<!-- 标题 -->
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.3;">{{TITLE}}</h1>
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 16px 0;line-height:1.3;">{{TITLE_LINE2}}</h1>

<!-- 副标题 -->
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 0 0;line-height:1.6;">{{SUBTITLE}}</p>
```

### stat_card

信息图人格特有：大数字统计卡片。

```html
<!-- 统计卡片 -->
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:12px;padding:20px 24px;margin:32px 0;display:flex;justify-content:space-between;">
<section style="text-align:center;flex:1;">
<p style="font-size:28px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px 0;line-height:1;">{{STAT_1}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{LABEL_1}}</p>
</section>
<section style="text-align:center;flex:1;">
<p style="font-size:28px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px 0;line-height:1;">{{STAT_2}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{LABEL_2}}</p>
</section>
<section style="text-align:center;flex:1;">
<p style="font-size:28px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px 0;line-height:1;">{{STAT_3}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{LABEL_3}}</p>
</section>
</section>
```

### progress_bar

信息图人格特有：进度条。

```html
<section style="margin:16px 0;">
<section style="display:flex;justify-content:space-between;margin:0 0 4px 0;">
<p style="font-size:13px;color:{{TEXT}};margin:0;">{{LABEL}}</p>
<p style="font-size:13px;font-weight:600;color:{{PRIMARY}};margin:0;">{{PERCENT}}%</p>
</section>
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:4px;height:8px;overflow:hidden;">
<section style="background-color:{{PRIMARY}};border-radius:4px;height:8px;width:{{PERCENT}}%;"></section>
</section>
</section>
```

### section_heading

```html
<section style="margin:36px 0 16px 0;display:flex;align-items:center;">
<section style="background-color:{{PRIMARY}};color:#ffffff;font-size:12px;font-weight:700;width:24px;height:24px;line-height:24px;text-align:center;border-radius:50%;flex-shrink:0;margin-right:10px;">{{NUM}}</section>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0;line-height:1.4;">{{HEADING}}</h2>
</section>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:700;">{{TEXT}}</span>
```

### blockquote

```html
<!-- 引用（卡片式） -->
<section style="background-color:{{HIGHLIGHT_BG}};border-left:4px solid {{PRIMARY}};border-radius:0 8px 8px 0;padding:16px 20px;margin:32px 0;">
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.8;">{{QUOTE}}</p>
</section>
```

### comparison_card

信息图人格特有：对比双栏。

```html
<section style="display:flex;gap:12px;margin:32px 0;">
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};border-radius:10px;padding:16px;">
<p style="font-size:12px;font-weight:600;color:{{PRIMARY}};margin:0 0 8px 0;">{{LEFT_TITLE}}</p>
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.6;">{{LEFT_CONTENT}}</p>
</section>
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};border-radius:10px;padding:16px;">
<p style="font-size:12px;font-weight:600;color:{{SECONDARY}};margin:0 0 8px 0;">{{RIGHT_TITLE}}</p>
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.6;">{{RIGHT_CONTENT}}</p>
</section>
</section>
```

### list_item

```html
<section style="display:flex;align-items:flex-start;margin:0 0 12px 0;">
<span style="color:{{PRIMARY}};font-size:16px;margin-right:8px;line-height:1.6;">→</span>
<p style="font-size:15px;color:{{TEXT}};margin:0;line-height:1.8;">{{ITEM}}</p>
</section>
```

### separator

```html
<section style="border-bottom:1px dashed {{TEXT_LIGHT}};margin:32px 0;opacity:0.4;"></section>
```

### decorative_illustration

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:12px;padding:48px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ Claude 生成装饰插画位置 ]</p>
</section>
```

### article_footer

```html
<!-- 来源 -->
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:8px;padding:12px 16px;margin:32px 0 16px 0;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">数据来源：{{SOURCE}} · 统计截止 {{DATE}}</p>
</section>

<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;text-align:center;">觉得有用？点个"在看"</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 0 0;text-align:center;">关注获取更多数据解读</p>

</section>
</section>
```
