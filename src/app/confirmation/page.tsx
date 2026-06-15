import type { Metadata } from "next";
import Link from "next/link";
import { CalendarPlus, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingBackground } from "@/components/ui/FloatingBackground";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = { title: "Your Call Is Booked" };
export default function ConfirmationPage() {
  return (
    <>
      <FloatingBackground />
      <SiteHeader compact />
      <main>
        <SectionWrapper className="!pt-40">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Booking confirmed</p>
            <h1 className="section-title mt-5 text-4xl font-semibold sm:text-6xl">
              Your Customer Journey Audit Fit Call is booked.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#aab1bd]">
              Before the call, review your current enquiry, booking, purchase,
              and follow-up process. Bring any links, pages, forms, funnels, CRM
              screenshots, or automations you want us to understand.
            </p>
          </div>
          <div className="mt-12">
            <VideoPlaceholder
              title="A short note before the call"
              body="Add your pre-call video here to set expectations and improve show-up quality."
            />
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <GlassCard className="p-7">
              <h2 className="text-xl font-semibold">
                What happens on the call
              </h2>
              <ol className="mt-5 space-y-4 text-sm leading-6 text-[#adb4c0]">
                <li>
                  1. Clarify the current customer action and commercial context.
                </li>
                <li>
                  2. Walk through the journey and identify obvious points of
                  friction.
                </li>
                <li>3. Decide whether a paid audit is the right next step.</li>
              </ol>
              <button
                type="button"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#aaa6ff]"
              >
                <CalendarPlus className="h-4 w-4" />
                Add a calendar reminder
              </button>
            </GlassCard>
            <GlassCard className="p-7">
              <h2 className="text-xl font-semibold">Useful before the call</h2>
              <div className="mt-4">
                {[
                  [
                    "What happens in the audit?",
                    "/objection-hub/what-happens-in-the-audit",
                  ],
                  [
                    "Is this just AI automation?",
                    "/objection-hub/is-this-just-ai-automation",
                  ],
                  [
                    "How do we measure success?",
                    "/objection-hub/how-do-we-measure-success",
                  ],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center justify-between border-b border-white/10 py-4 text-sm text-[#c5cad2]"
                  >
                    {label}
                    <ArrowRight className="h-4 w-4 text-[#7d78ff]" />
                  </Link>
                ))}
              </div>
            </GlassCard>
          </div>
        </SectionWrapper>
      </main>
      <SiteFooter />
    </>
  );
}
