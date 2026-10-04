/**
 * Production analytics event map for FURKID.ME.
 * Keep event names stable so GA4 reports and conversions remain comparable over time.
 */
export const ANALYTICS_EVENTS = Object.freeze({
  // Primary conversions
  PET_PARENT_SIGNUP: "pet_parent_signup",
  PROFESSIONAL_NEWSLETTER_SIGNUP: "professional_newsletter_signup",

  // Secondary conversions / engagement
  VET_GUIDE_ENGAGEMENT: "vet_guide_engagement",
  LEARN_RESOURCE_ENGAGEMENT: "learn_resource_engagement",
  SUPPORT_INQUIRY: "support_inquiry",
  PRODUCT_CHECKOUT_CLICK: "product_checkout_click",

  // Generic navigation measurement
  OUTBOUND_CLICK: "outbound_click",
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
  if (!gtag || !configuredMeasurementId) return false;

  // Explicitly target the production stream and prefer beacon transport so
  // events survive same-tab navigation away from the current document.
  gtag("event", eventName, {
    send_to: configuredMeasurementId,
    transport_type: "beacon",
    ...parameters,
  });
  return true;
}
