import type { Metadata } from "next";
import { Syne, DM_Sans, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

// Display font - bold, geometric, characterful
const syne = Syne({
  variable: "--font-clash",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Body font - refined, highly readable
const dmSans = DM_Sans({
  variable: "--font-satoshi",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Accent serif for editorial touches
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Studio Mika | Premium Web Design for Founders Who Move Fast",
  description: "We design and ship beautiful, high-converting websites in 2-3 weeks. Premium web design for founders and startups who demand excellence.",
  keywords: ["web design", "agency", "startup", "founders", "website development", "UI/UX", "premium design"],
  openGraph: {
    title: "Studio Mika | Premium Web Design for Founders",
    description: "We design websites for founders who move fast. Ship your site in 2-3 weeks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D8KVHVR1WN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D8KVHVR1WN');
          `}
        </Script>
      </head>
      <body className={`${syne.variable} ${dmSans.variable} ${instrumentSerif.variable} font-sans antialiased bg-[#FAFAF8] text-[#1A1A18]`}>
        {/* Grain texture overlay for premium feel */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
