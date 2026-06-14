import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import SiteSEO from "./SiteSEO";
import { getSeoForPath } from "../data/seo";

function renderSeo(path) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <SiteSEO />
      </MemoryRouter>
    </HelmetProvider>
  );
}

describe("SiteSEO", () => {
  it("sets canonical and og:image for known routes", () => {
    renderSeo("/services");
    const seo = getSeoForPath("/services");
    expect(seo.noindex).toBe(false);
    expect(seo.ogImage).toBeTruthy();
  });

  it("marks unknown routes as noindex", () => {
    const seo = getSeoForPath("/does-not-exist");
    expect(seo.noindex).toBe(true);
    expect(seo.title).toMatch(/not found/i);
  });
});
