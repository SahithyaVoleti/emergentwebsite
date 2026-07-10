let bandIndex = 0;

/** Reset alternation at the start of each page render. */
export function resetSectionBands() {
  bandIndex = 0;
}

/** All content sections use the light (white) band. */
export function nextSectionBandClass() {
  bandIndex += 1;
  return "ubuntu-section--light";
}

/** Standard section wrapper classes with the next band tone. */
export function sectionBlockClass(...extra) {
  return ["ubuntu-section-block", nextSectionBandClass(), ...extra].filter(Boolean).join(" ");
}
