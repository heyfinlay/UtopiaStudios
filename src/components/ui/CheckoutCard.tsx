"use client";

import { useState } from "react";
import { Check, LockKeyhole } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { createStripeCheckout } from "@/lib/integrations";

export function CheckoutCard() {
  const [agreed, setAgreed] = useState(false);
  const [complete, setComplete] = useState(false);
  return (
    <GlassCard className="p-6 sm:p-8">
      {complete ? (
        <div className="py-14 text-center">
          <Check className="mx-auto h-10 w-10 text-[#73d9b0]" />
          <h2 className="mt-4 text-2xl font-semibold">
            Checkout placeholder complete
          </h2>
          <p className="mt-2 text-sm text-[#a9b0bd]">
            A live Stripe connection can replace this state later.
          </p>
        </div>
      ) : (
        <>
          <p className="text-sm text-[#9ca4b1]">Investment</p>
          <p className="mt-2 text-4xl font-semibold tracking-[-.05em]">
            $1,000 AUD
          </p>
          <p className="mt-1 text-xs text-[#848d9a]">One-time payment</p>
          <div className="my-6 border-y border-white/10 py-5 text-sm">
            <div className="flex justify-between">
              <span className="text-[#aab1bc]">Customer Journey Audit</span>
              <span>$1,000 AUD</span>
            </div>
          </div>
          <label className="flex items-start gap-3 text-xs leading-5 text-[#abb2bd]">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 accent-[#7772ff]"
            />
            I have read and agree to the terms and expectations for the audit.
          </label>
          <button
            type="button"
            disabled={!agreed}
            onClick={async () => {
              await createStripeCheckout({
                product: "Customer Journey Audit",
                amount: 1000,
                currency: "AUD",
              });
              setComplete(true);
            }}
            className="mt-6 w-full rounded-full bg-[#e5e2e1] px-5 py-3.5 text-sm font-semibold text-[#1c1b1b] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Confirm Your Customer Journey Audit
          </button>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[#747d89]">
            <LockKeyhole className="h-3.5 w-3.5" />
            Secure payment placeholder
          </p>
        </>
      )}
    </GlassCard>
  );
}
