import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://opc.dinolabs.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OPC.Dino — 一个 URL，发到 10+ 平台 | 独立开发者 launch 工具",
    template: "%s | OPC.Dino",
  },
  description:
    "AI 把你的产品拆成 10+ 平台原生内容，海外 Reddit/X/Threads + 中国即刻/V2EX 一套发完。BYO API key，$19 起。出海中国独立开发者专属。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    title: "OPC.Dino — 一个 URL，发完所有平台",
    description:
      "AI 把你的产品拆成 10+ 平台原生内容包 — 海外、中国，一套搞定。",
  },
  twitter: {
    card: "summary_large_image",
    title: "OPC.Dino — 一个 URL，发完所有平台",
    description:
      "AI 把你的产品拆成 10+ 平台原生内容包 — 海外、中国，一套搞定。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
