import solutions from "../data/solutions";
import { toSolutionCarouselItem } from "./solutionDisplay";

/**
 * Unified carousel items: solution accelerators only.
 */
export function getHomeAcceleratorSliderItems() {
  return solutions.map(toSolutionCarouselItem);
}
