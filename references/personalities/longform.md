# P14 · 纯净长文 longform

零装饰、大字号正文(16px)、极宽行距(2.2)、段间距大、仅用灰线分隔。
Substack/竹白风格，适合长篇随笔、深度叙事、连载。
让读者沉浸在文字本身，一切装饰性元素退场。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 20px;">
<section style="background-color:{{BG}};padding:48px 0 32px;">

<!-- 标题（大号、居左、朴素） -->
<h1 style="font-size:26px;font-weight:700;color:{{TEXT}};margin:0 0 12px 0;line-height:1.4;">{{TITLE}}</h1>

<!-- 副标题 -->
<p style="font-size:15px;color:{{TEXT_LIGHT}};margin:0 0 24px 0;line-height:1.6;">{{SUBTITLE}}</p>

<!-- 作者+日期 -->
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 0 0;">{{AUTHOR}} · {{DATE}}</p>

<!-- 分隔 -->
<section style="border-bottom:1px solid #e5e5e5;margin:24px 0 0 0;"></section>
```

### section_heading

```html
<h2 style="font-size:19px;font-weight:700;color:{{TEXT}};margin:40px 0 20px 0;line-height:1.4;">{{HEADING}}</h2>
```

无编号、无装饰，纯文字标题。

### body_paragraph

```html
<p style="font-size:16px;color:{{TEXT}};margin:0 0 28px 0;line-height:2.2;">{{CONTENT}}</p>
```

字号 16px，行距 2.2，段间距 28px——这是此人格的核心：呼吸感。

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:600;">{{TEXT}}</span>
```

极简高亮，只加粗+变色，不加背景。

### blockquote

```html
<section style="border-left:2px solid {{TEXT_LIGHT}};padding:4px 0 4px 20px;margin:32px 0;">
<p style="font-size:15px;color:{{TEXT_LIGHT}};margin:0;line-height:2.0;">{{QUOTE}}</p>
</section>
```

### list_item

```html
<p style="font-size:16px;color:{{TEXT}};margin:0 0 16px 24px;line-height:2.0;">{{NUM}}. {{ITEM}}</p>
```

### separator

```html
<section style="border-bottom:1px solid #e5e5e5;margin:36px 0;"></section>
```

一条灰线，仅此而已。

### decorative_illustration

```html
<section style="padding:40px 0;text-align:center;">
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;">[ Claude 生成装饰插画位置 ]</p>
</section>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 0 0;text-align:center;">{{CAPTION}}</p>
```

### article_footer

```html
<!-- 极简结尾 -->
<section style="border-top:1px solid #e5e5e5;margin:40px 0 0 0;padding:24px 0 0 0;">
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;">点个"在看"，感谢阅读。</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;">欢迎关注，不定期更新。</p>
</section>

</section>
</section>
```
