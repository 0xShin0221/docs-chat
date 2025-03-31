"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, File, ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useBetaSignupContext } from "./beta-signup-provider"

export default function PDFUploader() {
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const { toast } = useToast()
  const { openBetaSignup } = useBetaSignupContext()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    // ファイルがドロップされたらモーダルを表示
    openBetaSignup("file-drop")
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // ファイルが選択されたらモーダルを表示
    openBetaSignup("file-select")
  }

  const handleUpload = async () => {
    // アップロードボタンがクリックされたらモーダルを表示
    openBetaSignup("upload-button")
  }

  return (
    <section id="try-now" className="py-12 bg-primary/5 dark:bg-primary/10 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground mb-2">
            今すぐ体験
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            ファイルをアップロードして始めよう
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            PDF、Word、Excel、PowerPointなどのファイルをアップロードするだけで、AIとの対話をすぐに体験できます
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto">
          <Card className="border-2 shadow-lg overflow-hidden border-primary/20">
            <CardContent className="p-0">
              <div className="bg-primary/10 p-4 border-b">
                <h3 className="text-xl font-semibold text-center">ドキュメントをアップロード</h3>
              </div>
              <div className="p-6">
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                    isDragging
                      ? "border-primary bg-primary/5 scale-[0.98]"
                      : "border-muted-foreground/20 hover:border-primary/50"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="p-6 rounded-full bg-primary/10">
                      <Upload className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium">ファイルをドラッグ＆ドロップ</h3>
                      <p className="text-muted-foreground">または下のボタンからファイルを選択してください</p>
                    </div>
                    <label htmlFor="file-upload" className="w-full max-w-xs">
                      <div className="cursor-pointer rounded-md bg-primary/10 hover:bg-primary/20 transition-colors px-6 py-3 text-base font-medium text-primary hover:text-primary flex items-center justify-center">
                        <File className="mr-2 h-5 w-5" />
                        ファイルを選択
                      </div>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                        multiple
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="text-sm text-muted-foreground">PDF、Word、Excel、PowerPointファイル（最大100MB）</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">選択されたファイル (0)</h4>
                    <Button variant="ghost" size="sm" onClick={() => setFiles([])} disabled={isUploading}>
                      すべて削除
                    </Button>
                  </div>
                  <div className="space-y-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                    {/* ファイルリストはベータ版登録後に表示されるため、ここでは表示しない */}
                    <div className="flex items-center justify-center p-4 text-muted-foreground text-sm">
                      ファイルが選択されていません
                    </div>
                  </div>
                  <Button className="w-full mt-6 group bg-primary hover:bg-primary/90" onClick={handleUpload} size="lg">
                    <span className="text-lg">アップロードしてチャットを開始</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

