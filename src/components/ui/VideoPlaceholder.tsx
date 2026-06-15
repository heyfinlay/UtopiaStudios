import { Play } from "lucide-react";
import { GlassCard } from "./GlassCard";

export function VideoPlaceholder({
  title,
  body,
}: {
  title?: string;
  body?: string;
}) {
  return (
    <GlassCard className="relative isolate flex aspect-video min-h-[260px] w-full items-center justify-center overflow-hidden p-8 text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(116,110,255,.32),transparent_28%),repeating-radial-gradient(ellipse_at_center,rgba(128,145,255,.12)_0_1px,transparent_2px_13px)] opacity-80" />
      <div className="max-w-xl">
        <button
          type="button"
          aria-label="Play video placeholder"
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/55 bg-black/30 backdrop-blur"
        >
          <Play className="ml-1 h-7 w-7 fill-white" />
        </button>
        {title && (
          <h3 className="mt-6 text-2xl font-semibold tracking-[-.04em]">
            {title}
          </h3>
        )}
        {body && (
          <p className="mt-3 text-sm leading-6 text-[#abb2bf]">{body}</p>
        )}
      </div>
    </GlassCard>
  );
}
