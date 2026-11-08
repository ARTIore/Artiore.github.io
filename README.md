# ARTIore.github.io

Public site for ARTIore, an independent, AI-powered research and intelligence practice. It is published at [artiore.com](https://artiore.com).

- [artiore.com](https://artiore.com) — this site
- [artioreconsortium.com](https://artioreconsortium.com) — Artiore Consortium

## On this site

- [Home](/)
- [Framework](/framework.html)
- [Doctrine](/doctrine/)
- [Blog](/blog/)

ARTIore — an independent, AI-powered research and intelligence practice. Published work maps evidence, assumptions, trade-offs, next steps, and limits. The system is a witness, not a verdict.

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

`/framework.html` is the Grand Directional Prompt Framework V1.1 and is not an app route. The six-layer framework page is `/how-it-works` and links to that file. `/academy/` is the Clarity and Digital Safety Lab and is an app route. `/engine` is the Eternia Aurora Sovereign Engine page. The instrument itself is the static page at `/eternia-aurofa-soverign-engine/`, and its canonical host is artiore.com.

## Framework

The Grand Directional Prompt Framework (V1.1, Zero-Drift Edition) is published at [https://artiore.com/framework.html](https://artiore.com/framework.html). A Markdown transcription and PDF live in `docs/` for the repository. The current full system prompt is [ARTIore System Prompt — Resolved & Winged](docs/ARTIore-System-Prompt.md).

## License

Released under the [MIT License](LICENSE).
