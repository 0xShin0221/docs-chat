import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingSection() {
  const plans = [
    {
      name: "フリープラン",
      description: "個人利用に最適な無料プラン",
      price: "¥0",
      period: "/月",
      features: ["1日3回までの質問", "最大10ページのドキュメント", "基本的な日本語OCR", "セッションベースの保存"],
      buttonText: "無料で始める",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "スタンダードプラン",
      description: "頻繁に利用する方に最適",
      price: "¥980",
      period: "/月",
      features: [
        "無制限の質問",
        "最大100ページのドキュメント",
        "高精度日本語OCR",
        "30日間のデータ保存",
        "優先サポート",
      ],
      buttonText: "今すぐ始める",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "プロプラン",
      description: "プロフェッショナルな利用に",
      price: "¥2,980",
      period: "/月",
      features: [
        "無制限の質問",
        "無制限のページ数",
        "最高精度OCR",
        "無制限のデータ保存",
        "優先APIアクセス",
        "専用サポート",
      ],
      buttonText: "プロプランを選択",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            柔軟な料金プラン
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            あなたのニーズに合わせたプラン
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            DocsChatは、個人からビジネスまで、さまざまな用途に対応する柔軟な料金プランをご用意しています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col relative overflow-hidden transition-all hover:shadow-lg ${
                plan.popular ? "border-primary shadow-md" : "border"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                  人気
                </div>
              )}
              <CardHeader className="flex flex-col space-y-1.5 p-6">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-2 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full" variant={plan.buttonVariant} size="lg">
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 rounded-xl bg-muted">
            <p className="text-muted-foreground">
              法人向けエンタープライズプランもご用意しています。
              <a href="#contact" className="text-primary hover:underline ml-1 font-medium">
                お問い合わせ
              </a>
              ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

