import { buildDigitalTwinSystemPrompt } from "@/lib/digital-twin-context";
import { NextRequest, NextResponse } from "next/server";

const MODEL = "openai/gpt-oss-120b:free";
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: NextRequest) {
  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenRouter API key is not configured." },
      { status: 500 }
    );
  }

  let body: { messages?: ChatMessage[] };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { messages } = body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Messages are required." }, { status: 400 });
  }

  const validMessages = messages
    .filter(
      (m): m is ChatMessage =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-20);

  if (validMessages.length === 0) {
    return NextResponse.json({ error: "No valid messages provided." }, { status: 400 });
  }

  try {
    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer":
          process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
        "X-Title": "Muhammad Abdelhadi - Digital Twin",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: buildDigitalTwinSystemPrompt() },
          ...validMessages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter error:", response.status, errorText);
      return NextResponse.json(
        { error: "Failed to get a response from the AI model." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content || typeof content !== "string") {
      return NextResponse.json(
        { error: "Received an empty response from the AI model." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: content });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
