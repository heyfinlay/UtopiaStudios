import type { Metadata } from "next";
import { RevenueLeakReportPage } from "@/components/revenue-leak-map/RevenueLeakReportPage";
import { revenueLeakMapDemo } from "@/data/revenueLeakMapDemo";

export const metadata: Metadata = {
  title: `Revenue Leak Map for ${revenueLeakMapDemo.businessName}`,
  description:
    "A Temporary Utopia diagnostic report showing where warm leads are slipping between enquiry, booking, follow-up, and revenue.",
};

export default function RevenueLeakMapDemoPage() {
  return <RevenueLeakReportPage report={revenueLeakMapDemo} />;
}
