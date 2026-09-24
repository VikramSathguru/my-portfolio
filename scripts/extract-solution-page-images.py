"""Crop hero + part visuals from reference/page mockups (skip similar-project)."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
REF = ROOT / "reference" / "page"
OUT = ROOT / "public" / "images" / "solutions" / "pages"
PREVIEW = REF / "_crops"

FILES = {
    "websites": "webdevelopment.png",
    "online-stores": "online store.png",
    "crm": "CRM.png",
    "acquisition": "customer.png",
    "automation": "Automation.png",
    "mobile": "Mobile development.png",
    "blockchain": "Blockchain.png",
    "seo": "SEO and Analytics.png",
}

# Page visual order after hero+similar: part ids matching solutions.ts content.
# Similar-project panel is always index 1 in detected panels (skipped).
PART_ORDER: dict[str, list[str]] = {
    "websites": ["design", "mobile", "structure"],
    # Visual order on the reference page (after hero + similar).
    "online-stores": [
        "design",
        "payments",
        "email",
        "coupons",
        "social",
        "logistics",
        "seo",
    ],
    "crm": ["record", "pipeline", "operators"],
    "acquisition": ["offer", "channels", "capture"],
    "automation": ["orders", "messages", "support"],
    "mobile": ["product", "shared", "return"],
    "blockchain": ["record", "experience"],
    "seo": ["pages", "analytics", "health"],
}


def find_panels(
    path: Path,
    min_area: int = 12000,
    min_h: int = 90,
    min_w: int = 160,
) -> tuple[Image.Image, list[tuple[int, int, int, int, int, float]]]:
    im = Image.open(path).convert("RGB")
    arr = np.asarray(im)
    h, w, _ = arr.shape
    gray = arr.mean(axis=2)
    mask = gray < 242
    step = 2
    m = mask[::step, ::step]
    hh, ww = m.shape
    visited = np.zeros((h, w), dtype=bool)

    def flood(y: int, x: int) -> list[tuple[int, int]]:
        stack = [(y, x)]
        cells: list[tuple[int, int]] = []
        while stack:
            cy, cx = stack.pop()
            if cy < 0 or cx < 0 or cy >= hh or cx >= ww:
                continue
            if visited[cy * step, cx * step] or not m[cy, cx]:
                continue
            visited[cy * step, cx * step] = True
            cells.append((cy, cx))
            stack.extend([(cy - 1, cx), (cy + 1, cx), (cy, cx - 1), (cy, cx + 1)])
        return cells

    panels: list[tuple[int, int, int, int, int, float]] = []
    for y in range(0, hh, 6):
        for x in range(0, ww, 6):
            if not m[y, x] or visited[y * step, x * step]:
                continue
            cells = flood(y, x)
            if len(cells) < 250:
                continue
            ys = [c[0] for c in cells]
            xs = [c[1] for c in cells]
            y0, y1 = min(ys) * step, (max(ys) + 1) * step
            x0, x1 = min(xs) * step, (max(xs) + 1) * step
            bw, bh = x1 - x0, y1 - y0
            area = bw * bh
            if area < min_area or bh < min_h or bw < min_w:
                continue
            fill = len(cells) * step * step / area
            if fill < 0.2:
                continue
            ar = bw / bh
            if ar < 0.55 or ar > 3.6:
                continue
            if bw > w * 0.78:
                continue
            # Skip tall chrome / icon clusters that aren't photo panels.
            if bh > h * 0.28 and ar < 0.9:
                continue
            panels.append((y0, x0, y1, x1, area, fill))

    panels.sort(key=lambda p: -p[4])
    kept: list[tuple[int, int, int, int, int, float]] = []
    for p in panels:
        y0, x0, y1, x1, area, fill = p
        ok = True
        for k in kept:
            ky0, kx0, ky1, kx1 = k[:4]
            iy0, ix0 = max(y0, ky0), max(x0, kx0)
            iy1, ix1 = min(y1, ky1), min(x1, kx1)
            if iy1 > iy0 and ix1 > ix0:
                inter = (iy1 - iy0) * (ix1 - ix0)
                if inter / min(area, (ky1 - ky0) * (kx1 - kx0)) > 0.3:
                    ok = False
                    break
        if ok:
            kept.append(p)
    kept.sort(key=lambda p: (p[0], p[1]))
    return im, kept


def crop_panel(im: Image.Image, box: tuple[int, int, int, int], pad: int = 2) -> Image.Image:
    y0, x0, y1, x1 = box
    return im.crop(
        (
            max(0, x0 - pad),
            max(0, y0 - pad),
            min(im.width, x1 + pad),
            min(im.height, y1 + pad),
        )
    )


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    PREVIEW.mkdir(parents=True, exist_ok=True)

    for slug, fname in FILES.items():
        path = REF / fname
        im, panels = find_panels(path)
        expected_parts = PART_ORDER[slug]
        # Need: hero + similar + N parts
        needed = 2 + len(expected_parts)
        print(f"\n=== {slug} panels={len(panels)} need>={needed} ===")
        for i, p in enumerate(panels):
            print(f"  {i}: y={p[0]}-{p[2]} x={p[1]}-{p[3]} {p[3]-p[1]}x{p[2]-p[0]} fill={p[5]:.2f}")

        if len(panels) < needed:
            raise SystemExit(f"{slug}: expected at least {needed} panels, got {len(panels)}")

        # Drop similar-project (index 1). Keep hero + following parts.
        usable = [panels[0], *panels[2 : 2 + len(expected_parts)]]
        if len(usable) != 1 + len(expected_parts):
            raise SystemExit(f"{slug}: usable panel count mismatch")

        dest = OUT / slug
        dest.mkdir(parents=True, exist_ok=True)
        preview = PREVIEW / slug
        preview.mkdir(parents=True, exist_ok=True)

        hero = crop_panel(im, usable[0][:4])
        hero.save(dest / "hero.png", optimize=True)
        hero.save(preview / "hero.png")
        print(f"  -> hero.png {hero.size}")

        for part_id, panel in zip(expected_parts, usable[1:], strict=True):
            crop = crop_panel(im, panel[:4])
            crop.save(dest / f"{part_id}.png", optimize=True)
            crop.save(preview / f"{part_id}.png")
            print(f"  -> {part_id}.png {crop.size}")


if __name__ == "__main__":
    main()
