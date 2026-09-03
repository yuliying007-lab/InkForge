import { useState } from "react";

const templates = [
// P01 旧报纸 × T01 极简墨黑
{id:"P01",name:"旧报纸",file:"newspaper",group:"长文叙事",desc:"长文评论 / 深度观点",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="border-bottom:2.5px solid #1a1a1a;padding-bottom:8px;margin-bottom:16px">
  <p style="font-size:11px;color:#999;margin:0 0 6px;letter-spacing:2px">留学认知社 · 深度评论</p>
  <h1 style="font-size:22px;font-weight:800;color:#1a1a1a;margin:0;line-height:1.3">澳洲留学正在经历一场「认知革命」</h1>
</div>
<p style="font-size:11px;color:#999;margin:0 0 16px;border-bottom:1px solid #f0f0f0;padding-bottom:10px">2026.06.09 · 编辑部 · 阅读约 8 分钟</p>
<p style="font-size:15px;color:#333;margin:0 0 16px;line-height:2.0">过去三年，澳洲留学市场经历了一场静悄悄的底层重构。当大多数家长还在用十年前的框架评估留学价值时，这一决策的底层逻辑已经全面更新。</p>
<h2 style="font-size:17px;font-weight:700;color:#1a1a1a;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #f0f0f0">一、信息平权时代来临</h2>
<p style="font-size:15px;color:#333;margin:0 0 16px;line-height:2.0">小红书和抖音彻底改变了留学信息的流通方式。学生自己就能查到真实录取数据、同学亲历的院校体验，中介的信息差优势正在快速消失。</p>
<div style="background:#f5f5f5;padding:14px 18px;border-left:3px solid #1a1a1a;margin:0 0 16px">
  <p style="font-size:14px;color:#333;margin:0;line-height:1.9">核心判断：留学不再是「买一张船票」，而是一次需要深度认知的人生投资。信息差在缩小，认知差在拉大。</p>
</div>
<h2 style="font-size:17px;font-weight:700;color:#1a1a1a;margin:0 0 12px;padding-bottom:8px;border-bottom:1px solid #f0f0f0">二、政策不确定性成为常态</h2>
<p style="font-size:15px;color:#333;margin:0 0 16px;line-height:2.0">GS 替代 GTE、485 时长缩短、移民配额调整——每一项政策变化都在重塑留学的投入产出模型。选学校之前，先看懂政策，才是2026年留学决策的正确打开方式。</p>
<p style="font-size:15px;color:#333;margin:0;line-height:2.0">认知差正在取代信息差，成为决定留学质量的核心变量。这也是留学认知社存在的意义。</p>
<div style="margin:24px 0 0;padding:16px 0 0;border-top:1px solid #f0f0f0"><p style="font-size:11px;color:#999;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P02 票根感 × T09 留学国际
{id:"P02",name:"票根感",file:"ticket",group:"长文叙事",desc:"旅行打卡 / 行程记录",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif;border-right:10px dashed #f8f6f0;padding-right:12px">
<div style="display:inline-block;background:#1e3a5f;padding:4px 16px;margin-bottom:10px"><p style="font-size:11px;color:#fff;margin:0;font-weight:700;letter-spacing:3px">DAY 01 · 墨尔本</p></div>
<h1 style="font-size:20px;font-weight:700;color:#1c1917;margin:0 0 8px;line-height:1.3">Federation Square → Hosier Lane → Lygon St</h1>
<p style="font-size:15px;color:#1c1917;margin:0 0 14px;line-height:2.0">从联邦广场出发，穿过 Hosier Lane 涂鸦巷，正午在 Lygon Street 吃一碗正宗意大利面。这条路线步行不超过 40 分钟，适合第一天 jet lag 还没倒过来的慢节奏。</p>
<p style="font-size:12px;color:#a8a29e;margin:0 0 20px">🚶 步行 3.2km · ☕ 推荐 Patricia Coffee · 🕐 半天行程</p>
<div style="border-top:1px dashed #b8860b;padding-top:16px;margin-bottom:16px"></div>
<div style="display:inline-block;background:#1e3a5f;padding:4px 16px;margin-bottom:10px"><p style="font-size:11px;color:#fff;margin:0;font-weight:700;letter-spacing:3px">DAY 02 · 大洋路</p></div>
<h2 style="font-size:20px;font-weight:700;color:#1c1917;margin:0 0 8px">Torquay → Lorne → 十二门徒</h2>
<p style="font-size:15px;color:#1c1917;margin:0 0 14px;line-height:2.0">清晨 7 点出发，沿 B100 海岸公路一路向西。Lorne 小镇适合午休，下午 4 点抵达十二门徒，正好赶上日落的金色光线打在岩石上。</p>
<p style="font-size:12px;color:#a8a29e;margin:0">🚗 全程约 280km · 📸 最佳拍摄时间 16:30 · 🌊 建议预留 2 小时</p>
<div style="margin:24px 0 0;padding:16px 0 0;border-top:1px solid #f8f6f0"><p style="font-size:11px;color:#a8a29e;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P03 极简和风 × T65 侘寂素朴
{id:"P03",name:"极简和风",file:"minimalist",group:"长文叙事",desc:"极简 / 审美 / 设计",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif;text-align:center">
<p style="font-size:11px;color:#d6d3d1;margin:0 0 20px;letter-spacing:4px">ESSAY · 设计随笔</p>
<h1 style="font-size:24px;font-weight:700;color:#292524;margin:0 0 16px;letter-spacing:2px">留 白 的 力 量</h1>
<div style="width:40px;height:1px;background:#57534e;margin:0 auto 20px;opacity:0.3"></div>
<p style="font-size:14px;color:#a8a29e;margin:0 0 22px;line-height:2.2">好的设计从来不是堆砌，而是知道什么时候停下来。</p>
<p style="font-size:15px;color:#292524;margin:0 0 20px;line-height:2.2;text-align:left">密斯·凡德罗说"少即是多"。他不是在推崇贫乏，而是在追求一种更高维度的丰富——去掉所有不必要的元素，让剩下的每一个都在呼吸。</p>
<p style="font-size:15px;color:#292524;margin:0 0 20px;line-height:2.2;text-align:left">无印良品的"空"不是没有内容，而是给使用者留出了填充自己生活的空间。这大概就是极简主义最迷人的地方——它给的不是答案，而是可能性。</p>
<div style="width:60px;height:1px;background:#57534e;margin:20px auto;opacity:0.2"></div>
<p style="font-size:13px;color:#a8a29e;margin:0 0 20px;line-height:2.0;text-align:left">当我们谈论"断舍离"，谈论的其实是一种选择能力：在无限的可能性里，选择最重要的那一件事，然后把所有精力倾注其中。留学，其实也是如此。</p>
<div style="margin:24px 0 0;padding:16px 0 0;border-top:1px solid #f5f5f4"><p style="font-size:11px;color:#d6d3d1;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P05 杂志感 × T66 法式优雅
{id:"P05",name:"杂志感",file:"magazine",group:"长文叙事",desc:"品牌专题 / 深度特写",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="background:#faf8f3;padding:16px 18px;margin:0 -14px 18px">
  <p style="font-size:10px;color:#1e3a5f;margin:0 0 3px;letter-spacing:3px;font-weight:600">FEATURE STORY · 深度报道</p>
  <p style="font-size:12px;color:#a89880;margin:0">留学认知社 · 2026 夏季刊</p>
</div>
<h1 style="font-size:22px;font-weight:700;color:#1c1917;margin:0 0 8px;line-height:1.3">独立咖啡馆的生存哲学</h1>
<p style="font-size:13px;color:#a89880;margin:0 0 18px">在连锁巨头的夹缝中，墨尔本的小店主们如何活下来</p>
<p style="font-size:15px;color:#1c1917;margin:0 0 16px;line-height:2.0"><span style="font-size:36px;font-weight:800;color:#1e3a5f;float:left;margin:0 8px 4px 0;line-height:1">L</span>ygon Street 上的 DOC Espresso 只有 12 个座位，但每天早上 7 点就开始排队。老板 Marco 在这里待了 19 年，他说自己从来不做广告，秘诀只有一个：「每个常客我都记得他们喝什么。」</p>
<p style="font-size:15px;color:#1c1917;margin:0 0 16px;line-height:2.0">在墨尔本，独立咖啡馆的密度是全球最高的。这里没有一家星巴克能在闹市区立足超过三年。与其说这是商业现象，不如说是城市性格的外化——这座城市拒绝被标准化。</p>
<div style="border:1px solid #faf8f3;padding:14px 16px;margin:0 0 16px">
  <p style="font-size:14px;color:#1c1917;margin:0;line-height:1.9;font-style:italic">「这里的顾客不是在买咖啡，他们是在买一种生活方式的认同感。」<span style="font-style:normal;color:#a89880;font-size:12px"> — Marco, DOC Espresso</span></p>
</div>
<p style="font-size:15px;color:#1c1917;margin:0;line-height:2.0">这也是为什么当我们谈论留学选城市时，我永远把墨尔本放在首位。一座拒绝被标准化的城市，往往也是最适合培养独立思考的地方。</p>
<div style="margin:24px 0 0;padding:16px 0 0;border-top:1px solid #faf8f3"><p style="font-size:11px;color:#a89880;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P10 纯净长文 × T61 北欧白桦
{id:"P10",name:"纯净长文",file:"longform",group:"长文叙事",desc:"通用长文 / 散文",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<h1 style="font-size:22px;font-weight:700;color:#0f172a;margin:0 0 10px;line-height:1.35">一封写给二十六岁自己的信</h1>
<p style="font-size:12px;color:#cbd5e1;margin:0 0 20px">2026.06 · 墨尔本</p>
<p style="font-size:15px;color:#0f172a;margin:0 0 18px;line-height:2.1">二十六岁这年，我学会了和不确定性共处。不是每个问题都需要答案，不是每段关系都需要定义，不是每个决定都需要在做之前确认它是"对的"。有些事情，走着走着自然就清晰了。</p>
<p style="font-size:15px;color:#0f172a;margin:0 0 18px;line-height:2.1">刚来澳洲的时候，我以为留学是一条从 A 到 B 的直线。后来发现，它更像是一条河——你以为在往前走，其实一直在拐弯。而拐弯的地方，往往是风景最好的地方。</p>
<div style="height:1px;background:#f8fafc;margin:0 0 18px"></div>
<p style="font-size:15px;color:#0f172a;margin:0 0 18px;line-height:2.1">如果可以告诉那时候的自己一件事，我想说：去做那些让你害怕的事。不是因为勇气，而是因为恐惧本身是最准确的指南针——你怕什么，说明你在乎什么。</p>
<p style="font-size:15px;color:#0f172a;margin:0;line-height:2.1">二十六岁，我终于明白：所谓成长，不是变得更强大，而是对自己更诚实。</p>
<div style="margin:24px 0 0;padding:16px 0 0;border-top:1px solid #f8fafc"><p style="font-size:11px;color:#cbd5e1;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P04 粗野风 × T67 工业水泥
{id:"P04",name:"粗野风",file:"brutalist",group:"长文叙事",desc:"先锋 / 实验性",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif;border:3px solid #1c1917;padding:16px">
<p style="font-size:10px;color:#a8a29e;margin:0 0 6px;letter-spacing:3px;font-family:monospace">ISSUE #007 · BRUTALIST</p>
<h1 style="font-size:26px;font-weight:900;color:#1c1917;margin:0 0 10px;font-family:monospace;line-height:1.2">规则是用来<br/>打破的</h1>
<div style="background:#292524;padding:6px 14px;display:inline-block;margin-bottom:16px"><p style="font-size:12px;color:#e7e5e4;margin:0;font-weight:700">反套路设计宣言</p></div>
<p style="font-size:15px;color:#1c1917;margin:0 0 16px;line-height:1.9">粗野主义（Brutalism）不等于粗糙。它是一种诚实——材料是什么就展示什么，结构怎样就表达怎样。不修饰、不掩盖、不讨好。</p>
<div style="border-top:3px solid #1c1917;border-bottom:3px solid #1c1917;padding:14px 0;margin:0 0 16px">
<p style="font-size:15px;color:#1c1917;margin:0;line-height:1.9;font-family:monospace">当所有人都在追求「好看」的时候，故意不好看本身就是一种立场。美学从来不是一个标准答案，而是无数种可能的选择。</p>
</div>
<p style="font-size:15px;color:#1c1917;margin:0;line-height:1.9">这种美学最适合不想被归类的人。如果你做内容是为了打破而不是讨好，这个模板是你的。</p>
<div style="margin:24px 0 0;padding:16px 0 0;border-top:3px solid #1c1917"><p style="font-size:11px;color:#a8a29e;margin:0;text-align:center;letter-spacing:2px;font-family:monospace">— END —</p></div>
</div>`},
// P06 信息图卡片 × T04 科技蓝
{id:"P06",name:"信息图卡片",file:"infographic",group:"数据可视",desc:"数据可视化 / 统计",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<h1 style="font-size:20px;font-weight:700;color:#1e293b;margin:0 0 16px">2026 澳洲留学核心数据</h1>
<div style="display:flex;gap:8px;margin-bottom:16px">
  <div style="flex:1;background:#eff6ff;padding:16px 10px;border-radius:8px;text-align:center"><p style="font-size:28px;font-weight:800;color:#2563eb;margin:0;line-height:1">89%</p><p style="font-size:11px;color:#94a3b8;margin:5px 0 0">签证通过率</p></div>
  <div style="flex:1;background:#eff6ff;padding:16px 10px;border-radius:8px;text-align:center"><p style="font-size:28px;font-weight:800;color:#2563eb;margin:0;line-height:1">29天</p><p style="font-size:11px;color:#94a3b8;margin:5px 0 0">平均审批</p></div>
  <div style="flex:1;background:#eff6ff;padding:16px 10px;border-radius:8px;text-align:center"><p style="font-size:28px;font-weight:800;color:#2563eb;margin:0;line-height:1">62万</p><p style="font-size:11px;color:#94a3b8;margin:5px 0 0">在澳留学生</p></div>
</div>
<p style="font-size:13px;font-weight:600;color:#1e293b;margin:0 0 10px">热门专业分布</p>
<div style="margin-bottom:8px"><div style="display:flex;align-items:center;gap:8px"><p style="font-size:12px;color:#1e293b;margin:0;width:44px">商科</p><div style="flex:1;height:10px;background:#eff6ff;border-radius:5px;overflow:hidden"><div style="width:42%;height:10px;background:#2563eb;border-radius:5px"></div></div><p style="font-size:12px;color:#2563eb;margin:0;font-weight:700">42%</p></div></div>
<div style="margin-bottom:8px"><div style="display:flex;align-items:center;gap:8px"><p style="font-size:12px;color:#1e293b;margin:0;width:44px">IT</p><div style="flex:1;height:10px;background:#eff6ff;border-radius:5px;overflow:hidden"><div style="width:28%;height:10px;background:#60a5fa;border-radius:5px"></div></div><p style="font-size:12px;color:#60a5fa;margin:0;font-weight:700">28%</p></div></div>
<div style="margin-bottom:16px"><div style="display:flex;align-items:center;gap:8px"><p style="font-size:12px;color:#1e293b;margin:0;width:44px">工程</p><div style="flex:1;height:10px;background:#eff6ff;border-radius:5px;overflow:hidden"><div style="width:15%;height:10px;background:#93c5fd;border-radius:5px"></div></div><p style="font-size:12px;color:#93c5fd;margin:0;font-weight:700">15%</p></div></div>
<div style="background:#eff6ff;padding:12px 16px;border-left:3px solid #2563eb;border-radius:0 6px 6px 0">
  <p style="font-size:13px;color:#1e293b;margin:0;line-height:1.7">数据说明：商科整体供给过剩，但金融、精算等细分方向就业率仍维持在 91% 以上。</p>
</div>
<p style="font-size:11px;color:#94a3b8;margin:14px 0 0">数据来源：DHA 官方统计 · QS Graduate Outcomes 2026</p>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #eff6ff"><p style="font-size:11px;color:#94a3b8;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P34 数据报告 × T04 科技蓝
{id:"P34",name:"数据报告",file:"data-report",group:"数据可视",desc:"年报 / 月报 / 复盘",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="background:#2563eb;padding:16px 20px;margin:0 -14px 18px">
  <div style="display:flex;justify-content:space-between;margin-bottom:6px"><p style="font-size:10px;color:rgba(255,255,255,0.5);margin:0;letter-spacing:2px">DATA REPORT</p><p style="font-size:10px;color:rgba(255,255,255,0.5);margin:0">2026年5月</p></div>
  <p style="font-size:20px;font-weight:700;color:#fff;margin:0">留学认知社 · 运营月报</p>
</div>
<div style="text-align:center;padding:24px 16px;background:#eff6ff;border-radius:12px;margin-bottom:16px">
  <p style="font-size:11px;color:#94a3b8;margin:0 0 8px;letter-spacing:2px">全平台总阅读量</p>
  <p style="font-size:44px;font-weight:800;color:#2563eb;margin:0;line-height:1">127,843</p>
  <div style="display:inline-block;margin-top:10px;padding:3px 14px;background:#f0fdf4;border-radius:12px"><p style="font-size:11px;color:#15803d;margin:0;font-weight:600">↑ 23.5% 较上月</p></div>
</div>
<div style="display:flex;gap:8px;margin-bottom:16px">
  <div style="flex:1;background:#eff6ff;padding:14px;border-radius:10px;text-align:center"><p style="font-size:10px;color:#94a3b8;margin:0 0 5px">新增关注</p><p style="font-size:24px;font-weight:800;color:#2563eb;margin:0">+1,247</p></div>
  <div style="flex:1;background:#eff6ff;padding:14px;border-radius:10px;text-align:center"><p style="font-size:10px;color:#94a3b8;margin:0 0 5px">篇均阅读</p><p style="font-size:24px;font-weight:800;color:#2563eb;margin:0">7,102</p></div>
  <div style="flex:1;background:#eff6ff;padding:14px;border-radius:10px;text-align:center"><p style="font-size:10px;color:#94a3b8;margin:0 0 5px">咨询转化</p><p style="font-size:24px;font-weight:800;color:#2563eb;margin:0">42</p></div>
</div>
<p style="font-size:15px;font-weight:700;color:#1e293b;margin:0 0 10px">核心洞察</p>
<div style="display:flex;align-items:center;padding:14px 16px;border-left:3px solid #2563eb;background:#eff6ff;border-radius:0 8px 8px 0;margin-bottom:10px">
  <span style="font-size:24px;font-weight:800;color:#2563eb;margin-right:16px;flex-shrink:0">89%</span>
  <p style="font-size:14px;color:#1e293b;margin:0;line-height:1.7">读者来自小红书引流，跨平台漏斗模型验证有效</p>
</div>
<div style="background:#2563eb;margin:16px -14px 0;padding:14px 20px">
  <p style="font-size:11px;color:rgba(255,255,255,0.5);margin:0">数据来源：微信后台 · 小红书创作者中心 · 2026.05</p>
</div>
</div>`},

// P07 手账日记 × T59 日系和纸
{id:"P07",name:"手账日记",file:"journal",group:"个人表达",desc:"日记 / 碎碎念",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="background:#fffef7;padding:16px;border-radius:8px;margin-bottom:4px">
  <p style="font-size:11px;color:#c8b89a;margin:0 0 8px">📅 2026.06.10 · 周二 · 晴 · 墨尔本</p>
  <h1 style="font-size:20px;font-weight:700;color:#451a03;margin:0 0 12px">今天做了一个决定</h1>
  <p style="font-size:15px;color:#451a03;margin:0 0 14px;line-height:2.0;font-style:italic">有些事想太多反而走不动了，不如先迈出第一步再说。</p>
  <p style="font-size:15px;color:#451a03;margin:0 0 14px;line-height:2.0">下午在图书馆坐了三个小时，脑子里转的全是「要不要换专业」这件事。后来 Lily 给我发来一句话：与其研究怎么跳水，不如先跳下去。</p>
  <p style="font-size:15px;color:#451a03;margin:0 0 16px;line-height:2.0">于是我关掉了所有对比表格，发了一封邮件给 advisor，约了下周见面。就这样，决定了。</p>
  <div style="border-top:1px dashed #c2a67e;padding-top:12px">
    <p style="font-size:12px;color:#c8b89a;margin:0 0 4px">🎵 今日 BGM：Norah Jones - Don't Know Why</p>
    <p style="font-size:12px;color:#c8b89a;margin:0">🌙 今日消耗：1 杯 flat white · 3 小时图书馆 · 1 个决定</p>
  </div>
</div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #fefce8"><p style="font-size:11px;color:#c8b89a;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P08 书信手札 × T14 文艺复古褐
{id:"P08",name:"书信手札",file:"letter",group:"个人表达",desc:"书信 / 致信体",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<p style="font-size:13px;color:#a89080;margin:0 0 16px">亲爱的你：</p>
<p style="font-size:15px;color:#3f3f3f;margin:0 0 16px;line-height:2.1;text-indent:2em">展信佳。距离上次见面已经三个月了，墨尔本入冬了，今天出门被风吹得睁不开眼，突然很想念广州的暖。</p>
<p style="font-size:15px;color:#3f3f3f;margin:0 0 16px;line-height:2.1;text-indent:2em">你问我在这边过得好不好。好和不好都有，但更多的是一种之前没体验过的「清醒」——当你脱离了熟悉的环境，你才真正开始审视自己到底是谁、喜欢什么、想要什么。这种清醒有点疼，但是值得。</p>
<p style="font-size:15px;color:#3f3f3f;margin:0 0 16px;line-height:2.1;text-indent:2em">对了，昨天发现巷子里有一家日料店，老板是个会说中文的日本大叔，omakase 只要 80 澳币，做得一绝。等你来，我带你去。</p>
<div style="border-top:1px solid #faf6f1;padding-top:16px;margin-top:8px">
  <p style="font-size:15px;color:#3f3f3f;margin:0;text-align:right;line-height:2.0">你的朋友 Edward<br/><span style="font-size:12px;color:#a89080">2026年6月 · 于墨尔本</span></p>
</div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #faf6f1"><p style="font-size:11px;color:#a89080;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P09 播客对话 × T53 音乐律动
{id:"P09",name:"播客对话",file:"podcast",group:"个人表达",desc:"对话体 / Q&A",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<p style="font-size:20px;font-weight:700;color:#1e1b4b;margin:0 0 6px;text-align:center">对话 · 在墨尔本开咖啡店的留学生</p>
<p style="font-size:12px;color:#a78bfa;margin:0 0 18px;text-align:center">EP.14 · 2026.06.01 · 45 分钟</p>
<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:14px">
  <div style="width:32px;height:32px;border-radius:16px;background:#9333ea;flex-shrink:0;color:#fff;font-size:11px;text-align:center;line-height:32px;font-weight:700">E</div>
  <div style="background:#faf5ff;border-radius:12px;padding:12px 16px;flex:1">
    <p style="font-size:14px;color:#1e1b4b;margin:0;line-height:1.8">你当初为什么选择在墨尔本开咖啡店？留学生创业不怕签证出问题吗？</p>
  </div>
</div>
<div style="display:flex;align-items:flex-start;gap:10px;flex-direction:row-reverse;margin-bottom:14px">
  <div style="width:32px;height:32px;border-radius:16px;background:#f472b6;flex-shrink:0;color:#fff;font-size:11px;text-align:center;line-height:32px;font-weight:700">L</div>
  <div style="background:#f3f4f6;border-radius:12px;padding:12px 16px;flex:1">
    <p style="font-size:14px;color:#1e1b4b;margin:0;line-height:1.8">说实话，一开始是因为太爱喝咖啡了。后来发现墨尔本的咖啡文化特别包容——不卷价格，卷的是风味和个性。485 签证期间是可以自雇的，我做了很多功课才动手。</p>
  </div>
</div>
<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:14px">
  <div style="width:32px;height:32px;border-radius:16px;background:#9333ea;flex-shrink:0;color:#fff;font-size:11px;text-align:center;line-height:32px;font-weight:700">E</div>
  <div style="background:#faf5ff;border-radius:12px;padding:12px 16px;flex:1">
    <p style="font-size:14px;color:#1e1b4b;margin:0;line-height:1.8">现在生意怎么样？能养活自己吗？</p>
  </div>
</div>
<div style="display:flex;align-items:flex-start;gap:10px;flex-direction:row-reverse">
  <div style="width:32px;height:32px;border-radius:16px;background:#f472b6;flex-shrink:0;color:#fff;font-size:11px;text-align:center;line-height:32px;font-weight:700">L</div>
  <div style="background:#f3f4f6;border-radius:12px;padding:12px 16px;flex:1">
    <p style="font-size:14px;color:#1e1b4b;margin:0;line-height:1.8">第一年亏了，第二年打平，今年开始赚钱了。最重要的是，我每天醒来都很期待去店里。这比任何工资都值钱。</p>
  </div>
</div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #faf5ff"><p style="font-size:11px;color:#a78bfa;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P30 语录金句 × T75 禅意茶道
{id:"P30",name:"语录金句",file:"quote-card",group:"个人表达",desc:"名言 / 摘抄 / 语录",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif;text-align:center">
<p style="font-size:11px;color:#a89580;margin:0 0 20px;letter-spacing:3px">五月读书摘抄</p>
<p style="font-size:52px;color:#5c4033;opacity:0.12;margin:0;font-family:Georgia,serif;line-height:0.6">"</p>
<p style="font-size:19px;font-weight:600;color:#3b2a1f;margin:12px 0 14px;line-height:1.8">一个人知道自己为什么而活，<br/>就可以忍受任何一种生活。</p>
<p style="font-size:12px;color:#a89580;margin:0 0 14px">—— 尼采 《偶像的黄昏》</p>
<p style="font-size:14px;color:#a89580;margin:0 0 20px;line-height:1.9;padding:0 16px">留学第一年最难的不是语言，是「我到底为什么要来这里」的反复追问。这句话在很多个深夜救过我。</p>
<div style="width:40px;height:1px;background:#5c4033;margin:0 auto 20px;opacity:0.2"></div>
<span style="font-size:14px;color:#5c4033;letter-spacing:8px;opacity:0.25">◆ ◆ ◆</span>
<div style="margin:20px 0"></div>
<p style="font-size:52px;color:#5c4033;opacity:0.12;margin:0;font-family:Georgia,serif;line-height:0.6">"</p>
<p style="font-size:19px;font-weight:600;color:#3b2a1f;margin:12px 0 14px;line-height:1.8">真正的发现之旅，<br/>不在于寻找新风景，<br/>而在于拥有新眼光。</p>
<p style="font-size:12px;color:#a89580;margin:0">—— 马塞尔·普鲁斯特</p>
<div style="margin:24px 0 0;padding:16px 0 0;border-top:1px solid #f5f0eb"><p style="font-size:11px;color:#a89580;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P18 人物专访 × T58 水墨丹青
{id:"P18",name:"人物专访",file:"interview-profile",group:"个人表达",desc:"专访 / 人物故事",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="text-align:center;margin-bottom:18px">
  <div style="width:72px;height:72px;border-radius:36px;background:#f8fafc;margin:0 auto 10px;border:1px solid #e2e8f0"></div>
  <p style="font-size:20px;font-weight:700;color:#1e293b;margin:0 0 4px">对话 · 李明</p>
  <p style="font-size:13px;color:#94a3b8;margin:0">从流水线工人到独立开发者的十年</p>
</div>
<p style="font-size:15px;color:#1e293b;margin:0 0 16px;line-height:2.0">李明的双手有两种质感：左手食指上有一道旧伤疤，那是十年前在东莞工厂流水线上留下的；右手指尖的茧子则来自日复一日敲击键盘。这两道痕迹，是他人生最诚实的注脚。</p>
<div style="background:#f8fafc;padding:16px 20px;margin:0 0 16px;text-align:center">
  <p style="font-size:17px;font-weight:600;color:#1e293b;margin:0;line-height:1.8">"我不觉得自己有天赋。我只是比别人更害怕回到流水线上。"</p>
</div>
<p style="font-size:15px;color:#1e293b;margin:0 0 16px;line-height:2.0">他花了三年时间自学编程，利用工厂夜班结束后的两个小时，在宿舍昏黄的灯光下敲代码。今天，他的开源项目在 GitHub 上有超过 4000 个 star，来自世界各地的开发者在用他写的工具。</p>
<p style="font-size:15px;color:#1e293b;margin:0;line-height:2.0">李明说，他最感谢的是当年那个「还没改变命运、但已经相信自己可以改变」的自己。</p>
<div style="margin:24px 0 0;padding:16px 0 0;border-top:1px solid #f8fafc"><p style="font-size:11px;color:#94a3b8;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},
// P26 科普解说 × T05 医疗青绿
{id:"P26",name:"科普解说",file:"explainer",group:"教程知识",desc:"一文读懂 / 概念拆解",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="display:inline-block;background:#0d9488;color:#fff;font-size:10px;padding:3px 14px;border-radius:2px;margin-bottom:10px;font-weight:700;letter-spacing:2px">一文读懂</div>
<h1 style="font-size:20px;font-weight:700;color:#1e293b;margin:0 0 6px;line-height:1.35">485 工签到底是什么？谁能申、怎么申</h1>
<p style="font-size:12px;color:#94a3b8;margin:0 0 16px">2026 新政后完整解读 · 留学认知社</p>
<div style="display:flex;align-items:center;padding:8px 14px;background:#f0fdfa;margin-bottom:18px;border-radius:6px">
  <p style="font-size:11px;color:#94a3b8;margin:0;margin-right:10px">阅读难度</p>
  <span style="color:#0d9488;font-size:14px;letter-spacing:2px">●●○○○</span>
  <p style="font-size:11px;color:#94a3b8;margin:0;margin-left:10px">约 6 分钟</p>
</div>
<div style="border-left:4px solid #0d9488;background:#f0fdfa;padding:14px 18px;margin-bottom:18px">
  <p style="font-size:11px;color:#0d9488;margin:0 0 6px;font-weight:700">📖 概念</p>
  <p style="font-size:16px;font-weight:700;color:#1e293b;margin:0 0 8px">Temporary Graduate Visa (subclass 485)</p>
  <p style="font-size:14px;color:#1e293b;margin:0;line-height:1.8">允许澳洲毕业生在完成学业后继续留澳工作的临时签证。持有人可不受限制地为任何雇主工作、学习或旅行。</p>
</div>
<div style="background:#0d9488;padding:14px 18px;border-radius:6px;margin-bottom:18px">
  <p style="font-size:10px;color:rgba(255,255,255,0.5);margin:0 0 6px;letter-spacing:2px">💡 划重点</p>
  <p style="font-size:14px;color:#fff;margin:0;line-height:1.8;font-weight:600">STEM 和医护专业享有 4-6 年时长，人文社科类缩短至 2 年。选专业之前，务必确认该专业是否在「延长清单」上。</p>
</div>
<div style="overflow:hidden;border-radius:4px;margin-bottom:4px">
  <div style="background:#fef2f2;padding:12px 16px;border-left:3px solid #dc2626"><p style="font-size:11px;color:#dc2626;margin:0 0 4px;font-weight:700">✗ 常见误区</p><p style="font-size:13px;color:#7f1d1d;margin:0;line-height:1.7">「只要在澳洲读完书就能拿 485，不用管什么专业。」</p></div>
  <div style="background:#f0fdfa;padding:12px 16px;border-left:3px solid #0d9488"><p style="font-size:11px;color:#0d9488;margin:0 0 4px;font-weight:700">✓ 实际情况</p><p style="font-size:13px;color:#134e4a;margin:0;line-height:1.7">2026 新政后，申请 485 需满足「目标专业」要求，部分非优先领域的学位已不符合资格。</p></div>
</div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #f0fdfa"><p style="font-size:11px;color:#94a3b8;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P25 测评对比 × T50 数码极客
{id:"P25",name:"测评对比",file:"review",group:"教程知识",desc:"产品评测 / 打分",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span style="font-size:10px;color:#0f766e;font-weight:700;padding:3px 10px;border:1px solid #0f766e;letter-spacing:1px">REVIEW</span><span style="font-size:11px;color:#5eead4">智能硬件</span></div>
<h1 style="font-size:20px;font-weight:700;color:#134e4a;margin:0 0 14px">Apple Vision Pro 半年深度体验报告</h1>
<div style="display:flex;align-items:center;padding:18px;background:#f0fdfa;margin-bottom:16px;border-radius:10px">
  <div style="margin-right:18px;text-align:center"><p style="font-size:42px;font-weight:800;color:#0f766e;margin:0;line-height:1">8.2</p><p style="font-size:11px;color:#5eead4;margin:4px 0 0">/ 10</p></div>
  <div style="flex:1"><p style="font-size:14px;font-weight:700;color:#134e4a;margin:0 0 8px">值得推荐</p><div style="height:6px;background:#fff;border-radius:3px;overflow:hidden"><div style="width:82%;height:6px;background:#0f766e;border-radius:3px"></div></div></div>
</div>
<p style="font-size:13px;color:#5eead4;margin:0 0 8px;font-weight:700;letter-spacing:1px">分项评分</p>
<div style="display:flex;align-items:center;margin-bottom:8px"><p style="font-size:12px;color:#134e4a;margin:0;width:64px">显示效果</p><div style="flex:1;background:#f0fdfa;height:6px;border-radius:3px;overflow:hidden;margin:0 10px"><div style="width:95%;height:6px;background:#0f766e;border-radius:3px"></div></div><p style="font-size:12px;font-weight:700;color:#0f766e;margin:0">9.5</p></div>
<div style="display:flex;align-items:center;margin-bottom:16px"><p style="font-size:12px;color:#134e4a;margin:0;width:64px">佩戴舒适</p><div style="flex:1;background:#f0fdfa;height:6px;border-radius:3px;overflow:hidden;margin:0 10px"><div style="width:62%;height:6px;background:#0f766e;border-radius:3px"></div></div><p style="font-size:12px;font-weight:700;color:#0f766e;margin:0">6.2</p></div>
<div style="display:flex;gap:10px;margin-bottom:16px">
  <div style="flex:1"><p style="font-size:11px;color:#15803d;margin:0 0 8px;font-weight:700">✓ 优点</p><p style="font-size:13px;color:#134e4a;margin:0 0 6px;padding-left:8px;border-left:2px solid #4ade80;line-height:1.6">目前最好的空间显示技术</p><p style="font-size:13px;color:#134e4a;margin:0;padding-left:8px;border-left:2px solid #4ade80;line-height:1.6">眼动手势极为流畅</p></div>
  <div style="flex:1"><p style="font-size:11px;color:#dc2626;margin:0 0 8px;font-weight:700">✗ 缺点</p><p style="font-size:13px;color:#134e4a;margin:0 0 6px;padding-left:8px;border-left:2px solid #fca5a5;line-height:1.6">45 分钟后头部明显不适</p><p style="font-size:13px;color:#134e4a;margin:0;padding-left:8px;border-left:2px solid #fca5a5;line-height:1.6">$3,499 价格门槛过高</p></div>
</div>
<div style="border:2px solid #0f766e;padding:14px 16px">
  <p style="font-size:11px;color:#0f766e;margin:0 0 6px;font-weight:700;letter-spacing:2px">最终结论</p>
  <p style="font-size:16px;font-weight:700;color:#0f766e;margin:0">值得入手，但建议等二代</p>
</div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #f0fdfa"><p style="font-size:11px;color:#5eead4;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P11 笔记课堂 × T06 教育墨绿
{id:"P11",name:"笔记课堂",file:"notebook",group:"教程知识",desc:"教程 / 步骤 / 指南",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<h1 style="font-size:20px;font-weight:700;color:#1e293b;margin:0 0 14px">Flask 入门：30 分钟搭建第一个 Web 应用</h1>
<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:14px">
  <div style="width:28px;height:28px;border-radius:14px;background:#166534;color:#fff;font-size:12px;text-align:center;line-height:28px;font-weight:700;flex-shrink:0">1</div>
  <div><p style="font-size:15px;font-weight:700;color:#1e293b;margin:0 0 6px">安装环境</p><div style="background:#f1f5f9;border-radius:4px;padding:8px 14px;margin-bottom:6px"><p style="font-size:13px;color:#1e293b;margin:0;font-family:monospace">pip install flask</p></div><p style="font-size:13px;color:#94a3b8;margin:0;line-height:1.7">确保 Python ≥ 3.8，建议使用 venv 虚拟环境。</p></div>
</div>
<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:14px">
  <div style="width:28px;height:28px;border-radius:14px;background:#166534;color:#fff;font-size:12px;text-align:center;line-height:28px;font-weight:700;flex-shrink:0">2</div>
  <div><p style="font-size:15px;font-weight:700;color:#1e293b;margin:0 0 6px">创建项目结构</p><div style="background:#f1f5f9;border-radius:4px;padding:8px 14px"><p style="font-size:13px;color:#1e293b;margin:0;font-family:monospace">mkdir myapp && cd myapp<br/>touch app.py templates/</p></div></div>
</div>
<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:14px">
  <div style="width:28px;height:28px;border-radius:14px;background:#166534;color:#fff;font-size:12px;text-align:center;line-height:28px;font-weight:700;flex-shrink:0">3</div>
  <div><p style="font-size:15px;font-weight:700;color:#1e293b;margin:0 0 6px">编写第一个路由</p><div style="background:#f1f5f9;border-radius:4px;padding:8px 14px"><p style="font-size:13px;color:#1e293b;margin:0;font-family:monospace">from flask import Flask<br/>app = Flask(__name__)<br/>@app.route('/')<br/>def hello(): return 'Hello!'</p></div></div>
</div>
<div style="background:#f0fdf4;padding:12px 16px;border-radius:8px;border-left:3px solid #166534">
  <p style="font-size:13px;color:#166534;margin:0;font-weight:600">💡 建议：用 flask run --debug 启动，修改代码后自动重载，无需手动重启。</p>
</div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #f0fdf4"><p style="font-size:11px;color:#94a3b8;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P13 案例拆解 × T02 商务藏青
{id:"P13",name:"案例拆解",file:"case-study",group:"教程知识",desc:"案例分析 / 复盘",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="display:inline-block;background:#1a3a5c;padding:3px 14px;margin-bottom:10px"><p style="font-size:10px;color:#fff;margin:0;letter-spacing:2px">CASE STUDY</p></div>
<h1 style="font-size:20px;font-weight:700;color:#2d3748;margin:0 0 14px;line-height:1.35">瑞幸 9.9 元策略复盘：低价是陷阱还是护城河？</h1>
<div style="display:flex;gap:8px;margin-bottom:16px">
  <div style="flex:1;background:#eef3f7;padding:14px 10px;border-radius:8px;text-align:center"><p style="font-size:26px;font-weight:800;color:#1a3a5c;margin:0">+40%</p><p style="font-size:10px;color:#8a9bb5;margin:4px 0 0">营收增长</p></div>
  <div style="flex:1;background:#eef3f7;padding:14px 10px;border-radius:8px;text-align:center"><p style="font-size:26px;font-weight:800;color:#1a3a5c;margin:0">3.2亿</p><p style="font-size:10px;color:#8a9bb5;margin:4px 0 0">月销杯数</p></div>
  <div style="flex:1;background:#eef3f7;padding:14px 10px;border-radius:8px;text-align:center"><p style="font-size:26px;font-weight:800;color:#1a3a5c;margin:0">18,000</p><p style="font-size:10px;color:#8a9bb5;margin:4px 0 0">门店数</p></div>
</div>
<p style="font-size:15px;color:#2d3748;margin:0 0 16px;line-height:2.0">瑞幸的 9.9 元活动表面上是价格战，底层逻辑其实是<span style="font-weight:700;color:#1a3a5c">用户习惯养成</span>——通过高频低价建立每日触达，再通过 APP 私域实现复购转化。</p>
<div style="background:#eef3f7;padding:14px 16px;border-left:3px solid #1a3a5c;margin-bottom:16px">
  <p style="font-size:14px;color:#2d3748;margin:0;line-height:1.8">关键洞察：星巴克卖的是「空间溢价」，瑞幸卖的是「习惯依赖」。两种商业模型没有高下，但针对的用户心智完全不同。</p>
</div>
<div style="border:2px solid #1a3a5c;padding:14px 16px">
  <p style="font-size:11px;color:#1a3a5c;margin:0 0 6px;font-weight:700;letter-spacing:2px">结论</p>
  <p style="font-size:14px;color:#2d3748;margin:0;line-height:1.7">低价不是终点，而是入口。关键在于低价之后你能留住多少人。瑞幸的成功在于它把"促销活动"转化成了"产品本身"。</p>
</div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #eef3f7"><p style="font-size:11px;color:#8a9bb5;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P15 职场成长 × T54 学术科研
{id:"P15",name:"职场成长",file:"career-guide",group:"教程知识",desc:"职场 / 求职 / 规划",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="background:#1e3a5f;padding:12px 16px;margin:0 -14px 16px"><p style="font-size:10px;color:rgba(255,255,255,0.5);margin:0 0 4px;letter-spacing:2px">CAREER GUIDE</p><p style="font-size:18px;font-weight:700;color:#fff;margin:0">大厂面试的 3 个隐藏规则</p></div>
<p style="font-size:15px;color:#0f172a;margin:0 0 16px;line-height:2.0">面试不只是考能力，更是考「匹配度」。以下三条规则，JD 上不会写，但每个面试官都在用：</p>
<div style="background:#f1f5f9;padding:14px 16px;border-radius:8px;margin-bottom:10px"><p style="font-size:14px;font-weight:700;color:#1e3a5f;margin:0 0 6px">规则一：先证明你能活下来</p><p style="font-size:14px;color:#0f172a;margin:0;line-height:1.8">面试官最先筛掉的不是能力不够的，而是「看起来待不久」的。稳定性 > 能力，这是大厂用人的第一优先级。</p></div>
<div style="background:#f1f5f9;padding:14px 16px;border-radius:8px;margin-bottom:10px"><p style="font-size:14px;font-weight:700;color:#1e3a5f;margin:0 0 6px">规则二：用数字说话</p><p style="font-size:14px;color:#0f172a;margin:0;line-height:1.8">「我提升了用户体验」不如「我把页面加载时间从 3.2s 降到 1.1s，跳出率降了 28%」。数字让你的贡献变得不可否认。</p></div>
<div style="background:#f1f5f9;padding:14px 16px;border-radius:8px"><p style="font-size:14px;font-weight:700;color:#1e3a5f;margin:0 0 6px">规则三：展示你的判断力</p><p style="font-size:14px;color:#0f172a;margin:0;line-height:1.8">说清楚你为什么做这个决定，而不只是做了什么。有判断力的候选人比有执行力的候选人稀缺得多。</p></div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #f1f5f9"><p style="font-size:11px;color:#64748b;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P20 课程讲义 × T06 教育墨绿
{id:"P20",name:"课程讲义",file:"course-lesson",group:"教程知识",desc:"课程 / 教学 / 讲义",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="display:inline-block;background:#166534;padding:4px 16px;border-radius:4px;margin-bottom:10px"><p style="font-size:11px;color:#fff;margin:0;font-weight:600">第 3 课</p></div>
<h1 style="font-size:20px;font-weight:700;color:#1e293b;margin:0 0 6px">用户增长的底层逻辑</h1>
<p style="font-size:12px;color:#94a3b8;margin:0 0 16px">留学认知社 · 新媒体实战课 · 共 8 课</p>
<div style="border-left:3px solid #166534;background:#f0fdf4;padding:14px 16px;margin-bottom:16px"><p style="font-size:12px;color:#166534;margin:0 0 6px;font-weight:700">📌 本课目标</p><p style="font-size:14px;color:#1e293b;margin:0;line-height:1.7">理解 AARRR 增长模型，学会用漏斗思维诊断公众号的增长瓶颈</p></div>
<p style="font-size:15px;color:#1e293b;margin:0 0 16px;line-height:2.0">AARRR 不是线性流程，而是一个<span style="font-weight:700;color:#166534">循环系统</span>——获取（Acquisition）→ 激活 → 留存 → 变现 → 推荐，每一层的优化都会反哺其他层。</p>
<p style="font-size:15px;color:#1e293b;margin:0 0 16px;line-height:2.0">大多数公号主的误区是把所有精力放在「获取」上。但如果留存率只有 10%，获客再多也是在漏水的桶里加水。</p>
<div style="border:1px dashed #4ade80;padding:12px 16px;border-radius:6px"><p style="font-size:12px;color:#166534;margin:0 0 6px;font-weight:700">✏️ 课堂练习</p><p style="font-size:14px;color:#1e293b;margin:0;line-height:1.7">打开你的公众号后台，找出「新关注」和「取消关注」的比值。如果比值 < 3:1，优先解决留存问题。</p></div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #f0fdf4"><p style="font-size:11px;color:#94a3b8;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},
// P27 政策解读 × T08 法律政务
{id:"P27",name:"政策解读",file:"policy-brief",group:"资讯速递",desc:"政策 / 新规解读",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"><span style="background:#374151;color:#fff;font-size:10px;padding:3px 14px;font-weight:700;letter-spacing:1px">政策解读</span><span style="font-size:11px;color:#9ca3af">生效：2026.07.01</span></div>
<h1 style="font-size:20px;font-weight:700;color:#1f2937;margin:0 0 8px">澳洲学生签证 GS 框架重大改革</h1>
<p style="font-size:13px;color:#9ca3af;margin:0 0 14px">影响所有 2026 年下半年递签申请人</p>
<div style="display:flex;gap:6px;flex-wrap:wrap;padding:10px 14px;background:#f3f4f6;margin-bottom:16px"><span style="font-size:11px;color:#374151;border:1px solid #374151;padding:3px 10px;font-weight:600">本科申请人</span><span style="font-size:11px;color:#374151;border:1px solid #374151;padding:3px 10px;font-weight:600">硕士申请人</span><span style="font-size:11px;color:#374151;border:1px solid #374151;padding:3px 10px;font-weight:600">境内转学</span></div>
<p style="font-size:13px;font-weight:700;color:#1f2937;margin:0 0 8px">核心变化</p>
<div style="display:flex;gap:4px;margin-bottom:16px">
  <div style="flex:1;background:#f3f4f6;padding:14px"><p style="font-size:10px;color:#9ca3af;margin:0 0 6px;font-weight:700">旧政策</p><p style="font-size:13px;color:#6b7280;margin:0;text-decoration:line-through">GTE 声明，300 字内说明留学动机</p></div>
  <div style="flex:1;background:#f3f4f6;padding:14px;border-left:3px solid #374151"><p style="font-size:10px;color:#374151;margin:0 0 6px;font-weight:700">新政策 ✦</p><p style="font-size:13px;color:#1f2937;margin:0;font-weight:700">GS 问卷系统，7 个结构化问题，系统自动评分</p></div>
</div>
<div style="display:flex;align-items:flex-start;margin-bottom:10px;padding:12px 14px;border:1px solid #f3f4f6"><span style="display:inline-block;background:#374151;color:#fff;font-size:11px;font-weight:700;padding:4px 8px;flex-shrink:0;margin-right:12px;letter-spacing:1px">第1条</span><p style="font-size:14px;color:#1f2937;line-height:1.8;margin:0">取消 GTE 声明，改为 Genuine Student 在线问卷，系统自动评分，移民官二次审核。</p></div>
<div style="display:flex;align-items:flex-start;padding:12px 14px;border:1px solid #f3f4f6;margin-bottom:14px"><span style="display:inline-block;background:#374151;color:#fff;font-size:11px;font-weight:700;padding:4px 8px;flex-shrink:0;margin-right:12px;letter-spacing:1px">第2条</span><p style="font-size:14px;color:#1f2937;line-height:1.8;margin:0">资金证明最低要求提升至 AUD $29,710/年，需持有满 3 个月。</p></div>
<div style="background:#f3f4f6;padding:10px 14px;border-radius:4px"><p style="font-size:11px;color:#1f2937;margin:0">⚠️ 本文为政策解读，不构成法律建议。具体情况请咨询持牌移民代理。</p></div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:2px solid #1f2937"><p style="font-size:11px;color:#9ca3af;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P24 榜单盘点 × T19 活力橙
{id:"P24",name:"榜单盘点",file:"listicle",group:"资讯速递",desc:"TOP N / 年度盘点",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="display:inline-block;background:#ea580c;padding:4px 16px;margin-bottom:10px"><p style="font-size:10px;color:#fff;margin:0;font-weight:700;letter-spacing:2px">TOP 5 榜单</p></div>
<h1 style="font-size:20px;font-weight:700;color:#1f2937;margin:0 0 14px">留学生最值得考的 5 张职业证书</h1>
<div style="display:flex;align-items:stretch;margin-bottom:10px;border:2px solid #ea580c">
  <div style="background:#ea580c;padding:14px 16px;display:flex;align-items:center"><p style="font-size:24px;font-weight:800;color:#fff;margin:0">01</p></div>
  <div style="padding:14px 16px;flex:1"><p style="font-size:15px;font-weight:700;color:#1f2937;margin:0 0 4px">CFA 特许金融分析师</p><p style="font-size:12px;color:#9ca3af;margin:0">金融行业黄金标准，全球认可度最高，平均薪资溢价 38%</p></div>
</div>
<div style="display:flex;align-items:stretch;margin-bottom:8px;border:1px solid #fff7ed">
  <div style="background:#fff7ed;padding:12px 14px;display:flex;align-items:center"><p style="font-size:20px;font-weight:800;color:#ea580c;margin:0">02</p></div>
  <div style="padding:12px 14px;flex:1"><p style="font-size:14px;font-weight:700;color:#1f2937;margin:0 0 3px">PMP 项目管理专业人士</p><p style="font-size:12px;color:#9ca3af;margin:0">IT、咨询、制造业通用，投入产出比最佳</p></div>
</div>
<div style="display:flex;align-items:stretch;margin-bottom:8px;border:1px solid #fff7ed">
  <div style="background:#fff7ed;padding:12px 14px;display:flex;align-items:center"><p style="font-size:20px;font-weight:800;color:#ea580c;margin:0">03</p></div>
  <div style="padding:12px 14px;flex:1"><p style="font-size:14px;font-weight:700;color:#1f2937;margin:0 0 3px">AWS 云从业者认证</p><p style="font-size:12px;color:#9ca3af;margin:0">科技公司面试加分项，备考仅需 6 周</p></div>
</div>
<div style="display:flex;align-items:stretch;border:1px solid #fff7ed">
  <div style="background:#fff7ed;padding:12px 14px;display:flex;align-items:center"><p style="font-size:20px;font-weight:800;color:#ea580c;margin:0">04</p></div>
  <div style="padding:12px 14px;flex:1"><p style="font-size:14px;font-weight:700;color:#1f2937;margin:0 0 3px">ACCA 特许公认会计师</p><p style="font-size:12px;color:#9ca3af;margin:0">四大会计师事务所敲门砖，英联邦国家尤为认可</p></div>
</div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:2px solid #1f2937"><p style="font-size:11px;color:#9ca3af;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P31 快讯速报 × T07 金融酒红
{id:"P31",name:"快讯速报",file:"news-flash",group:"资讯速递",desc:"早报 / 行业快讯",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="background:#7f1d1d;padding:6px 0;margin:0 -14px 14px;text-align:center"><p style="font-size:11px;color:#fff;margin:0;font-weight:700;letter-spacing:3px">⚡ 留学早报</p></div>
<h1 style="font-size:20px;font-weight:700;color:#1c1917;margin:0 0 4px">2026.06.09 周一 · 5 条要闻</h1>
<p style="font-size:11px;color:#a8a29e;margin:0 0 14px">留学认知社 · 每日早 8 点更新</p>
<div style="padding:14px 0 14px 12px;border-bottom:1px solid #fef2f2;border-left:3px solid #dc2626">
  <div style="display:flex;gap:10px;align-items:flex-start"><span style="font-size:11px;color:#dc2626;font-weight:700;font-family:monospace;flex-shrink:0">08:01</span><div><p style="font-size:14px;font-weight:700;color:#1c1917;margin:0 0 4px"><span style="background:#dc2626;color:#fff;font-size:9px;padding:2px 6px;margin-right:4px">重要</span>墨大 2027 S1 申请通道提前开放</p><p style="font-size:12px;color:#a8a29e;margin:0;line-height:1.6">比往年提前两个月，Commerce 和 IT 预计首轮满位。建议提前准备申请材料。</p></div></div>
</div>
<div style="padding:14px 0;border-bottom:1px solid #fef2f2">
  <div style="display:flex;gap:10px;align-items:flex-start"><span style="font-size:11px;color:#a8a29e;font-family:monospace;flex-shrink:0">08:05</span><div><p style="font-size:14px;font-weight:700;color:#1c1917;margin:0 0 4px">澳元汇率跌破 4.55，换汇窗口再现</p><p style="font-size:12px;color:#a8a29e;margin:0;line-height:1.6">受美联储鹰派信号影响，建议分批换汇降低风险。</p></div></div>
</div>
<div style="padding:14px 0 0">
  <div style="display:flex;gap:10px;align-items:flex-start"><span style="font-size:11px;color:#a8a29e;font-family:monospace;flex-shrink:0">08:12</span><div><p style="font-size:14px;font-weight:700;color:#1c1917;margin:0 0 4px">移民局公布 5 月签证审批数据，学生签平均 29 天</p><p style="font-size:12px;color:#a8a29e;margin:0;line-height:1.6">较 4 月缩短 6 天，境外递交审批速度明显加快。</p></div></div>
</div>
<div style="background:#7f1d1d;margin:16px -14px 0;padding:12px 14px"><p style="font-size:11px;color:rgba(255,255,255,0.6);margin:0">持续关注 · 有新进展第一时间更新 · 留学认知社</p></div>
</div>`},

// P29 时间线 × T09 留学国际
{id:"P29",name:"时间线",file:"timeline",group:"资讯速递",desc:"大事记 / 里程碑",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<h1 style="font-size:20px;font-weight:700;color:#1c1917;margin:0 0 16px">墨尔本大学 200 年：从荒野到全球 Top 14</h1>
<div style="display:flex;align-items:flex-start;margin-left:6px">
  <div style="display:flex;flex-direction:column;align-items:center;margin-right:14px;flex-shrink:0">
    <div style="width:14px;height:14px;background:#1e3a5f;border-radius:7px;border:3px solid #b8860b"></div>
    <div style="width:2px;height:52px;background:#1e3a5f;opacity:0.2"></div>
    <div style="width:10px;height:10px;background:#1e3a5f;border-radius:5px"></div>
    <div style="width:2px;height:52px;background:#1e3a5f;opacity:0.2"></div>
    <div style="width:14px;height:14px;background:#1e3a5f;border-radius:7px;border:3px solid #b8860b"></div>
    <div style="width:2px;height:52px;background:#1e3a5f;opacity:0.2"></div>
    <div style="width:10px;height:10px;background:#a8a29e;border-radius:5px"></div>
  </div>
  <div>
    <div style="background:#1e3a5f;padding:12px 16px;margin-bottom:10px"><p style="font-size:10px;color:rgba(255,255,255,0.5);margin:0 0 3px">⭐ 里程碑 · 1853</p><p style="font-size:14px;color:#fff;margin:0;font-weight:600">正式建校，维多利亚殖民地第一所大学</p></div>
    <p style="font-size:11px;color:#1e3a5f;font-weight:700;margin:0 0 3px">1855</p>
    <p style="font-size:14px;color:#1c1917;margin:0 0 16px;line-height:1.8">首批 16 名学生入学，全部为男性。校址在现今 Parkville 主校区。</p>
    <div style="background:#1e3a5f;padding:12px 16px;margin-bottom:10px"><p style="font-size:10px;color:rgba(255,255,255,0.5);margin:0 0 3px">⭐ 里程碑 · 2008</p><p style="font-size:14px;color:#fff;margin:0;font-weight:600">全面推行「墨尔本模式」，本科改为通识教育</p></div>
    <p style="font-size:13px;color:#a8a29e;margin:0">未完待续…</p>
  </div>
</div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #f8f6f0"><p style="font-size:11px;color:#a8a29e;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P12 周刊简报 × T71 电光靛蓝
{id:"P12",name:"周刊简报",file:"weekly-briefing",group:"资讯速递",desc:"周报 / 周刊",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="display:inline-block;background:#4f46e5;border-radius:14px;padding:3px 16px;margin-bottom:10px"><p style="font-size:11px;color:#fff;margin:0;font-weight:600">Vol.24 · 2026.06.09</p></div>
<h1 style="font-size:20px;font-weight:700;color:#1e1b4b;margin:0 0 14px">留学认知社周刊 · 本周 3 件大事</h1>
<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:14px">
  <div style="width:28px;height:28px;border-radius:14px;background:#4f46e5;color:#fff;font-size:12px;text-align:center;line-height:28px;font-weight:700;flex-shrink:0">1</div>
  <div><p style="font-size:15px;font-weight:700;color:#1e1b4b;margin:0 0 4px">墨大 2027 S1 申请提前开放</p><p style="font-size:14px;color:#a5b4fc;margin:0;line-height:1.7">比往年提前两个月，Commerce 和 IT 首轮预计满位。现在就要开始准备申请材料。</p></div>
</div>
<div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:14px">
  <div style="width:28px;height:28px;border-radius:14px;background:#4f46e5;color:#fff;font-size:12px;text-align:center;line-height:28px;font-weight:700;flex-shrink:0">2</div>
  <div><p style="font-size:15px;font-weight:700;color:#1e1b4b;margin:0 0 4px">485 职业清单迎来年度更新</p><p style="font-size:14px;color:#a5b4fc;margin:0;line-height:1.7">新增 15 个 STEM 相关职业，人文社科类继续缩减。选专业的同学现在就需要对标最新清单。</p></div>
</div>
<div style="display:flex;align-items:flex-start;gap:10px">
  <div style="width:28px;height:28px;border-radius:14px;background:#4f46e5;color:#fff;font-size:12px;text-align:center;line-height:28px;font-weight:700;flex-shrink:0">3</div>
  <div><p style="font-size:15px;font-weight:700;color:#1e1b4b;margin:0 0 4px">澳元跌至近年低点</p><p style="font-size:14px;color:#a5b4fc;margin:0;line-height:1.7">汇率跌破 4.55，对需要换汇的同学来说是个窗口期。建议分批操作，对冲汇率风险。</p></div>
</div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #eef2ff"><p style="font-size:11px;color:#a5b4fc;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P23 社群动态 × T20 创意紫
{id:"P23",name:"社群动态",file:"community-update",group:"资讯速递",desc:"社群 / 圈子周报",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<h1 style="font-size:20px;font-weight:700;color:#1f2937;margin:0 0 6px">社群周报 #18</h1>
<p style="font-size:12px;color:#9ca3af;margin:0 0 16px">留学认知社 · 2026.06.02 - 06.08</p>
<div style="display:flex;gap:8px;margin-bottom:18px">
  <div style="flex:1;background:#f5f3ff;padding:14px 10px;border-radius:8px;text-align:center"><p style="font-size:26px;font-weight:800;color:#7c3aed;margin:0">247</p><p style="font-size:10px;color:#9ca3af;margin:4px 0 0">总成员</p></div>
  <div style="flex:1;background:#f5f3ff;padding:14px 10px;border-radius:8px;text-align:center"><p style="font-size:26px;font-weight:800;color:#7c3aed;margin:0">+24</p><p style="font-size:10px;color:#9ca3af;margin:4px 0 0">本周新增</p></div>
  <div style="flex:1;background:#f5f3ff;padding:14px 10px;border-radius:8px;text-align:center"><p style="font-size:26px;font-weight:800;color:#7c3aed;margin:0">5</p><p style="font-size:10px;color:#9ca3af;margin:4px 0 0">精华帖</p></div>
</div>
<p style="font-size:15px;font-weight:700;color:#1f2937;margin:0 0 10px">🔥 本周热议</p>
<p style="font-size:15px;color:#1f2937;margin:0 0 14px;line-height:2.0">墨大 Commerce 2027 S1 con offer 开始发了！群里已有 3 位同学收到，均分区间 85-90。有意向申请的同学注意：今年开放时间比去年早两个月，建议尽快递交。</p>
<div style="background:#f5f3ff;padding:12px 16px;border-left:3px solid #7c3aed;border-radius:0 6px 6px 0"><p style="font-size:13px;color:#1f2937;margin:0;line-height:1.7"><span style="font-weight:700;color:#7c3aed">本周精华：</span>@小明分享了一份墨大 IT 面试题库，涵盖 2022-2025 年真题，群文件已上传，请自取。</p></div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #f5f3ff"><p style="font-size:11px;color:#9ca3af;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},
// P14 产品发布 × T71 电光靛蓝
{id:"P14",name:"产品发布",file:"product-launch",group:"商业营销",desc:"产品发布 / changelog",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><div style="border:1.5px solid #4f46e5;border-radius:4px;padding:3px 10px"><p style="font-size:11px;color:#4f46e5;margin:0;font-weight:600">v2.0</p></div><p style="font-size:11px;color:#a5b4fc;margin:0">2026.06.09 · 全面上线</p></div>
<h1 style="font-size:20px;font-weight:700;color:#1e1b4b;margin:0 0 8px">留学认知社排版系统全新升级</h1>
<p style="font-size:13px;color:#a5b4fc;margin:0 0 16px">更好看、更好用、更多选择</p>
<div style="background:#eef2ff;border-left:3px solid #4f46e5;padding:14px 16px;border-radius:0 8px 8px 0;margin-bottom:10px"><p style="font-size:14px;color:#1e1b4b;margin:0;line-height:1.7"><span style="font-weight:700;color:#4f46e5">✦ 新增</span> 108 种行业配色方案，从极简墨黑到赛博朋克全覆盖</p></div>
<div style="background:#eef2ff;border-left:3px solid #4f46e5;padding:14px 16px;border-radius:0 8px 8px 0;margin-bottom:10px"><p style="font-size:14px;color:#1e1b4b;margin:0;line-height:1.7"><span style="font-weight:700;color:#4f46e5">✦ 新增</span> 36 套排版人格模板，覆盖长文、数据、教程、营销全场景</p></div>
<div style="background:#eef2ff;border-left:3px solid #818cf8;padding:14px 16px;border-radius:0 8px 8px 0;margin-bottom:16px"><p style="font-size:14px;color:#1e1b4b;margin:0;line-height:1.7"><span style="font-weight:700;color:#818cf8">⚡ 优化</span> 深色模式兼容性全面提升，夜间阅读体验大幅改善</p></div>
<p style="font-size:14px;color:#a5b4fc;margin:0;line-height:1.7">感谢所有内测用户的反馈。这次更新历时 3 个月，我们做了超过 200 次迭代。如果你遇到任何问题，欢迎在评论区告知。</p>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #eef2ff"><p style="font-size:11px;color:#a5b4fc;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P35 政务公报 × 专属政务红
{id:"P35",name:"政务公报",file:"government-report",group:"商业营销",desc:"政府 / 国企 / 央企",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="background:#991b1b;padding:14px 20px;margin:0 -14px 0;text-align:center"><p style="font-size:10px;color:rgba(255,255,255,0.4);margin:0 0 6px;letter-spacing:4px">XX省教育厅</p><div style="height:1px;background:rgba(255,255,255,0.1);margin-bottom:10px"></div><h1 style="font-size:18px;font-weight:700;color:#fff;margin:0;line-height:1.4">关于进一步规范中小学课后服务工作的通知</h1></div>
<div style="display:flex;justify-content:space-between;padding:10px 0;margin-bottom:14px;border-bottom:2px solid #991b1b"><p style="font-size:11px;color:#9ca3af;margin:0">X教基〔2026〕第 18 号</p><p style="font-size:11px;color:#9ca3af;margin:0">2026年6月5日</p></div>
<p style="font-size:15px;color:#1f2937;margin:0 0 14px;line-height:2.0">各市、县（市、区）教育局，各学校：</p>
<p style="font-size:15px;color:#1f2937;margin:0 0 14px;line-height:2.0;text-indent:2em">为贯彻落实"双减"政策精神，进一步提升课后服务质量，现就相关事项通知如下。</p>
<p style="font-size:16px;font-weight:700;color:#1f2937;margin:0 0 6px">一、总体要求</p>
<div style="width:36px;height:2px;background:#991b1b;margin-bottom:12px"></div>
<p style="font-size:15px;color:#1f2937;margin:0 0 16px;line-height:2.0;text-indent:2em">各地教育行政部门要坚持<span style="color:#991b1b;font-weight:700">公益性、普惠性</span>原则，确保课后服务覆盖率不低于 95%，严禁变相收费和强制参加。</p>
<p style="font-size:16px;font-weight:700;color:#1f2937;margin:0 0 6px">二、重点任务</p>
<div style="width:36px;height:2px;background:#991b1b;margin-bottom:12px"></div>
<div style="display:flex;align-items:flex-start;margin-bottom:8px"><span style="width:6px;height:6px;background:#991b1b;border-radius:3px;flex-shrink:0;margin:8px 10px 0 4px"></span><p style="font-size:14px;color:#1f2937;margin:0;line-height:1.9">鼓励学校引入科学、体育、艺术类课程，丰富课后服务内容供给。</p></div>
<div style="display:flex;align-items:flex-start;margin-bottom:14px"><span style="width:6px;height:6px;background:#991b1b;border-radius:3px;flex-shrink:0;margin:8px 10px 0 4px"></span><p style="font-size:14px;color:#1f2937;margin:0;line-height:1.9">严禁将课后服务变相为集体教学或统一补课。</p></div>
<p style="font-size:15px;color:#1f2937;margin:0;text-align:right">XX省教育厅<br/><span style="font-size:12px;color:#9ca3af">二〇二六年六月五日</span></p>
<div style="margin:16px -14px 0;padding:10px 14px;background:#f3f4f6;border-top:2px solid #991b1b"><p style="font-size:11px;color:#9ca3af;margin:0">本文为公开资料整理，不代表官方立场。</p></div>
</div>`},

// P33 邀请函 × T66 法式优雅
{id:"P33",name:"邀请函",file:"invitation",group:"商业营销",desc:"活动邀请 / 请柬",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif;text-align:center">
<div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:18px"><div style="width:50px;height:1px;background:#1e3a5f;opacity:0.3"></div><span style="font-size:11px;color:#1e3a5f;letter-spacing:3px;font-weight:600">INVITATION</span><div style="width:50px;height:1px;background:#1e3a5f;opacity:0.3"></div></div>
<p style="font-size:12px;color:#a89880;margin:0 0 10px;letter-spacing:2px">留学认知社 诚邀您出席</p>
<h1 style="font-size:22px;font-weight:700;color:#1c1917;margin:0 0 8px;line-height:1.35">2026 澳洲留学趋势分享沙龙</h1>
<p style="font-size:14px;color:#a89880;margin:0 0 20px;line-height:1.7">新政之下，如何重新规划你的留学路径</p>
<div style="border:1px solid #faf8f3;border-radius:12px;padding:20px 24px;max-width:260px;margin:0 auto 18px">
  <div style="margin-bottom:14px"><p style="font-size:10px;color:#a89880;margin:0 0 4px;letter-spacing:2px">日期</p><p style="font-size:15px;font-weight:700;color:#1c1917;margin:0">2026 年 7 月 12 日（周六）</p></div>
  <div style="height:1px;background:#faf8f3;margin-bottom:14px"></div>
  <div style="margin-bottom:14px"><p style="font-size:10px;color:#a89880;margin:0 0 4px;letter-spacing:2px">时间</p><p style="font-size:15px;font-weight:700;color:#1c1917;margin:0">14:00 – 17:00</p></div>
  <div style="height:1px;background:#faf8f3;margin-bottom:14px"></div>
  <div><p style="font-size:10px;color:#a89880;margin:0 0 4px;letter-spacing:2px">地点</p><p style="font-size:15px;font-weight:700;color:#1c1917;margin:0">Melbourne Central L5</p><p style="font-size:12px;color:#a89880;margin:4px 0 0">211 La Trobe St, Melbourne</p></div>
</div>
<div style="background:#faf8f3;border-radius:10px;padding:14px;max-width:260px;margin:0 auto 20px"><p style="font-size:12px;color:#1e3a5f;margin:0 0 4px;font-weight:700">报名方式</p><p style="font-size:13px;color:#1c1917;margin:0">扫码报名 · 限 30 席 · 免费参加</p></div>
<div style="display:flex;align-items:center;justify-content:center;gap:10px"><div style="width:50px;height:1px;background:#1e3a5f;opacity:0.3"></div><span style="font-size:11px;color:#a89880;letter-spacing:2px">期待您的到来</span><div style="width:50px;height:1px;background:#1e3a5f;opacity:0.3"></div></div>
</div>`},

// P19 品牌故事 × T66 法式优雅
{id:"P19",name:"品牌故事",file:"brand-story",group:"商业营销",desc:"品牌故事 / 创业叙事",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><div style="border:1px solid #1e3a5f;border-radius:3px;width:22px;height:22px;text-align:center;line-height:22px"><p style="font-size:10px;color:#1e3a5f;margin:0;font-weight:700">壹</p></div><p style="font-size:12px;color:#a89880;margin:0;letter-spacing:2px">起源篇</p></div>
<h1 style="font-size:22px;font-weight:700;color:#1c1917;margin:0 0 10px;line-height:1.35">一间书房的故事</h1>
<p style="font-size:15px;color:#1c1917;margin:0 0 16px;line-height:2.0">2018 年冬天，我辞掉了在留学机构的工作。没有商业计划书，没有种子资金，只有一台笔记本电脑和一个念头——留学咨询这件事，应该可以做得更诚实一点。</p>
<p style="font-size:15px;color:#1c1917;margin:0 0 16px;line-height:2.0">「留学认知社」这个名字想了三天。不叫 XX 留学、XX 教育，因为我卖的不是中介服务，而是<span style="font-weight:700;color:#1e3a5f">认知</span>——帮你看懂规则、理解选择、做出属于自己的判断。</p>
<div style="background:#faf8f3;padding:16px 20px;text-align:center;margin-bottom:16px"><p style="font-size:15px;font-weight:600;color:#1c1917;margin:0;font-style:italic;line-height:1.8">"不做信息的搬运工，<br/>做认知的建设者。"</p></div>
<p style="font-size:15px;color:#1c1917;margin:0;line-height:2.0">六年后，这句话依然是我对每一位咨询者做出的承诺：我告诉你的，是我认为对你真正有用的，哪怕它意味着更少的佣金。</p>
<div style="margin:24px 0 0;padding:16px 0 0;border-top:1px solid #faf8f3"><p style="font-size:11px;color:#a89880;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P22 活动回顾 × T52 体育竞技
{id:"P22",name:"活动回顾",file:"event-recap",group:"商业营销",desc:"活动 / 峰会复盘",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="background:#eff6ff;padding:16px;margin:0 -14px 16px"><h1 style="font-size:20px;font-weight:700;color:#1e293b;margin:0 0 6px">2026 澳洲留学趋势分享沙龙 · 回顾</h1><p style="font-size:12px;color:#94a3b8;margin:0">2026.06.01 · Melbourne Central · 时长 3 小时</p></div>
<div style="display:flex;gap:8px;margin-bottom:16px">
  <div style="flex:1;background:#eff6ff;border-radius:8px;padding:12px;text-align:center"><p style="font-size:26px;font-weight:800;color:#1d4ed8;margin:0">128</p><p style="font-size:10px;color:#94a3b8;margin:3px 0 0">参会人数</p></div>
  <div style="flex:1;background:#eff6ff;border-radius:8px;padding:12px;text-align:center"><p style="font-size:26px;font-weight:800;color:#1d4ed8;margin:0">4.9</p><p style="font-size:10px;color:#94a3b8;margin:3px 0 0">满意度</p></div>
  <div style="flex:1;background:#eff6ff;border-radius:8px;padding:12px;text-align:center"><p style="font-size:26px;font-weight:800;color:#1d4ed8;margin:0">92%</p><p style="font-size:10px;color:#94a3b8;margin:3px 0 0">推荐意愿</p></div>
</div>
<p style="font-size:15px;color:#1e293b;margin:0 0 16px;line-height:2.0">本次沙龙聚焦三大议题：GS 新政影响、热门专业趋势、毕业后留澳路径。参会者以大三大四学生和家长为主，现场提问环节延长了 40 分钟，仍有大量问题未能一一作答。</p>
<div style="background:#eff6ff;padding:14px 16px;border-left:3px solid #f59e0b;border-radius:0 8px 8px 0"><p style="font-size:13px;color:#1e293b;margin:0;line-height:1.7"><span style="font-weight:700;color:#1d4ed8">现场金句：</span>「选学校之前先选城市，选城市之前先想清楚你想要什么样的生活。」——活动嘉宾 Edward</p></div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #eff6ff"><p style="font-size:11px;color:#94a3b8;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},
// P21 招聘 × T29 物流蓝灰
{id:"P21",name:"招聘",file:"recruitment",group:"商业营销",desc:"招聘 / 岗位 / JD",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<h1 style="font-size:20px;font-weight:700;color:#1e293b;margin:0 0 6px">我们在找你</h1>
<p style="font-size:13px;color:#94a3b8;margin:0 0 16px">留学认知社 · 2026 秋季招聘</p>
<div style="border:1px solid #eff6ff;border-radius:10px;padding:16px;margin-bottom:14px">
  <p style="font-size:16px;font-weight:700;color:#1e293b;margin:0 0 6px">留学内容编辑（全职）</p>
  <p style="font-size:12px;color:#94a3b8;margin:0 0 12px">📍 墨尔本 / 远程 · 50-70K AUD</p>
  <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px"><span style="font-size:11px;color:#1e40af;background:#eff6ff;padding:3px 10px;border-radius:10px">留学行业经验</span><span style="font-size:11px;color:#1e40af;background:#eff6ff;padding:3px 10px;border-radius:10px">中英双语</span><span style="font-size:11px;color:#1e40af;background:#eff6ff;padding:3px 10px;border-radius:10px">数据敏感度</span></div>
  <p style="font-size:14px;color:#1e293b;margin:0;line-height:1.8">负责公众号+小红书内容策划与撰写，要求有留学行业认知，能写出「不像 AI 写的」深度分析。有澳洲留学或工作经历优先。</p>
</div>
<div style="background:#eff6ff;border-radius:8px;padding:14px 16px;margin-bottom:14px">
  <p style="font-size:13px;font-weight:700;color:#1e40af;margin:0 0 6px">我们能给你的</p>
  <p style="font-size:14px;color:#1e293b;margin:0 0 4px;line-height:1.7">· 远程工作，时间自由</p>
  <p style="font-size:14px;color:#1e293b;margin:0 0 4px;line-height:1.7">· 留学行业最前线的信息资源</p>
  <p style="font-size:14px;color:#1e293b;margin:0;line-height:1.7">· 一个真正重视内容质量的团队</p>
</div>
<div style="background:#1e40af;border-radius:10px;padding:12px 0;text-align:center"><p style="font-size:14px;color:#fff;margin:0;font-weight:600">发送简历至 work@liuxue.com →</p></div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #eff6ff"><p style="font-size:11px;color:#94a3b8;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P16 校园通知 × 专属行政红
{id:"P16",name:"校园通知",file:"campus-notice",group:"商业营销",desc:"通知 / 公告 / 行政",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="background:#dc2626;padding:8px 14px;margin:0 -14px 0;text-align:center"><p style="font-size:10px;color:rgba(255,255,255,0.6);margin:0;letter-spacing:3px">XX大学教务处</p></div>
<div style="border-bottom:2px solid #dc2626;padding:12px 0;margin-bottom:14px"><h1 style="font-size:18px;font-weight:700;color:#1f2937;margin:0 0 6px;text-align:center;line-height:1.4">关于 2026-2027 学年第一学期<br/>选课安排的通知</h1><p style="font-size:11px;color:#9ca3af;margin:0;text-align:center">教务〔2026〕第 42 号 · 2026.06.08</p></div>
<p style="font-size:15px;color:#1f2937;margin:0 0 14px;line-height:2.0">各院系、各位同学：</p>
<p style="font-size:15px;color:#1f2937;margin:0 0 14px;line-height:2.0;text-indent:2em">根据学校 2026-2027 学年教学安排，现将第一学期选课相关事宜通知如下：</p>
<p style="font-size:15px;color:#1f2937;margin:0 0 8px;font-weight:700">一、选课时间</p>
<p style="font-size:15px;color:#1f2937;margin:0 0 14px;line-height:2.0;text-indent:2em">2026 年 7 月 1 日 9:00 至 7 月 7 日 17:00。逾期系统自动关闭，不予补选。</p>
<p style="font-size:15px;color:#1f2937;margin:0 0 8px;font-weight:700">二、注意事项</p>
<p style="font-size:15px;color:#1f2937;margin:0 0 14px;line-height:2.0;text-indent:2em">选课前请仔细核对学分要求，确保所选课程满足毕业条件。如有疑问请在选课结束前联系学院教务老师。</p>
<p style="font-size:15px;color:#1f2937;margin:0;text-align:right">教务处<br/><span style="font-size:12px;color:#9ca3af">2026年6月8日</span></p>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:2px solid #1f2937"><p style="font-size:11px;color:#9ca3af;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P17 本地指南 × T12 温暖陶土
{id:"P17",name:"本地指南",file:"local-guide",group:"生活场景",desc:"探店 / 攻略 / 打卡",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><div style="width:12px;height:16px;background:#9a6b4a;border-radius:6px 6px 50% 50%;opacity:0.8"></div><h1 style="font-size:20px;font-weight:700;color:#3f3f3f;margin:0">Lygon Street 咖啡地图</h1></div>
<p style="font-size:13px;color:#a89585;margin:0 0 16px">墨尔本最有咖啡灵魂的一条街，5 家必打卡</p>
<div style="background:#fdf8f4;border-radius:10px;padding:16px;margin-bottom:10px">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><p style="font-size:16px;font-weight:700;color:#3f3f3f;margin:0">Seven Seeds</p><p style="font-size:12px;color:#9a6b4a;margin:0;font-weight:600">⭐ 4.8</p></div>
  <p style="font-size:14px;color:#3f3f3f;margin:0 0 8px;line-height:1.8">墨尔本精品咖啡的标杆，Flat White 做得教科书级别。空间宽敞明亮，适合带电脑工作半天。</p>
  <p style="font-size:11px;color:#a89585;margin:0">📍 114 Berkeley St · ☕ Flat White / Pour Over · 💰 $5-8</p>
</div>
<div style="background:#fdf8f4;border-radius:10px;padding:16px;margin-bottom:10px">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><p style="font-size:16px;font-weight:700;color:#3f3f3f;margin:0">DOC Espresso</p><p style="font-size:12px;color:#9a6b4a;margin:0;font-weight:600">⭐ 4.6</p></div>
  <p style="font-size:14px;color:#3f3f3f;margin:0 0 8px;line-height:1.8">只有 12 个座位的意式小店，老板 Marco 能记住每个常客的口味。高峰时段需要排队，但非常值得。</p>
  <p style="font-size:11px;color:#a89585;margin:0">📍 Lygon St 222号 · ⏰ 周一至五 7:00-15:00 · 💰 $4-6</p>
</div>
<div style="background:#fdf8f4;border-radius:10px;padding:14px"><p style="font-size:13px;color:#3f3f3f;margin:0;line-height:1.7"><span style="font-weight:700;color:#9a6b4a">编辑建议：</span>避开早 8-9 点高峰，工作日下午是最舒服的时段。带上耳机，点一杯 flat white，一个下午就这么过去了。</p></div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #fdf8f4"><p style="font-size:11px;color:#a89585;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P28 好物种草 × T55 美妆蜜桃
{id:"P28",name:"好物种草",file:"recommendation",group:"生活场景",desc:"好物推荐 / 种草",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><div style="background:#fd79a8;border-radius:12px;padding:3px 12px"><p style="font-size:10px;color:#fff;margin:0;font-weight:600">♥ 好物推荐</p></div><p style="font-size:11px;color:#d4849e;margin:0">精选 3 件 · 亲测好用</p></div>
<h1 style="font-size:20px;font-weight:700;color:#3d1f30;margin:0 0 14px">留学生行李箱必带的 3 样护肤好物</h1>
<div style="border:1px solid #ffeef5;border-radius:12px;overflow:hidden;margin-bottom:14px">
  <div style="background:#ffeef5;padding:32px;text-align:center"><p style="font-size:11px;color:#d4849e;margin:0">[ 产品图片 ]</p></div>
  <div style="padding:16px">
    <div style="display:flex;justify-content:space-between;margin-bottom:6px"><p style="font-size:16px;font-weight:700;color:#3d1f30;margin:0">珂润面霜</p><p style="font-size:16px;font-weight:700;color:#e84393;margin:0">¥128</p></div>
    <p style="font-size:14px;color:#3d1f30;margin:0 0 10px;line-height:1.8">澳洲干燥气候的救星，成分温和到敏感肌都能用。国内价格是澳洲当地的一半，来之前一定要屯货。</p>
    <div style="display:flex;gap:6px"><span style="font-size:11px;color:#e84393;background:#ffeef5;padding:3px 10px;border-radius:10px">敏感肌友好</span><span style="font-size:11px;color:#e84393;background:#ffeef5;padding:3px 10px;border-radius:10px">秋冬必备</span></div>
  </div>
</div>
<div style="background:#ffeef5;padding:14px 16px;border-radius:8px"><p style="font-size:14px;color:#3d1f30;margin:0;line-height:1.7"><span style="font-weight:700;color:#e84393">编辑说：</span>墨尔本第一个冬天脸脱皮到绝望，室友塞给我这罐面霜，三天就好了。现在是我的永久回购款。</p></div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #ffeef5"><p style="font-size:11px;color:#d4849e;margin:0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P32 食谱菜谱 × T13 美食番茄
{id:"P32",name:"食谱菜谱",file:"recipe",group:"生活场景",desc:"食谱 / 做法 / 烹饪",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="background:#fff7ed;padding:40px 20px;margin:0 -14px 16px;text-align:center"><p style="font-size:11px;color:#b0a090;margin:0">[ 成品图 ]</p></div>
<h1 style="font-size:22px;font-weight:800;color:#3f3f3f;margin:0 0 6px">番茄牛腩煲</h1>
<p style="font-size:13px;color:#b0a090;margin:0 0 14px">留学生宿舍也能做的暖胃硬菜</p>
<div style="display:flex;border-top:1px solid #fff7ed;border-bottom:1px solid #fff7ed;margin-bottom:16px">
  <div style="flex:1;padding:10px;text-align:center;border-right:1px solid #fff7ed"><p style="font-size:10px;color:#b0a090;margin:0 0 2px">难度</p><p style="font-size:13px;font-weight:700;color:#dc2626;margin:0">⭐⭐</p></div>
  <div style="flex:1;padding:10px;text-align:center;border-right:1px solid #fff7ed"><p style="font-size:10px;color:#b0a090;margin:0 0 2px">用时</p><p style="font-size:13px;font-weight:700;color:#dc2626;margin:0">90 分钟</p></div>
  <div style="flex:1;padding:10px;text-align:center"><p style="font-size:10px;color:#b0a090;margin:0 0 2px">份量</p><p style="font-size:13px;font-weight:700;color:#dc2626;margin:0">3-4 人份</p></div>
</div>
<div style="background:#dc2626;padding:10px 14px;margin-bottom:2px"><p style="font-size:12px;color:#fff;margin:0;font-weight:700">🥬 食材清单</p></div>
<div style="display:flex;justify-content:space-between;padding:8px 14px;background:#fff7ed"><p style="font-size:14px;color:#3f3f3f;margin:0">牛腩</p><p style="font-size:14px;color:#b0a090;margin:0">500g</p></div>
<div style="display:flex;justify-content:space-between;padding:8px 14px"><p style="font-size:14px;color:#3f3f3f;margin:0">番茄</p><p style="font-size:14px;color:#b0a090;margin:0">3 个（大）</p></div>
<div style="display:flex;justify-content:space-between;padding:8px 14px;background:#fff7ed"><p style="font-size:14px;color:#3f3f3f;margin:0">番茄膏</p><p style="font-size:14px;color:#b0a090;margin:0">2 大勺</p></div>
<div style="display:flex;justify-content:space-between;padding:8px 14px"><p style="font-size:14px;color:#3f3f3f;margin:0">洋葱</p><p style="font-size:14px;color:#b0a090;margin:0">1 个</p></div>
<div style="margin-top:16px;display:flex;align-items:flex-start;gap:12px;padding:14px;border:1px solid #fff7ed;border-radius:8px">
  <div style="width:30px;height:30px;border-radius:15px;background:#dc2626;color:#fff;font-size:13px;text-align:center;line-height:30px;font-weight:700;flex-shrink:0">1</div>
  <p style="font-size:14px;color:#3f3f3f;margin:0;line-height:1.8">牛腩切块，冷水入锅焯水 3 分钟，捞出洗净浮沫备用。</p>
</div>
<div style="margin-top:8px;padding:12px 16px;background:#fff7ed;border-radius:8px">
  <p style="font-size:12px;color:#dc2626;margin:0 0 4px;font-weight:700">💡 小贴士</p>
  <p style="font-size:13px;color:#3f3f3f;margin:0;line-height:1.7">番茄膏是灵魂，Coles 有卖 Leggo's 牌的，一罐不到 $3。没有的话用番茄酱代替，但味道会淡一些。</p>
</div>
<div style="margin:16px 0 0;padding:16px 0 0;border-top:1px solid #fff7ed"><p style="font-size:11px;color:#b0a090;margin:0;text-align:center">做出来了记得拍照给我看 📸</p><p style="font-size:11px;color:#b0a090;margin:6px 0 0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},

// P36 清单指南 × T09 留学国际
{id:"P36",name:"清单指南",file:"checklist",group:"生活场景",desc:"清单 / Checklist",
html:`<div style="max-width:100%;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',sans-serif">
<div style="display:inline-block;background:#1e3a5f;color:#fff;font-size:10px;padding:3px 14px;font-weight:700;margin-bottom:10px;letter-spacing:2px">✅ CHECKLIST</div>
<h1 style="font-size:20px;font-weight:700;color:#1c1917;margin:0 0 6px">澳洲留学行前准备清单</h1>
<p style="font-size:13px;color:#a8a29e;margin:0 0 14px">出发前 8 周开始，逐项检查不遗漏</p>
<div style="padding:12px 16px;background:#f8f6f0;border-radius:8px;margin-bottom:16px">
  <div style="display:flex;justify-content:space-between;margin-bottom:8px"><p style="font-size:12px;color:#1c1917;margin:0;font-weight:600">共 12 项</p><p style="font-size:12px;color:#1e3a5f;margin:0;font-weight:700">建议提前 8 周开始</p></div>
  <div style="height:6px;background:#fff;border-radius:3px;overflow:hidden"><div style="width:25%;height:6px;background:#1e3a5f;border-radius:3px"></div></div>
</div>
<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><div style="width:3px;height:16px;background:#1e3a5f;border-radius:2px"></div><p style="font-size:14px;font-weight:700;color:#1c1917;margin:0">证件文件</p><p style="font-size:11px;color:#a8a29e;margin:0">4 项</p></div>
<div style="display:flex;align-items:flex-start;padding:10px 14px;margin-bottom:6px;border:1px solid #f8f6f0;border-left:3px solid #dc2626;border-radius:6px">
  <div style="width:16px;height:16px;border:2px solid #dc2626;border-radius:3px;flex-shrink:0;margin-right:12px;margin-top:2px"></div>
  <p style="font-size:14px;color:#1c1917;margin:0;line-height:1.6"><span style="color:#dc2626;font-size:10px;font-weight:700;margin-right:4px">重要</span>护照原件（有效期须 > 6 个月）</p>
</div>
<div style="display:flex;align-items:flex-start;padding:10px 14px;margin-bottom:6px;border:1px solid #f8f6f0;border-radius:6px">
  <div style="width:16px;height:16px;border:2px solid #a8a29e;border-radius:3px;flex-shrink:0;margin-right:12px;margin-top:2px"></div>
  <p style="font-size:14px;color:#1c1917;margin:0">签证准签信打印件（2 份）</p>
</div>
<div style="display:flex;align-items:flex-start;padding:10px 14px;margin-bottom:6px;border:1px solid #f8f6f0;border-radius:6px">
  <div style="width:16px;height:16px;border:2px solid #a8a29e;border-radius:3px;flex-shrink:0;margin-right:12px;margin-top:2px"></div>
  <p style="font-size:14px;color:#1c1917;margin:0">CoE 入学确认书打印件</p>
</div>
<div style="display:flex;align-items:flex-start;padding:10px 14px;margin-bottom:14px;background:#f8f6f0;border:1px solid #f8f6f0;border-radius:6px">
  <div style="width:16px;height:16px;background:#1e3a5f;border-radius:3px;flex-shrink:0;margin-right:12px;margin-top:2px;color:#fff;font-size:11px;text-align:center;line-height:16px">✓</div>
  <p style="font-size:14px;color:#a8a29e;margin:0">OSHC 保险确认函</p>
</div>
<div style="background:#f8f6f0;padding:12px 16px;border-radius:8px"><p style="font-size:13px;color:#a8a29e;margin:0">💡 建议：所有文件云端备份一份，万一行李丢失还能补办。</p></div>
<div style="margin:20px 0 0;padding:16px 0 0;border-top:1px solid #f8f6f0"><p style="font-size:11px;color:#a8a29e;margin:0;text-align:center">📋 建议截图保存本清单，逐项勾选不遗漏</p><p style="font-size:11px;color:#a8a29e;margin:6px 0 0;text-align:center;letter-spacing:2px">— END —</p></div>
</div>`},
];

const groups=["长文叙事","数据可视","个人表达","教程知识","商业营销","资讯速递","生活场景"];

export default function TemplatePicker(){
  const[idx,setIdx]=useState(0);
  const[filter,setFilter]=useState("全部");
  const displayed=filter==="全部"?templates:templates.filter(t=>t.group===filter);
  const si=Math.min(idx,displayed.length-1);
  const cur=displayed[si];
  const go=d=>{let n=si+d;if(n<0)n=displayed.length-1;if(n>=displayed.length)n=0;setIdx(n);};

  return(
    <div style={{fontFamily:'-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif',maxWidth:420,margin:"0 auto"}}>
      <div style={{marginBottom:12}}>
        <h2 style={{fontSize:17,fontWeight:700,color:"#1a1a1a",margin:"0 0 4px"}}>选择排版模板</h2>
        <p style={{fontSize:12,color:"#999",margin:0}}>左右切换浏览完整效果 · {displayed.length} 套</p>
      </div>
      <div style={{display:"flex",flexWrap:"wrap",gap:4,marginBottom:12}}>
        {["全部",...groups].map(g=><button key={g} onClick={()=>{setFilter(g);setIdx(0)}} style={{padding:"3px 9px",fontSize:11,fontWeight:filter===g?600:400,border:filter===g?"1px solid #333":"1px solid #e5e7eb",borderRadius:14,background:filter===g?"#1a1a1a":"#fff",color:filter===g?"#fff":"#666",cursor:"pointer"}}>{g}</button>)}
      </div>
      <div style={{background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 20px rgba(0,0,0,0.08)"}}>
        <div style={{height:28,background:"#f8f8f8",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{width:40,height:4,background:"#e0e0e0",borderRadius:2}}/>
        </div>
        <div style={{padding:"20px 14px",minHeight:400}} dangerouslySetInnerHTML={{__html:cur?.html||""}} />
        <div style={{borderTop:"1px solid #f3f4f6",padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#fafafa"}}>
          <button onClick={()=>go(-1)} style={{width:36,height:36,borderRadius:18,border:"1px solid #e5e7eb",background:"#fff",cursor:"pointer",fontSize:16,color:"#666",display:"flex",alignItems:"center",justifyContent:"center"}}>←</button>
          <div style={{textAlign:"center",flex:1,padding:"0 10px"}}>
            <p style={{fontSize:15,fontWeight:700,color:"#1a1a1a",margin:"0 0 2px"}}>{cur?.name} <span style={{fontSize:10,color:"#bbb",fontFamily:"monospace"}}>{cur?.id}</span></p>
            <p style={{fontSize:12,color:"#999",margin:0}}>{cur?.desc}</p>
          </div>
          <button onClick={()=>go(1)} style={{width:36,height:36,borderRadius:18,border:"1px solid #e5e7eb",background:"#fff",cursor:"pointer",fontSize:16,color:"#666",display:"flex",alignItems:"center",justifyContent:"center"}}>→</button>
        </div>
      </div>
      <div style={{marginTop:12,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <p style={{fontSize:11,color:"#bbb",margin:0}}>{si+1} / {displayed.length}</p>
        <button onClick={()=>cur&&window.sendPrompt("使用模板："+cur.id+" "+cur.name+"（"+cur.file+"）")} style={{background:"#1a1a1a",color:"#fff",border:"none",borderRadius:8,padding:"10px 20px",fontSize:14,fontWeight:600,cursor:"pointer"}}>
          使用这个模板 →
        </button>
      </div>
      <div style={{marginTop:10,display:"flex",gap:4,overflowX:"auto",paddingBottom:6}}>
        {displayed.map((t,i)=><button key={t.id} onClick={()=>setIdx(i)} style={{flexShrink:0,padding:"5px 12px",fontSize:11,border:i===si?"1.5px solid #4f46e5":"1px solid #eee",borderRadius:8,background:i===si?"#eef2ff":"#fff",color:i===si?"#4f46e5":"#999",cursor:"pointer",fontWeight:i===si?600:400}}>{t.name}</button>)}
      </div>
    </div>
  );
}
