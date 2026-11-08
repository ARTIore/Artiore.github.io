import { SITE_URL } from '../config/site'
import manifest from './hero-images.json'
import localizedAlts from './hero-alts.json'
import { normalizePath } from './urls'

export function heroFor(path: string) {
  let key = normalizePath(path)
  if (key === '/field-manual/ar' || key === '/field-manual/fr') key = '/field-manual'
  if (key === '/investigations/digital-exposure/ar/perimeter') key = '/perimeter'
  key = key.replace('/digital-exposure/ar/', '/digital-exposure/')
  if (key === '/investigations/digital-exposure/ar') key = '/investigations/digital-exposure'
  const image = (manifest as Record<string, { src: string; small: string; og: string; alt: string; compact: boolean; supporting: { src: string; alt: string; heading: string }[] }>)[key]
  if (!image) return undefined
  const alt = (localizedAlts as Record<string, string>)[normalizePath(path)]
  return { ...image, og: new URL(image.og, SITE_URL).href, alt: alt ?? image.alt, lang: alt ? (path.includes('/fr') ? 'fr' : 'ar') : 'en' }
}
