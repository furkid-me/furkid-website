import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://furkid.me"),
  title: { default: "FURKID.ME｜和毛孩一起，把生活過好", template: "%s｜FURKID.ME" },
  description: "從照護、健康、行為到生活、學習與專業服務，FURKID.ME 陪你在人與毛孩共同生活的每個階段，找到可信任的資訊與下一步。",
  alternates: { canonical: "/" },
  openGraph: { title: "FURKID.ME｜和毛孩一起，把生活過好", description: "人與毛孩共同生活的照護與生活平台", url: "https://furkid.me", siteName: "FURKID.ME", locale: "zh_TW", type: "website" }
};

export default function RootLayout({ children }) {
  const schema = {"@context":"https://schema.org","@type":"Organization","name":"FURKID.ME","url":"https://furkid.me","description":"人與毛孩共同生活的照護與生活平台"};
  return <html lang="zh-Hant-TW"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>;
}