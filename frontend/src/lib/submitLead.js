import { openWhatsAppLead } from "../utils/whatsappLead";
import { env } from "./env";

const LEAD_API_URL = env("LEAD_API_URL");

/**
 * Submit a website lead: optionally POST to CRM/API, then open WhatsApp.
 * @param {Parameters<typeof openWhatsAppLead>[0]} payload
 * @returns {Promise<{ whatsappOpened: boolean, apiSubmitted: boolean, apiError: string | null }>}
 */
export async function submitLead(payload) {
  let apiSubmitted = false;
  let apiError = null;

  if (LEAD_API_URL) {
    try {
      const response = await fetch(LEAD_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          source: "website",
          submittedAt: new Date().toISOString(),
        }),
      });
      apiSubmitted = response.ok;
      if (!response.ok) {
        apiError = `API returned ${response.status}`;
      }
    } catch (err) {
      apiSubmitted = false;
      apiError = err?.message || "Network error";
    }
  }

  openWhatsAppLead(payload);

  return { whatsappOpened: true, apiSubmitted, apiError };
}
