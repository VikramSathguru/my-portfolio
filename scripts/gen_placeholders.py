from pathlib import Path

projects = [
    ("crm", "#0F766E", "#134E4A", "CRM"),
    ("chatbot", "#0369A1", "#0C4A6E", "AI"),
    ("marketplace", "#1D4ED8", "#1E3A8A", "Market"),
    ("ecommerce", "#BE123C", "#9F1239", "Shop"),
    ("saas", "#0369A1", "#0C4A6E", "SaaS"),
    ("marketing", "#B45309", "#78350F", "Ads"),
    ("data", "#0F766E", "#115E59", "Data"),
    ("automation", "#1D4ED8", "#1E3A8A", "Auto"),
]

out = Path("public/portfolio")
out.mkdir(parents=True, exist_ok=True)

for slug, c1, c2, label in projects:
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="750" fill="url(#g)"/>
  <circle cx="980" cy="120" r="180" fill="rgba(255,255,255,0.08)"/>
  <circle cx="160" cy="620" r="220" fill="rgba(255,255,255,0.06)"/>
  <rect x="120" y="140" width="520" height="340" rx="24" fill="rgba(255,255,255,0.12)"/>
  <rect x="160" y="190" width="280" height="24" rx="12" fill="rgba(255,255,255,0.35)"/>
  <rect x="160" y="240" width="420" height="16" rx="8" fill="rgba(255,255,255,0.2)"/>
  <rect x="160" y="280" width="360" height="16" rx="8" fill="rgba(255,255,255,0.16)"/>
  <rect x="700" y="220" width="280" height="400" rx="36" fill="rgba(255,255,255,0.14)"/>
  <text x="160" y="560" fill="rgba(255,255,255,0.9)" font-family="Arial,sans-serif" font-size="48" font-weight="700">{label}</text>
</svg>
"""
    (out / f"{slug}.svg").write_text(svg, encoding="utf-8")

print("created", len(projects), "placeholders")
