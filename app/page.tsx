import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import PDFUploader from "@/components/pdf-uploader"
import FeaturesSection from "@/components/features-section"
import PricingSection from "@/components/pricing-section"
import UseCasesSection from "@/components/use-cases-section"
import UseCasesDetailSection from "@/components/use-cases-detail-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import SecuritySection from "@/components/security-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <Suspense fallback={<div className="text-center py-10">読み込み中...</div>}>
          <HeroSection />
          <PDFUploader />
          <FeaturesSection />
          <UseCasesDetailSection />
          <SecuritySection />
          <UseCasesSection />
          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </Suspense>
      </div>
    </main>
  )
}

