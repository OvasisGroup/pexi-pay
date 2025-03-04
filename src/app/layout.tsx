import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-fira-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pexipay.com"),
  title: {
    default: "Pexi Pay",
    template: "%s | Pexi Pay",
  },
  description:
    "Pexi Pay - We deliver outstanding results while streamlining your processes. Our goal is to maximize efficiency and ensure you achieve the best outcomes with minimal effort and expense.",
  keywords: [
    "Pexi Labs",
    "Pexi Pay",
    "online payment gateway",
    "secure payment processing",
    "credit card",
    "debit card processing",
    "merchant account",
    "payment integration",
    "API integration",
    "e-commerce payment gateway",
    "PayPal integration",
    "igaming",
    "forex",
    "betting",
    "Gambling",
    "E commerce",
    "transaction fees",
    "payment gateway",
    "alternative payments",
    "merchant identification",
    "accept online payments",
    "mobile payment gateway",
    "PCI compliant",
    "payment gateway for small business",
    "high-risk payment gateway",
    "international payment gateway",
    "payment gateway reviews",
    "crypto processing",
    "crypto micro transactions",
    "Onramp",
    "Off ramp",
    "payin",
    "payout",
    "onboarding",
  ],
  authors: [{ name: "Pexi Pay Team" }],
  creator: "Pexi Pay",
  publisher: "Pexi Pay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
