"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link as LocaleLink } from "@/i18n/navigation";
import { usePortfolioIndex } from "@/components/portfolio-index";
import { planReply } from "@/lib/chat-intents";
import type { SearchDoc } from "@/lib/search-docs";

type Message = { role: "user" | "assistant"; content: string; link?: SearchDoc };

type Labels = {
  label: string;
  title: string;
  close: string;
  placeholder: string;
  send: string;
  intro: string;
};

const ASKED_KEY = "vikram-chat-asked";

export function ChatWidget({ labels }: { labels: Labels }) {
  const t = useTranslations("Chat");
  const locale = useLocale();
  const docs = usePortfolioIndex();
  const titleId = useId();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const greeting = t("greeting");

  useEffect(() => {
    setMessages([{ role: "assistant", content: greeting }]);
    try {
      if (sessionStorage.getItem(ASKED_KEY) !== "1") setOpen(true);
    } catch {
      setOpen(true);
    }
  }, [greeting]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight });
  }, [messages, open]);

  function close() {
    try {
      sessionStorage.setItem(ASKED_KEY, "1");
    } catch {
      /* private browsing */
    }
    setOpen(false);
  }

  function localReply(content: string): Message {
    const reply = planReply(docs, content);
    if (reply.kind === "greeting") return { role: "assistant", content: t("greeting") };
    if (reply.kind === "answer") {
      return { role: "assistant", content: `${t("answer")} ${reply.doc.excerpt}`, link: reply.doc };
    }
    return { role: "assistant", content: t("unsure") };
  }

  async function send(text: string) {
    const content = text.trim();
    if (!content || pending) return;
    const history = messages.slice(-6).map((message) => ({
      role: message.role,
      content: message.content,
    }));
    setInput("");
    setPending(true);
    setMessages((current) => [...current, { role: "user", content }]);
    try {
      const response = await fetch("/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale, message: content, history }),
      });
      if (response.status === 429) {
        setMessages((current) => [...current, { role: "assistant", content: t("limited") }]);
        return;
      }
      if (response.status === 503) {
        setMessages((current) => [...current, { role: "assistant", content: t("missingKey") }]);
        return;
      }
      if (!response.ok) {
        setMessages((current) => [...current, { role: "assistant", content: t("error") }]);
        return;
      }
      const data = (await response.json()) as { message?: string; href?: string | null };
      const textReply = data.message?.trim();
      if (!textReply) throw new Error("chat");
      const link = data.href ? docs.find((doc) => doc.href === data.href) : undefined;
      setMessages((current) => [...current, { role: "assistant", content: textReply, link }]);
    } catch {
      setMessages((current) => [...current, localReply(content)]);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="fixed right-4 bottom-4 z-40">
      {open ? (
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="glass-panel mb-3 flex h-[min(32rem,70vh)] w-[min(24rem,calc(100vw-2rem))] flex-col"
        >
          <header className="flex items-center justify-between gap-3 border-b border-[var(--border)] px-4 py-3">
            <h2 id={titleId} className="text-sm font-bold text-[var(--foreground)]">
              {labels.title}
            </h2>
            <button type="button" className="btn-ghost h-9 rounded-full px-3 text-sm font-semibold" onClick={close}>
              {labels.close}
            </button>
          </header>
          <div ref={threadRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-sm">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === "user" ? "text-right" : ""}>
                {message.role === "user" ? (
                  <p className="inline-block rounded-2xl bg-[var(--accent)] px-3 py-2 text-left text-white">{message.content}</p>
                ) : (
                  <div className="rounded-2xl bg-[var(--background)] px-3 py-2 text-[var(--foreground)]">
                    {message.content ? <p>{message.content}</p> : null}
                    {message.link ? (
                      <LookAt
                        link={message.link}
                        template={t("lookAt", { title: "%%TITLE%%" })}
                        onNavigate={close}
                      />
                    ) : null}
                  </div>
                )}
              </div>
            ))}
            {pending ? <p className="text-[var(--muted)]">{t("thinking")}</p> : null}
          </div>
          <form
            className="flex gap-2 border-t border-[var(--border)] p-3"
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
          >
            <label className="sr-only" htmlFor="chat-input">
              {labels.placeholder}
            </label>
            <textarea
              id="chat-input"
              ref={inputRef}
              rows={2}
              value={input}
              placeholder={labels.placeholder}
              className="min-h-11 flex-1 resize-none rounded-2xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)]"
              onChange={(event) => setInput(event.target.value)}
              disabled={pending}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  send(input);
                }
                if (event.key === "Escape") close();
              }}
            />
            <button type="submit" className="btn-primary self-end h-11 rounded-full px-4 text-sm font-semibold" disabled={pending || !input.trim()}>
              {labels.send}
            </button>
          </form>
        </section>
      ) : null}
      <button
        type="button"
        className="btn-primary h-12 rounded-full px-5 text-sm font-semibold shadow-lg"
        aria-expanded={open}
        onClick={() => (open ? close() : setOpen(true))}
      >
        {labels.label}
      </button>
    </div>
  );
}

function LookAt({
  link,
  template,
  onNavigate,
}: {
  link: SearchDoc;
  template: string;
  onNavigate: () => void;
}) {
  const [before, after] = template.split("%%TITLE%%");
  return (
    <p className={before || after ? "mt-2" : undefined}>
      {before}
      <LocaleLink href={link.href} className="font-semibold text-[var(--accent)]" onClick={onNavigate}>
        {link.title}
      </LocaleLink>
      {after}
    </p>
  );
}
