import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata={
  title:"Vet Guide｜給飼主看得懂的獸醫指南",
  description:"FURKID.ME Vet Guide 把專業獸醫指南整理成飼主看得懂、知道何時該就醫、可以採取下一步的照護資訊。",
  alternates:{canonical:"/vet-guide"},
  openGraph:{title:"Vet Guide｜給飼主看得懂的獸醫指南",description:"把專業獸醫指南整理成飼主能理解、能採取下一步的照護資訊。",url:"/vet-guide",type:"website"}
};

export default function VetGuide(){return <main><SiteHeader/><section className="section-hero shell"><span>CARE / VET GUIDE</span><h1>獸醫指南，不該只有專業人士看得懂。</h1><p>FURKID.ME Vet Guide 將獸醫專業指南重新整理成飼主能理解的內容：知道發生什麼、該觀察什麼、什麼時候需要就醫，以及下一步能做什麼。</p><div className="actions"><a className="primary" href="https://furkid-vet-guide.vercel.app/vet-guide/">閱讀 Vet Guide ↗</a><a className="textlink" href="/care">回到照護 →</a></div></section><section className="section-body shell"><div className="trust-grid"><div><b>01</b><h3>看得懂</h3><p>保留重要醫療概念，但用飼主能理解的方式重新整理。</p></div><div><b>02</b><h3>找得到下一步</h3><p>除了疾病知識，也整理需要觀察的訊號、就醫時機與可以準備的資訊。</p></div><div><b>03</b><h3>回到來源</h3><p>重要內容標示來源、更新日期與內容限制，協助理解指南而不是取代診療。</p></div></div><div className="coming-note"><b>Vet Guide 正在併入 FURKID.ME 主網域</b><p>目前完整指南仍由既有正式部署站提供。接下來會逐步把指南頁面遷移到 furkid.me/vet-guide/ 底下，讓品牌、搜尋索引、內部連結與內容權威集中在同一個網域。</p><p>在遷移完成前，不建立重複內容頁；完成後再由舊網址導向對應的 FURKID.ME 正式網址。</p></div></section><SiteFooter/></main>}
