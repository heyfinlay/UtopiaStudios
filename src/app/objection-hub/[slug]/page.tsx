import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingBackground } from "@/components/ui/FloatingBackground";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTASection } from "@/components/sections/CTASection";
import {
  getObjectionArticle,
  objectionArticles,
} from "@/content/funnels/objectionHub";

export function generateStaticParams() {
  return objectionArticles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getObjectionArticle(slug);
  return { title: article?.title ?? "Answer" };
}
export default async function ObjectionArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getObjectionArticle(slug);
  if (!article) notFound();
  return (
    <>
      <FloatingBackground />
      <SiteHeader />
      <main>
        <SectionWrapper className="!pt-40">
          <article className="mx-auto max-w-3xl">
            <p className="eyebrow">Customer journey answers</p>
            <h1 className="section-title mt-6 text-4xl font-semibold sm:text-7xl">
              {article.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-[#b4bbc6]">
              {article.summary}
            </p>
            <div className="mt-12 space-y-7 text-lg leading-9 text-[#a9b0bc]">
              {article.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </article>
        </SectionWrapper>
        <CTASection
          title="Bring the real journey into the conversation."
          body="A focused fit call is the fastest way to decide whether a deeper audit is useful."
        />
      </main>
      <SiteFooter />
    </>
  );
}
