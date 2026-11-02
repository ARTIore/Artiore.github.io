/** Public sources checked on 2 November 2026. A link is not proof by itself. */

export const sourcesChecked = '2026-11-02'

export type SourceLink = {
  href: string
  label: string
  publisher: string
  region: 'Canada' | 'United States' | 'International' | 'On this site'
  note?: string
}

export const sources = {
  getCyberSafe: {
    href: 'https://www.getcybersafe.gc.ca/en',
    label: 'Get Cyber Safe',
    publisher: 'Government of Canada',
    region: 'Canada',
  },
  getCyberSafeAccounts: {
    href: 'https://www.getcybersafe.gc.ca/en/secure-your-accounts',
    label: 'Get Cyber Safe: Secure your accounts',
    publisher: 'Government of Canada',
    region: 'Canada',
  },
  getCyberSafeDevices: {
    href: 'https://www.getcybersafe.gc.ca/en/secure-your-devices',
    label: 'Get Cyber Safe: Secure your devices',
    publisher: 'Government of Canada',
    region: 'Canada',
  },
  cyberCentre: {
    href: 'https://www.cyber.gc.ca/en',
    label: 'Canadian Centre for Cyber Security',
    publisher: 'Communications Security Establishment',
    region: 'Canada',
  },
  cyberCentreBasics: {
    href: 'https://www.cyber.gc.ca/en/guidance/five-practical-ways-make-yourself-cybersafe',
    label: 'Five practical ways to make yourself cybersafe',
    publisher: 'Canadian Centre for Cyber Security',
    region: 'Canada',
    note: 'The Cyber Centre says this guide still applies. The page layout does not meet the current Government of Canada web standard.',
  },
  cyberCentreIdentity: {
    href: 'https://www.cyber.gc.ca/en/guidance/protecting-yourself-identity-theft-online-itsap00033',
    label: 'Protecting yourself from identity theft online',
    publisher: 'Canadian Centre for Cyber Security',
    region: 'Canada',
  },
  cyberCentreSmishing: {
    href: 'https://www.cyber.gc.ca/en/guidance/smishing-protect-yourself-sms-attacks-itsap00103',
    label: 'Smishing: protect yourself from text-message attacks',
    publisher: 'Canadian Centre for Cyber Security',
    region: 'Canada',
  },
  cafcHome: {
    href: 'https://antifraudcentre-centreantifraude.ca/index-eng.htm',
    label: 'Canadian Anti-Fraud Centre',
    publisher: 'Canadian Anti-Fraud Centre',
    region: 'Canada',
  },
  cafcReport: {
    href: 'https://antifraudcentre-centreantifraude.ca/report-signalez-eng.htm',
    label: 'Report fraud to the Canadian Anti-Fraud Centre',
    publisher: 'Canadian Anti-Fraud Centre',
    region: 'Canada',
    note: 'Phone 1-888-495-8501. The Centre says it answers Monday to Friday, 10:00 a.m. to 4:45 p.m. Eastern time, and is closed on holidays. It does not call people to ask for money.',
  },
  cisaPhishing: {
    href: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing',
    label: 'Recognize and report phishing',
    publisher: 'CISA',
    region: 'United States',
  },
  cisaMfa: {
    href: 'https://www.cisa.gov/secure-our-world/turn-mfa',
    label: 'Turn on MFA',
    publisher: 'CISA',
    region: 'United States',
  },
  cisaPasswords: {
    href: 'https://www.cisa.gov/secure-our-world/use-strong-passwords',
    label: 'Use strong passwords',
    publisher: 'CISA',
    region: 'United States',
  },
  cisaUpdates: {
    href: 'https://www.cisa.gov/secure-our-world/update-software',
    label: 'Update software',
    publisher: 'CISA',
    region: 'United States',
  },
  cisaWifi: {
    href: 'https://www.cisa.gov/resources-tools/resources/best-practices-using-public-wi-fi-tip-card',
    label: 'Best practices for public Wi-Fi',
    publisher: 'CISA',
    region: 'United States',
  },
  cafcPhishing: {
    href: 'https://antifraudcentre-centreantifraude.ca/scams-fraudes/phishing-hameconnage-eng.htm',
    label: 'Phishing',
    publisher: 'Canadian Anti-Fraud Centre',
    region: 'Canada',
    note: 'Official guidance on phishing by email and text.',
  },
  identityTheftUs: {
    href: 'https://www.identitytheft.gov/',
    label: 'IdentityTheft.gov',
    publisher: 'U.S. Federal Trade Commission',
    region: 'United States',
    note: 'For people in the United States. It is not a Canadian reporting service.',
  },
  ic3: {
    href: 'https://www.ic3.gov/',
    label: 'Internet Crime Complaint Center',
    publisher: 'U.S. FBI',
    region: 'United States',
    note: 'For internet crime reports in the United States. Canadians should start with the Canadian Anti-Fraud Centre.',
  },
  appleTrackers: {
    href: 'https://support.apple.com/guide/personal-safety/detect-unwanted-trackers-ips139b15fd9/web',
    label: 'Detect unwanted trackers',
    publisher: 'Apple',
    region: 'International',
  },
  appleSafetyCheck: {
    href: 'https://support.apple.com/guide/personal-safety/safety-check-iphone-ios-16-ips2aad835e1/web',
    label: 'Safety Check on iPhone',
    publisher: 'Apple',
    region: 'International',
  },
  appleStolenDevice: {
    href: 'https://support.apple.com/guide/iphone/use-stolen-device-protection-iph17105538b/ios',
    label: 'Stolen Device Protection',
    publisher: 'Apple',
    region: 'International',
  },
  appleFindMy: {
    href: 'https://support.apple.com/en-us/101593',
    label: 'How to find a lost iPhone or iPad',
    publisher: 'Apple',
    region: 'International',
  },
  appleFileVault: {
    href: 'https://support.apple.com/guide/mac-help/protect-data-on-your-mac-with-filevault-mh11785/mac',
    label: 'Protect data on your Mac with FileVault',
    publisher: 'Apple',
    region: 'International',
  },
  googleTrackers: {
    href: 'https://support.google.com/android/answer/13658562',
    label: 'Find unknown trackers',
    publisher: 'Google',
    region: 'International',
  },
  googleFindHub: {
    href: 'https://support.google.com/android/answer/6160491',
    label: 'Find, secure, or erase a lost Android device',
    publisher: 'Google',
    region: 'International',
  },
  windowsEncryption: {
    href: 'https://support.microsoft.com/en-us/windows/security/encryption/device-encryption-in-windows',
    label: 'Device encryption in Windows',
    publisher: 'Microsoft',
    region: 'International',
  },
  windowsFind: {
    href: 'https://support.microsoft.com/en-us/accounts-billing/security/find-and-lock-a-lost-windows-device',
    label: 'Find and lock a lost Windows device',
    publisher: 'Microsoft',
    region: 'International',
  },
  stalkerware: {
    href: '/investigations/digital-exposure/stalkerware-safety-planning/',
    label: 'Stalkerware and safety planning',
    publisher: 'ARTIore',
    region: 'On this site',
  },
  bluetooth: {
    href: '/investigations/digital-exposure/bluetooth-ble-tracking/',
    label: 'Bluetooth and BLE tracking',
    publisher: 'ARTIore',
    region: 'On this site',
  },
  accessibility: {
    href: '/investigations/digital-exposure/android-accessibility-service-malware/',
    label: 'Android accessibility and harmful apps',
    publisher: 'ARTIore',
    region: 'On this site',
  },
  evidenceMethod: {
    href: '/investigations/digital-exposure/evidence-method/',
    label: 'Evidence method',
    publisher: 'ARTIore',
    region: 'On this site',
  },
  academy: {
    href: '/academy/',
    label: 'Digital safety lab',
    publisher: 'ARTIore',
    region: 'On this site',
  },
} as const satisfies Record<string, SourceLink>
