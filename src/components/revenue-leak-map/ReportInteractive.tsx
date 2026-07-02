"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils/cn";
import type {
  BiggestLeak,
  JourneyStep,
  RevenueLeakMapReport,
} from "@/data/revenueLeakMapDemo";

const currency = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
});

function statusClass(status?: JourneyStep["status"]) {
  switch (status) {
    case "manual":
      return "border-amber-200/25 bg-amber-200/[.07] text-amber-100";
    case "risk":
      return "border-orange-200/25 bg-orange-200/[.07] text-orange-100";
    case "leak":
      return "border-red-200/25 bg-red-200/[.07] text-red-100";
    case "recovery":
      return "border-cyan-100/25 bg-cyan-100/[.07] text-cyan-100";
    case "visibility":
      return "border-emerald-100/25 bg-emerald-100/[.07] text-emerald-100";
    default:
      return "border-white/15 bg-white/[.045] text-[#e5e2e1]";
  }
}

export function JourneyToggle({
  currentJourneySteps,
  fixedJourneySteps,
}: Pick<
  RevenueLeakMapReport,
  "currentJourneySteps" | "fixedJourneySteps"
>) {
  const [active, setActive] = useState<"current" | "fixed">("current");
  const steps = active === "current" ? currentJourneySteps : fixedJourneySteps;

  return (
    <div className="glass rounded-[1.75rem] p-4 sm:p-6">
      <div className="mb-6 grid grid-cols-2 gap-2 rounded-full border border-white/10 bg-[#0e0e0e]/80 p-1">
        {[
          ["current", "Current Journey"],
          ["fixed", "Fixed Journey"],
        ].map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key as "current" | "fixed")}
            className={cn(
              "min-h-11 rounded-full px-4 text-sm font-semibold transition",
              active === key
                ? "bg-[#e5e2e1] text-[#141313]"
                : "text-[#c5c7c9] hover:bg-white/[.06] hover:text-white",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="grid gap-3">
        {steps.map((step, index) => (
          <div key={`${active}-${step.label}`} className="relative">
            {index > 0 && (
              <div className="absolute -top-3 left-6 h-3 w-px bg-white/12" />
            )}
            <div
              className={cn(
                "flex min-h-[72px] items-center gap-4 rounded-2xl border p-4",
                active === "fixed"
                  ? "border-cyan-100/16 bg-cyan-100/[.035]"
                  : "border-white/10 bg-white/[.035]",
              )}
            >
              <span
                className={cn(
                  "grid h-10 w-10 shrink-0 place-items-center rounded-full border font-mono text-xs",
                  statusClass(step.status),
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white sm:text-base">
                  {step.label}
                </p>
                {step.note && (
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#c5c7c9]/75">
                    {step.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-cyan-100/15 bg-cyan-100/[.045] p-5">
        <p className="eyebrow text-cyan-100/80">What changes</p>
        <p className="mt-3 leading-7 text-[#d8dddf]">
          The fixed journey removes the biggest weakness: relying on memory and
          manual follow-up to carry every lead through the process.
        </p>
        <p className="mt-3 font-medium text-white">
          The system does not replace the human relationship. It protects it.
        </p>
      </div>
    </div>
  );
}

export function LeakAccordion({ leaks }: { leaks: BiggestLeak[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {leaks.map((leak, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={leak.title}
            className={cn(
              "glass overflow-hidden rounded-[1.75rem] transition",
              isOpen && "border-cyan-100/25 bg-white/[.045]",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
              aria-expanded={isOpen}
            >
              <div className="min-w-0">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-cyan-100/80">
                    LEAK {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-amber-200/20 bg-amber-200/[.07] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-amber-100">
                    {leak.severity}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.01em] text-white sm:text-2xl">
                  {leak.title}
                </h3>
              </div>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-[#c5c7c9] transition",
                  isOpen && "rotate-180 text-white",
                )}
              />
            </button>
            {isOpen && (
              <div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-6">
                <div className="grid gap-4 lg:grid-cols-3">
                  <LeakDetail
                    title="What is happening"
                    body={leak.whatIsHappening}
                  />
                  <LeakDetail title="Why it matters" body={leak.whyItMatters} />
                  <LeakDetail
                    title="What I would fix"
                    body={leak.whatIWouldFix}
                  />
                </div>
                {leak.recoverySequence && (
                  <div className="mt-5 rounded-2xl border border-white/10 bg-[#0e0e0e]/55 p-4">
                    <p className="eyebrow mb-4 text-[#c8c6c5]">
                      Suggested recovery sequence
                    </p>
                    <div className="grid gap-2 sm:grid-cols-5">
                      {leak.recoverySequence.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/10 bg-white/[.035] p-3"
                        >
                          <p className="font-mono text-[11px] text-cyan-100/80">
                            {item.label}
                          </p>
                          <p className="mt-2 text-sm leading-5 text-[#d8dddf]">
                            {item.action}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-5 rounded-2xl border border-cyan-100/20 bg-cyan-100/[.045] p-4">
                  <p className="eyebrow text-cyan-100/80">
                    Temporary Utopia fix
                  </p>
                  <p className="mt-3 font-mono text-sm leading-6 text-white">
                    {leak.temporaryUtopiaFix}
                  </p>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

function LeakDetail({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
      <p className="eyebrow text-[#c8c6c5]/80">{title}</p>
      <p className="mt-3 text-sm leading-6 text-[#d8dddf]">{body}</p>
    </div>
  );
}

export function RevenueCalculator({
  revenueEstimateInputs,
}: Pick<RevenueLeakMapReport, "revenueEstimateInputs">) {
  const [monthlyEnquiries, setMonthlyEnquiries] = useState(
    revenueEstimateInputs.monthlyEnquiriesHigh,
  );
  const [averageCustomerValue, setAverageCustomerValue] = useState(
    revenueEstimateInputs.averageCustomerValue,
  );
  const [leadsAtRisk, setLeadsAtRisk] = useState(
    revenueEstimateInputs.estimatedLeadsAtRiskHigh,
  );

  const estimate = averageCustomerValue * leadsAtRisk;

  return (
    <div className="glass rounded-[1.75rem] p-5 sm:p-6">
      <div className="mb-6 rounded-2xl border border-cyan-100/20 bg-cyan-100/[.045] p-5">
        <p className="eyebrow text-cyan-100/80">
          Potential monthly revenue at risk
        </p>
        <p className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
          {currency.format(estimate)}
        </p>
        <p className="mt-3 text-sm leading-6 text-[#c5c7c9]">
          Directional estimate based on visible journey gaps.
        </p>
      </div>
      <div className="space-y-5">
        <CalculatorSlider
          label="Monthly enquiries"
          value={monthlyEnquiries}
          min={20}
          max={80}
          step={1}
          display={`${monthlyEnquiries}`}
          onChange={setMonthlyEnquiries}
        />
        <CalculatorSlider
          label="Average customer value"
          value={averageCustomerValue}
          min={500}
          max={5000}
          step={100}
          display={currency.format(averageCustomerValue)}
          onChange={setAverageCustomerValue}
        />
        <CalculatorSlider
          label="Estimated leads at risk"
          value={leadsAtRisk}
          min={1}
          max={15}
          step={1}
          display={`${leadsAtRisk}`}
          onChange={setLeadsAtRisk}
        />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        {[
          ["Lead pool", monthlyEnquiries],
          ["At risk", leadsAtRisk],
          ["ACV", currency.format(averageCustomerValue)],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-white/[.035] p-3"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#c5c7c9]">
              {label}
            </p>
            <p className="mt-2 truncate text-sm font-semibold text-white sm:text-base">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CalculatorSlider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="font-mono text-xs uppercase tracking-[0.1em] text-[#c5c7c9]">
          {label}
        </span>
        <span className="font-mono text-sm text-white">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="value-slider__range"
      />
    </label>
  );
}

export function ReportStickyCTA({
  cta,
}: {
  cta: RevenueLeakMapReport["nextStepCTA"];
}) {
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  useEffect(() => {
    const update = () => {
      const nextVisible = window.scrollY > 760;

      if (nextVisible !== visibleRef.current) {
        setVisible(nextVisible);
      }

      frame.current = null;
    };

    const onScroll = () => {
      if (frame.current === null) {
        frame.current = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== null) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#141313]/92 px-3 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[980px] items-center justify-between gap-3">
        <p className="hidden text-sm font-medium text-white sm:block">
          Want us to build the first fix?
        </p>
        <ButtonLink href={cta.primaryHref} className="w-full sm:w-auto">
          {cta.primaryLabel}
        </ButtonLink>
      </div>
    </div>
  );
}
