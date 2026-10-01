/**
 * GA4 event names reserved for the site's future conversion tracking.
 * Add the corresponding calls only when those interactions exist in the UI.
 */
export const ANALYTICS_EVENTS = Object.freeze({
  NEWSLETTER_SIGNUP: "newsletter_signup",
  VET_GUIDE_VIEW: "vet_guide_view",
  LEARN_VIEW: "learn_view",
  SUPPORT_CLICK: "support_click",
  PORTALY_CHECKOUT_CLICK: "portaly_checkout_click",
});

let configuredMeasurementId;

function getGtag() {
  if (typeof window === "undefined") return null;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  return window.gtag;
}

export function initializeAnalytics(measurementId) {
  const gtag = getGtag();
  if (!gtag || configuredMeasurementId === measurementId) return;

  gtag("js", new Date());
  // Keep GA4 Enhanced Measurement enabled. Its browser-history listener
  // records App Router navigations without a second, manual page_view sender.
  gtag("config", measurementId);
  configuredMeasurementId = measurementId;
}

export function trackEvent(eventName, parameters = {}) {
  const gtag = getGtag();
  if (!gtag || !configuredMeasurementId) return;

  gtag("event", eventName, parameters);
}
