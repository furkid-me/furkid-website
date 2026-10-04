import fs from 'node:fs';
import path from 'node:path';

function readVetGuideUrls() {
  const file = path.join(process.cwd(), 'public', 'vet-guide', 'sitemap.xml');
  const xml = fs.readFileSync(file, 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

export default function sitemap(){
 const pages=[
  {p:"",priority:1,f:"weekly"},
  {p:"/care",priority:.9,f:"weekly"},
  {p:"/live",priority:.8,f:"weekly"},
  {p:"/support",priority:.9,f:"weekly"},
  {p:"/learn",priority:.8,f:"weekly"},
  {p:"/about",priority:.7,f:"monthly"},
  {p:"/contact",priority:.6,f:"monthly"},
  {p:"/privacy",priority:.3,f:"yearly"}
 ];

 const primary = pages.map(x=>({
  url:`https://furkid.me${x.p}`,
  changeFrequency:x.f,
  priority:x.priority
 }));

 const vetGuide = readVetGuideUrls().map(url=>({
  url,
  changeFrequency:'monthly',
  priority:url==='https://furkid.me/vet-guide'?.9:.7
 }));

 return [...new Map([...primary,...vetGuide].map(item=>[item.url,item])).values()];
}
