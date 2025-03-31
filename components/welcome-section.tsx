import { FileText, MessageSquare, Shield, Globe } from "lucide-react"

export default function WelcomeSection() {
  return (
    <section className="py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">PDF トーク</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              PDFファイルをアップロードして、AIとチャットで対話できるサービス
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 pt-8 md:pt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <FileText className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">PDF解析</h3>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              複数のPDFファイルを同時にアップロードして解析
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">AIチャット</h3>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              PDFの内容について日本語で自然に質問できる
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <Shield className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">プライバシー</h3>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              セッション終了後のデータ自動削除オプション
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <Globe className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">日本語最適化</h3>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">日本語文書の理解に特化した解析精度</p>
          </div>
        </div>
      </div>
    </section>
  )
}

