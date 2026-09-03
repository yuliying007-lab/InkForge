# P15 · 笔记课堂 notebook

标题下划线、⚠️重点框、💡提示框、📝TODO框、代码块、缩进层级。
教程、课程笔记、操作指南、知识整理。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:28px 24px 24px;">

<!-- 课程标签 -->
<section style="display:inline-block;background-color:{{PRIMARY}};color:#ffffff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:4px;margin:0 0 16px 0;letter-spacing:1px;">📝 {{CATEGORY}}</section>

<!-- 标题（带下划线） -->
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.4;border-bottom:3px solid {{PRIMARY}};padding-bottom:8px;display:inline;">{{TITLE}}</h1>

<!-- 换行 -->
<p style="margin:0 0 16px 0;"></p>

<!-- 副标题 -->
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 0 0;line-height:1.6;">{{SUBTITLE}}</p>
```

### section_heading

```html
<!-- 带序号的笔记标题 -->
<section style="margin:32px 0 16px 0;background-color:{{HIGHLIGHT_BG}};padding:10px 16px;border-left:4px solid {{PRIMARY}};border-radius:0 6px 6px 0;">
<h2 style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0;line-height:1.4;">{{NUM}}. {{HEADING}}</h2>
</section>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:1px 4px;border-radius:2px;">{{TEXT}}</span>
```

### tip_box

笔记人格特有：💡 提示框。

```html
<section style="background-color:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:18px 20px;margin:20px 0;">
<p style="font-size:13px;color:#166534;margin:0;line-height:1.6;"><span style="margin-right:6px;">💡</span><strong>提示：</strong>{{TIP_CONTENT}}</p>
</section>
```

### warning_box

笔记人格特有：⚠️ 重点/警告框。

```html
<section style="background-color:#fefce8;border:1px solid #fde047;border-radius:8px;padding:18px 20px;margin:20px 0;">
<p style="font-size:13px;color:#854d0e;margin:0;line-height:1.6;"><span style="margin-right:6px;">⚠️</span><strong>注意：</strong>{{WARNING_CONTENT}}</p>
</section>
```

### todo_box

笔记人格特有：📝 待办/练习框。

```html
<section style="background-color:{{HIGHLIGHT_BG}};border:1px solid #e5e5e5;border-radius:8px;padding:18px 20px;margin:20px 0;">
<p style="font-size:13px;color:{{TEXT}};margin:0 0 8px 0;font-weight:700;"><span style="margin-right:6px;">📝</span>练习</p>
<p style="font-size:13px;color:{{TEXT}};margin:0 0 6px 20px;line-height:1.6;">☐ {{TODO_1}}</p>
<p style="font-size:13px;color:{{TEXT}};margin:0 0 6px 20px;line-height:1.6;">☐ {{TODO_2}}</p>
</section>
```

### code_block

笔记人格特有：代码/命令块。

```html
<section style="background-color:#1e1e1e;border-radius:6px;padding:18px 20px;margin:20px 0;overflow-x:auto;">
<pre style="font-size:13px;color:#d4d4d4;margin:0;line-height:1.6;font-family:'SF Mono','Fira Code','Courier New',Consolas,monospace;white-space:pre-wrap;">{{CODE}}</pre>
</section>
```

### blockquote

```html
<section style="border-left:3px solid {{PRIMARY}};padding:8px 0 8px 16px;margin:20px 0;background-color:{{HIGHLIGHT_BG}};border-radius:0 6px 6px 0;">
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.8;">{{QUOTE}}</p>
</section>
```

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 10px 20px;line-height:1.8;"><span style="color:{{PRIMARY}};font-weight:700;margin-right:6px;">▸</span>{{ITEM}}</p>
```

### separator

```html
<section style="border-bottom:1px dashed #d0d0d0;margin:48px 0;"></section>
```

### image_placeholder

```html
<section style="background-color:{{HIGHLIGHT_BG}};border:1px dashed #d0d0d0;border-radius:8px;padding:40px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 插图 / 截图 / 示意图 ]</p>
</section>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:4px 0 0 0;text-align:center;">图：{{CAPTION}}</p>
```

### article_footer

```html
<!-- 知识小结 -->
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:8px;padding:16px 20px;margin:32px 0 16px 0;border:1px solid #e5e5e5;">
<p style="font-size:13px;font-weight:700;color:{{PRIMARY}};margin:0 0 8px 0;">📌 本节要点</p>
<p style="font-size:13px;color:{{TEXT}};margin:0 0 4px 16px;line-height:1.8;">✓ {{KEY_POINT_1}}</p>
<p style="font-size:13px;color:{{TEXT}};margin:0 0 4px 16px;line-height:1.8;">✓ {{KEY_POINT_2}}</p>
<p style="font-size:13px;color:{{TEXT}};margin:0 0 0 16px;line-height:1.8;">✓ {{KEY_POINT_3}}</p>
</section>

<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;text-align:center;">觉得有用？点个"在看"</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 0 0;text-align:center;">关注获取更多教程笔记</p>

</section>
</section>
```
