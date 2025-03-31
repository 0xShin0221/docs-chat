import { OpenAIStream, StreamingTextResponse } from "ai"
import OpenAI from "openai"

// OpenAI APIクライアントの初期化
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const runtime = "edge"

export async function POST(req: Request) {
  const { messages, pdfContent } = await req.json()

  // システムメッセージを追加して、PDFの内容についてのコンテキストを提供
  const systemMessage = {
    role: "system",
    content: `あなたはPDFの内容について質問に答えるAIアシスタントです。
    以下のPDFの内容に基づいて質問に答えてください。
    PDFの内容: ${pdfContent || "（PDFの内容はまだ処理されていません）"}
    
    日本語で丁寧に、かつ簡潔に回答してください。
    PDFの内容に含まれていない情報については、「その情報はPDF内に見つかりませんでした」と正直に答えてください。`,
  }

  // OpenAI APIにリクエストを送信
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [systemMessage, ...messages],
    stream: true,
  })

  // レスポンスをストリーミング
  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}

