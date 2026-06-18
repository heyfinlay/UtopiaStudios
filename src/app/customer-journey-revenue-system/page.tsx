import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  BotOff,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  Clock3,
  FileSearch,
  Gauge,
  Hourglass,
  Play,
  Smile,
  Frown,
  Star,
  Workflow,
} from "lucide-react";
import { AnnouncementBar } from "@/components/ui/AnnouncementBar";
import { FloatingBackground } from "@/components/ui/FloatingBackground";
import { StickyCTA } from "@/components/ui/StickyCTA";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GlassCard } from "@/components/ui/GlassCard";
import { CommercialMathsCalculator } from "@/components/sections/CommercialMathsCalculator";

export const metadata: Metadata = {
  title: "Customer Journey Revenue System",
  description:
    "Temporary Utopia helps businesses find and fix the points where customers get lost between interest, enquiry, booking, purchase, follow-up, and repeat revenue.",
};

const leakCards = [
  {
    icon: Hourglass,
    title: "The Ghosting Gap",
    body: "Potential customers reach out, but don’t hear back for 24+ hours. By then, they’ve already called your competitor.",
  },
  {
    icon: CircleHelp,
    title: "The Confusion Cliff",
    body: "Your pricing or onboarding is so complex that “I’ll think about it” becomes the default answer for every lead.",
  },
  {
    icon: Workflow,
    title: "Manual Bottlenecks",
    body: "Your best people are spending valuable time copy-pasting data instead of closing new high-ticket deals.",
  },
];

const systemSteps = [
  ["Audit", "We map every touchpoint to find the exact friction points."],
  ["Architect", "We design the frictionless digital path to purchase."],
  ["Automate", "We implement the follow-up and tracking systems."],
  ["Amplify", "We layer in AI to scale your capacity without overhead."],
];

const auditDeliverables = [
  "Customer Journey Map",
  "Revenue Leak Report",
  "Priority Fix Matrix",
  "Tool, CRM, and automation review",
  "Follow-up and handover recommendations",
  "Implementation roadmap",
];

const fitIndustries = [
  "Dental clinics",
  "Cosmetic clinics",
  "Wellness studios",
  "Home service operators",
  "Boutique fitness",
  "Consultants",
  "Advisory firms",
  "Premium local services",
];

const sampleFindings = [
  ["Response lag", "Good-fit enquiries wait 24+ hours before a real reply."],
  [
    "Booking drop-off",
    "The next step is split across forms, DMs, email, and manual reminders.",
  ],
  [
    "CRM blind spot",
    "Lead source, status, and follow-up owner are not visible in one place.",
  ],
  [
    "Reactivation gap",
    "Old enquiries and no-shows are not being followed up with a clear sequence.",
  ],
];

const proofPoints = [
  "Sharper positioning for service brands that need to feel premium and credible",
  "Landing pages and funnels built around real customer decisions",
  "Customer journey audits that turn messy touchpoints into a clear fix list",
  "Automation that supports staff without making the experience feel robotic",
];

const faqs = [
  [
    "How long does an audit take?",
    "The paid audit is typically completed within 5-7 business days after the right access and information are provided.",
  ],
  [
    "What happens on the free fit call?",
    "We check whether your business has enough existing demand, customer value, and journey complexity to justify a paid audit. If not, we will say so.",
  ],
  [
    "What happens after the fit call?",
    "If there is a fit, we will recommend the next best step with scope, price, timeline, and expectations before you decide. Implementation is separate and only scoped after the audit identifies the highest-priority fixes.",
  ],
  [
    "Do we need to switch our CRM?",
    "Not necessarily. We prefer to build on top of your existing stack unless it is fundamentally broken. We work across common CRM, booking, payment, email, SMS, and automation tools.",
  ],
  [
    "Do you guarantee results?",
    "No responsible studio can guarantee a commercial result. The audit is designed to find measurable opportunities and prioritise fixes, not promise revenue out of thin air.",
  ],
];

export default function CustomerJourneyRevenueSystemPage() {
  return (
    <>
      <FloatingBackground />
      <AnnouncementBar text="Audit slots open: find where enquiries, bookings, and sales are slipping through the cracks." />
      <SiteHeader withAnnouncement />
      <main>
        <Hero />
        <Credibility />
        <Vsl />
        <Letter />
        <LeakChecklist />
        <LeakMath />
        <SystemWorking />
        <AuditDeliverables />
        <SampleAuditPreview />
        <HumanFirst />
        <Mechanism />
        <Comparison />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pt-28 md:pb-28 md:pt-44">
      <div className="absolute -left-24 -top-52 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(138,43,226,.18),transparent_70%)]" />
      <div className="absolute -right-24 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(65,105,225,.13),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,760px)_minmax(320px,1fr)] xl:gap-16">
          <div>
            <p className="eyebrow mb-7 text-cyan-100/80">
              Customer Journey Revenue System
            </p>
            <h1 className="display mb-7 text-[clamp(2.35rem,7vw,4.5rem)] font-semibold text-white md:text-[72px]">
              Stop Losing Customers Between{" "}
              <span className="text-[#c8c6c5]/60">Interest and Purchase.</span>
            </h1>
            <p className="mb-9 max-w-2xl text-base leading-[1.65] text-[#c5c7c9] md:text-lg">
              A 5-7 business day Customer Journey Audit for established service
              businesses already getting enquiries, bookings, traffic, or sales
              conversations, but losing people before they become customers.
            </p>
            <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
              <ButtonLink href="/apply" className="px-8 py-5">
                Apply for the Free Fit Call
              </ButtonLink>
              <ButtonLink href="#vsl" variant="secondary" className="px-8 py-5">
                <Play className="h-5 w-5" />
                Watch the Breakdown
              </ButtonLink>
            </div>
          </div>
          <HeroProofPanel />
        </div>
      </div>
    </section>
  );
}

function HeroProofPanel() {
  return (
    <aside className="relative hidden lg:block" aria-label="Audit proof panel">
      <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(125,220,255,.16),transparent_68%)] blur-2xl" />
      <GlassCard className="relative overflow-hidden rounded-[2rem] border-cyan-100/15 bg-[#141313]/55 p-6 shadow-[0_0_80px_rgba(105,190,255,0.1)]">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/50 to-transparent" />
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="eyebrow text-cyan-100/80">Journey Leak Snapshot</p>
            <p className="mt-2 text-sm text-[#c5c7c9]">
              A practical diagnostic view of where demand gets lost.
            </p>
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-full border border-cyan-100/20 bg-cyan-100/10 text-cyan-100 shadow-[0_0_28px_rgba(125,220,255,0.18)]">
            <Gauge className="h-5 w-5" />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[.035] p-4">
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="text-sm font-medium text-white">
              Interest → Enquiry → Booking
            </span>
            <span className="rounded-full bg-cyan-100/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-100">
              Live map
            </span>
          </div>
          <div className="space-y-3">
            {[
              ["Response gap", "24h+ delay risk", "78%"],
              ["Booking friction", "unclear next step", "61%"],
              ["Follow-up loss", "manual nurture", "44%"],
            ].map(([label, note, width]) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="text-[#e5e2e1]">{label}</span>
                  <span className="text-[#c5c7c9]">{note}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-200 via-white to-violet-200 shadow-[0_0_18px_rgba(125,220,255,0.3)]"
                    style={{ width }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { icon: Clock3, value: "5-7 day", label: "audit" },
            { icon: FileSearch, value: "clear", label: "diagnostic" },
            { icon: CheckCircle2, value: "optional", label: "build" },
          ].map(({ icon: Icon, value, label }) => (
            <div
              key={value}
              className="rounded-2xl border border-white/10 bg-white/[.035] p-4"
            >
              <Icon className="mb-3 h-4 w-4 text-cyan-100/80" />
              <p className="text-xl font-semibold tracking-[-0.03em] text-white">
                {value}
              </p>
              <p className="eyebrow mt-2 text-[9px]">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl border border-white/10 bg-[#0e0e0e]/55 p-4">
          <div className="mb-3 flex items-center gap-1 text-cyan-100">
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <p className="text-sm leading-[1.55] text-[#e5e2e1]">
            Built for established service businesses already generating demand,
            but losing momentum before the customer is confirmed.
          </p>
        </div>
      </GlassCard>
    </aside>
  );
}

function Credibility() {
  return (
    <div className="border-y border-white/5 bg-[#0e0e0e]/55 py-5 md:py-6">
      <div className="mx-auto grid max-w-[1440px] gap-4 px-6 md:grid-cols-[auto_1fr] md:items-center md:px-20">
        <span className="eyebrow shrink-0 text-[#c8c6c5]/70">
          Strong fit for:
        </span>
        <div className="relative min-w-0 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="fit-marquee-track flex w-max items-center py-1">
            {[0, 1].map((loopIndex) => (
              <div
                key={loopIndex}
                aria-hidden={loopIndex === 1}
                className="flex shrink-0 items-center gap-8 pr-12 text-2xl font-bold tracking-[-0.04em] text-[#c5c7c9]/75 grayscale transition duration-700 hover:text-white hover:grayscale-0 md:gap-12"
              >
                {fitIndustries.map((industry) => (
                  <span key={`${loopIndex}-${industry}`}>{industry}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Vsl() {
  return (
    <section id="vsl" className="relative py-20 md:py-28">
      <div className="absolute left-1/2 top-0 h-px w-[72vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-300/20 to-transparent" />
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="section-title mb-4 text-4xl font-medium text-white md:text-5xl">
            The Hidden Revenue Leak
          </h2>
          <p className="eyebrow text-[#c8c6c5]">
            Inside Most Growing Businesses
          </p>
        </div>
        <GlassCard className="group relative aspect-video cursor-pointer overflow-hidden rounded-3xl border-white/10">
          <div className="pointer-events-none absolute -inset-px z-10 rounded-3xl bg-gradient-to-r from-cyan-200/20 via-transparent to-violet-300/20 opacity-50" />
          <Image
            src="/images/vsl-reference.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1280px"
            className="object-cover transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-[#141313]/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              aria-label="Play video placeholder"
              className="grid h-20 w-20 place-items-center rounded-full bg-[#e5e2e1] text-[#141313] transition duration-300 group-hover:scale-110 md:h-24 md:w-24"
            >
              <Play className="ml-1 h-9 w-9 fill-current" />
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#141313]/90 to-transparent p-6 md:p-8">
            <p className="text-xl font-medium tracking-[-0.01em] text-white md:text-2xl">
              Audit Preview: How a messy journey becomes a priority fix list
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function Letter() {
  return (
    <section className="bg-[#0e0e0e]/30 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <GlassCard className="relative overflow-hidden rounded-[2rem] border-cyan-100/15 p-8 shadow-[0_0_80px_rgba(105,190,255,0.08)] md:p-16 lg:p-20">
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/40 to-transparent" />
          <p className="eyebrow mb-10 text-[#c8c6c5]">Dear Business Owner,</p>
          <div className="max-w-4xl space-y-8 text-xl leading-[1.68] tracking-[-0.01em] text-[#c5c7c9] md:text-2xl">
            <p>
              You’ve spent thousands on marketing, hours on product, and years
              building a reputation. Yet, every single day, people who actually
              want what you sell are quietly walking away.
            </p>
            <p>
              It’s not because your product isn’t good. It’s because the{" "}
              <span className="font-medium text-white">
                friction between interest and purchase
              </span>{" "}
              is too high.
            </p>
            <p>
              Your team is busy, your inbox is full, and “following up” is
              something that happens when someone remembers. In the cracks of
              that chaos, your revenue is leaking.
            </p>
            <p>
              At Temporary Utopia, we don’t just build websites. We design
              systems that catch those leaks and turn them into permanent
              growth.
            </p>
            <p className="pt-6 text-white">— The Team at Temporary Utopia</p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function LeakChecklist() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-20">
        <h2 className="section-title mb-10 text-center text-4xl font-medium text-white md:mb-12 md:text-5xl">
          Is Your System Leaking?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {leakCards.map(({ icon: Icon, title, body }) => (
            <GlassCard
              key={title}
              className="scroll-shimmer-card flex flex-col items-start gap-6 rounded-3xl p-10 transition hover:bg-white/[.05]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-medium tracking-[-0.01em] text-white">
                {title}
              </h3>
              <p className="leading-[1.6] text-[#c5c7c9]">{body}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeakMath() {
  return (
    <section className="relative overflow-hidden bg-[#0e0e0e]/45 py-20 md:py-28">
      <div className="absolute left-1/2 top-0 h-px w-[72vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent" />
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 md:grid-cols-[0.95fr_1.05fr] md:px-20">
        <div className="mx-auto w-full max-w-xl">
          <p className="eyebrow text-cyan-100/80">The commercial maths</p>
          <h2 className="section-title mt-5 text-4xl font-medium text-white md:text-5xl">
            The leak only has to be small to be expensive.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-[1.65] text-[#c5c7c9]">
            The audit does not assume you need more traffic. It asks whether the
            demand you already paid for is being handled quickly, clearly, and
            consistently enough to become revenue.
          </p>
        </div>
        <CommercialMathsCalculator />
      </div>
    </section>
  );
}

function SystemWorking() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <GlassCard className="grid gap-10 rounded-[2rem] p-7 sm:p-10 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="eyebrow">What changes when the system is working</p>
            <h2 className="section-title mt-5 text-3xl font-semibold text-white sm:text-5xl">
              The work is designed to make trust easier to earn.
            </h2>
            <p className="mt-6 max-w-2xl leading-7 text-[#adb4c0]">
              Most businesses do not lose opportunities because nobody is
              interested. They lose them in the quiet gaps: unclear
              positioning, weak booking paths, slow follow-up, forgotten leads,
              and customer journeys that feel harder than they need to.
            </p>
            <p className="mt-5 max-w-2xl leading-7 text-[#adb4c0]">
              Temporary Utopia brings the brand, offer, website, and follow-up
              system into one clearer path. The business feels more considered,
              the next step becomes easier to take, and good demand is less
              likely to drift away.
            </p>
            <ButtonLink href="/apply" className="mt-7">
              Apply for the Free Fit Call
            </ButtonLink>
          </div>
          <div className="flex flex-col justify-end gap-3">
            {proofPoints.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between gap-5 border-b border-white/10 py-4 text-sm text-[#e5e2e1]"
              >
                <span>{item}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#817cff]" />
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function AuditDeliverables() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-cyan-100/80">What you receive</p>
            <h2 className="section-title mt-5 max-w-3xl text-4xl font-medium text-white md:text-5xl">
              A tangible diagnostic, not a vague strategy chat.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-[#c5c7c9]">
            The paid audit turns the current journey into a clear map of what is
            happening, where people drop off, and what should be fixed first.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {auditDeliverables.map((deliverable, index) => (
            <GlassCard
              key={deliverable}
              className="rounded-3xl p-6 transition hover:border-cyan-100/25 hover:bg-white/[.045]"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <ClipboardCheck className="h-5 w-5 text-cyan-100/80" />
                <span className="font-mono text-xs text-[#c5c7c9]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-lg font-medium tracking-[-0.01em] text-white">
                {deliverable}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function SampleAuditPreview() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(138,43,226,.12),transparent_70%)]" />
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-20">
        <div>
          <p className="eyebrow text-cyan-100/80">Example audit output</p>
          <h2 className="section-title mt-5 text-4xl font-medium text-white md:text-5xl">
            Here is the kind of thing we look for.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#c5c7c9]">
            Until there are public case studies, the page should still show the
            shape of the work. These are common findings we would validate
            against the real journey, tools, data, and team process.
          </p>
          <ButtonLink href="/apply" className="mt-8">
            Apply for the Free Fit Call
          </ButtonLink>
        </div>
        <GlassCard className="rounded-[2rem] p-5 md:p-7">
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="eyebrow text-[#c8c6c5]">Sample priority matrix</p>
              <p className="mt-2 text-sm text-[#c5c7c9]">
                What a business owner needs: plain language, priority, and next
                action.
              </p>
            </div>
            <Gauge className="h-6 w-6 text-cyan-100/80" />
          </div>
          <div className="space-y-3">
            {sampleFindings.map(([title, body], index) => (
              <div
                key={title}
                className="grid gap-3 rounded-2xl border border-white/10 bg-white/[.035] p-4 md:grid-cols-[auto_1fr_auto] md:items-center"
              >
                <span className="font-mono text-xs text-cyan-100/80">
                  P{index + 1}
                </span>
                <div>
                  <h3 className="font-medium text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#c5c7c9]">
                    {body}
                  </p>
                </div>
                <span className="rounded-full border border-cyan-100/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-cyan-100">
                  Review
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function HumanFirst() {
  return (
    <section className="bg-[#0e0e0e] py-20 md:py-28">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-16 px-6 md:flex-row md:gap-20 md:px-20">
        <div className="w-full md:w-1/2">
          <GlassCard className="relative h-[420px] overflow-hidden rounded-3xl md:h-[500px]">
            <Image
              src="/images/chris-laptop-2.webp"
              alt="Person reviewing a customer journey dashboard on a laptop"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </GlassCard>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="section-title mb-8 text-4xl font-medium text-white md:text-5xl">
            This is not about replacing your team with AI.
          </h2>
          <p className="mb-12 text-lg leading-[1.6] text-[#c5c7c9]">
            Generic AI bots often frustrate customers more than they help. We
            use technology to augment your human talent—removing the repetitive
            grunt work so your team can focus on building genuine relationships.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#c8c6c5]" />
              <p className="text-[#c5c7c9]">
                <strong className="text-white">Augmentation:</strong> AI that
                drafts the perfect reply for your team to review, rather than
                sending a robotic response.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <BotOff className="mt-1 h-5 w-5 shrink-0 text-[#c8c6c5]" />
              <p className="text-[#c5c7c9]">
                <strong className="text-white">Invisible Systems:</strong>{" "}
                Automation that works in the background to ensure no lead is
                ever left un-nurtured.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Mechanism() {
  return (
    <section id="mechanism" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <h2 className="section-title mb-12 text-center text-4xl font-medium text-white md:mb-14 md:text-5xl">
          The Customer Journey Revenue System
        </h2>
        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="absolute left-0 top-1/2 -z-10 hidden h-px w-full bg-white/10 md:block" />
          {systemSteps.map(([title, body], index) => (
            <GlassCard key={title} className="rounded-3xl p-8 text-center">
              <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-[#e5e2e1] font-bold text-[#141313]">
                {index + 1}
              </div>
              <h3 className="mb-4 text-2xl font-medium text-white">{title}</h3>
              <p className="text-sm leading-[1.6] text-[#c5c7c9]">{body}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="bg-[#0e0e0e]/50 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="rounded-3xl border border-white/5 p-8 md:p-10">
            <h3 className="mb-8 flex items-center gap-3 text-2xl font-medium text-white">
              <Smile className="h-6 w-6 text-[#c8c6c5]" />
              This is for you if...
            </h3>
            <ul className="space-y-6 text-[#c5c7c9]">
              <li>
                • You already receive enquiries, bookings, traffic, or sales
                conversations.
              </li>
              <li>• You sell high-value services or products ($2k+).</li>
              <li>
                • You know you have “leaky” processes but lack the time to fix
                them.
              </li>
              <li>• You want sustainable systems, not “growth hacks.”</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/5 p-8 opacity-60 md:p-10">
            <h3 className="mb-8 flex items-center gap-3 text-2xl font-medium text-white">
              <Frown className="h-6 w-6 text-[#c5c7c9]" />
              This is NOT for you if...
            </h3>
            <ul className="space-y-6 text-[#c5c7c9]">
              <li>• You are a pre-revenue startup with zero customers.</li>
              <li>• You are looking for a quick “get rich” AI bot.</li>
              <li>
                • You are unwilling to change your current internal workflow.
              </li>
              <li>• You sell low-margin commodity products.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="section-title mb-10 text-center text-4xl font-medium text-white md:mb-12 md:text-5xl">
          Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map(([question, answer], index) => (
            <details
              key={question}
              className="glass group rounded-2xl"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-xl font-medium text-white">
                {question}
                <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 leading-[1.6] text-[#c5c7c9]">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 text-center md:py-40">
      <div className="absolute left-1/2 top-0 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(138,43,226,.12),transparent_70%)] opacity-60" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6">
        <h2 className="display mb-8 text-4xl font-semibold text-white md:text-[72px]">
          Ready to stop the leaks?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-[1.6] text-[#c5c7c9]">
          Start with the free fit call. If the audit makes commercial sense,
          you will know the recommended scope, price, timeline, and next step
          before deciding.
        </p>
        <ButtonLink href="/apply" className="px-12 py-6 text-lg">
          Apply for the Free Fit Call
        </ButtonLink>
        <p className="eyebrow mt-8">Only 4 audit slots available per month</p>
      </div>
    </section>
  );
}
