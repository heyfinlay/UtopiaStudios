export type IntegrationPayload = Record<string, unknown>;

async function placeholder(name: string, payload: IntegrationPayload) {
  console.info(`[Temporary Utopia] ${name} placeholder`, payload);
  return { ok: true, provider: "placeholder" as const };
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
