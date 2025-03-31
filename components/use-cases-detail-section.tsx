import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, FileSearch, Scale, Clock, CheckCircle, DollarSign } from "lucide-react"
import Link from "next/link"

export default function UseCasesDetailSection() {
  const useCases = [
    {
      id: "saas-comparison",
      title: "SaaSツール比較で意思決定を加速",
      icon: <FileSearch className="h-10 w-10 text-primary" />,
      description:
        "IT部門マネージャーが複数のSaaS提案書を比較検討する際の時間を大幅に短縮し、より質の高い意思決定を実現します。",
      story:
        "「毎月のように新しいSaaSツールの提案書が届き、それぞれを詳細に比較する時間がなかった。PDF トークを使うことで、複数の提案書から必要な情報を即座に抽出し、比較表を自動作成できるようになった。」",
      steps: [
        "複数のSaaS提案書PDFをアップロード",
        "「各ツールの価格体系、主要機能、セキュリティ対策を比較して」と質問",
        "「当社の要件に最も合致するのはどのツールか」と分析を依頼",
        "比較結果をエクスポートして意思決定に活用",
      ],
      benefits: [
        {
          icon: <Clock className="h-5 w-5 text-primary" />,
          text: "資料確認時間を90%削減",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-primary" />,
          text: "見落としのない正確な比較",
        },
        {
          icon: <DollarSign className="h-5 w-5 text-primary" />,
          text: "最適なツール選定でコスト削減",
        },
      ],
      image: "/placeholder.svg?height=300&width=500",
      questions: [
        "各ツールのAPI連携機能を比較してください",
        "エンタープライズプランの価格はどのように異なりますか？",
        "セキュリティ認証取得状況を教えてください",
      ],
    },
    {
      id: "financial-analysis",
      title: "経理資料の分析を効率化",
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      description:
        "経理担当者が四半期報告のために複数の財務資料を分析する時間を短縮し、異常値検出の精度を向上させます。",
      story:
        "「四半期ごとの財務レポート作成に毎回3日かかっていた。PDF トークを使うことで、複数の財務PDFから数値を自動抽出し、傾向分析までを半日で完了できるようになった。」",
      steps: [
        "四半期の財務PDFをすべてアップロード",
        "「前四半期比で10%以上変動している費目を抽出して」と質問",
        "「主要KPIの推移グラフを作成するためのデータを抽出して」と依頼",
        "抽出データをエクスポートして報告書作成に活用",
      ],
      benefits: [
        {
          icon: <Clock className="h-5 w-5 text-primary" />,
          text: "分析時間を80%短縮",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-primary" />,
          text: "人的ミスを大幅に削減",
        },
        {
          icon: <DollarSign className="h-5 w-5 text-primary" />,
          text: "異常値の早期発見でコスト管理を強化",
        },
      ],
      image: "/placeholder.svg?height=300&width=500",
      questions: [
        "営業経費の増加要因を分析してください",
        "利益率が最も高い部門はどこですか？",
        "前年同期比での在庫回転率の変化を教えてください",
      ],
    },
    {
      id: "legal-document",
      title: "法律文書を簡単に理解・リスク特定",
      icon: <Scale className="h-10 w-10 text-primary" />,
      description: "法務知識が限られた経営者が契約書をレビューする際の理解を助け、外部コンサルタント費用を削減します。",
      story:
        "「複雑な契約書を理解するために毎回顧問弁護士に相談していたが、コストがかさんでいた。PDF トークを使うことで、契約書の重要ポイントを自分で理解し、本当に必要な時だけ専門家に相談できるようになった。」",
      steps: [
        "契約書PDFをアップロード",
        "「この契約の重要な義務条項をわかりやすく説明して」と質問",
        "「当社にとってリスクが高い条項はどれか」と分析を依頼",
        "理解した上で必要に応じて専門家に相談",
      ],
      benefits: [
        {
          icon: <Clock className="h-5 w-5 text-primary" />,
          text: "レビュー時間を70%短縮",
        },
        {
          icon: <CheckCircle className="h-5 w-5 text-primary" />,
          text: "重要条項の見落としを防止",
        },
        {
          icon: <DollarSign className="h-5 w-5 text-primary" />,
          text: "法務コンサルタント費用を50%削減",
        },
      ],
      image: "/placeholder.svg?height=300&width=500",
      questions: [
        "この契約の解約条件を教えてください",
        "知的財産権に関する条項を簡潔に説明してください",
        "この契約で当社が負う最大のリスクは何ですか？",
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            実用的なユースケース
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ビジネスを加速させる活用例</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            PDF トークがどのようにビジネスの課題を解決し、効率化するかをご紹介します
          </p>
        </div>

        <div className="space-y-16 mt-8">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              id={useCase.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                <div className="relative rounded-xl overflow-hidden border shadow-lg">
                  <img src={useCase.image || "/placeholder.svg"} alt={useCase.title} className="w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <div className="space-y-2">
                      <h4 className="text-white text-lg font-medium">よくある質問例：</h4>
                      <ul className="space-y-1">
                        {useCase.questions.map((question, i) => (
                          <li key={i} className="text-white/90 text-sm bg-black/30 rounded-lg px-3 py-1.5">
                            "{question}"
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                <div className="space-y-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10">{useCase.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>

                  <Card className="bg-muted/50 border-none">
                    <CardContent className="p-4">
                      <p className="italic text-sm">{useCase.story}</p>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <h4 className="font-semibold">使用手順：</h4>
                    <ol className="space-y-2">
                      {useCase.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
                            {i + 1}
                          </div>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {useCase.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center p-3 rounded-lg bg-background border"
                      >
                        <div className="mb-2">{benefit.icon}</div>
                        <p className="text-sm font-medium">{benefit.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link href="#try-now">
                      <Button className="group">
                        今すぐ試してみる
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

