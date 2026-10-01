import "./globals.css";

export const metadata={
 metadataBase:new URL("https://furkid.me"),
 title:{default:"FURKID.ME｜和毛孩一起，把生活過好",template:"%s｜FURKID.ME"},
 description:"從照護、健康、行為到生活、學習與專業服務，FURKID.ME 陪你在人與毛孩共同生活的每個階段，找到可信任的資訊與下一步。",
 applicationName:"FURKID.ME",
 authors:[{name:"FURKID.ME",url:"https://furkid.me"}],creator:"FURKID.ME",publisher:"FURKID.ME",
 category:"pets",
 alternates:{canonical:"/"},
 openGraph:{title:"FURKID.ME｜和毛孩一起，把生活過好",description:"人與毛孩共同生活的照護與生活平台",url:"https://furkid.me",siteName:"FURKID.ME",locale:"zh_TW",type:"website",images:[{url:"/og-image.jpg",width:1200,height:630,alt:"FURKID.ME｜和毛孩一起，把生活過好。Better Life, Together."}]},
 twitter:{card:"summary_large_image",title:"FURKID.ME｜和毛孩一起，把生活過好",description:"人與毛孩共同生活的照護與生活平台",images:["/og-image.jpg"]},
 icons:{icon:"/icon.svg"},manifest:"/manifest.webmanifest",
 robots:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}
};
export default function RootLayout({children}){const graph={"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://furkid.me/#organization","name":"FURKID.ME","url":"https://furkid.me","description":"人與毛孩共同生活的照護與生活平台","email":"wind@furkid.me"},{"@type":"WebSite","@id":"https://furkid.me/#website","url":"https://furkid.me","name":"FURKID.ME","description":"從照護、健康、行為到生活、學習與專業服務，陪伴人與毛孩共同生活。","inLanguage":"zh-Hant-TW","publisher":{"@id":"https://furkid.me/#organization"},"about":[{"@type":"Thing","name":"寵物照護"},{"@type":"Thing","name":"人寵共同生活"},{"@type":"Thing","name":"寵物健康教育"}]}]};return <html lang="zh-Hant-TW"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(graph)}}/></body></html>}