import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bramplan.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BramPlan — We acquire and operate one exceptional Pacific Northwest business",
    template: "%s · BramPlan",
  },
  description:
    "Founder-led, permanent-capital acquirer based in Bend, Oregon. Proven exits to Polaris, Cummins, and USWeb. We buy and hold one exceptional Pacific Northwest business for the long run.",
  keywords: [
    "business acquisition",
    "Pacific Northwest",
    "search fund",
    "permanent capital",
    "lower middle market",
    "business brokers",
    "Bend Oregon",
  ],
  openGraph: {
    title: "BramPlan",
    description:
      "We acquire and operate one exceptional Pacific Northwest business — and we hold it for the long run.",
    url: SITE_URL,
    siteName: "BramPlan",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BramPlan",
    description:
      "We acquire and operate one exceptional Pacific Northwest business — and we hold it for the long run.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
