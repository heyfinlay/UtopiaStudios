"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import type { FocusEvent, KeyboardEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  AverageValueSlider,
  defaultAverageCustomerValue,
} from "@/components/forms/AverageValueSlider";
import {
  defaultMonthlyVolume,
  MonthlyVolumeSlider,
} from "@/components/forms/MonthlyVolumeSlider";

const averageValueSchema = z
  .number({ error: "Enter a positive customer value." })
  .positive("Enter a positive customer value.");
const monthlyVolumeSchema = z
  .number({ error: "Enter a positive monthly volume." })
  .positive("Enter a positive monthly volume.");

function normalizeWebsite(value: string | undefined) {
  const trimmedValue = value?.trim() ?? "";

  if (!trimmedValue || /^https?:\/\//i.test(trimmedValue)) {
    return trimmedValue;
  }

  return `https://${trimmedValue}`;
}

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email."),
  businessName: z.string().min(2, "Please enter your business name."),
  website: z
    .string()
    .optional()
    .refine(
      (v) => !v || /^(https?:\/\/)?[^\s.]+\.[^\s]+$/.test(v),
      "Enter a valid website domain.",
    ),
  offer: z.string().min(4, "Please describe what you sell."),
  idealCustomer: z.string().min(4, "Please describe your ideal customer."),
  leadSources: z.array(z.string()).min(1, "Select at least one lead source."),
  afterEnquiry: z
    .string()
    .min(12, "Please describe what happens after someone enquires."),
  followUpSpeed: z.string().min(1, "Select your usual follow-up speed."),
  tools: z.string().optional(),
  monthlyVolume: monthlyVolumeSchema,
  averageValue: averageValueSchema,
  dropOff: z
    .string()
    .min(12, "Please share where you think people are dropping off."),
  consent: z.boolean().refine(Boolean, "Consent is required to continue."),
  marketingOptIn: z.boolean(),
});

type Values = z.infer<typeof schema>;
type FieldName = keyof Values;

const leadSourceOptions = [
  "Website",
  "Instagram DMs",
  "Facebook",
  "Paid ads",
  "Referrals",
  "Email list",
  "Phone calls",
  "Other",
];

const followUpSpeedOptions = [
  "Instantly",
  "Within 1 hour",
  "Same day",
  "Next day",
  "It depends",
  "Not sure",
];

type Question = {
  eyebrow: string;
  title: string;
  description: string;
  fields: FieldName[];
  validationSchema: z.ZodType;
  placeholder?: string;
  inputType?: "text" | "url" | "email" | "tel";
  control?:
    | "input"
    | "textarea"
    | "select"
    | "slider"
    | "volumeSlider"
    | "checkboxGrid"
    | "confirm";
  options?: string[];
  checkboxOptions?: string[];
};

const questions: Question[] = [
  {
    eyebrow: "Question 1",
    title: "What is your name?",
    description: "Add the best contact for the Revenue Leak Map request.",
    fields: ["name"],
    validationSchema: schema.pick({ name: true }),
    placeholder: "Your full name",
  },
  {
    eyebrow: "Question 2",
    title: "What email should I use?",
    description: "Use the address where you want the breakdown sent.",
    fields: ["email"],
    validationSchema: schema.pick({ email: true }),
    placeholder: "you@company.com",
    inputType: "email",
  },
  {
    eyebrow: "Question 3",
    title: "What business are we reviewing?",
    description: "Add the business, clinic, studio, agency, or brand name.",
    fields: ["businessName"],
    validationSchema: schema.pick({ businessName: true }),
    placeholder: "Business name",
  },
  {
    eyebrow: "Question 4",
    title: "What website should we review?",
    description: "Share the main website or landing page if there is one.",
    fields: ["website"],
    validationSchema: schema.pick({ website: true }),
    placeholder: "https://yourwebsite.com",
    inputType: "url",
  },
  {
    eyebrow: "Question 5",
    title: "What do you sell?",
    description: "Describe the service, package, offer, or main thing people buy.",
    fields: ["offer"],
    validationSchema: schema.pick({ offer: true }),
    control: "textarea",
    placeholder: "Services, packages, retainers, consultations, treatments...",
  },
  {
    eyebrow: "Question 6",
    title: "Who is your ideal customer?",
    description: "Give the practical version, not a brand persona.",
    fields: ["idealCustomer"],
    validationSchema: schema.pick({ idealCustomer: true }),
    control: "textarea",
    placeholder: "Who you most want to enquire, book, buy, or become a client",
  },
  {
    eyebrow: "Question 7",
    title: "Where do most leads come from right now?",
    description: "Select every source that matters today.",
    fields: ["leadSources"],
    validationSchema: schema.pick({ leadSources: true }),
    control: "checkboxGrid",
    checkboxOptions: leadSourceOptions,
  },
  {
    eyebrow: "Question 8",
    title: "What happens after someone enquires?",
    description: "Describe the current handover, reply, booking step, or follow-up.",
    fields: ["afterEnquiry"],
    validationSchema: schema.pick({ afterEnquiry: true }),
    control: "textarea",
    placeholder: "What happens today after a form, DM, call, booking, or referral?",
  },
  {
    eyebrow: "Question 9",
    title: "How fast do you usually follow up?",
    description: "A rough answer is enough.",
    fields: ["followUpSpeed"],
    validationSchema: schema.pick({ followUpSpeed: true }),
    control: "select",
    options: followUpSpeedOptions,
  },
  {
    eyebrow: "Question 10",
    title: "What tools are you currently using?",
    description:
      "List the CRM, spreadsheet, booking, email, chat, automation, or sales tools in play.",
    fields: ["tools"],
    validationSchema: schema.pick({ tools: true }),
    control: "textarea",
    placeholder:
      "CRM, spreadsheet, Calendly, email platform, ManyChat, GoHighLevel, HubSpot, etc.",
  },
  {
    eyebrow: "Question 11",
    title: "Roughly how many enquiries do you get per month?",
    description: "Include DMs, calls, forms, booking requests, and referrals.",
    fields: ["monthlyVolume"],
    validationSchema: schema.pick({ monthlyVolume: true }),
    control: "volumeSlider",
  },
  {
    eyebrow: "Question 12",
    title: "What is an average customer worth?",
    description: "This helps estimate whether a potential leak is worth fixing.",
    fields: ["averageValue"],
    validationSchema: schema.pick({ averageValue: true }),
    control: "slider",
  },
  {
    eyebrow: "Question 13",
    title: "Where do you think people are currently dropping off?",
    description: "Share the likely bottleneck, even if it is just a hunch.",
    fields: ["dropOff"],
    validationSchema: schema.pick({ dropOff: true }),
    control: "textarea",
    placeholder:
      "Slow replies, no-shows, DMs, unclear next steps, forgotten leads, quote follow-up...",
  },
  {
    eyebrow: "Question 14",
    title: "Request your free Revenue Leak Map.",
    description:
      "Final consent before the request is sent for manual review.",
    fields: ["consent", "marketingOptIn"],
    validationSchema: schema.pick({ consent: true, marketingOptIn: true }),
    control: "confirm",
  },
];

const fieldLabels: Partial<Record<FieldName, string>> = {
  afterEnquiry: "What happens after enquiry",
  averageValue: "Average customer value",
  businessName: "Company / brand name",
  dropOff: "Likely drop-off point",
  email: "Email address",
  followUpSpeed: "Follow-up speed",
  idealCustomer: "Ideal customer",
  leadSources: "Lead sources",
  monthlyVolume: "Monthly volume",
  name: "Your name",
  offer: "What you sell",
  tools: "Current tools",
  website: "Website URL",
};

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState<Values | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const {
    register,
    handleSubmit,
    getValues,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      leadSources: [],
      tools: "",
      monthlyVolume: defaultMonthlyVolume,
      averageValue: defaultAverageCustomerValue,
      marketingOptIn: false,
    },
  });

  const currentQuestion = questions[stepIndex];
  const isLastStep = stepIndex === questions.length - 1;
  const progress = ((stepIndex + 1) / questions.length) * 100;

  const onSubmit = async (values: Values) => {
    setSubmitError(null);
    const normalizedValues = {
      ...values,
      website: normalizeWebsite(values.website),
    };

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...normalizedValues,
          sourcePath:
            typeof window === "undefined"
              ? "/apply"
              : `${window.location.pathname}${window.location.search}`,
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;

        setSubmitError(
          body?.error ??
            "Something went wrong while submitting your application. Please try again.",
        );
        return;
      }

      setSubmitted(normalizedValues);
    } catch {
      setSubmitError(
        "Could not reach the application server. Please check your connection and try again.",
      );
    }
  };

  if (submitted) {
    return (
      <div className="py-20 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[#73d9b0]" />
        <h2 className="mt-5 text-3xl font-semibold">
          Your Revenue Leak Map request has been received.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[#a9b0bd]">
          I&apos;ll review your customer journey and send back the clearest
          opportunity I can find. If it looks like there is a strong fit, I may
          also include a short Loom breakdown.
        </p>
      </div>
    );
  }

  const goNext = () => {
    clearErrors(currentQuestion.fields);

    if (currentQuestion.fields.includes("website")) {
      setValue("website", normalizeWebsite(getValues("website")), {
        shouldDirty: true,
      });
    }

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

  const handleFormKeyDown = (event: KeyboardEvent<HTMLFormElement>) => {
    const target = event.target;

    if (
      event.key !== "Enter" ||
      event.shiftKey ||
      isLastStep ||
      !(target instanceof HTMLElement) ||
      target.tagName === "TEXTAREA"
    ) {
      return;
    }

    event.preventDefault();
    goNext();
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
        {...(name === "website"
          ? {
              onBlur: (event: FocusEvent<HTMLInputElement>) => {
                const normalizedWebsite = normalizeWebsite(event.currentTarget.value);
                event.currentTarget.value = normalizedWebsite;
                setValue("website", normalizedWebsite, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              },
            }
          : {})}
        className={`input application-input ${
          errors[name] ? "input-error" : ""
        }`}
      />
      {errors[name] && (
        <span className="form-error">{String(errors[name]?.message)}</span>
      )}
    </label>
  );

  const checkboxGrid = (name: "leadSources", options: string[]) => (
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
          control={control}
          register={register}
          setValue={setValue}
          errors={errors}
        />
      );
    }

    if (currentQuestion.control === "volumeSlider") {
      return (
        <MonthlyVolumeSlider
          name="monthlyVolume"
          label={fieldLabels.monthlyVolume ?? currentQuestion.title}
          control={control}
          register={register}
          setValue={setValue}
          errors={errors}
        />
      );
    }

    if (currentQuestion.control === "select") {
      const name = fieldName as "followUpSpeed";

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
      const name = fieldName as "leadSources";

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
            customer journeys, follow-up, and digital revenue systems.
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={handleFormKeyDown}
      className="space-y-10"
      noValidate
    >
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

      {submitError && (
        <p className="rounded-2xl border border-[#ffb4ab]/25 bg-[#ffb4ab]/10 px-4 py-3 text-sm leading-6 text-[#ffd8d2]">
          {submitError}
        </p>
      )}

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
            {isSubmitting ? "Submitting..." : "Request My Free Leak Map"}
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
