# P27 · 政策解读 policy-brief

红头生效日期条、新旧政策双栏对比、影响人群标签矩阵、关键条款高亮卡。
像一份政策研究简报——权威、结构化、一眼看懂谁受影响。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<!-- 政策标签+生效日期 -->
<section style="display:flex;align-items:center;justify-content:space-between;margin:0 0 16px 0;">
<span style="display:inline-block;font-size:10px;color:#ffffff;background-color:{{PRIMARY}};font-weight:700;padding:3px 12px;letter-spacing:1px;">政策解读</span>
<span style="font-size:11px;color:{{TEXT_LIGHT}};letter-spacing:1px;">生效日期：{{EFFECTIVE_DATE}}</span>
</section>

<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
```

### impact_tags

政策解读特有：影响人群标签——快速告诉读者"跟我有没有关系"。

```html
<section style="margin:20px 0;padding:12px 16px;background-color:{{HIGHLIGHT_BG}};">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 8px 0;letter-spacing:1px;">影响人群</p>
<section style="display:flex;flex-wrap:wrap;gap:6px;">
<span style="display:inline-block;font-size:12px;color:{{PRIMARY}};border:1px solid {{PRIMARY}};padding:3px 10px;font-weight:600;">{{TAG_1}}</span>
<span style="display:inline-block;font-size:12px;color:{{PRIMARY}};border:1px solid {{PRIMARY}};padding:3px 10px;font-weight:600;">{{TAG_2}}</span>
<span style="display:inline-block;font-size:12px;color:{{PRIMARY}};border:1px solid {{PRIMARY}};padding:3px 10px;font-weight:600;">{{TAG_3}}</span>
</section>
</section>
```

标签数量灵活。

### before_after

政策解读特有：核心组件——新旧政策双栏对比。

```html
<section style="margin:32px 0;overflow:hidden;">
<section style="display:flex;gap:0;">
<!-- 旧政策 -->
<section style="flex:1;background-color:#f3f4f6;padding:18px 20px;">
<p style="font-size:11px;color:#9ca3af;margin:0 0 8px 0;font-weight:700;letter-spacing:1px;">旧政策</p>
<p style="font-size:14px;color:#6b7280;line-height:1.7;margin:0;text-decoration:line-through;">{{OLD_POLICY}}</p>
</section>
<!-- 新政策 -->
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:18px 20px;border-left:3px solid {{PRIMARY}};">
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 8px 0;font-weight:700;letter-spacing:1px;">新政策 ✦</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.7;margin:0;font-weight:600;">{{NEW_POLICY}}</p>
</section>
</section>
</section>
```

旧政策用灰底+删除线，新政策用 HIGHLIGHT_BG + PRIMARY 左线 + 加粗。

### key_clause

政策解读特有：关键条款——编号+条款内容。

```html
<section style="display:flex;align-items:flex-start;margin:0 0 14px 0;padding:12px 14px;border:1px solid {{HIGHLIGHT_BG}};">
<span style="display:inline-block;background-color:{{PRIMARY}};color:#ffffff;font-size:11px;font-weight:700;padding:4px 8px;flex-shrink:0;margin-right:12px;letter-spacing:1px;">第{{NUM}}条</span>
<p style="font-size:14px;color:{{TEXT}};line-height:1.8;margin:0;">{{CLAUSE}}</p>
</section>
```

### section_heading

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:40px 0 16px 0;line-height:1.4;padding-left:12px;border-left:4px solid {{PRIMARY}};">{{HEADING}}</h2>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:1px 4px;">{{TEXT}}</span>
```

### blockquote

```html
<section style="background-color:{{HIGHLIGHT_BG}};padding:18px 20px;margin:32px 0;border-left:3px solid {{SECONDARY}};">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 6px 0;letter-spacing:1px;font-weight:600;">官方原文摘录</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{QUOTE}}</p>
</section>
```

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.85;padding-left:4px;"><span style="font-weight:700;color:{{PRIMARY}};">▎</span>&nbsp;{{ITEM}}</p>
```

### decorative_illustration

```html
<section style="background:linear-gradient(135deg, {{HIGHLIGHT_BG}} 0%, {{BG}} 100%);border:1px solid {{HIGHLIGHT_BG}};padding:42px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ Claude 生成装饰插画位置 ]</p>
</section>
```

### article_footer

```html
<section style="margin:40px 0 0 0;padding:18px 0 0 0;border-top:2px solid {{TEXT}};">
<section style="background-color:{{HIGHLIGHT_BG}};padding:12px 16px;margin:0 0 14px 0;">
<p style="font-size:12px;color:{{TEXT}};margin:0;line-height:1.7;">⚠️ <span style="font-weight:600;">免责声明：</span>本文为政策解读，不构成法律建议。具体情况请咨询持牌专业人士。</p>
</section>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;text-align:center;letter-spacing:1px;">— END —</p>
</section>
</section>
```
