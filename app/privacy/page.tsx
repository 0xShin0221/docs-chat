import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "プライバシーポリシー | DocsChat",
  description: "DocsChatのプライバシーポリシーをご確認ください。",
}

export default function PrivacyPage() {
  return (
    <main className="container max-w-4xl py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">最終更新日: 2025年3月31日</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. はじめに</h2>
          <p>
            DocsChat（以下「当社」）は、ユーザーの個人情報の保護を重要と考えています。
            このプライバシーポリシー（以下「本ポリシー」）は、当社が提供するサービス（以下「本サービス」）における個人情報の取り扱いについて定めるものです。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. 収集する情報</h2>
          <p>当社は、以下の情報を収集することがあります：</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>アカウント情報</strong>：氏名、メールアドレス、会社名など、アカウント作成時に提供される情報
            </li>
            <li>
              <strong>利用情報</strong>：本サービスの利用状況、アクセスログ、IPアドレスなど
            </li>
            <li>
              <strong>アップロードされたコンテンツ</strong>：ユーザーがアップロードしたドキュメントやファイル
            </li>
            <li>
              <strong>支払い情報</strong>
              ：有料プラン利用時のクレジットカード情報など（当社は直接クレジットカード情報を保存せず、安全な決済サービスを利用します）
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. 情報の利用目的</h2>
          <p>収集した情報は、以下の目的で利用されます：</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>本サービスの提供・維持・改善</li>
            <li>ユーザーからの問い合わせへの対応</li>
            <li>新機能や更新情報のお知らせ</li>
            <li>サービス利用状況の分析</li>
            <li>不正利用の防止</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. 情報の共有</h2>
          <p>当社は、以下の場合を除き、ユーザーの個人情報を第三者と共有することはありません：</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>ユーザーの同意がある場合</li>
            <li>法律上の要請がある場合</li>
            <li>当社のサービス提供に必要なパートナー企業（データ処理や決済サービスなど）と共有する場合</li>
            <li>匿名化された統計データとして共有する場合</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. アップロードされたコンテンツの取り扱い</h2>
          <p>
            ユーザーがアップロードしたドキュメントやファイルは、本サービスの提供のためにのみ使用されます。
            当社は、ユーザーの明示的な同意なしに、これらのコンテンツをAIモデルの学習データとして使用することはありません。
          </p>
          <p className="mt-2">
            セッション終了後のデータ自動削除オプションを選択した場合、アップロードされたコンテンツはセッション終了時に自動的に削除されます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. セキュリティ</h2>
          <p>
            当社は、ユーザーの個人情報を保護するために適切なセキュリティ対策を講じています。
            ただし、インターネット上での通信は完全に安全ではなく、当社はデータの安全性を100%保証することはできません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Cookieの使用</h2>
          <p>
            当社は、ユーザー体験の向上やサービスの改善のために、Cookieやその他の追跡技術を使用することがあります。
            ユーザーはブラウザの設定でCookieを無効にすることができますが、一部の機能が正常に動作しなくなる可能性があります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. ユーザーの権利</h2>
          <p>ユーザーは、自身の個人情報に関して以下の権利を有します：</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>個人情報へのアクセス</li>
            <li>個人情報の訂正</li>
            <li>個人情報の削除</li>
            <li>個人情報の処理の制限</li>
            <li>データポータビリティ</li>
          </ul>
          <p className="mt-2">これらの権利を行使するには、当社の問い合わせフォームからご連絡ください。</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. 子どものプライバシー</h2>
          <p>
            本サービスは、13歳未満の子どもを対象としていません。
            当社は、13歳未満の子どもから意図的に個人情報を収集することはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. プライバシーポリシーの変更</h2>
          <p>
            当社は、必要に応じて本ポリシーを変更することがあります。
            変更があった場合は、本サービスのウェブサイト上で通知します。
            変更後も本サービスを継続して利用することにより、ユーザーは変更後のポリシーに同意したものとみなされます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. お問い合わせ</h2>
          <p>本ポリシーに関するご質問やご意見は、以下の連絡先までお寄せください：</p>
          <p className="mt-2">
            メールアドレス: privacy@docschat.example.com
            <br />
            住所: 〒100-0001 東京都千代田区千代田1-1-1
          </p>
        </section>
      </div>
    </main>
  )
}

