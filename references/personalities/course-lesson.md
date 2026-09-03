# P20 · 课程讲义 course-lesson

黑板顶栏+粉笔字标题、课时编号徽章、板书框（深底白字）、随堂测验卡片、学习目标清单。
像一堂精心备课的公开课——知识密度高、节奏明快、互动感强。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:0 20px 24px;">

<!-- 黑板顶栏 -->
<section style="background-color:#2d3a2e;padding:22px 20px 18px;margin:0 -20px;">
<section style="display:flex;align-items:center;margin:0 0 14px 0;">
<section style="background-color:{{PRIMARY}};border-radius:4px;padding:4px 12px;display:inline-block;">
<p style="font-size:11px;font-weight:700;color:#ffffff;margin:0;letter-spacing:1px;">第 {{LESSON_NUM}} 讲</p>
</section>
<p style="font-size:11px;color:rgba(255,255,255,0.5);margin:0 0 0 10px;letter-spacing:1px;">{{COURSE_NAME}}</p>
</section>
<h1 style="font-size:22px;font-weight:700;color:#f0ede6;margin:0 0 6px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:rgba(255,255,255,0.55);margin:0;line-height:1.7;">{{SUBTITLE}}</p>
</section>
```

黑板色 `#2d3a2e`（墨绿黑板），标题用米白 `#f0ede6` 模拟粉笔字。课时编号用 PRIMARY 色徽章。

### learning_objectives

课程讲义特有：学习目标清单——课程开头的"本节你将学到"。

```html
<section style="border:2px solid {{PRIMARY}};padding:16px 18px;margin:32px 0;">
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 10px 0;letter-spacing:2px;font-weight:700;">LEARNING OBJECTIVES · 学习目标</p>
<p style="font-size:14px;color:{{TEXT}};margin:0 0 8px 0;line-height:1.8;padding-left:4px;">🎯&nbsp; {{OBJECTIVE_1}}</p>
<p style="font-size:14px;color:{{TEXT}};margin:0 0 8px 0;line-height:1.8;padding-left:4px;">🎯&nbsp; {{OBJECTIVE_2}}</p>
<p style="font-size:14px;color:{{TEXT}};margin:0 0 0 0;line-height:1.8;padding-left:4px;">🎯&nbsp; {{OBJECTIVE_3}}</p>
</section>
```

### blackboard_block

课程讲义特有：板书框——深底白字，模拟黑板上的关键板书。

```html
<section style="background-color:#2d3a2e;padding:18px 20px;margin:32px 0;border-radius:4px;">
<p style="font-size:11px;color:rgba(255,255,255,0.45);margin:0 0 8px 0;letter-spacing:2px;">BLACKBOARD · 板书</p>
<p style="font-size:16px;color:#f0ede6;line-height:1.85;margin:0;font-weight:600;">{{BOARD_CONTENT}}</p>
</section>
```

### quiz_card

课程讲义特有：随堂测验卡片——课中穿插的思考题。

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-left:3px solid {{SECONDARY}};padding:18px 20px;margin:32px 0;">
<p style="font-size:11px;color:{{SECONDARY}};margin:0 0 8px 0;letter-spacing:1px;font-weight:700;">🤔 随堂思考</p>
<p style="font-size:15px;color:{{TEXT}};line-height:1.85;margin:0 0 10px 0;">{{QUESTION}}</p>
<section style="background-color:{{BG}};border:1px dashed {{BORDER}};padding:10px 14px;">
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">💡 {{HINT}}</p>
</section>
</section>
```

问题在上，提示/答案在虚线框内。`{{HINT}}` 可以是提示也可以是答案。

### formula_block

课程讲义特有：公式/定义框——用于呈现核心概念定义或公式。

```html
<section style="border:1px solid {{BORDER}};padding:16px 18px;margin:20px 0;text-align:center;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 8px 0;letter-spacing:1px;">DEFINITION · 定义</p>
<p style="font-size:17px;color:{{TEXT}};margin:0;line-height:1.7;font-weight:600;">{{FORMULA}}</p>
</section>
```

### section_heading

```html
<section style="display:flex;align-items:center;margin:32px 0 14px 0;">
<section style="background-color:{{PRIMARY}};width:28px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:4px;flex-shrink:0;">
<p style="font-size:13px;font-weight:700;color:#ffffff;margin:0;">{{NUM}}</p>
</section>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0 0 0 10px;line-height:1.4;">{{HEADING}}</h2>
</section>
```

方形编号（非圆形），与黑板的方正感匹配。

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:#fff0a0;padding:1px 4px;font-weight:600;">{{TEXT}}</span>
```

黄色荧光笔标注，与 notebook 一致——教学场景通用。

### blockquote

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-left:3px solid {{PRIMARY}};padding:12px 16px;margin:32px 0;">
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{QUOTE}}</p>
</section>
```

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.85;padding-left:4px;"><span style="color:{{PRIMARY}};font-weight:700;">▸</span>&nbsp;&nbsp;{{ITEM}}</p>
```

### separator

```html
<section style="border-bottom:1px dashed {{BORDER}};margin:48px 0;"></section>
```

### image_placeholder

```html
<section style="background-color:#2d3a2e;border-radius:4px;padding:42px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:rgba(255,255,255,0.45);margin:0;">[ 示意图 / 流程图 / 板书截图 ]</p>
</section>
```

深色占位图，与黑板顶栏呼应。

### cta_block

```html
<section style="background-color:{{PRIMARY}};border-radius:4px;padding:14px;margin:32px 0;text-align:center;">
<p style="font-size:15px;color:#ffffff;font-weight:700;margin:0;">收藏本课，随时复习</p>
</section>
```

### article_footer

```html
<!-- 本课小结 -->
<section style="background-color:#2d3a2e;padding:18px 20px;margin:28px 0 0 0;border-radius:4px;">
<p style="font-size:11px;color:rgba(255,255,255,0.45);margin:0 0 10px 0;letter-spacing:2px;">SUMMARY · 本课小结</p>
<p style="font-size:14px;color:#f0ede6;line-height:1.85;margin:0 0 6px 0;">✓&nbsp; {{SUMMARY_1}}</p>
<p style="font-size:14px;color:#f0ede6;line-height:1.85;margin:0 0 6px 0;">✓&nbsp; {{SUMMARY_2}}</p>
<p style="font-size:14px;color:#f0ede6;line-height:1.85;margin:0;">✓&nbsp; {{SUMMARY_3}}</p>
</section>

<section style="border-top:1px solid {{BORDER}};margin:20px 0 0 0;padding:14px 0 0 0;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;text-align:center;">下一讲预告：{{NEXT_LESSON}} →</p>
</section>
</section>
</section>
```
