import { sources, type SourceLink } from './sources'

export type CheckItem = {
  id: string
  title: string
  steps: string
  limit: string
  caution?: string
}

export type PlatformGuide = {
  id: 'android' | 'ios' | 'windows' | 'mac'
  title: string
  intro: string
  checks: readonly CheckItem[]
  sources: readonly SourceLink[]
}

export type IncidentCard = {
  id: string
  name: string
  response: string
}

const removalCaution =
  'If someone who could hurt you installed this, do not remove it on a device they can see. Read the safety warning on this page first.'

const sharedChecks: readonly CheckItem[] = [
  {
    id: 'screen-lock',
    title: 'Turn on a screen lock',
    steps:
      'Set a PIN, password, or fingerprint, and make the device ask for it as soon as the screen sleeps. On a phone, a swipe with no secret is not a lock. On a computer, require the password when the computer wakes.',
    limit: 'A lock stops a casual opener. It does not stop someone who already knows the PIN, and it does not remove software that is already installed.',
  },
  {
    id: 'updates',
    title: 'Install system updates',
    steps:
      'Use the device’s own settings or the official store. Turn on updates from the maker. Do not install a surprise pop-up that is not part of those settings.',
    limit: 'Updates fix many known holes. They do not make a device impossible to attack.',
  },
  {
    id: 'second-step',
    title: 'Add a second sign-in step',
    steps:
      'Turn on MFA, which means a second step after the password, for email, banking, and the social account you use most. An app prompt or a passkey is harder to trick you into sharing than a text code. Never read a one-time code to a caller.',
    limit: 'A second step helps when a password is stolen. It does not help if someone already sitting at the unlocked device approves the prompt.',
  },
  {
    id: 'recovery-path',
    title: 'Check how your accounts can be recovered',
    steps:
      'Open the account from the official app or a bookmark. Confirm the recovery email is still yours, with its own password and a second sign-in step. Confirm the recovery phone is a number you still have. Google says a change to a recovery phone may take up to 7 days, and says not to use a Google Voice number as that phone. Keep backup codes offline, with other important papers, not only in the inbox that can be reset. Review devices and sessions that are signed in, and sign out of ones you do not recognise. Apple’s two-factor step uses a code on a trusted device or a trusted phone number, so that number has to be one you still control.',
    limit: 'These checks show how the account can be taken back. They do not prove nobody else already has access. The recovery page and the SIM-swap page cover what to do after something has already gone wrong.',
  },
  {
    id: 'apps',
    title: 'Review apps and permissions',
    steps:
      'Remove apps you do not recognize, after you read the safety warning. Check camera, microphone, location, and notification access. A flashlight does not need to read your messages.',
    limit: 'An unfamiliar name is a reason to look. It is not proof the app is malicious. Do not turn off an accessibility tool you need.',
  },
  {
    id: 'sessions',
    title: 'Check where accounts are signed in',
    steps:
      'Open the account from the official app or a bookmark. Review devices and recent security activity. Sign out sessions you do not recognize.',
    limit: 'A location on a security page can be wrong. One odd session is a reason to secure the account, not proof of who did it.',
  },
  {
    id: 'backup',
    title: 'Know how to restore a backup',
    steps:
      'Make a current backup of photos and files you cannot replace. Confirm you know the account that holds it. Keep recovery codes somewhere that is not only on this device.',
    limit: 'A backup can also save harmful software or a file you did not mean to keep. It is not a cleanup tool.',
  },
]

export const platforms: readonly PlatformGuide[] = [
  {
    id: 'android',
    title: 'Android',
    intro: 'Menu names differ on Pixel, Samsung, and other phones. If a menu is missing, use the settings search box.',
    checks: [
      ...sharedChecks,
      {
        id: 'play-protect',
        title: 'Look at Play Protect',
        steps: 'Open the Play Store, tap your profile picture, then Play Protect, and read the scan status. This is a store check, not a full investigation of the phone.',
        limit: 'A clear Play Protect result does not prove the phone is safe.',
      },
      {
        id: 'special-access',
        title: 'Review powerful app access',
        steps:
          'In Settings, review Accessibility, Device admin apps, Notification access, and Install unknown apps. A tool you use for vision or movement may rightly be there.',
        limit: 'An extra permission is a warning sign when the app does not need it.',
        caution: removalCaution,
      },
      {
        id: 'connections',
        title: 'Review Wi-Fi, Bluetooth, VPN, and Private DNS',
        steps:
          'Forget Wi-Fi networks you do not use. Remove Bluetooth devices you do not recognize, but do not pair with a strange one to “find out.” If a VPN or Private DNS is on and you did not set it, ask someone you trust before you change it. Private DNS chooses who looks up website names for the phone.',
        limit: 'An unknown name is not proof of an attack.',
      },
      {
        id: 'tracker-alerts',
        title: 'Turn on unknown-tracker alerts',
        steps:
          'Go to Settings, then Safety & emergency, then Unknown tracker alerts. If the phone warns that a tracker is moving with you, open the alert and follow it. Do not ignore it. You can also run Scan now.',
        limit: 'You can also see an alert if you are borrowing someone’s bag or traveling with a person who has a tag. The alert still deserves a look.',
      },
      {
        id: 'encryption',
        title: 'Use a lock so the phone can encrypt files',
        steps:
          'On most current Android phones, setting a PIN or password is what lets the phone encrypt the files on the device. Use a lock you can remember. There is no separate FileVault switch on a typical phone.',
        limit: 'Encryption does not help while the phone is unlocked in someone else’s hands.',
      },
    ],
    sources: [
      sources.googleTrackers,
      sources.googleFindHub,
      sources.getCyberSafeDevices,
      sources.accessibility,
      sources.googleRecovery,
      sources.googleBackupCodes,
      sources.googleDevices,
      sources.recoveryCenter,
      sources.simSwap,
    ],
  },
  {
    id: 'ios',
    title: 'iPhone or iPad',
    intro: 'Paths differ a little between iOS and iPadOS versions. Use the settings search if a name has moved.',
    checks: [
      ...sharedChecks,
      {
        id: 'privacy',
        title: 'Review privacy permissions',
        steps: 'Open Settings, then Privacy & Security. Look at Location, Microphone, Camera, and Bluetooth. Turn off access an app does not need.',
        limit: 'A permission that was used is not proof it was misused.',
      },
      {
        id: 'safety-check',
        title: 'Learn Safety Check before you need it',
        steps:
          'Safety Check is in Settings, then Privacy & Security, then Safety Check. It can review sharing, devices on your Apple Account, and app permissions. Stopping a share can notify the other person. There is a Quick Exit control if you need to leave the screen quickly.',
        limit: 'A work or school restriction, or Stolen Device Protection, can change which buttons you see.',
        caution: removalCaution,
      },
      {
        id: 'stolen-device',
        title: 'Consider Stolen Device Protection',
        steps:
          'Open Settings, then Face ID & Passcode, or Touch ID & Passcode. Then open Stolen Device Protection. It asks for Face ID or Touch ID, not only the passcode, before sensitive changes. Away from familiar places it can also add a waiting period.',
        limit: 'You need Face ID or Touch ID set up before the switch appears. It does not find a stolen phone by itself. Find My does that.',
      },
      {
        id: 'tracker-alerts',
        title: 'Allow unwanted-tracking alerts',
        steps:
          'To get alerts, keep Location Services on, turn Find My iPhone on under Location Services and System Services, keep Bluetooth on, and allow Tracking Notifications. If you get an unwanted-tracking alert, tap it. You can play a sound to help find the tag. If you feel unsafe, go to a public place and contact police.',
        limit: 'Alerts depend on the phone’s software and on the kind of tag. No alert does not prove there is no tag.',
      },
      {
        id: 'profiles',
        title: 'Look for unexpected profiles',
        steps:
          'Open Settings, then General, then VPN & Device Management. A work or school profile can be expected. A profile you do not recognize is a serious warning.',
        limit: 'A managed phone may stop you from removing a work profile. That is not, by itself, stalkerware.',
        caution: removalCaution,
      },
      {
        id: 'find-my',
        title: 'Turn on Find My before the device is lost',
        steps:
          'Open Settings, tap your name, then Find My. Turn on Find My iPhone or iPad. You cannot mark a lost device from the web if this was off when it disappeared.',
        limit: 'Find My can show the device to people in your Family Sharing group. Turn that on only if you want them to have it.',
      },
      {
        id: 'advanced-data',
        title: 'Decide about Advanced Data Protection',
        steps:
          'Advanced Data Protection is optional. Apple says it protects the majority of iCloud data, including iCloud Backup, Photos and Notes, with end-to-end encryption. iCloud Mail is not end-to-end encrypted, because it has to work with ordinary email. Contacts and Calendars are not end-to-end encrypted, because the standards they use do not provide it. Before you turn it on, Apple guides you to set a recovery contact or a recovery key. After that, Apple says it does not have the keys to recover that data for you. Managed Apple Accounts and child accounts are not eligible. The mobile exposure page has the longer account.',
        limit: 'Turning it on does not encrypt Mail, Contacts or Calendars. Losing the recovery contact or key, and the device passcode, can mean the protected data cannot be restored.',
      },
    ],
    sources: [
      sources.appleSafetyCheck,
      sources.appleStolenDevice,
      sources.appleTrackers,
      sources.appleFindMy,
      sources.appleIcloudSecurity,
      sources.appleAdvancedData,
      sources.appleTwoFactor,
      sources.googleRecovery,
      sources.googleBackupCodes,
      sources.googleDevices,
      sources.mobileExposure,
      sources.recoveryCenter,
      sources.simSwap,
    ],
  },
  {
    id: 'windows',
    title: 'Windows',
    intro: 'These paths match current Windows 10 and Windows 11 settings. A work computer may hide some switches.',
    checks: [
      ...sharedChecks,
      {
        id: 'windows-security',
        title: 'Check Windows Security',
        steps: 'Open Windows Security. Look at Virus & threat protection and Firewall. Leave the firewall on unless you know why it is off.',
        limit: 'A clean scan cannot rule out every threat.',
      },
      {
        id: 'startup',
        title: 'Review startup apps',
        steps: 'Open Settings, then Apps, then Startup. Turn off apps you do not want running at sign-in. Some unfamiliar names are part of Windows or a printer.',
        limit: 'An unknown name is not proof of compromise.',
      },
      {
        id: 'encryption',
        title: 'Turn on device encryption',
        steps:
          'Open Settings, then Privacy & security, then Device encryption. If you do not see it, the PC may not support it, or you may not be an administrator. On Windows Pro this protection is BitLocker. When it is on, a recovery key is saved to the Microsoft account or the work account. Keep a copy that is not only on that PC.',
        limit: 'A local account does not turn this on by itself. Encryption does not stop someone who knows the Windows password.',
      },
      {
        id: 'remote',
        title: 'Turn off remote access you do not use',
        steps: 'Review Remote Desktop and remote-assistance settings. Turn off the ones you did not mean to enable.',
        limit: 'A workplace PC may need remote access. Ask the administrator before you change a managed computer.',
        caution: removalCaution,
      },
    ],
    sources: [
      sources.windowsEncryption,
      sources.windowsFind,
      sources.getCyberSafeDevices,
      sources.cyberCentreBasics,
      sources.googleRecovery,
      sources.googleBackupCodes,
      sources.googleDevices,
      sources.recoveryCenter,
      sources.simSwap,
    ],
  },
  {
    id: 'mac',
    title: 'Mac',
    intro: 'Names differ a little by macOS version. System Settings is the current app. Older Macs say System Preferences.',
    checks: [
      ...sharedChecks,
      {
        id: 'privacy',
        title: 'Review Privacy & Security',
        steps:
          'Open System Settings, then Privacy & Security. Look at Accessibility, Full Disk Access, and Screen Recording. Leave access in place for tools you chose. Question access you do not remember allowing.',
        limit: 'Helpful software can need these permissions.',
      },
      {
        id: 'login-items',
        title: 'Review login items',
        steps: 'Open System Settings, then General, then Login Items & Extensions. Remove items you do not want to start with the Mac.',
        limit: 'An unfamiliar name can be a printer, a cloud drive, or an update helper.',
      },
      {
        id: 'filevault',
        title: 'Turn on FileVault',
        steps:
          'Open System Settings, then Privacy & Security, then FileVault. Turn it on. Choose a recovery key or an iCloud unlock, and store the key somewhere that is not only on that Mac. If you lose both the password and the key, Apple says the files cannot be recovered.',
        limit: 'Macs with Apple silicon or a T2 chip already encrypt data. FileVault still stops someone from unlocking the disk without the password.',
      },
      {
        id: 'profiles',
        title: 'Review sharing and profiles',
        steps:
          'Open System Settings, then General, then Sharing, and turn off sharing you do not use. If Device Management or Profiles is present, read what is installed. A workplace Mac may have an expected profile.',
        limit: 'A profile you do not recognize is a reason to get advice, not a reason to delete it in a hurry.',
        caution: removalCaution,
      },
      {
        id: 'advanced-data',
        title: 'Decide about Advanced Data Protection',
        steps:
          'Advanced Data Protection is optional. Apple says it protects the majority of iCloud data, including iCloud Backup, Photos and Notes, with end-to-end encryption. iCloud Mail is not end-to-end encrypted, because it has to work with ordinary email. Contacts and Calendars are not end-to-end encrypted, because the standards they use do not provide it. Before you turn it on, Apple guides you to set a recovery contact or a recovery key. After that, Apple says it does not have the keys to recover that data for you. Managed Apple Accounts and child accounts are not eligible. The mobile exposure page has the longer account.',
        limit: 'Turning it on does not encrypt Mail, Contacts or Calendars. Losing the recovery contact or key, and the device passcode, can mean the protected data cannot be restored.',
      },
    ],
    sources: [
      sources.appleFileVault,
      sources.appleFindMy,
      sources.getCyberSafeDevices,
      sources.appleIcloudSecurity,
      sources.appleAdvancedData,
      sources.appleTwoFactor,
      sources.googleRecovery,
      sources.googleBackupCodes,
      sources.googleDevices,
      sources.mobileExposure,
      sources.recoveryCenter,
      sources.simSwap,
    ],
  },
]

export const incidents: readonly IncidentCard[] = [
  {
    id: 'lost',
    name: 'Lost or stolen device',
    response:
      'Use the maker’s finder from a device you trust: Find My for Apple, Find Hub for Android, or the Microsoft account page for Windows. Change important passwords. If someone stole it, get to a safe place before you chase the device. The recovery page has the longer list.',
  },
  {
    id: 'signin',
    name: 'Unexpected sign-in',
    response:
      'Open the service from a bookmark or the official app. Deny a prompt you did not start. Change the password and sign out sessions you do not recognize. Do not share a one-time code.',
  },
  {
    id: 'phish',
    name: 'Suspicious message',
    response:
      'Do not use the link or the phone number in the message. If you already typed a password or paid, secure the account or call the bank on a number you look up yourself.',
  },
  {
    id: 'tracker',
    name: 'Unknown tracker alert',
    response:
      'Take the alert seriously. Open it and follow the steps. A Bluetooth name that only appears nearby is not the same thing, and it does not mean the phone is infected. Do not pair with a strange device. If you feel unsafe, go to a public place and contact police or a person you trust.',
  },
  {
    id: 'wifi',
    name: 'Strange Wi-Fi name',
    response:
      'Ask staff for the real network name. Do not install a certificate from a page the Wi-Fi opened. A matching name does not prove the network is real, and it also does not prove your device was hacked.',
  },
  {
    id: 'money',
    name: 'Money or crypto loss',
    response:
      'Stop paying the person who asked. Call the bank, card issuer, or exchange on a number you already trust. In Canada, report it to the Canadian Anti-Fraud Centre. Do not pay a fee to someone who promises to recover crypto. Never share a seed phrase.',
  },
]

export const removalWarning = {
  title: 'Before you remove anything',
  body: 'If a person who could hurt you may have put an app, stalkerware, or a management profile on this device, do not delete it while they can see the device. Removing it can tell them that you found it. Plan for your safety first. Use a different device to contact a trusted person or a local support service. This page does not tell you how to remove that software.',
} as const
