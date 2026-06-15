import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function FAQSection({ faqs }: { faqs: Array<[string, string]> }) {
  return (
    <SectionWrapper>
      <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
        <div>
          <p className="eyebrow">Common questions</p>
          <h2 className="section-title mt-5 text-4xl font-semibold sm:text-6xl">
            Grounded answers before you book.
          </h2>
        </div>
        <div>
          {faqs.map(([question, answer]) => (
            <details
              key={question}
              className="group border-b border-white/10 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                <span>{question}</span>
                <span className="text-xl text-[#8e89ff] group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pt-4 text-sm leading-7 text-[#aab1bd]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
