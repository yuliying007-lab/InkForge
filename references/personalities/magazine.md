# P06 · 杂志感 magazine

双语标签、大编号（01/02）、「大引号」引用、半透高亮。
文气、留白多，适合知识类和品牌内容。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 16px;">
<section style="background-color:{{BG}};padding:32px 24px 24px;">

<!-- 栏目标签 -->
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 16px 0;letter-spacing:4px;">{{CATEGORY_EN}} · {{CATEGORY_CN}}</p>

<!-- 标题 -->
<h1 style="font-size:24px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.3;">{{TITLE}}</h1>
<h1 style="font-size:24px;font-weight:700;color:{{TEXT}};margin:0 0 16px 0;line-height:1.3;">{{TITLE_LINE2}}</h1>

<!-- 副标题 -->
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 0 0;line-height:1.6;">{{SUBTITLE}}</p>
```

### section_heading

```html
<!-- 大编号 + 标题 -->
<section style="margin:40px 0 16px 0;">
<p style="font-size:32px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px 0;line-height:1;">{{NUM}}</p>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0;line-height:1.4;">{{HEADING}}</h2>
</section>
```

`{{NUM}}` 用两位数字 `01` `02` `03`，字号大且用主色。

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 22px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:2px 4px;">{{TEXT}}</span>
```

### blockquote

```html
<!-- 大引号引用 -->
<section style="padding:20px 24px;margin:32px 0;">
<p style="font-size:36px;color:{{PRIMARY}};margin:0 0 4px 0;line-height:1;">「</p>
<p style="font-size:15px;color:{{TEXT}};margin:0 0 4px 20px;line-height:1.8;">{{QUOTE}}</p>
</section>
```

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 14px 0;line-height:1.8;padding-left:4px;"><span style="font-weight:700;color:{{PRIMARY}};font-size:13px;">{{NUM}}</span>&nbsp;&nbsp;{{ITEM}}</p>
```

编号 `01` `02` `03` 用主色。

### separator

```html
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:36px 0;text-align:center;">—— ✦ ——</p>
```

### image_placeholder

```html
<section style="background-color:{{HIGHLIGHT_BG}};padding:48px 20px;margin:32px 0;text-align:center;border-radius:4px;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 0 0;">图片位置</p>
</section>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:8px 0 0 0;letter-spacing:1px;">PHOTO · {{CAPTION}}</p>
```

### article_footer

```html
<!-- 分隔 -->
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:36px 0 8px 0;text-align:center;">—— ✦ ——</p>
<section style="border-bottom:1px solid #e5e5e5;margin:0 0 24px 0;"></section>

<!-- CTA -->
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;text-align:center;letter-spacing:3px;">THANKS FOR READING</p>
<p style="font-size:13px;color:{{PRIMARY}};margin:0 0 0 0;text-align:center;">点个"在看"，欢迎关注</p>

</section>
</section>
```
