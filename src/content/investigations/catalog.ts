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

export const investigationPublished = '2026-10-26'

export const investigationHub = {
  path: investigationBase,
  title: 'The Invisible Attack Surface',
  headTitle:
    'The Invisible Attack Surface: How everyday technology can compromise privacy, identity and financial security',
  description:
    'How everyday technology can compromise privacy, identity and financial security. ARTIore Research Desk, Global Digital Exposure Investigation, version 1.0.',
  crumbName: 'The Invisible Attack Surface',
}

export type InvestigationPiece = {
  file: string
  slug: string
  path: string
  title: string
  headTitle: string
  description: string
  crumbName: string
  summary: string
  kicker?: string
  readingTime?: string
  partsToc: boolean
  printable: boolean
}

const pieceSource: Omit<InvestigationPiece, 'path' | 'headTitle' | 'crumbName' | 'summary'>[] = [

  {
    file: "00-executive-investigation.md",
    slug: "executive-investigation",
    title: "The Invisible Attack Surface",
    description: "The purpose of this report is not to convince you that you are under attack. It is to make sure you never mistake unfamiliarity with safety.",
    kicker: "Executive investigation",
    readingTime: "approx. 105 minutes",
    partsToc: true,
    printable: false,
  },
  {
    file: "01-password-protected-wifi-not-secure.md",
    slug: "password-protected-wifi-not-secure",
    title: "Why a Password-Protected Wi-Fi Network Is Not a Secure Network",
    description: "A Wi-Fi password proves you may join a network — not that the network is trustworthy. Here is what WPA2/WPA3 actually protects, how evil-twin hotspots work, and what to do.",
    kicker: "Networks",
    readingTime: "6 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "02-hotel-wifi-security-guide.md",
    slug: "hotel-wifi-security-guide",
    title: "Hotel Wi-Fi Security: What Travellers Should Actually Do",
    description: "Hotels concentrate transients, shared networks and payment data. A practical, evidence-based guide to hotel Wi-Fi risks, captive portals, booking scams and room-lock security.",
    kicker: "Travel",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "03-dns-hijacking-explained.md",
    slug: "dns-hijacking-explained",
    title: "DNS Hijacking Explained: The Invisible Switch That Decides Where You Go",
    description: "DNS decides which server your device connects to. Learn how DNS hijacking, cache poisoning and rogue resolvers work, what HTTPS still protects, and how to check your own settings.",
    kicker: "Networks",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "04-bluetooth-ble-tracking.md",
    slug: "bluetooth-ble-tracking",
    title: "Bluetooth and BLE Tracking: What Your Devices Broadcast",
    description: "Bluetooth Low Energy devices advertise constantly. Learn how BLE tracking works, what address randomisation does, which vulnerabilities matter, and when a log entry is not evidence.",
    kicker: "Wireless",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "05-android-accessibility-service-malware.md",
    slug: "android-accessibility-service-malware",
    title: "Android Accessibility Service Malware: The Permission That Can Read Your Screen",
    description: "Android accessibility services can read the screen and tap for you — which is why banking trojans abuse them. How the abuse works, which families are documented, and how to audit your device.",
    kicker: "Mobile",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "06-iphone-zero-click-spyware.md",
    slug: "iphone-zero-click-spyware",
    title: "iPhone Zero-Click Spyware: What Is Proven, What Lockdown Mode Does",
    description: "iPhones are hard to hack, not immune. A documented look at zero-click exploit chains, Apple Threat Notifications, Lockdown Mode, and how to judge the evidence.",
    kicker: "Mobile",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "07-whatsapp-encryption-limits.md",
    slug: "whatsapp-encryption-limits",
    title: "WhatsApp Encryption Limits: What End-to-End Encryption Does Not Protect",
    description: "WhatsApp encrypts message content, not your account, your endpoint or your metadata. A clear breakdown of documented vulnerabilities, backups, linked devices and SIM swaps.",
    kicker: "Messaging",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "08-pegasus-predator-commercial-spyware.md",
    slug: "pegasus-predator-commercial-spyware",
    title: "Pegasus, Predator and Commercial Spyware: What Is Actually Proven",
    description: "A forensic, evidence-led guide to mercenary spyware: what Pegasus and Predator can do, who has been targeted, what courts and regulators have found, and what remains unknown.",
    kicker: "Surveillance",
    readingTime: "8 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "09-cloud-photo-account-takeover.md",
    slug: "cloud-photo-account-takeover",
    title: "Cloud Photo Security: How Accounts and Tokens Get Stolen",
    description: "Cloud photos are rarely stolen by breaking encryption. They are taken through accounts, sessions and sharing links. How takeover works, what attackers see, and how to close the paths.",
    kicker: "Cloud",
    readingTime: "6 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "10-crypto-wallet-drainers.md",
    slug: "crypto-wallet-drainers",
    title: "Crypto Wallet Drainers: Seed Phrases, Approvals and Address Poisoning",
    description: "Blockchains are cryptographically secure; wallets are not. How drainer kits, malicious approvals, address poisoning and fake apps steal funds — and the verification habits that stop them.",
    kicker: "Finance",
    readingTime: "7 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "11-sim-swap-account-takeover.md",
    slug: "sim-swap-account-takeover",
    title: "SIM Swap and Account Takeover: When Your Phone Number Becomes the Weakest Link",
    description: "SIM swap attacks turn your phone number into an attacker's key. How the fraud works, why SMS second factors fail, and how to move your accounts to phishing-resistant authentication.",
    kicker: "Identity",
    readingTime: "6 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "12-hotel-keycard-lock-security.md",
    slug: "hotel-keycard-lock-security",
    title: "Hotel Keycard Locks: The Unsaflok Case and What It Means for Guests",
    description: "Three million hotel doors used a lock system with forgeable keycards. What the Unsaflok research proved, what it did not prove, and how hotel access systems fit the digital attack surface.",
    kicker: "Physical security",
    readingTime: "5 minutes",
    partsToc: false,
    printable: false,
  },
  {
    file: "13-global-threat-matrix.md",
    slug: "global-threat-matrix",
    title: "Global Threat Matrix",
    description: "A comparative view of the attack surfaces examined in this investigation. The matrix is designed for editors, policy teams, and security trainers who need to compare risks without collapsing them into a single \"danger\" score.",
    kicker: "Threat matrix",
    partsToc: false,
    printable: false,
  },
  {
    file: "14-public-safety-checklist.md",
    slug: "public-safety-checklist",
    title: "Public Safety Checklist",
    description: "A practical guide based on the investigation. It is deliberately short. A list of a hundred items is a way of saying \"this is not your problem\"; these are the controls that change outcomes.",
    kicker: "Public safety checklist",
    partsToc: false,
    printable: true,
  },
  {
    file: "15-technical-glossary.md",
    slug: "technical-glossary",
    title: "Technical Glossary",
    description: "Eighty-six concepts used in this investigation, in plain language. Definitions describe how the term is used in this report; they are not exhaustive specifications.",
    kicker: "Glossary",
    partsToc: false,
    printable: false,
  },
  {
    file: "16-source-register.md",
    slug: "source-register",
    title: "Source Register",
    description: "Every material factual claim in the investigation maps to an entry below. Entries record the publisher, publication date, type, what the source supports, and a link or locator.",
    kicker: "Source register",
    partsToc: false,
    printable: false,
  },
]

export const investigationPieces: InvestigationPiece[] = pieceSource.map((piece) => ({
  ...piece,
  path: `${investigationBase}/${piece.slug}`,
  headTitle: piece.title,
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
  },
  ...investigationPieces.map((piece) => ({
    path: piece.path,
    headTitle: piece.headTitle,
    description: piece.description,
    crumbName: piece.crumbName,
    headline: piece.title,
    datePublished: investigationPublished,
    inLanguage: 'en' as const,
    locale: 'en_US' as const,
    image: investigationOg.src,
    imageWidth: investigationOg.width,
    imageHeight: investigationOg.height,
    imageAlt: investigationOg.alt,
  })),
]
