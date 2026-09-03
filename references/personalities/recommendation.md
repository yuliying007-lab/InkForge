# P28 · 好物种草 recommendation

圆角产品卡片（图占位+标题+一句话理由+适合人群胶囊标签）、编辑评语条、价格锚点。
像一本生活方式买手杂志——轻量、视觉优先、每件独立成卡。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<!-- 种草标签 -->
<section style="display:flex;align-items:center;gap:8px;margin:0 0 16px 0;">
<span style="display:inline-block;background-color:{{SECONDARY}};color:#ffffff;font-size:10px;font-weight:700;padding:3px 12px;border-radius:12px;letter-spacing:1px;">♥ 好物推荐</span>
<span style="font-size:11px;color:{{TEXT_LIGHT}};letter-spacing:1px;">精选 {{COUNT}} 件</span>
</section>

<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
```

### pick_card

种草特有：核心组件——产品推荐卡。圆角卡片，图占位+信息+适合人群。

```html
<section style="margin:18px 0;border-radius:10px;overflow:hidden;border:1px solid {{HIGHLIGHT_BG}};">
<!-- 图片占位 -->
<section style="background-color:{{HIGHLIGHT_BG}};padding:50px 20px;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 产品图片 ]</p>
</section>
<!-- 信息区 -->
<section style="padding:16px 18px;">
<section style="display:flex;align-items:center;justify-content:space-between;margin:0 0 8px 0;">
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0;">{{PRODUCT_NAME}}</p>
<p style="font-size:15px;font-weight:700;color:{{PRIMARY}};margin:0;">{{PRICE}}</p>
</section>
<p style="font-size:14px;color:{{TEXT}};line-height:1.7;margin:0 0 10px 0;">{{REASON}}</p>
<!-- 适合人群标签 -->
<section style="display:flex;flex-wrap:wrap;gap:5px;">
<span style="display:inline-block;font-size:11px;color:{{PRIMARY}};background-color:{{HIGHLIGHT_BG}};padding:2px 8px;border-radius:10px;">{{TAG_1}}</span>
<span style="display:inline-block;font-size:11px;color:{{PRIMARY}};background-color:{{HIGHLIGHT_BG}};padding:2px 8px;border-radius:10px;">{{TAG_2}}</span>
</section>
</section>
</section>
```

### editor_note

种草特有：编辑私人评语——轻量个人口吻。

```html
<section style="margin:0 0 24px 0;padding:12px 16px;background-color:{{HIGHLIGHT_BG}};border-radius:8px;">
<p style="font-size:13px;color:{{TEXT}};line-height:1.7;margin:0;"><span style="font-weight:700;color:{{PRIMARY}};">编辑说：</span>{{NOTE}}</p>
</section>
```

### section_heading

```html
<section style="margin:32px 0 16px 0;">
<p style="font-size:11px;color:{{SECONDARY}};margin:0 0 4px 0;font-weight:700;letter-spacing:2px;">{{CATEGORY}}</p>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0;line-height:1.4;">{{HEADING}}</h2>
</section>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:1px 4px;border-radius:2px;">{{TEXT}}</span>
```

### blockquote

```html
<section style="padding:18px 20px;margin:32px 0;border-left:3px solid {{SECONDARY}};background-color:{{HIGHLIGHT_BG}};border-radius:0 8px 8px 0;">
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{QUOTE}}</p>
</section>
```

### image_placeholder

```html
<section style="border:1px dashed {{TEXT_LIGHT}};padding:42px 20px;margin:32px 0;text-align:center;border-radius:8px;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 产品实拍 / 使用场景 ]</p>
</section>
```

### article_footer

```html
<section style="margin:40px 0 0 0;padding:18px 0 0 0;border-top:1px solid {{HIGHLIGHT_BG}};">
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 6px 0;text-align:center;">你用过哪件？还有什么好物想推荐？👇</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;text-align:center;letter-spacing:1px;">— END —</p>
</section>
</section>
```
