"use client";

import { profile } from "@/data/resume";
import { useEffect, useRef, useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTIONS = [
  "What's your experience with Angular?",
  "Tell me about your healthcare work at Bypa-ss",
  "Walk me through your career journey",
];

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: `Hi — I'm Muhammad's Digital Twin. Ask me anything about my career, skills, or experience.`,
};

export function DigitalTwinChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    const userMessage: Message = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const apiMessages =
        nextMessages[0]?.role === "assistant" &&
        nextMessages[0]?.content === INITIAL_MESSAGE.content
          ? nextMessages.slice(1)
          : nextMessages;

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <>
      {/* Floating trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close Digital Twin chat" : "Open Digital Twin chat"}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border transition-all duration-300 ${
          open
            ? "border-accent/50 bg-surface-elevated px-4 py-3 shadow-[0_0_40px_rgba(0,229,255,0.15)]"
            : "border-accent/30 bg-accent px-5 py-3.5 shadow-[0_0_30px_rgba(0,229,255,0.25)] hover:bg-accent-dim hover:shadow-[0_0_50px_rgba(0,229,255,0.35)]"
        }`}
      >
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-xl font-display text-xs font-bold ${
            open ? "border border-accent/30 bg-accent/10 text-accent" : "bg-ink text-accent"
          }`}
        >
          {open ? "✕" : initials}
        </span>
        {!open && (
          <span className="pr-1 font-display text-sm font-semibold text-ink">
            Digital Twin
          </span>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 flex w-[calc(100vw-3rem)] max-w-md flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.5)] transition-all duration-300 sm:w-[420px] ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
        style={{ height: "min(600px, calc(100vh - 8rem))" }}
      >
        {/* Header */}
        <div className="relative border-b border-border bg-surface-elevated px-5 py-4">
          <div className="glow-orb absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10" />
          <div className="relative flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 font-display text-xs font-bold text-accent">
              {initials}
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-frost">
                Digital Twin
              </p>
              <p className="flex items-center gap-1.5 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(0,229,255,0.8)]" />
                Powered by AI · Career assistant
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "rounded-br-md bg-accent text-ink"
                    : "rounded-bl-md border border-border bg-surface-elevated text-frost/90"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-border bg-surface-elevated px-4 py-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:300ms]" />
              </div>
            </div>
          )}

          {error && (
            <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
              {error}
            </p>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && !loading && (
          <div className="flex flex-wrap gap-2 border-t border-border px-4 py-3">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => sendMessage(s)}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-border bg-surface-elevated p-4"
        >
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about my career..."
              rows={1}
              disabled={loading}
              className="max-h-24 min-h-[44px] flex-1 resize-none rounded-xl border border-border bg-ink px-4 py-3 text-sm text-frost placeholder:text-muted/60 focus:border-accent/50 focus:outline-none disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-ink transition-all hover:bg-accent-dim disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send message"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="mt-2 text-center text-[10px] text-muted/50">
            AI responses based on Muhammad&apos;s resume · May contain inaccuracies
          </p>
        </form>
      </div>
    </>
  );
}
