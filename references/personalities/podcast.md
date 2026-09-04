# P13 · 播客对话 podcast

对话气泡、时间戳标记、🎙️话筒icon、嘉宾标签。
适合访谈整理、对话体、播客笔记。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:32px 24px 24px;">

<!-- 播客标识 -->
<section style="display:flex;align-items:center;margin:0 0 24px 0;">
<span style="font-size:20px;margin-right:8px;">🎙️</span>
<section>
<p style="font-size:11px;color:{{PRIMARY}};margin:0;letter-spacing:2px;font-weight:600;">EPISODE {{NUM}}</p>
</section>
</section>

<!-- 标题 -->
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.3;">{{TITLE}}</h1>
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 16px 0;line-height:1.3;">{{TITLE_LINE2}}</h1>

<!-- 嘉宾信息 -->
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:8px;padding:12px 16px;margin:0 0 0 0;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;line-height:1.6;">{{GUEST_INFO}}</p>
</section>
```

### section_heading

```html
<!-- 时间戳章节 -->
<section style="margin:32px 0 16px 0;display:flex;align-items:center;">
<span style="font-size:11px;color:{{PRIMARY}};font-weight:600;background-color:{{HIGHLIGHT_BG}};padding:2px 8px;border-radius:4px;margin-right:10px;">{{TIMESTAMP}}</span>
<h2 style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0;line-height:1.4;">{{HEADING}}</h2>
</section>
```

`{{TIMESTAMP}}` 格式如 `03:24` `12:50`。

### dialogue_bubble_host

播客人格特有：主持人对话气泡。

```html
<!-- 主持人发言 -->
<section style="margin:16px 0;display:flex;align-items:flex-start;">
<section style="background-color:{{PRIMARY}};color:#ffffff;font-size:10px;font-weight:700;width:32px;height:32px;line-height:32px;text-align:center;border-radius:50%;flex-shrink:0;margin-right:10px;">主</section>
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:4px 12px 12px 12px;padding:12px 16px;flex:1;">
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.8;">{{CONTENT}}</p>
</section>
</section>
```

### dialogue_bubble_guest

播客人格特有：嘉宾对话气泡。

```html
<!-- 嘉宾发言 -->
<section style="margin:16px 0;display:flex;align-items:flex-start;">
<section style="background-color:{{SECONDARY}};color:#ffffff;font-size:10px;font-weight:700;width:32px;height:32px;line-height:32px;text-align:center;border-radius:50%;flex-shrink:0;margin-right:10px;">嘉</section>
<section style="background-color:#f8f8f8;border-radius:4px 12px 12px 12px;padding:12px 16px;flex:1;">
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.8;">{{CONTENT}}</p>
</section>
</section>
```

### body_paragraph

非对话内容的叙述段落：

```html
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:0 0 24px 0;line-height:1.8;font-style:italic;">{{CONTENT}}</p>
```

用斜体+浅色区分叙述与对话。

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:1px 4px;border-radius:2px;">{{TEXT}}</span>
```

### blockquote

```html
<!-- 金句卡片 -->
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:12px;padding:20px 24px;margin:32px 0;text-align:center;">
<p style="font-size:20px;color:{{PRIMARY}};margin:0 0 8px 0;line-height:1;">💬</p>
<p style="font-size:15px;color:{{TEXT}};margin:0 0 8px 0;line-height:1.6;font-weight:600;">{{QUOTE}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">— {{SPEAKER}}</p>
</section>
```

### list_item

```html
<p style="font-size:14px;color:{{TEXT}};margin:0 0 10px 16px;line-height:1.8;">• {{ITEM}}</p>
```

### separator

```html
<section style="border-bottom:1px dashed {{TEXT_LIGHT}};margin:48px 0;opacity:0.3;"></section>
```

### decorative_illustration

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:12px;padding:40px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ Claude 生成装饰插画位置 ]</p>
</section>
```

### article_footer

```html
<!-- 收听信息 -->
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:12px;padding:16px 20px;margin:32px 0 16px 0;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;">🎧 完整音频可在各大播客平台收听</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">⏱️ 全长 {{DURATION}}</p>
</section>

<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 0 0;text-align:center;">喜欢这期？点个"在看"，下期见</p>

</section>
</section>
```
