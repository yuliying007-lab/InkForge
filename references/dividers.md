# 分隔符设计库

文章各部分之间的装饰性分隔符。跟随主题色变化，通过 `{{PRIMARY}}`、`{{TEXT_LIGHT}}` 等占位符适配。

Claude 根据人格风格自动选择合适的分隔符。每篇文章使用**一种**分隔符风格保持一致。

---

## DIV-1 · 菱形居中

最百搭，适合大多数人格。

```html
<section style="display:flex;align-items:center;gap:8px;margin:48px 0;">
<section style="flex:1;height:1px;background:{{PRIMARY}};opacity:0.15;"></section>
<span style="font-size:11px;color:{{PRIMARY}};opacity:0.3;flex-shrink:0;letter-spacing:4px;">◆</span>
<section style="flex:1;height:1px;background:{{PRIMARY}};opacity:0.15;"></section>
</section>
```

---

## DIV-2 · 三点式

轻巧含蓄，适合极简/文艺/日系风格。

```html
<section style="text-align:center;margin:48px 0;">
<span style="font-size:10px;color:{{PRIMARY}};opacity:0.25;letter-spacing:12px;">● ● ●</span>
</section>
```

---

## DIV-3 · 短横线

最简洁，适合报纸/商务/学术风格。

```html
<section style="margin:24px auto;width:40px;height:2px;background:{{PRIMARY}};opacity:0.2;border-radius:1px;"></section>
```

---

## DIV-4 · 双线

适合杂志/法式/品牌故事风格。

```html
<section style="margin:48px 0;">
<section style="height:1.5px;background:{{PRIMARY}};opacity:0.12;margin-bottom:3px;"></section>
<section style="height:0.5px;background:{{PRIMARY}};opacity:0.08;"></section>
</section>
```

---

## DIV-5 · 渐隐线

现代感，适合科技/产品/数码风格。

```html
<section style="margin:48px 0;height:1px;background:linear-gradient(to right, transparent, {{PRIMARY}}, transparent);opacity:0.15;"></section>
```

注意：`linear-gradient` 在微信中兼容性较好，但少数旧版客户端可能不支持。降级显示为无分隔线，不影响阅读。

---

## DIV-6 · 花纹装饰

适合国潮/中式/复古/波西米亚风格。

```html
<section style="text-align:center;margin:48px 0;">
<span style="font-size:14px;color:{{PRIMARY}};opacity:0.2;letter-spacing:6px;">❋ ❋ ❋</span>
</section>
```

变体：可替换为 `✦ ✦ ✦`（星形）、`〰 〰 〰`（波浪）、`◇ ◇ ◇`（空心菱形）。

---

## DIV-7 · 序号分隔

适合笔记/课程/案例等有结构层次的文章。用于小标题之前。

```html
<section style="display:flex;align-items:center;gap:10px;margin:48px 0 16px;">
<section style="width:28px;height:28px;border-radius:14px;background:{{PRIMARY}};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
<span style="font-size:12px;font-weight:700;color:#ffffff;">{{N}}</span>
</section>
<section style="flex:1;height:1px;background:{{PRIMARY}};opacity:0.12;"></section>
</section>
```

---

## DIV-8 · 引号过渡

适合书信/日记/个人表达类，作为段落间的情感过渡。

```html
<section style="text-align:center;margin:48px 0;">
<span style="font-size:36px;color:{{PRIMARY}};opacity:0.1;font-family:Georgia,serif;line-height:1;">❝</span>
</section>
```

---

## DIV-9 · 色块断章

适合粗野风/工业/先锋风格，视觉冲击强。

```html
<section style="margin:48px 0;display:flex;gap:4px;">
<section style="height:4px;flex:3;background:{{PRIMARY}};"></section>
<section style="height:4px;flex:1;background:{{SECONDARY}};"></section>
<section style="height:4px;flex:1;background:{{PRIMARY}};opacity:0.3;"></section>
</section>
```

---

## DIV-10 · 波浪线

适合田园/碎花/母婴/宠物等柔和风格。

```html
<section style="text-align:center;margin:48px 0;overflow:hidden;">
<span style="font-size:18px;color:{{PRIMARY}};opacity:0.15;letter-spacing:-2px;">〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰</span>
</section>
```

---

## 风格匹配建议

| 人格风格 | 推荐分隔符 |
|---------|----------|
| 旧报纸、杂志感、政策解读 | DIV-3 短横线 或 DIV-4 双线 |
| 极简和风、北欧白桦、侘寂 | DIV-2 三点式 或 DIV-3 短横线 |
| 手账日记、书信手札 | DIV-8 引号过渡 或 DIV-2 三点式 |
| 笔记课堂、课程讲义、案例拆解 | DIV-7 序号分隔 |
| 科技蓝、产品发布、数码极客 | DIV-5 渐隐线 或 DIV-1 菱形居中 |
| 国潮朱砂、复古港风、故宫朱墙 | DIV-6 花纹装饰 |
| 粗野风、工业水泥 | DIV-9 色块断章 |
| 田园碎花、母婴柔粉、宠物暖黄 | DIV-10 波浪线 |
| 通用/无特殊倾向 | DIV-1 菱形居中 |
