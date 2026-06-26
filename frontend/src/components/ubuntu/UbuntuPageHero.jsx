import UbuntuLightSplitHero from "./UbuntuLightSplitHero";

/** @deprecated Use PageHero or UbuntuLightSplitHero directly. */
export default function UbuntuPageHero(props) {
  return (
    <UbuntuLightSplitHero
      {...props}
      badge={props.label}
      significance={props.significance ?? "primary"}
    />
  );
}
