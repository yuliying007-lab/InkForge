# P34 · 数据报告 data-report

全宽色带标题、超大核心指标（带趋势箭头）、圆角数据卡片网格、数据洞察条。
像一页精心设计的仪表盘——数字是主角、趋势一眼可见、洞察紧随其后。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:0 20px 20px;">

<!-- 全宽色带 -->
<section style="background-color:{{PRIMARY}};margin:0 -20px 20px -20px;padding:20px 20px;">
<section style="display:flex;align-items:center;justify-content:space-between;">
<span style="font-size:10px;color:rgba(255,255,255,0.6);font-weight:600;letter-spacing:2px;">DATA REPORT</span>
<span style="font-size:10px;color:rgba(255,255,255,0.6);letter-spacing:1px;">{{PERIOD}}</span>
</section>
<h1 style="font-size:22px;font-weight:700;color:#ffffff;margin:12px 0 0 0;line-height:1.35;">{{TITLE}}</h1>
</section>
```

### big_number

数据报告特有：核心指标——超大数字居中、趋势标签。

```html
<section style="text-align:center;margin:32px 0;padding:28px 20px;background-color:{{HIGHLIGHT_BG}};border-radius:12px;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 8px 0;letter-spacing:2px;">{{METRIC_LABEL}}</p>
<p style="font-size:52px;font-weight:800;color:{{PRIMARY}};margin:0;line-height:1;">{{METRIC_VALUE}}</p>
<section style="display:inline-block;margin:10px 0 0 0;padding:3px 12px;border-radius:12px;background-color:{{TREND_BG}};">
<p style="font-size:12px;font-weight:700;color:{{TREND_COLOR}};margin:0;">{{TREND}}</p>
</section>
</section>
```

趋势上升：`TREND_BG=#f0fdf4`、`TREND_COLOR=#15803d`、`TREND=↑ 23.5% 较上期`。
趋势下降：`TREND_BG=#fef2f2`、`TREND_COLOR=#dc2626`。

### stat_grid

数据报告特有：圆角数据卡片 2×2。

```html
<section style="display:flex;flex-wrap:wrap;gap:8px;margin:32px 0;">
<section style="flex:1;min-width:45%;padding:16px;background-color:{{HIGHLIGHT_BG}};border-radius:10px;text-align:center;">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0 0 6px 0;letter-spacing:1px;">{{LABEL_1}}</p>
<p style="font-size:24px;font-weight:800;color:{{PRIMARY}};margin:0;line-height:1;">{{VALUE_1}}</p>
</section>
<section style="flex:1;min-width:45%;padding:16px;background-color:{{HIGHLIGHT_BG}};border-radius:10px;text-align:center;">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0 0 6px 0;letter-spacing:1px;">{{LABEL_2}}</p>
<p style="font-size:24px;font-weight:800;color:{{PRIMARY}};margin:0;line-height:1;">{{VALUE_2}}</p>
</section>
<section style="flex:1;min-width:45%;padding:16px;background-color:{{HIGHLIGHT_BG}};border-radius:10px;text-align:center;">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0 0 6px 0;letter-spacing:1px;">{{LABEL_3}}</p>
<p style="font-size:24px;font-weight:800;color:{{PRIMARY}};margin:0;line-height:1;">{{VALUE_3}}</p>
</section>
<section style="flex:1;min-width:45%;padding:16px;background-color:{{HIGHLIGHT_BG}};border-radius:10px;text-align:center;">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0 0 6px 0;letter-spacing:1px;">{{LABEL_4}}</p>
<p style="font-size:24px;font-weight:800;color:{{PRIMARY}};margin:0;line-height:1;">{{VALUE_4}}</p>
</section>
</section>
```

### data_highlight

数据报告特有：数据洞察——左侧大数字+右侧解读，带左线。

```html
<section style="display:flex;align-items:center;margin:0 0 10px 0;padding:18px 20px;border-left:3px solid {{PRIMARY}};background-color:{{HIGHLIGHT_BG}};border-radius:0 8px 8px 0;">
<span style="display:inline-block;font-size:22px;font-weight:800;color:{{PRIMARY}};flex-shrink:0;margin-right:16px;min-width:55px;text-align:right;">{{NUMBER}}</span>
<p style="font-size:14px;color:{{TEXT}};line-height:1.6;margin:0;">{{INSIGHT}}</p>
</section>
```

### section_heading

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:40px 0 16px 0;line-height:1.4;padding-left:12px;border-left:4px solid {{PRIMARY}};">{{HEADING}}</h2>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:2px 6px;border-radius:3px;">{{TEXT}}</span>
```

### blockquote

```html
<section style="background-color:{{HIGHLIGHT_BG}};padding:18px 20px;margin:32px 0;border-radius:8px;">
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{QUOTE}}</p>
</section>
```

### image_placeholder

```html
<section style="border:1px dashed {{TEXT_LIGHT}};padding:42px 20px;margin:32px 0;text-align:center;border-radius:8px;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 数据图表 / 趋势图 ]</p>
</section>
```

### article_footer

```html
<section style="margin:28px -20px 0 -20px;background-color:{{PRIMARY}};padding:16px 20px;">
<p style="font-size:12px;color:rgba(255,255,255,0.6);margin:0;">数据来源：{{DATA_SOURCE}} · 统计周期：{{PERIOD}}</p>
</section>
</section>
```
