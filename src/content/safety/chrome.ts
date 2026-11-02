import { sourcesChecked } from './sources'

/** English interface strings for the safety tools. Add a locale module; do not machine-translate. */
export const safetyChrome = {
  larger: 'Larger text',
  spacious: 'More line space',
  pause: 'Pause',
  resume: 'Resume',
  startAgain: 'Start again',
  practiceAgain: 'Practice again',
  next: 'Next scenario',
  seeResult: 'See your result',
  chooseFirst: 'Choose an answer first.',
  glossaryTitle: 'Words used on this page',
  glossaryLead: 'These short meanings are for this page. They are not a legal dictionary.',
  otherTools: 'Other safety tools',
  privacy:
    'Nothing you do here is uploaded. There is no account, no cookie, and no tracker. A file you open stays in this tab. A link leaves this site only when you choose it.',
  checked: `Outside pages listed here were opened on ${sourcesChecked}. A page can change. A link is not proof by itself.`,
  tools: [
    { href: '/academy/threat-lab', label: 'Threat practice lab' },
    { href: '/academy/recovery', label: 'Recovery steps' },
    { href: '/academy/navigator', label: 'Safety navigator' },
    { href: '/academy/evidence', label: 'Evidence explorer' },
  ],
} as const
