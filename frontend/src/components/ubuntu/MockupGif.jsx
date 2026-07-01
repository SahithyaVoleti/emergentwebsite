import MockupFrame from "./MockupFrame";
import HeroPlayOnceGif from "./HeroPlayOnceGif";

/** Play-once GIF inside mockup frames — fill viewport edge-to-edge. */
export default function MockupGif({
  src,
  variant = "browser",
  screenClassName = "ubuntu-mockup__screen--gif",
  wrapClassName = "ubuntu-mockup__gif-wrap",
  imgClassName = "ubuntu-mockup__gif-img",
}) {
  if (!src) return null;

  return (
    <MockupFrame variant={variant} screenClassName={screenClassName}>
      <HeroPlayOnceGif src={src} wrapClassName={wrapClassName} className={imgClassName} />
    </MockupFrame>
  );
}
