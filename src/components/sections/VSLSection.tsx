import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder";
import { Reveal } from "@/components/ui/Reveal";

export function VSLSection({
  vsl,
}: {
  vsl: { title: string; placeholderText: string };
}) {
  return (
    <SectionWrapper id="vsl" className="!pt-4">
      <Reveal>
        <VideoPlaceholder title={vsl.title} body={vsl.placeholderText} />
      </Reveal>
    </SectionWrapper>
  );
}
