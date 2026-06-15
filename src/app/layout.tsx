import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { InactiveTabTitleHandler } from "@/components/ui/InactiveTabTitleHandler";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://temporaryutopia.com"),
  title: {
    default: "Temporary Utopia | Customer Journey Systems",
    template: "%s | Temporary Utopia",
  },
  description:
    "Temporary Utopia builds practical systems that improve how customers enquire, book, buy, follow up, and come back.",
  openGraph: {
    title: "Temporary Utopia",
    description: "Find and fix the gaps between customer interest and action.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <InactiveTabTitleHandler />
        {children}
      </body>
    </html>
  );
}
