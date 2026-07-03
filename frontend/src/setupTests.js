import "@testing-library/jest-dom/vitest";

Object.defineProperty(window, "scrollTo", {
  value: () => {},
  writable: true,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

Object.defineProperty(window, "open", {
  writable: true,
  value: () => null,
});

class MockObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

if (typeof window.IntersectionObserver === "undefined") {
  window.IntersectionObserver = MockObserver;
  global.IntersectionObserver = MockObserver;
}

if (typeof window.ResizeObserver === "undefined") {
  window.ResizeObserver = MockObserver;
  global.ResizeObserver = MockObserver;
}
