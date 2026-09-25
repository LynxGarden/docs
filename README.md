# Lynx Docs

Engineering documentation for the **Lynx** multi-tenant training & physio
platform — app, backend, and every feature as it ships. Built with
[Fumadocs](https://fumadocs.dev) (Next.js, static export).

> **Rule:** no feature is done until its page here is current. Add/update the
> matching page in `content/docs/**` in the same change set as the code.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
```

## Structure

```
content/docs/
├── index.mdx            Overview
├── getting-started.mdx
├── features/            one page per feature (CP1…CP4)
├── architecture/        app architecture + navigation
└── backend/             data model, RLS, migrations
```

## Deploy

Pushing to `main` builds and deploys to GitHub Pages via
`.github/workflows/deploy.yml` (project site at `…github.io/docs`, so CI sets
`PAGES_BASE_PATH=/docs`). Enable Pages → "GitHub Actions" in the repo settings.
