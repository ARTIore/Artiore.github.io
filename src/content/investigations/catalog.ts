import { investigationFaqs } from './faqs'

// Public edition of the Global Digital Exposure Investigation, version 1.0
// (ARTIore Research Desk, 26 October 2026). Titles and descriptions are the
// publication's own front matter where it has them. Pages without a
// meta_description use a sentence from that document.

export const investigationBase = '/investigations/digital-exposure'

export const investigationPrintPath =
  '/investigations/digital-exposure/public-safety-checklist/print.html'

export const investigationOg = {
  src: 'https://artiais.com/investigations/digital-exposure/og-invisible-attack-surface.png',
  width: '1200',
  height: '630',
  alt: 'The Invisible Attack Surface. How everyday technology can compromise privacy, identity and financial security.',
}

export const invisibleAttackSurfaceCoverAlt =
  'Cover: The Invisible Attack Surface, Global Digital Exposure Investigation by the ARTIore Research Desk. Covers Wi-Fi, DNS, Bluetooth, zero-click attacks and spyware.'

export const invisibleAttackSurfaceCover = {
  src: '/investigations/digital-exposure/invisible-attack-surface-cover.webp',
  width: 1200,
  height: 1200,
  alt: invisibleAttackSurfaceCoverAlt,
}

/** JPG social card for the executive investigation page. */
export const invisibleAttackSurfaceOg = {
  src: 'https://artiais.com/investigations/digital-exposure/invisible-attack-surface-cover.jpg',
  width: '1200',
  height: '1200',
  alt: invisibleAttackSurfaceCoverAlt,
}

export const invisibleAttackSurfaceInfographic = {
  src: '/investigations/digital-exposure/invisible-attack-surface-infographic.webp',
  width: 1254,
  height: 1254,
  alt: 'Infographic: a phone shown in layers, linked to ten exposure areas: Wi-Fi and hotel networks, Bluetooth and BLE, app permissions and accessibility, cloud storage and data exposure, DNS and network control, mobile exploitation, encrypted messaging, spyware and surveillance, and crypto and financial fraud.',
  caption:
    'Illustration of the exposure areas covered in this investigation. The globe markers are decorative and do not show data, locations or rankings.',
}

export const investigationPublished = '2026-10-26'

/** First publication of the hub on artiais.com, commit a8cd068, 31 October 2026. */
export const investigationHubPublished = '2026-10-31'

export const investigationLicenseUrl = 'https://creativecommons.org/licenses/by/4.0/'

export const investigationHub = {
  path: investigationBase,
  title: 'Global Digital Exposure Investigation',
  headTitle: 'Global Digital Exposure Investigation | ARTIore',
  description:
    'How everyday technology can compromise privacy, identity and financial security. ARTIore Research Desk, Global Digital Exposure Investigation, version 1.0.',
  crumbName: 'Global Digital Exposure Investigation',
  lastmod: '2026-11-02',
}

export type InvestigationPiece = {
  file: string
  slug: string
  path: string
  title: string
  /** Search title. The visible h1 remains `title`. */
  seoTitle?: string
  headTitle: string
  description: string
  crumbName: string
  summary: string
  kicker?: string
  readingTime?: string
  partsToc: boolean
  printable: boolean
  datePublished?: string
  dateModified?: string
  /** Overrides the default /investigations/digital-exposure/<slug> path. */
  publicPath?: string
  dek?: string
  byline?: string
  lastmod?: string
}

const pieceSource: Omit<InvestigationPiece, 'path' | 'headTitle' | 'crumbName' | 'summary'>[] = [

  {
    file: "perimeter.md",
    slug: "perimeter",
    publicPath: "/perimeter",
    title: "The Permission Is the Perimeter",
    seoTitle: "The Permission Is the Perimeter: Digital Exposure, Explained",
    description:
      "A structural guide to digital exposure: why permissions, accounts, metadata and recovery paths matter more than any single device.",
    dek: "Your phone is not a locked box. It is a stack of permissions — and most of them are doing exactly what they were designed to do.",
    byline: "ARTIore Research",
    kicker: "Framework",
    readingTime: "10 minutes",
    partsToc: false,
    printable: false,
    datePublished: "2026-10-25",
    dateModified: "2026-11-01",
    lastmod: "2026-11-01",
  },
  {
    file: "00-executive-investigation.md",
    slug: "executive-investigation",
    title: "The Invisible Attack Surface",
    seoTitle: "The Invisible Attack Surface Report | ARTIore",
    description: "The purpose of this report is not to convince you that you are under attack. It is to make sure you never mistake unfamiliarity with safety.",
    kicker: "Executive investigation",
    readingTime: "approx. 105 minutes",
    partsToc: true,
    printable: false,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "01-password-protected-wifi-not-secure.md",
    slug: "password-protected-wifi-not-secure",
    title: "Why a Password-Protected Wi-Fi Network Is Not a Secure Network",
    seoTitle: "Is Password-Protected Wi-Fi Safe? What the Password Proves",
    description: "A Wi-Fi password proves you may join a network — not that the network is trustworthy. Here is what WPA2/WPA3 actually protects.",
    kicker: "Networks",
    readingTime: "6 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "02-hotel-wifi-security-guide.md",
    slug: "hotel-wifi-security-guide",
    title: "Hotel Wi-Fi Security: What Travellers Should Actually Do",
    seoTitle: "Hotel Wi-Fi Security: What Travellers Should Actually Do",
    description: "Hotels concentrate transients, shared networks and payment data. A practical, evidence-based guide to hotel Wi-Fi risks and captive portals.",
    kicker: "Travel",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "03-dns-hijacking-explained.md",
    slug: "dns-hijacking-explained",
    title: "DNS Hijacking Explained: The Invisible Switch That Decides Where You Go",
    seoTitle: "DNS Hijacking Explained: Who Decides Where You Go",
    description: "DNS decides which server your device connects to. Learn how DNS hijacking, cache poisoning and rogue resolvers work, and what HTTPS still protects.",
    kicker: "Networks",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "04-bluetooth-ble-tracking.md",
    slug: "bluetooth-ble-tracking",
    title: "Bluetooth and BLE Tracking: What Your Devices Broadcast",
    seoTitle: "Bluetooth Tracking: What BLE Devices Broadcast About You",
    description: "Bluetooth Low Energy devices advertise constantly. Learn how BLE tracking works, what address randomisation does, and which vulnerabilities matter.",
    kicker: "Wireless",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "05-android-accessibility-service-malware.md",
    slug: "android-accessibility-service-malware",
    title: "Android Accessibility Service Malware: The Permission That Can Read Your Screen",
    seoTitle: "Android Accessibility Malware: What the Permission Allows",
    description: "Android accessibility services can read the screen and tap for you — which is why banking trojans abuse them. How to audit your device.",
    kicker: "Mobile",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "06-iphone-zero-click-spyware.md",
    slug: "iphone-zero-click-spyware",
    title: "iPhone Zero-Click Spyware: What Is Proven, What Lockdown Mode Does",
    seoTitle: "iPhone Zero-Click Spyware: What's Proven and What Helps",
    description: "iPhones are hard to hack, not immune. A documented look at zero-click exploit chains, Apple Threat Notifications, Lockdown Mode, and how to judge the evidence.",
    kicker: "Mobile",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "07-whatsapp-encryption-limits.md",
    slug: "whatsapp-encryption-limits",
    title: "WhatsApp Encryption Limits: What End-to-End Encryption Does Not Protect",
    seoTitle: "WhatsApp Encryption Limits: What E2EE Doesn't Protect",
    description: "WhatsApp encrypts message content, not your account, your endpoint or your metadata. A clear breakdown of documented vulnerabilities and backups.",
    kicker: "Messaging",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "08-pegasus-predator-commercial-spyware.md",
    slug: "pegasus-predator-commercial-spyware",
    title: "Pegasus, Predator and Commercial Spyware: What Is Actually Proven",
    seoTitle: "Pegasus and Predator: What Commercial Spyware Evidence Shows",
    description: "A forensic, evidence-led guide to mercenary spyware: what Pegasus and Predator can do, who has been targeted, and what remains unknown.",
    kicker: "Surveillance",
    readingTime: "8 minutes",
    partsToc: false,
    printable: false,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "09-cloud-photo-account-takeover.md",
    slug: "cloud-photo-account-takeover",
    title: "Cloud Photo Security: How Accounts and Tokens Get Stolen",
    seoTitle: "Cloud Photo Security: How Accounts and Tokens Get Stolen",
    description: "Cloud photos are rarely stolen by breaking encryption. They are taken through accounts, sessions and sharing links. How takeover works.",
    kicker: "Cloud",
    readingTime: "6 minutes",
    partsToc: false,
    printable: false,
    lastmod: "2026-11-01",
  },
  {
    file: "10-crypto-wallet-drainers.md",
    slug: "crypto-wallet-drainers",
    title: "Crypto Wallet Drainers: Seed Phrases, Approvals and Address Poisoning",
    seoTitle: "Crypto Wallet Drainers: How Approvals and Seeds Get Stolen",
    description: "Blockchains are cryptographically secure; wallets are not. How drainer kits, malicious approvals, address poisoning and fake apps steal funds.",
    kicker: "Finance",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
    lastmod: "2026-11-01",
  },
  {
    file: "11-sim-swap-account-takeover.md",
    slug: "sim-swap-account-takeover",
    title: "SIM Swap and Account Takeover: When Your Phone Number Becomes the Weakest Link",
    seoTitle: "SIM Swap and Account Takeover: When Your Number Is the Key",
    description: "SIM swap attacks turn your phone number into an attacker's key. How the fraud works, why SMS second factors fail, and how to move your accounts.",
    kicker: "Identity",
    readingTime: "6 minutes",
    partsToc: false,
    printable: false,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "12-hotel-keycard-lock-security.md",
    slug: "hotel-keycard-lock-security",
    title: "Hotel Keycard Locks: The Unsaflok Case and What It Means for Guests",
    seoTitle: "Hotel Keycard Locks: What the Unsaflok Research Proved",
    description: "Three million hotel doors used a lock system with forgeable keycards. What the Unsaflok research proved, and what it did not prove.",
    kicker: "Physical security",
    readingTime: "5 minutes",
    partsToc: false,
    printable: false,
    lastmod: "2026-11-01",
  },
  {
    file: "browser-extensions-session-theft.md",
    slug: "browser-extensions-session-theft",
    title: "Browser Extensions and Session Theft: Why MFA Is Not the Last Barrier",
    seoTitle: "Browser Extensions and Session Theft | ARTIore",
    description:
      "Multifactor authentication protects the login process. After login, a service often relies on a session credential to recognize the browser.",
    partsToc: false,
    printable: false,
    datePublished: "2026-10-25",
    dateModified: "2026-10-31",
    lastmod: "2026-11-01",
  },
  {
    file: "digital-security-warning-signs.md",
    slug: "digital-security-warning-signs",
    title: "Digital Security Warning Signs: What to Check Before You Panic",
    seoTitle: "Digital Security Warning Signs: What to Check",
    description:
      "A phone warms up. A Wi-Fi connection fails. A list of Bluetooth identifiers grows. These observations are real, but they do not answer the same question.",
    partsToc: false,
    printable: false,
    datePublished: "2026-10-25",
    dateModified: "2026-10-31",
    lastmod: "2026-11-01",
  },
  {
    file: "deepfake-ai-payment-fraud.md",
    slug: "deepfake-ai-payment-fraud",
    title: "Deepfakes and AI Payment Fraud",
    seoTitle: "Deepfakes and AI Payment Fraud | ARTIore",
    description:
      "A video call is not authentication. Reported deepfake transfers, the approval screen, and why an AI fraud multiplier is a hypothesis, not a measured figure.",
    kicker: "Fraud",
    readingTime: "6 minutes",
    partsToc: false,
    printable: false,
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "regional-reporting-limits.md",
    slug: "regional-reporting-limits",
    title: "Regional Reporting, Not a Ranking",
    seoTitle: "Regional Reporting, Not a Ranking | ARTIore",
    description:
      "Regional figures are reporting windows, not a country ranking. A U.S. complaint baseline, European dataset shares, and the limits of thinner files.",
    kicker: "Regions",
    readingTime: "8 minutes",
    partsToc: false,
    printable: false,
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "stalkerware-safety-planning.md",
    slug: "stalkerware-safety-planning",
    title: "Stalkerware and Safety Planning",
    seoTitle: "Stalkerware and Safety Planning | ARTIore",
    description:
      "Stalkerware is usually someone with access, not a stranger. Preserve evidence and plan with an advocate. A reset is not the first step.",
    kicker: "Safety",
    readingTime: "5 minutes",
    partsToc: false,
    printable: false,
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "evidence-method.md",
    slug: "evidence-method",
    title: "Evidence Method",
    seoTitle: "Evidence Method: What Was Held Back",
    description:
      "How this investigation holds claims back. Rejected, unverified, suppressed and legally held are different states, and the ledger counts are stated.",
    kicker: "Method",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "13-global-threat-matrix.md",
    slug: "global-threat-matrix",
    title: "Global Threat Matrix",
    seoTitle: "Global Threat Matrix: 79 Digital Attack Surfaces Compared",
    description: "A comparative view of the attack surfaces examined in this investigation, by prerequisite, impact, evidence strength and protection.",
    kicker: "Threat matrix",
    partsToc: false,
    printable: false,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "14-public-safety-checklist.md",
    slug: "public-safety-checklist",
    title: "Public Safety Checklist",
    seoTitle: "Public Safety Checklist for Travellers and Phones",
    description: "A practical guide based on the investigation. It is deliberately short, and these are the controls that change outcomes.",
    kicker: "Public safety checklist",
    partsToc: false,
    printable: true,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "15-technical-glossary.md",
    slug: "technical-glossary",
    title: "Technical Glossary",
    seoTitle: "Technical Glossary: Eighty-six Plain-Language Concepts",
    description: "Eighty-six concepts used in this investigation, in plain language. Definitions describe how the term is used in this report.",
    kicker: "Glossary",
    partsToc: false,
    printable: false,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
  {
    file: "16-source-register.md",
    slug: "source-register",
    title: "Source Register",
    seoTitle: "Source Register of the Investigation's Factual Claims",
    description: "Every material factual claim in the investigation maps to an entry below. Entries record the publisher, date, type, and a link or locator.",
    kicker: "Source register",
    partsToc: false,
    printable: false,
    dateModified: "2026-11-02",
    lastmod: "2026-11-02",
  },
]

export const investigationPieces: InvestigationPiece[] = pieceSource.map((piece) => ({
  ...piece,
  path: piece.publicPath ?? `${investigationBase}/${piece.slug}`,
  headTitle: piece.seoTitle ?? piece.title,
  crumbName: piece.title,
  summary: piece.description,
}))

export const investigationSlugs = new Set(investigationPieces.map((piece) => piece.slug))

export function investigationPiece(slug: string) {
  return investigationPieces.find((piece) => piece.slug === slug)
}

export const investigationMeta = [
  {
    path: investigationHub.path,
    headTitle: investigationHub.headTitle,
    description: investigationHub.description,
    crumbName: investigationHub.crumbName,
    headline: investigationHub.title,
    datePublished: investigationPublished,
    inLanguage: 'en' as const,
    locale: 'en_US' as const,
    image: investigationOg.src,
    imageWidth: investigationOg.width,
    imageHeight: investigationOg.height,
    imageAlt: investigationOg.alt,
    lastmod: investigationHub.lastmod,
  },
  ...investigationPieces.map((piece) => {
    const og = piece.slug === 'executive-investigation' ? invisibleAttackSurfaceOg : investigationOg
    return {
      path: piece.path,
      headTitle: piece.headTitle,
      description: piece.description,
      crumbName: piece.crumbName,
      headline: piece.title,
      datePublished: piece.datePublished ?? investigationPublished,
      dateModified: piece.dateModified,
      lastmod: piece.lastmod,
      inLanguage: 'en' as const,
      locale: 'en_US' as const,
      image: og.src,
      imageWidth: og.width,
      imageHeight: og.height,
      imageAlt: og.alt,
      faqs: investigationFaqs[piece.slug],
    }
  }),
]
