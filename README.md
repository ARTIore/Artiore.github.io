# ARTIore.github.io

Public site for [artiais.com](https://artiais.com), the AI infrastructure platform in the ARTIore ecosystem.

- [artiore.com](https://artiore.com) — the reasoning platform ([try it](https://artiore.com/try))
- [artiais.com](https://artiais.com) — Artiais, AI infrastructure platform

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

`npm run build` typechecks, builds the Vite app, prerenders each route to HTML (headings, text, and links are in the file before JavaScript runs), writes `dist/404.html`, refreshes the sitemap, and fails if a route is missing metadata, a single H1, prerendered content, or a working internal link.

## Routes

The app is a `BrowserRouter` site. Direct loads are prerendered HTML for that route, then hydrated in the browser. Canonical URLs, the sitemap, and internal links use the trailing-slash form GitHub Pages serves with status 200. Unknown addresses serve `404.html`, which renders the in-app Not Found page. It does not redirect.

`/framework.html` is the Grand Directional Prompt Framework V1.1 and is not an app route. The six-layer framework page is `/how-it-works` and links to that file. `/engine` is the Eternia Aurora Sovereign Engine page. The instrument itself stays at `/eternia-aurofa-soverign-engine/` from its own repository.

## Framework

The Grand Directional Prompt Framework (V1.1, Zero-Drift Edition) is published at [https://artiais.com/framework.html](https://artiais.com/framework.html). A Markdown transcription and PDF live in `docs/` for the repository. The current full system prompt is [ARTIore System Prompt — Resolved & Winged](docs/ARTIore-System-Prompt.md).

## License

Released under the [MIT License](LICENSE).
