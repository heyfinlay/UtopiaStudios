import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export function BrandMark({
  className,
  eager = false,
}: {
  className?: string;
  eager?: boolean;
}) {
  return (
    <span
      className={cn(
        "grid h-10 w-10 shrink-0 place-items-center drop-shadow-[0_0_18px_rgba(255,255,255,0.26)]",
        className,
      )}
      aria-hidden="true"
    >
      <Image
        src="/brand/temporary-utopia-symbol-white-bold.png"
        alt=""
        width={1080}
        height={985}
        unoptimized
        preload={eager}
        loading="eager"
        sizes="44px"
        className="h-full w-full scale-[1.08] object-contain"
      />
    </span>
  );
}
