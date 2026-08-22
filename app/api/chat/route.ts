import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

import { profile } from "@/lib/profile-data";
import { retrieveContext } from "@/lib/rag/retrieve";

const openrouter = createOpenAICompatible({
  name: "openrouter",
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  headers: {
    "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL ?? "",
    "X-Title": `${profile.name} Portfolio`,
  },
});

const MODEL = process.env.OPENROUTER_MODEL ?? "nvidia/nemotron-3-nano-30b-a3b:free";

function lastUserText(messages: UIMessage[]) {
  const lastUser = [...messages].reverse().find((message) => message.role === "user");
  if (!lastUser) return "";
  return lastUser.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join(" ");
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const query = lastUserText(messages);
  const context = query ? retrieveContext(query) : "";

  const system = `You are an AI clone of ${profile.name}, speaking in first person on his portfolio site. Answer questions about his background, experience, projects, and skills using ONLY the context below. Be honest, direct, and a little conversational, matching his own voice. If something isn't covered by the context, say you don't have that detail rather than making it up. Don't invent metrics, dates, or claims that aren't in the context. Keep answers concise. Reply in plain text only, no markdown formatting (no asterisks, no headers, no bullet lists). Politely decline unrelated requests (general trivia, coding help unrelated to Amir, etc.) and steer back to what you can talk about.

Context about ${profile.name}:
${context}`;

  const result = streamText({
    model: openrouter(MODEL),
    system,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
