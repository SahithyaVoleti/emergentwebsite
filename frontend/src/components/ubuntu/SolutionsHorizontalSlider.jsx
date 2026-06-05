import solutions from "../../data/solutions";
import { getHomeAcceleratorSliderItems } from "../../lib/homeAcceleratorSliderItems";
import SolutionsAcceleratorCarousel from "./SolutionsAcceleratorCarousel";

export default function SolutionsHorizontalSlider({
  items: itemsProp,
  useHomeSlides = false,
  ...props
}) {
  const items = itemsProp ?? (useHomeSlides ? getHomeAcceleratorSliderItems() : solutions);

  return (
    <SolutionsAcceleratorCarousel
      items={items}
      id="solutions-slider"
      hrefFor={(item) => item.href ?? `/solutions/${item.slug}`}
      testIdPrefix="accelerator-slide"
      viewAllHref="/solutions"
      viewAllLabel="View all accelerators"
      {...props}
    />
  );
}
