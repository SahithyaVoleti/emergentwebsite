/** True when a media URL points at an animated GIF asset. */
export function isGifSrc(src) {
  return typeof src === "string" && /\.gif(\?|$)/i.test(src);
}
