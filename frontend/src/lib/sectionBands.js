let bandIndex = 0;

/** Reset alternation at the start of each page render. */
export function resetSectionBands() {
  bandIndex = 0;
}

/** Next alternating band class — mostly black with periodic white bands. */
export function nextSectionBandClass() {
  const tone = bandIndex % 3 === 2 ? "ubuntu-section--light" : "ubuntu-section--dark";
  bandIndex += 1;
  return tone;
}

/** Standard section wrapper classes with the next band tone. */
export function sectionBlockClass(...extra) {
  return ["ubuntu-section-block", nextSectionBandClass(), ...extra].filter(Boolean).join(" ");
}
