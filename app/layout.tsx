import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "运算练习室 · 人教版七年级",
  description: "记录每一次练习，找到薄弱项，有针对性地练习初一数学运算。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
