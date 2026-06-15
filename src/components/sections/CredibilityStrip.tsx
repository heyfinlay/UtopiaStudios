import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function CredibilityStrip() {
  return (
    <SectionWrapper className="py-5">
      <div className="glass flex flex-col items-center justify-between gap-6 rounded-2xl px-6 py-5 text-center sm:flex-row sm:text-left">
        <p className="text-xs uppercase tracking-[.2em] text-[#949ca9]">
          Built for practical operators
        </p>
        <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-xs text-[#bdc3cc] sm:justify-end">
          <span>Clear diagnosis</span>
          <span>Measured priorities</span>
          <span>Human-centred systems</span>
          <span>Platform flexible</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
