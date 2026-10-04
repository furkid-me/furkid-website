import ConversionEvent from "../../components/ConversionEvent";
import { ANALYTICS_EVENTS } from "../../lib/analytics";
import { createPageMetadata } from "../../lib/pageMetadata";

export const metadata=createPageMetadata({
 title:"訂閱成功｜FURKID.ME",
 description:"你已完成 FURKID Letter 訂閱。",
 path:"/newsletter/thanks",
 index:false
});

export default function NewsletterThanks(){return <main><ConversionEvent eventName={ANALYTICS_EVENTS.PROFESSIONAL_NEWSLETTER_SIGNUP} eventParams={{source:"kit",conversion:"newsletter_signup"}} sessionKey="professional_newsletter_signup"/><header className="nav shell"><a className="brand" href="/">FURKID<span>.ME</span></a></header><section className="section-hero shell"><span>FURKID LETTER</span><h1>訂閱完成。</h1><p>之後的 FURKID 情報會寄到你的信箱。你也可以先回到網站繼續探索照護、生活與 Vet Guide。</p><div className="actions"><a className="primary" href="/">回 FURKID.ME →</a><a className="textlink" href="/vet-guide">進入 Vet Guide →</a></div></section></main>}
