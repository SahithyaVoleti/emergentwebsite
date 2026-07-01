import { describe, expect, it } from "vitest";
import SectionEyebrow from "../components/ubuntu/SectionEyebrow";
import SectionTitle from "../components/ubuntu/SectionTitle";
import { splitLayoutContentAtTitle } from "./splitLayoutContent";

describe("splitLayoutContentAtTitle", () => {
  it("splits at SectionTitle so media can sit between title and lead on mobile", () => {
    const children = [
      <SectionEyebrow key="eyebrow">Methodology</SectionEyebrow>,
      <SectionTitle key="title" title="Outcomes for enterprise AI" />,
      <p key="lead" className="ubuntu-lead">
        Supporting description.
      </p>,
    ];

    const result = splitLayoutContentAtTitle(children);

    expect(result.structured).toBe(true);
    expect(result.intro).toHaveLength(2);
    expect(result.body).toHaveLength(1);
    expect(result.body[0].props.className).toContain("ubuntu-lead");
  });

  it("returns unstructured copy when no section title is present", () => {
    const children = [<p key="lead">Only body copy.</p>];
    const result = splitLayoutContentAtTitle(children);

    expect(result.structured).toBe(false);
    expect(result.intro).toBeNull();
    expect(result.body).toBe(children);
  });
});
