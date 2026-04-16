# ARTIore.github.io

ARTIore is a dark, premium, intelligence-driven frontend built with **React + TypeScript + Vite + Tailwind CSS**.

## Core message

> They built systems you were never meant to understand.
> ARTIore changes that.
> Not by adding more noise, but by turning chaos into clarity.

## Development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
```

## Deployment

- This repository deploys to GitHub Pages through `.github/workflows/deploy.yml`.
- The custom domain is `artiais.com` and is set via `public/CNAME` so it is included in `dist/`.

## Structure highlights

- Lazy-loaded routing for Home, About, Philosophy, Framework, Engine, Dossier, Resources, Blog, Case Studies, Applications, Implementation, System Docs, API Docs, and Contact/Access.
- Shared premium dark layout system with reusable page template cards.
- Multilingual-ready content model (English + French) through a locale context.
- SEO metadata management with canonical links and JSON-LD schema.
