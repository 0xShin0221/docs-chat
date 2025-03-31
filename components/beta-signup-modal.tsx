"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle2 } from "lucide-react"
import { DogIcon } from "./dog-icon"

export type BetaSignupModalProps = {
  isOpen: boolean
  onClose: () => void
  source?: string // どのボタンからモーダルが開かれたかを追跡
}

export function BetaSignupModal({ isOpen, onClose, source = "general" }: BetaSignupModalProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [useCase, setUseCase] = useState("")
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // バリデーション
    if (!email) {
      setError("メールアドレスを入力してください")
      return
    }

    if (!agreeToTerms) {
      setError("利用規約に同意してください")
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

      // 分析用にソース情報を記録（実際のアプリケーションでは）
      console.log(`Beta signup from: ${source}`)
    } catch (err) {
      setError("登録中にエラーが発生しました。後でもう一度お試しください。")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    // 送信完了後にモーダルを閉じる場合はステートをリセット
    if (isSubmitted) {
      setTimeout(() => {
        setEmail("")
        setName("")
        setCompany("")
        setUseCase("")
        setAgreeToTerms(false)
        setIsSubmitted(false)
        setError(null)
      }, 300)
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto modal-scrollbar">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <DogIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <DialogTitle className="text-center text-xl">DocsChat ベータ版に参加</DialogTitle>
              <DialogDescription className="text-center">
                ベータ版開発中です。事前登録いただくと、正式リリース前に無料でご利用いただけます。
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-2 overflow-y-auto modal-scrollbar">
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
                <Label htmlFor="company">会社名または事業所名（オプション）</Label>
                <Input
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="株式会社〇〇"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="useCase">利用想定</Label>
                <textarea
                  id="useCase"
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  placeholder="例：社内の契約書や提案書の分析に使用したいと考えています。特に複数の文書を横断的に検索し、関連情報を素早く抽出できる機能に期待しています。"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                />
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeToTerms}
                  onCheckedChange={(checked) => setAgreeToTerms(checked === true)}
                />
                <div className="space-y-1">
                  <Label htmlFor="terms" className="text-sm font-normal">
                    <span>
                      <Link
                        href="/terms"
                        target="_blank"
                        className="text-primary hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        利用規約
                      </Link>{" "}
                      と{" "}
                      <Link
                        href="/privacy"
                        target="_blank"
                        className="text-primary hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        プライバシーポリシー
                      </Link>
                      に同意します
                    </span>
                  </Label>
                </div>
              </div>

              {error && <div className="text-sm text-destructive">{error}</div>}

              <DialogFooter className="pt-2">
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      送信中...
                    </>
                  ) : (
                    "ベータ版に登録する"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle>登録完了しました！</DialogTitle>
            <DialogDescription>
              DocsChat
              ベータ版へのご登録ありがとうございます。ベータ版の準備が整いましたら、メールでお知らせいたします。
            </DialogDescription>
            <Button onClick={handleClose} className="mt-4">
              閉じる
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

