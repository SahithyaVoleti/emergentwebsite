import UbuntuLightSplitHero from "./UbuntuLightSplitHero";

/** @deprecated Use PageHero or UbuntuLightSplitHero directly. */
export default function UbuntuPageHero(props) {
  return (
    <UbuntuLightSplitHero
      {...props}
      significance={props.significance ?? "primary"}
    />
  );
}
