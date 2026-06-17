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
      <SiteHeader compact />
      <main>
        <SectionWrapper className="grid gap-8 !pt-40 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <p className="eyebrow">Guided application</p>
            <h1 className="section-title mt-5 text-4xl font-semibold sm:text-6xl">
              Apply for a Customer Journey Audit Call
            </h1>
            <p className="mt-6 max-w-lg leading-7 text-[#aab1bd]">
              Answer one focused question at a time so we can understand the
              business, the current journey, and the tools already in play.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-[#c0c6cf]">
              {[
                "Focused fit conversation",
                "Tailored to your current journey",
                "No pressure or inflated promises",
              ].map((v) => (
                <li key={v} className="flex gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[#8f8aff]" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <GlassCard className="p-6 sm:p-9">
            <ApplicationForm />
          </GlassCard>
        </SectionWrapper>
      </main>
      <SiteFooter />
    </>
  );
}
