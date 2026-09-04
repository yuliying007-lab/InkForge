# P32 · 食谱菜谱 recipe

菜名大标题+难度/时间/份量信息行、食材清单表、编号步骤卡、小贴士提示框。
像一页烹饪书——实用至上、步骤清晰、一边看一边做。

---

## 内容块模板

### article_header

```html
<section style="max-width:677px;margin:0 auto;padding:0 10px;">
<section style="background-color:{{BG}};padding:24px 20px 20px;">

<!-- 图片占位 -->
<section style="background-color:{{HIGHLIGHT_BG}};padding:60px 20px;margin:0 -20px 20px -20px;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ Claude 生成装饰插画位置 ]</p>
</section>

<h1 style="font-size:24px;font-weight:800;color:{{TEXT}};margin:0 0 10px 0;line-height:1.35;">{{DISH_NAME}}</h1>
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 16px 0;line-height:1.7;">{{DESCRIPTION}}</p>

<!-- 信息行：难度+时间+份量 -->
<section style="display:flex;gap:0;margin:0 0 0 0;border-top:1px solid {{HIGHLIGHT_BG}};border-bottom:1px solid {{HIGHLIGHT_BG}};">
<section style="flex:1;padding:10px 8px;text-align:center;border-right:1px solid {{HIGHLIGHT_BG}};">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0 0 2px 0;">难度</p>
<p style="font-size:13px;font-weight:700;color:{{PRIMARY}};margin:0;">{{DIFFICULTY}}</p>
</section>
<section style="flex:1;padding:10px 8px;text-align:center;border-right:1px solid {{HIGHLIGHT_BG}};">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0 0 2px 0;">用时</p>
<p style="font-size:13px;font-weight:700;color:{{PRIMARY}};margin:0;">{{COOK_TIME}}</p>
</section>
<section style="flex:1;padding:10px 8px;text-align:center;">
<p style="font-size:10px;color:{{TEXT_LIGHT}};margin:0 0 2px 0;">份量</p>
<p style="font-size:13px;font-weight:700;color:{{PRIMARY}};margin:0;">{{SERVINGS}}</p>
</section>
</section>
```

### ingredient_list

食谱特有：核心组件——食材清单。奇偶行交替底色。

```html
<section style="margin:32px 0;">
<section style="background-color:{{PRIMARY}};padding:10px 14px;">
<p style="font-size:13px;font-weight:700;color:#ffffff;margin:0;letter-spacing:1px;">🥬 食材清单</p>
</section>
<section style="display:flex;justify-content:space-between;padding:8px 14px;background-color:{{HIGHLIGHT_BG}};">
<p style="font-size:14px;color:{{TEXT}};margin:0;">{{INGREDIENT}}</p>
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:0;">{{AMOUNT}}</p>
</section>
<section style="display:flex;justify-content:space-between;padding:8px 14px;">
<p style="font-size:14px;color:{{TEXT}};margin:0;">{{INGREDIENT}}</p>
<p style="font-size:14px;color:{{TEXT_LIGHT}};margin:0;">{{AMOUNT}}</p>
</section>
</section>
```

行数灵活，奇数行 HIGHLIGHT_BG、偶数行透明交替。

### step_card

食谱特有：核心组件——编号步骤。大数字+说明+可选图占位。

```html
<section style="margin:16px 0;padding:16px;border:1px solid {{HIGHLIGHT_BG}};">
<section style="display:flex;align-items:flex-start;gap:12px;">
<span style="display:inline-block;background-color:{{PRIMARY}};color:#ffffff;font-size:14px;font-weight:800;width:32px;height:32px;line-height:32px;text-align:center;border-radius:50%;flex-shrink:0;">{{STEP_NUM}}</span>
<section style="flex:1;">
<p style="font-size:15px;color:{{TEXT}};line-height:1.85;margin:0;">{{INSTRUCTION}}</p>
</section>
</section>
</section>
```

### tip_box

食谱特有：小贴士——烹饪窍门或替代建议。

```html
<section style="margin:20px 0;padding:18px 20px;background-color:{{HIGHLIGHT_BG}};border-radius:8px;">
<p style="font-size:12px;color:{{PRIMARY}};margin:0 0 4px 0;font-weight:700;">💡 小贴士</p>
<p style="font-size:14px;color:{{TEXT}};line-height:1.7;margin:0;">{{TIP}}</p>
</section>
```

### section_heading

```html
<h2 style="font-size:17px;font-weight:700;color:{{TEXT}};margin:40px 0 16px 0;line-height:1.4;">{{HEADING}}</h2>
```

### body_paragraph

```html
<p style="font-size:15px;color:{{TEXT}};margin:0 0 24px 0;line-height:2.0;">{{CONTENT}}</p>
```

### highlight_inline

```html
<span style="background-color:{{HIGHLIGHT_BG}};color:{{PRIMARY}};font-weight:600;padding:1px 4px;">{{TEXT}}</span>
```

### blockquote

```html
<section style="background-color:{{HIGHLIGHT_BG}};padding:18px 20px;margin:32px 0;border-left:3px solid {{SECONDARY}};">
<p style="font-size:14px;color:{{TEXT}};line-height:1.85;margin:0;">{{QUOTE}}</p>
</section>
```

### decorative_illustration

```html
<section style="background:linear-gradient(135deg, {{HIGHLIGHT_BG}} 0%, {{BG}} 100%);border:1px solid {{HIGHLIGHT_BG}};padding:42px 20px;margin:16px 0;text-align:center;">
<p style="font-size:12px;color:{{TEXT_LIGHT}};margin:0;">[ Claude 生成装饰插画位置 ]</p>
</section>
```

### article_footer

```html
<section style="margin:40px 0 0 0;padding:18px 0 0 0;border-top:1px solid {{HIGHLIGHT_BG}};">
<p style="font-size:13px;color:{{TEXT_LIGHT}};margin:0 0 6px 0;text-align:center;">做出来了记得拍照给我看 📸</p>
<p style="font-size:11px;color:{{TEXT_LIGHT}};margin:0;text-align:center;letter-spacing:1px;">— END —</p>
</section>
</section>
```
