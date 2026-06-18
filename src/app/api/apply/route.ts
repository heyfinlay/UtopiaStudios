import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

const applySubmissionSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  phone: z.string().min(6),
  businessName: z.string().min(2),
  website: z
    .string()
    .optional()
    .refine((value) => !value || /^https?:\/\//.test(value)),
  industry: z.string().min(2),
  mainAction: z.string().min(1),
  monthlyVolume: z.number().positive(),
  averageValue: z.number().positive(),
  tools: z.array(z.string()),
  aiTools: z.array(z.string()),
  aiToolsOther: z.string().optional(),
  biggestProblem: z.string().min(20),
  runningAds: z.string().min(1),
  hasCrm: z.string().min(1),
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
    phone: lead.phone,
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
      content: "New /apply lead submitted",
      embeds: [
        {
          title: "New Application Lead",
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
              name: "Main Problem",
              value: truncateDiscordField(fieldValue(lead.biggestProblem)),
              inline: false,
            },
            { name: "Main Action", value: fieldValue(lead.mainAction), inline: true },
            { name: "Running Ads", value: fieldValue(lead.runningAds), inline: true },
            { name: "CRM", value: fieldValue(lead.hasCrm), inline: true },
            { name: "Source", value: "/apply", inline: true },
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
  const parsed = applySubmissionSchema.safeParse(
    await request.json().catch(() => null),
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
