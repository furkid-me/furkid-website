const cards = [
 ["照護 Care","健康、醫療、行為、急救、生命階段","/care","01"],
 ["一起生活 Live","食衣住行、旅行、育樂、人寵關係","/live","02"],
 ["找到幫助 Support","保姆、獸醫、訓練與專業服務","/support","03"],
 ["學習 Learn","飼主教育、專業教育、課程與指南","/learn","04"],
];
const needs = [
 ["牠好像不舒服","先從可信任的健康與照護資訊開始","/vet-guide"],
 ["我想更懂牠","理解行為、情緒與人寵關係","/care"],
 ["今天想一起去哪","未來：找玩、餐廳、店家與友善場所","/live"],
 ["我要找人幫忙","到府保姆與專業服務","/support"],
 ["吃什麼比較好","前往 VASTET 的資料型產品決策","https://food.vastet.co"],
 ["我想學會照護","從飼主知識到專業培訓","/learn"],
];
export default function Home(){return <main>
<header className="nav shell"><a className="brand" href="/">FURKID<span>.ME</span></a><nav><a href="#explore">探索</a><a href="/care">照護</a><a href="/live">一起生活</a><a href="/support">找服務</a><a href="/learn">學習</a><a href="https://food.vastet.co">VASTET ↗</a></nav><a className="pill" href="#newsletter">訂閱 FURKID</a></header>
<section className="hero shell"><div className="eyebrow">BETTER LIFE, TOGETHER.</div><h1>和毛孩一起生活，<br/><em>每個問題</em>都值得<br/>有更好的答案。</h1><p>從健康、照護、行為，到吃飯、旅行、找地方、找專業幫助。<br/>FURKID.ME 陪你把愛，變成更好的照護。</p><div className="actions"><a className="primary" href="#explore">開始探索 ↓</a><a className="textlink" href="#needs">我遇到問題了 →</a></div><div className="hero-note">CARE · LIVE · LEARN · SUPPORT · SOCIETY · CHOOSE</div></section>
<section id="needs" className="needs"><div className="shell"><div className="section-head"><span>從問題開始</span><h2>今天，你想為牠做什麼？</h2><p>不用先知道答案在哪個分類。告訴我們你現在遇到什麼。</p></div><div className="need-grid">{needs.map((n,i)=><a className="need" href={n[2]} key={n[0]}><b>0{i+1}</b><h3>{n[0]}</h3><p>{n[1]}</p><span>探索 →</span></a>)}</div></div></section>
<section id="explore" className="world shell"><div className="section-head"><span>FURKID WORLD</span><h2>照顧牠，也一起把生活過好。</h2><p>FURKID.ME 不只回答「怎麼養」，而是整理人與毛孩共同生活真正會遇到的問題。</p></div><div className="world-grid">{cards.map(c=><a href={c[2]} className="world-card" key={c[0]}><small>{c[3]}</small><h3>{c[0]}</h3><p>{c[1]}</p><i>↗</i></a>)}</div></section>
<section className="feature"><div className="shell split"><div><span className="tag">KNOWLEDGE</span><h2>不是更多資訊，<br/>而是更可信任的下一步。</h2><p>我們把專業指南、來源與實際照護情境重新整理，讓複雜資訊成為一般人能理解、能行動的內容。</p><a className="primary light" href="/vet-guide">進入 Vet Guide →</a></div><div className="paper"><div className="paper-top">FURKID.ME / VET GUIDE</div><h3>獸醫指南，不該只有專業人士看得懂。</h3><p>疾病認識 · 照護重點 · 就醫警訊 · 指南來源</p><hr/><small>內容不取代獸醫診療。每篇內容標示來源、更新與審閱資訊。</small></div></div></section>
<section className="vastet shell"><div><span>CHOOSE WITH DATA</span><h2>需要做產品選擇時，<br/>交給 VASTET。</h2><p>食品、成分、品牌、營養、召回與法規，使用資料幫助你看懂，而不是替你決定。</p></div><a href="https://food.vastet.co">前往 VASTET ↗</a></section>
<section id="newsletter" className="newsletter"><div className="shell"><span>FURKID LETTER</span><h2>值得知道的事，<br/>我們先幫你整理好。</h2><p>照護、產業、毛孩經濟與值得追蹤的新變化。</p><a className="primary" href="https://furkid-me.kit.com/1ebe772a87">訂閱每週 FURKID 情報 →</a></div></section>
<footer className="shell"><div className="brand">FURKID<span>.ME</span></div><p>Better life, together.<br/>把愛，變成更好的照護。</p><small>© 2026 FURKID.ME</small></footer></main>}