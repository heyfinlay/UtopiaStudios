"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  sendToEmailPlatform,
  sendToWebhook,
  submitLeadForm,
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
type FieldName = keyof Values;

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

type Question = {
  eyebrow: string;
  title: string;
  description: string;
  fields: FieldName[];
  validationSchema: z.ZodType;
  placeholder?: string;
  inputType?: "text" | "url" | "email" | "tel";
  control?: "input" | "textarea" | "select" | "slider" | "checkboxGrid" | "confirm";
  options?: string[];
  checkboxOptions?: string[];
};

const questions: Question[] = [
  {
    eyebrow: "Question 1",
    title: "What business should we audit?",
    description: "Add the company, clinic, studio, or brand name.",
    fields: ["businessName"],
    validationSchema: schema.pick({ businessName: true }),
    placeholder: "Company or brand",
  },
  {
    eyebrow: "Question 2",
    title: "What website should we review?",
    description: "Share the main website or landing page if there is one.",
    fields: ["website"],
    validationSchema: schema.pick({ website: true }),
    placeholder: "https://yourwebsite.com",
    inputType: "url",
  },
  {
    eyebrow: "Question 3",
    title: "What industry are you in?",
    description: "Give us the market context for the customer journey.",
    fields: ["industry"],
    validationSchema: schema.pick({ industry: true }),
    placeholder: "e.g. Dental, consulting, home services",
  },
  {
    eyebrow: "Question 4",
    title: "What is the main customer action?",
    description: "Choose the action the journey should make easier to complete.",
    fields: ["mainAction"],
    validationSchema: schema.pick({ mainAction: true }),
    control: "select",
    options: [
      "Enquiry",
      "Booking",
      "Purchase",
      "Quote request",
      "Consultation",
      "Checkout",
    ],
  },
  {
    eyebrow: "Question 5",
    title: "What is your name?",
    description: "Add the best contact for the fit call and audit follow-up.",
    fields: ["name"],
    validationSchema: schema.pick({ name: true }),
    placeholder: "Your full name",
  },
  {
    eyebrow: "Question 6",
    title: "What email should we use?",
    description: "Use the address where you want the booking details sent.",
    fields: ["email"],
    validationSchema: schema.pick({ email: true }),
    placeholder: "you@company.com",
    inputType: "email",
  },
  {
    eyebrow: "Question 7",
    title: "What phone number should we use?",
    description: "Add the best number in case we need to clarify the application.",
    fields: ["phone"],
    validationSchema: schema.pick({ phone: true }),
    placeholder: "Your best contact number",
    inputType: "tel",
  },
  {
    eyebrow: "Question 8",
    title: "What is your monthly enquiry, booking, or purchase volume?",
    description: "A rough range is enough for the fit check.",
    fields: ["monthlyVolume"],
    validationSchema: schema.pick({ monthlyVolume: true }),
    control: "select",
    options: ["Under 20", "20-50", "51-100", "101-250", "251-500", "500+"],
  },
  {
    eyebrow: "Question 9",
    title: "What is the average customer value?",
    description: "This helps size whether a journey audit is commercially useful.",
    fields: ["averageValue"],
    validationSchema: schema.pick({ averageValue: true }),
    control: "slider",
  },
  {
    eyebrow: "Question 10",
    title: "Are you currently running ads?",
    description:
      "This helps us understand whether paid demand is already entering the journey.",
    fields: ["runningAds"],
    validationSchema: schema.pick({ runningAds: true }),
    control: "select",
    options: ["Yes", "No", "Not sure"],
  },
  {
    eyebrow: "Question 11",
    title: "Do you currently have a CRM?",
    description: "Tell us whether leads and follow-up are already tracked somewhere.",
    fields: ["hasCrm"],
    validationSchema: schema.pick({ hasCrm: true }),
    control: "select",
    options: ["Yes", "No", "Not sure"],
  },
  {
    eyebrow: "Question 12",
    title: "Where does the journey feel most broken?",
    description:
      "Share the slow, unclear, manual, or disconnected part you most want fixed.",
    fields: ["biggestProblem"],
    validationSchema: schema.pick({ biggestProblem: true }),
    control: "textarea",
    placeholder:
      "Where does the current journey feel slow, unclear, manual, or disconnected?",
  },
  {
    eyebrow: "Question 13",
    title: "What business tools are currently in the stack?",
    description: "Select the platforms your team already uses.",
    fields: ["tools"],
    validationSchema: schema.pick({ tools: true }),
    control: "checkboxGrid",
    checkboxOptions: toolOptions,
  },
  {
    eyebrow: "Question 14",
    title: "What AI tools are currently used?",
    description: "Select any AI tools already involved in your work or customer journey.",
    fields: ["aiTools"],
    validationSchema: schema.pick({ aiTools: true }),
    control: "checkboxGrid",
    checkboxOptions: aiToolOptions,
  },
  {
    eyebrow: "Question 15",
    title: "Any other AI tools or notes?",
    description:
      "Add internal GPTs, agents, image/video tools, automations, or anything we should know.",
    fields: ["aiToolsOther"],
    validationSchema: schema.pick({ aiToolsOther: true }),
    placeholder: "Optional notes",
  },
  {
    eyebrow: "Question 16",
    title: "Confirm and continue to booking.",
    description: "Final consent before we send the application into the audit workflow.",
    fields: ["consent", "marketingOptIn"],
    validationSchema: schema.pick({ consent: true, marketingOptIn: true }),
    control: "confirm",
  },
];

const fieldLabels: Partial<Record<FieldName, string>> = {
  aiToolsOther: "Additional notes",
  averageValue: "Average customer value",
  biggestProblem: "Journey friction",
  businessName: "Company / brand name",
  email: "Email address",
  hasCrm: "CRM status",
  industry: "Industry",
  mainAction: "Main action",
  monthlyVolume: "Monthly volume",
  name: "Your name",
  phone: "Phone number",
  runningAds: "Ad status",
  website: "Website URL",
};

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

  const currentQuestion = questions[stepIndex];
  const isLastStep = stepIndex === questions.length - 1;
  const progress = ((stepIndex + 1) / questions.length) * 100;

  const onSubmit = async (values: Values) => {
    setSubmitted(values);
    console.info("Customer Journey Audit application", values);
    await Promise.all([
      submitLeadForm("application", values),
      sendToWebhook(values),
      values.marketingOptIn ? sendToEmailPlatform(values) : Promise.resolve(),
    ]);
    window.setTimeout(() => router.push("/book"), 900);
  };

  if (submitted) {
    return (
      <div className="py-20 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#73d9b0]" />
        <h2 className="mt-5 text-3xl font-semibold">Application received.</h2>
        <p className="mt-3 text-[#a9b0bd]">Taking you to the booking page...</p>
      </div>
    );
  }

  const goNext = () => {
    clearErrors(currentQuestion.fields);
    const values = getValues();
    const questionValues = currentQuestion.fields.reduce<Partial<Values>>(
      (acc, fieldName) => ({
        ...acc,
        [fieldName]: values[fieldName],
      }),
      {},
    );
    const result = currentQuestion.validationSchema.safeParse(questionValues);

    if (!result.success) {
      let shouldFocus = true;

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as FieldName | undefined;

        if (fieldName && currentQuestion.fields.includes(fieldName)) {
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

    setStepIndex((current) => Math.min(current + 1, questions.length - 1));
  };

  const field = (
    name: FieldName,
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
        className={`input application-input ${
          errors[name] ? "input-error" : ""
        }`}
      />
      {errors[name] && (
        <span className="form-error">{String(errors[name]?.message)}</span>
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

  const questionControl = () => {
    const fieldName = currentQuestion.fields[0];

    if (currentQuestion.control === "slider") {
      return (
        <AverageValueSlider
          name="averageValue"
          label={fieldLabels.averageValue ?? currentQuestion.title}
          register={register}
          setValue={setValue}
          errors={errors}
        />
      );
    }

    if (currentQuestion.control === "select") {
      const name = fieldName as
        | "mainAction"
        | "monthlyVolume"
        | "runningAds"
        | "hasCrm";

      return (
        <label>
          <span className="form-label">{fieldLabels[name]}</span>
          <select {...register(name)} className="input application-input">
            <option value="">Select one</option>
            {currentQuestion.options?.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
          {errors[name] && (
            <span className="form-error">{errors[name]?.message}</span>
          )}
        </label>
      );
    }

    if (currentQuestion.control === "textarea") {
      return (
        <label>
          <span className="form-label">
            {fieldLabels[fieldName] ?? currentQuestion.title}
          </span>
          <textarea
            {...register(fieldName)}
            rows={5}
            className={`input application-input resize-y ${
              errors[fieldName] ? "input-error" : ""
            }`}
            placeholder={currentQuestion.placeholder}
          />
          {errors[fieldName] && (
            <span className="form-error">
              {String(errors[fieldName]?.message)}
            </span>
          )}
        </label>
      );
    }

    if (currentQuestion.control === "checkboxGrid") {
      const name = fieldName as "tools" | "aiTools";

      return (
        <fieldset>
          <legend className="form-label mb-3">{currentQuestion.title}</legend>
          {checkboxGrid(name, currentQuestion.checkboxOptions ?? [])}
        </fieldset>
      );
    }

    if (currentQuestion.control === "confirm") {
      return (
        <div className="space-y-5">
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
            I&apos;d like to receive occasional insights about improving
            customer journeys, automation, and digital revenue systems.
          </label>
        </div>
      );
    }

    return field(
      fieldName,
      fieldLabels[fieldName] ?? currentQuestion.title,
      currentQuestion.placeholder ?? "",
      currentQuestion.inputType ?? "text",
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10" noValidate>
      <div>
        <div className="mb-6 flex items-start justify-between gap-5">
          <div>
            <p className="eyebrow text-cyan-100/80">
              {currentQuestion.eyebrow} of {questions.length}
            </p>
            <h2 className="section-title mt-4 max-w-2xl text-[2.1rem] font-semibold leading-[1.08] text-white md:text-[2.8rem]">
              {currentQuestion.title}
            </h2>
          </div>
          <span className="mt-0.5 shrink-0 rounded-full border border-white/10 bg-white/[.035] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#d9d7dc] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            {stepIndex + 1}/{questions.length}
          </span>
        </div>
        <p className="max-w-2xl text-[0.95rem] leading-7 text-[#b4b8c0]">
          {currentQuestion.description}
        </p>
        <div className="mt-9 h-1 overflow-hidden rounded-full bg-white/[.075]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-100 via-[#f0eef2] to-violet-200 shadow-[0_0_18px_rgba(196,210,255,0.3)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div
        key={currentQuestion.fields.join("-")}
        className="application-input-module"
      >
        {questionControl()}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-white/[.08] pt-8">
        <button
          type="button"
          onClick={() => setStepIndex((current) => Math.max(current - 1, 0))}
          disabled={stepIndex === 0 || isSubmitting}
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/[.11] bg-white/[.025] px-6 text-sm font-semibold text-[#d8d6d5] transition hover:-translate-y-0.5 hover:bg-white/[.05] disabled:translate-y-0 disabled:cursor-not-allowed disabled:border-white/[.06] disabled:bg-white/[.015] disabled:text-[#777a80]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        {isLastStep ? (
          <button
            disabled={isSubmitting}
            type="submit"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#e8e5e2] px-7 text-sm font-bold text-[#151414] shadow-[0_14px_34px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.75)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:translate-y-0 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Continue to Booking"}
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            disabled={isSubmitting}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#e8e5e2] px-7 text-sm font-bold text-[#151414] shadow-[0_14px_34px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.75)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:translate-y-0 disabled:opacity-50"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </form>
  );
}
