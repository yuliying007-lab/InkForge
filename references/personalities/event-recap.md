# P22 · 活动回顾 event-recap

时间轴议程条、数据仪表横排（参会人数/满意度等）、嘉宾卡片、精彩瞬间图廊、金句卡片。
像一份活动复盘报告——有数据、有亮点、有余韵。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:0 20px 24px;">

<!-- 活动标签条 -->
<section style="background-color:{{PRIMARY}};padding:12px 20px;margin:0 -20px;">
<section style="display:flex;justify-content:space-between;align-items:center;">
<p style="font-size:11px;color:rgba(255,255,255,0.6);margin:0;letter-spacing:2px;">EVENT RECAP</p>
<p style="font-size:11px;color:rgba(255,255,255,0.6);margin:0;letter-spacing:1px;">{{DATE}}</p>
</section>
</section>

<section style="padding:22px 0 0 0;">
<p style="font-size:12px;color:{{PRIMARY}};margin:0 0 8px 0;font-weight:600;letter-spacing:1px;">{{EVENT_TYPE}}</p>
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
</section>
```

`{{EVENT_TYPE}}` 如"年度大会"、"行业峰会"、"线下沙龙"。

### stats_row

活动回顾特有：数据仪表横排——核心活动数据一目了然。

```html
<section style="display:flex;gap:8px;margin:22px 0;">
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:14px 8px;text-align:center;">
<p style="font-size:26px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px 0;line-height:1;">{{STAT_1}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{STAT_LABEL_1}}</p>
</section>
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:14px 8px;text-align:center;">
<p style="font-size:26px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px 0;line-height:1;">{{STAT_2}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{STAT_LABEL_2}}</p>
</section>
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};padding:14px 8px;text-align:center;">
<p style="font-size:26px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px 0;line-height:1;">{{STAT_3}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{STAT_LABEL_3}}</p>
</section>
</section>
```

### agenda_timeline

活动回顾特有：时间轴议程——按时间节点回顾活动流程。

```html
<section style="display:flex;align-items:flex-start;margin:0 0 0 4px;">
<section style="flex-shrink:0;width:20px;display:flex;flex-direction:column;align-items:center;margin-right:12px;">
<section style="width:10px;height:10px;background-color:{{PRIMARY}};border-radius:50%;flex-shrink:0;"></section>
<section style="width:2px;flex:1;min-height:40px;background-color:{{BORDER}};"></section>
</section>
<section style="flex:1;padding:0 0 18px 0;">
<p style="font-size:12px;color:{{PRIMARY}};font-weight:700;margin:0 0 4px 0;">{{TIME}}</p>
<p style="font-size:15px;font-weight:600;color:{{TEXT}};margin:0 0 4px 0;">{{AGENDA_TITLE}}</p>
<p style="font-size:14px;color:{{TEXT_LIGHT}};line-height:1.7;margin:0;">{{AGENDA_DESC}}</p>
</section>
</section>
```

圆点时间轴，与 weekly-briefing 的 timeline_item 风格统一。

### speaker_card

活动回顾特有：嘉宾卡片——展示演讲嘉宾信息。

```html
<section style="display:flex;gap:10px;margin:18px 0;">
<section style="flex:1;border:1px solid {{BORDER}};padding:14px 12px;text-align:center;">
<section style="width:42px;height:42px;background-color:{{HIGHLIGHT_BG}};border-radius:50%;margin:0 auto 8px;display:flex;align-items:center;justify-content:center;">
<p style="font-size:16px;color:{{PRIMARY}};font-weight:700;margin:0;">{{INITIAL_1}}</p>
</section>
<p style="font-size:14px;font-weight:600;color:{{TEXT}};margin:0 0 2px 0;">{{SPEAKER_1}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;line-height:1.4;">{{ROLE_1}}</p>
</section>
<section style="flex:1;border:1px solid {{BORDER}};padding:14px 12px;text-align:center;">
<section style="width:42px;height:42px;background-color:{{HIGHLIGHT_BG}};border-radius:50%;margin:0 auto 8px;display:flex;align-items:center;justify-content:center;">
<p style="font-size:16px;color:{{PRIMARY}};font-weight:700;margin:0;">{{INITIAL_2}}</p>
</section>
<p style="font-size:14px;font-weight:600;color:{{TEXT}};margin:0 0 2px 0;">{{SPEAKER_2}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;line-height:1.4;">{{ROLE_2}}</p>
</section>
</section>
```

`{{INITIAL_x}}` 是嘉宾姓名首字（如"张"、"L"），用 PRIMARY 色圆形头像占位。

### quote_card

活动回顾特有：金句卡片——嘉宾精彩语录。

```html
<section style="background-color:{{PRIMARY}};padding:18px 20px;margin:22px 0;">
<p style="font-size:11px;color:rgba(255,255,255,0.5);margin:0 0 8px 0;letter-spacing:2px;">HIGHLIGHT · 金句</p>
<p style="font-size:16px;color:#ffffff;line-height:1.85;margin:0 0 8px 0;font-weight:600;">"{{QUOTE}}"</p>
<p style="font-size:12px;color:rgba(255,255,255,0.6);margin:0;text-align:right;">— {{SPEAKER}}</p>
</section>
```

反转色块（PRIMARY 底+白字），视觉冲击力强。

### section_heading

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:32px 0 14px 0;line-height:1.4;padding-left:10px;border-left:3px solid {{PRIMARY}};">{{HEADING}}</h2>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 20px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:600;">{{TEXT}}</span>
```

### blockquote

```html
<section style="border:1px solid {{BORDER}};padding:14px 16px;margin:22px 0;">
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;font-style:italic;">{{QUOTE}}</p>
</section>
```

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.85;padding-left:4px;">•&nbsp;&nbsp;{{ITEM}}</p>
```

### image_placeholder

```html
<section style="background-color:{{HIGHLIGHT_BG}};border:1px dashed {{BORDER}};padding:42px 20px;margin:22px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 活动现场照片 ]</p>
</section>
```

### gallery_row

活动回顾特有：精彩瞬间图廊——双图并排展示。

```html
<section style="display:flex;gap:8px;margin:18px 0;">
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};border:1px dashed {{BORDER}};padding:36px 10px;text-align:center;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">[ 现场照片 1 ]</p>
</section>
<section style="flex:1;background-color:{{HIGHLIGHT_BG}};border:1px dashed {{BORDER}};padding:36px 10px;text-align:center;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">[ 现场照片 2 ]</p>
</section>
</section>
```

### cta_block

```html
<section style="border:2px solid {{PRIMARY}};padding:14px;margin:24px 0;text-align:center;">
<p style="font-size:15px;color:{{PRIMARY}};font-weight:700;margin:0;">查看完整回放 →</p>
</section>
```

线框按钮——活动回顾通常引导观看回放而非强行动，用线框比实色更柔和。

### article_footer

```html
<section style="border-top:1px solid {{BORDER}};margin:32px 0 0 0;padding:14px 0 0 0;">
<section style="display:flex;justify-content:space-between;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{ORGANIZER}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{DATE}}</p>
</section>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:10px 0 0 0;text-align:center;">期待下次再见</p>
</section>
</section>
</section>
```
