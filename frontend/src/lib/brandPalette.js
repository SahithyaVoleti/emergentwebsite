/** Site palette — hero-aligned terracotta, charcoal, and burgundy accents. */
export const PALETTE = {
  smartBlue: "#d1511f",
  sapphire: "#b8451a",
  regalNavy: "#8b4c6e",
  prussianBlue: "#2d2d2d",
  prussianBlue2: "#252525",
  prussianBlue3: "#1a1a1a",
  twilightIndigo: "#4a4a4a",
  blueSlate: "#6b5564",
  slateGrey: "#7d6b75",
  lavenderGrey: "#9a8490",
  surface: "#ffffff",
  surfaceStrong: "#e5e5e5",
};

/** Rotating accents for cards, icons, and badges. */
export const ACCENT_CYCLE = [
  PALETTE.smartBlue,
  PALETTE.sapphire,
  PALETTE.regalNavy,
  PALETTE.prussianBlue,
  PALETTE.twilightIndigo,
  PALETTE.blueSlate,
];

export function paletteAccentIndex(index) {
  return Math.abs(index) % ACCENT_CYCLE.length;
}

export function paletteAccent(index) {
  return ACCENT_CYCLE[paletteAccentIndex(index)];
}

export default PALETTE;
