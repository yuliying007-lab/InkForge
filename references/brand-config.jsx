import { useState, useRef } from "react";

const FOOTER_STYLES = [
  { id:"A", name:"居中名片", desc:"头像居中，适合轻量个人号" },
  { id:"B", name:"横排名片", desc:"紧凑横排，默认推荐" },
  { id:"C", name:"名片+二维码", desc:"左名片右二维码，适合导流" },
  { id:"D", name:"卡片式", desc:"带底色区块，品牌感更强" },
];

const CTA_TYPES = [
  { id:"1", name:"后台回复型", desc:"回复关键词领资料", icon:"📚" },
  { id:"2", name:"预约咨询型", desc:"预约1对1服务", icon:"🗓️" },
  { id:"3", name:"到店体验型", desc:"凭文章到店享福利", icon:"📍" },
  { id:"4", name:"社群加入型", desc:"邀请加入社群/加微信", icon:"👥" },
  { id:"5", name:"课程报名型", desc:"扫码报名课程/活动", icon:"🎓" },
  { id:"6", name:"限时福利型", desc:"限时折扣/免费试用", icon:"⚡" },
  { id:"7", name:"免费测评型", desc:"填问卷获取个性化报告", icon:"🔍" },
  { id:"8", name:"扫码关注型", desc:"纯粹的涨粉导流", icon:"📲" },
];

function AvatarUpload({ label, value, onChange }) {
  const ref = useRef();
  const handle = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => onChange(ev.target.result);
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <p style={{fontSize:12,color:"#666",margin:"0 0 6px",fontWeight:600}}>{label}</p>
      <div onClick={()=>ref.current.click()} style={{width:"100%",height:80,border:"1.5px dashed #e5e7eb",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",background:value?"#f8f9fa":"#fafafa",overflow:"hidden",position:"relative"}}>
        {value
          ? <img src={value} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          : <div style={{textAlign:"center"}}><p style={{fontSize:22,margin:"0 0 4px"}}>+</p><p style={{fontSize:11,color:"#aaa",margin:0}}>点击上传</p></div>}
        {value && <div onClick={e=>{e.stopPropagation();onChange("")}} style={{position:"absolute",top:4,right:4,width:18,height:18,background:"rgba(0,0,0,0.4)",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:10,color:"#fff"}}>✕</div>}
      </div>
      <input ref={ref} type="file" accept="image/*" style={{display:"none"}} onChange={handle} />
    </div>
  );
}

function FooterPreview({ style, brand, tagline, contact, avatarSrc, qrSrc, primaryColor }) {
  const P = primaryColor || "#2563eb";
  const H = "#eff6ff";
  const av = avatarSrc
    ? <img src={avatarSrc} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}} />
    : <span style={{fontSize:style==="A"?18:16}}>✦</span>;
  const qr = qrSrc
    ? <img src={qrSrc} style={{width:"100%",height:"100%",objectFit:"contain"}} />
    : <span style={{fontSize:7,color:"#aaa",textAlign:"center",lineHeight:1.3,padding:4}}>[ 二维码 ]</span>;

  if (style === "A") return (
    <div style={{marginTop:16,paddingTop:16,borderTop:"1px solid #f0f0f0",textAlign:"center"}}>
      <div style={{width:52,height:52,borderRadius:26,margin:"0 auto 8px",background:H,border:`1px solid ${H}`,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>{av}</div>
      <p style={{fontSize:14,fontWeight:700,color:"#1e293b",margin:"0 0 3px"}}>{brand||"品牌名称"}</p>
      <p style={{fontSize:12,color:"#94a3b8",margin:0}}>{tagline||"一句话简介"}</p>
    </div>
  );
  if (style === "B") return (
    <div style={{marginTop:16,paddingTop:16,borderTop:"1px solid #f0f0f0",display:"flex",alignItems:"center"}}>
      <div style={{width:44,height:44,borderRadius:22,flexShrink:0,background:H,border:`1px solid ${H}`,display:"flex",alignItems:"center",justifyContent:"center",marginRight:12,overflow:"hidden"}}>{av}</div>
      <div><p style={{fontSize:14,fontWeight:700,color:"#1e293b",margin:"0 0 3px"}}>{brand||"品牌名称"}</p><p style={{fontSize:12,color:"#94a3b8",margin:0,lineHeight:1.5}}>{tagline||"一句话简介"}</p></div>
    </div>
  );
  if (style === "C") return (
    <div style={{marginTop:16,paddingTop:16,borderTop:"1px solid #f0f0f0",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <div style={{display:"flex",alignItems:"center"}}>
        <div style={{width:44,height:44,borderRadius:22,flexShrink:0,background:H,border:`1px solid ${H}`,display:"flex",alignItems:"center",justifyContent:"center",marginRight:12,overflow:"hidden"}}>{av}</div>
        <div><p style={{fontSize:14,fontWeight:700,color:"#1e293b",margin:"0 0 3px"}}>{brand||"品牌名称"}</p><p style={{fontSize:12,color:"#94a3b8",margin:0}}>{tagline||"一句话简介"}</p></div>
      </div>
      <div style={{width:60,height:60,border:`1px solid ${H}`,flexShrink:0,marginLeft:14,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}}>{qr}</div>
    </div>
  );
  return (
    <div style={{marginTop:16,padding:16,background:H}}>
      <div style={{display:"flex",alignItems:"center"}}>
        <div style={{width:48,height:48,borderRadius:24,flexShrink:0,background:"#fff",border:"2px solid #fff",boxShadow:"0 1px 4px rgba(0,0,0,0.06)",display:"flex",alignItems:"center",justifyContent:"center",marginRight:14,overflow:"hidden"}}>{av}</div>
        <div><p style={{fontSize:14,fontWeight:700,color:"#1e293b",margin:"0 0 3px"}}>{brand||"品牌名称"}</p><p style={{fontSize:12,color:"#94a3b8",margin:0,lineHeight:1.5}}>{tagline||"一句话简介"}</p></div>
      </div>
    </div>
  );
}

export default function BrandConfig() {
  const [step, setStep] = useState(1);
  const [brand, setBrand] = useState("");
  const [tagline, setTagline] = useState("");
  const [contact, setContact] = useState("");
  const [avatarSrc, setAvatarSrc] = useState("");
  const [qrSrc, setQrSrc] = useState("");
  const [footerStyle, setFooterStyle] = useState("B");
  const [ctaType, setCtaType] = useState("2");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const config = { brand, tagline, contact, footerStyle, ctaType, hasAvatar:!!avatarSrc, hasQr:!!qrSrc };
    window.sendPrompt(`品牌配置已保存：${JSON.stringify(config)}。品牌名称：${brand}，Tagline：${tagline}，联系方式：${contact}，名片样式：${footerStyle}，默认CTA类型：${ctaType}，头像：${avatarSrc?"已上传":"未上传"}，二维码：${qrSrc?"已上传":"未上传"}`);
    setSaved(true);
  };

  const inputStyle = { width:"100%", boxSizing:"border-box", padding:"8px 12px", fontSize:13, border:"1px solid #e5e7eb", borderRadius:8, outline:"none", background:"#fafafa", color:"#333", marginBottom:12 };
  const labelStyle = { fontSize:12, color:"#666", fontWeight:600, display:"block", marginBottom:6 };

  return (
    <div style={{fontFamily:'-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif',maxWidth:400,margin:"0 auto"}}>
      <div style={{marginBottom:16}}>
        <h2 style={{fontSize:17,fontWeight:700,color:"#1a1a1a",margin:"0 0 4px"}}>品牌配置</h2>
        <p style={{fontSize:12,color:"#999",margin:0}}>配置一次，后续排版自动带入品牌信息</p>
      </div>

      {/* Step indicator */}
      <div style={{display:"flex",gap:4,marginBottom:20}}>
        {[1,2,3].map(s=><div key={s} style={{flex:1,height:3,borderRadius:2,background:s<=step?"#1a1a1a":"#e5e7eb"}}/>)}
      </div>

      {step===1 && (
        <div>
          <p style={{fontSize:13,fontWeight:600,color:"#333",margin:"0 0 14px"}}>第一步：基础信息</p>
          <label style={labelStyle}>品牌 / 公众号名称</label>
          <input value={brand} onChange={e=>setBrand(e.target.value)} placeholder="留学认知社" style={inputStyle}/>
          <label style={labelStyle}>一句话简介（Tagline）</label>
          <input value={tagline} onChange={e=>setTagline(e.target.value)} placeholder="做认知建设者，不做信息搬运工" style={inputStyle}/>
          <label style={labelStyle}>联系方式（微信号 / 电话 / 邮箱）</label>
          <input value={contact} onChange={e=>setContact(e.target.value)} placeholder="liuxue_edward" style={inputStyle}/>
          <button onClick={()=>setStep(2)} disabled={!brand.trim()} style={{width:"100%",padding:"10px 0",background:brand.trim()?"#1a1a1a":"#e5e7eb",color:brand.trim()?"#fff":"#aaa",border:"none",borderRadius:8,fontSize:14,fontWeight:600,cursor:brand.trim()?"pointer":"default"}}>下一步 →</button>
        </div>
      )}

      {step===2 && (
        <div>
          <p style={{fontSize:13,fontWeight:600,color:"#333",margin:"0 0 14px"}}>第二步：上传图片</p>
          <div style={{marginBottom:14}}>
            <AvatarUpload label="头像" value={avatarSrc} onChange={setAvatarSrc}/>
          </div>
          <div style={{marginBottom:16}}>
            <AvatarUpload label="关注二维码" value={qrSrc} onChange={setQrSrc}/>
          </div>
          <p style={{fontSize:11,color:"#aaa",margin:"0 0 14px",lineHeight:1.5}}>图片会转为 Base64 嵌入 HTML，在微信编辑器中直接显示，无需外链。</p>
          <div style={{display:"flex",gap:8}}>
            <button onClick={()=>setStep(1)} style={{flex:1,padding:"10px 0",background:"#fff",color:"#666",border:"1px solid #e5e7eb",borderRadius:8,fontSize:14,cursor:"pointer"}}>← 上一步</button>
            <button onClick={()=>setStep(3)} style={{flex:2,padding:"10px 0",background:"#1a1a1a",color:"#fff",border:"none",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"}}>下一步 →</button>
          </div>
        </div>
      )}

      {step===3 && (
        <div>
          <p style={{fontSize:13,fontWeight:600,color:"#333",margin:"0 0 14px"}}>第三步：偏好设置</p>

          <label style={labelStyle}>默认名片样式</label>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:16}}>
            {FOOTER_STYLES.map(s=>(
              <div key={s.id} onClick={()=>setFooterStyle(s.id)} style={{padding:"10px 12px",border:footerStyle===s.id?"2px solid #1a1a1a":"1px solid #e5e7eb",borderRadius:8,cursor:"pointer",background:footerStyle===s.id?"#f8f8f8":"#fff"}}>
                <p style={{fontSize:13,fontWeight:footerStyle===s.id?700:400,color:"#1a1a1a",margin:"0 0 2px"}}>{s.id} · {s.name}</p>
                <p style={{fontSize:11,color:"#aaa",margin:0}}>{s.desc}</p>
              </div>
            ))}
          </div>

          <label style={labelStyle}>默认 CTA 类型</label>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:16}}>
            {CTA_TYPES.map(c=>(
              <div key={c.id} onClick={()=>setCtaType(c.id)} style={{padding:"8px 10px",border:ctaType===c.id?"2px solid #1a1a1a":"1px solid #e5e7eb",borderRadius:8,cursor:"pointer",background:ctaType===c.id?"#f8f8f8":"#fff",display:"flex",alignItems:"center",gap:6}}>
                <span style={{fontSize:14}}>{c.icon}</span>
                <div><p style={{fontSize:12,fontWeight:ctaType===c.id?700:400,color:"#1a1a1a",margin:0}}>{c.name}</p></div>
              </div>
            ))}
          </div>

          <div style={{background:"#f8f8f8",borderRadius:10,padding:14,marginBottom:14}}>
            <p style={{fontSize:12,color:"#999",margin:"0 0 8px",fontWeight:600}}>名片预览</p>
            <div style={{background:"#fff",padding:"12px 14px",borderRadius:6,fontSize:13,color:"#333",lineHeight:1.7}}>以上就是今天想和你分享的内容。</div>
            <div style={{background:"#fff",padding:"0 14px 14px",borderRadius:6}}>
              <FooterPreview style={footerStyle} brand={brand} tagline={tagline} contact={contact} avatarSrc={avatarSrc} qrSrc={qrSrc}/>
            </div>
          </div>

          <div style={{display:"flex",gap:8}}>
            <button onClick={()=>setStep(2)} style={{flex:1,padding:"10px 0",background:"#fff",color:"#666",border:"1px solid #e5e7eb",borderRadius:8,fontSize:14,cursor:"pointer"}}>← 上一步</button>
            <button onClick={handleSave} style={{flex:2,padding:"10px 0",background:saved?"#15803d":"#1a1a1a",color:"#fff",border:"none",borderRadius:8,fontSize:14,fontWeight:600,cursor:"pointer"}}>{saved?"✓ 已保存":"保存品牌配置"}</button>
          </div>
        </div>
      )}
    </div>
  );
}
