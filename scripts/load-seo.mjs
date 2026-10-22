import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { rolldown } from 'rolldown'

export async function loadSeoModule() {
  const outdir = mkdtempSync(join(tmpdir(), 'artiore-seo-'))
  const bundle = await rolldown({
    input: join(process.cwd(), 'src/content/registry.ts'),
    platform: 'node',
  })
  await bundle.write({
    dir: outdir,
    format: 'esm',
    entryFileNames: 'registry.mjs',
  })
  await bundle.close()
  return import(pathToFileURL(join(outdir, 'registry.mjs')).href)
}
