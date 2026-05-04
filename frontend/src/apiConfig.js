/** Base URL for API (no trailing slash). Empty string = same origin as the site. */
const trimmed = (process.env.REACT_APP_BACKEND_URL || "").replace(/\/$/, "");
export const BACKEND_URL = trimmed;
export const API_BASE = trimmed ? `${trimmed}/api` : "/api";
