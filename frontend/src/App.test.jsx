import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";

const { initialEntriesRef } = vi.hoisted(() => ({
  initialEntriesRef: { current: ["/"] },
}));

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    BrowserRouter: ({ children }) => (
      <actual.MemoryRouter initialEntries={initialEntriesRef.current}>
        {children}
      </actual.MemoryRouter>
    ),
  };
});

import App from "@/App";

function renderApp(initialPath = "/") {
  initialEntriesRef.current = [initialPath];
  return render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}

describe("App", () => {
  it("renders the homepage", async () => {
    renderApp("/");
    expect(await screen.findByTestId("hero-section")).toBeInTheDocument();
  });

  it("renders the services hub", async () => {
    renderApp("/services");
    expect(document.getElementById("main-content")).toBeInTheDocument();
  });

  it("renders the 404 page for unknown routes", async () => {
    renderApp("/this-route-does-not-exist");
    expect(await screen.findByText(/Page not found/i, { timeout: 8000 })).toBeInTheDocument();
  });
});
