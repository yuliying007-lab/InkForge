# 数据图表组件库

Claude 根据文章中的数据/对比内容，自动选择合适的图表组件生成。所有图表使用纯 HTML + 内联样式，完全兼容微信公众号编辑器。

颜色占位符与人格模板一致：`{{PRIMARY}}`、`{{SECONDARY}}`、`{{HIGHLIGHT_BG}}`、`{{TEXT}}`、`{{TEXT_LIGHT}}`。

---

## CHART-1 · 水平柱状图

适用：排名、占比、对比数据。

```html
<section style="margin:32px 0;">
<p style="font-size:14px;font-weight:700;color:{{TEXT}};margin:0 0 12px;">{{CHART_TITLE}}</p>
<!-- 每条数据 -->
<section style="margin-bottom:10px;">
<section style="display:flex;justify-content:space-between;margin-bottom:4px;">
<p style="font-size:13px;color:{{TEXT}};margin:0;">{{LABEL}}</p>
<p style="font-size:13px;font-weight:700;color:{{PRIMARY}};margin:0;">{{VALUE}}</p>
</section>
<section style="height:8px;background:{{HIGHLIGHT_BG}};border-radius:4px;overflow:hidden;">
<section style="width:{{PERCENT}}%;height:8px;background:{{PRIMARY}};border-radius:4px;"></section>
</section>
</section>
<!-- 更多数据行重复以上结构，可用 SECONDARY 色区分系列 -->
</section>
```

柱条宽度通过百分比控制。第一条用 `{{PRIMARY}}`，第二系列用 `{{SECONDARY}}`。建议 3-6 条数据。

---

## CHART-2 · 统计大数卡片

适用：核心指标、KPI 展示、数据概览。

```html
<section style="display:flex;gap:8px;margin:32px 0;">
<section style="flex:1;background:{{HIGHLIGHT_BG}};padding:16px 10px;border-radius:8px;text-align:center;">
<p style="font-size:28px;font-weight:800;color:{{PRIMARY}};margin:0;line-height:1;">{{NUMBER}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:5px 0 0;">{{METRIC_NAME}}</p>
</section>
<!-- 2-4 个卡片并排 -->
</section>
```

建议 2-4 个卡片并排。数字用 `font-size:28px` + `font-weight:800`，指标名用 `11px`。

---

## CHART-3 · 环形进度指示

适用：完成率、达标率、单个百分比指标。使用 SVG 圆环，微信兼容。

```html
<section style="text-align:center;margin:32px 0;">
<svg width="120" height="120" viewBox="0 0 120 120" style="display:block;margin:0 auto;">
<circle cx="60" cy="60" r="50" fill="none" stroke="{{HIGHLIGHT_BG}}" stroke-width="10"/>
<circle cx="60" cy="60" r="50" fill="none" stroke="{{PRIMARY}}" stroke-width="10"
  stroke-dasharray="314" stroke-dashoffset="{{OFFSET}}" stroke-linecap="round"
  transform="rotate(-90 60 60)"/>
</svg>
<p style="font-size:32px;font-weight:800;color:{{PRIMARY}};margin:-76px 0 0;line-height:1;position:relative;">{{PERCENT}}%</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:44px 0 0;">{{METRIC_NAME}}</p>
</section>
```

`stroke-dashoffset` 计算：`314 × (1 - 百分比/100)`。如 75% → offset = 78.5。

---

## CHART-4 · 对比卡片（A vs B）

适用：两个方案/产品/选项的对比。

```html
<section style="display:flex;gap:0;margin:32px 0;overflow:hidden;border-radius:8px;border:1px solid {{HIGHLIGHT_BG}};">
<section style="flex:1;padding:16px;background:{{HIGHLIGHT_BG}};">
<p style="font-size:12px;font-weight:700;color:{{PRIMARY}};margin:0 0 8px;letter-spacing:1px;">{{OPTION_A_LABEL}}</p>
<p style="font-size:18px;font-weight:700;color:{{TEXT}};margin:0 0 6px;">{{OPTION_A_TITLE}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{OPTION_A_DESC}}</p>
</section>
<section style="flex:0 0 1px;background:{{PRIMARY}};opacity:0.15;"></section>
<section style="flex:1;padding:16px;">
<p style="font-size:12px;font-weight:700;color:{{SECONDARY}};margin:0 0 8px;letter-spacing:1px;">{{OPTION_B_LABEL}}</p>
<p style="font-size:18px;font-weight:700;color:{{TEXT}};margin:0 0 6px;">{{OPTION_B_TITLE}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{OPTION_B_DESC}}</p>
</section>
</section>
```

---

## CHART-5 · 多维对比表

适用：多项属性的逐项对比（如产品功能对比、院校对比）。

```html
<section style="margin:32px 0;">
<!-- 表头 -->
<section style="display:flex;background:{{PRIMARY}};padding:10px 14px;border-radius:6px 6px 0 0;">
<p style="flex:2;font-size:12px;font-weight:700;color:#ffffff;margin:0;">对比项</p>
<p style="flex:1;font-size:12px;font-weight:700;color:#ffffff;margin:0;text-align:center;">{{COL_A}}</p>
<p style="flex:1;font-size:12px;font-weight:700;color:#ffffff;margin:0;text-align:center;">{{COL_B}}</p>
</section>
<!-- 数据行（交替底色） -->
<section style="display:flex;padding:10px 14px;background:{{HIGHLIGHT_BG}};">
<p style="flex:2;font-size:13px;color:{{TEXT}};margin:0;">{{ATTR_NAME}}</p>
<p style="flex:1;font-size:13px;color:{{TEXT}};margin:0;text-align:center;">{{VAL_A}}</p>
<p style="flex:1;font-size:13px;color:{{TEXT}};margin:0;text-align:center;">{{VAL_B}}</p>
</section>
<section style="display:flex;padding:10px 14px;">
<p style="flex:2;font-size:13px;color:{{TEXT}};margin:0;">{{ATTR_NAME}}</p>
<p style="flex:1;font-size:13px;color:{{TEXT}};margin:0;text-align:center;">{{VAL_A}}</p>
<p style="flex:1;font-size:13px;color:{{TEXT}};margin:0;text-align:center;">{{VAL_B}}</p>
</section>
</section>
```

支持 2-4 列，行数按需增减。可用 ✓/✗ 或彩色标签代替纯文字值。

---

## CHART-6 · 漏斗图

适用：转化率、流程每一步的衰减可视化。

```html
<section style="margin:32px 0;text-align:center;">
<p style="font-size:14px;font-weight:700;color:{{TEXT}};margin:0 0 14px;">{{CHART_TITLE}}</p>
<!-- 第 1 层（最宽） -->
<section style="background:{{PRIMARY}};padding:10px 0;margin:0 auto 4px;width:100%;border-radius:4px;">
<p style="font-size:14px;font-weight:700;color:#fff;margin:0;">{{STEP_1}} · {{VALUE_1}}</p>
</section>
<!-- 第 2 层 -->
<section style="background:{{PRIMARY}};opacity:0.8;padding:10px 0;margin:0 auto 4px;width:75%;border-radius:4px;">
<p style="font-size:14px;font-weight:700;color:#fff;margin:0;">{{STEP_2}} · {{VALUE_2}}</p>
</section>
<!-- 第 3 层 -->
<section style="background:{{PRIMARY}};opacity:0.6;padding:10px 0;margin:0 auto 4px;width:50%;border-radius:4px;">
<p style="font-size:14px;font-weight:700;color:#fff;margin:0;">{{STEP_3}} · {{VALUE_3}}</p>
</section>
<!-- 第 4 层（最窄） -->
<section style="background:{{PRIMARY}};opacity:0.45;padding:10px 0;margin:0 auto;width:30%;border-radius:4px;">
<p style="font-size:14px;font-weight:700;color:#fff;margin:0;">{{STEP_4}} · {{VALUE_4}}</p>
</section>
</section>
```

3-5 层为佳。宽度递减（100% → 75% → 50% → 30%），透明度递减。

---

## CHART-7 · 评分雷达（简化版）

适用：多维评价、评测打分（5-6 个维度）。用水平柱状代替真正的雷达图，更兼容。

```html
<section style="margin:32px 0;padding:16px;background:{{HIGHLIGHT_BG}};border-radius:8px;">
<p style="font-size:14px;font-weight:700;color:{{TEXT}};margin:0 0 14px;">{{CHART_TITLE}}</p>
<!-- 维度行 -->
<section style="display:flex;align-items:center;margin-bottom:8px;">
<p style="font-size:12px;color:{{TEXT}};margin:0;width:56px;flex-shrink:0;">{{DIM}}</p>
<section style="flex:1;height:6px;background:rgba(0,0,0,0.06);border-radius:3px;overflow:hidden;margin:0 10px;">
<section style="width:{{SCORE_PERCENT}}%;height:6px;background:{{PRIMARY}};border-radius:3px;"></section>
</section>
<p style="font-size:12px;font-weight:700;color:{{PRIMARY}};margin:0;min-width:28px;text-align:right;">{{SCORE}}</p>
</section>
<!-- 重复更多维度 -->
</section>
```

每个维度一行，分数用柱条长度表示。建议 4-6 个维度。

---

## CHART-8 · 时间轴数据

适用：月度/季度趋势、增长数据。用阶梯条代替折线图。

```html
<section style="margin:32px 0;">
<p style="font-size:14px;font-weight:700;color:{{TEXT}};margin:0 0 14px;">{{CHART_TITLE}}</p>
<section style="display:flex;align-items:flex-end;gap:6px;height:120px;">
<!-- 每个时间点一个柱 -->
<section style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;">
<p style="font-size:11px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px;">{{VALUE}}</p>
<section style="width:100%;height:{{HEIGHT_PERCENT}}%;background:{{PRIMARY}};border-radius:4px 4px 0 0;min-height:4px;"></section>
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:4px 0 0;">{{PERIOD}}</p>
</section>
<!-- 重复更多时间点 -->
</section>
</section>
```

柱高通过百分比控制（最大值 = 100%）。建议 4-8 个时间点。可用 `{{SECONDARY}}` 标记不同系列。

---

## CHART-9 · 优劣势对比

适用：产品评测中的优缺点列表。

```html
<section style="display:flex;gap:10px;margin:32px 0;">
<section style="flex:1;">
<p style="font-size:12px;font-weight:700;color:#15803d;margin:0 0 8px;">✓ 优势</p>
<p style="font-size:13px;color:{{TEXT}};margin:0 0 6px;padding-left:8px;border-left:2px solid #4ade80;line-height:1.7;">{{PRO_1}}</p>
<p style="font-size:13px;color:{{TEXT}};margin:0 0 6px;padding-left:8px;border-left:2px solid #4ade80;line-height:1.7;">{{PRO_2}}</p>
<p style="font-size:13px;color:{{TEXT}};margin:0;padding-left:8px;border-left:2px solid #4ade80;line-height:1.7;">{{PRO_3}}</p>
</section>
<section style="flex:1;">
<p style="font-size:12px;font-weight:700;color:#dc2626;margin:0 0 8px;">✗ 劣势</p>
<p style="font-size:13px;color:{{TEXT}};margin:0 0 6px;padding-left:8px;border-left:2px solid #fca5a5;line-height:1.7;">{{CON_1}}</p>
<p style="font-size:13px;color:{{TEXT}};margin:0 0 6px;padding-left:8px;border-left:2px solid #fca5a5;line-height:1.7;">{{CON_2}}</p>
<p style="font-size:13px;color:{{TEXT}};margin:0;padding-left:8px;border-left:2px solid #fca5a5;line-height:1.7;">{{CON_3}}</p>
</section>
</section>
```

优劣势固定用红绿色（语义色），不跟主题色走。

---

## 使用规则

1. Claude 根据文章中的数据类型**自动选择**最合适的图表组件
2. 数据量少（1-2 个指标）用 CHART-2 统计大数；数据量中等用 CHART-1 柱状图；多维对比用 CHART-5 或 CHART-7
3. 同一篇文章中，图表组件**不超过 3 个**，避免视觉过载
4. 所有数字应清晰标注单位和数据来源
5. 图表标题简明，不超过 15 字
6. 颜色使用：主系列用 `{{PRIMARY}}`，次系列用 `{{SECONDARY}}`，背景用 `{{HIGHLIGHT_BG}}`
