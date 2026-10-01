export default function sitemap(){
 const pages=[
  {p:"",priority:1,f:"weekly"},
  {p:"/care",priority:.9,f:"weekly"},
  {p:"/live",priority:.8,f:"weekly"},
  {p:"/support",priority:.9,f:"weekly"},
  {p:"/learn",priority:.8,f:"weekly"},
  {p:"/vet-guide",priority:.9,f:"weekly"},
  {p:"/about",priority:.7,f:"monthly"},
  {p:"/contact",priority:.6,f:"monthly"},
  {p:"/privacy",priority:.3,f:"yearly"}
 ];
 return pages.map(x=>({url:`https://furkid.me${x.p}`,changeFrequency:x.f,priority:x.priority}));
}
