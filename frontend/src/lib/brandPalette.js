/** NeuralTrix brand palette — use role tokens or cycle accents, not one flat blue. */
export const PALETTE = {
  smartBlue: "#0466c8",
  sapphire: "#0353a4",
  regalNavy: "#023e7d",
  prussianBlue: "#002855",
  prussianBlue2: "#001845",
  prussianBlue3: "#001233",
  twilightIndigo: "#33415c",
  blueSlate: "#5c677d",
  slateGrey: "#7d8597",
  lavenderGrey: "#979dac",
  surface: "#eef4fc",
  surfaceStrong: "#dce8f5",
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
