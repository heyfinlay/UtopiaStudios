import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingBackground } from "@/components/ui/FloatingBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ApplicationForm } from "@/components/forms/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply for an Audit Call",
  description: "Apply for a focused Customer Journey Audit Fit Call.",
};
export default function ApplyPage() {
  return (
    <>
      <FloatingBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(178,154,255,0.09),transparent_68%)] blur-2xl" />
        <div className="absolute right-[-16rem] top-32 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(102,178,255,0.08),transparent_70%)] blur-2xl" />
        <div className="absolute bottom-[-20rem] left-[-14rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.035),transparent_70%)] blur-2xl" />
      </div>
      <SiteHeader compact />
      <main>
        <SectionWrapper className="apply-page-shell grid gap-10 !pt-32 pb-24 sm:!pt-36 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12 lg:!pt-36">
          <div className="max-w-xl lg:sticky lg:top-28 lg:self-start lg:pt-8">
            <p className="eyebrow text-cyan-100/70">Guided application</p>
            <h1 className="section-title mt-5 max-w-lg text-[2.65rem] font-semibold leading-[1.04] text-white sm:text-5xl lg:text-[3.35rem]">
              Apply for a Customer Journey Audit
            </h1>
            <p className="mt-6 max-w-md text-[1.02rem] leading-7 text-[#b8bcc3]">
              Answer one focused question at a time so we can understand your
              business, the journey customers move through, and the systems
              already in play.
            </p>
            <ul className="mt-9 space-y-3 text-[0.82rem] leading-6 text-[#c5c7c9]/82">
              {[
                "Focused fit conversation",
                "Tailored to your current journey",
                "No pressure or inflated promises",
              ].map((v) => (
                <li key={v} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[.035] text-cyan-100/80">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 h-px max-w-sm bg-gradient-to-r from-white/15 via-cyan-100/10 to-transparent" />
          </div>
          <GlassCard className="application-audit-card lg:mt-[-0.75rem]">
            <ApplicationForm />
          </GlassCard>
        </SectionWrapper>
      </main>
      <SiteFooter />
    </>
  );
}
