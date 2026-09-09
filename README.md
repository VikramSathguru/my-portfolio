# Vikram Portfolio

Personal portfolio for **Vikram Sathguru** — Next.js, Tailwind CSS, light/dark mode. Layout inspired by a MultiQoS-style portfolio page (hero, filtered work grid, about, contact form).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to add a portfolio project (CMS)

Projects are stored as CMS documents in `content/projects/*.json` and media in `public/portfolio/<slug>/`.

1. Add screenshots under `public/portfolio/my-slug/`
2. Copy an existing JSON file in `content/projects/` and edit fields (`title`, `summary`, `gallery`, locale blocks, etc.)
3. Set `"featured": true` to show it in the featured case section
4. Restart / refresh — the grid, featured block, and `/work/[slug]` case study update automatically

This file-based CMS mirrors a headless model (Sanity/Payload-ready): structured fields, localized content, and media assets separated from UI code.


## Internationalization (i18n)

Supported locales: **English (`en`)**, **Portuguese (`pt`)**, **Spanish (`es`)**, **Japanese (`ja`)**, **Chinese (`zh`)**.

- URLs: `/en`, `/pt`, `/es`, `/ja`, `/zh`
- Translations live in `messages/*.json`
- Switch language from the header dropdown

To edit copy, update the matching key in each locale file. To add a language, extend `src/i18n/routing.ts` and add `messages/<code>.json`.

## Customize other content

In `src/data/portfolio.ts` edit email, phone, socials, skill bars, and project metadata.

UI copy (headlines, about, contact, project titles) lives in `messages/*.json`.

Assets:

- Logo → `public/images/vikram-logo.png`
- Hero banner → `public/images/vikram-banner.png`

## Header links

- **Portfolio** → `#portfolio`
- **About Me** → `#about`
- **Contact Us** → `#contact`

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket  
2. Import at [vercel.com/new](https://vercel.com/new)  
3. Deploy

```bash
npm i -g vercel
vercel
```

### Other free platforms

| Platform | Notes |
| --- | --- |
| **[Netlify](https://www.netlify.com/)** | Strong Next.js support |
| **[Cloudflare Pages](https://pages.cloudflare.com/)** | Generous free tier |
| **[Render](https://render.com/)** | Free Node tier (may sleep when idle) |
| **[Railway](https://railway.app/)** | Easy GitHub deploys (trial credits) |

## Scripts

- `npm run dev` — local development  
- `npm run build` — production build  
- `npm run start` — serve production build  
- `npm run lint` — ESLint  
