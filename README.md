# DLJ Tech — David Luengo Juárez

Bilingual (ES default, EN under `/en/`) static landing page + use-case portfolio. Astro, no client framework, ~0 KB framework JS.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
```

## Cloudflare Pages
- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 20+ (env var `NODE_VERSION=22`)

## Where to edit
- `src/data/copy.ts` — all ES/EN copy and use cases
- `src/data/site.ts` — URL, links, Tally form id
- `public/llms.txt`, `public/robots.txt` — AI/SEO files (update if copy changes)
