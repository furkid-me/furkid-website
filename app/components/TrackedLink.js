"use client";

import { trackEvent } from "../lib/analytics";

export default function TrackedLink({ eventName, eventParams = {}, onClick, ...props }) {
  function handleClick(event) {
    if (onClick) onClick(event);
    if (event.defaultPrevented || !eventName) return;

    const href = props.href;
    const isNormalPrimaryClick =
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey &&
      props.target !== "_blank" &&
      !props.download &&
      typeof href === "string" &&
      href.length > 0;

    if (!isNormalPrimaryClick) {
      trackEvent(eventName, {
        link_url: href,
        ...eventParams,
      });
      return;
    }

    event.preventDefault();

    let navigated = false;
    const navigate = () => {
      if (navigated) return;
      navigated = true;
      window.location.href = href;
    };

    const queued = trackEvent(eventName, {
      link_url: href,
      ...eventParams,
      event_callback: navigate,
      event_timeout: 700,
    });

    if (!queued) {
      navigate();
      return;
    }

    // Fallback in case GA4 never invokes event_callback (blocked script/network).
    window.setTimeout(navigate, 750);
  }

  return <a {...props} onClick={handleClick} />;
}
