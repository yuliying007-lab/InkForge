# P11 · 手账日记 journal

日期戳、贴纸装饰（📌📎✏️）、虚线边框、便签纸背景。
日记体、碎碎念、个人记录的手账感。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{HIGHLIGHT_BG}};padding:28px 24px 24px;border-radius:4px;border:1px solid #e8e0d8;">

<!-- 日期戳 -->
<section style="display:flex;align-items:center;margin:0 0 20px 0;">
<span style="font-size:14px;margin-right:8px;">📌</span>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;font-style:italic;">{{DATE}} · {{WEEKDAY}}</p>
</section>

<!-- 标题 -->
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.4;">{{TITLE}}</h1>
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 16px 0;line-height:1.4;">{{TITLE_LINE2}}</h1>

<!-- 副标题 -->
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 0 0;line-height:1.6;font-style:italic;">{{SUBTITLE}}</p>

</section>

<!-- 正文区域（线条笔记本背景模拟） -->
<section style="padding:24px 24px 0;">
```

### section_heading

```html
<!-- 贴纸标题 -->
<section style="margin:32px 0 16px 0;display:flex;align-items:center;">
<span style="font-size:14px;margin-right:8px;">✏️</span>
<h2 style="font-size:16px;font-weight:700;color:{{PRIMARY}};margin:0;line-height:1.4;border-bottom:2px dashed {{PRIMARY}};padding-bottom:2px;display:inline;">{{HEADING}}</h2>
</section>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 22px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:#fef9c3;color:{{TEXT}};padding:1px 3px;">{{TEXT}}</span>
```

用淡黄色荧光笔效果，模拟手账标记。

### blockquote

```html
<!-- 便签条引用 -->
<section style="background-color:#fffef0;border:1px dashed {{PRIMARY}};border-radius:4px;padding:16px 20px;margin:24px 0;transform:rotate(-0.5deg);">
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.8;font-style:italic;">{{QUOTE}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:8px 0 0 0;text-align:right;">— 📎 记在这里</p>
</section>
```

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 4px;line-height:1.8;"><span style="color:{{PRIMARY}};margin-right:6px;">☑</span>{{ITEM}}</p>
```

### separator

```html
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:28px 0;text-align:center;letter-spacing:8px;">· · · · ·</p>
```

### image_placeholder

```html
<section style="background-color:{{HIGHLIGHT_BG}};border:1px dashed #d0c8b8;border-radius:4px;padding:40px 20px;margin:24px 0;text-align:center;transform:rotate(0.3deg);">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">📷 贴一张照片</p>
</section>
```

### article_footer

```html
<!-- 结尾装饰 -->
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:32px 0 16px 0;text-align:center;letter-spacing:8px;">· · · · ·</p>

<section style="background-color:{{HIGHLIGHT_BG}};border-radius:8px;padding:16px 20px;margin:0 0 24px 0;text-align:center;border:1px solid #e8e0d8;">
<p style="font-size:13px;color:{{TEXT}};margin:0 0 4px 0;">今天的碎碎念就到这里 ☺</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">喜欢就点个"在看"吧</p>
</section>

</section>
</section>
```
