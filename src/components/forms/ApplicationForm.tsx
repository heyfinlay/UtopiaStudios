"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  sendToCRM,
  sendToEmailPlatform,
  sendToWebhook,
} from "@/lib/integrations";
import {
  AverageValueSlider,
  defaultAverageCustomerValue,
} from "@/components/forms/AverageValueSlider";

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
  aiTools: z.array(z.string()),
  aiToolsOther: z.string().optional(),
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

const aiToolOptions = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Perplexity",
  "OpenAI API",
  "OpenRouter",
  "Microsoft Copilot",
  "Notion AI",
  "Midjourney",
  "Runway",
  "Higgsfield",
  "Canva AI",
  "Cursor",
  "Zapier AI",
  "Make AI",
  "Other",
];

type FieldName = keyof Values;

const steps: Array<{
  eyebrow: string;
  title: string;
  description: string;
  fields: FieldName[];
  validationSchema: z.ZodType;
}> = [
  {
    eyebrow: "Step 1 of 5",
    title: "What business should we audit?",
    description:
      "Start with the commercial context so we can understand the journey we are reviewing.",
    fields: ["businessName", "website", "industry", "mainAction"],
    validationSchema: schema.pick({
      businessName: true,
      website: true,
      industry: true,
      mainAction: true,
    }),
  },
  {
    eyebrow: "Step 2 of 5",
    title: "Who should we contact?",
    description: "Add the best person for the fit call and audit follow-up.",
    fields: ["name", "email", "phone"],
    validationSchema: schema.pick({
      name: true,
      email: true,
      phone: true,
    }),
  },
  {
    eyebrow: "Step 3 of 5",
    title: "Where is the journey leaking?",
    description:
      "Share the scale of the current customer journey and the main problem you want fixed.",
    fields: [
      "monthlyVolume",
      "averageValue",
      "biggestProblem",
      "runningAds",
      "hasCrm",
    ],
    validationSchema: schema.pick({
      monthlyVolume: true,
      averageValue: true,
      biggestProblem: true,
      runningAds: true,
      hasCrm: true,
    }),
  },
  {
    eyebrow: "Step 4 of 5",
    title: "What tools are already in the stack?",
    description:
      "Select the platforms and AI tools your team currently uses. This helps us avoid recommending systems that duplicate what already works.",
    fields: ["tools", "aiTools", "aiToolsOther"],
    validationSchema: schema.pick({
      tools: true,
      aiTools: true,
      aiToolsOther: true,
    }),
  },
  {
    eyebrow: "Step 5 of 5",
    title: "Confirm and continue to booking.",
    description:
      "Final consent before we send the application into the audit workflow.",
    fields: ["consent", "marketingOptIn"],
    validationSchema: schema.pick({
      consent: true,
      marketingOptIn: true,
    }),
  },
];

export function ApplicationForm() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState<Values | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      tools: [],
      aiTools: [],
      aiToolsOther: "",
      averageValue: defaultAverageCustomerValue,
      marketingOptIn: false,
    },
  });

  const currentStep = steps[stepIndex];
  const isLastStep = stepIndex === steps.length - 1;
  const progress = ((stepIndex + 1) / steps.length) * 100;

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

  const goNext = () => {
    clearErrors(currentStep.fields);
    const values = getValues();
    const stepValues = currentStep.fields.reduce<Partial<Values>>(
      (acc, fieldName) => ({
        ...acc,
        [fieldName]: values[fieldName],
      }),
      {},
    );
    const result = currentStep.validationSchema.safeParse(stepValues);

    if (!result.success) {
      let shouldFocus = true;
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as FieldName | undefined;
        if (fieldName && currentStep.fields.includes(fieldName)) {
          setError(
            fieldName,
            { type: "manual", message: issue.message },
            { shouldFocus },
          );
          shouldFocus = false;
        }
      });
      return;
    }

    setStepIndex((current) => Math.min(current + 1, steps.length - 1));
  };

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

  const selectField = (
    name: "mainAction" | "monthlyVolume" | "runningAds" | "hasCrm",
    label: string,
    placeholder: string,
    options: string[],
  ) => (
    <label>
      <span className="form-label">{label}</span>
      <select {...register(name)} className="input">
        <option value="">{placeholder}</option>
        {options.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
      {errors[name] && (
        <span className="form-error">{errors[name]?.message}</span>
      )}
    </label>
  );

  const checkboxGrid = (name: "tools" | "aiTools", options: string[]) => (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[.025] p-3 text-xs text-[#c0c6cf] transition hover:border-cyan-100/25 hover:bg-white/[.045]"
        >
          <input
            type="checkbox"
            value={option}
            {...register(name)}
            className="accent-[#e5e2e1]"
          />
          {option}
        </label>
      ))}
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <div>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow text-cyan-100/80">{currentStep.eyebrow}</p>
            <h2 className="section-title mt-3 text-3xl font-semibold text-white md:text-4xl">
              {currentStep.title}
            </h2>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#c5c7c9]">
            {stepIndex + 1}/{steps.length}
          </span>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-[#aab1bd]">
          {currentStep.description}
        </p>
        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-200 via-white to-violet-200 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {stepIndex === 0 && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-cyan-100/15 bg-white/[.025] p-5">
            <p className="text-xl font-medium tracking-[-0.02em] text-white">
              First question: what business should we look at?
            </p>
            <p className="mt-2 text-sm leading-6 text-[#aab1bd]">
              Give us the business name and enough context to understand what
              kind of customer journey we are reviewing.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {field("businessName", "Business name *", "Company or brand")}
            {field("website", "Website", "https://yourwebsite.com", "url")}
            {field(
              "industry",
              "Industry *",
              "e.g. Dental, consulting, home services",
            )}
            {selectField("mainAction", "Main customer action *", "Select one", [
              "Enquiry",
              "Booking",
              "Purchase",
              "Quote request",
              "Consultation",
              "Checkout",
            ])}
          </div>
        </div>
      )}

      {stepIndex === 1 && (
        <div className="grid gap-5 sm:grid-cols-2">
          {field("name", "Name *", "Your full name")}
          {field("email", "Email *", "you@company.com", "email")}
          {field("phone", "Phone *", "Your best contact number", "tel")}
        </div>
      )}

      {stepIndex === 2 && (
        <div className="space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {selectField(
              "monthlyVolume",
              "Monthly enquiry / booking / purchase volume *",
              "Select a range",
              ["Under 20", "20–50", "51–100", "101–250", "251–500", "500+"],
            )}
            <AverageValueSlider
              name="averageValue"
              label="Average customer value *"
              register={register}
              setValue={setValue}
              errors={errors}
            />
            {selectField(
              "runningAds",
              "Are you currently running ads? *",
              "Select one",
              ["Yes", "No", "Not sure"],
            )}
            {selectField(
              "hasCrm",
              "Do you currently have a CRM? *",
              "Select one",
              ["Yes", "No", "Not sure"],
            )}
          </div>
          <label>
            <span className="form-label">Biggest current problem *</span>
            <textarea
              {...register("biggestProblem")}
              rows={5}
              className={`input resize-y ${
                errors.biggestProblem ? "input-error" : ""
              }`}
              placeholder="Where does the current journey feel slow, unclear, manual, or disconnected?"
            />
            {errors.biggestProblem && (
              <span className="form-error">
                {errors.biggestProblem.message}
              </span>
            )}
          </label>
        </div>
      )}

      {stepIndex === 3 && (
        <div className="space-y-8">
          <fieldset>
            <legend className="form-label mb-3">Current business tools</legend>
            {checkboxGrid("tools", toolOptions)}
          </fieldset>
          <fieldset>
            <legend className="form-label mb-3">AI tools currently used</legend>
            {checkboxGrid("aiTools", aiToolOptions)}
          </fieldset>
          {field(
            "aiToolsOther",
            "Other AI tools or notes",
            "e.g. internal GPTs, agents, image/video tools, automations",
          )}
        </div>
      )}

      {stepIndex === 4 && (
        <div className="space-y-5 rounded-3xl border border-white/10 bg-white/[.025] p-5">
          <label className="flex items-start gap-3 text-sm leading-6 text-[#b8bec8]">
            <input
              type="checkbox"
              {...register("consent")}
              className="mt-1 accent-[#e5e2e1]"
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
              className="mt-1 accent-[#e5e2e1]"
            />
            I’d like to receive occasional insights about improving customer
            journeys, automation, and digital revenue systems.
          </label>
        </div>
      )}

      <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => setStepIndex((current) => Math.max(current - 1, 0))}
          disabled={stepIndex === 0 || isSubmitting}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-[#e5e2e1] transition hover:bg-white/[.05] disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        {isLastStep ? (
          <button
            disabled={isSubmitting}
            type="submit"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e5e2e1] px-6 py-4 text-sm font-semibold text-[#1c1b1b] transition hover:brightness-110 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Continue to Booking"}
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            disabled={isSubmitting}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#e5e2e1] px-6 py-4 text-sm font-semibold text-[#1c1b1b] transition hover:brightness-110 disabled:opacity-50"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </form>
  );
}
