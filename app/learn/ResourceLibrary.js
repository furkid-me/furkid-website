"use client";
import {useMemo,useState} from "react";

const TODAY="2026-10-01";
const statusRank={"招生中":0,"進行中":1,"即將開課":2,"待確認":3,"已截止":4,"歷史資料":5};
function courseStatus(x){
 const text=`${x.title||""} ${x.note||""}`;
 if(text.includes("招生中")) return "招生中";
 const dates=[...text.matchAll(/20\d{2}-\d{2}-\d{2}/g)].map(m=>m[0]);
 if(dates.length){const start=dates[0],end=dates[dates.length-1];if(end<TODAY)return "已截止";if(start>TODAY)return "即將開課";return "進行中";}
 if(/202[0-5]/.test(x.title||"")) return "歷史資料";
 return "待確認";
}

export default function ResourceLibrary({courses=[],books=[],categories=[]}){
 const [tab,setTab]=useState("courses"),[q,setQ]=useState(""),[cat,setCat]=useState("全部"),[status,setStatus]=useState("全部");
 const rows=useMemo(()=>tab==="courses"?courses.map(x=>({...x,_status:courseStatus(x)})):books,[tab,courses,books]);
 const cats=useMemo(()=>["全部",...new Set((categories.length?categories:rows.map(x=>x.cat)).filter(Boolean))],[rows,categories]);
 const filtered=useMemo(()=>rows.filter(x=>{const text=Object.values(x).join(" ").toLowerCase();return(cat==="全部"||x.cat===cat)&&(tab!=="courses"||status==="全部"||x._status===status)&&(!q||text.includes(q.toLowerCase()))}).sort((a,b)=>tab==="courses"?(statusRank[a._status]-statusRank[b._status]):0),[rows,q,cat,status,tab]);
 return <div className="resource-browser">
  <div className="resource-toolbar"><div className="resource-tabs"><button className={tab==="courses"?"active":""} onClick={()=>{setTab("courses");setCat("全部");setStatus("全部")}}>進修課程 <b>{courses.length}</b></button><button className={tab==="books"?"active":""} onClick={()=>{setTab("books");setCat("全部");setStatus("全部")}}>參考書單 <b>{books.length}</b></button></div><input aria-label="搜尋進修資源" value={q} onChange={e=>setQ(e.target.value)} placeholder={tab==="courses"?"搜尋課程名稱、主辦單位…":"搜尋書名、作者…"}/></div>
  {tab==="courses"&&<div className="status-filters" aria-label="課程狀態">{["全部","招生中","進行中","即將開課","待確認","已截止","歷史資料"].map(x=><button key={x} className={status===x?"active":""} onClick={()=>setStatus(x)}>{x}</button>)}</div>}
  <div className="resource-filters">{cats.map(x=><button key={x} className={cat===x?"active":""} onClick={()=>setCat(x)}>{x}</button>)}</div>
  <div className="resource-count">找到 {filtered.length} 筆{q?`符合「${q}」的`:""}資料</div>
  <div className={tab==="courses"?"course-list":"book-grid"}>{filtered.map((x,i)=>tab==="courses"?<article className="course-row" key={`${x.title}-${i}`}><div><div className="resource-labels"><span className="resource-cat">{x.cat}</span><span className={`course-status status-${x._status}`}>{x._status}</span></div><h3>{x.title}</h3><p>{x.org}{x.note?` · ${x.note}`:""}</p><div className="resource-meta">{x.mode&&<span>{x.mode}</span>}{x.hours&&<span>{x.hours} 小時</span>}{x.cert&&<span>{x.cert}</span>}{x.fee&&<span>{x.fee}</span>}</div></div>{x.link&&<a className="resource-source" href={x.link} target="_blank" rel="noreferrer">查看來源 ↗</a>}</article>:<article className="book-card" key={`${x.name}-${i}`}><span className="resource-cat">{x.cat}</span><h3>{x.name}</h3><p>{x.author||"作者資料待補"}</p>{x.price&&<b>NT$ {x.price}</b>}<div className="book-links">{x.eslite&&<a href={x.eslite} target="_blank" rel="noreferrer">書店 ↗</a>}{x.shopee&&<a href={x.shopee} target="_blank" rel="noreferrer">購書 ↗</a>}</div></article>)}</div>
  {!filtered.length&&<div className="resource-empty">目前沒有符合條件的資料，試著清除搜尋或切換分類。</div>}
 </div>
}
