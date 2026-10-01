"use client";
import {useMemo,useState} from "react";

export default function ResourceLibrary({courses=[],books=[],categories=[]}){
 const [tab,setTab]=useState("courses"),[q,setQ]=useState(""),[cat,setCat]=useState("全部");
 const rows=tab==="courses"?courses:books;
 const cats=useMemo(()=>["全部",...new Set((categories.length?categories:rows.map(x=>x.cat)).filter(Boolean))],[rows,categories]);
 const filtered=useMemo(()=>rows.filter(x=>{const text=Object.values(x).join(" ").toLowerCase();return(cat==="全部"||x.cat===cat)&&(!q||text.includes(q.toLowerCase()))}),[rows,q,cat]);
 return <div className="resource-browser">
  <div className="resource-toolbar"><div className="resource-tabs"><button className={tab==="courses"?"active":""} onClick={()=>{setTab("courses");setCat("全部")}}>進修課程 <b>{courses.length}</b></button><button className={tab==="books"?"active":""} onClick={()=>{setTab("books");setCat("全部")}}>參考書單 <b>{books.length}</b></button></div><input value={q} onChange={e=>setQ(e.target.value)} placeholder={tab==="courses"?"搜尋課程名稱、主辦單位…":"搜尋書名、作者…"}/></div>
  <div className="resource-filters">{cats.map(x=><button key={x} className={cat===x?"active":""} onClick={()=>setCat(x)}>{x}</button>)}</div>
  <div className="resource-count">找到 {filtered.length} 筆{q?`符合「${q}」的`:""}資料</div>
  <div className={tab==="courses"?"course-list":"book-grid"}>{filtered.map((x,i)=>tab==="courses"?<article className="course-row" key={`${x.title}-${i}`}><div><span className="resource-cat">{x.cat}</span><h3>{x.title}</h3><p>{x.org}{x.note?` · ${x.note}`:""}</p><div className="resource-meta">{x.mode&&<span>{x.mode}</span>}{x.hours&&<span>{x.hours} 小時</span>}{x.cert&&<span>{x.cert}</span>}{x.fee&&<span>{x.fee}</span>}</div></div>{x.link&&<a href={x.link} target="_blank" rel="noreferrer">查看來源 ↗</a>}</article>:<article className="book-card" key={`${x.name}-${i}`}><span className="resource-cat">{x.cat}</span><h3>{x.name}</h3><p>{x.author||"作者資料待補"}</p>{x.price&&<b>NT$ {x.price}</b>}<div>{x.eslite&&<a href={x.eslite} target="_blank" rel="noreferrer">書店 ↗</a>}{x.shopee&&<a href={x.shopee} target="_blank" rel="noreferrer">購書 ↗</a>}</div></article>)}</div>
  {!filtered.length&&<div className="resource-empty">目前沒有符合條件的資料</div>}
 </div>
}
