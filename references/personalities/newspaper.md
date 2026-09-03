# P02 · 旧报纸 newspaper

衬线字、报头+期号、CHAPTER标签、首字下沉、❦花饰、罗马数字列表。
编辑严肃感，像纸媒深度报道。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 16px;">
<section style="background-color:{{BG}};padding:32px 24px 24px;border:1px solid #e8e0d8;">

<!-- 报头 -->
<section style="display:flex;justify-content:space-between;align-items:center;margin:0 0 16px 0;padding:0 0 12px 0;border-bottom:2px solid {{PRIMARY}};">
<p style="font-size:14px;font-weight:700;color:{{PRIMARY}};margin:0;letter-spacing:4px;text-transform:uppercase;">THE FOCUS TIMES</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">NO. {{ISSUE}} · 周报</p>
</section>

<!-- 栏目标签 -->
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 12px 0;letter-spacing:3px;text-transform:uppercase;">EDITORIAL · 深 度</p>

<!-- 标题 -->
<h1 style="font-size:24px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.3;font-family:Georgia,'Songti SC','SimSun',serif;">{{TITLE}}</h1>
<h1 style="font-size:24px;font-weight:700;color:{{TEXT}};margin:0 0 12px 0;line-height:1.3;font-family:Georgia,'Songti SC','SimSun',serif;">{{TITLE_LINE2}}</h1>

<!-- 副标题 -->
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 0 0;line-height:1.6;">— {{SUBTITLE}} —</p>
```

### section_heading

```html
<!-- 章节标签 -->
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:40px 0 8px 0;letter-spacing:3px;text-transform:uppercase;">CHAPTER {{ROMAN}}</p>
<h2 style="font-size:18px;font-weight:700;color:{{TEXT}};margin:0 0 20px 0;line-height:1.4;font-family:Georgia,'Songti SC','SimSun',serif;">{{HEADING}}</h2>
```

### body_paragraph

首段使用首字下沉，后续段落正常。

**首段**：
```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 22px 0;line-height:2.0;text-align:justify;"><span style="font-size:42px;font-weight:700;float:left;line-height:1;margin:4px 8px 0 0;color:{{PRIMARY}};font-family:Georgia,'Songti SC',serif;">{{FIRST_CHAR}}</span>{{REST_OF_PARAGRAPH}}</p>
```

**后续段落**：
```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 22px 0;line-height:2.0;text-align:justify;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:600;font-style:italic;">{{TEXT}}</span>
```

### blockquote

```html
<!-- 引用（居中衬线体） -->
<section style="margin:28px 0;padding:20px 0;border-top:1px solid {{TEXT_LIGHT}};border-bottom:1px solid {{TEXT_LIGHT}};">
<p style="font-size:16px;color:{{TEXT}};margin:0 0 8px 0;line-height:1.8;text-align:center;font-style:italic;font-family:Georgia,'Songti SC','SimSun',serif;">"{{QUOTE}}"</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;text-align:center;letter-spacing:2px;text-transform:uppercase;">— FROM THE ARTICLE</p>
</section>
```

### list_item

罗马数字编号：

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 14px 0;line-height:1.8;padding-left:4px;"><span style="font-style:italic;font-weight:600;color:{{PRIMARY}};font-family:Georgia,serif;">{{ROMAN}}.</span>&nbsp;&nbsp;{{ITEM}}</p>
```

### separator

```html
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:32px 0;text-align:center;line-height:1;">❦&nbsp;&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;&nbsp;❦</p>
```

### image_placeholder

```html
<section style="background-color:{{HIGHLIGHT_BG}};border:1px solid #e8e0d8;padding:48px 20px;margin:24px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;font-style:italic;">[ 图片位置 ]</p>
</section>
```

### article_footer

```html
<!-- 花饰 -->
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:32px 0 8px 0;text-align:center;">❦&nbsp;&nbsp;&nbsp;&nbsp;❦&nbsp;&nbsp;&nbsp;&nbsp;❦</p>

<!-- 分割线 -->
<section style="border-top:2px solid {{PRIMARY}};margin:8px 0 16px 0;"></section>

<!-- 结尾 -->
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;text-align:center;letter-spacing:2px;">— FIN —</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 0 0;text-align:center;">如有共鸣，点个"在看"</p>

</section>
</section>
```
