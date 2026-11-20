# Shipyard — North Goods

A Next.js App Router product catalog with TypeScript and responsive styling.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. Build with `npm run build`. No external API or secret keys needed.


## Part 2 — Performance optimization

- Product records have local image assets in `public/products/`; every product tile and detail page uses `next/image` with intrinsic dimensions and descriptive alt text.
- `next/font/google` loads DM Sans and Playfair Display once from the root layout with `display: "swap"`; no CSS Google Fonts import remains.
- `LazyReviews` defers the interactive Reviews chunk until its section approaches the viewport using IntersectionObserver and `next/dynamic` with a loading fallback. `ssr:false` is confined to a client component.
- Home page exports `metadata`; dynamic product route generates unique page titles and descriptions via `generateMetadata`.

## Manual verification

Run `npm install && npm run dev`; visit the homepage, open two different product cards, inspect titles, scroll to the reviews section, check the Network panel for images and deferred reviews chunk. Then run `npm run build`.

Note: Product art is original bundled SVG illustration (not external photo URLs), so files load without requesting third-party assets.
