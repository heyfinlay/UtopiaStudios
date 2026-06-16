import type { Metadata } from "next";
import {
  BotOff,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
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

const faqs = [
  [
    "How long does an audit take?",
    "The initial deep-dive audit is completed within 7 business days. You’ll receive a full technical and strategic roadmap highlighting every leak.",
  ],
  [
    "Do we need to switch our CRM?",
    "Not necessarily. We prefer to build on top of your existing stack unless it is fundamentally broken. We work across common CRM, booking, payment, email, SMS, and automation tools.",
  ],
  [
    "What is the ROI?",
    "We do not guarantee commercial results. The audit is designed to find clear, measurable opportunities to recover demand that is already being generated.",
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
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="absolute -left-24 -top-52 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(138,43,226,.18),transparent_70%)]" />
      <div className="absolute -right-24 bottom-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(65,105,225,.13),transparent_70%)]" />
      <div className="absolute left-1/2 top-28 h-px w-[70vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,760px)_minmax(320px,1fr)] xl:gap-16">
          <div>
            <div className="glass-soft mb-7 inline-flex rounded-full border-cyan-100/15 px-4 py-1.5 shadow-[0_0_32px_rgba(125,220,255,0.08)]">
              <span className="eyebrow text-[#c8c6c5]">
                Strategy meets ephemeral beauty
              </span>
            </div>
            <h1 className="display mb-7 text-[clamp(2.35rem,7vw,4.5rem)] font-semibold text-white md:text-[72px]">
              Stop Losing Customers Between{" "}
              <span className="text-[#c8c6c5]/60">Interest and Purchase.</span>
            </h1>
            <p className="mb-9 max-w-2xl text-base leading-[1.65] text-[#c5c7c9] md:text-lg">
              Temporary Utopia helps established businesses identify and fix the
              points where customers get confused, delayed, ignored, or lost —
              using better digital journeys, smarter follow-up, practical
              automation, and AI where it genuinely improves the experience.
            </p>
            <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
              <ButtonLink href="/apply" className="px-8 py-5">
                Book Your Customer Journey Audit Call
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
              A practical audit view of where demand gets lost.
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
            { icon: Clock3, value: "7-day", label: "roadmap" },
            { icon: Workflow, value: "5-stage", label: "review" },
            { icon: CheckCircle2, value: "human", label: "handoff" },
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
            Built for established teams already generating demand, but losing
            momentum between the first click and the confirmed customer.
          </p>
        </div>
      </GlassCard>
    </aside>
  );
}

function Credibility() {
  return (
    <div className="border-y border-white/5 bg-[#0e0e0e]/55 py-8 md:py-10">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-8 px-6 opacity-55 grayscale transition duration-700 hover:opacity-80 hover:grayscale-0 md:px-20">
        <span className="eyebrow">Trusted by forward-thinking founders:</span>
        <div className="flex flex-wrap items-center gap-8 text-2xl font-bold tracking-[-0.04em] md:gap-12">
          <span>FORMA.</span>
          <span>NEXUS_</span>
          <span>ELEVATE</span>
          <span>STRATUM</span>
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
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center transition duration-1000 group-hover:scale-105"
            style={{ backgroundImage: "url('/images/vsl-reference.png')" }}
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
              Case Study: Recovering 34% of “Lost” Leads in 60 Days
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
              className="flex flex-col items-start gap-6 rounded-3xl p-10 transition hover:bg-white/[.05]"
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

function HumanFirst() {
  return (
    <section className="bg-[#0e0e0e] py-20 md:py-28">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-16 px-6 md:flex-row md:gap-20 md:px-20">
        <div className="w-full md:w-1/2">
          <GlassCard className="relative h-[420px] overflow-hidden rounded-3xl md:h-[500px]">
            <div className="absolute inset-0 grid place-items-center p-12 text-center">
              <div>
                <span className="eyebrow mb-4 block text-[#c8c6c5]">
                  System Philosophy
                </span>
                <div className="select-none text-5xl font-extrabold tracking-[-0.04em] text-white/10 md:text-6xl">
                  HUMAN FIRST
                </div>
              </div>
            </div>
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
              <li>• You have an established business with existing flow.</li>
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
          Secure your Customer Journey Audit today and get a clear, actionable
          plan to recapture lost revenue and scale your operations.
        </p>
        <ButtonLink href="/apply" className="px-12 py-6 text-lg">
          Book Your Audit Now
        </ButtonLink>
        <p className="eyebrow mt-8">Only 4 audit slots available per month</p>
      </div>
    </section>
  );
}
