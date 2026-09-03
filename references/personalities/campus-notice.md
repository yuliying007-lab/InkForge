# P24 · 校园通知 campus-notice

红头横条+双线+组织居中抬头、公文信息表、📌图钉便签、盖章落款。
像行政公告栏里钉着的正式通知——严肃但亲切。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:0 20px 24px;">

<!-- 红头横条 -->
<section style="background-color:{{PRIMARY}};height:6px;margin:0 -20px;"></section>

<!-- 双线 -->
<section style="border-top:2px solid {{PRIMARY}};border-bottom:1px solid {{PRIMARY}};height:4px;margin:10px -20px 20px;"></section>

<!-- 组织名抬头 -->
<p style="font-size:18px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px 0;text-align:center;letter-spacing:4px;">{{ORG}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 18px 0;text-align:center;letter-spacing:2px;">{{ORG_SUB}}</p>

<!-- 文件标题 -->
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 6px 0;line-height:1.35;text-align:center;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 0 0;text-align:center;line-height:1.7;">{{SUBTITLE}}</p>
```

`{{ORG}}` 是发布组织全称，`{{ORG_SUB}}` 是下属单位/部门（可省略）。红头横条+双线是中式公文的标志视觉。

### info_table

校园通知特有：公文信息表——时间/地点/截止等关键信息用表格行展示。

```html
<!-- 信息表 -->
<section style="border:1px solid {{BORDER}};margin:32px 0;font-size:14px;">
<section style="display:flex;border-bottom:1px solid {{BORDER}};">
<section style="width:72px;background-color:{{HIGHLIGHT_BG}};padding:10px 12px;font-weight:600;color:{{TEXT}};flex-shrink:0;">时间</section>
<section style="flex:1;padding:10px 12px;color:{{TEXT}};">{{DATE}}</section>
</section>
<section style="display:flex;border-bottom:1px solid {{BORDER}};">
<section style="width:72px;background-color:{{HIGHLIGHT_BG}};padding:10px 12px;font-weight:600;color:{{TEXT}};flex-shrink:0;">地点</section>
<section style="flex:1;padding:10px 12px;color:{{TEXT}};">{{LOCATION}}</section>
</section>
<section style="display:flex;">
<section style="width:72px;background-color:{{HIGHLIGHT_BG}};padding:10px 12px;font-weight:600;color:{{TEXT}};flex-shrink:0;">截止</section>
<section style="flex:1;padding:10px 12px;color:{{PRIMARY}};font-weight:600;">{{DEADLINE}}</section>
</section>
</section>
```

左列标签用 `HIGHLIGHT_BG` 底色+固定宽度，右列内容自适应。截止日期用 `PRIMARY` 强调。行数可增减。

### bulletin_pin

校园通知特有：图钉便签卡片——重要事项用便签形式展示。

```html
<!-- 图钉便签 -->
<section style="position:relative;background-color:{{HIGHLIGHT_BG}};padding:16px 16px 16px 20px;margin:18px 0;border-left:3px solid {{PRIMARY}};">
<section style="position:absolute;top:-6px;left:12px;background-color:{{PRIMARY}};color:#ffffff;font-size:10px;font-weight:700;padding:2px 8px;letter-spacing:1px;">重要</section>
<p style="font-size:15px;color:{{TEXT}};line-height:1.85;margin:6px 0 0 0;">{{CONTENT}}</p>
</section>
```

顶部浮出的小标签可改为「通知」「提醒」「必读」等。`position:absolute` 在微信中可能被过滤，退化后标签贴在顶部也可接受。

### section_heading

```html
<!-- 公文段落标题 -->
<p style="font-size:11px;color:{{PRIMARY}};margin:32px 0 6px 0;letter-spacing:2px;">第{{NUM}}项</p>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0 0 14px 0;line-height:1.4;">{{HEADING}}</h2>
```

用「第一项」「第二项」的公文编号风格。

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:700;border-bottom:1px solid {{PRIMARY}};">{{TEXT}}</span>
```

带下划线强调——公文中常用的重点标注方式。

### blockquote

```html
<!-- 政策/规定引用 -->
<section style="background-color:{{HIGHLIGHT_BG}};border-top:2px solid {{PRIMARY}};border-bottom:2px solid {{PRIMARY}};padding:18px 20px;margin:32px 0;">
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 6px 0;letter-spacing:1px;font-weight:600;">相关规定</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{QUOTE}}</p>
</section>
```

上下双线（不是左竖线），更贴近公文的引用规范样式。

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.85;padding-left:2px;">（{{NUM}}）{{ITEM}}</p>
```

用中文括号编号——公文标准列举格式。

### seal_mark

校园通知特有：圆形印章——出现在文末落款区。

```html
<!-- 印章 -->
<section style="display:flex;justify-content:flex-end;margin:28px 0 8px 0;">
<section style="width:64px;height:64px;border:2px solid {{PRIMARY}};border-radius:50%;display:flex;align-items:center;justify-content:center;opacity:0.75;">
<p style="font-size:11px;font-weight:700;color:{{PRIMARY}};margin:0;text-align:center;line-height:1.3;">{{ORG_SHORT}}</p>
</section>
</section>
```

`{{ORG_SHORT}}` 是组织简称（2-4字），如「学工处」「团委」。右对齐，微信中 flex 退化后仍可接受。

### image_placeholder

```html
<section style="border:1px dashed {{BORDER}};padding:40px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 二维码/活动海报位置 ]</p>
</section>
```

### cta_block

```html
<section style="background-color:{{PRIMARY}};padding:14px;margin:32px 0;text-align:center;">
<p style="font-size:15px;color:#ffffff;font-weight:700;margin:0;letter-spacing:1px;">请相关同学按时完成</p>
</section>
```

无圆角——公文风格的按钮更方正。

### article_footer

```html
<!-- 落款区 -->
<section style="margin:40px 0 0 0;text-align:right;padding-right:10px;">
<p style="font-size:14px;color:{{TEXT}};margin:0 0 4px 0;">{{ORG}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;">{{DATE}}</p>
</section>

<!-- 底线 -->
<section style="border-top:2px solid {{PRIMARY}};border-bottom:1px solid {{PRIMARY}};height:4px;margin:20px -20px 0;"></section>

</section>
</section>
```

落款右对齐+日期，底部双线呼应顶部红头。
