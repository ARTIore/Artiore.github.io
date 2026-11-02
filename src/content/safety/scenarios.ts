import type { QuizChoice } from '../../lib/safety/quiz'
import { sources, type SourceLink } from './sources'

export type LabScenario = {
  id: string
  title: string
  situation: string
  choices: readonly QuizChoice[]
  correctChoiceId: string
  why: string
  sources: readonly SourceLink[]
}

export const labScenarios: readonly LabScenario[] = [
  {
    id: 'phishing',
    title: 'Fake delivery text',
    situation: 'A text says a delivery failed. It asks you to sign in through a shortened link.',
    choices: [
      {
        id: 'official',
        text: 'Open the delivery company’s app, or a website address you already saved. Do not use the link in the text.',
      },
      { id: 'open', text: 'Open the short link and type your password.' },
      { id: 'forward', text: 'Forward the text, including the link, so friends can check it.' },
    ],
    correctChoiceId: 'official',
    why: 'A link in an unexpected text can lead to a copy of a real sign-in page. Use a path you already trust. Sending the link onward can spread the fake. A strange text does not prove your phone is infected.',
    sources: [sources.cisaPhishing, sources.cyberCentreSmishing, sources.ftcPhishing],
  },
  {
    id: 'wifi',
    title: 'Lookalike Wi-Fi',
    situation: 'At a hotel, two similar Wi-Fi names appear. One opens a page that tells you to install a certificate before you can connect.',
    choices: [
      { id: 'install', text: 'Install the certificate. The page looks like it belongs to the hotel.' },
      { id: 'either', text: 'Join either network. The names match the hotel, so both are safe.' },
      {
        id: 'ask',
        text: 'Ask the hotel staff for the exact network name and how to connect. Do not install a certificate from that page.',
      },
    ],
    correctChoiceId: 'ask',
    why: 'A network name and a sign-in page can be copied. A certificate you did not expect can let someone watch or change what you send. A familiar name is not proof the network is real.',
    sources: [sources.cisaWifi, sources.getCyberSafeDevices],
  },
  {
    id: 'tracker',
    title: 'Unknown tracker alert',
    situation:
      'Your phone warns that an unknown tracker may be moving with you. You also see Bluetooth names you do not recognize.',
    choices: [
      {
        id: 'serious',
        text: 'Take the tracker alert seriously. Open it and follow the steps on the screen. If you feel unsafe, go to a public place and contact police or a person you trust. A nearby Bluetooth name, by itself, does not mean the phone is infected. Do not pair with a device you do not know.',
      },
      {
        id: 'ignore',
        text: 'Ignore the alert. Nearby Bluetooth signals are normal, so the warning does not matter.',
      },
      { id: 'pair', text: 'Pair with the unknown device so you can see who owns it.' },
    ],
    correctChoiceId: 'serious',
    why: 'An unknown-tracker alert means the phone thinks a tag you do not own may be traveling with you. That is a safety signal. Follow it. A name that only appears in the nearby list is common, and that name alone does not show the phone was hacked. Pairing can connect you to a device you do not control.',
    sources: [sources.appleTrackers, sources.googleTrackers, sources.bluetooth],
  },
  {
    id: 'permissions',
    title: 'A flashlight app asks for control',
    situation: 'A flashlight app asks to control accessibility features and to read your notifications.',
    choices: [
      { id: 'grant', text: 'Allow every request so the app will open.' },
      { id: 'assume', text: 'Treat every permission request as proof the app is malicious.' },
      {
        id: 'review',
        text: 'Read the request. Refuse access a flashlight does not need. Delete the app if you are unsure. Do not turn off a tool you rely on for vision or movement.',
      },
    ],
    correctChoiceId: 'review',
    why: 'A flashlight does not need to read your notifications or control the phone. That request is a warning sign. It is not, by itself, proof of a crime. Some tools that help people see or move do need extra access.',
    sources: [sources.accessibility, sources.getCyberSafeDevices],
  },
  {
    id: 'signin',
    title: 'Unexpected sign-in prompt',
    situation: 'A prompt asks you to approve a sign-in you did not start. A caller says they are support and asks for the code on your screen.',
    choices: [
      { id: 'approve', text: 'Approve the prompt so the messages will stop.' },
      { id: 'share', text: 'Read the code to the caller.' },
      {
        id: 'deny',
        text: 'Deny the prompt. Then open the account yourself, from an app or address you already use, and review devices and sign-in methods. Never share a one-time code.',
      },
    ],
    correctChoiceId: 'deny',
    why: 'An unexpected approval can mean someone else is trying to sign in. Sharing the code gives them the second step. Use the company’s own site or app, not a link or a number from the caller.',
    sources: [sources.cisaMfa, sources.getCyberSafeAccounts, sources.cyberCentreBasics],
  },
]
