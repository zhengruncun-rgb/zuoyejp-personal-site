import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "郑老师 - 帮老师减负的AI工具开发者",
  description: "在教育系统干了十几年，把老师最烦的重复工作变成能直接用的工具",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
