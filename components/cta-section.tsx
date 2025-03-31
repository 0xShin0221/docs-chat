"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useBetaSignupContext } from "./beta-signup-provider"

export default function CTASection() {
  const { openBetaSignup } = useBetaSignupContext()

  const handleStartClick = () => {
    openBetaSignup("cta-start-free")
  }

  const handleDemoClick = () => {
    openBetaSignup("cta-demo")
  }

  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[20%] h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
              今すぐDocsChatを始めましょう
            </h2>
            <p className="mx-auto max-w-[800px] text-primary-foreground/80 md:text-xl/relaxed lg:text-xl/relaxed">
              無料プランから始めて、ドキュメントとの対話を革新的に変えましょう。
              クレジットカードは必要ありません。いつでもキャンセル可能です。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto group" onClick={handleStartClick}>
              無料で始める
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 h-auto"
              onClick={handleDemoClick}
            >
              デモを見る
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 w-full max-w-3xl">
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/10">
              <div className="text-3xl font-bold text-primary-foreground">10,000+</div>
              <p className="text-primary-foreground/80">処理済みドキュメント</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/10">
              <div className="text-3xl font-bold text-primary-foreground">5,000+</div>
              <p className="text-primary-foreground/80">アクティブユーザー</p>
            </div>
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-white/10">
              <div className="text-3xl font-bold text-primary-foreground">98%</div>
              <p className="text-primary-foreground/80">顧客満足度</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

