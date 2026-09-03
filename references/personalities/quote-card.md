# P30 · 语录金句 quote-card

超大引号装饰、大字居中排版、出处归属行、装饰分隔线。
像一本手写摘抄本——留白奢侈、字大气定、一句一世界。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:32px 20px 20px;">

<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 16px 0;text-align:center;letter-spacing:3px;">{{COLLECTION_NAME}}</p>
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;text-align:center;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;text-align:center;">{{SUBTITLE}}</p>
```

### quote_block

语录特有：核心组件——大字引用+超大引号+出处。整体居中。

```html
<section style="margin:30px 0;padding:28px 20px;text-align:center;">
<!-- 装饰引号 -->
<p style="font-size:56px;color:{{PRIMARY}};margin:0;line-height:0.6;opacity:0.2;font-family:Georgia,serif;">"</p>
<!-- 金句 -->
<p style="font-size:18px;font-weight:600;color:{{TEXT}};line-height:1.8;margin:12px 0 16px 0;">{{QUOTE}}</p>
<!-- 出处 -->
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">—— {{AUTHOR}}{{SOURCE}}</p>
</section>
```

`{{SOURCE}}` 可选，格式如 `《论语》`、`TED 演讲` 等。出处前加空格：`—— 苏格拉底　《申辩篇》`。

### ornament_divider

语录特有：装饰分隔线——用于隔开两条金句。

```html
<section style="text-align:center;margin:10px 0;">
<span style="font-size:14px;color:{{PRIMARY}};letter-spacing:8px;opacity:0.4;">◆ ◆ ◆</span>
</section>
```

### commentary

语录特有：编者注解——对金句的轻量解读，字号比金句小。

```html
<section style="margin:0 0 8px 0;padding:0 28px;">
<p style="font-size:14px;color:{{TEXT_LIGHT}};line-height:1.85;margin:0;text-align:center;">{{COMMENTARY}}</p>
</section>
```

### section_heading

```html
<section style="margin:32px 0 16px 0;text-align:center;">
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 4px 0;letter-spacing:3px;font-weight:600;">{{CATEGORY}}</p>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0;line-height:1.4;">{{HEADING}}</h2>
</section>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;text-align:center;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:600;">{{TEXT}}</span>
```

### blockquote

```html
<section style="border-top:1px solid {{HIGHLIGHT_BG}};border-bottom:1px solid {{HIGHLIGHT_BG}};padding:16px 20px;margin:32px 0;text-align:center;">
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;font-style:italic;">{{QUOTE}}</p>
</section>
```

### image_placeholder

```html
<section style="border:1px dashed {{TEXT_LIGHT}};padding:42px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 配图 / 书影 ]</p>
</section>
```

### article_footer

```html
<section style="margin:40px 0 0 0;padding:24px 0 0 0;text-align:center;">
<section style="display:inline-block;width:40px;height:1px;background-color:{{PRIMARY}};margin:0 0 16px 0;opacity:0.3;"></section>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 6px 0;">哪句话触动了你？留言告诉我</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:1px;">— END —</p>
</section>
</section>
```
