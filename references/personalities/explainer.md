# P26 · 科普解说 explainer

概念定义卡（术语+解释）、划重点高亮条、误区纠正对比块、难度指示条。
像一本图解百科——概念先行、层层递进、一文读懂。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<!-- 科普标签 -->
<section style="display:flex;align-items:center;gap:8px;margin:0 0 16px 0;">
<span style="display:inline-block;background-color:{{PRIMARY}};color:#ffffff;font-size:10px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:1px;">一文读懂</span>
<span style="font-size:11px;color:{{TEXT_LIGHT}};letter-spacing:1px;">{{FIELD}}</span>
</section>

<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
```

### difficulty_bar

科普特有：难度指示——用实心/空心圆点表示难度等级（1-5）。

```html
<section style="display:flex;align-items:center;margin:20px 0;padding:10px 14px;background-color:{{HIGHLIGHT_BG}};">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;margin-right:10px;letter-spacing:1px;">阅读难度</p>
<span style="color:{{PRIMARY}};font-size:14px;letter-spacing:2px;">●●●○○</span>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;margin-left:10px;">约 {{READ_TIME}} 分钟</p>
</section>
```

`●` 和 `○` 的个数由 Claude 根据内容复杂度判断。

### definition_card

科普特有：核心组件——概念定义卡，左侧 PRIMARY 竖条。

```html
<section style="margin:32px 0;border-left:4px solid {{PRIMARY}};background-color:{{HIGHLIGHT_BG}};padding:16px 18px;">
<p style="font-size:12px;color:{{PRIMARY}};margin:0 0 6px 0;font-weight:700;letter-spacing:1px;">📖 概念</p>
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.4;">{{TERM}}</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{DEFINITION}}</p>
</section>
```

### key_takeaway

科普特有：划重点——反色条，用于每个小节的关键结论。

```html
<section style="background-color:{{PRIMARY}};padding:14px 18px;margin:32px 0;">
<p style="font-size:11px;color:rgba(255,255,255,0.6);margin:0 0 6px 0;font-weight:700;letter-spacing:2px;">💡 划重点</p>
<p style="font-size:15px;color:#ffffff;line-height:1.8;margin:0;font-weight:600;">{{TAKEAWAY}}</p>
</section>
```

### myth_buster

科普特有：误区纠正——上方红色"常见误区"+下方绿色"实际情况"对比。

```html
<section style="margin:32px 0;overflow:hidden;">
<!-- 误区 -->
<section style="background-color:#fef2f2;padding:12px 16px;border-left:3px solid #dc2626;">
<p style="font-size:11px;color:#dc2626;margin:0 0 4px 0;font-weight:700;">✗ 常见误区</p>
<p style="font-size:14px;color:#7f1d1d;line-height:1.7;margin:0;">{{MYTH}}</p>
</section>
<!-- 事实 -->
<section style="background-color:#f0fdf4;padding:12px 16px;border-left:3px solid #15803d;">
<p style="font-size:11px;color:#15803d;margin:0 0 4px 0;font-weight:700;">✓ 实际情况</p>
<p style="font-size:14px;color:#166534;line-height:1.7;margin:0;">{{FACT}}</p>
</section>
</section>
```

误区/事实用固定红绿色（不跟主题走），保证语义一致性。

### analogy_box

科普特有：类比解释——帮助读者用熟悉概念理解陌生概念。

```html
<section style="border:1px dashed {{PRIMARY}};padding:18px 20px;margin:32px 0;">
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 6px 0;font-weight:700;letter-spacing:1px;">🔗 打个比方</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{ANALOGY}}</p>
</section>
```

### section_heading

```html
<section style="margin:32px 0 16px 0;">
<section style="display:flex;align-items:center;gap:10px;">
<span style="display:inline-block;background-color:{{PRIMARY}};color:#ffffff;font-size:12px;font-weight:700;width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;">{{NUM}}</span>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0;line-height:1.4;">{{HEADING}}</h2>
</section>
</section>
```

用圆形编号区分章节，强调递进感。

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
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{QUOTE}}</p>
</section>
```

### list_item

```html
<section style="display:flex;align-items:flex-start;margin:0 0 10px 0;">
<span style="display:inline-block;color:{{PRIMARY}};font-size:14px;font-weight:700;flex-shrink:0;margin:2px 10px 0 0;">▸</span>
<p style="font-size:15px;color:{{TEXT}};margin:0;line-height:1.85;">{{ITEM}}</p>
</section>
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
<p style="font-size:13px;color:{{TEXT}};margin:0;line-height:1.7;">📌 <span style="font-weight:600;">一句话总结：</span>{{ONE_LINE_SUMMARY}}</p>
</section>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;text-align:center;letter-spacing:1px;">— END —</p>
</section>
</section>
```
