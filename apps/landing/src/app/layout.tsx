import type { Metadata } from "next";
import { Outfit, Noto_Sans_SC, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-sans-sc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://opc.dinolabs.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "OPC.Dino — Let your good work be seen by the people who need it",
    template: "%s | OPC.Dino",
  },
  description:
    "The launch tool for indie devs. One URL → AI writes 10+ native posts (Reddit / X / Dev.to / Jike / V2EX / IH / PH). Global + China dual-track. BYO API key, $19/mo.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title:
      "OPC.Dino — Let your good work be seen by the people who need it",
    description:
      "One URL. AI ships native posts to 10+ platforms — moving your 6 months of code from the engineer bubble to the people who actually need it.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "OPC.Dino — Let your good work be seen by the people who need it",
    description:
      "The launch tool for indie devs. Global + China dual-track. BYO API key, $19/mo.",
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
      className={`${outfit.variable} ${notoSansSC.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
