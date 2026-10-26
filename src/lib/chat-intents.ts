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
      "loja",
      "comércio",
      "comercio",
      "tienda",
      "comercio electrónico",
      "comercio electronico",
      "オンラインストア",
      "ネットショップ",
      "通販",
      "ECサイト",
      "イーコマース",
      "电商",
      "電子商務",
      "电子商务",
      "网店",
      "网上商店",
      "網上商店",
    ],
  },
  {
    id: "solution:crm",
    phrases: ["crm", "customer relationship", "gestão de clientes", "gestion de clientes", "顧客", "客户关系", "客户管理"],
  },
  {
    id: "solution:automation",
    phrases: ["automation", "automação", "automatizacion", "automatización", "zapier", "make.com", "自動化", "自动化"],
  },
  {
    id: "solution:mobile",
    phrases: ["mobile app", "aplicativo", "aplicación móvil", "aplicacion movil", "アプリ", "手机应用", "モバイル"],
  },
  {
    id: "solution:blockchain",
    phrases: ["blockchain", "solidity", "ethereum", "solana", "ブロックチェーン", "区块链", "區塊鏈"],
  },
  {
    id: "solution:seo",
    phrases: ["seo", "search engine", "検索対策", "搜索引擎", "搜尋引擎"],
  },
  {
    id: "solution:acquisition",
    phrases: ["google ads", "ads", "aquisição", "adquisición", "集客", "广告", "廣告"],
  },
  {
    id: "solution:websites",
    phrases: ["website", "web site", "landing page", "sitio web", "site institucional", "ウェブサイト", "网站", "網站"],
  },
];

function hasPhrase(text: string, phrase: string): boolean {
  const haystack = text.toLowerCase().normalize("NFKC");
  const needle = phrase.toLowerCase().normalize("NFKC");
  if (/[^\u0000-\u007f]/.test(needle)) return haystack.includes(needle);
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:^|[^\\p{L}\\p{N}])${escaped}(?:$|[^\\p{L}\\p{N}])`, "iu").test(haystack);
}

export function suggestPage(docs: SearchDoc[], query: string): SearchDoc | null {
  const named = docs.find((doc) => doc.title.trim().length > 2 && hasPhrase(query, doc.title));
  if (named) return named;

  for (const intent of intents) {
    if (!intent.phrases.some((phrase) => hasPhrase(query, phrase))) continue;
    const match = docs.find((doc) => doc.id === intent.id);
    if (match) return match;
  }

  return searchDocs(docs, query, 1)[0] ?? null;
}
