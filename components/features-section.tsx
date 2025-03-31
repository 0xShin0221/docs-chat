import { FileText, MessageSquare, Shield, Globe, Zap, Smartphone, BookOpen, Lock } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "マルチドキュメント解析",
      description:
        "PDF、Word、Excel、PowerPointなど複数のファイルを同時にアップロードして解析。関連文書を一度に処理できます。",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "自然な日本語対話",
      description: "ドキュメントの内容について日本語で自然に質問。複雑な質問にも正確に回答します。",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "プライバシー保護",
      description: "セッション終了後のデータ自動削除オプション。機密文書も安心して処理できます。",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "日本語最適化",
      description: "日本語文書の理解に特化した解析精度。縦書き文書にも対応しています。",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "高速処理",
      description: "大容量ファイルも素早く処理。待ち時間を最小限に抑え、効率的に作業できます。",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "OCR機能",
      description: "スキャンされた文書や手書き文書からもテキストを抽出。あらゆる文書に対応します。",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      title: "モバイル対応",
      description: "スマートフォンやタブレットからも快適に利用可能。外出先でも文書を確認できます。",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "エンタープライズセキュリティ",
      description: "法人向けの強化されたセキュリティオプション。社内文書も安全に処理できます。",
    },
  ]

  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
    >
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[10%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            革新的な機能
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">DocsChatの主な機能</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            DocsChatが提供する革新的な機能をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-xl border p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 h-24 w-24 bg-primary/5 rounded-bl-full rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 inline-block">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

