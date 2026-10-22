# ARTIore.github.io

Public site for [artiais.com](https://artiais.com), the AI infrastructure platform in the ARTIore ecosystem.

- [artiore.com](https://artiore.com) — the reasoning platform ([try it](https://artiore.com/try))
- [artiais.com](https://artiais.com) — Artiais, AI infrastructure platform
- [artioreconsortium.com](https://artioreconsortium.com) — Artiore Consortium

Clarity-first reasoning. ARTIore helps people understand complex situations, make grounded decisions, and take practical next steps — without overwhelm, gatekeeping, or false certainty. The system is a witness, not a verdict.

## Development

```bash
npm ci
npm run dev
```

## Production checks

```bash
npm run lint
npm run build
```

`npm run build` typechecks, builds the Vite app, writes a `dist/<route>/index.html` for every app route (so GitHub Pages can open them directly), writes `dist/404.html`, refreshes the sitemap, and fails if a route file or internal link is missing.

## Routes

The app is a `BrowserRouter` site. Direct loads are static copies of `index.html` with that page’s title, description, canonical URL, and social tags baked in. Unknown addresses serve `404.html`, which renders the in-app Not Found page. It does not redirect.

`/framework.html` is the Grand Directional Prompt Framework V1.1 and is not an app route. The six-layer framework page is `/how-it-works` and links to that file. `/engine` is the Eternia Aurora Sovereign Engine page. The instrument itself stays at `/eternia-aurofa-soverign-engine/` from its own repository.

## Framework

The Grand Directional Prompt Framework (V1.1, Zero-Drift Edition) is published at [https://artiais.com/framework.html](https://artiais.com/framework.html). A Markdown transcription and PDF live in `docs/` for the repository. The current full system prompt is [ARTIore System Prompt — Resolved & Winged](docs/ARTIore-System-Prompt.md).
