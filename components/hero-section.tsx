"use client"

import type React from "react"

import { ArrowRight, FileText, Bot, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/scroll-utils"
import { useBetaSignupContext } from "./beta-signup-provider"

export default function HeroSection() {
  const { openBetaSignup } = useBetaSignupContext()

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  const handleTryNowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    openBetaSignup("hero-try-now")
  }

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-6 md:py-8">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[40%] -right-[30%] h-[800px] w-[800px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[30%] h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-3">
            ビジネス文書のAI分析
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-3">
            <span className="text-primary">DocsChat</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
            PDFやWord、Excel、PowerPointなど多様な文書をAIが即座に分析し、対話形式で情報を引き出せます
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Button size="lg" className="group" onClick={handleTryNowClick}>
              今すぐ試してみる
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={(e) => handleNavClick(e, "features")}>
              詳細を見る
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-1">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">複数ファイル対応</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">日本語最適化</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">プライバシー保護</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

