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
    default: "OPC.Dino — 让你的好东西，被它该被看见的人看见",
    template: "%s | OPC.Dino",
  },
  description:
    "独立开发者的多平台 launch 工具。一个 URL，AI 拆出 Reddit / X / 即刻 / V2EX / Dev.to 等 10+ 平台原生发声，海外 + 中国双轨。BYO API key，$19 起。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    title: "OPC.Dino — 让你的好东西，被它该被看见的人看见",
    description:
      "一个 URL，AI 拆出 10+ 平台原生发声 — 把你 6 个月写的代码，从工程师朋友圈，推到真正会用的人面前。",
  },
  twitter: {
    card: "summary_large_image",
    title: "OPC.Dino — 让你的好东西，被它该被看见的人看见",
    description:
      "独立开发者的多平台 launch 工具。海外 + 中国双轨，BYO API key，$19 起。",
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
