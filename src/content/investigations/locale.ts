/** Language options for the Global Digital Exposure Investigation. */

export const investigationLanguages = [
  {
    code: 'en' as const,
    label: 'English',
    nativeLabel: 'English',
    dir: 'ltr' as const,
  },
  {
    code: 'ar' as const,
    label: 'Arabic',
    nativeLabel: 'العربية',
    dir: 'rtl' as const,
  },
]

export const arabicInvestigationBase = '/investigations/digital-exposure/ar'

export const arabicHomeCrumb = 'الرئيسية'
export const arabicHubCrumb = 'تحقيق التعرض الرقمي العالمي'

/**
 * Public evidence grades. These are not the record statuses Verified / Unverified.
 * Confirmed is مؤكَّد. Verified, as a record check, is مُتحقَّق منه.
 */
export const gradeLabelAr: Record<string, string> = {
  All: 'الكل',
  Confirmed: 'مؤكَّد',
  Demonstrated: 'مُبرهَن',
  Plausible: 'معقول',
  Unsupported: 'غير مدعوم',
  'Not stated': 'غير مذكور',
}

/** Longer grade phrases that must not be collapsed into a single grade or into Verified. */
export const gradePhraseAr: Record<string, string> = {
  'Demonstrated in research': 'مُبرهَن في البحث',
  'Plausible but unverified': 'معقول لكن غير مُتحقَّق منه',
}

/** Record statuses. Distinct vocabulary from the public grades above. */
export const recordStatusAr: Record<string, string> = {
  Verified: 'مُتحقَّق منه',
  Unverified: 'غير مُتحقَّق منه',
}

/** Keyed by language code, the same code the field manual uses for its new-tab notice. */
export const investigationNewTab: Record<string, { text: string; lang: string; dir: 'ltr' | 'rtl' }> = {
  en: { text: '(opens in a new tab)', lang: 'en', dir: 'ltr' },
  ar: { text: '(يفتح في علامة تبويب جديدة)', lang: 'ar', dir: 'rtl' },
}

export function arabicPathFor(englishPath: string) {
  if (englishPath === '/investigations/digital-exposure') return arabicInvestigationBase
  if (englishPath === '/perimeter' || englishPath === '/perimeter/') {
    return `${arabicInvestigationBase}/perimeter`
  }
  const base = '/investigations/digital-exposure/'
  if (englishPath.startsWith(base)) {
    return `${arabicInvestigationBase}/${englishPath.slice(base.length)}`
  }
  return englishPath
}

export function englishPathFor(path: string) {
  if (path === arabicInvestigationBase) return '/investigations/digital-exposure'
  const prefix = `${arabicInvestigationBase}/`
  if (path.startsWith(prefix)) {
    const rest = path.slice(prefix.length)
    if (rest === 'perimeter') return '/perimeter'
    return `/investigations/digital-exposure/${rest}`
  }
  return path
}

export function investigationAlternates(englishPath: string) {
  return [
    { hreflang: 'en', path: englishPath },
    { hreflang: 'ar', path: arabicPathFor(englishPath) },
    { hreflang: 'x-default', path: englishPath },
  ]
}

/** Rewrite an investigation href onto the Arabic route. External URLs stay put. */
export function localizeInvestigationHref(href: string) {
  if (!href || href.startsWith('#') || href.startsWith('mailto:')) return href
  const hashAt = href.indexOf('#')
  const hash = hashAt >= 0 ? href.slice(hashAt) : ''
  let path = hashAt >= 0 ? href.slice(0, hashAt) : href
  const site = 'https://artiore.com'
  if (path.startsWith(site)) path = path.slice(site.length) || '/'
  if (path === '/perimeter' || path === '/perimeter/') {
    const next = `${arabicInvestigationBase}/perimeter/`
    return hash ? `${next}${hash}` : next
  }
  const print = '/investigations/digital-exposure/public-safety-checklist/print.html'
  if (path === print) return `${arabicInvestigationBase}/public-safety-checklist/print.html${hash}`
  const base = '/investigations/digital-exposure'
  if (path === base || path === `${base}/`) return `${arabicInvestigationBase}/${hash}`
  if (path.startsWith(`${arabicInvestigationBase}/`) || path === arabicInvestigationBase) return `${path}${hash}`
  if (path.startsWith(`${base}/`)) return `${arabicInvestigationBase}/${path.slice(base.length + 1)}${hash}`
  return href
}

export const translationNoticeLead =
  'هذه ترجمة للنص الإنجليزي أُعدّت بمساعدة آلية، ولم يراجعها بعد متحدث أصلي. إذا اختلف النصان، فـ'

export const translationNoticeLink = 'النسخة الإنجليزية'

export const translationNoticeTail = ' هي المرجع المعتمد.'
