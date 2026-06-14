import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { submitLead } from "./submitLead";
import * as whatsappLead from "../utils/whatsappLead";

vi.mock("./env", () => ({
  env: vi.fn((key) => {
    if (key === "LEAD_API_URL") return "https://api.example.com/leads";
    return "";
  }),
}));

describe("submitLead", () => {
  const payload = {
    first_name: "Ada",
    last_name: "Lovelace",
    email: "ada@example.com",
    description: "Interested in AI consulting",
  };

  beforeEach(() => {
    vi.spyOn(whatsappLead, "openWhatsAppLead").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("POSTs to the lead API when configured and opens WhatsApp", async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: true });

    const result = await submitLead(payload);

    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.example.com/leads",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
    );
    expect(whatsappLead.openWhatsAppLead).toHaveBeenCalledWith(payload);
    expect(result).toEqual({ whatsappOpened: true, apiSubmitted: true, apiError: null });
  });

  it("returns apiError when API responds with non-OK status", async () => {
    global.fetch = vi.fn().mockResolvedValue({ ok: false, status: 500 });

    const result = await submitLead(payload);

    expect(result.apiSubmitted).toBe(false);
    expect(result.apiError).toContain("500");
    expect(result.whatsappOpened).toBe(true);
  });

  it("returns apiError when fetch throws", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network down"));

    const result = await submitLead(payload);

    expect(result.apiSubmitted).toBe(false);
    expect(result.apiError).toBe("Network down");
    expect(result.whatsappOpened).toBe(true);
  });
});
