import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { BetaSignupProvider } from "@/components/beta-signup-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "DocsChat - PDFやWord、Excel、PowerPointなど多様な文書をAIが即座に分析 | AIファイル分析",
  description:
    "PDFやWord、Excel、PowerPointなど多様な文書をAIが即座に分析し、対話形式で情報を引き出せるサービス",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BetaSignupProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
          </BetaSignupProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
