# P04 · 极简和风 minimalist

大量留白、一颗红点、极细线条、罗马数字小标。
克制到极致，呼吸感强。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 16px;">
<section style="background-color:{{BG}};padding:60px 32px 40px;">

<!-- 红点装饰 -->
<p style="font-size:10px;color:{{PRIMARY}};margin:0 0 48px 0;text-align:center;letter-spacing:12px;">●</p>

<!-- 标题 -->
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.4;text-align:center;">{{TITLE}}</h1>
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 24px 0;line-height:1.4;text-align:center;">{{TITLE_LINE2}}</h1>

<!-- 副标题 -->
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 0 0;text-align:center;letter-spacing:2px;">{{SUBTITLE}}</p>
```

### section_heading

```html
<!-- 极细线条 + 编号 -->
<section style="margin:48px 0 24px 0;">
<p style="font-size:12px;color:{{PRIMARY}};margin:0 0 8px 0;line-height:1;">— {{ROMAN}}</p>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0;line-height:1.4;">{{HEADING}}</h2>
</section>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.2;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="border-bottom:1px solid {{PRIMARY}};color:{{TEXT}};padding-bottom:1px;">{{TEXT}}</span>
```

### blockquote

```html
<!-- 引用（极简左线） -->
<section style="border-left:2px solid {{PRIMARY}};padding:8px 0 8px 20px;margin:32px 0;">
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:2.0;">{{QUOTE}}</p>
</section>
```

### list_item

```html
<p style="font-size:14px;color:{{TEXT}};margin:0 0 16px 0;line-height:1.8;padding-left:4px;"><span style="color:{{PRIMARY}};font-size:12px;">{{NUM}}</span>&nbsp;&nbsp;&nbsp;{{ITEM}}</p>
```

用小写两位数字 `01` `02` `03`，颜色用主色。

### separator

```html
<section style="margin:40px 0;border-bottom:1px solid #e5e5e5;width:40px;"></section>
```

仅40px宽的短线，极克制。

### image_placeholder

```html
<section style="padding:48px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 图片位置 ]</p>
</section>
```

### article_footer

```html
<!-- 结尾标记 -->
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:48px 0 16px 0;text-align:center;letter-spacing:4px;">END</p>

<!-- 红点 -->
<p style="font-size:10px;color:{{PRIMARY}};margin:0 0 32px 0;text-align:center;">●</p>

<!-- CTA -->
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;text-align:center;">如有共鸣</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 0 0;text-align:center;">点个"在看"</p>

</section>
</section>
```
