"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import {
  sendToCRM,
  sendToEmailPlatform,
  sendToWebhook,
} from "@/lib/integrations";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email."),
  phone: z.string().min(6, "Please enter a phone number."),
  businessName: z.string().min(2, "Please enter your business name."),
  website: z
    .string()
    .optional()
    .refine(
      (v) => !v || /^https?:\/\//.test(v),
      "Include https:// in the website URL.",
    ),
  industry: z.string().min(2, "Please enter your industry."),
  mainAction: z.string().min(1, "Select the main customer action."),
  monthlyVolume: z.string().min(1, "Select an approximate volume."),
  averageValue: z.string().min(1, "Enter an approximate customer value."),
  tools: z.array(z.string()),
  biggestProblem: z.string().min(20, "Please give us a little more context."),
  runningAds: z.string().min(1, "Select an answer."),
  hasCrm: z.string().min(1, "Select an answer."),
  consent: z.boolean().refine(Boolean, "Consent is required to continue."),
  marketingOptIn: z.boolean(),
});
type Values = z.infer<typeof schema>;
const toolOptions = [
  "Shopify",
  "GoHighLevel",
  "ClickFunnels",
  "Squarespace",
  "WordPress",
  "Webflow",
  "HubSpot",
  "Klaviyo",
  "Mailchimp",
  "Calendly",
  "Stripe",
  "Zapier",
  "Make",
  "n8n",
  "Other",
];

export function ApplicationForm() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState<Values | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { tools: [], marketingOptIn: false },
  });
  const onSubmit = async (values: Values) => {
    setSubmitted(values);
    console.info("Customer Journey Audit application", values);
    await Promise.all([
      sendToCRM(values),
      sendToWebhook(values),
      values.marketingOptIn ? sendToEmailPlatform(values) : Promise.resolve(),
    ]);
    window.setTimeout(() => router.push("/book"), 900);
  };
  if (submitted)
    return (
      <div className="py-20 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#73d9b0]" />
        <h2 className="mt-5 text-3xl font-semibold">Application received.</h2>
        <p className="mt-3 text-[#a9b0bd]">Taking you to the booking page...</p>
      </div>
    );
  const field = (
    name: keyof Values,
    label: string,
    placeholder: string,
    type = "text",
  ) => (
    <label>
      <span className="form-label">{label}</span>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={`input ${errors[name] ? "input-error" : ""}`}
      />
      {errors[name] && (
        <span className="form-error">{String(errors[name]?.message)}</span>
      )}
    </label>
  );
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Name *", "Your full name")}
        {field("email", "Email *", "you@company.com", "email")}
        {field("phone", "Phone *", "Your best contact number", "tel")}
        {field("businessName", "Business name *", "Company or brand")}
        {field("website", "Website", "https://yourwebsite.com", "url")}
        {field(
          "industry",
          "Industry *",
          "e.g. Dental, consulting, home services",
        )}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label>
          <span className="form-label">Main customer action *</span>
          <select {...register("mainAction")} className="input">
            <option value="">Select one</option>
            {[
              "Enquiry",
              "Booking",
              "Purchase",
              "Quote request",
              "Consultation",
              "Checkout",
            ].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
          {errors.mainAction && (
            <span className="form-error">{errors.mainAction.message}</span>
          )}
        </label>
        <label>
          <span className="form-label">
            Monthly enquiry / booking / purchase volume *
          </span>
          <select {...register("monthlyVolume")} className="input">
            <option value="">Select a range</option>
            {["Under 20", "20–50", "51–100", "101–250", "251–500", "500+"].map(
              (v) => (
                <option key={v}>{v}</option>
              ),
            )}
          </select>
          {errors.monthlyVolume && (
            <span className="form-error">{errors.monthlyVolume.message}</span>
          )}
        </label>
        {field("averageValue", "Average customer value *", "e.g. $2,500 AUD")}
      </div>
      <fieldset>
        <legend className="form-label">Current tools used</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {toolOptions.map((tool) => (
            <label
              key={tool}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.025] p-3 text-xs text-[#c0c6cf]"
            >
              <input
                type="checkbox"
                value={tool}
                {...register("tools")}
                className="accent-[#7772ff]"
              />
              {tool}
            </label>
          ))}
        </div>
      </fieldset>
      <label>
        <span className="form-label">Biggest current problem *</span>
        <textarea
          {...register("biggestProblem")}
          rows={5}
          className={`input resize-y ${errors.biggestProblem ? "input-error" : ""}`}
          placeholder="Where does the current journey feel slow, unclear, manual, or disconnected?"
        />
        {errors.biggestProblem && (
          <span className="form-error">{errors.biggestProblem.message}</span>
        )}
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        {[
          ["runningAds", "Are you currently running ads?"],
          ["hasCrm", "Do you currently have a CRM?"],
        ].map(([name, label]) => (
          <label key={name}>
            <span className="form-label">{label} *</span>
            <select
              {...register(name as "runningAds" | "hasCrm")}
              className="input"
            >
              <option value="">Select one</option>
              <option>Yes</option>
              <option>No</option>
              <option>Not sure</option>
            </select>
            {errors[name as "runningAds" | "hasCrm"] && (
              <span className="form-error">
                {errors[name as "runningAds" | "hasCrm"]?.message}
              </span>
            )}
          </label>
        ))}
      </div>
      <div className="space-y-4">
        <label className="flex items-start gap-3 text-sm leading-6 text-[#b8bec8]">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-1 accent-[#7772ff]"
          />
          I agree to be contacted by Temporary Utopia about my enquiry.
        </label>
        {errors.consent && (
          <span className="form-error block">{errors.consent.message}</span>
        )}
        <label className="flex items-start gap-3 text-sm leading-6 text-[#8f97a4]">
          <input
            type="checkbox"
            {...register("marketingOptIn")}
            className="mt-1 accent-[#7772ff]"
          />
          I’d like to receive occasional insights about improving customer
          journeys, automation, and digital revenue systems.
        </label>
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full rounded-full bg-[#e5e2e1] px-6 py-4 text-sm font-semibold text-[#1c1b1b] transition hover:brightness-110 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Continue to Booking"}
      </button>
    </form>
  );
}
