"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 680);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#141313]/90 p-3 backdrop-blur-xl md:hidden">
      <ButtonLink href="/apply" className="w-full">
        Book Your Audit Call
      </ButtonLink>
    </div>
  );
}
