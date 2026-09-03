# P36 · 邀请函 invitation

居中装饰线框、大标题活动名、日期/时间/地点信息网格、主办方署名、RSVP 引导区。
像一张精心设计的请柬——居中对称、优雅留白、信息一目了然。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:32px 20px 20px;">

<!-- 顶部装饰线 -->
<section style="text-align:center;margin:0 0 24px 0;">
<section style="display:inline-block;width:60px;height:1px;background-color:{{PRIMARY}};opacity:0.4;"></section>
<span style="display:inline-block;margin:0 12px;font-size:12px;color:{{PRIMARY}};letter-spacing:3px;font-weight:600;">INVITATION</span>
<section style="display:inline-block;width:60px;height:1px;background-color:{{PRIMARY}};opacity:0.4;"></section>
</section>

<!-- 主办方 -->
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 14px 0;text-align:center;letter-spacing:2px;">{{HOST}}</p>

<!-- 活动名称 -->
<h1 style="font-size:24px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.4;text-align:center;">{{EVENT_NAME}}</h1>
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:0;line-height:1.6;text-align:center;">{{EVENT_TAGLINE}}</p>
```

### event_info

邀请函特有：核心组件——活动信息网格，居中排列。

```html
<section style="margin:28px auto;padding:20px 24px;border:1px solid {{HIGHLIGHT_BG}};border-radius:10px;max-width:300px;">
<section style="margin:0 0 14px 0;text-align:center;">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;letter-spacing:2px;">日期</p>
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0;">{{DATE}}</p>
</section>
<section style="height:1px;background-color:{{HIGHLIGHT_BG}};margin:0 0 14px 0;"></section>
<section style="margin:0 0 14px 0;text-align:center;">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;letter-spacing:2px;">时间</p>
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0;">{{TIME}}</p>
</section>
<section style="height:1px;background-color:{{HIGHLIGHT_BG}};margin:0 0 14px 0;"></section>
<section style="text-align:center;">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;letter-spacing:2px;">地点</p>
<p style="font-size:16px;font-weight:700;color:{{TEXT}};margin:0;">{{VENUE}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:4px 0 0 0;">{{ADDRESS}}</p>
</section>
</section>
```

### guest_note

邀请函特有：致辞/邀请语——居中、正式语气。

```html
<section style="margin:32px 0;padding:0 16px;text-align:center;">
<p style="font-size:15px;color:{{TEXT}};line-height:2.0;margin:0;">{{GREETING}}</p>
</section>
```

### agenda_item

邀请函特有：议程/流程条目——时间+内容。

```html
<section style="display:flex;align-items:flex-start;margin:0 0 8px 0;padding:10px 16px;">
<span style="display:inline-block;font-size:13px;color:{{PRIMARY}};font-weight:700;flex-shrink:0;width:65px;margin-top:1px;">{{TIME}}</span>
<p style="font-size:14px;color:{{TEXT}};margin:0;line-height:1.6;">{{AGENDA}}</p>
</section>
```

### rsvp_area

邀请函特有：报名/RSVP 引导区。

```html
<section style="margin:32px 0;padding:20px;background-color:{{HIGHLIGHT_BG}};border-radius:10px;text-align:center;">
<p style="font-size:12px;color:{{PRIMARY}};margin:0 0 6px 0;font-weight:700;letter-spacing:2px;">报名方式</p>
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.6;">{{RSVP_INSTRUCTION}}</p>
<section style="display:inline-block;width:80px;height:80px;border:1px dashed {{PRIMARY}};border-radius:6px;display:flex;align-items:center;justify-content:center;margin:0 auto;opacity:0.5;">
<p style="font-size:10px;color:{{PRIMARY}};margin:0;text-align:center;width:80px;height:80px;line-height:80px;">[ 报名二维码 ]</p>
</section>
</section>
```

### section_heading

```html
<section style="margin:40px 0 16px 0;text-align:center;">
<p style="font-size:14px;font-weight:700;color:{{TEXT}};margin:0;letter-spacing:1px;">{{HEADING}}</p>
<section style="display:inline-block;width:24px;height:2px;background-color:{{PRIMARY}};margin:8px 0 0 0;opacity:0.5;"></section>
</section>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;text-align:center;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="color:{{PRIMARY}};font-weight:600;">{{TEXT}}</span>
```

### image_placeholder

```html
<section style="border:1px dashed {{TEXT_LIGHT}};padding:42px 20px;margin:32px 0;text-align:center;border-radius:8px;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 活动主视觉 / 往期照片 ]</p>
</section>
```

### article_footer

```html
<section style="margin:40px 0 0 0;text-align:center;">
<!-- 底部装饰线 -->
<section style="display:inline-block;width:60px;height:1px;background-color:{{PRIMARY}};opacity:0.4;"></section>
<span style="display:inline-block;margin:0 12px;font-size:11px;color:{{TEXT_LIGHT}};letter-spacing:2px;">期待您的到来</span>
<section style="display:inline-block;width:60px;height:1px;background-color:{{PRIMARY}};opacity:0.4;"></section>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:12px 0 0 0;letter-spacing:1px;">— END —</p>
</section>
</section>
```
