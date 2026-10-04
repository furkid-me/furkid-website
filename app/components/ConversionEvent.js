"use client";

import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

export default function ConversionEvent({ eventName, eventParams = {}, sessionKey }) {
  useEffect(() => {
    if (!eventName || typeof window === "undefined") return;

    const storageKey = sessionKey ? `furkid_conversion_${sessionKey}` : null;
    if (storageKey && window.sessionStorage.getItem(storageKey)) return;

    let stopped = false;
    let attempts = 0;
    const maxAttempts = 40; // ~10 seconds at 250 ms intervals

    const send = () => {
      if (stopped) return;
      attempts += 1;

      // GoogleAnalytics initializes after the GA script is ready. Conversion
      // pages can mount before that callback fires, so retry instead of
      // silently dropping the event. Only mark the session after a successful
      // handoff to gtag.
      if (trackEvent(eventName, eventParams)) {
        if (storageKey) window.sessionStorage.setItem(storageKey, "1");
        stopped = true;
        return;
      }

      if (attempts < maxAttempts) {
        window.setTimeout(send, 250);
      }
    };

    send();

    return () => {
      stopped = true;
    };
  }, [eventName, sessionKey]);

  return null;
}
