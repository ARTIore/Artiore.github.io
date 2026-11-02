/** Evidence labels for the academy. Not a public spec page. */
export const academyEvidenceSpec = {
  schemaVersion: '1.1',
  grades: ['Confirmed', 'Demonstrated', 'Plausible', 'Unsupported'],
  notes: ['Belief / interpretation', 'Corrected'],
} as const

export const evidenceGrades = [
  {
    name: 'Confirmed',
    meaning:
      'Documented in the wild. Established by a primary source: a vendor advisory, court record, regulator, official incident report, or a forensic investigation with published indicators.',
    example: 'A vendor advisory names the affected versions and the fix.',
  },
  {
    name: 'Demonstrated',
    meaning:
      'Proven in research, with no confirmed real-world exploitation. Reproduced by credible security researchers, often in a lab or limited field test, but not shown to be used at scale in the wild.',
    example: 'A laboratory demonstration of a protocol flaw, without a documented incident.',
  },
  {
    name: 'Plausible',
    meaning:
      'Technically coherent and consistent with known behaviour, but lacking public evidence of actual exploitation.',
    example: 'A path that fits known behaviour and has not been shown in a case.',
  },
  {
    name: 'Unsupported',
    meaning: 'Widely repeated, but no reliable evidence found. We say so explicitly.',
    example: 'An unfamiliar Bluetooth name, by itself, does not establish that someone is tracking you.',
  },
] as const

export const evidenceNotes = [
  {
    name: 'Belief / interpretation',
    meaning:
      'A religious, spiritual or philosophical view, kept distinct from empirical evidence. Scripture, translation, commentary and reflection stay in this note. They are not a grade.',
  },
  {
    name: 'Corrected',
    meaning:
      'A claim changed after review, with the prior wording preserved. This is a note about the record, not a grade. The dated list is the corrections log.',
    href: '/investigations/digital-exposure/#corrections',
  },
] as const

export const layers = [
  [
    'Clarity',
    'Explain what is known in plain language.',
    'A family receives an unfamiliar security alert. First explain what the message says without assuming an attack.',
  ],
  [
    'Reasoning',
    'Analyze evidence, alternatives and trade-offs.',
    'Compare a legitimate notification, a phishing attempt and a false alarm, and say what would distinguish them.',
  ],
  [
    'Archives',
    'Keep traceable source records and revisions.',
    'Record the alert text without private details, the vendor documentation, and the date it was checked.',
  ],
  [
    'Derivatives',
    'Produce accessible, useful outputs.',
    'A one-page safety checklist can be guidance. It is not a forensic finding.',
  ],
  [
    'AI in the margin',
    'Offer quiet assistance while preserving human choice.',
    'Present options without forcing a conclusion, asking for unnecessary data, or sending anything off the page.',
  ],
  [
    'Human upliftment',
    'Measure whether people gain knowledge and agency.',
    'A reader can check sign-in activity and recognise a link they should not open.',
  ],
] as const

export const lessons = [
  {
    id: 'LESSON-01',
    title: 'Recognize phishing',
    simple: 'A scam message may pretend to be a company or person you trust. Do not rush to open its link.',
    detail:
      'Impersonation can arrive by email, text, a social app or a call. A sender name or a screenshot does not prove the message is real. Check through a channel you already know.',
    action: 'Open the service from a bookmark or an address you type, not from the link in the message.',
    limit: 'Not every unexpected message is malicious.',
    source: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing',
    sourceLabel: 'CISA: Recognize and report phishing',
    question: 'Which is safer when a message says your bank account is locked?',
    answers: ['Open the urgent link immediately', 'Visit the bank using a known official channel'],
    correct: 1,
  },
  {
    id: 'LESSON-02',
    title: 'Protect accounts with a second step',
    simple: 'A second sign-in step makes a stolen password less useful.',
    detail:
      'Turn on multi-factor authentication where the service offers it, and prefer a method that does not depend on a code you can be talked into reading aloud. Never give a one-time code to someone who contacted you.',
    action: 'Turn on a second step for email, financial accounts and the social account you use most.',
    limit: 'A second step reduces risk. It does not make an account impossible to compromise.',
    source: 'https://www.cisa.gov/secure-our-world/turn-mfa',
    sourceLabel: 'CISA: Turn on MFA',
    question: 'Who should receive your one-time sign-in code?',
    answers: ['A caller claiming to be technical support', 'Only the sign-in you started yourself'],
    correct: 1,
  },
  {
    id: 'LESSON-03',
    title: 'Use strong unique passwords',
    simple: 'Different accounts should not share the same password.',
    detail:
      'A password manager can create and store long, unique passwords. On services that support them, a passkey can resist a fake login page.',
    action: 'Replace reused passwords, starting with the email account that can reset the others.',
    limit: 'A strong password does not stop malware, a fake page, or abuse of account recovery.',
    source: 'https://www.cisa.gov/secure-our-world/use-strong-passwords',
    sourceLabel: 'CISA: Use strong passwords',
    question: 'Which practice reduces the risk of one stolen password opening many accounts?',
    answers: ['One memorable password for every site', 'A unique password for each account, stored in a password manager'],
    correct: 1,
  },
  {
    id: 'LESSON-04',
    title: 'Keep software updated',
    simple: 'Updates often repair security weaknesses.',
    detail:
      'Turn on updates from the operating system, the browser and the app store you already use. Do not install a surprise pop-up that is not part of those settings.',
    action: 'Check the phone and the browser for a pending update.',
    limit: 'Current software is not a guarantee against every exploit.',
    source: 'https://www.cisa.gov/secure-our-world/update-software',
    sourceLabel: 'CISA: Update software',
    question: 'Where should you get a device security update?',
    answers: ['A random warning pop-up', 'Official system settings or the vendor’s own channel'],
    correct: 1,
  },
  {
    id: 'LESSON-05',
    title: 'Use public Wi-Fi carefully',
    simple: 'A Wi-Fi network name alone does not prove the network is legitimate.',
    detail:
      'Confirm the network name with venue staff. Prefer HTTPS. Do not type a password into a sign-in page you did not expect. Turn off automatic joining for networks you do not know.',
    action: 'Review remembered Wi-Fi networks and turn off automatic joining for ones you do not recognise.',
    limit: 'Joining public Wi-Fi is not proof that the phone is being watched or that spyware is installed.',
    source: 'https://www.cisa.gov/resources-tools/resources/best-practices-using-public-wi-fi-tip-card',
    sourceLabel: 'CISA: Best practices for using public Wi-Fi',
    question: 'What can you conclude from a strange Wi-Fi name?',
    answers: ['The phone is definitely compromised', 'The name alone cannot establish that'],
    correct: 1,
  },
] as const

export const referenceLinks = [
  {
    id: 'FRAMEWORK',
    title: 'Six-layer framework',
    href: '/how-it-works/',
  },
  {
    id: 'METHOD',
    title: 'Evidence method',
    href: '/investigations/digital-exposure/evidence-method/',
  },
  {
    id: 'REGISTER',
    title: 'Source register',
    href: '/investigations/digital-exposure/source-register/',
  },
  {
    id: 'CORRECTIONS',
    title: 'Corrections log',
    href: '/investigations/digital-exposure/#corrections',
  },
  {
    id: 'CHECKLIST',
    title: 'Public safety checklist',
    href: '/investigations/digital-exposure/public-safety-checklist/',
  },
  {
    id: 'LESSONS 1–4',
    title: 'CISA Secure Our World',
    href: 'https://www.cisa.gov/secure-our-world',
  },
  {
    id: 'LESSON 5',
    title: 'CISA public Wi-Fi tip card',
    href: 'https://www.cisa.gov/resources-tools/resources/best-practices-using-public-wi-fi-tip-card',
  },
] as const
