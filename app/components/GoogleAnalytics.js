"use client";

import Script from "next/script";

import { initializeAnalytics } from "../lib/analytics";

const MEASUREMENT_ID = "G-X34S7PS6ST";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

export default function GoogleAnalytics() {
  if (!IS_PRODUCTION) return null;

  return (
    <Script
      id="google-analytics"
      src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
      strategy="afterInteractive"
      onReady={() => initializeAnalytics(MEASUREMENT_ID)}
    />
  );
}
