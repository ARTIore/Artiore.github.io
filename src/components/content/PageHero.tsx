import arabicAlts from '../../content/article-alts-ar.json'
import { heroFor } from '../../content/hero-images'

export function PageHero({ path }: { path: string }) {
  const hero = heroFor(path)
  if (!hero) return null
  return (
    <figure className={`mb-10 print:hidden overflow-hidden rounded-2xl border border-gold/20 bg-black ${hero.compact ? 'max-w-xl' : ''}`}>
      <img alt={hero.alt} lang={hero.lang} className="h-auto max-h-80 w-full object-cover object-center" width={1536} height={864}
        src={hero.src} srcSet={`${hero.small} 768w, ${hero.src} 1536w`}
        sizes={hero.compact ? '(max-width: 640px) 100vw, 576px' : '(max-width: 1152px) 100vw, 1104px'}
        fetchPriority="high" decoding="async" />
    </figure>
  )
}

export function ArticleIllustration({ path, heading }: { path: string; heading?: string }) {
  const images = heroFor(path)?.supporting ?? []
  const image = heading ? images.find(item => item.heading === heading) : images[0]
  if (!image) return null
  const arabic = path.includes('/ar/') || path.endsWith('/ar')
  const key = image.src.split('/').pop()!
  const alt = arabic ? (arabicAlts as Record<string, string>)[key] ?? image.alt : image.alt
  return <figure className="my-8 max-w-[68ch] overflow-hidden rounded-2xl border border-gold/20">
    <img alt={alt} lang={arabic ? 'ar' : 'en'} src={image.src} width={1200} height={800} loading="lazy" decoding="async" className="h-auto w-full" />
    <figcaption className="px-4 py-2 text-xs text-muted">{arabic ? 'رسم توضيحي مفاهيمي' : 'Conceptual illustration'}</figcaption>
  </figure>
}
