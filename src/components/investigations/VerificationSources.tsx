import { CitationArchiveAside } from '../content/CitationArchive'
import { OpensInNewTab } from '../content/SiteLink'
import { arabicTopics, arabicUsedFor } from '../../content/investigations/ar/used-for'
import { investigationNewTab } from '../../content/investigations/locale'
import {
  articleVerificationSources,
  verificationSourceGroups,
  type VerificationSource,
} from '../../content/investigations/verification-sources'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

const ambiguousUrls = new Set<string>()
const seenUsedFor = new Map<string, string>()
for (const source of [
  ...verificationSourceGroups.flatMap((group) => group.sources),
  ...Object.values(articleVerificationSources).flatMap((sources) => sources),
]) {
  if (!source.usedFor) continue
  const previous = seenUsedFor.get(source.url)
  if (previous && previous !== source.usedFor) ambiguousUrls.add(source.url)
  else seenUsedFor.set(source.url, source.usedFor)
}

function SourceItem({ source, locale }: { source: VerificationSource; locale: 'en' | 'ar' }) {
  const notice = locale === 'ar' ? investigationNewTab.ar : undefined
  const translated =
    locale === 'ar' && source.usedFor && !ambiguousUrls.has(source.url) ? arabicUsedFor[source.url] : undefined
  const usedFor = translated ?? source.usedFor
  return (
    <li className="leading-relaxed">
      <a className={`${linkClass} break-all`} dir="ltr" href={source.url} rel="noopener noreferrer" target="_blank">
        {source.title}
        {notice ? <OpensInNewTab dir={notice.dir} lang={notice.lang} text={notice.text} /> : <OpensInNewTab />}
      </a>
      <CitationArchiveAside newTab={notice} url={source.url} />
      <span className="text-cream/80"> — {source.publisher}</span>
      {source.date ? (
        <span className="text-muted" dir="ltr">
          {' '}
          · {source.date}
        </span>
      ) : null}
      {usedFor ? (
        <span className="mt-1 block text-sm text-muted" dir={translated ? undefined : locale === 'ar' ? 'ltr' : undefined}>
          {locale === 'ar' ? 'استُخدمت للتحقق من:' : 'Used to check:'} {usedFor}
        </span>
      ) : null}
    </li>
  )
}

export function VerificationSourceRegister({ locale = 'en' }: { locale?: 'en' | 'ar' }) {
  return (
    <section className="mt-12 max-w-[68ch]" id="verification-sources-linked">
      <h2 className="font-serif text-3xl text-cream">
        {locale === 'ar' ? 'مصادر التحقق (بروابط)' : 'Verification sources (linked)'}
      </h2>
      <p className="mt-4 leading-relaxed text-cream/90">
        {locale === 'ar'
          ? 'فُحصت الروابط في 1 نوفمبر 2026؛ بعض المواقع تمنع الفحص الآلي أو قد تنقل الصفحات.'
          : 'Links were checked on 1 November 2026; some sites block automated checks or may move pages.'}
      </p>
      {verificationSourceGroups.map((group) => (
        <div className="mt-8" key={group.topic}>
          <h3 className="font-serif text-2xl text-cream">{locale === 'ar' ? (arabicTopics[group.topic] ?? group.topic) : group.topic}</h3>
          <ul className="mt-3 space-y-3">
            {group.sources.map((source) => (
              <SourceItem key={source.url} locale={locale} source={source} />
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export function ArticleVerificationSources({ slug, locale = 'en' }: { slug: string; locale?: 'en' | 'ar' }) {
  const sources = articleVerificationSources[slug]
  if (!sources?.length) return null
  const registerHref =
    locale === 'ar'
      ? '/investigations/digital-exposure/ar/source-register/#verification-sources-linked'
      : '/investigations/digital-exposure/source-register/#verification-sources-linked'
  return (
    <section className="mt-12 max-w-[68ch]">
      <h2 className="font-serif text-2xl text-cream">{locale === 'ar' ? 'مصادر هذا المقال' : 'Sources for this article'}</h2>
      <ul className="mt-4 space-y-3">
        {sources.map((source) => (
          <SourceItem key={source.url} locale={locale} source={source} />
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <a className={linkClass} href={registerHref}>
          {locale === 'ar' ? 'سجل مصادر التحقق الكامل' : 'Full verification source register'}
        </a>
      </p>
    </section>
  )
}
