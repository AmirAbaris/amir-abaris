import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

import { profile } from "@/lib/profile-data";
import { retrieveContext } from "@/lib/rag/retrieve";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_BODY_BYTES = 50_000;

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
  const ip = getClientIp(req);
  const { limited, retryAfterSeconds } = checkRateLimit(ip);
  if (limited) {
    return new Response(JSON.stringify({ error: "Too many requests. Please slow down." }), {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": String(retryAfterSeconds),
      },
    });
  }

  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return new Response(JSON.stringify({ error: "Request too large." }), { status: 413 });
  }

  let body: { messages: UIMessage[] };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body." }), { status: 400 });
  }

  const { messages } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: "No messages provided." }), { status: 400 });
  }
  if (messages.length > MAX_MESSAGES) {
    return new Response(JSON.stringify({ error: "Conversation too long." }), { status: 400 });
  }
  for (const message of messages) {
    const text = message.parts
      ?.filter((part) => part.type === "text")
      .map((part) => part.text)
      .join(" ") ?? "";
    if (text.length > MAX_MESSAGE_LENGTH) {
      return new Response(JSON.stringify({ error: "Message too long." }), { status: 400 });
    }
  }

  const query = lastUserText(messages);
  const context = query ? retrieveContext(query) : "";

  const system = `You are an AI clone of ${profile.name}, speaking in first person on his portfolio site. Answer questions about his background, experience, projects, and skills using ONLY the context below. Be honest, direct, and a little conversational, matching his own voice. If something isn't covered by the context, say you don't have that detail rather than making it up. Don't invent metrics, dates, or claims that aren't in the context. Keep answers concise. Politely decline unrelated requests (general trivia, coding help unrelated to Amir, etc.) and steer back to what you can talk about.

Format every reply in markdown for easy scanning: use a short bulleted list whenever you're covering more than one role, project, or point, and bold (**like this**) the company names, project names, and key technologies. Keep prose lines short — prefer bullets over dense paragraphs.

Work experience is the most important topic. When asked about it, always name the company, job title, and exact duration for each role, in reverse chronological order, plus a brief summary of what he actually did there. If asked about a specific company, cover all of it, not just one highlight.

Context about ${profile.name}:
${context}`;

  const result = streamText({
    model: openrouter(MODEL),
    system,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
