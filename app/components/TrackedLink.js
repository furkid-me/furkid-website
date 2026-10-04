"use client";

import { trackEvent } from "../lib/analytics";

export default function TrackedLink({ eventName, eventParams = {}, onClick, ...props }) {
  function handleClick(event) {
    if (eventName) {
      trackEvent(eventName, {
        link_url: props.href,
        ...eventParams,
      });
    }
    if (onClick) onClick(event);
  }

  return <a {...props} onClick={handleClick} />;
}
