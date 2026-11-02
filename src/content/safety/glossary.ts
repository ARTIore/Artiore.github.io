export type GlossaryTerm = {
  id: string
  term: string
  meaning: string
}

/** Short meanings for this safety section. Not a legal dictionary. */
export const glossary = [
  {
    id: 'phishing',
    term: 'Phishing',
    meaning: 'A fake message that tries to make you click, pay, or type a password. It may look like a bank, a delivery company, or someone you know.',
  },
  {
    id: 'mfa',
    term: 'MFA',
    meaning: 'Short for multi-factor authentication. It means a second sign-in step after the password, such as an app prompt or a fingerprint. Do not read a one-time code to someone who called you.',
  },
  {
    id: 'passkey',
    term: 'Passkey',
    meaning: 'A sign-in saved on your device. You use a fingerprint, face, or device PIN instead of typing a password into a page.',
  },
  {
    id: 'bluetooth',
    term: 'Bluetooth',
    meaning: 'A short-range radio. Phones use it for headphones, cars, watches, and small tags.',
  },
  {
    id: 'ble',
    term: 'BLE',
    meaning: 'Bluetooth Low Energy. A low-power kind of Bluetooth. Tags and sensors use it to announce that they are nearby. Announcing is not the same as connecting.',
  },
  {
    id: 'tracker-alert',
    term: 'Unknown-tracker alert',
    meaning: 'A warning from the phone that a Bluetooth tag you do not own may be moving with you. Treat that warning as a safety signal. A name that only shows up in a list of nearby devices is different, and is not proof the phone is infected.',
  },
  {
    id: 'private-dns',
    term: 'Private DNS',
    meaning: 'A phone setting that chooses which service turns website names into addresses. If you did not turn it on, do not change it until you know why it is set.',
  },
  {
    id: 'vpn',
    term: 'VPN',
    meaning: 'A tunnel for internet traffic. A VPN you chose can hide your traffic from the local network. A VPN you did not install can see where you go.',
  },
  {
    id: 'screen-lock',
    term: 'Screen lock',
    meaning: 'A PIN, password, pattern, or fingerprint that stops someone from opening the device when the screen is asleep. A swipe with no secret is not a lock.',
  },
  {
    id: 'filevault',
    term: 'FileVault',
    meaning: 'Mac disk encryption. It keeps the files on the drive unreadable without the login password or the recovery key. Store the recovery key somewhere that is not only on that Mac.',
  },
  {
    id: 'bitlocker',
    term: 'BitLocker',
    meaning: 'Windows disk encryption. Home editions often call the simple switch Device encryption. Pro editions may say BitLocker. The recovery key should not live only on that computer.',
  },
  {
    id: 'safety-check',
    term: 'Safety Check',
    meaning: 'An iPhone tool in Settings, under Privacy & Security. It reviews who can see your location and which devices are on your Apple Account. Stopping sharing can notify the other person.',
  },
  {
    id: 'stolen-device',
    term: 'Stolen Device Protection',
    meaning: 'An iPhone setting that makes it harder for a thief who knows your passcode to change the passcode or the Apple Account. It uses Face ID or Touch ID, and sometimes a waiting period.',
  },
  {
    id: 'stalkerware',
    term: 'Stalkerware',
    meaning: 'Hidden software, often put on a device by someone who already knows you. It can watch messages, location, or passwords. Removing it can tell that person you found it.',
  },
  {
    id: 'management-profile',
    term: 'Management profile',
    meaning: 'A settings package that can control a device. Schools and workplaces use these. Someone who wants to watch you can install one too. Removing it can send them a notice.',
  },
  {
    id: 'seed-phrase',
    term: 'Seed phrase',
    meaning: 'The secret word list for a crypto wallet. Anyone who has the words can take what the wallet holds. No helper needs you to read it aloud.',
  },
  {
    id: 'find-my',
    term: 'Find My',
    meaning: 'Apple’s way to locate, lock, or erase an Apple device. Use it from another Apple device you trust, or from icloud.com/find. It has to be turned on before the device is lost.',
  },
  {
    id: 'find-hub',
    term: 'Find Hub',
    meaning: 'Google’s way to locate, lock, or erase an Android device from another device you trust. It used to be called Find My Device.',
  },
] as const satisfies readonly GlossaryTerm[]

export function glossaryTerms(ids: readonly string[]) {
  return ids.map((id) => {
    const term = glossary.find((item) => item.id === id)
    if (!term) throw new Error(`Missing glossary term ${id}`)
    return term
  })
}
