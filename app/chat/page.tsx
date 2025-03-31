import { Suspense } from "react"
import ChatInterface from "@/components/chat-interface"
import PDFViewer from "@/components/pdf-viewer"

export default function ChatPage() {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-8rem)] gap-4 p-4">
      <Suspense fallback={<div className="text-center py-10">PDFを読み込み中...</div>}>
        <div className="w-full md:w-1/2 h-full overflow-hidden flex flex-col">
          <PDFViewer />
        </div>
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">チャットを読み込み中...</div>}>
        <div className="w-full md:w-1/2 h-full overflow-hidden flex flex-col">
          <ChatInterface />
        </div>
      </Suspense>
    </div>
  )
}

