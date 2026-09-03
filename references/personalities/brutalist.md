# P05 · 粗野风 brutalist

纯等宽字、粗黑边框、安全黄高亮、>> 01 << 编号、警戒条分割线。
反精致、抓眼球、独立态度。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};border:3px solid {{TEXT}};padding:24px 20px 20px;font-family:'SF Mono','Fira Code','Courier New',Consolas,monospace;">

<!-- 文件标题行 -->
<section style="display:flex;justify-content:space-between;align-items:center;margin:0 0 20px 0;">
<p style="font-size:12px;font-weight:700;color:{{TEXT}};margin:0;letter-spacing:1px;">FILE_NO.{{ISSUE}}</p>
<p style="font-size:12px;font-weight:700;color:{{TEXT}};margin:0;letter-spacing:1px;">FOCUS.TXT</p>
</section>

<!-- 标题（断行、大字） -->
<h1 style="font-size:28px;font-weight:900;color:{{TEXT}};margin:0 0 4px 0;line-height:1.2;">{{TITLE_WORD1}}</h1>
<h1 style="font-size:28px;font-weight:900;color:{{TEXT}};margin:0 0 4px 0;line-height:1.2;">{{TITLE_WORD2}}</h1>
<h1 style="font-size:28px;font-weight:900;color:{{TEXT}};margin:0 0 20px 0;line-height:1.2;">{{TITLE_WORD3}}</h1>

<!-- 副标题 -->
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 0 0;line-height:1.6;letter-spacing:2px;">{{SUBTITLE}}</p>
```

标题拆成多个短行，每行2-4个字，制造视觉冲击。

### section_heading

```html
<p style="font-size:12px;color:{{PRIMARY}};margin:32px 0 12px 0;letter-spacing:2px;font-family:'SF Mono','Fira Code','Courier New',Consolas,monospace;">&gt;&gt; {{NUM}} &lt;&lt;&nbsp;&nbsp;{{HEADING}}</p>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 20px 0;line-height:1.9;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:#fef08a;color:{{TEXT}};font-weight:700;padding:1px 3px;">{{TEXT}}</span>
```

固定用安全黄 `#fef08a` 高亮，不跟主题色走——这是粗野风的标志元素。

### blockquote

```html
<!-- 引用（粗边框） -->
<section style="border:3px solid {{TEXT}};padding:16px 20px;margin:24px 0;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 8px 0;letter-spacing:1px;font-family:'SF Mono','Fira Code','Courier New',Consolas,monospace;">/* QUOTE */</p>
<p style="font-size:15px;color:{{TEXT}};margin:0;line-height:1.8;font-weight:600;">"{{QUOTE}}"</p>
</section>
```

### list_item

```html
<!-- 每个列表项是一个框 -->
<section style="border:2px solid {{TEXT}};padding:12px 16px;margin:0 0 8px 0;">
<p style="font-size:15px;color:{{TEXT}};margin:0;line-height:1.6;"><span style="font-weight:900;color:{{PRIMARY}};font-family:'SF Mono','Fira Code',monospace;">{{NUM}}</span>&nbsp;&nbsp;&nbsp;{{ITEM}}</p>
</section>
```

### separator

```html
<!-- 警戒条（斜条纹用重复字符模拟） -->
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:28px 0;letter-spacing:2px;text-align:center;font-family:'SF Mono',monospace;">▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</p>
```

### image_placeholder

```html
<section style="border:3px solid {{TEXT}};padding:48px 20px;margin:24px 0;text-align:center;">
<p style="font-size:14px;font-weight:700;color:{{TEXT}};margin:0;font-family:'SF Mono',monospace;">[ IMG ]</p>
</section>
```

### article_footer

```html
<!-- 结尾 -->
<p style="font-size:12px;color:{{PRIMARY}};margin:32px 0 24px 0;letter-spacing:2px;font-family:'SF Mono','Fira Code','Courier New',Consolas,monospace;">&gt;&gt; END &lt;&lt;</p>

<p style="font-size:13px;color:{{PRIMARY}};margin:0 0 4px 0;">点个"在看"。关注。每周一发。</p>

</section>
</section>
```
