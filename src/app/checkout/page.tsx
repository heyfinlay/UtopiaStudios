import type { Metadata } from "next";
import { CheckCircle2, Clock3 } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingBackground } from "@/components/ui/FloatingBackground";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CheckoutCard } from "@/components/ui/CheckoutCard";

const deliverables = [
  "Customer Journey Map",
  "Revenue Leak Report",
  "Priority Fix Matrix",
  "Tool and process review",
  "Customer experience recommendations",
  "Implementation roadmap",
  "Audit delivery call",
];
export const metadata: Metadata = {
  title: "Customer Journey Audit Checkout",
  description: "Confirm a paid Customer Journey Audit.",
};
export default function CheckoutPage() {
  return (
    <>
      <FloatingBackground />
      <SiteHeader compact />
      <main>
        <SectionWrapper className="grid min-h-[760px] items-center gap-12 !pt-40 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="eyebrow">Step 3 of 3</p>
            <h1 className="section-title mt-5 text-4xl font-semibold sm:text-6xl">
              Customer Journey Audit
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#aab1bd]">
              A structured diagnostic of the journey from interest to action,
              including the tool stack, follow-up, handovers, and opportunities
              to improve the customer experience.
            </p>
            <div className="mt-9 grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="font-semibold">What is included</h2>
                <ul className="mt-5 space-y-3">
                  {deliverables.map((v) => (
                    <li key={v} className="flex gap-3 text-sm text-[#c1c7cf]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#73d9b0]" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-semibold">Timeline and expectations</h2>
                <ul className="mt-5 space-y-4 text-sm leading-6 text-[#a6aeba]">
                  <li className="flex gap-3">
                    <Clock3 className="mt-1 h-4 w-4 shrink-0 text-[#8f8aff]" />
                    Typical delivery is 5–7 business days after information and
                    access are provided.
                  </li>
                  <li>
                    The audit is a diagnostic and roadmap. Implementation is
                    scoped separately.
                  </li>
                  <li>
                    Recommendations depend on the quality of available data and
                    access.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <CheckoutCard />
        </SectionWrapper>
      </main>
      <SiteFooter />
    </>
  );
}
