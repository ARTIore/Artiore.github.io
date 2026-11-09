import { sources, type SourceLink } from './sources'

export type Playbook = {
  id: string
  name: string
  urgency: string
  first: readonly string[]
  then: readonly string[]
  avoid: string
  deviceNotes?: readonly { title: string; body: string }[]
  sources: readonly SourceLink[]
}

export const playbooks: readonly Playbook[] = [
  {
    id: 'account',
    name: 'Someone else may be in an account',
    urgency: 'Act soon, from a device you trust.',
    first: [
      'Open the service from its app or from an address you type yourself. Do not use a link in a message.',
      'Change the password, and sign out other sessions if the service lets you.',
      'Check the recovery email and phone number. Turn on a second sign-in step. Prefer an app prompt or a passkey over a code you might be talked into reading aloud.',
    ],
    then: [
      'Look at recovery options, connected apps, mail-forwarding rules, and recent activity.',
      'If the account sent messages you did not write, tell the people who received them.',
      'Keep the suspicious messages and the times. Do not keep passwords or one-time codes in that note.',
    ],
    avoid: 'Do not give a caller, a text, or a chat bot your one-time codes or recovery keys.',
    sources: [sources.cisaMfa, sources.getCyberSafeAccounts, sources.cyberCentreBasics],
  },
  {
    id: 'credentials',
    name: 'You lost a password or cannot sign in',
    urgency: 'Use the service’s own recovery page. Do not use a surprise reset link.',
    first: [
      'Ignore any message that says the account is locked and offers a link or a phone number. Those are common fakes.',
      'On a device you trust, type the service’s address yourself, or open a bookmark. Use only the “forgot password” or account-recovery page on that site.',
      'If email or a second step protects the account, confirm you still control those. Recover the email account first if that is what you lost.',
    ],
    then: [
      'After you get in, sign out other sessions and review the recovery phone and email.',
      'Turn on a second sign-in step. If you use a password manager, update the saved password there.',
      'If someone else changed the password, switch to the “someone else may be in an account” steps.',
    ],
    avoid: 'Do not send a photo of your ID to a stranger who offers to recover the account. Do not share one-time codes.',
    sources: [sources.getCyberSafeAccounts, sources.cisaPasswords, sources.cafcReport],
  },
  {
    id: 'device',
    name: 'A device is lost or stolen',
    urgency: 'Your safety comes before the device.',
    first: [
      'If you are in danger, contact local emergency services. In Canada and the United States, that number is 911.',
      'From a device you still trust, use the maker’s official finder. Do not install a “recovery” app from a text or an ad.',
      'Lock or mark the device lost. Then change the password on the account that can reset everything else. Tell your mobile carrier if the phone or SIM is gone.',
    ],
    then: [
      'Check bank accounts and signed-in sessions.',
      'Write down the device identifier if you need it for a police report or the carrier. Leave passwords out of that note.',
      'Erase the device from afar only after you decide whether you still need the data. Erasing cannot be undone.',
    ],
    avoid: 'Do not meet a stranger alone to get the device back. Do not trust a caller who says they found it and need your passcode.',
    deviceNotes: [
      {
        title: 'iPhone, iPad, or Mac',
        body: 'Use Find My on another Apple device signed in to the same account, or go to icloud.com/find and turn on Lost Mode. Find My has to have been turned on before the device was lost. Apple says it will not call you to say the device was found.',
      },
      {
        title: 'Android',
        body: 'Use Google’s Find Hub from another device you trust, or from the Find Hub website while signed in to the same Google Account. The older name for this tool is Find My Device.',
      },
      {
        title: 'Windows',
        body: 'If Find My Device was already turned on, sign in at the Microsoft account devices page and use Find. Then lock the computer if you can.',
      },
    ],
    sources: [sources.appleFindMy, sources.googleFindHub, sources.windowsFind, sources.cafcReport],
  },
  {
    id: 'identity',
    name: 'Someone may be using your identity',
    urgency: 'Call the bank or card issuer using a number you already have.',
    first: [
      'Contact the bank, card issuer, or phone company through a number printed on the card or on a bill, not a number from a text.',
      'Change passwords on the email account and other accounts that were exposed. Turn on a second sign-in step.',
      'In Canada, report what happened to the Canadian Anti-Fraud Centre and to local police if money or ID was misused. In the United States, IdentityTheft.gov is the federal starting point. It does not replace a Canadian report.',
    ],
    then: [
      'Read account statements. Where you can, check credit files.',
      'Write down reference numbers, dates, and who you spoke with.',
      'Watch for new accounts or requests you did not make.',
    ],
    avoid: 'Do not send identity documents to a recovery service you did not contact yourself.',
    sources: [sources.cafcReport, sources.cyberCentreIdentity, sources.identityTheftUs],
  },
  {
    id: 'breach',
    name: 'A company says your information was in a breach',
    urgency: 'Read the notice. Do not use links in the message.',
    first: [
      'Read the notice carefully and keep it. The Office of the Privacy Commissioner of Canada says the organisation should tell you which personal information was compromised, what it has done to reduce the risk, and who to contact.',
      'Contact the organisation through the details on the notice or in its privacy policy, not through a link or a phone number in the message.',
      'Change passwords that were exposed, and any password you reused on another account. Turn on a second sign-in step.',
    ],
    then: [
      'Monitor your accounts, including bank and card statements.',
      'Consider a credit alert or ordering a credit report. That is what the Commissioner’s notice page advises.',
      'Stay alert. The Commissioner says fraudsters may wait before they try to use the information.',
      'If money or identity was misused, report it to the Canadian Anti-Fraud Centre and to local police.',
    ],
    avoid: 'Do not pay someone who contacts you offering to clean up the breach. Do not send identity documents to a service you did not contact yourself.',
    sources: [sources.opcBreachNotice, sources.cafcReport],
  },
  {
    id: 'money',
    name: 'Money or crypto was sent to a scammer',
    urgency: 'Stop sending funds. Contact the bank or exchange yourself.',
    first: [
      'Stop sending money, signing wallet transactions, or answering the person who asked for it.',
      'Call the bank, card issuer, exchange, or wallet provider on a number you look up yourself.',
      'Save transaction IDs, wallet addresses, messages, and dates in a private note. In Canada, report the fraud to the Canadian Anti-Fraud Centre. In the United States, people can also report internet crime to the FBI’s IC3.',
    ],
    then: [
      'Secure the accounts you used. If you understand how, revoke wallet approvals you did not mean to grant.',
      'Change reused passwords on other accounts.',
      'Treat anyone who asks for an upfront fee to “recover the crypto” as a second scam.',
    ],
    avoid: 'Never share a seed phrase or a private key. Getting the money back may not be possible.',
    sources: [sources.cafcReport, sources.ic3, sources.getCyberSafeAccounts],
  },
  {
    id: 'targeted',
    name: 'You fear someone is watching the device',
    urgency: 'Safety planning comes before deleting anything.',
    first: [
      'A strange battery drop, a slow connection, or an unfamiliar Bluetooth name is not proof of spyware.',
      'If a person who could hurt you might be involved, do not delete apps or profiles on a device they can see. Removal can tell them. Use a different device to reach a trusted person or a local support service.',
      'If you are in immediate danger, contact local emergency services before you change settings.',
    ],
    then: [
      'Write down what you saw: the exact words of alerts, and the times. Leave out passwords.',
      'When it is safe, update software and review account sessions from a device the other person cannot open.',
      'An unknown-tracker alert is a safety signal. Open it. For longer-term planning, read the stalkerware and safety planning page. This guide does not give removal steps.',
    ],
    avoid: 'Do not publicly name a person or a company without evidence you can show. Do not confront someone who may become violent.',
    sources: [sources.stalkerware, sources.appleTrackers, sources.googleTrackers, sources.cafcHome],
  },
  {
    id: 'phishing',
    name: 'You got a suspicious message',
    urgency: 'Depends on whether you clicked, paid, or typed a password.',
    first: [
      'Do not open the link, the attachment, or the phone number in the message.',
      'If you typed a password, change it from the real service, using a device and an address you trust.',
      'If you paid, contact the bank or card issuer right away on a number you already have.',
    ],
    then: [
      'Use the service’s own report button if it has one. In Canada you can also report the fraud to the Canadian Anti-Fraud Centre.',
      'Review recent account activity and turn on a second sign-in step.',
      'Keep a copy of the message if you need it for a report. You do not need to keep it forever.',
    ],
    avoid: 'A suspicious message does not prove the device was hacked.',
    sources: [sources.cisaPhishing, sources.cyberCentreSmishing, sources.cafcReport],
  },
]

export const canadianContacts = {
  phoneDisplay: '1-888-495-8501',
  phoneHref: 'tel:+18884958501',
  hours: 'The Canadian Anti-Fraud Centre publishes these hours: Monday to Friday, 10:00 a.m. to 4:45 p.m. Eastern time, closed on holidays.',
  impersonation:
    'The Centre warns that callers pretend to be the Centre, promise to get money back, and then ask for payment. The Centre does not contact people to ask for money.',
} as const
