import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrossBorder Workspace",
  description: "AI Workspace for Modern Cross-border Sellers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
