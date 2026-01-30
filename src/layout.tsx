import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import React from "react";
import "./globals.css";


export const metadata: Metadata = {
  title: "Tư tưởng Hồ Chí Minh về Đoàn kết Quốc tế và Đại đoàn kết Dân tộc",
  description:
    "Infographic về tư tưởng Hồ Chí Minh về đoàn kết quốc tế và đại đoàn kết dân tộc - nền tảng để Việt Nam hội nhập bền vững với thế giới.",
  generator: "HCM202",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
