"use client";

import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  useEffect(() => {
    const update = () => {
      const nextVisible = window.scrollY > 680;

      if (nextVisible !== visibleRef.current) {
        setVisible(nextVisible);
      }

      frame.current = null;
    };
    const onScroll = () => {
      if (frame.current === null) {
        frame.current = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== null) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#141313]/90 p-3 backdrop-blur-xl md:hidden">
      <ButtonLink href="/apply" className="w-full">
        Apply for the Free Fit Call
      </ButtonLink>
    </div>
  );
}
