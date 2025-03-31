"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section id="faq" className="py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">よくある質問</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              DocsChatについてよくいただく質問と回答
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8 md:mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>どのようなファイル形式に対応していますか？</AccordionTrigger>
              <AccordionContent>
                PDF、Word（.doc、.docx）、Excel（.xls、.xlsx）、PowerPoint（.ppt、.pptx）など、主要なビジネス文書形式に対応しています。また、テキスト埋め込み型のファイル、スキャンされたファイル、画像ベースのファイルなど、ほぼすべての種類のドキュメントに対応しています。日本語の縦書き文書にも対応しており、OCR技術を使用してスキャンされた文書からもテキストを抽出できます。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>アップロードしたファイルのプライバシーは守られますか？</AccordionTrigger>
              <AccordionContent>
                はい、プライバシーを最優先に考えています。アップロードされたファイルはセッション中のみ処理され、セッション終了後に自動的に削除されるオプションがあります。また、すべてのデータはエンドツーエンドで暗号化されており、第三者がアクセスすることはできません。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>一度にアップロードできるファイルの数やサイズに制限はありますか？</AccordionTrigger>
              <AccordionContent>
                フリープランでは1回のセッションで最大3つのファイル（合計10ページまで）をアップロードできます。スタンダードプランでは最大10個のファイル（合計100ページまで）、プロプランでは無制限のファイルをアップロードいただけます。1つのファイルのサイズ上限は100MBとなっています。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>どのような質問ができますか？</AccordionTrigger>
              <AccordionContent>
                ドキュメントの内容に関するあらゆる質問が可能です。例えば、「このレポートの主な結論は？」「3ページ目のグラフはどのようなデータを示していますか？」「この契約書の重要な条件を教えてください」などの質問に回答します。複数のファイルにまたがる質問も可能です。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>法人での利用は可能ですか？</AccordionTrigger>
              <AccordionContent>
                はい、法人向けのエンタープライズプランをご用意しています。エンタープライズプランでは、専用のセキュリティ機能、カスタムデプロイメント、専任サポート、APIアクセスなどの特別な機能をご利用いただけます。詳細については、お問い合わせフォームからご連絡ください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>無料トライアルはありますか？</AccordionTrigger>
              <AccordionContent>
                はい、フリープランを無料でご利用いただけます。また、有料プランを検討されている方には、14日間の全機能トライアルも提供しています。トライアル期間中はいつでもキャンセル可能で、自動更新はされません。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>オフラインでも使用できますか？</AccordionTrigger>
              <AccordionContent>
                DocsChatはクラウドベースのサービスであるため、基本的にはインターネット接続が必要です。ただし、エンタープライズプランでは、特定の条件下でオンプレミス版のデプロイメントも可能です。詳細については、法人向けサポートにお問い合わせください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>サポートはどのように受けられますか？</AccordionTrigger>
              <AccordionContent>
                フリープランではコミュニティフォーラムでのサポート、スタンダードプランではメールサポート、プロプランでは優先メールサポートとチャットサポートをご利用いただけます。エンタープライズプランでは、専任のサポート担当者が対応いたします。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

