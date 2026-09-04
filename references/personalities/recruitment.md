# P21 · 招聘 recruitment

职位编号横条、JD 信息表（部门/地点/薪资）、要求清单（✓/✗ 双色）、团队亮点卡片、投递 CTA。
像一张精心设计的招聘海报——专业、有吸引力、信息完整。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:0 20px 24px;">

<!-- 顶部横条 -->
<section style="background-color:{{PRIMARY}};padding:14px 20px;margin:0 -20px;">
<section style="display:flex;justify-content:space-between;align-items:center;">
<p style="font-size:11px;color:rgba(255,255,255,0.6);margin:0;letter-spacing:2px;">WE'RE HIRING</p>
<p style="font-size:11px;color:rgba(255,255,255,0.6);margin:0;letter-spacing:1px;">JOB-{{JOB_ID}}</p>
</section>
</section>

<!-- 职位标题 -->
<section style="padding:22px 0 0 0;">
<p style="font-size:12px;color:{{PRIMARY}};margin:0 0 8px 0;font-weight:600;letter-spacing:1px;">{{DEPARTMENT}}</p>
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
</section>
```

`{{JOB_ID}}` 由 Claude 自动生成（如 `2026-PM-003`）。

### job_info_table

招聘特有：职位信息表——关键信息一目了然。

```html
<section style="border:1px solid {{BORDER}};margin:32px 0;font-size:14px;">
<section style="display:flex;border-bottom:1px solid {{BORDER}};">
<section style="width:72px;background-color:{{HIGHLIGHT_BG}};padding:10px 12px;font-weight:600;color:{{TEXT}};flex-shrink:0;">部门</section>
<section style="flex:1;padding:10px 12px;color:{{TEXT}};">{{DEPARTMENT}}</section>
</section>
<section style="display:flex;border-bottom:1px solid {{BORDER}};">
<section style="width:72px;background-color:{{HIGHLIGHT_BG}};padding:10px 12px;font-weight:600;color:{{TEXT}};flex-shrink:0;">地点</section>
<section style="flex:1;padding:10px 12px;color:{{TEXT}};">{{LOCATION}}</section>
</section>
<section style="display:flex;border-bottom:1px solid {{BORDER}};">
<section style="width:72px;background-color:{{HIGHLIGHT_BG}};padding:10px 12px;font-weight:600;color:{{TEXT}};flex-shrink:0;">类型</section>
<section style="flex:1;padding:10px 12px;color:{{TEXT}};">{{JOB_TYPE}}</section>
</section>
<section style="display:flex;">
<section style="width:72px;background-color:{{HIGHLIGHT_BG}};padding:10px 12px;font-weight:600;color:{{TEXT}};flex-shrink:0;">薪资</section>
<section style="flex:1;padding:10px 12px;color:{{PRIMARY}};font-weight:600;">{{SALARY}}</section>
</section>
</section>
```

### requirement_item

招聘特有：要求清单——✓ 必须 / ✗ 加分项，双色区分。

```html
<!-- 必须项 -->
<p style="font-size:15px;color:{{TEXT}};margin:0 0 10px 0;line-height:1.85;padding-left:4px;"><span style="color:{{PRIMARY}};font-weight:700;">✓</span>&nbsp;&nbsp;{{MUST_HAVE}}</p>
```

```html
<!-- 加分项 -->
<p style="font-size:15px;color:{{TEXT_LIGHT}};margin:0 0 10px 0;line-height:1.85;padding-left:4px;"><span style="color:{{SECONDARY}};font-weight:700;">+</span>&nbsp;&nbsp;{{NICE_TO_HAVE}}</p>
```

### team_highlight

招聘特有：团队亮点卡片——展示团队文化/福利。

```html
<section style="display:flex;gap:10px;margin:20px 0;">
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:14px 12px;text-align:center;">
<p style="font-size:22px;margin:0 0 6px 0;">{{ICON_1}}</p>
<p style="font-size:13px;color:{{TEXT}};margin:0;font-weight:600;line-height:1.5;">{{PERK_1}}</p>
</section>
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:14px 12px;text-align:center;">
<p style="font-size:22px;margin:0 0 6px 0;">{{ICON_2}}</p>
<p style="font-size:13px;color:{{TEXT}};margin:0;font-weight:600;line-height:1.5;">{{PERK_2}}</p>
</section>
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:14px 12px;text-align:center;">
<p style="font-size:22px;margin:0 0 6px 0;">{{ICON_3}}</p>
<p style="font-size:13px;color:{{TEXT}};margin:0;font-weight:600;line-height:1.5;">{{PERK_3}}</p>
</section>
</section>
```

`{{ICON_x}}` 用 emoji（如 🏠 远程、🎯 期权、🌴 假期）。

### section_heading

```html
<p style="font-size:11px;color:{{PRIMARY}};margin:32px 0 6px 0;letter-spacing:2px;font-weight:700;">{{LABEL}}</p>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0 0 14px 0;line-height:1.4;">{{HEADING}}</h2>
```

`{{LABEL}}` 用英文标签如 `RESPONSIBILITIES`、`REQUIREMENTS`、`BENEFITS`。

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
<section style="background-color:{{HIGHLIGHT_BG}};border-left:3px solid {{PRIMARY}};padding:18px 20px;margin:32px 0;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 6px 0;letter-spacing:1px;">TEAM VOICE</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;font-style:italic;">"{{QUOTE}}"</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:6px 0 0 0;">— {{QUOTEE}}</p>
</section>
```

引用团队成员的话，增强真实感。

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.85;padding-left:4px;">•&nbsp;&nbsp;{{ITEM}}</p>
```

### decorative_illustration

```html
<section style="background-color:{{HIGHLIGHT_BG}};background:linear-gradient(135deg, {{HIGHLIGHT_BG}} 0%, {{BG}} 100%);border:1px solid {{HIGHLIGHT_BG}};padding:42px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ Claude 生成装饰插画位置 ]</p>
</section>
```

### cta_block

```html
<section style="background-color:{{PRIMARY}};padding:16px;margin:32px 0;text-align:center;">
<p style="font-size:16px;color:#ffffff;font-weight:700;margin:0 0 4px 0;">立即投递简历</p>
<p style="font-size:12px;color:rgba(255,255,255,0.6);margin:0;">{{APPLY_EMAIL}} · 截止 {{DEADLINE}}</p>
</section>
```

### article_footer

```html
<section style="border-top:1px solid {{BORDER}};margin:40px 0 0 0;padding:14px 0 0 0;">
<section style="display:flex;justify-content:space-between;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:1px;">JOB-{{JOB_ID}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{COMPANY}}</p>
</section>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:10px 0 0 0;text-align:center;">转发给可能感兴趣的朋友</p>
</section>
</section>
</section>
```
