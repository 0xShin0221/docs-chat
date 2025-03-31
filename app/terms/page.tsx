import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "利用規約 | DocsChat",
  description: "DocsChatの利用規約をご確認ください。",
}

export default function TermsPage() {
  return (
    <main className="container max-w-4xl py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8">利用規約</h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-muted-foreground mb-6">最終更新日: 2025年3月31日</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. はじめに</h2>
          <p>
            この利用規約（以下「本規約」）は、DocsChat（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。
            ユーザーの皆様（以下「ユーザー」）には、本規約に同意いただいた上で、本サービスをご利用いただきます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. サービスの内容</h2>
          <p>
            本サービスは、PDFやWord、Excel、PowerPointなどの文書をAIが分析し、対話形式で情報を引き出すことができるサービスです。
            当社は、本サービスの品質向上のため、予告なくサービス内容を変更することがあります。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. アカウント</h2>
          <p>
            本サービスの一部機能を利用するためには、アカウントの作成が必要です。
            ユーザーは、正確かつ完全な情報を提供し、情報が変更された場合は速やかに更新する責任を負います。
            アカウントの管理はユーザー自身の責任で行い、パスワードの管理や不正アクセスの防止に努めてください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. 利用料金</h2>
          <p>
            本サービスには無料プランと有料プランがあります。有料プランを利用する場合は、当社が定める方法で料金をお支払いいただきます。
            料金の詳細や支払い方法については、本サービスのウェブサイト上で確認できます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. 禁止事項</h2>
          <p>ユーザーは、以下の行為を行ってはなりません：</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当社のサーバーやネットワークの機能を破壊したり、妨害したりする行為</li>
            <li>本サービスの運営を妨害するおそれのある行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>他のユーザーに成りすます行為</li>
            <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. 知的財産権</h2>
          <p>
            本サービスに関連する知的財産権は、すべて当社または当社にライセンスを許諾している者に帰属します。
            本規約に基づく本サービスの利用許諾は、本サービスに関する当社または当社にライセンスを許諾している者の知的財産権の使用許諾を意味するものではありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. 免責事項</h2>
          <p>
            当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。
          </p>
          <p className="mt-2">
            当社は、本サービスによってユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、当社とユーザーとの間の契約（本規約を含みます）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. サービス内容の変更・停止</h2>
          <p>
            当社は、ユーザーに通知することなく、本サービスの内容を変更したり、本サービスの提供を停止または中止したりすることができるものとします。
            当社は、これによってユーザーに生じた損害について一切の責任を負いません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. 利用規約の変更</h2>
          <p>
            当社は、必要と判断した場合には、ユーザーに通知することなく、いつでも本規約を変更することができるものとします。
            変更後の利用規約は、当社ウェブサイト上に表示した時点より効力を生じるものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. 連絡・通知</h2>
          <p>
            本サービスに関する問い合わせは、当社ウェブサイト上の問い合わせフォームから行うことができます。
            当社からの通知は、当社ウェブサイト上での掲示や、ユーザーが登録したメールアドレス宛への電子メールの送信によって行われます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. 準拠法・管轄裁判所</h2>
          <p>
            本規約の解釈にあたっては、日本法を準拠法とします。
            本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </section>
      </div>
    </main>
  )
}

