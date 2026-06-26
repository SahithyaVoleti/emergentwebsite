import solutions from "../../data/solutions";
import { getHomeAcceleratorSliderItems } from "../../lib/homeAcceleratorSliderItems";
import { toSolutionCarouselItem } from "../../lib/solutionDisplay";
import SolutionsAcceleratorCarousel from "./SolutionsAcceleratorCarousel";

function getPublicSolutions() {
  return solutions.map(toSolutionCarouselItem);
}

export default function SolutionsHorizontalSlider({
  items: itemsProp,
  useHomeSlides = false,
  ...props
}) {
  const items = itemsProp ?? (useHomeSlides ? getHomeAcceleratorSliderItems() : getPublicSolutions());

  return (
    <SolutionsAcceleratorCarousel
      items={items}
      id="solutions-slider"
      hrefFor={(item) => item.href ?? `/solutions/${item.slug}`}
      testIdPrefix="accelerator-slide"
      viewAllHref="/solutions"
      viewAllLabel="View all products"
      {...props}
    />
  );
}
