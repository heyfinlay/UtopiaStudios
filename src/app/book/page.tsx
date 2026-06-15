import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingBackground } from "@/components/ui/FloatingBackground";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BookingEmbedPlaceholder } from "@/components/ui/BookingEmbedPlaceholder";

export const metadata: Metadata = {
  title: "Book Your Audit Fit Call",
  description: "Book a focused Customer Journey Audit Fit Call.",
};
export default function BookPage() {
  return (
    <>
      <FloatingBackground />
      <SiteHeader compact />
      <main>
        <SectionWrapper className="grid min-h-[760px] items-center gap-12 !pt-40 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Step 2 of 3</p>
            <h1 className="section-title mt-5 text-4xl font-semibold sm:text-6xl">
              Customer Journey Audit Fit Call
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#aab1bd]">
              This is not a vague discovery call. It is a focused fit call to
              understand your current customer journey, identify obvious leaks,
              and determine whether a paid Customer Journey Audit makes sense.
            </p>
            <h2 className="mt-9 font-semibold">What to prepare</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-[#c0c6cf]">
              {[
                "The main action you want customers to take",
                "Links to the pages, forms, bookings, or checkouts involved",
                "Your best estimate of where people slow down or disappear",
                "Questions about the current stack or follow-up process",
              ].map((v) => (
                <li key={v} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#8f8aff]" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <BookingEmbedPlaceholder />
        </SectionWrapper>
      </main>
      <SiteFooter />
    </>
  );
}
