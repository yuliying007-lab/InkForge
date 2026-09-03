# P31 · 快讯速报 news-flash

红色 BREAKING 横条、时间戳驱动的条目、重要程度色标（红/橙/灰）、一句话摘要。
像新闻编辑室的速报稿——极度精练、时间为序、密度优先。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<!-- BREAKING 横条 -->
<section style="background-color:{{PRIMARY}};padding:6px 0;margin:0 -20px 18px -20px;text-align:center;">
<p style="font-size:11px;color:#ffffff;margin:0;font-weight:700;letter-spacing:3px;">⚡ {{BULLETIN_TYPE}}</p>
</section>

<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 6px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;line-height:1.5;">{{DATE}} · {{SOURCE}}</p>
```

`{{BULLETIN_TYPE}}` 如 `早报速递`、`行业快讯`、`突发快报`。

### flash_item

快讯特有：核心组件——时间戳+标题+一句话摘要。

```html
<section style="margin:0 0 0 0;padding:14px 0;border-bottom:1px solid {{HIGHLIGHT_BG}};">
<section style="display:flex;align-items:flex-start;gap:10px;">
<span style="display:inline-block;font-size:11px;color:{{TEXT_LIGHT}};flex-shrink:0;margin-top:3px;font-family:'SF Mono','Fira Code','Courier New',Consolas,monospace;">{{TIME}}</span>
<section style="flex:1;">
<p style="font-size:15px;font-weight:700;color:{{TEXT}};margin:0 0 4px 0;line-height:1.4;">{{HEADLINE}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.6;">{{SUMMARY}}</p>
</section>
</section>
</section>
```

### flash_item_urgent

快讯特有：紧急条目——左侧红色竖条标记。

```html
<section style="margin:0 0 0 0;padding:14px 0 14px 12px;border-bottom:1px solid {{HIGHLIGHT_BG}};border-left:3px solid #dc2626;">
<section style="display:flex;align-items:flex-start;gap:10px;">
<span style="display:inline-block;font-size:11px;color:#dc2626;flex-shrink:0;margin-top:3px;font-weight:700;font-family:'SF Mono','Fira Code','Courier New',Consolas,monospace;">{{TIME}}</span>
<section style="flex:1;">
<p style="font-size:15px;font-weight:700;color:{{TEXT}};margin:0 0 4px 0;line-height:1.4;"><span style="display:inline-block;background-color:#dc2626;color:#fff;font-size:10px;padding:1px 6px;margin-right:6px;font-weight:700;">重要</span>{{HEADLINE}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.6;">{{SUMMARY}}</p>
</section>
</section>
</section>
```

### section_heading

```html
<section style="margin:24px 0 12px 0;padding:8px 0;border-bottom:2px solid {{PRIMARY}};">
<p style="font-size:13px;font-weight:700;color:{{PRIMARY}};margin:0;letter-spacing:1px;">{{HEADING}}</p>
</section>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 16px 0;line-height:1.9;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:1px 4px;">{{TEXT}}</span>
```

### blockquote

```html
<section style="background-color:{{HIGHLIGHT_BG}};padding:12px 14px;margin:16px 0;">
<p style="font-size:13px;color:{{TEXT}};line-height:1.7;margin:0;">{{QUOTE}}</p>
</section>
```

### image_placeholder

```html
<section style="border:1px dashed {{TEXT_LIGHT}};padding:32px 20px;margin:16px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 新闻配图 ]</p>
</section>
```

### article_footer

```html
<section style="background-color:{{PRIMARY}};margin:24px -20px 0 -20px;padding:14px 20px;">
<p style="font-size:12px;color:rgba(255,255,255,0.7);margin:0 0 4px 0;">持续关注 · 有新进展第一时间更新</p>
<p style="font-size:11px;color:rgba(255,255,255,0.5);margin:0;letter-spacing:1px;">{{SOURCE}} · {{DATE}}</p>
</section>
</section>
```
