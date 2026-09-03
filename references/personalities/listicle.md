# P24 · 榜单盘点 listicle

超大排名数字+卡片条目、编辑推荐徽章、总览统计横条。
像一份颁奖榜单——数字驱动、一目了然、每条独立成卡。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<!-- 榜单标签 -->
<section style="display:inline-block;background-color:{{PRIMARY}};padding:4px 14px;margin:0 0 16px 0;">
<p style="font-size:11px;color:#ffffff;margin:0;font-weight:700;letter-spacing:2px;">TOP {{COUNT}} 榜单</p>
</section>

<h1 style="font-size:24px;font-weight:800;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
```

`{{COUNT}}` 由 Claude 根据内容条数自动填入。

### overview_stats

榜单特有：顶部统计横条，概览本次盘点的范围。

```html
<section style="display:flex;gap:0;margin:22px 0;border:1px solid {{HIGHLIGHT_BG}};">
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:12px 10px;text-align:center;">
<p style="font-size:20px;font-weight:700;color:{{PRIMARY}};margin:0 0 2px 0;line-height:1;">{{STAT_1}}</p>
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0;">{{STAT_LABEL_1}}</p>
</section>
<section style="flex:1;padding:12px 10px;text-align:center;">
<p style="font-size:20px;font-weight:700;color:{{PRIMARY}};margin:0 0 2px 0;line-height:1;">{{STAT_2}}</p>
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0;">{{STAT_LABEL_2}}</p>
</section>
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:12px 10px;text-align:center;">
<p style="font-size:20px;font-weight:700;color:{{PRIMARY}};margin:0 0 2px 0;line-height:1;">{{STAT_3}}</p>
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0;">{{STAT_LABEL_3}}</p>
</section>
</section>
```

### rank_card

榜单特有：核心组件——超大排名数字 + 右侧内容。第 1 名用 PRIMARY 实色底白字，其余用 HIGHLIGHT_BG 底。

```html
<!-- 第 1 名（冠军样式）-->
<section style="display:flex;align-items:stretch;margin:18px 0;border:2px solid {{PRIMARY}};">
<section style="background-color:{{PRIMARY}};padding:16px 14px;display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:60px;">
<p style="font-size:28px;font-weight:800;color:#ffffff;margin:0;line-height:1;">01</p>
</section>
<section style="flex:1;padding:14px 16px;">
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0 0 4px 0;line-height:1.4;">{{ITEM_TITLE}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{ITEM_DESC}}</p>
</section>
</section>
```

```html
<!-- 第 2 名及之后（普通样式）-->
<section style="display:flex;align-items:stretch;margin:12px 0;border:1px solid {{HIGHLIGHT_BG}};">
<section style="background-color:{{HIGHLIGHT_BG}};padding:14px 12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:56px;">
<p style="font-size:24px;font-weight:800;color:{{PRIMARY}};margin:0;line-height:1;">{{RANK}}</p>
</section>
<section style="flex:1;padding:12px 14px;">
<p style="font-size:15px;font-weight:700;color:{{TEXT}};margin:0 0 4px 0;line-height:1.4;">{{ITEM_TITLE}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{ITEM_DESC}}</p>
</section>
</section>
```

排名数字用两位格式：01、02、03…

### editor_pick

榜单特有：编辑推荐标记，可加在任一 rank_card 上方。

```html
<section style="display:inline-block;background-color:{{SECONDARY}};padding:2px 10px;margin:18px 0 -6px 0;">
<p style="font-size:10px;color:#ffffff;margin:0;font-weight:700;letter-spacing:1px;">⭐ 编辑推荐</p>
</section>
```

### section_heading

```html
<section style="margin:32px 0 16px 0;padding:14px 0 10px 0;border-top:1px solid {{HIGHLIGHT_BG}};">
<p style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0;">{{HEADING}}</p>
</section>
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

### list_item

```html
<section style="display:flex;align-items:flex-start;margin:0 0 10px 0;">
<span style="display:inline-block;background-color:{{PRIMARY}};color:#ffffff;font-size:10px;font-weight:700;width:18px;height:18px;line-height:18px;text-align:center;border-radius:50%;flex-shrink:0;margin:3px 10px 0 0;">{{NUM}}</span>
<p style="font-size:15px;color:{{TEXT}};margin:0;line-height:1.85;">{{ITEM}}</p>
</section>
```

### image_placeholder

```html
<section style="border:1px dashed {{TEXT_LIGHT}};padding:42px 20px;margin:22px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 配图 / 截图 ]</p>
</section>
```

### article_footer

```html
<section style="margin:32px 0 0 0;padding:18px 0 0 0;border-top:2px solid {{TEXT}};">
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 6px 0;text-align:center;">你心中的 TOP 1 是哪个？评论区见 👇</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;text-align:center;letter-spacing:1px;">— END —</p>
</section>
</section>
```
