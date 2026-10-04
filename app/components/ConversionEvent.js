"use client";

import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

export default function ConversionEvent({ eventName, eventParams = {}, sessionKey }) {
  useEffect(() => {
    if (!eventName) return;

    if (sessionKey && typeof window !== "undefined") {
      const storageKey = `furkid_conversion_${sessionKey}`;
      if (window.sessionStorage.getItem(storageKey)) return;
      window.sessionStorage.setItem(storageKey, "1");
    }

    trackEvent(eventName, eventParams);
  }, [eventName, eventParams, sessionKey]);

  return null;
}
