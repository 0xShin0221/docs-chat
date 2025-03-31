"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle2 } from "lucide-react"

export default function ContactPageClient() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // バリデーション
    if (!email || !message) {
      setError("メールアドレスとメッセージは必須項目です")
      return
    }

    setError(null)
    setIsSubmitting(true)

    try {
      // 実際のアプリケーションではここでAPIを呼び出す
      // この例ではモックの遅延を追加
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // 送信成功
      setIsSubmitted(true)
    } catch (err) {
      setError("送信中にエラーが発生しました。後でもう一度お試しください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="container max-w-4xl py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">お問い合わせ</h1>

      <Card className="w-full max-w-2xl mx-auto">
        {!isSubmitted ? (
          <>
            <CardHeader>
              <CardTitle>お問い合わせフォーム</CardTitle>
              <CardDescription>DocsChatに関するご質問やご意見をお寄せください。</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">お名前（任意）</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="山田 太郎" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    メールアドレス<span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@company.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">件名（任意）</Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="お問い合わせの件名"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    メッセージ<span className="text-destructive">*</span>
                  </Label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="お問い合わせ内容をご記入ください"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    required
                  />
                </div>

                {error && <div className="text-sm text-destructive">{error}</div>}
              </CardContent>

              <CardFooter>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      送信中...
                    </>
                  ) : (
                    "送信する"
                  )}
                </Button>
              </CardFooter>
            </form>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 px-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>送信完了しました！</CardTitle>
            <CardDescription className="max-w-md">
              お問い合わせありがとうございます。内容を確認の上、通常2営業日以内にご返信いたします。
            </CardDescription>
            <Button onClick={() => (window.location.href = "/")} className="mt-4">
              トップページに戻る
            </Button>
          </div>
        )}
      </Card>
    </main>
  )
}

