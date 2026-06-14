/** Read Vite env vars with safe fallbacks. */
export function env(key, fallback = "") {
  const value = import.meta.env[`VITE_${key}`];
  if (value === undefined || value === null || value === "") return fallback;
  return String(value).trim();
}

export function isDev() {
  return import.meta.env.DEV;
}

export function isProd() {
  return import.meta.env.PROD;
}
