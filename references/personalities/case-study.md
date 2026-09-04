# P17 · 案例拆解 case-study

档案编号条、四阶段进度横条（Phase 01→04）、大数字仪表横排、反转色结论块。
像一份实验室拆解报告——严谨、有节奏、结论先行。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<!-- 档案编号条 -->
<section style="display:flex;justify-content:space-between;align-items:center;margin:0 0 24px 0;padding:0 0 12px 0;border-bottom:2px solid {{TEXT}};">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:2px;">CASE FILE</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:1px;">#{{CASE_ID}} · {{DATE}}</p>
</section>

<p style="font-size:12px;color:{{PRIMARY}};margin:0 0 8px 0;font-weight:600;letter-spacing:1px;">{{CASE_NAME}}</p>
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
```

`{{CASE_ID}}` 由 Claude 自动生成（如 `CS-2026-017`）。

### verdict_block

案例拆解特有：结论先行——反转色块（PRIMARY 底+白字）。

```html
<section style="background-color:{{PRIMARY}};padding:18px 20px;margin:32px 0;">
<p style="font-size:11px;color:rgba(255,255,255,0.6);margin:0 0 8px 0;letter-spacing:2px;font-weight:600;">VERDICT · 核心结论</p>
<p style="font-size:16px;color:#ffffff;line-height:1.8;margin:0;font-weight:600;">{{LESSON}}</p>
</section>
```

### phase_bar

案例拆解特有：四阶段进度条。当前阶段 PRIMARY 实色+白字，其余浅底灰字。

```html
<section style="display:flex;margin:28px 0 20px 0;gap:3px;">
<section style="flex:1;background-color:{{PRIMARY}};padding:6px 0;text-align:center;">
<p style="font-size:10px;color:#ffffff;margin:0;font-weight:700;letter-spacing:1px;">01 背景</p>
</section>
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:6px 0;text-align:center;">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0;font-weight:600;letter-spacing:1px;">02 动作</p>
</section>
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:6px 0;text-align:center;">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0;font-weight:600;letter-spacing:1px;">03 结果</p>
</section>
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:6px 0;text-align:center;">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0;font-weight:600;letter-spacing:1px;">04 启发</p>
</section>
</section>
```

每进入新阶段时更新高亮位置。

### dashboard_row

案例拆解特有：大数字指标横排。

```html
<section style="display:flex;gap:10px;margin:20px 0;">
<section style="flex:1;border:1px solid {{BORDER}};padding:14px 10px;text-align:center;">
<p style="font-size:26px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px 0;line-height:1;">{{METRIC_1}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{LABEL_1}}</p>
</section>
<section style="flex:1;border:1px solid {{BORDER}};padding:14px 10px;text-align:center;">
<p style="font-size:26px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px 0;line-height:1;">{{METRIC_2}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{LABEL_2}}</p>
</section>
<section style="flex:1;border:1px solid {{BORDER}};padding:14px 10px;text-align:center;">
<p style="font-size:26px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px 0;line-height:1;">{{METRIC_3}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{LABEL_3}}</p>
</section>
</section>
```

### section_heading

```html
<p style="font-size:11px;color:{{PRIMARY}};margin:32px 0 6px 0;letter-spacing:2px;font-weight:700;">PHASE {{NUM}}</p>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0 0 14px 0;line-height:1.4;padding-left:10px;border-left:3px solid {{PRIMARY}};">{{HEADING}}</h2>
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
<section style="border:1px solid {{BORDER}};padding:18px 20px;margin:32px 0;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 6px 0;letter-spacing:1px;">OBSERVATION</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{QUOTE}}</p>
</section>
```

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.85;padding-left:4px;"><span style="font-weight:700;color:{{PRIMARY}};">{{NUM}}.</span>&nbsp;&nbsp;{{ITEM}}</p>
```

### decorative_illustration

```html
<section style="background:linear-gradient(135deg, {{HIGHLIGHT_BG}} 0%, {{BG}} 100%);border:1px solid {{HIGHLIGHT_BG}};padding:42px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ Claude 生成装饰插画位置 ]</p>
</section>
```

### cta_block

```html
<section style="background-color:{{PRIMARY}};padding:14px;margin:32px 0;text-align:center;">
<p style="font-size:15px;color:#ffffff;font-weight:700;margin:0;">转发给正在做项目复盘的人</p>
</section>
```

### article_footer

```html
<section style="border-top:2px solid {{TEXT}};margin:40px 0 0 0;padding:14px 0 0 0;">
<section style="display:flex;justify-content:space-between;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:1px;">CASE FILE #{{CASE_ID}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">— END —</p>
</section>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:10px 0 0 0;text-align:center;">欢迎留言补充你的观察</p>
</section>
</section>
```
