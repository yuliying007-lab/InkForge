# P23 · 社群动态 community-update

社群头像+名称横排、成员里程碑徽章、热门话题条目、成员聚光灯卡片、本周精选内容列表。
像社群运营者发的群周报——温暖、有归属感、鼓励参与。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 24px;">

<!-- 社群标识 -->
<section style="display:flex;align-items:center;margin:0 0 18px 0;">
<section style="width:40px;height:40px;background-color:{{PRIMARY}};border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
<p style="font-size:16px;color:#ffffff;font-weight:700;margin:0;">{{COMMUNITY_ICON}}</p>
</section>
<section style="margin-left:12px;">
<p style="font-size:14px;font-weight:700;color:{{TEXT}};margin:0;">{{COMMUNITY_NAME}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:2px 0 0 0;">{{MEMBER_COUNT}} 成员 · 第 {{ISSUE}} 期</p>
</section>
</section>

<h1 style="font-size:22px;font-weight:700;color:{{TEXT}};margin:0 0 8px 0;line-height:1.35;">{{TITLE}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.7;">{{SUBTITLE}}</p>
```

`{{COMMUNITY_ICON}}` 是社群名首字或 emoji。圆形头像+社群名，模拟微信群风格。

### milestone_badge

社群动态特有：里程碑徽章——庆祝社群成长节点。

```html
<section style="background-color:{{HIGHLIGHT_BG}};border:1px solid {{BORDER}};padding:16px;margin:32px 0;text-align:center;">
<p style="font-size:28px;margin:0 0 6px 0;">🎉</p>
<p style="font-size:16px;font-weight:700;color:{{PRIMARY}};margin:0 0 4px 0;">{{MILESTONE}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;">{{MILESTONE_DESC}}</p>
</section>
```

如"突破 1000 人"、"社群成立一周年"。

### hot_topic

社群动态特有：热门话题条目——本周最活跃的讨论话题。

```html
<section style="border-left:3px solid {{PRIMARY}};background-color:{{HIGHLIGHT_BG}};padding:12px 16px;margin:12px 0;">
<section style="display:flex;align-items:center;margin:0 0 6px 0;">
<section style="background-color:{{PRIMARY}};border-radius:3px;padding:1px 7px;display:inline-block;">
<p style="font-size:9px;font-weight:700;color:#ffffff;margin:0;letter-spacing:1px;">HOT</p>
</section>
<p style="font-size:15px;font-weight:600;color:{{TEXT}};margin:0 0 0 8px;">{{TOPIC_TITLE}}</p>
</section>
<p style="font-size:14px;color:{{TEXT}};line-height:1.8;margin:0;">{{TOPIC_SUMMARY}}</p>
</section>
```

HOT 标签+左边框，与 product-launch 的 feature_item 风格统一。标签也可换为 `NEW`、`PINNED`。

### member_spotlight

社群动态特有：成员聚光灯——突出展示活跃/优秀成员。

```html
<section style="border:1px solid {{BORDER}};padding:16px;margin:18px 0;">
<section style="display:flex;align-items:center;margin:0 0 10px 0;">
<section style="width:36px;height:36px;background-color:{{HIGHLIGHT_BG}};border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
<p style="font-size:14px;color:{{PRIMARY}};font-weight:700;margin:0;">{{MEMBER_INITIAL}}</p>
</section>
<section style="margin-left:10px;">
<p style="font-size:14px;font-weight:600;color:{{TEXT}};margin:0;">{{MEMBER_NAME}}</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:2px 0 0 0;">{{MEMBER_TAG}}</p>
</section>
</section>
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{MEMBER_STORY}}</p>
</section>
```

`{{MEMBER_TAG}}` 如"本周最佳回答者"、"新人之星"。

### content_pick

社群动态特有：本周精选内容——推荐社群内的好文/资源。

```html
<section style="display:flex;align-items:flex-start;margin:12px 0;padding:10px 0;border-bottom:1px solid {{BORDER}};">
<section style="background-color:{{PRIMARY}};width:24px;height:24px;display:flex;align-items:center;justify-content:center;border-radius:4px;flex-shrink:0;margin-right:10px;margin-top:2px;">
<p style="font-size:12px;font-weight:700;color:#ffffff;margin:0;">{{PICK_NUM}}</p>
</section>
<section style="flex:1;">
<p style="font-size:15px;font-weight:600;color:{{TEXT}};margin:0 0 4px 0;line-height:1.4;">{{PICK_TITLE}}</p>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0;line-height:1.6;">{{PICK_DESC}}</p>
</section>
</section>
```

编号方块+标题+简介，类似精选列表。

### section_heading

```html
<section style="display:flex;align-items:center;margin:32px 0 14px 0;">
<p style="font-size:18px;margin:0 8px 0 0;">{{EMOJI}}</p>
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:0;line-height:1.4;">{{HEADING}}</h2>
</section>
```

emoji 前缀（如 🔥 热门话题、⭐ 成员聚光、📚 本周精选），社群风格更活泼。

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:1px 4px;border-radius:2px;">{{TEXT}}</span>
```

### blockquote

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:8px;padding:18px 20px;margin:32px 0;">
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;font-style:italic;">"{{QUOTE}}"</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:6px 0 0 0;">— {{AUTHOR}}</p>
</section>
```

圆角卡片式引用，比竖线引用更有社群的温暖感。

### list_item

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 12px 0;line-height:1.85;padding-left:4px;">→&nbsp;&nbsp;{{ITEM}}</p>
```

### separator

```html
<section style="text-align:center;margin:48px 0;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:6px;">· · ·</p>
</section>
```

三点分隔——社群风格比实线或虚线更柔和。

### image_placeholder

```html
<section style="background-color:{{HIGHLIGHT_BG}};border-radius:8px;padding:42px 20px;margin:32px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ 社群截图 / 活动照片 ]</p>
</section>
```

### cta_block

```html
<section style="background-color:{{PRIMARY}};border-radius:8px;padding:14px;margin:32px 0;text-align:center;">
<p style="font-size:15px;color:#ffffff;font-weight:700;margin:0;">加入社群，一起成长</p>
</section>
```

### article_footer

```html
<section style="text-align:center;margin:28px 0 0 0;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;letter-spacing:6px;">· · ·</p>
</section>

<section style="background-color:{{HIGHLIGHT_BG}};border-radius:8px;padding:18px 20px;margin:16px 0 0 0;text-align:center;">
<p style="font-size:13px;color:{{TEXT}};margin:0 0 4px 0;font-weight:600;">{{COMMUNITY_NAME}}</p>
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">下期见 · 第 {{NEXT_ISSUE}} 期</p>
</section>
</section>
</section>
```
