# P35 · 政务公报 government-report

红色全宽头部横幅、印章占位区、"一、二、三"汉字大写编号、红线分隔条、落款签发区。
像一份正式红头文件——权威庄重、层级分明、格式规范。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:0 20px 20px;">

<!-- 红色头部横幅 -->
<section style="background-color:{{PRIMARY}};margin:0 -20px 0 -20px;padding:16px 20px;text-align:center;">
<p style="font-size:10px;color:rgba(255,255,255,0.5);margin:0 0 6px 0;letter-spacing:4px;">{{ORG_NAME}}</p>
<section style="height:1px;background-color:rgba(255,255,255,0.15);margin:0 0 10px 0;"></section>
<h1 style="font-size:20px;font-weight:700;color:#ffffff;margin:0;line-height:1.4;">{{TITLE}}</h1>
</section>

<!-- 文号+日期行 -->
<section style="display:flex;align-items:center;justify-content:space-between;margin:16px 0;padding:0 0 12px 0;border-bottom:2px solid {{PRIMARY}};">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">{{DOC_NUMBER}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">{{DATE}}</p>
</section>
```

`{{ORG_NAME}}` 如"XX市发展和改革委员会"。`{{DOC_NUMBER}}` 如"X发改〔2026〕第 42 号"。

### stamp_area

政务特有：印章占位区——正文开头右上角放机构印章。

```html
<section style="text-align:right;margin:0 0 16px 0;">
<section style="display:inline-block;width:72px;height:72px;border:2px dashed {{PRIMARY}};border-radius:50%;display:flex;align-items:center;justify-content:center;opacity:0.3;">
<p style="font-size:9px;color:{{PRIMARY}};margin:0;text-align:center;width:72px;height:72px;line-height:72px;">[ 印章 ]</p>
</section>
</section>
```

### formal_heading

政务特有：汉字大写编号标题——"一、"、"二、"、"三、"格式。

```html
<section style="margin:40px 0 16px 0;">
<p style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0;line-height:1.4;">{{CN_NUM}}、{{HEADING}}</p>
<section style="width:40px;height:2px;background-color:{{PRIMARY}};margin:8px 0 0 0;"></section>
</section>
```

`{{CN_NUM}}` 使用汉字大写：一、二、三、四、五…

### sub_heading

政务特有：二级条目——"（一）"、"（二）"格式。

```html
<p style="font-size:15px;font-weight:700;color:{{TEXT}};margin:22px 0 10px 0;padding-left:2px;">（{{SUB_CN_NUM}}）{{SUB_HEADING}}</p>
```

### key_point

政务特有：要点条目——红色圆点+内容。

```html
<section style="display:flex;align-items:flex-start;margin:0 0 10px 0;">
<span style="display:inline-block;width:6px;height:6px;background-color:{{PRIMARY}};border-radius:50%;flex-shrink:0;margin:8px 10px 0 4px;"></span>
<p style="font-size:15px;color:{{TEXT}};margin:0;line-height:2.0;">{{POINT}}</p>
</section>
```

### official_quote

政务特有：政策原文摘录——灰底+引号装饰。

```html
<section style="margin:32px 0;padding:16px 18px;background-color:{{HIGHLIGHT_BG}};border-left:3px solid {{PRIMARY}};">
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 6px 0;font-weight:600;letter-spacing:1px;">📄 原文摘录</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;font-style:italic;">{{QUOTE}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:6px 0 0 0;">—— {{SOURCE}}</p>
</section>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;text-indent:2em;">{{CONTENT}}</p>
```

注意 `text-indent:2em` ——政务文稿首行缩进。

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:700;">{{TEXT}}</span>
```

### separator

```html
<section style="margin:32px 0;text-align:center;">
<section style="display:inline-block;width:200px;height:1px;background-color:{{PRIMARY}};opacity:0.3;"></section>
</section>
```

### image_placeholder

```html
<section style="border:1px dashed {{TEXT_LIGHT}};padding:42px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 文件扫描件 / 流程图 ]</p>
</section>
```

### signoff

政务特有：落款签发区——右对齐，单位+日期。

```html
<section style="margin:40px 0 0 0;text-align:right;padding-right:20px;">
<p style="font-size:15px;color:{{TEXT}};margin:0 0 4px 0;">{{ORG_NAME}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;">{{SIGN_DATE}}</p>
</section>
```

### article_footer

```html
<section style="margin:32px -20px 0 -20px;padding:12px 20px;background-color:{{HIGHLIGHT_BG}};border-top:2px solid {{PRIMARY}};">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">本文为公开资料整理，不代表官方立场。原文链接请见政府官网。</p>
</section>
</section>
```
