import { NextResponse } from "next/server";
import { catalogFor } from "@/lib/portfolio-context";
import { routing, type AppLocale } from "@/i18n/routing";
import type { SearchDoc } from "@/lib/search-docs";

type Turn = { role: "user" | "assistant"; content: string };

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 12;
const hits = new Map<string, number[]>();

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "local";
}

function catalogBlock(docs: SearchDoc[]): string {
  return docs
    .map((doc) => {
      const body = doc.text.replace(/\s+/g, " ").slice(0, 700);
      return `Title: ${doc.title}\nLink: ${doc.href}\nSummary: ${doc.excerpt}\nDetail: ${body}`;
    })
    .join("\n\n");
}

function parseReply(raw: string): { message: string; href: string | null } | null {
  const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
  try {
    const parsed = JSON.parse(cleaned) as { message?: unknown; href?: unknown };
    if (typeof parsed.message !== "string" || !parsed.message.trim()) return null;
    const href = typeof parsed.href === "string" && parsed.href.trim() ? parsed.href.trim() : null;
    return { message: parsed.message.trim(), href };
  } catch {
    return null;
  }
}

function allowedHref(docs: SearchDoc[], href: string | null): string | null {
  if (!href) return null;
  const path = href.replace(/^https?:\/\/[^/]+/i, "").replace(/\/$/, "") || "/";
  const match = docs.find((doc) => doc.href.replace(/\/$/, "") === path);
  return match?.href ?? null;
}

export async function POST(request: Request) {
  const baseUrl = process.env.LLM_BASE_URL;
  const apiKey = process.env.LLM_API_KEY;
  const model = process.env.LLM_MODEL;
  if (!baseUrl || !apiKey || !model) {
    return NextResponse.json({ error: "missing_key" }, { status: 503 });
  }

  if (limited(clientIp(request))) {
    return NextResponse.json({ error: "limited" }, { status: 429 });
  }

  let body: { message?: unknown; locale?: unknown; history?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message || message.length > 1000) {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const locale = routing.locales.includes(body.locale as AppLocale)
    ? (body.locale as AppLocale)
    : "en";

  const history: Turn[] = Array.isArray(body.history)
    ? body.history
        .filter(
          (turn): turn is Turn =>
            !!turn &&
            typeof turn === "object" &&
            (turn.role === "user" || turn.role === "assistant") &&
            typeof turn.content === "string" &&
            turn.content.trim().length > 0,
        )
        .slice(-6)
        .map((turn) => ({ role: turn.role, content: turn.content.trim().slice(0, 1000) }))
    : [];

  const docs = await catalogFor(locale);
  const system = [
    "You are the portfolio assistant for Vikram Sathguru, a senior full-stack developer.",
    "Answer the visitor's actual question. If they ask your name, say you are the assistant for Vikram Sathguru and ask what they need. Do not pretend the question is about a service.",
    "Use only the catalog below. Do not invent clients, prices, or results.",
    `Reply in this language: ${locale}.`,
    'Return JSON only, with this shape: {"message":"one to three sentences","href":"/path-from-catalog-or-null"}',
    "Put a catalog Link in href only when a page answers the question. Use null for greetings, your name, thanks, and anything the catalog does not cover.",
    "Do not write the URL inside message. The site shows the link separately.",
    "",
    "Catalog:",
    catalogBlock(docs),
  ].join("\n");

  let completion: Response;
  try {
    completion = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.3,
        response_format: { type: "json_object" },
        messages: [{ role: "system", content: system }, ...history, { role: "user", content: message }],
      }),
    });
  } catch {
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }

  if (!completion.ok) {
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }

  const payload = (await completion.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = payload.choices?.[0]?.message?.content ?? "";
  const reply = parseReply(content);
  if (!reply) {
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }

  return NextResponse.json({
    message: reply.message,
    href: allowedHref(docs, reply.href),
  });
}
