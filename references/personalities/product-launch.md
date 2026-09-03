# P18 · 产品发布 product-launch

版本号圆角徽章、Before→After 双栏对比、绿色左边框功能条目（Git diff 风格）、NEW/IMPROVED 内联标签。
像一份 Changelog——清晰、专业、有行动力。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<!-- 顶部行 -->
<section style="display:flex;align-items:center;margin:0 0 18px 0;">
<section style="background-color:{{PRIMARY}};border-radius:6px;padding:6px 14px;display:inline-block;">
<p style="font-size:13px;font-weight:700;color:#ffffff;margin:0;letter-spacing:1px;">v{{VERSION}}</p>
</section>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 0 12px;letter-spacing:1px;">{{DATE}}</p>
</section>

<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
```

### summary_box

```html
<section style="border:1px solid {{BORDER}};padding:16px;margin:32px 0;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 8px 0;letter-spacing:2px;font-weight:600;">WHAT'S NEW</p>
<p style="font-size:15px;color:{{TEXT}};line-height:1.85;margin:0;">{{BENEFIT}}</p>
</section>
```

### before_after

产品发布特有：双栏对比。左灰底+删除线，右主色底+白字。

```html
<section style="display:flex;gap:8px;margin:20px 0;">
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:14px;border-radius:6px;">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0 0 8px 0;letter-spacing:2px;font-weight:700;">BEFORE</p>
<p style="font-size:14px;color:{{TEXT_LIGHT}};line-height:1.8;margin:0;text-decoration:line-through;">{{BEFORE}}</p>
</section>
<section style="flex:1;background-color:{{PRIMARY}};padding:14px;border-radius:6px;">
<p style="font-size:10px;color:rgba(255,255,255,0.6);margin:0 0 8px 0;letter-spacing:2px;font-weight:700;">AFTER</p>
<p style="font-size:14px;color:#ffffff;line-height:1.8;margin:0;">{{AFTER}}</p>
</section>
</section>
```

### feature_item

产品发布特有：功能条目。绿色左边框 + NEW/IMPROVED/FIXED 标签。

```html
<section style="border-left:3px solid {{SECONDARY}};background-color:{{HIGHLIGHT_BG}};padding:12px 16px;margin:12px 0;">
<section style="display:flex;align-items:center;margin:0 0 6px 0;">
<section style="background-color:{{SECONDARY}};border-radius:3px;padding:1px 7px;display:inline-block;">
<p style="font-size:9px;font-weight:700;color:#ffffff;margin:0;letter-spacing:1px;">NEW</p>
</section>
<p style="font-size:15px;font-weight:600;color:{{TEXT}};margin:0 0 0 8px;">{{FEATURE}}</p>
</section>
<p style="font-size:14px;color:{{TEXT}};line-height:1.8;margin:0;">{{CONTENT}}</p>
</section>
```

### section_heading

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:32px 0 14px 0;line-height:1.4;">{{HEADING}}</h2>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:600;">{{TEXT}}</span>
```

### blockquote

```html
<section style="border-left:3px solid {{BORDER}};padding:10px 16px;margin:32px 0;">
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{QUOTE}}</p>
</section>
```

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.85;padding-left:2px;">✓&nbsp; {{ITEM}}</p>
```

### image_placeholder

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:8px;padding:44px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 产品截图 / 功能演示 ]</p>
</section>
```

### cta_block

```html
<section style="background-color:{{PRIMARY}};border-radius:6px;padding:14px;margin:32px 0;text-align:center;">
<p style="font-size:15px;color:#ffffff;font-weight:700;margin:0;">立即体验 v{{VERSION}} →</p>
</section>
```

### article_footer

```html
<section style="border-top:1px solid {{BORDER}};margin:40px 0 0 0;padding:14px 0 0 0;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;">有反馈？欢迎留言告诉我们。</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:1px;">CHANGELOG · v{{VERSION}}</p>
</section>
</section>
```
