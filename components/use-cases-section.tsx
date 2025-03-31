import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Scale, Pencil } from "lucide-react"

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">活用シーン</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              PDF トークはさまざまな場面で活躍します
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 pt-8 md:pt-12">
          <Card className="flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Briefcase className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>ビジネスパーソン</CardTitle>
                <CardDescription>効率的な情報収集と分析</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc pl-5 space-y-2">
                <li>会議資料の素早い把握と要点抽出</li>
                <li>長文レポートからの重要情報の抽出</li>
                <li>複数の提案書の比較分析</li>
                <li>契約書の重要条項の確認</li>
                <li>プレゼン資料の作成補助</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>研究者・学生</CardTitle>
                <CardDescription>学習と研究の効率化</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc pl-5 space-y-2">
                <li>論文の要点理解と質問応答</li>
                <li>教科書や参考書からの情報抽出</li>
                <li>研究データの分析と整理</li>
                <li>複数の文献の横断的な調査</li>
                <li>レポート作成のための情報収集</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Scale className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>法律・会計専門家</CardTitle>
                <CardDescription>専門文書の効率的な処理</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc pl-5 space-y-2">
                <li>法律文書の条項確認と解釈</li>
                <li>判例の検索と関連情報の抽出</li>
                <li>財務諸表の分析と要点把握</li>
                <li>監査報告書の重要ポイント抽出</li>
                <li>複雑な規制文書の理解</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4">
              <Pencil className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>コンテンツクリエイター</CardTitle>
                <CardDescription>創造的な作業の効率化</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc pl-5 space-y-2">
                <li>参考資料からのアイデア抽出</li>
                <li>市場調査レポートの分析</li>
                <li>技術文書からの情報収集</li>
                <li>トレンド情報の整理と活用</li>
                <li>企画書作成のための情報整理</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

