export type IntegrationPayload = Record<string, unknown>;
export type LeadFormType = "application" | "audit_intake";

async function placeholder(name: string, payload: IntegrationPayload) {
  console.info(`[Temporary Utopia] ${name} placeholder`, payload);
  return { ok: true, provider: "placeholder" as const };
}

export async function submitLeadForm(
  formType: LeadFormType,
  payload: IntegrationPayload,
) {
  const response = await fetch("/api/lead-submissions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formType,
      payload,
      sourcePath:
        typeof window === "undefined"
          ? undefined
          : `${window.location.pathname}${window.location.search}`,
    }),
  });

  if (!response.ok) {
    throw new Error("Lead submission failed.");
  }

  return response.json() as Promise<{ ok: true }>;
}

export const sendToCRM = (payload: IntegrationPayload) =>
  placeholder("CRM submission", payload);
export const sendToWebhook = (payload: IntegrationPayload) =>
  placeholder("webhook submission", payload);
export const sendToEmailPlatform = (payload: IntegrationPayload) =>
  placeholder("email platform submission", payload);
export const createCalendarBooking = (payload: IntegrationPayload) =>
  placeholder("calendar booking", payload);
export const createStripeCheckout = (payload: IntegrationPayload) =>
  placeholder("Stripe checkout", payload);
