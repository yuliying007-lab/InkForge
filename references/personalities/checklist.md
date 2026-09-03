# P36 · 清单指南 checklist

顶部进度指示条、分组分类标签、方框勾选条目（☐/☑）、重要项红色标记、底部完成提示。
像一张精心设计的 to-do 清单——分类清晰、勾选直观、一张图打印带走。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<section style="display:inline-block;background-color:{{PRIMARY}};color:#ffffff;font-size:10px;font-weight:700;padding:3px 12px;letter-spacing:1px;margin:0 0 16px 0;">✅ CHECKLIST</section>

<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
```

### progress_bar

清单特有：顶部进度指示——显示总项数和建议完成度。

```html
<section style="margin:20px 0;padding:14px 16px;background-color:{{HIGHLIGHT_BG}};border-radius:8px;">
<section style="display:flex;justify-content:space-between;margin:0 0 8px 0;">
<p style="font-size:12px;color:{{TEXT}};margin:0;font-weight:600;">共 {{TOTAL}} 项</p>
<p style="font-size:12px;color:{{PRIMARY}};margin:0;font-weight:700;">建议提前 {{LEAD_TIME}} 开始准备</p>
</section>
<section style="background-color:{{BG}};height:6px;border-radius:3px;overflow:hidden;">
<section style="background-color:{{PRIMARY}};height:6px;border-radius:3px;width:0%;"></section>
</section>
</section>
```

进度条默认 0%，仅作视觉装饰。

### category_label

清单特有：分类标签——区分不同类别的清单项。

```html
<section style="margin:24px 0 12px 0;display:flex;align-items:center;gap:8px;">
<section style="width:3px;height:16px;background-color:{{PRIMARY}};border-radius:2px;"></section>
<p style="font-size:14px;font-weight:700;color:{{TEXT}};margin:0;">{{CATEGORY}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">{{ITEM_COUNT}} 项</p>
</section>
```

### check_item

清单特有：核心组件——未勾选条目。

```html
<section style="display:flex;align-items:flex-start;padding:10px 12px;margin:0 0 4px 0;border:1px solid {{HIGHLIGHT_BG}};border-radius:6px;">
<span style="display:inline-block;width:18px;height:18px;border:2px solid {{TEXT_LIGHT}};border-radius:3px;flex-shrink:0;margin:2px 12px 0 0;"></span>
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.6;">{{ITEM}}</p>
</section>
```

### check_item_done

清单特有：已勾选条目——带勾选标记+浅色删除线效果。

```html
<section style="display:flex;align-items:flex-start;padding:10px 12px;margin:0 0 4px 0;background-color:{{HIGHLIGHT_BG}};border:1px solid {{HIGHLIGHT_BG}};border-radius:6px;">
<span style="display:inline-block;width:18px;height:18px;background-color:{{PRIMARY}};border-radius:3px;flex-shrink:0;margin:2px 12px 0 0;color:#ffffff;font-size:12px;text-align:center;line-height:18px;">✓</span>
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:0;line-height:1.6;">{{ITEM}}</p>
</section>
```

### check_item_important

清单特有：重要条目——左侧红色竖线标记。

```html
<section style="display:flex;align-items:flex-start;padding:10px 12px;margin:0 0 4px 0;border:1px solid {{HIGHLIGHT_BG}};border-left:3px solid #dc2626;border-radius:6px;">
<span style="display:inline-block;width:18px;height:18px;border:2px solid #dc2626;border-radius:3px;flex-shrink:0;margin:2px 12px 0 0;"></span>
<section style="flex:1;">
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.6;"><span style="color:#dc2626;font-weight:700;font-size:10px;margin-right:4px;">重要</span>{{ITEM}}</p>
</section>
</section>
```

### note_box

清单特有：备注框——针对某一组清单的补充说明。

```html
<section style="margin:8px 0 16px 0;padding:10px 14px;background-color:{{HIGHLIGHT_BG}};border-radius:6px;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};line-height:1.6;margin:0;">💡 {{NOTE}}</p>
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
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:2px 6px;border-radius:3px;">{{TEXT}}</span>
```

### image_placeholder

```html
<section style="border:1px dashed {{TEXT_LIGHT}};padding:42px 20px;margin:22px 0;text-align:center;border-radius:8px;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 参考图 / 示例 ]</p>
</section>
```

### article_footer

```html
<section style="margin:32px 0 0 0;padding:18px 0 0 0;border-top:1px solid {{HIGHLIGHT_BG}};">
<section style="background-color:{{HIGHLIGHT_BG}};padding:12px 16px;border-radius:8px;text-align:center;">
<p style="font-size:13px;color:{{TEXT}};margin:0;">📋 建议截图保存本清单，逐项勾选不遗漏</p>
</section>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:10px 0 0 0;text-align:center;letter-spacing:1px;">— END —</p>
</section>
</section>
```
