/** Map `{ step, desc }` process arrays to methodology stepper items. */
export function toMethodologyStripSteps(process = []) {
  return process.map((step, index) => ({
    value: String(index + 1).padStart(2, "0"),
    label: step.step,
  }));
}
