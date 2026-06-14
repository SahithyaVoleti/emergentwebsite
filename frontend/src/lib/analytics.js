import { env } from "./env";

/** Load PostHog only when VITE_POSTHOG_KEY is set. */
export function initAnalytics() {
  const key = env("POSTHOG_KEY");
  if (!key || typeof window === "undefined") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://us-assets.i.posthog.com/static/array.js";
  script.onload = () => {
    if (window.posthog) {
      window.posthog.init(key, {
        api_host: "https://us.i.posthog.com",
        person_profiles: "identified_only",
        session_recording: {
          recordCrossOriginIframes: true,
          capturePerformance: false,
        },
      });
    }
  };
  document.head.appendChild(script);
}

/** Capture a named event when PostHog is loaded. */
export function captureEvent(eventName, properties = {}) {
  if (typeof window !== "undefined" && window.posthog?.capture) {
    window.posthog.capture(eventName, properties);
  }
}
