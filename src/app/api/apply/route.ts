import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

function normalizeWebsite(value: unknown) {
  if (typeof value !== "string") {
    return value;
  }

  const trimmedValue = value.trim();

  if (!trimmedValue || /^https?:\/\//i.test(trimmedValue)) {
    return trimmedValue;
  }

  return `https://${trimmedValue}`;
}

function normalizeApplyPayload(payload: unknown) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return payload;
  }

  return {
    ...payload,
    website: normalizeWebsite((payload as { website?: unknown }).website),
  };
}

const applySubmissionSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  businessName: z.string().min(2),
  website: z
    .string()
    .optional()
    .refine((value) => !value || /^https?:\/\/[^\s.]+\.[^\s]+$/.test(value)),
  offer: z.string().min(4),
  idealCustomer: z.string().min(4),
  leadSources: z.array(z.string()).min(1),
  afterEnquiry: z.string().min(12),
  followUpSpeed: z.string().min(1),
  tools: z.string().optional(),
  monthlyVolume: z.number().positive(),
  averageValue: z.number().positive(),
  dropOff: z.string().min(12),
  consent: z.boolean().refine(Boolean),
  marketingOptIn: z.boolean(),
  sourcePath: z.string().optional(),
});

type ApplySubmission = z.infer<typeof applySubmissionSchema>;

function fieldValue(value: unknown) {
  if (typeof value === "string") {
    return value.trim() || "Not provided";
  }

  if (typeof value === "number") {
    return new Intl.NumberFormat("en-AU").format(value);
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : "Not provided";
  }

  return "Not provided";
}

function moneyValue(value: number) {
  return `$${new Intl.NumberFormat("en-AU").format(value)}`;
}

function truncateDiscordField(value: string) {
  return value.length > 1024 ? `${value.slice(0, 1021)}...` : value;
}

async function saveApplyLead(lead: ApplySubmission, request: Request) {
  const supabase = await createClient();

  return supabase.from("lead_submissions").insert({
    form_type: "application",
    name: lead.name,
    email: lead.email,
    phone: null,
    business_name: lead.businessName,
    website: lead.website || null,
    marketing_opt_in: lead.marketingOptIn,
    consent: lead.consent,
    source_path: lead.sourcePath ?? "/apply",
    user_agent: request.headers.get("user-agent"),
    payload: lead,
  });
}

async function sendDiscordLeadNotification(lead: ApplySubmission) {
  const webhookUrl = process.env.DISCORD_LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("[api/apply] DISCORD_LEAD_WEBHOOK_URL is not configured.");
    return { ok: false, reason: "missing_webhook_url" as const };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Temporary Utopia Leads",
      content: "New Revenue Leak Map request submitted",
      embeds: [
        {
          title: "New Revenue Leak Map Request",
          color: 0xffffff,
          fields: [
            { name: "Name", value: fieldValue(lead.name), inline: true },
            { name: "Email", value: fieldValue(lead.email), inline: true },
            {
              name: "Business",
              value: fieldValue(lead.businessName),
              inline: true,
            },
            { name: "Website", value: fieldValue(lead.website), inline: false },
            {
              name: "Volume / Value",
              value: `Monthly volume: ${fieldValue(
                lead.monthlyVolume,
              )}\nAverage value: ${moneyValue(lead.averageValue)}`,
              inline: false,
            },
            {
              name: "What they sell",
              value: truncateDiscordField(fieldValue(lead.offer)),
              inline: false,
            },
            {
              name: "Ideal Customer",
              value: truncateDiscordField(fieldValue(lead.idealCustomer)),
              inline: false,
            },
            {
              name: "Lead Sources",
              value: fieldValue(lead.leadSources),
              inline: false,
            },
            {
              name: "After Enquiry",
              value: truncateDiscordField(fieldValue(lead.afterEnquiry)),
              inline: false,
            },
            {
              name: "Follow-Up Speed",
              value: fieldValue(lead.followUpSpeed),
              inline: true,
            },
            {
              name: "Current Tools",
              value: truncateDiscordField(fieldValue(lead.tools)),
              inline: false,
            },
            {
              name: "Likely Drop-Off",
              value: truncateDiscordField(fieldValue(lead.dropOff)),
              inline: false,
            },
            { name: "Source", value: fieldValue(lead.sourcePath), inline: true },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  });

  if (!response.ok) {
    console.error("[api/apply] Discord webhook request failed.", {
      status: response.status,
      statusText: response.statusText,
    });
    return { ok: false, reason: "discord_failed" as const };
  }

  return { ok: true as const };
}

export async function POST(request: Request) {
  const payload = normalizeApplyPayload(await request.json().catch(() => null));
  const parsed = applySubmissionSchema.safeParse(
    payload,
  );

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid application submission.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const lead = parsed.data;

  const { error: saveError } = await saveApplyLead(lead, request);

  if (saveError) {
    console.error("[api/apply] lead_submissions insert failed", saveError);
    return NextResponse.json(
      { error: "Could not save application lead." },
      { status: 500 },
    );
  }

  const discordResult = await sendDiscordLeadNotification(lead);

  if (!discordResult.ok) {
    return NextResponse.json(
      {
        error:
          discordResult.reason === "missing_webhook_url"
            ? "Discord lead webhook is not configured."
            : "Discord lead webhook notification failed.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
