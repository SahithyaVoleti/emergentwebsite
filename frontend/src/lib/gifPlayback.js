/** Shared play-once GIF timing — matches homepage hero behavior site-wide. */
export const GIF_PLAY_ONCE_OBSERVER = {
  threshold: 0.15,
  rootMargin: "0px 0px -5% 0px",
};

export function gifPlaySrc(src) {
  return `${src}?play=${Date.now()}`;
}
