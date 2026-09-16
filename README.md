# Vikram Portfolio (frontend)

Personal portfolio for **Vikram Sathguru** — Next.js, Tailwind CSS, light/dark mode. Built for sharing case studies (including Workana-safe viewing without external contact details).

**Backend:** [portfolio-backend](https://github.com/VikramSathguru/portfolio-backend) (Supabase schema, RLS, seed, Storage).

## Getting started

```bash
npm install
cp .env.example .env.local   # optional Supabase keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content / CMS

Projects load from **Supabase** when `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set. Otherwise the site falls back to `content/projects/*.json` and local images under `public/portfolio/`.

### Supabase admin (recommended for production)

1. Set up the [backend repo](https://github.com/VikramSathguru/portfolio-backend) (migrations, seed, image migrate).
2. Copy `.env.example` → `.env.local` and set:

```
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

3. Create an admin user in the Supabase Auth dashboard (a `profiles` row with `role = admin` is created automatically).
4. Open [http://localhost:3000/admin](http://localhost:3000/admin) — sign in, create/edit projects, upload covers to Storage.
5. Header search calls the `search_site` RPC when Supabase is configured.

Never put the **service role** key in this frontend or in Vercel.

### JSON fallback (local / no CMS)

1. Add screenshots under `public/portfolio/my-slug/`
2. Copy an existing JSON file in `content/projects/` and edit fields
3. Set `"featured": true` for the featured case section
4. Refresh — grid, featured block, and `/work/[slug]` update from JSON

## Internationalization (i18n)

Supported locales: **English (`en`)**, **Portuguese (`pt`)**, **Spanish (`es`)**, **Japanese (`ja`)**, **Chinese (`zh`)**.

- URLs: `/en`, `/pt`, `/es`, `/ja`, `/zh`
- Translations live in `messages/*.json`
- Switch language from the header dropdown

## Workana-safe contact policy

The public site intentionally **does not** show email, phone, social links, or a contact form — so clients can review the portfolio on Workana without violating external-contact rules. Reach out stays on the Workana platform.

## Deploy (Vercel)

Repo: `https://github.com/VikramSathguru/my-portfolio.git` (this frontend only).

1. Push this repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new) — root = repo root
3. Set env vars:

| Name | Value |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://YOUR_PROJECT.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | anon / public key |
| `NEXT_PUBLIC_SITE_URL` | your production URL (optional, for sitemap) |

4. Redeploy. Case-study images should load from Supabase Storage CDN URLs after you run the backend image migration.

Without Supabase env vars, production still serves from committed `content/projects/*.json` and `public/portfolio/`.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
