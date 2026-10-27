import { searchDocs, type SearchDoc } from "@/lib/search-docs";

const intents: { id: string; phrases: string[] }[] = [
  {
    id: "solution:online-stores",
    phrases: [
      "e-commerce",
      "ecommerce",
      "e commerce",
      "online store",
      "online shop",
      "webshop",
      "shopify",
      "woocommerce",
      "store",
      "shop",
      "sell",
      "selling",
      "clothes",
      "clothing",
      "apparel",
      "fashion",
      "boutique",
      "retail",
      "catalog",
      "catalogue",
      "loja",
      "roupa",
      "roupas",
      "moda",
      "vender",
      "comércio",
      "comercio",
      "tienda",
      "ropa",
      "comercio electrónico",
      "comercio electronico",
      "オンラインストア",
      "ネットショップ",
      "通販",
      "ECサイト",
      "イーコマース",
      "服",
      "衣服",
      "电商",
      "電子商務",
      "电子商务",
      "网店",
      "网上商店",
      "網上商店",
      "卖衣服",
      "賣衣服",
    ],
  },
  {
    id: "solution:crm",
    phrases: [
      "crm",
      "customer relationship",
      "leads",
      "pipeline",
      "gestão de clientes",
      "gestion de clientes",
      "顧客",
      "客户关系",
      "客户管理",
    ],
  },
  {
    id: "solution:automation",
    phrases: [
      "automation",
      "automate",
      "automação",
      "automatizacion",
      "automatización",
      "zapier",
      "make.com",
      "whatsapp",
      "chatbot",
      "appointment",
      "scheduling",
      "agenda",
      "自動化",
      "自动化",
    ],
  },
  {
    id: "solution:mobile",
    phrases: [
      "mobile app",
      "react native",
      "flutter",
      "aplicativo",
      "aplicación móvil",
      "aplicacion movil",
      "アプリ",
      "手机应用",
      "モバイル",
    ],
  },
  {
    id: "solution:blockchain",
    phrases: ["blockchain", "solidity", "ethereum", "solana", "ブロックチェーン", "区块链", "區塊鏈"],
  },
  {
    id: "solution:seo",
    phrases: [
      "seo",
      "search engine",
      "search console",
      "google search",
      "検索対策",
      "搜索引擎",
      "搜尋引擎",
    ],
  },
  {
    id: "solution:acquisition",
    phrases: ["google ads", "ads", "advertising", "aquisição", "adquisición", "集客", "广告", "廣告"],
  },
  {
    id: "solution:websites",
    phrases: [
      "website",
      "web site",
      "landing page",
      "wordpress",
      "sitio web",
      "site institucional",
      "ウェブサイト",
      "网站",
      "網站",
    ],
  },
];

const greetingLead =
  /^(?:hi|hello|hey|hiya|howdy|good\s+(?:morning|afternoon|evening)|hola|ol[aá]|oi|bom\s+dia|boa\s+(?:tarde|noite)|buenos\s+d[ií]as|buenas(?:\s+tardes|\s+noches)?|こんにちは|こんばんは|おはよう|你好|您好|嗨|哈喽)(?:\s+there)?[\s!,.。！？~-]*/iu;

const smallTalk =
  /^(?:how are you|how's it going|hows it going|what's up|whats up|thank you|thanks|como est[aá]s|como estas|como vai|tudo bem|お元気ですか|你好吗|你好嗎)[\s!?.。]*$/iu;

function hasPhrase(text: string, phrase: string): boolean {
  const haystack = text.toLowerCase().normalize("NFKC");
  const needle = phrase.toLowerCase().normalize("NFKC");
  if (/[^\u0000-\u007f]/.test(needle)) return haystack.includes(needle);
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:^|[^\\p{L}\\p{N}])${escaped}(?:$|[^\\p{L}\\p{N}])`, "iu").test(haystack);
}

export type ChatTurn =
  | { kind: "greeting" }
  | { kind: "answer"; doc: SearchDoc }
  | { kind: "unsure" };

function bestIntent(docs: SearchDoc[], query: string): { doc: SearchDoc; score: number } | null {
  let best: { doc: SearchDoc; score: number } | null = null;
  for (const intent of intents) {
    let score = 0;
    for (const phrase of intent.phrases) {
      if (!hasPhrase(query, phrase)) continue;
      score += phrase.includes(" ") ? 3 : 2;
    }
    if (score === 0) continue;
    const doc = docs.find((item) => item.id === intent.id);
    if (!doc) continue;
    if (!best || score > best.score) best = { doc, score };
  }
  return best;
}

export function planReply(docs: SearchDoc[], query: string): ChatTurn {
  const trimmed = query.trim();
  const rest = trimmed.replace(greetingLead, "").trim();
  const openedWithGreeting = rest.length !== trimmed.length;
  if ((openedWithGreeting && rest.length < 3) || smallTalk.test(trimmed)) {
    return { kind: "greeting" };
  }

  const asked = rest || trimmed;
  const named = docs.find((doc) => doc.title.trim().length > 2 && hasPhrase(asked, doc.title));
  if (named) return { kind: "answer", doc: named };

  const intent = bestIntent(docs, asked);
  if (intent && intent.score >= 2) return { kind: "answer", doc: intent.doc };

  const found = searchDocs(docs, asked, 1)[0];
  if (found) return { kind: "answer", doc: found };
  if (intent) return { kind: "answer", doc: intent.doc };
  return { kind: "unsure" };
}
