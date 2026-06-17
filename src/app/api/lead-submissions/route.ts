import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const payloadSchema = z.record(z.string(), z.unknown());

const requestSchema = z.object({
  formType: z.enum(["application", "audit_intake"]),
  payload: payloadSchema,
  sourcePath: z.string().optional(),
});

function stringValue(payload: Record<string, unknown>, key: string) {
  const value = payload[key];
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function booleanValue(payload: Record<string, unknown>, key: string) {
  const value = payload[key];
  return typeof value === "boolean" ? value : null;
}

export async function POST(request: Request) {
  const parsed = requestSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid lead submission payload." },
      { status: 400 },
    );
  }

  const { formType, payload, sourcePath } = parsed.data;
  const supabase = await createClient();

  const { error } = await supabase.from("lead_submissions").insert({
    form_type: formType,
    name: stringValue(payload, "name"),
    email: stringValue(payload, "email"),
    phone: stringValue(payload, "phone"),
    business_name: stringValue(payload, "businessName"),
    website: stringValue(payload, "website"),
    marketing_opt_in: booleanValue(payload, "marketingOptIn"),
    consent: booleanValue(payload, "consent"),
    source_path: sourcePath ?? null,
    user_agent: request.headers.get("user-agent"),
    payload,
  });

  if (error) {
    console.error("[lead_submissions] insert failed", error);
    return NextResponse.json(
      { error: "Could not save lead submission." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
