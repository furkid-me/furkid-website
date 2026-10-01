# FURKID.ME Master Blueprint v2

更新：2026-10-01
狀態：母站建置中；Vet Guide 已完成，待正式整合；VASTET 為獨立產品資料決策平台。

## 1. 品牌核心

**FURKID.ME = 人與毛孩共同生活的照護與生活平台。**

品牌主張：**和毛孩一起，把生活過好。**
英文：**Better life, together.**

FURKID.ME 不只回答「怎麼養寵物」，而是處理人與毛孩共同生活會遇到的問題：健康、照護、食衣住行、教育、育樂、人寵關係、專業服務、福利、醫療、法規政策、產品選擇與學習。

原則：提供可信任資訊、工具與服務，協助使用者理解與判斷，不替使用者做決定。

## 2. 品牌／產品分工

### FURKID.ME
母品牌、內容與服務入口、會員 Identity Layer。

### VASTET
資料型產品決策平台。聚焦食品、成分、品牌、營養、召回、法規與未來其他可結構化比較的寵物產品資料。

### Vet Guide
FURKID.ME 的健康／醫療知識產品，正式資訊架構位於 `/vet-guide/*`，不是另一個品牌孤島。

### FURKID Industry
寵物產業情報電子報，受眾為寵物業者、品牌、從業者與創業者；與一般飼主內容分流。

### FURKID Owner Letter（規劃）
一般飼主的健康、照護、安全與生活內容。初期不以「訂電子報」作為唯一獲客方式，而以高價值工具／資源解鎖帶入名單。

## 3. 官網 IA

```text
/
├── care/                         # 照護
│   ├── health
│   ├── behavior
│   ├── emergency
│   └── life-stage
├── vet-guide/                    # 已完成的獸醫指南系統
│   └── ...guides
├── live/                         # 一起生活
│   ├── food-and-daily-life
│   ├── home
│   ├── travel
│   ├── play
│   ├── restaurants              # 預留
│   ├── places                   # 預留
│   └── pet-friendly             # 預留
├── support/                      # 找專業幫助
│   ├── pet-sitting
│   ├── veterinarian             # 預留
│   ├── training                 # 預留
│   └── other-professionals      # 預留
├── learn/                        # 學習
│   ├── pet-owners
│   ├── professional
│   ├── certifications
│   ├── resources
│   ├── courses                  # 預留
│   └── downloads                # 預留
├── society/                      # 社會層，預留
│   ├── welfare
│   ├── law
│   ├── policy
│   └── public-issues
├── choose/                       # 選擇層／導向 VASTET 等工具
├── about
├── contact
└── privacy
```

六個長期內容支柱：**CARE / LIVE / SUPPORT / LEARN / SOCIETY / CHOOSE**。

「食衣住行育樂、人寵關係、福利、醫療、法規政策」不需要現在全部做成頁面，但 URL、taxonomy、navigation 與資料模型應預留擴張能力。

## 4. Learn Resource Hub

Learn 不等於 Vet Guide。

- Vet Guide：健康／疾病／醫療知識。
- Learn：學會照護與建立專業能力。

Learn 主要分成兩條旅程：

### 我是飼主
日常照護、急救、安全、行為、營養基礎、工具與教材。

### 我是寵物從業者
專業進修、證照、認證、課程、國內外機構、持續教育與職涯能力。

既有進修資源應整理進 `/learn/professional`、`/learn/certifications`、`/learn/resources`，而不是另外建立孤立網站。

## 5. Identity & Lead Architecture

FURKID.ME 採三層內容模型。

### Layer A — OPEN
不登入即可閱讀，主要承擔 SEO / AEO / GEO / AI Search / 品牌信任。

包括：
- Vet Guide 核心內容
- Care 核心文章
- Live 基本內容
- 店家／餐廳／場所基本資訊
- 進修資源的基本介紹
- Support 服務介紹

### Layer B — UNLOCK
Email 或 LINE 免費帳號解鎖高價值內容／工具。

例如：
- 毛孩急救 48H
- 完整 checklist
- 居家觀察表
- PDF／下載工具
- 完整比較表
- 完整進修資源清單
- 收藏功能
- 我的清單／我的地圖

原則：**答案本身不做人為 SEO paywall；把「下一步更有用的工具」作為登入價值。**

### Layer C — ACCOUNT
需要 FURKID Account。

未來能力：
- 我的毛孩 Profile
- 收藏文章／指南
- 收藏食品／產品
- 收藏店家／場所
- 閱讀與下載紀錄
- 個人提醒
- 個人化推薦
- 保姆／服務紀錄
- 課程／證照／學習紀錄

長期概念：**一個 FURKID Account 串起 Care、Vet Guide、Live、Learn、Support，並可與 VASTET 形成跨產品 identity。**

## 6. 登入與訂閱不是同一件事

支援方向：
- LINE Login
- Email Login / magic link
- 未來視需求加入 Google

建立帳號與行銷訂閱必須分開 consent。

`登入 FURKID` ≠ `自動訂閱電子報`

建議：
- 建立帳號：使用產品必要身份資料。
- Owner Letter：使用者自行勾選訂閱。
- Industry Newsletter：獨立 audience intent。

## 7. Audience / CRM Data Model

同一個人可以同時具有多種 audience，不做互斥分類。

核心 tags / properties：

```text
audience_owner
audience_professional

source_home
source_vet_guide
source_emergency48h
source_vastet
source_support
source_learn
source_threads
source_industry_newsletter
```

未來可增加 interest：health / nutrition / behavior / senior / cat / dog / travel / professional_learning 等。

## 8. 飼主名單的第一個 acquisition engine

第一優先：**《毛孩急救 48H》**。

內容可包含：
- 叫叫 ABC
- CPR
- 生命徵象
- 急救包
- 緊急聯絡卡
- 撤離包

漏斗：

```text
Google / AI Search / Threads
        ↓
FURKID Open Content
        ↓
急救48H / checklist / tool
        ↓
Email 或 LINE 建立免費帳號
        ↓
audience_owner
        ↓
使用者選擇是否訂閱 Owner Letter
        ↓
回訪 / 收藏 / 工具 / 服務 / 未來會員
```

首頁的主要飼主 CTA 應逐步從泛用「訂閱 FURKID」轉成具體價值交換，例如「免費取得毛孩急救48H」。

## 9. 業者名單

目前既有電子報維持 **寵物業者／產業情報** 定位，不改成飼主信。

入口優先放在：
- `/learn/professional`
- Footer 的「寵物從業者」入口
- Threads 業者內容
- 產業文章

不要在飼主首頁 Hero 把「寵物產業／毛孩經濟」當主要訂閱理由。

## 10. Content + Search Architecture

### SEO
- indexable public knowledge
- canonical
- sitemap
- robots
- internal linking
- breadcrumbs
- topic clusters
- Core Web Vitals
- image alt / OG

### AEO
- 問題導向標題
- 短答案／definition block
- FAQ 僅在真正有 FAQ 時使用
- 清楚作者、審閱、更新時間、來源
- 可引用的結構化段落

### GEO / AI Search
- entity consistency
- Organization / WebSite / Article / Breadcrumb / Person 等適當 schema
- 清楚區分 FURKID.ME、VASTET、Vet Guide 的 entity relationship
- llms.txt 作為輔助，不取代可爬取 HTML 與 structured data
- 原始來源與 evidence 可追溯

### Trust / YMYL
健康醫療內容必須：
- 標示來源
- 標示更新日期
- 適當標示審閱狀態
- 清楚就醫警訊
- 不取代獸醫診療
- 不為了 SEO 大量生成低品質醫療頁

## 11. UX 原則

1. 從使用者問題開始，不要求使用者先理解網站 taxonomy。
2. 公開內容先給答案，再提供更高價值工具解鎖。
3. 手機優先；Threads / LINE 流量必須有良好 landing experience。
4. 登入只在有明確價值時出現。
5. 不用 popup 連續轟炸訂閱。
6. 一個頁面只設定一個主要 CTA。
7. 保持 FURKID 的 editorial / warm / premium 視覺，不走廉價寵物商城風。

## 12. Visual System

核心色：焦糖橘 `#EA830C`
背景：奶油米白
文字：可可棕

方向：Editorial × warm × trustworthy × lived-in life。

首頁第一代 OG：女兒童年牽小鐵、Lucy 同行的夕陽情境；文案「和毛孩一起，把生活過好。」＋ `BETTER LIFE, TOGETHER.`。

## 13. Roadmap

### P0 — Mother Site Launch Foundation（現在）
- 完成共用 Header / Footer
- 完成首頁
- Support 到府保姆正式服務頁
- About / Contact / Privacy / 404
- sitemap / robots / canonical / structured data / llms.txt
- 正式 OG asset
- mobile QA / link QA / build QA
- 接 `furkid.me`

### P1 — Vet Guide Integration
- 完成版 Vet Guide 納入 `/vet-guide/*`
- 統一 FURKID Header / Footer / design tokens
- 保留醫療內容 trust signals
- 更新 sitemap / breadcrumbs / schema / internal links
- 舊 Vet Guide deployment 做 redirect / canonical 策略

### P2 — Learn Resource Hub
- 找回既有進修資源
- 建立 Owner / Professional 雙入口
- 建立 certifications / resources taxonomy
- 先公開基本資料，不急著全部鎖登入

### P3 — Owner Acquisition MVP
- 完成《毛孩急救48H》
- 建立 unlock landing
- 建立 owner audience tagging
- Kit / CRM 流程
- consent 分離
- 測試 Email acquisition

### P4 — FURKID Identity MVP
- Email login
- LINE login
- account profile
- 收藏功能
- entitlement / unlock state
- privacy / consent / data retention

### P5 — Live Discovery
逐步推出：
- 找玩
- 找餐廳
- 找店家
- 寵物友善場所
- 收藏／我的清單

先驗證資料品質與使用需求，再擴大 UGC／評論／地圖。

### P6 — Personal Pet Layer
- Pet Profile
- 個人化 Care / Vet Guide
- VASTET 收藏／食品關聯
- 提醒
- 照護與服務紀錄

### P7 — Membership / Monetization
待免費使用行為與 retention 有資料後再決定：
- premium tools
- professional membership
- paid resource database
- courses
- service marketplace
- brand / industry products

不在沒有使用資料前過早鎖核心內容。

## 14. Current Priority

現在不要同時開發所有預留頁面。

執行順序：

**母站 QA / Domain Ready → 正式接 furkid.me → Vet Guide 整合 → Learn Resource Hub → 急救48H Unlock → Email/LINE Identity → 收藏與個人化 → Live Discovery。**

這份藍圖作為 FURKID.ME 母站、Vet Guide、Learn、CRM／名單與未來會員系統的共同基準。