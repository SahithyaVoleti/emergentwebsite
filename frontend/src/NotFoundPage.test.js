import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

jest.mock("./components/ubuntu/UbuntuPageShell", () => ({
  __esModule: true,
  default: ({ children }) => <div data-testid="page-shell">{children}</div>,
}));

describe("NotFoundPage", () => {
  it("renders a helpful 404 message", () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <NotFoundPage />
        </MemoryRouter>
      </HelmetProvider>
    );

    expect(screen.getByRole("heading", { name: /page not found/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back to home/i })).toHaveAttribute("href", "/");
  });
});
