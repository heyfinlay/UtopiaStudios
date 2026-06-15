import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingBackground } from "@/components/ui/FloatingBackground";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { objectionArticles } from "@/content/funnels/objectionHub";

export const metadata: Metadata = {
  title: "Customer Journey Answers",
  description:
    "Clear answers about the Customer Journey Revenue System and audit process.",
};
export default function ObjectionHubPage() {
  return (
    <>
      <FloatingBackground />
      <SiteHeader />
      <main>
        <SectionWrapper className="!pt-40">
          <div className="max-w-3xl">
            <p className="eyebrow">Education hub</p>
            <h1 className="display mt-6 text-5xl font-semibold sm:text-7xl">
              Understand the system before you decide.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#aab1bd]">
              Grounded answers about the process, technology, team impact,
              measurement, and fit.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {objectionArticles.map((article) => (
              <Link key={article.slug} href={`/objection-hub/${article.slug}`}>
                <GlassCard className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-[#817cff]/45">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-[-.03em]">
                      {article.title}
                    </h2>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-[#8f8aff] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#a0a8b4]">
                    {article.summary}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <SiteFooter />
    </>
  );
}
