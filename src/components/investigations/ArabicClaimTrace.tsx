import type { Dispatch, SetStateAction } from 'react'
import { Breadcrumbs } from '../seo/Breadcrumbs'
import { SeoHead } from '../seo/SeoHead'
import { SiteLink } from '../content/SiteLink'
import { OpensInNewTab } from '../content/SiteLink'
import { claimsPageData } from '../../content/investigations/claims-data'
import { arabicClaimsMeta } from '../../content/investigations/ar/meta'
import { arabicCaveat, arabicClaimWording, arabicClaimsChrome as t, arabicReason } from '../../content/investigations/ar/claim-copy'
import { gradeLabelAr, investigationAlternates, investigationNewTab } from '../../content/investigations/locale'
import { claimsMeta } from '../../content/meta'

const linkClass =
  'text-gold-bright underline decoration-gold/40 underline-offset-4 hover:decoration-gold-bright'

const labels = ['All', 'Confirmed', 'Demonstrated', 'Plausible', 'Unsupported', 'Not stated'] as const

type Label = (typeof labels)[number]

function grade(label: string) {
  return gradeLabelAr[label || 'Not stated'] ?? label
}

export function ArabicClaimTrace({
  query,
  setQuery,
  label,
  setLabel,
  visible,
}: {
  query: string
  setQuery: Dispatch<SetStateAction<string>>
  label: Label
  setLabel: Dispatch<SetStateAction<Label>>
  visible: (typeof claimsPageData.claims)
}) {
  const notice = investigationNewTab.ar
  return (
    <>
      <SeoHead
        alternates={investigationAlternates(claimsMeta.path)}
        crumbName={arabicClaimsMeta.crumbName}
        description={arabicClaimsMeta.description}
        author="ARTIore Research Desk"
        authorOrganization="ARTIore"
        dateModified="2026-11-03"
        datePublished="2026-10-26"
        dir="rtl"
        headline={arabicClaimsMeta.headline}
        inLanguage="ar"
        kind="article"
        locale="ar_AR"
        path={arabicClaimsMeta.path}
        title={arabicClaimsMeta.headTitle}
      />
      <Breadcrumbs current={arabicClaimsMeta.crumbName} label="مسار التنقل" path={arabicClaimsMeta.path} />
      <article className="investigation mx-auto max-w-3xl" dir="rtl" lang="ar">
        <nav aria-label="اللغات" className="no-print mb-6">
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-gold">اللغات</p>
          <ul className="flex flex-wrap gap-2">
            <li>
              <SiteLink
                className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-3 text-sm text-cream/80 hover:border-gold/40 hover:text-cream"
                href={claimsMeta.path}
              >
                <span dir="ltr" lang="en">
                  English
                </span>
              </SiteLink>
            </li>
            <li>
              <span
                aria-current="true"
                className="inline-flex min-h-11 items-center rounded-full border border-gold bg-gold/15 px-3 text-sm text-gold-bright"
                dir="rtl"
                lang="ar"
              >
                العربية
              </span>
            </li>
          </ul>
        </nav>
        <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.kicker}</p>
        <h1 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">{t.title}</h1>
        <p className="mt-6 max-w-[68ch] rounded-2xl border border-white/20 bg-white/[0.04] p-5 text-sm leading-relaxed text-cream" role="note">
          هذه ترجمة للنص الإنجليزي أُعدّت بمساعدة آلية، ولم يراجعها بعد متحدث أصلي. إذا اختلف النصان، فـ
          <SiteLink className={linkClass} href={claimsMeta.path}>
            النسخة الإنجليزية
          </SiteLink>
          {' '}هي المرجع المعتمد. درجات العرض تُترجم، وقيم السجل الأصلية تبقى كما هي.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-cream/90">
          {t.introLead}
          <bdi dir="ltr">{claimsPageData.ledgerTotal}</bdi>
          {t.introMid}
          <bdi dir="ltr">{claimsPageData.publishedCount}</bdi>
          {t.introTail}
        </p>
        <p className="mt-4 leading-relaxed text-cream/90">{t.rejected}</p>
        <p className="mt-4 leading-relaxed text-cream/90">
          {t.gradesLead}
          <SiteLink className={linkClass} href="/investigations/digital-exposure/ar/evidence-method/">
            {t.evidenceMethod}
          </SiteLink>
          {t.gradesBody}
        </p>
        <div className="mt-8 flex flex-wrap items-end gap-3">
          <label className="block text-sm text-muted" htmlFor="claim-search-ar">
            {t.search}
            <input
              className="mt-1 block min-h-11 w-64 rounded-full border border-gold/40 bg-ink px-4 text-cream"
              id="claim-search-ar"
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              value={query}
            />
          </label>
          <label className="block text-sm text-muted" htmlFor="claim-label-ar">
            {t.label}
            <select
              className="mt-1 block min-h-11 rounded-full border border-gold/40 bg-ink px-4 text-cream"
              id="claim-label-ar"
              onChange={(event) => setLabel(event.target.value as Label)}
              value={label}
            >
              {labels.map((item) => (
                <option key={item} value={item}>
                  {grade(item === 'Not stated' ? '' : item)}
                </option>
              ))}
            </select>
          </label>
          <p className="text-sm text-muted">
            <bdi dir="ltr">{visible.length}</bdi> {t.shown}
          </p>
        </div>
        <div className="mt-8 space-y-6">
          {visible.map((claim) => (
            <article className="rounded-2xl border border-gold/20 p-4" id={claim.id} key={claim.id}>
              <p className="text-xs uppercase tracking-[0.16em] text-gold" dir="ltr">
                {claim.id}
              </p>
              <h2 className="mt-2 font-serif text-2xl text-cream">{grade(claim.label)}</h2>
              {claim.narrowed ? <p className="mt-2 text-sm text-gold-bright">{t.narrowed}</p> : null}
              {arabicClaimWording[claim.id] ? (
                <p className="mt-3 leading-relaxed text-cream/90">{arabicClaimWording[claim.id]}</p>
              ) : null}
              {claim.wording ? (
                <p className="mt-3 text-sm leading-relaxed text-muted" dir="ltr">
                  {t.englishWording}: {claim.wording}
                </p>
              ) : null}
              {claim.sources.length > 0 ? (
                <ul className="mt-3 space-y-1 text-sm">
                  {claim.sources.map((source) => (
                    <li key={`${source.name}-${source.url}`}>
                      {source.url ? (
                        <a className={`${linkClass} break-all`} dir="ltr" href={source.url} rel="noreferrer" target="_blank">
                          {source.name || source.url}
                          <OpensInNewTab dir={notice.dir} lang={notice.lang} text={notice.text} />
                        </a>
                      ) : (
                        <span className="text-cream/90" dir="ltr">
                          {source.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}
              {claim.quotes.length > 0 ? (
                <div className="mt-3 space-y-2">
                  {claim.quotes.map((quote) => (
                    <blockquote className="border-s-4 border-gold/40 ps-3 text-sm text-cream/80" dir="ltr" key={quote}>
                      {t.quote}: {quote}
                    </blockquote>
                  ))}
                </div>
              ) : null}
              {claim.caveats.length > 0 ? (
                <ul className="mt-3 list-disc space-y-1 ps-5 text-sm text-muted">
                  {claim.caveats.map((caveat) => (
                    <li key={caveat}>{arabicCaveat[caveat] ?? caveat}</li>
                  ))}
                </ul>
              ) : null}
              {claim.history.length > 0 ? (
                <div className="mt-3 space-y-2 text-sm text-cream/80">
                  {claim.history.map((item) => (
                    <p key={`${item.date}-${item.newWording}`}>
                      <span dir="ltr">{item.date}</span>
                      {': '}
                      <span dir="ltr">
                        {t.ledgerWording}: {item.oldWording} → {item.newWording}
                      </span>
                      {item.reason ? ` (${arabicReason[item.reason] ?? item.reason})` : ''}
                    </p>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
        <section className="mt-12 border-t border-white/10 pt-8" id="integrity">
          <h2 className="font-serif text-3xl text-gold-bright">{t.integrity}</h2>
          <p className="mt-4 leading-relaxed text-cream/90">{t.integrityBody}</p>
          <p className="mt-4">
            <a className={linkClass} href="/investigations/digital-exposure/claims/chain.json">
              {t.downloadJson}
            </a>
          </p>
          <p className="mt-2">
            <a className={linkClass} href="/investigations/digital-exposure/claims/chain.csv">
              {t.downloadCsv}
            </a>
          </p>
        </section>
      </article>
    </>
  )
}
