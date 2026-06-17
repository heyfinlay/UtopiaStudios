import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingBackground } from "@/components/ui/FloatingBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Temporary Utopia directly by email, phone, or location details.",
};

const contactDetails = [
  {
    label: "Email",
    value: "finlay@temporaryutopia.com",
    href: "mailto:finlay@temporaryutopia.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "0415 955 430",
    href: "tel:+61415955430",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Port Melbourne, Victoria, Australia",
    href: "https://www.google.com/maps/search/?api=1&query=Port%20Melbourne%2C%20Victoria%2C%20Australia",
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <>
      <FloatingBackground />
      <SiteHeader compact />
      <main>
        <SectionWrapper className="!pt-40">
          <div className="mx-auto max-w-4xl">
            <p className="eyebrow">Contact</p>
            <h1 className="section-title mt-5 max-w-3xl text-5xl font-semibold sm:text-6xl">
              Reach Temporary Utopia directly.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#aab1bd]">
              For direct enquiries, audit questions, project details, or
              anything that does not need the application flow, use the details
              below.
            </p>

            <div className="mt-10 grid gap-4">
              {contactDetails.map(({ label, value, href, icon: Icon }) => (
                <GlassCard key={label} className="p-5 sm:p-6">
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="flex items-center gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[.045] text-cyan-100">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="form-label">{label}</span>
                        <span className="mt-1 block text-xl font-semibold text-white sm:text-2xl">
                          {value}
                        </span>
                      </span>
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-[#c5c7c9]">
                      Open
                    </span>
                  </a>
                </GlassCard>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <SiteFooter />
    </>
  );
}
