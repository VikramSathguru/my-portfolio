export type SearchDoc = {
  id: string;
  title: string;
  href: string;
  excerpt: string;
  text: string;
};

export function searchDocs(docs: SearchDoc[], query: string, limit = 5): SearchDoc[] {
  const terms = query
    .toLowerCase()
    .split(/[^\p{L}\p{N}+]+/u)
    .filter((term) => term.length > 1);
  if (!terms.length) return [];

  return docs
    .map((doc) => {
      const haystack = `${doc.title}\n${doc.excerpt}\n${doc.text}`.toLowerCase();
      const score = terms.reduce((total, term) => total + (haystack.includes(term) ? 1 : 0), 0);
      return { doc, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.doc);
}
