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

## DIV-11 · Art Deco 几何纹章

灵感来自 1920s 装饰艺术运动的几何母题，适合高端/品牌/奢侈品/设计类文章。

```html
<section style="display:flex;align-items:center;justify-content:center;margin:48px 0;">
<section style="flex:1;height:0.5px;background:linear-gradient(to right,transparent,{{PRIMARY}});opacity:0.12;"></section>
<section style="display:flex;align-items:center;gap:0;margin:0 2px;">
<section style="width:6px;height:6px;border:1px solid {{PRIMARY}};opacity:0.2;transform:rotate(45deg);"></section>
<section style="width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:8px solid {{PRIMARY}};opacity:0.12;margin:0 4px;"></section>
<section style="width:10px;height:10px;border:1.5px solid {{PRIMARY}};opacity:0.25;transform:rotate(45deg);"></section>
<section style="width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:8px solid {{PRIMARY}};opacity:0.12;margin:0 4px;transform:rotate(180deg);"></section>
<section style="width:6px;height:6px;border:1px solid {{PRIMARY}};opacity:0.2;transform:rotate(45deg);"></section>
</section>
<section style="flex:1;height:0.5px;background:linear-gradient(to left,transparent,{{PRIMARY}});opacity:0.12;"></section>
</section>
```

---

## DIV-12 · 活版印刷花饰

源自 16 世纪活字印刷的 Fleuron 花饰传统，适合文学/书评/学术/出版风格。

```html
<section style="display:flex;align-items:center;justify-content:center;margin:48px 0;">
<section style="flex:1;max-width:80px;height:0.5px;background:{{PRIMARY}};opacity:0.1;"></section>
<span style="font-size:18px;color:{{PRIMARY}};opacity:0.15;margin:0 12px;font-family:Georgia,'Times New Roman',serif;">❦</span>
<section style="flex:1;max-width:80px;height:0.5px;background:{{PRIMARY}};opacity:0.1;"></section>
</section>
```

变体：可替换为 `❧`（反向花饰）、`☙`（旋转花饰）。

---

## DIV-13 · 东方留白

日式「間」的概念——用空白本身作为分隔，适合极简/侘寂/禅意/茶道风格。

```html
<section style="margin:20px 40px;padding:12px 0;border-top:0.5px solid {{PRIMARY}};border-bottom:0.5px solid {{PRIMARY}};opacity:0.06;">
<section style="width:3px;height:3px;border-radius:50%;background:{{PRIMARY}};opacity:0.5;margin:0 auto;"></section>
</section>
```

---

## DIV-14 · 杂志编辑线

不对称锚定，源自欧美杂志版式的偏置线设计，适合评测/深度/特稿/杂志风格。

```html
<section style="margin:48px 0;display:flex;align-items:center;gap:8px;">
<section style="width:24px;height:1.5px;background:{{PRIMARY}};opacity:0.35;border-radius:1px;"></section>
<section style="flex:1;height:0.5px;background:{{PRIMARY}};opacity:0.08;"></section>
</section>
```

---

## DIV-15 · 同心环

极简几何——两个同心圆环，视觉焦点感强，适合设计/创意/艺术/展览风格。

```html
<section style="display:flex;align-items:center;justify-content:center;margin:48px 0;">
<section style="flex:1;height:0.5px;background:linear-gradient(to right,transparent,{{PRIMARY}});opacity:0.08;"></section>
<section style="position:relative;width:18px;height:18px;margin:0 10px;">
<section style="position:absolute;left:0;top:0;right:0;bottom:0;border:1px solid {{PRIMARY}};border-radius:50%;opacity:0.12;"></section>
<section style="position:absolute;left:4px;top:4px;right:4px;bottom:4px;border:1px solid {{PRIMARY}};border-radius:50%;opacity:0.2;"></section>
</section>
<section style="flex:1;height:0.5px;background:linear-gradient(to left,transparent,{{PRIMARY}});opacity:0.08;"></section>
</section>
```

---

## DIV-16 · 错位双色条

包豪斯构成主义——两条错位色带产生节奏，适合现代/商务/产品/建筑风格。

```html
<section style="margin:48px auto;width:80px;">
<section style="height:2px;background:{{PRIMARY}};opacity:0.2;border-radius:1px;margin-left:0;width:50px;"></section>
<section style="height:1px;background:{{PRIMARY}};opacity:0.1;border-radius:1px;margin-left:30px;margin-top:4px;width:50px;"></section>
</section>
```

---

## DIV-17 · 呼吸渐变带

满宽柔光带——像翻页时纸张透出的光晕，适合长文/叙事/散文/日记风格。

```html
<section style="margin:32px 0;height:20px;background:linear-gradient(to bottom,transparent,{{PRIMARY}},transparent);opacity:0.03;"></section>
```

---

## DIV-18 · 铜版纹样

灵感来自铜版雕刻装饰线——精密对称，适合法式/优雅/古典/高端风格。

```html
<section style="display:flex;align-items:center;justify-content:center;gap:3px;margin:48px 0;">
<section style="width:30px;height:0.5px;background:{{PRIMARY}};opacity:0.1;"></section>
<section style="width:4px;height:4px;border-radius:50%;border:0.5px solid {{PRIMARY}};opacity:0.15;"></section>
<section style="width:12px;height:0.5px;background:{{PRIMARY}};opacity:0.15;"></section>
<section style="width:6px;height:6px;transform:rotate(45deg);border:0.5px solid {{PRIMARY}};opacity:0.2;"></section>
<section style="width:12px;height:0.5px;background:{{PRIMARY}};opacity:0.15;"></section>
<section style="width:4px;height:4px;border-radius:50%;border:0.5px solid {{PRIMARY}};opacity:0.15;"></section>
<section style="width:30px;height:0.5px;background:{{PRIMARY}};opacity:0.1;"></section>
</section>
```

---

## DIV-19 · 瑞士国际风格

Swiss Style 网格体系——精确、理性、克制，适合学术/报告/数据/信息图风格。

```html
<section style="margin:48px 0;display:flex;align-items:flex-start;gap:0;">
<section style="width:2px;height:16px;background:{{PRIMARY}};opacity:0.2;"></section>
<section style="flex:1;height:0.5px;background:{{PRIMARY}};opacity:0.06;margin-top:8px;"></section>
</section>
```

---

## DIV-20 · 织物纹理

交叉编织的细线——手工感与温度并存，适合手作/文创/手账/编织风格。

```html
<section style="display:flex;align-items:center;justify-content:center;gap:2px;margin:48px 0;">
<section style="width:16px;height:0.5px;background:{{PRIMARY}};opacity:0.06;"></section>
<section style="position:relative;width:8px;height:8px;">
<section style="position:absolute;width:12px;height:0.5px;background:{{PRIMARY}};opacity:0.15;top:50%;left:-2px;transform:rotate(45deg);"></section>
<section style="position:absolute;width:12px;height:0.5px;background:{{PRIMARY}};opacity:0.15;top:50%;left:-2px;transform:rotate(-45deg);"></section>
</section>
<section style="width:8px;height:0.5px;background:{{PRIMARY}};opacity:0.1;"></section>
<section style="position:relative;width:8px;height:8px;">
<section style="position:absolute;width:12px;height:0.5px;background:{{PRIMARY}};opacity:0.15;top:50%;left:-2px;transform:rotate(45deg);"></section>
<section style="position:absolute;width:12px;height:0.5px;background:{{PRIMARY}};opacity:0.15;top:50%;left:-2px;transform:rotate(-45deg);"></section>
</section>
<section style="width:8px;height:0.5px;background:{{PRIMARY}};opacity:0.1;"></section>
<section style="position:relative;width:8px;height:8px;">
<section style="position:absolute;width:12px;height:0.5px;background:{{PRIMARY}};opacity:0.15;top:50%;left:-2px;transform:rotate(45deg);"></section>
<section style="position:absolute;width:12px;height:0.5px;background:{{PRIMARY}};opacity:0.15;top:50%;left:-2px;transform:rotate(-45deg);"></section>
</section>
<section style="width:16px;height:0.5px;background:{{PRIMARY}};opacity:0.06;"></section>
</section>
```

---

## 风格匹配建议

| 人格风格 | 推荐分隔符 |
|---------|----------|
| 旧报纸、杂志感、政策解读 | DIV-3 短横线 或 DIV-14 杂志编辑线 |
| 极简和风、北欧白桦、侘寂 | DIV-13 东方留白 或 DIV-2 三点式 |
| 手账日记、书信手札 | DIV-8 引号过渡 或 DIV-12 活版印刷花饰 |
| 笔记课堂、课程讲义、案例拆解 | DIV-7 序号分隔 |
| 科技蓝、产品发布、数码极客 | DIV-5 渐隐线 或 DIV-15 同心环 |
| 国潮朱砂、复古港风、故宫朱墙 | DIV-6 花纹装饰 或 DIV-11 Art Deco |
| 粗野风、工业水泥 | DIV-9 色块断章 或 DIV-19 瑞士国际 |
| 田园碎花、母婴柔粉、宠物暖黄 | DIV-10 波浪线 或 DIV-20 织物纹理 |
| 法式优雅、古典高端、品牌故事 | DIV-18 铜版纹样 或 DIV-4 双线 |
| 评测对比、深度特稿、杂志专栏 | DIV-14 杂志编辑线 或 DIV-16 错位双色条 |
| 散文叙事、长文阅读、日记随笔 | DIV-17 呼吸渐变带 或 DIV-12 活版印刷花饰 |
| 设计艺术、展览创意、视觉导向 | DIV-15 同心环 或 DIV-11 Art Deco |
| 手作文创、手账编织、温度感 | DIV-20 织物纹理 或 DIV-13 东方留白 |
| 商务现代、产品建筑、理性克制 | DIV-16 错位双色条 或 DIV-19 瑞士国际 |
| 通用/无特殊倾向 | DIV-1 菱形居中 |
