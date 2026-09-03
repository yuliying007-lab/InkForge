import { useState } from "react";

const themes = [
  // ══════════════ 经典中性 (4) ══════════════
  { id:"T01", name:"极简墨黑", group:"经典中性", primary:"#1a1a1a", secondary:"#666666", highlight:"#f5f5f5", bg:"#ffffff", text:"#333333", textLight:"#999999" },
  { id:"T02", name:"商务藏青", group:"经典中性", primary:"#1a3a5c", secondary:"#4a6f8a", highlight:"#eef3f7", bg:"#ffffff", text:"#2d3748", textLight:"#8a9bb5" },
  { id:"T03", name:"沉稳灰蓝", group:"经典中性", primary:"#4a5568", secondary:"#718096", highlight:"#edf2f7", bg:"#ffffff", text:"#2d3748", textLight:"#a0aec0" },
  { id:"T49", name:"暖调象牙", group:"经典中性", primary:"#6b5c4d", secondary:"#a39585", highlight:"#faf8f5", bg:"#ffffff", text:"#3d3530", textLight:"#b0a598" },

  // ══════════════ 专业行业 (16) ══════════════
  { id:"T04", name:"科技蓝", group:"专业行业", primary:"#2563eb", secondary:"#60a5fa", highlight:"#eff6ff", bg:"#ffffff", text:"#1e293b", textLight:"#94a3b8" },
  { id:"T05", name:"医疗青绿", group:"专业行业", primary:"#0d9488", secondary:"#5eead4", highlight:"#f0fdfa", bg:"#ffffff", text:"#1e293b", textLight:"#94a3b8" },
  { id:"T06", name:"教育墨绿", group:"专业行业", primary:"#166534", secondary:"#4ade80", highlight:"#f0fdf4", bg:"#ffffff", text:"#1e293b", textLight:"#94a3b8" },
  { id:"T07", name:"金融酒红", group:"专业行业", primary:"#7f1d1d", secondary:"#b91c1c", highlight:"#fef2f2", bg:"#ffffff", text:"#1c1917", textLight:"#a8a29e" },
  { id:"T08", name:"法律政务", group:"专业行业", primary:"#374151", secondary:"#991b1b", highlight:"#f3f4f6", bg:"#ffffff", text:"#1f2937", textLight:"#9ca3af" },
  { id:"T09", name:"留学国际", group:"专业行业", primary:"#1e3a5f", secondary:"#b8860b", highlight:"#f8f6f0", bg:"#ffffff", text:"#1c1917", textLight:"#a8a29e" },
  { id:"T10", name:"房产建筑", group:"专业行业", primary:"#57534e", secondary:"#b87333", highlight:"#fafaf9", bg:"#ffffff", text:"#292524", textLight:"#a8a29e" },
  { id:"T11", name:"汽车机械", group:"专业行业", primary:"#44403c", secondary:"#ea580c", highlight:"#fafaf9", bg:"#ffffff", text:"#292524", textLight:"#a8a29e" },
  { id:"T27", name:"农业丰收", group:"专业行业", primary:"#3f6212", secondary:"#a3e635", highlight:"#f7fee7", bg:"#ffffff", text:"#1a2e05", textLight:"#84cc16" },
  { id:"T28", name:"电商大促", group:"专业行业", primary:"#e11d48", secondary:"#ff6b35", highlight:"#fff1f2", bg:"#ffffff", text:"#1c1917", textLight:"#a8a29e" },
  { id:"T29", name:"物流蓝灰", group:"专业行业", primary:"#1e40af", secondary:"#64748b", highlight:"#eff6ff", bg:"#ffffff", text:"#1e293b", textLight:"#94a3b8" },
  { id:"T50", name:"数码极客", group:"专业行业", primary:"#0f766e", secondary:"#2dd4bf", highlight:"#f0fdfa", bg:"#f8fffe", text:"#134e4a", textLight:"#5eead4" },
  { id:"T51", name:"婚庆典礼", group:"专业行业", primary:"#9f1239", secondary:"#e8b4b8", highlight:"#fff1f2", bg:"#fffbfb", text:"#4a1525", textLight:"#dba0a8" },
  { id:"T52", name:"体育竞技", group:"专业行业", primary:"#1d4ed8", secondary:"#f59e0b", highlight:"#eff6ff", bg:"#ffffff", text:"#1e293b", textLight:"#94a3b8" },
  { id:"T53", name:"音乐律动", group:"专业行业", primary:"#9333ea", secondary:"#f472b6", highlight:"#faf5ff", bg:"#ffffff", text:"#1e1b4b", textLight:"#a78bfa" },
  { id:"T54", name:"学术科研", group:"专业行业", primary:"#1e3a5f", secondary:"#475569", highlight:"#f1f5f9", bg:"#ffffff", text:"#0f172a", textLight:"#64748b" },

  // ══════════════ 生活方式 (10) ══════════════
  { id:"T12", name:"温暖陶土", group:"生活方式", primary:"#9a6b4a", secondary:"#c4956a", highlight:"#fdf8f4", bg:"#ffffff", text:"#3f3f3f", textLight:"#a89585" },
  { id:"T13", name:"美食番茄", group:"生活方式", primary:"#dc2626", secondary:"#f97316", highlight:"#fff7ed", bg:"#ffffff", text:"#3f3f3f", textLight:"#b0a090" },
  { id:"T14", name:"文艺复古褐", group:"生活方式", primary:"#6b4423", secondary:"#a0785a", highlight:"#faf6f1", bg:"#ffffff", text:"#3f3f3f", textLight:"#a89080" },
  { id:"T15", name:"母婴柔粉", group:"生活方式", primary:"#db2777", secondary:"#f9a8d4", highlight:"#fdf2f8", bg:"#ffffff", text:"#3f3f3f", textLight:"#c9a0b8" },
  { id:"T16", name:"宠物暖黄", group:"生活方式", primary:"#a16207", secondary:"#d97706", highlight:"#fefce8", bg:"#ffffff", text:"#3f3f3f", textLight:"#b0a080" },
  { id:"T17", name:"心理薰衣草", group:"生活方式", primary:"#6d28d9", secondary:"#a78bfa", highlight:"#f5f3ff", bg:"#ffffff", text:"#3f3f3f", textLight:"#a090c0" },
  { id:"T31", name:"咖啡拿铁", group:"生活方式", primary:"#78553a", secondary:"#c8a882", highlight:"#fdf6ee", bg:"#ffffff", text:"#3b2f2f", textLight:"#b09a80" },
  { id:"T34", name:"海盐苏打", group:"生活方式", primary:"#0891b2", secondary:"#67e8f9", highlight:"#ecfeff", bg:"#ffffff", text:"#164e63", textLight:"#a5f3fc" },
  { id:"T55", name:"美妆蜜桃", group:"生活方式", primary:"#e84393", secondary:"#fd79a8", highlight:"#ffeef5", bg:"#ffffff", text:"#3d1f30", textLight:"#d4849e" },
  { id:"T56", name:"园艺草本", group:"生活方式", primary:"#4d7c0f", secondary:"#84cc16", highlight:"#f7fee7", bg:"#fefffe", text:"#1a2e05", textLight:"#a3e635" },

  // ══════════════ 风格美学 (14) ══════════════
  { id:"T57", name:"国潮朱砂", group:"风格美学", primary:"#b91c1c", secondary:"#ca8a04", highlight:"#fef2f2", bg:"#fdfbf7", text:"#1c1917", textLight:"#a8a29e" },
  { id:"T58", name:"水墨丹青", group:"风格美学", primary:"#334155", secondary:"#78716c", highlight:"#f8fafc", bg:"#ffffff", text:"#1e293b", textLight:"#94a3b8" },
  { id:"T59", name:"日系和纸", group:"风格美学", primary:"#92400e", secondary:"#c2a67e", highlight:"#fefce8", bg:"#fffef7", text:"#451a03", textLight:"#c8b89a" },
  { id:"T60", name:"韩系奶油", group:"风格美学", primary:"#a16853", secondary:"#d4b5a0", highlight:"#fef9f4", bg:"#fffdfb", text:"#44302a", textLight:"#c4a898" },
  { id:"T61", name:"北欧白桦", group:"风格美学", primary:"#1e293b", secondary:"#94a3b8", highlight:"#f8fafc", bg:"#ffffff", text:"#0f172a", textLight:"#cbd5e1" },
  { id:"T62", name:"莫兰迪灰调", group:"风格美学", primary:"#78716c", secondary:"#a8a29e", highlight:"#f5f5f4", bg:"#fafaf9", text:"#44403c", textLight:"#a8a29e" },
  { id:"T63", name:"复古港风", group:"风格美学", primary:"#b91c1c", secondary:"#fbbf24", highlight:"#fef9c3", bg:"#fffbeb", text:"#1c1917", textLight:"#a8a29e" },
  { id:"T64", name:"Y2K千禧", group:"风格美学", primary:"#d946ef", secondary:"#22d3ee", highlight:"#fdf4ff", bg:"#ffffff", text:"#1e1b4b", textLight:"#c084fc" },
  { id:"T65", name:"侘寂素朴", group:"风格美学", primary:"#57534e", secondary:"#a8a29e", highlight:"#f5f5f4", bg:"#fafaf9", text:"#292524", textLight:"#d6d3d1" },
  { id:"T66", name:"法式优雅", group:"风格美学", primary:"#1e3a5f", secondary:"#c9a96e", highlight:"#faf8f3", bg:"#ffffff", text:"#1c1917", textLight:"#a89880" },
  { id:"T67", name:"工业水泥", group:"风格美学", primary:"#292524", secondary:"#78716c", highlight:"#e7e5e4", bg:"#fafaf9", text:"#1c1917", textLight:"#a8a29e" },
  { id:"T68", name:"田园碎花", group:"风格美学", primary:"#be185d", secondary:"#86efac", highlight:"#fdf2f8", bg:"#fffbfb", text:"#3f3f3f", textLight:"#d4a0b8" },
  { id:"T69", name:"波西米亚", group:"风格美学", primary:"#b45309", secondary:"#dc2626", highlight:"#fffbeb", bg:"#fffef7", text:"#451a03", textLight:"#c8a070" },
  { id:"T70", name:"少儿彩虹", group:"风格美学", primary:"#2563eb", secondary:"#f59e0b", highlight:"#eff6ff", bg:"#ffffff", text:"#1e293b", textLight:"#60a5fa" },

  // ══════════════ 活力鲜明 (8) ══════════════
  { id:"T18", name:"时尚玫红", group:"活力鲜明", primary:"#be185d", secondary:"#ec4899", highlight:"#fdf2f8", bg:"#ffffff", text:"#1f2937", textLight:"#9ca3af" },
  { id:"T19", name:"活力橙", group:"活力鲜明", primary:"#ea580c", secondary:"#fb923c", highlight:"#fff7ed", bg:"#ffffff", text:"#1f2937", textLight:"#9ca3af" },
  { id:"T20", name:"创意紫", group:"活力鲜明", primary:"#7c3aed", secondary:"#a78bfa", highlight:"#f5f3ff", bg:"#ffffff", text:"#1f2937", textLight:"#9ca3af" },
  { id:"T21", name:"自然森绿", group:"活力鲜明", primary:"#15803d", secondary:"#4ade80", highlight:"#f0fdf4", bg:"#ffffff", text:"#1f2937", textLight:"#9ca3af" },
  { id:"T33", name:"樱花浅粉", group:"活力鲜明", primary:"#ec4899", secondary:"#fbcfe8", highlight:"#fdf2f8", bg:"#ffffff", text:"#3f3f3f", textLight:"#d4a0c0" },
  { id:"T35", name:"柠檬汽水", group:"活力鲜明", primary:"#ca8a04", secondary:"#fde047", highlight:"#fefce8", bg:"#ffffff", text:"#1f2937", textLight:"#9ca3af" },
  { id:"T36", name:"薄荷清新", group:"活力鲜明", primary:"#059669", secondary:"#6ee7b7", highlight:"#ecfdf5", bg:"#ffffff", text:"#1f2937", textLight:"#9ca3af" },
  { id:"T71", name:"电光靛蓝", group:"活力鲜明", primary:"#4f46e5", secondary:"#818cf8", highlight:"#eef2ff", bg:"#ffffff", text:"#1e1b4b", textLight:"#a5b4fc" },

  // ══════════════ 深色模式 (6) ══════════════
  { id:"T22", name:"电竞霓虹", group:"深色模式", primary:"#7c3aed", secondary:"#06b6d4", highlight:"#1e1b4b", bg:"#0f172a", text:"#e2e8f0", textLight:"#94a3b8" },
  { id:"T23", name:"摄影纯黑", group:"深色模式", primary:"#ffffff", secondary:"#a3a3a3", highlight:"#262626", bg:"#171717", text:"#e5e5e5", textLight:"#737373" },
  { id:"T39", name:"午夜蓝金", group:"深色模式", primary:"#fbbf24", secondary:"#d97706", highlight:"#1e293b", bg:"#0f172a", text:"#f1f5f9", textLight:"#94a3b8" },
  { id:"T40", name:"暗夜翡翠", group:"深色模式", primary:"#34d399", secondary:"#6ee7b7", highlight:"#064e3b", bg:"#0a1f17", text:"#ecfdf5", textLight:"#6ee7b7" },
  { id:"T41", name:"深空灰紫", group:"深色模式", primary:"#c084fc", secondary:"#a78bfa", highlight:"#2e1065", bg:"#0f0720", text:"#f3e8ff", textLight:"#a78bfa" },
  { id:"T72", name:"暗黑玫瑰", group:"深色模式", primary:"#fb7185", secondary:"#f43f5e", highlight:"#4c0519", bg:"#1a0a10", text:"#ffe4e6", textLight:"#fda4af" },

  // ══════════════ 季节节庆 (8) ══════════════
  { id:"T42", name:"春日抹茶", group:"季节节庆", primary:"#4d7c0f", secondary:"#bef264", highlight:"#f7fee7", bg:"#ffffff", text:"#1a2e05", textLight:"#84cc16" },
  { id:"T43", name:"盛夏海洋", group:"季节节庆", primary:"#0369a1", secondary:"#38bdf8", highlight:"#f0f9ff", bg:"#ffffff", text:"#0c4a6e", textLight:"#7dd3fc" },
  { id:"T44", name:"秋日银杏", group:"季节节庆", primary:"#b45309", secondary:"#f59e0b", highlight:"#fffbeb", bg:"#ffffff", text:"#451a03", textLight:"#d97706" },
  { id:"T73", name:"冬日暖炉", group:"季节节庆", primary:"#78350f", secondary:"#dc2626", highlight:"#fef2f2", bg:"#fffbf5", text:"#431407", textLight:"#b45309" },
  { id:"T24", name:"节庆中国红", group:"季节节庆", primary:"#dc2626", secondary:"#fbbf24", highlight:"#fef2f2", bg:"#ffffff", text:"#1c1917", textLight:"#a8a29e" },
  { id:"T47", name:"圣诞红绿", group:"季节节庆", primary:"#15803d", secondary:"#dc2626", highlight:"#f0fdf4", bg:"#ffffff", text:"#1c1917", textLight:"#a8a29e" },
  { id:"T48", name:"万圣南瓜", group:"季节节庆", primary:"#ea580c", secondary:"#7c3aed", highlight:"#fff7ed", bg:"#ffffff", text:"#1c1917", textLight:"#a8a29e" },
  { id:"T74", name:"七夕粉紫", group:"季节节庆", primary:"#a855f7", secondary:"#f472b6", highlight:"#faf5ff", bg:"#fffbfe", text:"#3b0764", textLight:"#c084fc" },

  // ══════════════ 补充特色 (6) ══════════════
  { id:"T75", name:"禅意茶道", group:"补充特色", primary:"#5c4033", secondary:"#8b7355", highlight:"#f5f0eb", bg:"#fdfcfa", text:"#3b2a1f", textLight:"#a89580" },
  { id:"T76", name:"露营户外", group:"补充特色", primary:"#365314", secondary:"#ca8a04", highlight:"#f7fee7", bg:"#fefff5", text:"#1a2e05", textLight:"#84cc16" },
  { id:"T77", name:"影视胶片", group:"补充特色", primary:"#1c1917", secondary:"#b45309", highlight:"#292524", bg:"#fafaf9", text:"#1c1917", textLight:"#78716c" },
  { id:"T78", name:"潮玩手办", group:"补充特色", primary:"#e11d48", secondary:"#8b5cf6", highlight:"#fff1f2", bg:"#ffffff", text:"#1e1b4b", textLight:"#a78bfa" },
  { id:"T79", name:"二手古着", group:"补充特色", primary:"#854d0e", secondary:"#a16207", highlight:"#fef9c3", bg:"#fffef7", text:"#422006", textLight:"#ca8a04" },
  { id:"T80", name:"瑜伽冥想", group:"补充特色", primary:"#7e22ce", secondary:"#c4b5fd", highlight:"#faf5ff", bg:"#fefcff", text:"#3b0764", textLight:"#c4b5fd" },

  // ══════════════ 扩展经典 (2) ══════════════
  { id:"T81", name:"中性卡其", group:"扩展经典", primary:"#78716c", secondary:"#bfb5a8", highlight:"#f5f3f0", bg:"#ffffff", text:"#3d3530", textLight:"#a8a29e" },
  { id:"T82", name:"冷灰银蓝", group:"扩展经典", primary:"#475569", secondary:"#94a3b8", highlight:"#f1f5f9", bg:"#ffffff", text:"#1e293b", textLight:"#cbd5e1" },
  // ══════════════ 扩展行业 (4) ══════════════
  { id:"T83", name:"保险灰绿", group:"扩展行业", primary:"#3f6b5e", secondary:"#6b9e8a", highlight:"#f0f7f4", bg:"#ffffff", text:"#1a3d32", textLight:"#8ab5a2" },
  { id:"T84", name:"航空天蓝", group:"扩展行业", primary:"#0284c7", secondary:"#7dd3fc", highlight:"#f0f9ff", bg:"#ffffff", text:"#0c4a6e", textLight:"#bae6fd" },
  { id:"T85", name:"酒店金棕", group:"扩展行业", primary:"#7c5e3c", secondary:"#c9a96e", highlight:"#faf5ed", bg:"#ffffff", text:"#3d2e1c", textLight:"#bfa67a" },
  { id:"T86", name:"教培橙黄", group:"扩展行业", primary:"#d97706", secondary:"#fbbf24", highlight:"#fffbeb", bg:"#ffffff", text:"#451a03", textLight:"#f59e0b" },
  // ══════════════ 扩展生活 (4) ══════════════
  { id:"T87", name:"烘焙奶油", group:"扩展生活", primary:"#a16207", secondary:"#e8c874", highlight:"#fefce8", bg:"#fffef5", text:"#3d2500", textLight:"#d4a730" },
  { id:"T88", name:"手工木棉", group:"扩展生活", primary:"#7c5c42", secondary:"#b8977a", highlight:"#faf3ec", bg:"#ffffff", text:"#3d2e22", textLight:"#a89070" },
  { id:"T89", name:"钓鱼湖蓝", group:"扩展生活", primary:"#1e6091", secondary:"#4eabd1", highlight:"#e8f4fb", bg:"#ffffff", text:"#0a3555", textLight:"#72bfe0" },
  { id:"T90", name:"读书墨香", group:"扩展生活", primary:"#3b3026", secondary:"#7a6b5a", highlight:"#f7f4f0", bg:"#fffdf8", text:"#2a2018", textLight:"#a09585" },
  // ══════════════ 扩展美学 (5) ══════════════
  { id:"T91", name:"赤金大气", group:"扩展美学", primary:"#92400e", secondary:"#d4a520", highlight:"#fef8e8", bg:"#fffef5", text:"#451a03", textLight:"#c9a040" },
  { id:"T92", name:"糖果马卡龙", group:"扩展美学", primary:"#c084fc", secondary:"#f9a8d4", highlight:"#fdf4ff", bg:"#fff5fa", text:"#3b0764", textLight:"#e9b5d0" },
  { id:"T93", name:"新中式松绿", group:"扩展美学", primary:"#2d6a4f", secondary:"#74c69d", highlight:"#ecf8f0", bg:"#ffffff", text:"#1b4332", textLight:"#95d5ae" },
  { id:"T94", name:"极繁主义", group:"扩展美学", primary:"#be123c", secondary:"#7c3aed", highlight:"#fff0f3", bg:"#ffffff", text:"#1a1a2e", textLight:"#a78bfa" },
  { id:"T95", name:"蒸汽波", group:"扩展美学", primary:"#c026d3", secondary:"#38bdf8", highlight:"#fdf4ff", bg:"#fefcff", text:"#4a044e", textLight:"#a855f7" },
  // ══════════════ 扩展活力 (4) ══════════════
  { id:"T96", name:"荧光柠绿", group:"扩展活力", primary:"#65a30d", secondary:"#d9f99d", highlight:"#f7fee7", bg:"#ffffff", text:"#1a2e05", textLight:"#a3e635" },
  { id:"T97", name:"珊瑚橘", group:"扩展活力", primary:"#f97316", secondary:"#fdba74", highlight:"#fff7ed", bg:"#ffffff", text:"#431407", textLight:"#fb923c" },
  { id:"T98", name:"天际淡蓝", group:"扩展活力", primary:"#0ea5e9", secondary:"#7dd3fc", highlight:"#f0f9ff", bg:"#ffffff", text:"#0c4a6e", textLight:"#bae6fd" },
  { id:"T99", name:"浆果紫红", group:"扩展活力", primary:"#a21caf", secondary:"#e879f9", highlight:"#fdf4ff", bg:"#ffffff", text:"#4a044e", textLight:"#d946ef" },
  // ══════════════ 扩展深色 (3) ══════════════
  { id:"T100", name:"暗调咖啡", group:"扩展深色", primary:"#d4a373", secondary:"#a87c50", highlight:"#3d2b1a", bg:"#1a1008", text:"#f5e6d3", textLight:"#b8977a" },
  { id:"T101", name:"午夜森林", group:"扩展深色", primary:"#4ade80", secondary:"#22c55e", highlight:"#052e16", bg:"#0a1a0f", text:"#ecfdf5", textLight:"#86efac" },
  { id:"T102", name:"星空靛蓝", group:"扩展深色", primary:"#818cf8", secondary:"#6366f1", highlight:"#1e1b4b", bg:"#0c0a2a", text:"#e0e7ff", textLight:"#a5b4fc" },
  // ══════════════ 扩展节庆 (3) ══════════════
  { id:"T103", name:"清明踏青", group:"扩展节庆", primary:"#16a34a", secondary:"#86efac", highlight:"#f0fdf4", bg:"#ffffff", text:"#14532d", textLight:"#4ade80" },
  { id:"T104", name:"中秋月色", group:"扩展节庆", primary:"#a16207", secondary:"#fde68a", highlight:"#fefce8", bg:"#fffef5", text:"#451a03", textLight:"#eab308" },
  { id:"T105", name:"教师节", group:"扩展节庆", primary:"#1d4ed8", secondary:"#fbbf24", highlight:"#eff6ff", bg:"#ffffff", text:"#1e3a5f", textLight:"#60a5fa" },
  // ══════════════ 扩展特色 (4) ══════════════
  { id:"T106", name:"亲子互动", group:"扩展特色", primary:"#ea580c", secondary:"#fde047", highlight:"#fff7ed", bg:"#ffffff", text:"#3f3f3f", textLight:"#f59e0b" },
  { id:"T107", name:"旅行手帐", group:"扩展特色", primary:"#0d9488", secondary:"#a16207", highlight:"#f0fdfa", bg:"#ffffff", text:"#134e4a", textLight:"#b8860b" },
  { id:"T108", name:"电台深夜", group:"扩展特色", primary:"#6366f1", secondary:"#c4b5fd", highlight:"#eef2ff", bg:"#f8f7ff", text:"#312e81", textLight:"#a5b4fc" },
  { id:"T109", name:"街头涂鸦", group:"扩展特色", primary:"#dc2626", secondary:"#fbbf24", highlight:"#fef2f2", bg:"#ffffff", text:"#1a1a1a", textLight:"#78716c" },

  // ══════════════ 第五批扩展 (7) ══════════════
  { id:"T110", name:"赛博朋克", group:"第五批扩展", primary:"#ff2d78", secondary:"#00f0ff", highlight:"#1a0a1e", bg:"#0a0510", text:"#f0e6f6", textLight:"#c880e0" },
  { id:"T111", name:"莫吉托薄荷", group:"第五批扩展", primary:"#10b981", secondary:"#a3e635", highlight:"#ecfdf5", bg:"#ffffff", text:"#064e3b", textLight:"#6ee7b7" },
  { id:"T112", name:"沙漠玫瑰", group:"第五批扩展", primary:"#be6a5a", secondary:"#e8c8a0", highlight:"#fdf5f0", bg:"#fffbf7", text:"#4a2520", textLight:"#c8a088" },
  { id:"T113", name:"极光绿紫", group:"第五批扩展", primary:"#06b6d4", secondary:"#a855f7", highlight:"#ecfeff", bg:"#ffffff", text:"#164e63", textLight:"#67e8f9" },
  { id:"T114", name:"故宫朱墙", group:"第五批扩展", primary:"#a83232", secondary:"#c8a45c", highlight:"#fef5f0", bg:"#fffdf5", text:"#3d1010", textLight:"#b89060" },
  { id:"T115", name:"冰川蓝白", group:"第五批扩展", primary:"#38bdf8", secondary:"#e0f2fe", highlight:"#f0f9ff", bg:"#ffffff", text:"#0c4a6e", textLight:"#7dd3fc" },
  { id:"T116", name:"可可摩卡", group:"第五批扩展", primary:"#5c3d2e", secondary:"#a07850", highlight:"#f8f0e8", bg:"#fffcf7", text:"#3a2518", textLight:"#b89878" },
];

const groups = ["经典中性","专业行业","生活方式","风格美学","活力鲜明","深色模式","季节节庆","补充特色","扩展经典","扩展行业","扩展生活","扩展美学","扩展活力","扩展深色","扩展节庆","扩展特色","第五批扩展"];

function MiniPreview({ theme, selected, onClick }) {
  const isDark = theme.bg !== "#ffffff" && theme.bg !== "#fafaf9" && theme.bg !== "#fffbfb" && theme.bg !== "#fffef7" && theme.bg !== "#fdfcfa" && theme.bg !== "#fefffe" && theme.bg !== "#fffdfb" && theme.bg !== "#fdfbf7" && theme.bg !== "#fffbeb" && theme.bg !== "#fffbf5" && theme.bg !== "#fefff5" && theme.bg !== "#fffbfe" && theme.bg !== "#fefcff";
  const checkColor = theme.primary === "#ffffff" || theme.primary === "#fbbf24" ? "#333" : theme.primary;
  return (
    <button
      onClick={onClick}
      style={{
        width:"100%",
        border: selected ? `2px solid ${checkColor}` : `1px solid ${isDark?"rgba(255,255,255,0.1)":"#e5e7eb"}`,
        borderRadius: 10,
        overflow:"hidden",
        cursor:"pointer",
        background: theme.bg,
        padding: 0,
        position:"relative",
        transition:"all 0.15s ease",
        boxShadow: selected ? `0 0 0 2px ${checkColor}33` : "0 1px 3px rgba(0,0,0,0.06)",
        transform: selected ? "scale(1.03)" : "scale(1)",
        textAlign:"left",
      }}
    >
      <div style={{ padding:"12px 10px 9px" }}>
        <div style={{ display:"flex", gap:4, marginBottom:8 }}>
          <div style={{ width:24, height:5, borderRadius:3, background:theme.primary }} />
          <div style={{ width:14, height:5, borderRadius:3, background:theme.secondary }} />
        </div>
        <div style={{ height:6, width:"78%", borderRadius:2, background:theme.text, opacity:0.7, marginBottom:4 }} />
        <div style={{ height:3.5, width:"50%", borderRadius:2, background:theme.textLight, opacity:0.45, marginBottom:8 }} />
        <div style={{ background:theme.highlight, borderRadius:3, padding:"4px 6px", marginBottom:6, borderLeft:`2.5px solid ${theme.primary}` }}>
          <div style={{ height:3, width:"88%", borderRadius:2, background:theme.text, opacity:0.2, marginBottom:2.5 }} />
          <div style={{ height:3, width:"58%", borderRadius:2, background:theme.text, opacity:0.14 }} />
        </div>
        <div style={{ height:3, width:"100%", borderRadius:2, background:theme.text, opacity:0.11, marginBottom:2.5 }} />
        <div style={{ height:3, width:"82%", borderRadius:2, background:theme.text, opacity:0.11, marginBottom:2.5 }} />
        <div style={{ height:3, width:"65%", borderRadius:2, background:theme.text, opacity:0.11 }} />
      </div>
      <div style={{
        borderTop:`1px solid ${isDark?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"}`,
        padding:"5px 8px",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        background: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)",
      }}>
        <span style={{ fontSize:11, color:theme.text, fontWeight:500, opacity:0.85 }}>{theme.name}</span>
        <span style={{ fontSize:9, color:theme.textLight, fontFamily:"monospace" }}>{theme.id}</span>
      </div>
      {selected && (
        <div style={{
          position:"absolute", top:5, right:5,
          width:16, height:16, borderRadius:8,
          background:checkColor,
          display:"flex", alignItems:"center", justifyContent:"center",
        }}>
          <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
            <path d="M2 5.5L4 7.5L8 3" stroke={isDark?"#fff":"#fff"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </button>
  );
}

export default function ThemePicker() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("全部");
  const [search, setSearch] = useState("");

  const handleConfirm = () => {
    if (!selected) return;
    const t = themes.find(th => th.id === selected);
    window.sendPrompt("使用主题：" + t.id + " " + t.name);
  };

  const allGroups = ["全部", ...groups];
  let displayed = filter === "全部" ? themes : themes.filter(t => t.group === filter);
  if (search.trim()) {
    const q = search.trim().toLowerCase();
    displayed = themes.filter(t =>
      t.name.toLowerCase().includes(q) || t.id.toLowerCase().includes(q) || t.group.includes(q)
    );
  }

  const selTheme = themes.find(t => t.id === selected);

  return (
    <div style={{ fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Microsoft YaHei",sans-serif', maxWidth:760, margin:"0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom:14 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline" }}>
          <h2 style={{ fontSize:17, fontWeight:700, color:"#1a1a1a", margin:"0 0 4px" }}>选择配色主题</h2>
          <span style={{ fontSize:12, color:"#aaa" }}>{themes.length} 套配色</span>
        </div>
        <p style={{ fontSize:12.5, color:"#888", margin:0 }}>点击色卡选择 → 确认后自动应用到排版</p>
      </div>

      {/* Search */}
      <div style={{ marginBottom:10 }}>
        <input
          type="text"
          placeholder="搜索主题名称或编号…"
          value={search}
          onChange={e => { setSearch(e.target.value); if(e.target.value) setFilter("全部"); }}
          style={{
            width:"100%", boxSizing:"border-box",
            padding:"7px 12px", fontSize:13,
            border:"1px solid #e5e7eb", borderRadius:8,
            outline:"none", background:"#fafafa",
            color:"#333",
          }}
          onFocus={e => e.target.style.borderColor = "#999"}
          onBlur={e => e.target.style.borderColor = "#e5e7eb"}
        />
      </div>

      {/* Filter tabs */}
      <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:16 }}>
        {allGroups.map(g => (
          <button
            key={g}
            onClick={() => { setFilter(g); setSearch(""); }}
            style={{
              padding:"3px 10px", fontSize:11.5, fontWeight: filter===g?600:400,
              border: filter===g?"1px solid #333":"1px solid #e5e7eb",
              borderRadius:16, background: filter===g?"#1a1a1a":"#fff",
              color: filter===g?"#fff":"#666", cursor:"pointer", transition:"all 0.12s ease",
            }}
          >
            {g}
            {g !== "全部" && <span style={{ marginLeft:3, opacity:0.55, fontSize:10 }}>
              {themes.filter(t => t.group === g).length}
            </span>}
          </button>
        ))}
      </div>

      {/* Grid */}
      {!search.trim() && filter === "全部" ? (
        groups.map(group => {
          const gt = themes.filter(t => t.group === group);
          return (
            <div key={group} style={{ marginBottom:16 }}>
              <h3 style={{ fontSize:11.5, fontWeight:600, color:"#999", margin:"0 0 7px", letterSpacing:"0.5px" }}>
                {group}
                <span style={{ fontWeight:400, marginLeft:6, fontSize:10 }}>{gt.length}</span>
              </h3>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(132px, 1fr))", gap:8 }}>
                {gt.map(theme => (
                  <MiniPreview key={theme.id} theme={theme} selected={selected===theme.id} onClick={()=>setSelected(theme.id)} />
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div>
          {displayed.length === 0 && (
            <p style={{ color:"#999", fontSize:13, textAlign:"center", padding:"30px 0" }}>
              没有找到匹配的主题
            </p>
          )}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(132px, 1fr))", gap:8, marginBottom:16 }}>
            {displayed.map(theme => (
              <MiniPreview key={theme.id} theme={theme} selected={selected===theme.id} onClick={()=>setSelected(theme.id)} />
            ))}
          </div>
        </div>
      )}

      {/* Confirm bar */}
      {selected && selTheme && (
        <div style={{
          position:"sticky", bottom:0, zIndex:10,
          background:"rgba(255,255,255,0.95)", backdropFilter:"blur(10px)",
          borderTop:"1px solid #eee", padding:"10px 0",
          display:"flex", alignItems:"center", justifyContent:"space-between",
          marginTop:6,
        }}>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div style={{ display:"flex", gap:2 }}>
              {[selTheme.primary, selTheme.secondary, selTheme.highlight].map((c,i) => (
                <div key={i} style={{ width:13, height:13, borderRadius:7, background:c, border:"1px solid rgba(0,0,0,0.08)" }} />
              ))}
            </div>
            <span style={{ fontSize:13, color:"#333" }}>
              <strong>{selTheme.name}</strong>
              <span style={{ color:"#999", marginLeft:5, fontFamily:"monospace", fontSize:11 }}>{selected}</span>
            </span>
          </div>
          <button
            onClick={handleConfirm}
            style={{
              background:"#1a1a1a", color:"#fff",
              border:"none", borderRadius:6, padding:"7px 16px",
              fontSize:13, fontWeight:600, cursor:"pointer",
            }}
          >
            确认使用 →
          </button>
        </div>
      )}
    </div>
  );
}
