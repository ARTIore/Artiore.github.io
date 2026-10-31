#!/usr/bin/env node
/**
 * Style the legal-review markers in the published investigation.
 *
 * WHY THIS EXISTS
 *   The investigation pages are prebuilt static files carried in
 *   public/investigations/digital-exposure/ and rendered by the corpus
 *   tooling (tools/build_artiore_site.py -- untracked in this repository).
 *   The corpus leaves an editorial marker in the Note cell of 98 claim rows:
 *
 *       unsupported or contradicted by the available evidence
 *       [PRINCIPAL'S CALL: legal review before publication]
 *
 *   That marker is meaningful — it flags a claim as awaiting the publisher's
 *   legal sign-off, and the principal may still clear or refuse each one. It
 *   is also raw editorial text with no legend, so a reader would see it
 *   verbatim, 98 times, and the page would read like an unfinished draft.
 *
 *   The defect is PRESENTATION, not truth. This script preserves the meaning
 *   and makes it legible: a styled badge plus a one-line legend.
 *
 *   Nothing is deleted. No claim is cleared. The decision stays with the
 *   principal.
 *
 * GATE
 *   scripts/check-dist.mjs now BANS the raw marker string outright, so if a
 *   corpus run regenerates the pages and reintroduces raw markers, the build
 *   fails loudly instead of the live page regressing silently. The gate and
 *   this transform belong together: the badge changes what a reader sees, the
 *   gate changes what can ship.
 *
 * IDEMPOTENT
 *   Running it twice is a no-op. Running it against already-styled pages
 *   leaves them byte-identical.
 *
 * REVERSIBLE
 *   The transform is a pure function of the committed files; `git checkout`
 *   restores the originals. A pre-transform snapshot of all 25 affected pages
 *   is kept alongside this script during the Directive 007 work.
 *
 * Usage:  node scripts/style-legal-review.mjs [--check]
 *   --check  report what would change and exit 0 without writing
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const PAGES = join(ROOT, 'public/investigations/digital-exposure');

const MARKER = "[PRINCIPAL'S CALL: legal review before publication]";
const BADGE = '<span class="legal-review">Legal review pending</span>';
const LEGEND =
  '<p class="evidence-legend"><strong>Evidence labels.</strong> Each claim carries a label. ' +
  '<em>Legal review pending</em> marks a claim that has not yet cleared the publisher’s legal review.</p>';

// The badge reuses the site palette only — no new colours, no new fonts.
const BADGE_CSS =
  '.legal-review{display:inline-block;font-size:.78rem;letter-spacing:.02em;' +
  'text-transform:uppercase;color:var(--gold-bright);border:1px solid var(--line);' +
  'border-radius:2px;padding:.05em .4em;white-space:nowrap}\n' +
  '.evidence-legend{font-size:.88rem;color:var(--muted);margin:1rem 0 .5rem}\n';

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (full.endsWith('.html')) out.push(full);
  }
  return out;
}

const check = process.argv.includes('--check');
const files = walk(PAGES).sort();
let changedFiles = 0;
let changedMarkers = 0;
let totalBadges = 0;
const perFile = [];

for (const file of files) {
  const original = readFileSync(file, 'utf8');
  const markerCount = original.split(MARKER).length - 1;
  const badgeCount = original.split(BADGE).length - 1;
  // Process a page if it carries the raw marker OR an existing badge. A page
  // that is already badged still needs its legend, so skipping on
  // "no raw marker" would leave a half-styled page behind.
  if (markerCount === 0 && badgeCount === 0) continue;

  let next = original;

  // 1. the marker is always a suffix on the last cell of its row. Replace it
  //    there, so no row structure changes and the existing check-dist.mjs
  //    assertions (one h1, internal links, table shape) still hold.
  next = next.split(MARKER).join(BADGE);
  changedMarkers += markerCount;

  // 2. the shared inline stylesheet is byte-identical across all 35 pages, so
  //    one insertion covers the batch. Insert before </style>.
  if (!next.includes('.legal-review{')) {
    next = next.replace('</style>', `${BADGE_CSS}</style>`);
  }

  // 3. a one-line legend, placed immediately before the first marked table so
  //    it reads as part of the evidence table rather than as page chrome.
  // Guard on the paragraph element itself. Guarding on the bare class name
  // would be wrong: the CSS rule above already contains the string
  // ".evidence-legend", so the paragraph would never be inserted.
  if (!next.includes('<p class="evidence-legend"')) {
    const tableIndex = next.indexOf('<table');
    if (tableIndex !== -1) {
      next = next.slice(0, tableIndex) + LEGEND + next.slice(tableIndex);
    }
  }

  totalBadges += next.split(BADGE).length - 1;
  if (next !== original) {
    changedFiles += 1;
    perFile.push([relative(PAGES, file), markerCount]);
    if (!check) writeFileSync(file, next, 'utf8');
  }
}

console.log(`pages scanned            : ${files.length}`);
console.log(`pages with raw markers   : ${perFile.length}`);
console.log(`markers styled           : ${changedMarkers}`);
console.log(`badges already present   : ${totalBadges}`);
console.log(`files that would change  : ${changedFiles}`);

if (check) {
  console.log('\nDRY RUN — nothing written.');
  for (const [file, n] of perFile) console.log(`  ${n}x  ${file}`);
  console.log('\nThe raw marker is now BANNED by scripts/check-dist.mjs, so the build fails');
  console.log('if a corpus run reintroduces it. Run without --check to apply the transform.');
} else {
  console.log('\napplied.');
}
