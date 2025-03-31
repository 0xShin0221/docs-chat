import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Edge Runtimeを使用
export const runtime = "edge";

export async function POST(req: Request) {
  const { messages, pdfContent } = await req.json();

  // システムメッセージを追加して、PDFの内容についてのコンテキストを提供
  const fullMessages = [
    {
      role: "system",
      content: `あなたはPDFの内容について質問に答えるAIアシスタントです。
      以下のPDFの内容に基づいて質問に答えてください。
      
      日本語で丁寧に、かつ簡潔に回答してください。
      PDFの内容に含まれていない情報については、「その情報はPDF内に見つかりませんでした」と正直に答えてください。`,
    },
    ...messages,
  ];

  // PDFの内容がある場合、最初のユーザーメッセージにPDFを添付
  if (pdfContent) {
    // PDFの内容をエンコード（実際の実装では、Bufferオブジェクトが必要）
    const pdfBuffer = Buffer.from(pdfContent, "base64");

    // ユーザーメッセージを探す
    const userMessageIndex = fullMessages.findIndex(
      (msg) => msg.role === "user"
    );

    if (userMessageIndex !== -1) {
      // ユーザーメッセージを複合型に変換
      const userMessage = fullMessages[userMessageIndex];
      fullMessages[userMessageIndex] = {
        role: "user",
        content: [
          {
            type: "text",
            text:
              typeof userMessage.content === "string"
                ? userMessage.content
                : "",
          },
          {
            type: "file",
            data: pdfBuffer,
            mimeType: "application/pdf",
          },
        ],
      };
    }
  }

  // streamTextを使用してテキスト生成をストリーミング
  const result = await streamText({
    model: openai("gpt-4o"),
    messages: fullMessages,
  });

  return new Response(result.toReadableStream(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
