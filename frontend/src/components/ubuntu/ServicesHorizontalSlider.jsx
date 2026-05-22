import ProductHorizontalSlider from "./ProductHorizontalSlider";

/** @deprecated Use ServicesGrid4x4 for grid layout or ProductHorizontalSlider directly. */
export default function ServicesHorizontalSlider(props) {
  return (
    <ProductHorizontalSlider
      hrefFor={(s) => `/services/${s.slug}`}
      testIdPrefix="service-slide"
      {...props}
    />
  );
}
