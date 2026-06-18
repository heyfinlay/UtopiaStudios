"use client";

import { type CSSProperties, useId, useState } from "react";
import { FileSearch } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const LOSS_RATE = 0.1;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-AU").format(value);
}

function CalculatorSlider({
  id,
  label,
  value,
  min,
  max,
  step,
  displayValue,
  minLabel,
  maxLabel,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  minLabel: string;
  maxLabel: string;
  onChange: (value: number) => void;
}) {
  const progress = ((value - min) / (max - min)) * 100;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.035] px-4 py-4">
      <div className="flex items-start justify-between gap-4">
        <label
          htmlFor={id}
          className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#c5c7c9]"
        >
          {label}
        </label>
        <span className="text-right text-xl font-semibold leading-none text-white">
          {displayValue}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-label={label}
        aria-valuetext={displayValue}
        onChange={(event) => onChange(Number(event.currentTarget.value))}
        className="math-slider__range"
        style={{
          "--slider-progress": `${progress}%`,
        } as CSSProperties}
      />
      <div className="mt-3 flex justify-between font-mono text-[0.66rem] uppercase tracking-[0.08em] text-[#c5c7c9]/60">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

export function CommercialMathsCalculator() {
  const enquiryId = useId();
  const valueId = useId();
  const [monthlyEnquiries, setMonthlyEnquiries] = useState(80);
  const [averageCustomerValue, setAverageCustomerValue] = useState(2500);
  const potentialLeakage =
    monthlyEnquiries * averageCustomerValue * LOSS_RATE;

  return (
    <GlassCard className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border-cyan-100/15 p-6 md:justify-self-center md:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(125,220,255,.16),transparent_70%)]" />
      <div className="relative">
        <div className="mb-7 flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white">
            <FileSearch className="h-5 w-5" />
          </div>
          <div>
            <p className="eyebrow text-[#c8c6c5]">Example scenario</p>
            <p className="mt-1 text-sm text-[#c5c7c9]">
              Conservative, illustrative maths. Not a guarantee.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <CalculatorSlider
            id={enquiryId}
            label="Monthly enquiries"
            value={monthlyEnquiries}
            min={20}
            max={200}
            step={5}
            displayValue={formatNumber(monthlyEnquiries)}
            minLabel="20"
            maxLabel="200"
            onChange={setMonthlyEnquiries}
          />
          <CalculatorSlider
            id={valueId}
            label="Average customer value"
            value={averageCustomerValue}
            min={500}
            max={10000}
            step={100}
            displayValue={formatCurrency(averageCustomerValue)}
            minLabel="$500"
            maxLabel="$10k"
            onChange={setAverageCustomerValue}
          />
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[.035] px-4 py-3">
            <span className="text-[#c5c7c9]">
              Good-fit enquiries lost to friction
            </span>
            <span className="text-xl font-semibold text-white">10%</span>
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-cyan-100/20 bg-cyan-100/[.045] p-5">
          <p className="eyebrow text-cyan-100/80">Potential leakage</p>
          <p
            className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl"
            data-testid="potential-leakage"
          >
            {formatCurrency(potentialLeakage)} / month
          </p>
          <p className="mt-3 text-sm leading-6 text-[#c5c7c9]">
            Before any ad spend increase, a serious owner needs to know whether
            this kind of leakage exists in their current journey.
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
