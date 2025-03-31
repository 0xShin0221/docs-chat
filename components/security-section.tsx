import { Card, CardContent } from "@/components/ui/card"
import { Shield, Server, Lock, FileCheck, UserCheck, Globe, Database, CheckCircle } from "lucide-react"
import { DogIcon } from "./dog-icon"

export default function SecuritySection() {
  return (
    <section id="security" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            安心のセキュリティ
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            企業利用のためのセキュリティ対策
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            企業のPDFドキュメント活用をセキュアに実現します
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-primary/20 overflow-hidden">
            <div className="bg-primary/10 p-4 border-b flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">基本セキュリティ機能（標準搭載）</h3>
            </div>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-lg">1. データの完全な内部処理</h4>
                  </div>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>
                      <strong>外部サーバーへのデータ送信なし</strong>
                      ：アップロードされたPDFはお客様のブラウザ内で処理され、当社のサーバーにも保存されません
                    </li>
                    <li>
                      <strong>セッション終了時の自動データ消去</strong>
                      ：ブラウザを閉じると同時に、すべての処理データは完全に消去されます
                    </li>
                    <li>
                      <strong>標準的な暗号化通信</strong>：HTTPS/TLSによる安全な通信経路を確保
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-lg">2. AIモデルの学習対象外</h4>
                  </div>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>
                      <strong>お客様データの再学習への不使用</strong>
                      ：アップロードされたPDFや質問内容はAIモデルの再学習に一切使用されません
                    </li>
                    <li>
                      <strong>プライバシー優先ポリシー</strong>
                      ：質問履歴やチャットログなどのインタラクションデータも収集・保存しません
                    </li>
                    <li>
                      <strong>透明性のあるデータポリシー</strong>：明確なプライバシーポリシーを公開し遵守します
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-lg">3. 基本的なアクセス制御</h4>
                  </div>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>
                      <strong>ユーザーアカウント管理</strong>：基本的なユーザー認証とパスワード保護
                    </li>
                    <li>
                      <strong>セッション管理</strong>：安全なセッション処理と適切なタイムアウト設定
                    </li>
                    <li>
                      <strong>安全なAPI接続</strong>：APIキー管理とセキュアな認証
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-lg">4. 法令への基本対応</h4>
                  </div>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>
                      <strong>GDPR・個人情報保護法準拠</strong>：日本と国際的なデータ保護法規制に対応
                    </li>
                    <li>
                      <strong>透明性のある利用規約</strong>：明確なデータ取り扱いポリシーを明示
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6 justify-center">
                <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                  <Lock className="h-4 w-4" />
                  <span>ブラウザ内処理</span>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                  <Lock className="h-4 w-4" />
                  <span>データ非保存</span>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                  <Lock className="h-4 w-4" />
                  <span>HTTPS/TLS暗号化</span>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                  <Lock className="h-4 w-4" />
                  <span>再学習対象外</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 overflow-hidden">
            <div className="bg-primary/10 p-4 border-b flex items-center gap-3">
              <Database className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">エンタープライズ向け高度セキュリティオプション（追加費用）</h3>
            </div>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-lg">1. 高度なデプロイメントオプション</h4>
                  </div>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>
                      <strong>専用オンプレミスデプロイメント</strong>
                      ：自社サーバー内での完全隔離環境での運用（追加費用）
                    </li>
                    <li>
                      <strong>VPN/プライベートネットワーク対応</strong>
                      ：社内ネットワーク内でのみアクセス可能な設定（追加費用）
                    </li>
                    <li>
                      <strong>プライベートクラウド導入</strong>：専用クラウド環境での運用（追加費用）
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-lg">2. 高度なコンプライアンス対応</h4>
                  </div>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>
                      <strong>SOC 2 Type II認証対応</strong>：業界標準のセキュリティ監査への対応（追加費用）
                    </li>
                    <li>
                      <strong>定期的な脆弱性テスト</strong>：外部セキュリティ専門家による定期的な検証（追加費用）
                    </li>
                    <li>
                      <strong>コンプライアンス証明書の発行</strong>：企業のセキュリティ監査に必要な証明書（追加費用）
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold text-lg">3. 企業向け高度機能</h4>
                  </div>
                  <ul className="space-y-2 pl-7 list-disc">
                    <li>
                      <strong>詳細なアクセス制御</strong>：役割ベースのきめ細かいアクセス権限設定（追加費用）
                    </li>
                    <li>
                      <strong>監査ログ機能</strong>：詳細な監査証跡の記録と管理（追加費用）
                    </li>
                    <li>
                      <strong>DLP（データ漏洩防止）統合</strong>：既存のDLPソリューションとの連携（追加費用）
                    </li>
                    <li>
                      <strong>二要素認証（2FA）</strong>：多要素認証によるセキュリティ強化（追加費用）
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6 justify-center">
                <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                  <Lock className="h-4 w-4 font-bold" />
                  <span>SOC 2対応</span>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                  <Lock className="h-4 w-4 font-bold" />
                  <span>オンプレミス対応</span>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                  <Lock className="h-4 w-4 font-bold" />
                  <span>VPN対応</span>
                </div>
                <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                  <Lock className="h-4 w-4 font-bold" />
                  <span>監査ログ対応</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center p-6 rounded-xl bg-muted">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <DogIcon className="h-6 w-6 text-primary" />
                <h4 className="font-semibold">カスタムセキュリティソリューション</h4>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                お客様固有のセキュリティ要件に応じたカスタマイズも可能です。詳細については法人営業までお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

