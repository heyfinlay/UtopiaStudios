"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { sendToCRM, sendToWebhook } from "@/lib/integrations";

const schema = z.object({
  businessName: z.string().min(2, "Required"),
  website: z.string().min(3, "Required"),
  offers: z.string().min(10, "Add more detail"),
  customerType: z.string().min(3, "Required"),
  averageValue: z.string().min(1, "Required"),
  bestSeller: z.string().min(2, "Required"),
  profitableOffer: z.string().min(2, "Required"),
  sources: z.string().min(10, "Add more detail"),
  desiredAction: z.string().min(3, "Required"),
  afterAction: z.string().min(10, "Add more detail"),
  followUp: z.string().min(10, "Add more detail"),
  dropOff: z.string().min(10, "Add more detail"),
  tools: z.string().min(10, "List the current stack"),
  assets: z.string().min(10, "Add links or note what you will provide"),
  auditValue: z.string().min(10, "Add more detail"),
  outcome: z.string().min(3, "Required"),
  accessNotes: z.string().optional(),
});
type Values = z.infer<typeof schema>;

export function AuditIntakeForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({ resolver: zodResolver(schema) });
  const input = (
    name: keyof Values,
    label: string,
    placeholder: string,
    large = false,
  ) => (
    <label>
      <span className="form-label">{label}</span>
      {large ? (
        <textarea
          rows={5}
          {...register(name)}
          className={`input ${errors[name] ? "input-error" : ""}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          {...register(name)}
          className={`input ${errors[name] ? "input-error" : ""}`}
          placeholder={placeholder}
        />
      )}{" "}
      {errors[name] && (
        <span className="form-error">{errors[name]?.message}</span>
      )}
    </label>
  );
  if (done)
    return (
      <div className="py-20 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#73d9b0]" />
        <h2 className="mt-5 text-3xl font-semibold">Audit intake received.</h2>
        <p className="mt-3 text-[#a9b0bd]">
          Your information is ready for the onboarding call.
        </p>
      </div>
    );
  return (
    <form
      className="space-y-12"
      onSubmit={handleSubmit(async (values) => {
        console.info("Audit intake", values);
        await Promise.all([sendToCRM(values), sendToWebhook(values)]);
        setDone(true);
      })}
    >
      <FormGroup title="Business basics">
        <div className="grid gap-5 sm:grid-cols-2">
          {input("businessName", "Business name *", "Business name")}
          {input("website", "Website *", "https://")}
          {input("customerType", "Main customer type *", "Who you serve")}
          {input(
            "averageValue",
            "Average customer value *",
            "Approximate value",
          )}
          {input("bestSeller", "Best-selling offer *", "Offer name")}
          {input("profitableOffer", "Most profitable offer *", "Offer name")}
        </div>
        <div className="mt-5">
          {input(
            "offers",
            "Main offers / services / products *",
            "Describe your commercial offer mix",
            true,
          )}
        </div>
      </FormGroup>
      <FormGroup title="Current customer journey">
        <div className="grid gap-5 sm:grid-cols-2">
          {input(
            "sources",
            "Where do customers come from? *",
            "Ads, search, referral, social, partners...",
            true,
          )}
          {input(
            "desiredAction",
            "What action do you want them to take? *",
            "Book, buy, enquire...",
          )}
          {input(
            "afterAction",
            "What happens after they enquire, book, or buy? *",
            "Describe the handover",
            true,
          )}
          {input(
            "followUp",
            "What follow-up happens now? *",
            "Email, SMS, calls, CRM steps...",
            true,
          )}
          {input(
            "dropOff",
            "Where do people commonly drop off? *",
            "Known gaps or assumptions",
            true,
          )}
        </div>
      </FormGroup>
      <FormGroup title="Tools and assets">
        <div className="grid gap-5 sm:grid-cols-2">
          {input(
            "tools",
            "Current tool stack *",
            "Website, CRM, email/SMS, booking, payments, ads, analytics, automation and AI tools",
            true,
          )}
          {input(
            "assets",
            "Links and assets *",
            "Landing pages, ads, sequences, forms, bookings, FAQs, scripts, SOPs, objections, screenshots or Loom links",
            true,
          )}
          {input(
            "accessNotes",
            "Access and information notes",
            "What access can be provided, and by whom?",
            true,
          )}
        </div>
      </FormGroup>
      <FormGroup title="Goals">
        <div className="grid gap-5 sm:grid-cols-2">
          {input(
            "auditValue",
            "What would make this audit valuable? *",
            "Describe the decisions or clarity you need",
            true,
          )}
          <label>
            <span className="form-label">Outcome that matters most *</span>
            <select {...register("outcome")} className="input">
              <option value="">Select one</option>
              {[
                "More booked calls",
                "More purchases",
                "Faster response",
                "Better follow-up",
                "Less admin",
                "Better customer experience",
                "More repeat customers",
              ].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
            {errors.outcome && (
              <span className="form-error">{errors.outcome.message}</span>
            )}
          </label>
        </div>
      </FormGroup>
      <button
        disabled={isSubmitting}
        className="w-full rounded-full bg-[#e5e2e1] px-6 py-4 text-sm font-semibold text-[#1c1b1b] transition hover:brightness-110 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Submit Audit Intake"}
      </button>
    </form>
  );
}

function FormGroup({
  title,
  children,
}: React.PropsWithChildren<{ title: string }>) {
  return (
    <fieldset>
      <legend className="mb-6 text-xl font-semibold">{title}</legend>
      {children}
    </fieldset>
  );
}
