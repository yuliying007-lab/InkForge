# P20 · 职场成长 career-guide

路径节点编号（圆点+竖线 timeline）、⚠ 红色避坑区、☐ 打卡清单、技能进度条。
像一张职业导航地图——每一步都有坐标和方向。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<!-- 状态栏 -->
<section style="background-color:{{TEXT}};padding:10px 16px;margin:0 0 24px 0;display:flex;justify-content:space-between;align-items:center;">
<p style="font-size:10px;color:rgba(255,255,255,0.5);margin:0;letter-spacing:2px;">CAREER GUIDE</p>
<p style="font-size:10px;color:rgba(255,255,255,0.5);margin:0;letter-spacing:1px;">📍 {{STAGE}}</p>
</section>

<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
```

深色状态栏 + `📍 当前阶段` 标注——导航仪的顶部面板感。`{{STAGE}}` 如「求职准备期」「面试冲刺期」。

### summary_box

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:8px;padding:16px;margin:32px 0;">
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 8px 0;font-weight:700;letter-spacing:1px;">🔍 先判断你卡在哪里</p>
<p style="font-size:15px;color:{{TEXT}};line-height:1.85;margin:0;">{{PROBLEM}}</p>
</section>
```

### section_heading

职场成长特有：路径节点——大圆点+步骤编号+竖线延伸。

```html
<!-- 路径节点 -->
<section style="display:flex;align-items:flex-start;margin:32px 0 14px 0;">
<section style="flex-shrink:0;width:32px;height:32px;background-color:{{PRIMARY}};border-radius:50%;display:flex;align-items:center;justify-content:center;">
<p style="font-size:13px;font-weight:700;color:#ffffff;margin:0;">{{NUM}}</p>
</section>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:5px 0 0 12px;line-height:1.4;">{{HEADING}}</h2>
</section>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;padding-left:44px;">{{CONTENT}}</p>
```

正文缩进 44px 对齐节点右侧——保持路线图的纵向对齐感。

### checkpoint_card

职场成长特有：打卡清单——可执行行动项。

```html
<section style="border:1px solid {{BORDER}};border-radius:6px;padding:12px 16px;margin:12px 0 12px 44px;">
<p style="font-size:14px;color:{{TEXT}};line-height:1.8;margin:0;"><span style="color:{{PRIMARY}};font-weight:600;">☐</span>&nbsp; {{ACTION}}</p>
</section>
```

`☐` 复选框起头，缩进对齐路径。可用多个 checkpoint_card 形成清单。

### danger_zone

职场成长特有：避坑警告区——红色边框+浅红底。

```html
<section style="border-left:3px solid #d94f4f;background-color:#fef2f2;padding:18px 20px;margin:20px 0;">
<p style="font-size:11px;color:#d94f4f;margin:0 0 6px 0;font-weight:700;letter-spacing:1px;">⚠ 避坑提醒</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{WARNING_CONTENT}}</p>
</section>
```

固定用红色系——不跟主题色走，确保警告的视觉强度。

### skill_meter

职场成长特有：技能进度条。

```html
<section style="margin:14px 0;">
<section style="display:flex;justify-content:space-between;margin:0 0 4px 0;">
<p style="font-size:13px;color:{{TEXT}};margin:0;">{{SKILL_NAME}}</p>
<p style="font-size:13px;color:{{PRIMARY}};margin:0;font-weight:600;">{{LEVEL}}</p>
</section>
<section style="background-color:{{HIGHLIGHT_BG}};height:6px;border-radius:3px;overflow:hidden;">
<section style="background-color:{{PRIMARY}};height:6px;border-radius:3px;width:{{PERCENT}}%;"></section>
</section>
</section>
```

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:600;">{{TEXT}}</span>
```

### blockquote

```html
<section style="padding:12px 16px;margin:32px 0;background-color:{{HIGHLIGHT_BG}};border-radius:6px;">
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{QUOTE}}</p>
</section>
```

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.85;padding-left:44px;">→&nbsp; {{ITEM}}</p>
```

### decorative_illustration

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:8px;padding:40px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ Claude 生成装饰插画位置 ]</p>
</section>
```

### cta_block

```html
<section style="background-color:{{PRIMARY}};border-radius:6px;padding:14px;margin:32px 0;text-align:center;">
<p style="font-size:15px;color:#ffffff;font-weight:700;margin:0;">收藏，面试前再看一遍</p>
</section>
```

### article_footer

```html
<section style="background-color:{{TEXT}};padding:12px 16px;margin:40px 0 0 0;">
<p style="font-size:11px;color:rgba(255,255,255,0.5);margin:0 0 4px 0;letter-spacing:1px;">CAREER GUIDE · END</p>
<p style="font-size:13px;color:rgba(255,255,255,0.7);margin:0;">点个"在看"，继续前进</p>
</section>
</section>
```

首尾深色条呼应——导航仪的界面感。
