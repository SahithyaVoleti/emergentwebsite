/** Alternates image left/right across homepage media sections. */
export function homeImagePosition(index) {
  return index % 2 === 0 ? "right" : "left";
}
