# P29 · 时间线 timeline

纵轴竖线+圆点节点、年代分隔横幅、里程碑高亮卡。
像一幅大事年表——时间为轴、事件为珠、一条线串起全部脉络。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<!-- 时间线标签 -->
<section style="display:flex;align-items:center;gap:8px;margin:0 0 16px 0;">
<span style="display:inline-block;width:24px;height:2px;background-color:{{PRIMARY}};"></span>
<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background-color:{{PRIMARY}};"></span>
<span style="display:inline-block;width:24px;height:2px;background-color:{{PRIMARY}};"></span>
<span style="font-size:11px;color:{{TEXT_LIGHT}};letter-spacing:1px;margin-left:4px;">TIMELINE</span>
</section>

<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
```

### era_divider

时间线特有：年代/阶段分隔——横条标记进入新时间段。

```html
<section style="margin:28px 0 20px 0;display:flex;align-items:center;gap:10px;">
<section style="flex:1;height:1px;background-color:{{PRIMARY}};"></section>
<span style="display:inline-block;font-size:12px;font-weight:700;color:#ffffff;background-color:{{PRIMARY}};padding:4px 14px;letter-spacing:2px;">{{ERA}}</span>
<section style="flex:1;height:1px;background-color:{{PRIMARY}};"></section>
</section>
```

### timeline_node

时间线特有：核心组件——左侧竖线+圆点+右侧内容。

```html
<section style="display:flex;align-items:flex-start;margin:0 0 0 4px;">
<!-- 竖线+圆点 -->
<section style="flex-shrink:0;width:20px;display:flex;flex-direction:column;align-items:center;margin-right:14px;">
<section style="width:10px;height:10px;background-color:{{PRIMARY}};border-radius:50%;flex-shrink:0;"></section>
<section style="width:2px;flex:1;min-height:50px;background-color:{{PRIMARY}};opacity:0.3;"></section>
</section>
<!-- 内容 -->
<section style="flex:1;padding:0 0 22px 0;">
<p style="font-size:12px;color:{{PRIMARY}};font-weight:700;margin:0 0 4px 0;letter-spacing:1px;">{{DATE}}</p>
<p style="font-size:15px;color:{{TEXT}};line-height:1.85;margin:0;">{{EVENT}}</p>
</section>
</section>
```

### milestone_card

时间线特有：里程碑节点——比普通节点更醒目，用反色卡片。

```html
<section style="display:flex;align-items:flex-start;margin:0 0 0 4px;">
<!-- 竖线+大圆点 -->
<section style="flex-shrink:0;width:20px;display:flex;flex-direction:column;align-items:center;margin-right:14px;">
<section style="width:14px;height:14px;background-color:{{PRIMARY}};border-radius:50%;flex-shrink:0;border:3px solid {{SECONDARY}};"></section>
<section style="width:2px;flex:1;min-height:50px;background-color:{{PRIMARY}};opacity:0.3;"></section>
</section>
<!-- 里程碑卡片 -->
<section style="flex:1;padding:0 0 22px 0;">
<section style="background-color:{{PRIMARY}};padding:14px 16px;margin:0 0 0 0;">
<p style="font-size:11px;color:rgba(255,255,255,0.6);margin:0 0 4px 0;letter-spacing:1px;font-weight:600;">⭐ 里程碑 · {{DATE}}</p>
<p style="font-size:15px;color:#ffffff;line-height:1.7;margin:0;font-weight:600;">{{EVENT}}</p>
</section>
</section>
</section>
```

### section_heading

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:28px 0 14px 0;line-height:1.4;">{{HEADING}}</h2>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 20px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:1px 4px;">{{TEXT}}</span>
```

### blockquote

```html
<section style="background-color:{{HIGHLIGHT_BG}};padding:14px 16px;margin:22px 0;border-left:3px solid {{PRIMARY}};">
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{QUOTE}}</p>
</section>
```

### image_placeholder

```html
<section style="border:1px dashed {{TEXT_LIGHT}};padding:42px 20px;margin:22px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 历史图片 / 示意图 ]</p>
</section>
```

### article_footer

```html
<section style="display:flex;align-items:flex-start;margin:32px 0 0 4px;">
<section style="flex-shrink:0;width:20px;display:flex;flex-direction:column;align-items:center;margin-right:14px;">
<section style="width:10px;height:10px;background-color:{{TEXT_LIGHT}};border-radius:50%;flex-shrink:0;"></section>
</section>
<section style="flex:1;">
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 10px 0;">未完待续…</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:1px;">— END —</p>
</section>
</section>
</section>
```
