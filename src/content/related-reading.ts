/**
 * Cross-links between investigations and the pages that share a real topic.
 * Rendered by templates. Article markdown, the claim ledger, and chain.json
 * are not edited here.
 *
 * Link copy names the destination. Where a ladder is named, it is named as
 * its own vocabulary: ESTABLISHED / DOCUMENTED IN PART / CONTESTED / OPEN
 * are not Verified / Unverified and not Confirmed / Demonstrated / Plausible / Unsupported.
 */

export type RelatedLink = {
  href: string
  label: string
  /** Shown under the link. Used when the target page is in another language. */
  note?: string
}

export type RelatedPlacement = {
  id: string
  sourcePath: string
  heading: string
  lang: 'en' | 'ar'
  dir?: 'ltr' | 'rtl'
  links: RelatedLink[]
}

const giHub = '/investigations/global-injustice/'
const giLadder = '/investigations/global-injustice/#ladder'
const l7 = '/investigations/global-injustice/l7-crime-trends/'
const l8 = '/investigations/global-injustice/l8-cyber-hygiene/'
const l11 = '/investigations/global-injustice/l11-commercial-spyware/'
const deHub = '/investigations/digital-exposure/'

const englishNote = 'الصفحة بالإنجليزية.'

const ladderEn: RelatedLink = {
  href: giLadder,
  label:
    'Global Injustice evidence ladder: ESTABLISHED, DOCUMENTED IN PART, CONTESTED, and OPEN. Those rungs are not Confirmed, Demonstrated, Plausible, or Unsupported, and they are not the record statuses Verified and Unverified.',
}

const ladderAr: RelatedLink = {
  href: giLadder,
  label:
    'سلّم التحقيق في الظلم العالمي: ESTABLISHED وDOCUMENTED IN PART وCONTESTED وOPEN. هذه الدرجات ليست مؤكَّد أو مُبرهَن أو معقول أو غير مدعوم، وليست مُتحقَّق منه أو غير مُتحقَّق منه.',
  note: englishNote,
}

const giHubEn: RelatedLink = {
  href: giHub,
  label:
    'Global Injustice Investigation: eleven public-record dossiers on courts, corruption, civic space, crime and spyware.',
}

const giHubAr: RelatedLink = {
  href: giHub,
  label: 'التحقيق في الظلم العالمي: أحد عشر ملفاً من السجلات العامة عن المحاكم والفساد والفضاء المدني والجريمة وبرامج التجسس.',
  note: englishNote,
}

const l11En: RelatedLink = {
  href: l11,
  label: 'Global Injustice dossier L11: commercial spyware on the public record.',
}

const l11Ar: RelatedLink = {
  href: l11,
  label: 'ملف L11 في التحقيق في الظلم العالمي: برنامج التجسس التجاري في السجل العام.',
  note: englishNote,
}

const l7En: RelatedLink = {
  href: l7,
  label: 'Global Injustice dossier L7: crime trends, including fraud losses reported to a complaint centre.',
}

const l7Ar: RelatedLink = {
  href: l7,
  label: 'ملف L7 في التحقيق في الظلم العالمي: اتجاهات الجريمة، ومنها خسائر الاحتيال المبلَّغ عنها.',
  note: englishNote,
}

const l8En: RelatedLink = {
  href: l8,
  label: 'Global Injustice dossier L8: cybersecurity hygiene gaps in the public record.',
}

const l8Ar: RelatedLink = {
  href: l8,
  label: 'ملف L8 في التحقيق في الظلم العالمي: فجوات النظافة في الأمن الرقمي.',
  note: englishNote,
}

function exposurePair(
  slug: string,
  links: RelatedLink[],
  arLinks: RelatedLink[],
): RelatedPlacement[] {
  return [
    {
      id: `de-${slug}`,
      sourcePath: `/investigations/digital-exposure/${slug}`,
      heading: 'Related on this site',
      lang: 'en',
      links,
    },
    {
      id: `de-ar-${slug}`,
      sourcePath: `/investigations/digital-exposure/ar/${slug}`,
      heading: 'صفحات ذات صلة',
      lang: 'ar',
      dir: 'rtl',
      links: arLinks,
    },
  ]
}

export const featuredInvestigations = [
  {
    href: deHub,
    label: 'Global Digital Exposure Investigation',
    description: 'How everyday technology can compromise privacy, identity and financial security.',
  },
  {
    href: giHub,
    label: 'Global Injustice Investigation',
    description:
      'Eleven public-record dossiers on courts, corruption, civic space, crime and spyware.',
  },
] as const

export const relatedPlacements: RelatedPlacement[] = [
  {
    id: 'de-hub',
    sourcePath: deHub,
    heading: 'Related on this site',
    lang: 'en',
    links: [giHubEn],
  },
  {
    id: 'de-hub-ar',
    sourcePath: '/investigations/digital-exposure/ar',
    heading: 'صفحات ذات صلة',
    lang: 'ar',
    dir: 'rtl',
    links: [giHubAr],
  },
  ...exposurePair('pegasus-predator-commercial-spyware', [l11En], [l11Ar]),
  ...exposurePair('iphone-zero-click-spyware', [l11En], [l11Ar]),
  ...exposurePair('whatsapp-encryption-limits', [l11En], [l11Ar]),
  ...exposurePair('stalkerware-safety-planning', [l11En], [l11Ar]),
  ...exposurePair('deepfake-ai-payment-fraud', [l7En], [l7Ar]),
  ...exposurePair('crypto-wallet-drainers', [l7En], [l7Ar]),
  ...exposurePair('sim-swap-account-takeover', [l7En], [l7Ar]),
  ...exposurePair('public-safety-checklist', [l8En], [l8Ar]),
  ...exposurePair('evidence-method', [ladderEn], [ladderAr]),
  {
    id: 'gi-hub',
    sourcePath: giHub,
    heading: 'Related on this site',
    lang: 'en',
    links: [
      {
        href: deHub,
        label:
          'Global Digital Exposure Investigation: how everyday technology can compromise privacy, identity and financial security.',
      },
    ],
  },
  {
    id: 'gi-l11',
    sourcePath: l11,
    heading: 'Related on this site',
    lang: 'en',
    links: [
      {
        href: '/investigations/digital-exposure/pegasus-predator-commercial-spyware/',
        label: 'Digital Exposure: Pegasus, Predator and commercial spyware, and what is documented.',
      },
      {
        href: '/investigations/digital-exposure/iphone-zero-click-spyware/',
        label: 'Digital Exposure: iPhone zero-click spyware, what is proven, and what Lockdown Mode does.',
      },
      {
        href: '/investigations/digital-exposure/stalkerware-safety-planning/',
        label: 'Digital Exposure: stalkerware and safety planning. A different harm from commercial spyware.',
      },
    ],
  },
  {
    id: 'gi-l7',
    sourcePath: l7,
    heading: 'Related on this site',
    lang: 'en',
    links: [
      {
        href: '/investigations/digital-exposure/deepfake-ai-payment-fraud/',
        label: 'Digital Exposure: deepfakes and AI payment fraud.',
      },
      {
        href: '/investigations/digital-exposure/crypto-wallet-drainers/',
        label: 'Digital Exposure: crypto wallet drainers, seed phrases and address poisoning.',
      },
      {
        href: '/academy/recovery/',
        label: 'Recovery steps, if a fraud or account takeover has already happened.',
      },
    ],
  },
  {
    id: 'gi-l8',
    sourcePath: l8,
    heading: 'Related on this site',
    lang: 'en',
    links: [
      {
        href: '/investigations/digital-exposure/public-safety-checklist/',
        label: 'Digital Exposure: public safety checklist for travellers and phones.',
      },
      {
        href: '/academy/navigator/',
        label: 'Digital safety navigator: checks on a device you have in front of you.',
      },
    ],
  },
  {
    id: 'academy-evidence',
    sourcePath: '/academy',
    heading: 'Related on this site',
    lang: 'en',
    links: [ladderEn],
  },
  {
    id: 'academy-lessons',
    sourcePath: '/academy',
    heading: 'Related investigations',
    lang: 'en',
    links: [l7En, l8En],
  },
  {
    id: 'research-review',
    sourcePath: '/academy/research',
    heading: 'Related on this site',
    lang: 'en',
    links: [ladderEn],
  },
  {
    id: 'recovery',
    sourcePath: '/academy/recovery',
    heading: 'Related on this site',
    lang: 'en',
    links: [l7En],
  },
  {
    id: 'navigator',
    sourcePath: '/academy/navigator',
    heading: 'Related on this site',
    lang: 'en',
    links: [l8En, l7En],
  },
  {
    id: 'threat-lab',
    sourcePath: '/academy/threat-lab',
    heading: 'Related on this site',
    lang: 'en',
    links: [l7En],
  },
]

export function normalizeRelatedPath(path: string) {
  const clean = path.split('?')[0].split('#')[0] || '/'
  if (clean.length > 1 && clean.endsWith('/')) return clean.slice(0, -1)
  return clean
}

export function placementsFor(sourcePath: string) {
  const key = normalizeRelatedPath(sourcePath)
  return relatedPlacements.filter((item) => normalizeRelatedPath(item.sourcePath) === key)
}
