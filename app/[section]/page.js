import { notFound } from "next/navigation";

const sections = {
  care: { eyebrow:"CARE", title:"照護，是理解牠真正需要什麼。", intro:"從健康、行為、急救到生命階段，整理可信任、能實際採取行動的照護資訊。", items:["健康與醫療","行為與情緒","急救與安全","生命階段"], note:"Vet Guide 將成為健康與醫療內容的主要知識入口。" },
  live: { eyebrow:"LIVE", title:"一起生活，不只是把牠養大。", intro:"吃飯、居住、旅行、外出、友善場所與日常關係，都是人與毛孩共同生活的一部分。", items:["食與日常","住與環境","行與旅行","育樂與友善場所"], note:"未來將延伸找玩、找餐廳、找店家與寵物友善場所。" },
  support: { eyebrow:"SUPPORT", title:"需要幫忙時，找到適合的人。", intro:"從到府寵物保姆開始，逐步建立值得信任的寵物照護與專業服務入口。", items:["到府寵物保姆","獸醫與健康資源","訓練與行為","其他專業服務"], note:"FURKID.ME 的到府保姆服務與專業媒合將由這裡進入。" },
  learn: { eyebrow:"LEARN", title:"好的照護，可以被學會。", intro:"給飼主，也給想成為專業照護者的人。從實用知識、指南到完整培訓。", items:["飼主學習","專業照護培訓","課程與工作坊","工具與下載"], note:"專業保姆培訓、電子書與照護教材將逐步整合到這裡。" }
};

export function generateStaticParams(){return Object.keys(sections).map(section=>({section}));}
export async function generateMetadata({params}){const {section}=await params;const d=sections[section];if(!d)return {};return {title:d.title,description:d.intro,alternates:{canonical:`/${section}`}};}

export default async function SectionPage({params}){const {section}=await params;const d=sections[section];if(!d)notFound();return <main><header className="nav shell"><a className="brand" href="/">FURKID<span>.ME</span></a><nav><a href="/care">照護</a><a href="/live">一起生活</a><a href="/support">找服務</a><a href="/learn">學習</a></nav><a className="pill" href="/">回首頁</a></header><section className="section-hero shell"><span>{d.eyebrow} / FURKID.ME</span><h1>{d.title}</h1><p>{d.intro}</p></section><section className="section-body shell"><div className="section-list">{d.items.map((x,i)=><div className="section-item" key={x}><small>0{i+1}</small><h2>{x}</h2><span>COMING SOON</span></div>)}</div><div className="coming-note"><b>正在建立這個世界。</b><p>{d.note}</p><p>這一頁先作為資訊架構入口，內容會分階段上線，而不是為了填滿網站一次塞入大量低品質頁面。</p></div></section><footer className="shell"><div className="brand">FURKID<span>.ME</span></div><p>Better life, together.<br/>把愛，變成更好的照護。</p><small>© 2026 FURKID.ME</small></footer></main>}