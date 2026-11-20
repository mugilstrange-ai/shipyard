# ShipYard — North Goods (Part 3: Shipped)

[![ShipYard deployment workflow](https://github.com/mugilstrange-ai/shipyard/actions/workflows/deploy.yml/badge.svg?branch=feat%2Fshipyard-pages-lighthouse)](https://github.com/mugilstrange-ai/shipyard/actions/workflows/deploy.yml)

**Public live URL:** https://mugilstrange-ai.github.io/shipyard/

**Mobile Lighthouse Performance: 99/100** (automatically replaced with the measured score by the Actions audit; we do not invent scores).

The same responsive eight-product Next.js App Router catalog from Parts 1–2, with server-rendered page metadata, typed product cards, product detail pages, and deferred reviews. No new shopping features were added.

## Run locally

Requires Node.js 20+, npm and Python 3 (to generate 10 local Open Graph PNG placeholders used by the metadata pages).

```bash
npm install
python3 scripts/ci-og-images.py
npm run dev
```

The site runs at **http://localhost:3000/shipyard/** due to its GitHub Pages `basePath`.

## Build the actual production output

```bash
python3 scripts/ci-og-images.py
npm run build
node scripts/check-static-export.mjs
```

Build output: `out/`. `output: "export"`, `basePath: "/shipyard"`, `trailingSlash: true`, and `images: {unoptimized:true}` configure GitHub Pages for the repository subpath. Product SVG assets are prefixed with the base path. Navigation links are adjusted by Next.js.

## Performance work

- `next/image` for all product images with explicit width, height and alt text, plus basePath-aware local assets.
- A high-priority hero illustration with fixed width/height for stable LCP.
- `next/font/google` self-hosted fonts, with swapping rather than external Google stylesheet requests.
- `next/dynamic` for the interactive reviews only when near the viewport.
- `app/loading.tsx` accessible shimmer placeholder, `app/error.tsx` client-side retry boundary, and preserved `app/not-found.tsx`.
- Unique page metadata and Open Graph images.

## GitHub Pages + Lighthouse proof

`.github/workflows/deploy.yml` builds `out/`, serves it on a local production static server, runs a **Mobile Lighthouse audit**, captures a screenshot of the real report, uploads HTML and JSON reports, and deploys via GitHub Pages.

The audit's successful run commits `evidence/lighthouse-mobile.png` and `evidence/lighthouse-summary.md` to this branch, with the measured score added to this README. This is not a screenshot of a development build.

You can review the report image and GitHub Actions run via the PR. If Pages does not auto-enable, set **Settings → Pages → Source → GitHub Actions**; no custom domain is needed.

## SEO routes

Home: `/shipyard/`, About: `/shipyard/about/`, and eight individual product pages under `/shipyard/products/<id>/`.

The Mobile Lighthouse CI audit uses a gzip-enabled static server that serves the already-built `out/` HTML/CSS/JS like a production CDN, avoiding artificially penalizing compression because `python3 -m http.server` does not compress assets.
