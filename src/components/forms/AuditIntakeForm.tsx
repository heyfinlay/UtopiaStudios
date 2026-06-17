"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { sendToWebhook, submitLeadForm } from "@/lib/integrations";
import {
  AverageValueSlider,
  defaultAverageCustomerValue,
} from "@/components/forms/AverageValueSlider";

const schema = z.object({
  businessName: z.string().optional(),
  website: z.string().optional(),
  offers: z.string().optional(),
  customerType: z.string().optional(),
  averageValue: z.string().min(1, "Required"),
  bestSeller: z.string().optional(),
  profitableOffer: z.string().optional(),
  sources: z.string().optional(),
  desiredAction: z.string().optional(),
  afterAction: z.string().optional(),
  followUp: z.string().optional(),
  dropOff: z.string().optional(),
  tools: z.string().optional(),
  auditValue: z.string().optional(),
  outcome: z.string().optional(),
});
type Values = z.infer<typeof schema>;
type FieldName = keyof Values;

const questions: Array<{
  eyebrow: string;
  title: string;
  description: string;
  field: FieldName;
  placeholder?: string;
  large?: boolean;
  type?: "text" | "select" | "slider";
  options?: string[];
}> = [
  {
    eyebrow: "Question 1",
    title: "What business are we reviewing?",
    description: "Add the business or brand name for this onboarding intake.",
    field: "businessName",
    placeholder: "Business name",
  },
  {
    eyebrow: "Question 2",
    title: "What website should we look at?",
    description: "Share the main website or landing page if there is one.",
    field: "website",
    placeholder: "https://",
  },
  {
    eyebrow: "Question 3",
    title: "Who is the main customer type?",
    description: "Describe the buyer, client, patient, member, or customer.",
    field: "customerType",
    placeholder: "Who you serve",
  },
  {
    eyebrow: "Question 4",
    title: "What is the average customer value?",
    description: "A rough number is enough. This helps size the opportunity.",
    field: "averageValue",
    type: "slider",
  },
  {
    eyebrow: "Question 5",
    title: "What is the best-selling offer?",
    description: "Name the product, service, package, or offer that sells most.",
    field: "bestSeller",
    placeholder: "Offer name",
  },
  {
    eyebrow: "Question 6",
    title: "What is the most profitable offer?",
    description: "Name the offer you most want the journey to support.",
    field: "profitableOffer",
    placeholder: "Offer name",
  },
  {
    eyebrow: "Question 7",
    title: "What are the main offers?",
    description: "Briefly describe the commercial offer mix.",
    field: "offers",
    placeholder: "Services, products, packages, retainers, memberships...",
    large: true,
  },
  {
    eyebrow: "Question 8",
    title: "Where do customers come from?",
    description: "List the main traffic, lead, or sales sources.",
    field: "sources",
    placeholder: "Ads, search, referral, social, partners...",
    large: true,
  },
  {
    eyebrow: "Question 9",
    title: "What action do you want them to take?",
    description: "Describe the main conversion action.",
    field: "desiredAction",
    placeholder: "Book, buy, enquire, request a quote...",
  },
  {
    eyebrow: "Question 10",
    title: "What happens after they enquire, book, or buy?",
    description: "Describe the handover or next step as it works today.",
    field: "afterAction",
    placeholder: "Confirmation, call, email, invoice, onboarding...",
    large: true,
  },
  {
    eyebrow: "Question 11",
    title: "What follow-up happens now?",
    description: "Include email, SMS, calls, CRM steps, reminders, or manual tasks.",
    field: "followUp",
    placeholder: "Email, SMS, calls, CRM steps...",
    large: true,
  },
  {
    eyebrow: "Question 12",
    title: "Where do people commonly drop off?",
    description: "Share known gaps, concerns, or assumptions.",
    field: "dropOff",
    placeholder: "Known gaps or assumptions",
    large: true,
  },
  {
    eyebrow: "Question 13",
    title: "What tools are currently in the stack?",
    description: "List the tools already involved in the customer journey.",
    field: "tools",
    placeholder:
      "Website, CRM, email/SMS, booking, payments, ads, analytics, automation, AI tools",
    large: true,
  },
  {
    eyebrow: "Question 14",
    title: "What would make this audit valuable?",
    description: "Share the clarity, decision, or outcome that would matter most.",
    field: "auditValue",
    placeholder: "Describe the decisions or clarity you need",
    large: true,
  },
  {
    eyebrow: "Question 15",
    title: "Which outcome matters most?",
    description: "Choose the priority that best matches the current situation.",
    field: "outcome",
    type: "select",
    options: [
      "More booked calls",
      "More purchases",
      "Faster response",
      "Better follow-up",
      "Less admin",
      "Better customer experience",
      "More repeat customers",
    ],
  },
];

export function AuditIntakeForm() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      businessName: "",
      website: "",
      offers: "",
      customerType: "",
      averageValue: defaultAverageCustomerValue,
      bestSeller: "",
      profitableOffer: "",
      sources: "",
      desiredAction: "",
      afterAction: "",
      followUp: "",
      dropOff: "",
      tools: "",
      auditValue: "",
      outcome: "",
    },
  });

  const currentQuestion = questions[stepIndex];
  const isLastStep = stepIndex === questions.length - 1;
  const progress = ((stepIndex + 1) / questions.length) * 100;

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

  const questionControl = () => {
    if (currentQuestion.type === "slider") {
      return (
        <AverageValueSlider
          name="averageValue"
          label={currentQuestion.title}
          register={register}
          setValue={setValue}
          errors={errors}
        />
      );
    }

    if (currentQuestion.type === "select") {
      return (
        <label>
          <span className="form-label">{currentQuestion.title}</span>
          <select {...register(currentQuestion.field)} className="input">
            <option value="">Select one</option>
            {currentQuestion.options?.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
          {errors[currentQuestion.field] && (
            <span className="form-error">
              {errors[currentQuestion.field]?.message}
            </span>
          )}
        </label>
      );
    }

    return input(
      currentQuestion.field,
      currentQuestion.title,
      currentQuestion.placeholder ?? "",
      currentQuestion.large,
    );
  };

  return (
    <form
      className="space-y-8"
      onSubmit={handleSubmit(async (values) => {
        console.info("Audit intake", values);
        await Promise.all([
          submitLeadForm("audit_intake", values),
          sendToWebhook(values),
        ]);
        router.push("/book");
      })}
    >
      <div>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow text-cyan-100/80">
              {currentQuestion.eyebrow} of {questions.length}
            </p>
            <h2 className="section-title mt-3 text-3xl font-semibold text-white md:text-4xl">
              {currentQuestion.title}
            </h2>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#c5c7c9]">
            {stepIndex + 1}/{questions.length}
          </span>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-[#aab1bd]">
          {currentQuestion.description}
        </p>
        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-200 via-white to-violet-200 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[.025] p-5">
        {questionControl()}
      </div>

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
            {isSubmitting ? "Saving..." : "Book onboarding call"}
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() =>
              setStepIndex((current) =>
                Math.min(current + 1, questions.length - 1),
              )
            }
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
