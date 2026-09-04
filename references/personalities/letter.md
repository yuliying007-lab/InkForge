# P12 · 书信手札 letter

信封头（TO / FROM）、落款（此致）、邮戳圆章、信纸竖线。
温暖的书信体，适合情感类、写给读者的信。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 16px;">
<section style="background-color:{{BG}};padding:32px 24px 24px;">

<!-- 信封头 -->
<section style="border:1px solid #e0d8d0;border-radius:4px;padding:16px 20px;margin:0 0 28px 0;">
<section style="display:flex;justify-content:space-between;align-items:flex-start;">
<section>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;letter-spacing:1px;">TO · 收信人</p>
<p style="font-size:14px;color:{{TEXT}};margin:0;font-weight:600;">{{TO}}</p>
</section>
<section style="text-align:right;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;letter-spacing:1px;">FROM · 寄信人</p>
<p style="font-size:14px;color:{{TEXT}};margin:0;font-weight:600;">{{FROM}}</p>
</section>
</section>
</section>

<!-- 邮戳装饰 -->
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 24px 0;text-align:right;letter-spacing:1px;">〠 {{DATE}}</p>

<!-- 称呼 -->
<p style="font-size:16px;color:{{TEXT}};margin:0 0 24px 0;line-height:1.6;">{{SALUTATION}}：</p>
```

`{{TO}}` 通常填"每一位读者" 或具体对象。`{{FROM}}` 填作者名/号名。`{{SALUTATION}}` 如"亲爱的你"。

### section_heading

信件体的小标题较少使用，以段落流为主。如需使用：

```html
<section style="margin:32px 0 16px 0;border-bottom:1px solid #e8e0d8;padding-bottom:8px;">
<h2 style="font-size:16px;font-weight:600;color:{{PRIMARY}};margin:0;line-height:1.4;font-style:italic;">{{HEADING}}</h2>
</section>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 22px 0;line-height:2.2;text-indent:2em;">{{CONTENT}}</p>
```

注意首行缩进 `text-indent: 2em`——书信体的标志。

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:600;">{{TEXT}}</span>
```

### blockquote

```html
<!-- 夹在信中的引用 -->
<section style="border-left:2px solid {{PRIMARY}};padding:8px 0 8px 20px;margin:20px 0 20px 2em;">
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.8;font-style:italic;">{{QUOTE}}</p>
</section>
```

### list_item

信件中的列表较少，保持简洁：

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 2em;line-height:1.8;">{{NUM}}. {{ITEM}}</p>
```

### separator

```html
<section style="border-bottom:1px dashed #e0d8d0;margin:28px auto;width:50%;"></section>
```

### decorative_illustration

```html
<section style="border:1px solid #e0d8d0;padding:40px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;font-style:italic;">[ Claude 生成装饰插画位置 ]</p>
</section>
```

### article_footer

```html
<!-- 落款 -->
<section style="margin:40px 0 0 0;text-align:right;padding-right:40px;">
<p style="font-size:14px;color:{{TEXT}};margin:0 0 4px 0;">此致</p>
<p style="font-size:14px;color:{{TEXT}};margin:0 0 16px 0;">安好</p>
<p style="font-size:14px;color:{{PRIMARY}};margin:0 0 4px 0;font-weight:600;">{{SIGN_OFF}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">{{DATE}}</p>
</section>

<!-- 分隔 -->
<section style="border-bottom:1px solid #e0d8d0;margin:28px 0 16px 0;"></section>

<!-- CTA -->
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 0 0;text-align:center;">如果这封信触动了你，点个"在看"</p>

</section>
</section>
```
