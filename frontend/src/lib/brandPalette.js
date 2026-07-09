/** Site palette — monochrome surfaces with dark blue accents. */
export const PALETTE = {
  smartBlue: "#1a365d",
  sapphire: "#254770",
  regalNavy: "#173d5e",
  prussianBlue: "#0f2744",
  prussianBlue2: "#1e3a5f",
  prussianBlue3: "#2d4a6f",
  twilightIndigo: "#3d5a80",
  blueSlate: "#4a6fa5",
  slateGrey: "#5c7a9e",
  lavenderGrey: "#6b8caf",
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
