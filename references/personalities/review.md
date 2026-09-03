# P25 · 测评对比 review

大字评分+评级徽章、优缺点双栏对比、参数规格表、结论裁决条。
像一份消费者测评报告——结论明确、数据说话、买不买一目了然。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<!-- 测评标签 -->
<section style="display:flex;align-items:center;gap:8px;margin:0 0 16px 0;">
<span style="display:inline-block;font-size:10px;color:{{PRIMARY}};font-weight:700;padding:3px 10px;border:1px solid {{PRIMARY}};letter-spacing:1px;">REVIEW</span>
<span style="font-size:11px;color:{{TEXT_LIGHT}};letter-spacing:1px;">{{CATEGORY}}</span>
</section>

<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
```

### score_display

测评特有：核心组件——大字综合评分+评级文字。

```html
<section style="display:flex;align-items:center;margin:24px 0;padding:20px;background-color:{{HIGHLIGHT_BG}};">
<section style="flex-shrink:0;margin-right:20px;text-align:center;">
<p style="font-size:48px;font-weight:800;color:{{PRIMARY}};margin:0;line-height:1;">{{SCORE}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:4px 0 0 0;">/ 10</p>
</section>
<section style="flex:1;">
<p style="font-size:15px;font-weight:700;color:{{TEXT}};margin:0 0 6px 0;">{{RATING_TEXT}}</p>
<section style="background-color:{{BG}};height:6px;border-radius:3px;overflow:hidden;">
<section style="background-color:{{PRIMARY}};height:6px;border-radius:3px;width:{{SCORE_PCT}}%;"></section>
</section>
</section>
</section>
```

`{{SCORE_PCT}}` = SCORE × 10（如 8.5 → 85%）。`{{RATING_TEXT}}` 如"值得推荐"/"慎重考虑"。

### sub_score

测评特有：分项评分条目。

```html
<section style="display:flex;align-items:center;margin:0 0 10px 0;padding:0 20px;">
<p style="font-size:13px;color:{{TEXT}};margin:0;width:80px;flex-shrink:0;">{{DIMENSION}}</p>
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};height:4px;border-radius:2px;margin:0 12px;overflow:hidden;">
<section style="background-color:{{PRIMARY}};height:4px;border-radius:2px;width:{{DIM_PCT}}%;"></section>
</section>
<p style="font-size:13px;font-weight:700;color:{{PRIMARY}};margin:0;width:30px;text-align:right;">{{DIM_SCORE}}</p>
</section>
```

### pros_cons

测评特有：优缺点双栏对比。

```html
<section style="display:flex;gap:10px;margin:22px 0;">
<!-- 优点 -->
<section style="flex:1;padding:14px;">
<p style="font-size:12px;font-weight:700;color:#15803d;margin:0 0 10px 0;letter-spacing:1px;">✓ 优点</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0 0 6px 0;padding-left:8px;border-left:2px solid #4ade80;">{{PRO_1}}</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0 0 6px 0;padding-left:8px;border-left:2px solid #4ade80;">{{PRO_2}}</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;padding-left:8px;border-left:2px solid #4ade80;">{{PRO_3}}</p>
</section>
<!-- 缺点 -->
<section style="flex:1;padding:14px;">
<p style="font-size:12px;font-weight:700;color:#dc2626;margin:0 0 10px 0;letter-spacing:1px;">✗ 缺点</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0 0 6px 0;padding-left:8px;border-left:2px solid #fca5a5;">{{CON_1}}</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0 0 6px 0;padding-left:8px;border-left:2px solid #fca5a5;">{{CON_2}}</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;padding-left:8px;border-left:2px solid #fca5a5;">{{CON_3}}</p>
</section>
</section>
```

优缺点条数可灵活增减。优点用绿色系左线（固定色#4ade80），缺点用红色系左线（固定色#fca5a5），不跟主题色走。

### spec_table

测评特有：参数规格表——奇偶行交替底色。

```html
<section style="margin:22px 0;font-size:13px;">
<section style="display:flex;background-color:{{PRIMARY}};padding:8px 12px;">
<p style="flex:1;color:#ffffff;margin:0;font-weight:700;">参数</p>
<p style="flex:1;color:#ffffff;margin:0;font-weight:700;text-align:right;">数值</p>
</section>
<section style="display:flex;background-color:{{HIGHLIGHT_BG}};padding:8px 12px;">
<p style="flex:1;color:{{TEXT}};margin:0;">{{SPEC_NAME}}</p>
<p style="flex:1;color:{{TEXT}};margin:0;text-align:right;">{{SPEC_VALUE}}</p>
</section>
<section style="display:flex;background-color:{{BG}};padding:8px 12px;">
<p style="flex:1;color:{{TEXT}};margin:0;">{{SPEC_NAME}}</p>
<p style="flex:1;color:{{TEXT}};margin:0;text-align:right;">{{SPEC_VALUE}}</p>
</section>
</section>
```

行数灵活，奇数行 HIGHLIGHT_BG、偶数行 BG 交替。

### verdict_box

测评特有：最终结论裁决——大字结论+一句话理由。

```html
<section style="border:2px solid {{PRIMARY}};margin:24px 0;overflow:hidden;">
<section style="background-color:{{PRIMARY}};padding:10px 16px;">
<p style="font-size:12px;color:#ffffff;margin:0;font-weight:700;letter-spacing:2px;">最终结论</p>
</section>
<section style="padding:16px;">
<p style="font-size:18px;font-weight:700;color:{{PRIMARY}};margin:0 0 6px 0;">{{VERDICT}}</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.7;margin:0;">{{VERDICT_REASON}}</p>
</section>
</section>
```

`{{VERDICT}}` 如"值得入手"、"建议观望"、"看需求决定"。

### section_heading

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:28px 0 14px 0;line-height:1.4;padding-bottom:8px;border-bottom:2px solid {{PRIMARY}};">{{HEADING}}</h2>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 20px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:1px 4px;">{{TEXT}}</span>
```

### blockquote

```html
<section style="background-color:{{HIGHLIGHT_BG}};padding:14px 16px;margin:22px 0;">
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 6px 0;letter-spacing:1px;font-weight:600;">测评备注</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{QUOTE}}</p>
</section>
```

### image_placeholder

```html
<section style="border:1px dashed {{TEXT_LIGHT}};padding:42px 20px;margin:22px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 产品实拍 / 对比图 ]</p>
</section>
```

### article_footer

```html
<section style="margin:32px 0 0 0;padding:18px 0 0 0;border-top:2px solid {{TEXT}};">
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 6px 0;text-align:center;">你用过吗？评论区说说你的体验 👇</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;text-align:center;letter-spacing:1px;">— END —</p>
</section>
</section>
```
