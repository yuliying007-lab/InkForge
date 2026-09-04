# P25 · 本地指南 local-guide

邮票角标+明信片头、📍地图钉卡片、圆点评分、虚线路线连接、图标信息行。
像一张寄给朋友的城市明信片——轻松、实用、有温度。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<!-- 顶部行：栏目 + 邮票 -->
<section style="display:flex;justify-content:space-between;align-items:flex-start;margin:0 0 18px 0;">
<section>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;letter-spacing:2px;">LOCAL GUIDE</p>
<p style="font-size:12px;color:{{PRIMARY}};margin:0;font-weight:600;">📍 {{CITY}}</p>
</section>
<!-- 邮票 -->
<section style="width:52px;height:62px;border:2px dashed {{TEXT_LIGHT}};padding:6px;text-align:center;display:flex;align-items:center;justify-content:center;">
<section>
<p style="font-size:16px;margin:0;line-height:1;">🏙</p>
<p style="font-size:8px;color:{{TEXT_LIGHT}};margin:4px 0 0 0;letter-spacing:1px;">POSTCARD</p>
</section>
</section>
</section>

<!-- 标题 -->
<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
```

`{{CITY}}` 是城市/区域名。邮票角标是明信片的标志视觉——微信中 flex 退化后邮票会换行到下方，仍可接受。

### postcard_info

本地指南特有：图标信息行——地址/人均/交通用图标前缀。

```html
<!-- 明信片信息 -->
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:10px;padding:16px 18px;margin:32px 0;">
<p style="font-size:14px;color:{{TEXT}};line-height:2.2;margin:0 0 0 0;">📍&nbsp; {{LOCATION}}</p>
<p style="font-size:14px;color:{{TEXT}};line-height:2.2;margin:0 0 0 0;">💰&nbsp; 人均 {{PRICE}}</p>
<p style="font-size:14px;color:{{TEXT}};line-height:2.2;margin:0 0 0 0;">🚇&nbsp; {{ROUTE}}</p>
<p style="font-size:14px;color:{{TEXT}};line-height:2.2;margin:0;">🕐&nbsp; {{HOURS}}</p>
</section>
```

emoji 做图标前缀——无需额外图片，微信原生支持。`{{HOURS}}` 为营业时间，可选。

### pin_card

本地指南特有：地图钉卡片——每个推荐地点是一个 Pin。

```html
<!-- 地图钉卡片 -->
<section style="margin:20px 0;">
<!-- 钉头 -->
<section style="display:flex;align-items:center;margin:0 0 10px 0;">
<section style="width:28px;height:28px;background-color:{{PRIMARY}};border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
<p style="font-size:12px;font-weight:700;color:#ffffff;margin:0;">{{NUM}}</p>
</section>
<p style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0 0 0 10px;">{{PLACE_NAME}}</p>
</section>
<!-- 卡片主体 -->
<section style="margin-left:14px;border-left:2px solid {{HIGHLIGHT_BG}};padding:0 0 0 18px;">
<p style="font-size:15px;color:{{TEXT}};line-height:1.9;margin:0 0 8px 0;">{{CONTENT}}</p>
<!-- 评分行 -->
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;">{{RATING_DOTS}}&nbsp;&nbsp;{{TAG}}</p>
</section>
</section>
```

圆形编号钉头 + 竖线延伸 + 内容缩进，像地图 Pin 展开的信息卡。`{{RATING_DOTS}}` 用 `●●●●○` 格式（Claude 根据推荐度自动生成）。`{{TAG}}` 是短标签如「必去」「小众」「拍照好」。

### route_connector

本地指南特有：路线连接线——地点之间的过渡。

```html
<!-- 路线连接 -->
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:16px 0;text-align:center;letter-spacing:3px;">· · · 🚶 步行 {{MINUTES}} 分钟 · · ·</p>
```

可替换 🚶 为 🚗🚇🚌 等交通方式。视觉上在两个 pin_card 之间形成「路线」感。

### section_heading

```html
<p style="font-size:11px;color:{{PRIMARY}};margin:30px 0 6px 0;letter-spacing:2px;font-weight:600;">— {{ZONE}} —</p>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0 0 14px 0;line-height:1.4;">{{HEADING}}</h2>
```

`{{ZONE}}` 是区域/类别名（如「老城区」「美食街」「文艺地标」），用装饰横线包裹。

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:1px 5px;border-radius:3px;">{{TEXT}}</span>
```

圆角底色标签——像地图上的标注。

### blockquote

```html
<!-- 本地人说 -->
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:10px;padding:18px 20px;margin:32px 0;">
<p style="font-size:11px;color:{{PRIMARY}};margin:0 0 6px 0;font-weight:600;">🗣 本地人说</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;font-style:italic;">{{QUOTE}}</p>
</section>
```

引语用「本地人说」标签——符合探店/攻略场景。

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.85;padding-left:2px;">✦&nbsp; {{ITEM}}</p>
```

### decorative_illustration

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:10px;padding:44px 20px;margin:32px 0;text-align:center;">
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;">📷</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ Claude 生成装饰插画位置 ]</p>
</section>
```

### cta_block

```html
<section style="border:2px solid {{PRIMARY}};border-radius:10px;padding:14px;margin:32px 0;text-align:center;">
<p style="font-size:15px;color:{{PRIMARY}};font-weight:700;margin:0;">📌 收藏这份指南，周末用得上</p>
</section>
```

线框按钮风格——比实色更轻松，符合指南调性。

### article_footer

```html
<!-- 分割线 -->
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:28px 0 16px 0;text-align:center;letter-spacing:4px;">· · · ✈ · · ·</p>

<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0 0 4px 0;text-align:center;">去之前建议确认营业时间</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;text-align:center;">点个\"在看\"，给朋友也寄一张</p>

</section>
</section>
```
