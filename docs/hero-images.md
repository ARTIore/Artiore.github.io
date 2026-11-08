# Gold and black editorial artwork

The library contains 76 route-specific heroes and 41 supporting article illustrations, created with built-in image generation from page-specific prompts. The full prompt and final alt-text index is in `hero-image-prompts.json`.

Heroes are 1536×864 WebP files, each at most 200 KB, with 768×432 responsive variants and 1200×630 social-preview JPEGs. Supporting illustrations are 1200×800 WebP files. Originals were visually reviewed before export.

`src/content/hero-images.json` owns the asset mapping and English descriptions. Arabic and French heroes reuse the same artwork; localized hero descriptions live in `hero-alts.json`, and Arabic article descriptions in `article-alts-ar.json`. Unknown routes do not inherit unrelated artwork. Article images carry a conceptual-illustration caption.

The shared layout adds a responsive hero and limits its displayed height so the page title remains close to the top. English investigation illustrations follow the chosen section heading; Arabic equivalents appear near the introduction. Global Injustice and blog illustrations follow the introduction. Existing substantive infographics are retained.

Client metadata and prerendered HTML use matching per-route social images and descriptions. `public/framework.html` is updated separately. The independently served Eternia instrument needs the companion change in its own repository and depends on this site's image files being deployed first.

Validation: `npm test`, `npm run test:evidence`, `npm run build`, and `npm run test:browser`. With the production preview running on port 4173, `node scripts/check-hero-browser.mjs` checks eight routes at desktop and mobile widths and writes screenshots under `test-results/hero-screenshots` (override with `HERO_SCREENSHOTS`).

## Planned domain change

The active domain is `https://artiore.com`. `src/config/site-origin.json` holds the current publishing origin and the planned next origin. The active publishing origin is now `https://artiore.com`, following the confirmed domain cutover. At cutover, change `current` to the `next` value and build/deploy. Canonicals, structured data, hero social-image URLs, the sitemap, robots.txt and the generated CNAME then follow that origin. New image paths and the instrument's hero source are relative to the serving domain. Verify GitHub Pages custom-domain and HTTPS readiness before the cutover; domain/DNS account settings are not changed by this commit. The separate instrument's static canonical/social tags should be updated during that cutover too.

## Image bundle

The optimized artwork is versioned in `assets/editorial-images.zip`. `npm test` and `npm run build` unpack it automatically into ignored `public/images/` using Python's standard library; no additional image library is needed. The deployed site serves ordinary separate image files, not the archive. Run `python3 scripts/prepare-images.py --pack` after editing the image library to update the archive. The newly added “Every tap on Allow” article reuses relevant phone-permission artwork. There are 117 unique artworks across 77 English page assignments and 28 translations.
