# P26 · 人物专访 interview-profile

杂志封面人名超大字、圆形头像名片、对话气泡问答、超大引号金句提取、居中装饰线标题。
像翻开一本人物杂志的深度专访——优雅、有份量。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:28px 20px 20px;">

<!-- 刊名行 -->
<section style="display:flex;justify-content:space-between;align-items:center;margin:0 0 24px 0;padding:0 0 10px 0;border-bottom:1px solid {{BORDER}};">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:3px;">PROFILE · 人物</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;">NO. {{ISSUE}}</p>
</section>

<!-- 人名超大字 -->
<h1 style="font-size:34px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.2;text-align:center;">{{NAME}}</h1>

<!-- 装饰线 -->
<section style="width:40px;height:2px;background-color:{{PRIMARY}};margin:12px auto;"></section>

<!-- 副标题 -->
<p style="font-size:15px;color:{{TEXT_LIGHT}};margin:0;text-align:center;line-height:1.7;">{{SUBTITLE}}</p>
```

人名 34px 居中——杂志人物版面的标志性处理。装饰短线分割名字和副标题。

### profile_card

人物专访特有：头像名片卡——人物基本信息横排展示。

```html
<!-- 人物名片 -->
<section style="display:flex;align-items:center;background-color:{{HIGHLIGHT_BG}};border-radius:10px;padding:18px;margin:24px 0;">
<!-- 圆形头像占位 -->
<section style="width:68px;height:68px;background-color:{{BORDER}};border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
<p style="font-size:22px;color:{{TEXT_LIGHT}};margin:0;">👤</p>
</section>
<!-- 信息 -->
<section style="margin-left:16px;flex:1;">
<p style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0 0 4px 0;">{{NAME}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};line-height:1.7;margin:0;">{{GUEST_INFO}}</p>
</section>
</section>
```

左圆形头像占位 + 右侧信息——杂志人物简介的经典布局。实际使用时可替换 👤 为真实头像。

### dialogue_block

人物专访特有：对话气泡——Q/A 用不同方向的气泡区分。

```html
<!-- 问题气泡（左对齐） -->
<section style="margin:22px 0 14px 0;">
<section style="display:inline-block;background-color:{{PRIMARY}};border-radius:10px 10px 10px 2px;padding:10px 16px;max-width:88%;">
<p style="font-size:14px;color:#ffffff;line-height:1.8;margin:0;">{{QUESTION}}</p>
</section>
</section>

<!-- 回答（右缩进、正常风格） -->
<section style="margin:0 0 8px 0;padding-left:6px;">
<p style="font-size:15px;color:{{TEXT}};line-height:2.0;margin:0;">{{ANSWER}}</p>
</section>
```

问题用主色实底气泡+白字——像发出的消息；回答用正常段落样式+轻缩进——像收到的长文回复。`border-radius` 的不对称制造对话方向感。

### pullquote

人物专访特有：超大引号金句——从对话中提取的核心句。

```html
<!-- 金句提取 -->
<section style="margin:28px 0;padding:20px 16px;text-align:center;">
<p style="font-size:42px;color:{{PRIMARY}};margin:0 0 4px 0;line-height:1;opacity:0.35;">"</p>
<p style="font-size:17px;font-weight:600;color:{{TEXT}};line-height:1.8;margin:0 0 10px 0;">{{QUOTE}}</p>
<section style="width:24px;height:1px;background-color:{{PRIMARY}};margin:0 auto 8px;"></section>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">—— {{NAME}}</p>
</section>
```

超大引号（42px、低透明度）+ 金句居中 + 短线 + 署名——杂志标志性的「pullquote」排版。

### section_heading

```html
<!-- 居中装饰线标题 -->
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:34px 0 14px 0;text-align:center;line-height:1;">
<span style="letter-spacing:2px;">——</span>&nbsp;&nbsp;{{HEADING}}&nbsp;&nbsp;<span style="letter-spacing:2px;">——</span>
</p>
```

左右装饰线包裹——杂志内文分节的经典样式。

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
<!-- 编辑注（区别于 pullquote，这是编者按） -->
<section style="border-top:1px solid {{BORDER}};border-bottom:1px solid {{BORDER}};padding:14px 0;margin:24px 0;">
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 6px 0;letter-spacing:1px;font-weight:600;">编者按</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;font-style:italic;">{{QUOTE}}</p>
</section>
```

上下细线+编者按——区别于对话和金句的第三种引用样式。

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.85;padding-left:4px;">◆&nbsp; {{ITEM}}</p>
```

### image_placeholder

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:10px;padding:48px 20px;margin:24px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;font-style:italic;">[ 人物肖像 / 访谈现场 ]</p>
</section>
```

### cta_block

```html
<section style="border:1px solid {{PRIMARY}};border-radius:8px;padding:14px;margin:24px 0;text-align:center;">
<p style="font-size:14px;color:{{PRIMARY}};font-weight:600;margin:0;">把这个人的故事分享给更多人</p>
</section>
```

### article_footer

```html
<!-- 结尾装饰 -->
<section style="width:40px;height:2px;background-color:{{PRIMARY}};margin:32px auto 16px;"></section>

<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;text-align:center;letter-spacing:1px;">PROFILE 系列 · 持续记录真实的人和故事</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;text-align:center;">点个\"在看\"，让好故事被更多人看到</p>

</section>
</section>
```
