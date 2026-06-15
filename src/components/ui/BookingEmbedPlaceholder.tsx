"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Check } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { createCalendarBooking } from "@/lib/integrations";

const times = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "4:30 PM"];
export function BookingEmbedPlaceholder() {
  const router = useRouter();
  const [selected, setSelected] = useState("11:00 AM");
  const [done, setDone] = useState(false);
  if (done)
    return (
      <GlassCard className="flex min-h-[480px] flex-col items-center justify-center p-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#73d9b0]/15 text-[#73d9b0]">
          <Check />
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Booking time selected</h2>
        <p className="mt-2 text-[#a9b0bd]">
          Wednesday at {selected}. Connect your calendar provider to create the
          live booking.
        </p>
      </GlassCard>
    );
  return (
    <GlassCard className="p-5 sm:p-7">
      <div className="flex items-center gap-3 border-b border-white/10 pb-5">
        <CalendarDays className="text-[#918cff]" />
        <div>
          <p className="font-semibold">Select a date and time</p>
          <p className="text-xs text-[#89919e]">Calendar embed placeholder</p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs text-[#747d8b]">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
        {Array.from({ length: 28 }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`aspect-square rounded-full ${i === 10 ? "bg-[#716bfd] text-white" : "hover:bg-white/10"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <p className="mt-6 text-sm font-medium">Available times</p>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {times.map((time) => (
          <button
            type="button"
            key={time}
            onClick={() => setSelected(time)}
            className={`rounded-lg border px-3 py-2 text-xs ${selected === time ? "border-[#817cff] bg-[#817cff]/15 text-white" : "border-white/10 text-[#b8bec8]"}`}
          >
            {time}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={async () => {
          await createCalendarBooking({ date: "Wednesday", time: selected });
          setDone(true);
          window.setTimeout(() => router.push("/confirmation"), 500);
        }}
        className="mt-6 w-full rounded-full bg-[#e5e2e1] px-5 py-3 text-sm font-semibold text-[#1c1b1b] transition hover:brightness-110"
      >
        Complete booking
      </button>
    </GlassCard>
  );
}
