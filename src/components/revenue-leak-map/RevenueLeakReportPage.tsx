import {
  AlertTriangle,
  ArrowDown,
  CalendarClock,
  ClipboardCheck,
  Eye,
  FileSearch,
  Gauge,
  Layers3,
  RadioTower,
  ShieldAlert,
  Target,
  TimerReset,
  Workflow,
} from "lucide-react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FloatingBackground } from "@/components/ui/FloatingBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import type {
  JourneyStep,
  RevenueLeakMapReport,
  ScorecardItem,
} from "@/data/revenueLeakMapDemo";
import {
  JourneyToggle,
  LeakAccordion,
  ReportStickyCTA,
  RevenueCalculator,
} from "./ReportInteractive";

const currency = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
});

export function RevenueLeakReportPage({
  report,
}: {
  report: RevenueLeakMapReport;
}) {
  return (
    <>
      <FloatingBackground />
      <SiteHeader compact />
      <main className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]"
        />
        <ReportHero report={report} />
        <OptionalVideo report={report} />
        <ReviewedItems report={report} />
        <CurrentJourney report={report} />
        <CurrentVsFixed report={report} />
        <Scorecard report={report} />
        <BiggestLeaks report={report} />
        <RevenueEstimate report={report} />
        <RecommendedSystem report={report} />
        <Roadmap report={report} />
        <QuickWin report={report} />
        <BuildLayers report={report} />
        <FinalCTA report={report} />
      </main>
      <SiteFooter />
      <ReportStickyCTA cta={report.nextStepCTA} />
    </>
  );
}

function ReportHero({ report }: { report: RevenueLeakMapReport }) {
  const metadata = [
    ["Business type", report.businessType],
    ["Lead sources", report.primaryLeadSources.join(", ")],
    ["Prepared date", report.preparedDate],
    ["Report ID", report.reportId],
  ];

  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-36 md:pb-24 md:pt-44">
      <div className="absolute left-1/2 top-8 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-cyan-100/10" />
      <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-white/5" />
      <div className="absolute -right-40 top-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(125,220,255,.12),transparent_70%)] blur-xl" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-stretch">
          <div className="flex min-h-[620px] flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0e0e0e]/70 p-6 shadow-[0_40px_140px_rgba(0,0,0,.34)] backdrop-blur md:p-10">
            <div>
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-100/25 bg-cyan-100/[.07] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-100">
                  Classified diagnostic brief
                </span>
                <span className="rounded-full border border-white/12 bg-white/[.04] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#c5c7c9]">
                  {report.reportId}
                </span>
              </div>
              <p className="eyebrow mb-5 text-cyan-100/80">
                Revenue Leak Map
              </p>
              <h1 className="display max-w-4xl text-[clamp(2.55rem,8vw,5.8rem)] font-semibold text-white">
                Prepared for{" "}
                <span className="text-[#c8c6c5]/58">
                  {report.businessName}
                </span>
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-[1.7] text-[#c5c7c9]">
                {report.executiveSummary}
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <ButtonLink href={report.nextStepCTA.primaryHref} className="py-5">
                {report.nextStepCTA.primaryLabel}
              </ButtonLink>
              <ButtonLink
                href="#full-diagnosis"
                variant="secondary"
                className="py-5"
              >
                View Full Diagnosis
              </ButtonLink>
            </div>
          </div>

          <aside className="grid gap-4">
            <GlassCard className="relative overflow-hidden rounded-[2rem] border-cyan-100/15 p-6">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(125,220,255,.18),transparent_70%)]" />
              <div className="relative">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow text-[#c8c6c5]">
                      Primary Revenue Leak
                    </p>
                    <p className="mt-4 text-xl font-semibold leading-7 text-white">
                      {report.primaryLeak}
                    </p>
                  </div>
                  <ShieldAlert className="h-6 w-6 shrink-0 text-amber-100" />
                </div>
                <Metric label="Leak Severity" value={report.leakSeverity} />
                <Metric
                  label="Estimated Monthly Revenue At Risk"
                  value={`${currency.format(report.estimatedMonthlyRevenueAtRiskLow)} - ${currency.format(report.estimatedMonthlyRevenueAtRiskHigh)}/month`}
                />
                <Metric
                  label="First System I Would Fix"
                  value={report.recommendedFirstSystem}
                />
              </div>
            </GlassCard>
            <GlassCard className="rounded-[2rem] p-6">
              <p className="eyebrow mb-5 text-[#c8c6c5]">Report metadata</p>
              <div className="space-y-3">
                {metadata.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-5 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#c5c7c9]/70">
                      {label}
                    </span>
                    <span className="max-w-[210px] text-right text-sm font-medium text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.035] p-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#c5c7c9]">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold leading-6 text-white">{value}</p>
    </div>
  );
}

function OptionalVideo({ report }: { report: RevenueLeakMapReport }) {
  if (!report.videoUrl) return null;

  return (
    <ReportSection
      eyebrow="Personal Breakdown"
      title="I recorded a short walkthrough of the biggest leak."
      intro="This is the first system I would fix before adding more traffic or complexity."
    >
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0e0e0e]">
        <iframe
          src={report.videoUrl}
          title={`${report.businessName} revenue leak map walkthrough`}
          className="aspect-video w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </ReportSection>
  );
}

function ReviewedItems({ report }: { report: RevenueLeakMapReport }) {
  return (
    <ReportSection
      eyebrow="Inspection basis"
      title="What We Reviewed"
      intro="This Revenue Leak Map reviews the visible parts of your customer journey and the information provided in your request. The goal is to identify where interested leads may be disappearing before they book, buy, or speak to someone."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {report.reviewedItems.map((item, index) => (
          <GlassCard key={item} className="rounded-2xl p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <ClipboardCheck className="h-5 w-5 text-cyan-100/80" />
              <span className="font-mono text-xs text-[#c5c7c9]/70">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="text-sm font-medium leading-6 text-white">{item}</p>
          </GlassCard>
        ))}
      </div>
    </ReportSection>
  );
}

function CurrentJourney({ report }: { report: RevenueLeakMapReport }) {
  return (
    <ReportSection
      id="full-diagnosis"
      eyebrow="Customer path"
      title="Current Customer Journey"
      intro="Right now, the journey appears to rely heavily on manual follow-up after a lead shows interest."
    >
      <div className="grid gap-4 lg:grid-cols-9">
        {report.currentJourneySteps.map((step, index) => (
          <JourneyNode
            key={step.label}
            step={step}
            index={index}
            isLast={index === report.currentJourneySteps.length - 1}
          />
        ))}
      </div>
    </ReportSection>
  );
}

function JourneyNode({
  step,
  index,
  isLast,
}: {
  step: JourneyStep;
  index: number;
  isLast: boolean;
}) {
  return (
    <div className="relative">
      {!isLast && (
        <>
          <div className="absolute left-1/2 top-full hidden h-px w-full bg-white/10 lg:left-full lg:top-10 lg:block" />
          <ArrowDown className="mx-auto mt-1 h-4 w-4 text-[#c5c7c9]/50 lg:hidden" />
        </>
      )}
      <div className="min-h-[138px] rounded-2xl border border-white/10 bg-white/[.035] p-4">
        <div className="mb-4 flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] text-cyan-100/80">
            {String(index + 1).padStart(2, "0")}
          </span>
          {step.note && (
            <span
              className={`rounded-full border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.08em] ${statusTone(step.status)}`}
            >
              {step.note}
            </span>
          )}
        </div>
        <p className="text-sm font-medium leading-6 text-white">{step.label}</p>
      </div>
    </div>
  );
}

function statusTone(status?: JourneyStep["status"]) {
  switch (status) {
    case "manual":
      return "border-amber-200/20 bg-amber-200/[.07] text-amber-100";
    case "risk":
      return "border-orange-200/20 bg-orange-200/[.07] text-orange-100";
    case "leak":
      return "border-red-200/20 bg-red-200/[.07] text-red-100";
    case "recovery":
      return "border-cyan-100/20 bg-cyan-100/[.07] text-cyan-100";
    default:
      return "border-white/10 bg-white/[.04] text-[#c5c7c9]";
  }
}

function CurrentVsFixed({ report }: { report: RevenueLeakMapReport }) {
  return (
    <ReportSection
      eyebrow="Before / after"
      title="Current vs Fixed Journey"
      intro="Toggle the system view to see how the same lead movement changes when response, booking, recovery, and visibility are handled intentionally."
    >
      <JourneyToggle
        currentJourneySteps={report.currentJourneySteps}
        fixedJourneySteps={report.fixedJourneySteps}
      />
    </ReportSection>
  );
}

function Scorecard({ report }: { report: RevenueLeakMapReport }) {
  return (
    <ReportSection
      eyebrow="Diagnostic score"
      title="Revenue Leak Scorecard"
      intro="This means the business has signs of demand, but the customer journey is leaking too much attention before it becomes revenue."
    >
      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <GlassCard className="relative overflow-hidden rounded-[2rem] p-7">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,214,142,.16),transparent_70%)]" />
          <div className="relative">
            <Gauge className="mb-8 h-8 w-8 text-amber-100" />
            <p className="eyebrow text-[#c8c6c5]">Overall score</p>
            <p className="mt-4 text-7xl font-semibold tracking-[-0.06em] text-white">
              {report.overallScore}
              <span className="text-3xl text-[#c5c7c9]">/100</span>
            </p>
            <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-200 via-cyan-100 to-white"
                style={{ width: `${report.overallScore}%` }}
              />
            </div>
            <p className="mt-5 text-sm leading-6 text-[#c5c7c9]">
              Demand is present. The operating path needs protection.
            </p>
          </div>
        </GlassCard>
        <div className="grid gap-3 sm:grid-cols-2">
          {report.scorecardItems.map((item) => (
            <ScorecardTile key={item.label} item={item} />
          ))}
        </div>
      </div>
    </ReportSection>
  );
}

function ScorecardTile({ item }: { item: ScorecardItem }) {
  return (
    <GlassCard className="rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-semibold text-white">{item.label}</h3>
        <span className="rounded-full border border-white/12 px-3 py-1 font-mono text-xs text-white">
          {item.score}/10
        </span>
      </div>
      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-cyan-100"
          style={{ width: `${item.score * 10}%` }}
        />
      </div>
      <p className="text-sm leading-6 text-[#c5c7c9]">{item.diagnosis}</p>
    </GlassCard>
  );
}

function BiggestLeaks({ report }: { report: RevenueLeakMapReport }) {
  return (
    <ReportSection
      eyebrow="Priority leaks"
      title="The 3 Biggest Leaks"
      intro="These are the points most likely to turn warm interest into silence before the business gets a real conversation."
    >
      <LeakAccordion leaks={report.biggestLeaks} />
    </ReportSection>
  );
}

function RevenueEstimate({ report }: { report: RevenueLeakMapReport }) {
  const inputs = report.revenueEstimateInputs;

  return (
    <ReportSection
      eyebrow="Commercial logic"
      title="Estimated Revenue At Risk"
      intro='This does not mean the business is guaranteed to recover that amount. It means there may be meaningful revenue sitting inside the existing lead flow before spending more money on ads, content, or outreach.'
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
        <GlassCard className="rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Estimated monthly enquiries", report.estimatedMonthlyEnquiries],
              [
                "Average customer value",
                currency.format(report.averageCustomerValue),
              ],
              [
                "Estimated leads at risk",
                `${inputs.estimatedLeadsAtRiskLow}-${inputs.estimatedLeadsAtRiskHigh} per month`,
              ],
              [
                "Potential monthly revenue at risk",
                `${currency.format(report.estimatedMonthlyRevenueAtRiskLow)} - ${currency.format(report.estimatedMonthlyRevenueAtRiskHigh)}`,
              ],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[.035] p-5"
              >
                <p className="eyebrow text-[#c8c6c5]/80">{label}</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-cyan-100/20 bg-cyan-100/[.045] p-5">
            <p className="text-lg font-semibold text-white">
              The opportunity is not necessarily &quot;get more leads.&quot;
            </p>
            <p className="mt-3 text-lg leading-7 text-[#d8dddf]">
              The first opportunity is: convert more of the interest already
              being created.
            </p>
          </div>
          <p className="mt-5 text-xs leading-5 text-[#c5c7c9]/70">
            This is a directional estimate based on the information provided and
            visible gaps in the customer journey. It is not a guarantee of
            recovered revenue, new sales, or business growth.
          </p>
        </GlassCard>
        <RevenueCalculator revenueEstimateInputs={report.revenueEstimateInputs} />
      </div>
    </ReportSection>
  );
}

function RecommendedSystem({ report }: { report: RevenueLeakMapReport }) {
  return (
    <ReportSection
      eyebrow="First system"
      title="Recommended First System"
      intro={report.recommendedSystem.purpose}
    >
      <GlassCard className="overflow-hidden rounded-[2rem] p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-cyan-100/80">System name</p>
            <h3 className="section-title mt-4 text-3xl font-semibold text-white sm:text-5xl">
              {report.recommendedSystem.name}
            </h3>
            <p className="mt-6 leading-7 text-[#c5c7c9]">
              {report.recommendedSystem.whyThisComesFirst}
            </p>
          </div>
          <div className="relative rounded-[1.75rem] border border-white/10 bg-[#0e0e0e]/65 p-5">
            <div className="absolute left-8 right-8 top-1/2 hidden h-px bg-cyan-100/20 sm:block" />
            <div className="relative grid gap-3 sm:grid-cols-2">
              {report.recommendedSystem.includes.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[.04] p-4"
                >
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <RadioTower className="h-4 w-4 text-cyan-100/80" />
                    <span className="font-mono text-[10px] text-[#c5c7c9]/70">
                      L{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm font-medium leading-5 text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </ReportSection>
  );
}

function Roadmap({ report }: { report: RevenueLeakMapReport }) {
  return (
    <ReportSection
      eyebrow="Implementation path"
      title="30-Day Fix Roadmap"
      intro="A practical build sequence for the first version of the system."
    >
      <div className="grid gap-4 lg:grid-cols-4">
        {report.roadmap.map((item, index) => (
          <GlassCard key={item.period} className="rounded-[1.75rem] p-6">
            <div className="mb-8 flex items-center justify-between gap-4">
              <span className="rounded-full border border-cyan-100/20 bg-cyan-100/[.06] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-100">
                {item.period}
              </span>
              <span className="font-mono text-xs text-[#c5c7c9]/60">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#c5c7c9]">
              {item.description}
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[.035] p-4">
              <p className="eyebrow text-[#c8c6c5]/75">Goal</p>
              <p className="mt-3 text-sm leading-6 text-white">{item.goal}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </ReportSection>
  );
}

function QuickWin({ report }: { report: RevenueLeakMapReport }) {
  return (
    <ReportSection
      eyebrow="Field note"
      title={report.quickWin.intro}
      intro={report.quickWin.title}
    >
      <GlassCard className="rounded-[2rem] border-amber-200/20 p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <AlertTriangle className="mb-6 h-8 w-8 text-amber-100" />
            <p className="eyebrow text-amber-100/90">Why this helps</p>
            <p className="mt-4 leading-7 text-[#d8dddf]">
              {report.quickWin.whyThisHelps}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-200/15 bg-red-200/[.035] p-5">
              <p className="eyebrow text-red-100/75">Instead of</p>
              <p className="mt-4 text-lg text-white">
                {report.quickWin.insteadOf}
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-100/20 bg-cyan-100/[.045] p-5">
              <p className="eyebrow text-cyan-100/80">Use</p>
              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-white">
                {report.quickWin.use}
              </p>
            </div>
          </div>
        </div>
      </GlassCard>
    </ReportSection>
  );
}

function BuildLayers({ report }: { report: RevenueLeakMapReport }) {
  const icons = [Target, TimerReset, FileSearch, Workflow, Eye];

  return (
    <ReportSection
      eyebrow="System blueprint"
      title="What Temporary Utopia Would Build"
      intro="If we were building the first version of this system, we would focus on one outcome: fewer warm leads disappearing before they book."
    >
      <div className="relative">
        <div className="absolute left-7 top-8 hidden h-[calc(100%-4rem)] w-px bg-cyan-100/20 lg:block" />
        <div className="space-y-4">
          {report.temporaryUtopiaBuildLayers.map((layer, index) => {
            const Icon = icons[index] ?? Layers3;

            return (
              <GlassCard key={layer.title} className="rounded-[1.75rem] p-5">
                <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-100/20 bg-cyan-100/[.06] text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.1em] text-[#c5c7c9]/70">
                      Layer {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">
                      {layer.title}
                    </h3>
                    <p className="mt-3 leading-7 text-[#c5c7c9]">
                      {layer.body}
                    </p>
                  </div>
                  {layer.examples && (
                    <div className="flex max-w-md flex-wrap gap-2 lg:justify-end">
                      {layer.examples.map((example) => (
                        <span
                          key={example}
                          className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-[#e5e2e1]"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </ReportSection>
  );
}

function FinalCTA({ report }: { report: RevenueLeakMapReport }) {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-20 md:py-36">
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,220,255,.13),transparent_70%)]" />
      <GlassCard className="relative mx-auto max-w-5xl rounded-[2rem] p-7 text-center sm:p-12">
        <CalendarClock className="mx-auto mb-7 h-9 w-9 text-cyan-100" />
        <p className="eyebrow text-cyan-100/80">
          {report.nextStepCTA.heading}
        </p>
        <h2 className="display mx-auto mt-5 max-w-4xl text-4xl font-semibold text-white sm:text-6xl">
          Build the first fix before adding more noise.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#c5c7c9]">
          {report.nextStepCTA.body}
        </p>
        <p className="mt-7 text-xl font-semibold text-white">
          {report.nextStepCTA.suggestedNextStep}
        </p>
        <div className="mx-auto mt-7 grid max-w-3xl gap-2 sm:grid-cols-5">
          {report.nextStepCTA.confirmationItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[.035] p-3"
            >
              <p className="text-xs font-medium leading-5 text-[#d8dddf]">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={report.nextStepCTA.primaryHref} className="px-8 py-5">
            {report.nextStepCTA.primaryLabel}
          </ButtonLink>
          <ButtonLink
            href={report.nextStepCTA.secondaryHref}
            variant="secondary"
            className="px-8 py-5"
          >
            {report.nextStepCTA.secondaryLabel}
          </ButtonLink>
        </div>
      </GlassCard>
    </section>
  );
}

function ReportSection({
  id,
  eyebrow,
  title,
  intro,
  children,
}: React.PropsWithChildren<{
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
}>) {
  return (
    <section id={id} className="px-6 py-16 md:px-20 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-9 grid gap-6 lg:grid-cols-[.85fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-cyan-100/80">{eyebrow}</p>
            <h2 className="section-title mt-5 max-w-3xl text-4xl font-semibold text-white md:text-5xl">
              {title}
            </h2>
          </div>
          {intro && (
            <p className="max-w-2xl text-base leading-7 text-[#c5c7c9] lg:justify-self-end">
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
