"use client";

import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

export default function ConversionEvent({ eventName, eventParams = {}, sessionKey }) {
  useEffect(() => {
    if (!eventName || typeof window === "undefined") return;

    const storageKey = sessionKey ? `furkid_conversion_${sessionKey}` : null;
    if (storageKey && window.sessionStorage.getItem(storageKey)) return;

    let stopped = false;
    let timer;
    const startedAt = Date.now();
    const retryWindowMs = 120000;

    const send = () => {
      if (stopped) return;

      // Analytics is consent-gated. A visitor may land on a conversion page
      // before choosing an analytics preference, so keep the conversion alive
      // long enough for an explicit grant instead of dropping it after 10s.
      // Only mark the session after a successful handoff to gtag.
      if (trackEvent(eventName, eventParams)) {
        if (storageKey) window.sessionStorage.setItem(storageKey, "1");
        stopped = true;
        return;
      }

      if (Date.now() - startedAt < retryWindowMs) {
        timer = window.setTimeout(send, 250);
      }
    };

    send();

    return () => {
      stopped = true;
      if (timer) window.clearTimeout(timer);
    };
  }, [eventName, sessionKey]);

  return null;
}
