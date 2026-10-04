"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { initializeAnalytics } from "../lib/analytics";

const MEASUREMENT_ID = "G-X34S7PS6ST";
const CONSENT_KEY = "furkid_analytics_consent";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    if (!IS_PRODUCTION) return;
    const stored = window.localStorage.getItem(CONSENT_KEY);
    setConsent(stored === "granted" || stored === "denied" ? stored : "unset");
  }, []);

  if (!IS_PRODUCTION || consent === null) return null;

  const choose = (value) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            id="google-analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
            strategy="afterInteractive"
            onReady={() => initializeAnalytics(MEASUREMENT_ID)}
          />
          <SpeedInsights />
        </>
      )}

      {consent === "unset" && (
        <aside className="analytics-consent" role="dialog" aria-label="網站分析偏好" aria-live="polite">
          <div>
            <strong>網站分析偏好</strong>
            <p>我們使用 GA4 與網站效能分析了解頁面使用情形，不會把密碼或完整表單內容送進分析工具。你可以允許分析，或只使用網站必要功能。</p>
            <a href="/privacy">查看隱私權說明</a>
          </div>
          <div className="analytics-consent-actions">
            <button type="button" onClick={() => choose("denied")}>僅必要</button>
            <button type="button" className="accept" onClick={() => choose("granted")}>允許分析</button>
          </div>
        </aside>
      )}
    </>
  );
}
