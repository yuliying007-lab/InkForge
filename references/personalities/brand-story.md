# P30 · 品牌故事 brand-story

扉页大标题（letter-spacing 展开品牌名）、居中章节标记（非左竖线）、全宽宣言色块、圆形头像客户证言、里程碑圆点时间轴。
像翻开一本品牌之书——有仪式感、有故事弧。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:32px 20px 20px;">

<!-- 品牌名（宽字距） -->
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 18px 0;text-align:center;letter-spacing:8px;">{{BRAND_SPACED}}</p>
<!-- 装饰线 -->
<section style="width:48px;height:1px;background-color:{{PRIMARY}};margin:0 auto 18px;"></section>
<!-- 标题 -->
<h1 style="font-size:24px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;text-align:center;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;text-align:center;line-height:1.7;">{{SUBTITLE}}</p>
```

### manifesto_block

品牌故事特有：品牌宣言——全宽主色块+白色大字。

```html
<section style="background-color:{{PRIMARY}};padding:24px 20px;margin:32px 0;text-align:center;">
<p style="font-size:28px;color:rgba(255,255,255,0.2);margin:0 0 4px 0;line-height:1;font-weight:700;">"</p>
<p style="font-size:17px;color:#ffffff;line-height:1.8;margin:0 0 4px 0;font-weight:600;">{{TAGLINE}}</p>
<p style="font-size:28px;color:rgba(255,255,255,0.2);margin:0;line-height:1;font-weight:700;">"</p>
</section>
```

### chapter_marker

品牌故事特有：居中章节标记——装饰横线包裹，书籍居中排版。

```html
<!-- 章节标记（居中） -->
<section style="margin:34px 0 18px 0;text-align:center;">
<p style="font-size:10px;color:{{PRIMARY}};margin:0 0 6px 0;letter-spacing:3px;font-weight:700;">— CHAPTER {{NUM}} —</p>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0;line-height:1.4;">{{HEADING}}</h2>
<section style="width:24px;height:1px;background-color:{{PRIMARY}};margin:10px auto 0;"></section>
</section>
```

居中+装饰横线包裹的 CHAPTER 标签——跟 case-study 的左对齐 PHASE+左竖线完全不同，是书籍内页的经典章节排版。底部短装饰线收尾。

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### testimony_card

品牌故事特有：客户证言卡。

```html
<section style="display:flex;align-items:flex-start;margin:32px 0;padding:16px;background-color:{{HIGHLIGHT_BG}};border-radius:8px;">
<section style="width:44px;height:44px;background-color:{{BORDER}};border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
<p style="font-size:16px;margin:0;">💬</p>
</section>
<section style="margin-left:14px;flex:1;">
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0 0 6px 0;">{{QUOTE}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">—— {{CUSTOMER}}</p>
</section>
</section>
```

### milestone_dot

品牌故事特有：里程碑节点。

```html
<section style="display:flex;align-items:flex-start;margin:12px 0;padding-left:4px;">
<section style="flex-shrink:0;margin-top:4px;">
<section style="width:10px;height:10px;background-color:{{PRIMARY}};border-radius:50%;"></section>
</section>
<section style="margin-left:14px;">
<p style="font-size:12px;color:{{PRIMARY}};margin:0 0 2px 0;font-weight:600;">{{YEAR}}</p>
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.7;">{{EVENT}}</p>
</section>
</section>
```

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:600;">{{TEXT}}</span>
```

### blockquote

```html
<section style="padding:14px 20px;margin:32px 0;text-align:center;">
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;font-style:italic;">{{QUOTE}}</p>
</section>
```

居中斜体——品牌故事的引用更诗意、更居中。

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.85;padding-left:2px;">◇&nbsp; {{ITEM}}</p>
```

### image_placeholder

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:8px;padding:48px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;font-style:italic;">[ 品牌 / 团队 / 客户 ]</p>
</section>
```

### cta_block

```html
<section style="background-color:{{PRIMARY}};padding:14px;margin:32px 0;text-align:center;">
<p style="font-size:15px;color:#ffffff;font-weight:700;margin:0;">了解更多关于 {{BRAND}} 的故事</p>
</section>
```

### article_footer

```html
<section style="width:48px;height:1px;background-color:{{PRIMARY}};margin:32px auto 16px;"></section>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;text-align:center;letter-spacing:8px;">{{BRAND_SPACED}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:8px 0 0 0;text-align:center;">点个"在看"，把故事分享出去</p>
</section>
</section>
```
