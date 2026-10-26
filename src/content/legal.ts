import { links } from './links'
import type { PageDocument } from './types'

const framing = `This is the policy published for the Artiore service at artiore.com, last updated April 16, 2026. It is reproduced here so readers of artiais.com can find it. artiais.com is a static site. It does not run the Artiore reasoning engine. The operator named in the policy is The Secret Affaire Inc., a private limited corporation registered in Canada. Questions go to ${links.policyEmailAddress}. The phone number printed on the original policy is omitted on this site.`

export const privacyPage: PageDocument = {
  path: '/privacy',
  eyebrow: 'Legal',
  title: 'Privacy policy',
  headTitle: 'Privacy policy | The Secret Affaire Inc. and ARTIore',
  description:
    'Privacy policy published for artiore.com on April 16, 2026. The Secret Affaire Inc. says Artiore does not collect or store personal user data. Reproduced here.',
  lead: 'Last updated April 16, 2026. The Secret Affaire Inc. (“Company”, “we”, “us”, or “our”) operates the Artiore website (artiore.com) and related services.',
  blocks: [
    { kind: 'note', text: framing },
    {
      kind: 'paragraphs',
      text: [
        'The policy explains how information is collected, used, disclosed, and safeguarded when you visit the Service.',
        `Contact in the policy: The Secret Affaire Inc., Zain Ul Abdin, ${links.policyEmailAddress}.`,
      ],
    },
    {
      kind: 'heading',
      text: '1. Information we collect',
    },
    {
      kind: 'paragraphs',
      text: [
        'As of the date of the policy, Artiore does not collect, store, or house any personal user data. It does not require registration, and it does not maintain user accounts or databases.',
      ],
    },
    {
      kind: 'list',
      title: '1.1 Information the policy says is not collected',
      items: [
        'Personal identification information (name, email address, phone number)',
        'Account credentials',
        'Payment information (credit card numbers, billing addresses)',
        'User-generated content or conversation history',
        'Location data',
        'Device identifiers',
      ],
    },
    {
      kind: 'list',
      title: '1.2 Information that may be collected automatically',
      items: [
        'Log data: IP address, browser type, operating system, referring URLs, pages viewed, and timestamps',
        'Cookies: small data files stored on your device',
        'Local storage: accessibility settings stored in your browser',
      ],
    },
    {
      kind: 'paragraphs',
      text: [
        'The policy says this information is typically collected by the hosting provider and is not actively accessed or analyzed by The Secret Affaire Inc.',
      ],
    },
    {
      kind: 'heading',
      text: '2. How we use your information',
    },
    {
      kind: 'paragraphs',
      text: [
        'Since the Company does not actively collect personal data, the policy says it does not use your information beyond basic operation of the Service.',
        'Accessibility preferences are stored locally in the browser using localStorage. That data never leaves the device and is not transmitted to the Company’s servers.',
        `AI interactions: when you use the Artiore reasoning engine, queries are sent to OpenAI’s API for processing. The policy says those queries and responses are not stored by the Company. OpenAI’s policy is at ${links.openaiPrivacy}.`,
      ],
    },
    {
      kind: 'heading',
      text: '3. Data storage and security',
    },
    {
      kind: 'paragraphs',
      text: [
        'No user database. The only data the policy associates with your use is accessibility preferences in localStorage, which you can clear in the browser or with the “Reset All Settings” control in the accessibility toolbar on the Service.',
        'Security measures named: HTTPS for all connections, secure hosting, regular security updates, and API key protection for third-party services.',
      ],
    },
    {
      kind: 'heading',
      text: '4. Cookies and tracking',
    },
    {
      kind: 'paragraphs',
      text: [
        'The policy says Artiore does not use cookies for tracking or analytics. It uses localStorage for accessibility preferences. That is not a cookie and does not track you across websites.',
        'Third-party services such as OpenAI may set their own cookies. The Company does not control those cookies.',
        'A cookie notice elsewhere on artiore.com says the site uses analytics cookies and that no personal data is sold. The privacy policy says the opposite about analytics cookies. Both lines are on the published site. This page follows the privacy policy’s own section 4, and it does not add an analytics banner.',
      ],
    },
    {
      kind: 'heading',
      text: '5. Third-party services',
    },
    {
      kind: 'paragraphs',
      text: [
        '5.1 OpenAI. The policy says the reasoning engine uses OpenAI’s GPT-5.2 API. Input is sent to OpenAI’s servers. The Company does not store the queries or the responses.',
        '5.2 Payment processors. If you donate, Bitcoin and Ethereum transactions are processed on public blockchains, and the policy says the Company does not collect personal information from those donations. PayPal donations are subject to PayPal’s privacy policy. The Company may receive your name and email from PayPal for donation confirmation only.',
      ],
    },
    {
      kind: 'heading',
      text: '6. Children’s privacy',
    },
    {
      kind: 'paragraphs',
      text: [
        `The Service is not directed to children under 13. The Company does not knowingly collect personal information from children under 13. A parent or guardian who believes a child has provided personal information can write to ${links.policyEmailAddress}.`,
      ],
    },
    {
      kind: 'heading',
      text: '7. International data transfers',
    },
    {
      kind: 'paragraphs',
      text: [
        'The Secret Affaire Inc. is based in Canada. The Service is accessible globally. The policy says that because the Company does not collect or store user data, there are no international transfers of personal information by the Company. Third parties such as OpenAI may process data in other countries.',
      ],
    },
    {
      kind: 'heading',
      text: '8. Your privacy rights',
    },
    {
      kind: 'paragraphs',
      text: [
        'The policy says that because personal data is not collected or stored, most rights to access, correct, or delete data are not applicable. It still names: the right to clear local data, the right not to use features that talk to third parties, and the right to write to the Company.',
        '8.1 Canada. Residents have rights under PIPEDA and applicable provincial laws. The policy says those rights are largely not applicable because personal information is not collected.',
        '8.2 EEA. GDPR rights are named. The policy says obligations are minimal because personal data is not collected or processed by the Company.',
        '8.3 California. CCPA rights are named. The policy says the Company does not sell personal information or collect personal data, so obligations are minimal.',
      ],
    },
    {
      kind: 'heading',
      text: '9. Do Not Track',
    },
    {
      kind: 'paragraphs',
      text: [
        'The policy says the Company does not track users across websites or over time, and therefore does not respond to Do Not Track signals.',
      ],
    },
    {
      kind: 'heading',
      text: '10. Changes',
    },
    {
      kind: 'paragraphs',
      text: [
        'The policy may be updated. Material changes are announced by updating the “Last updated” date and, if appropriate, a notice on the homepage. If the Company later decides to collect user data, it says it will update the policy and give notice before doing so.',
      ],
    },
    {
      kind: 'heading',
      text: '11. Data retention',
    },
    {
      kind: 'paragraphs',
      text: [
        'The policy says there is no retention period for user data, because none is stored. Accessibility settings remain in localStorage until you clear them.',
      ],
    },
    {
      kind: 'heading',
      text: '12. Accessibility and privacy',
    },
    {
      kind: 'list',
      items: [
        'Accessibility settings are stored locally in the browser',
        'No accessibility data is transmitted to the Company’s servers',
        'Settings can be reset',
        'Text-to-speech uses the browser’s Web Speech API, not an external service',
      ],
    },
    {
      kind: 'heading',
      text: '13. Contact',
    },
    {
      kind: 'paragraphs',
      text: [
        `The Secret Affaire Inc. Privacy officer: Zain Ul Abdin. Email: ${links.policyEmailAddress}. Website: artiore.com. The policy says inquiries are answered within 30 days.`,
      ],
    },
    {
      kind: 'heading',
      text: '14. Transparency commitment',
    },
    {
      kind: 'list',
      items: [
        'No hidden data collection',
        'No data sales — the policy’s reason is that data is not collected',
        'No tracking across websites and no user profiles',
        'Clear communication if data practices change',
      ],
    },
    {
      kind: 'list',
      title: 'Privacy summary, as published',
      items: [
        'No user data collection',
        'No user accounts',
        'Local storage only for accessibility settings',
        'No tracking across websites',
        'No data sales',
        'Third-party services are disclosed',
        'Privacy by design',
      ],
    },
    {
      kind: 'actions',
      items: [
        { label: 'Policy on artiore.com', href: links.artiorePrivacy },
        { label: 'Email the privacy contact', href: links.policyEmail },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
}

export const termsPage: PageDocument = {
  path: '/terms',
  eyebrow: 'Legal',
  title: 'Terms of service',
  headTitle: 'Terms of service | The Secret Affaire Inc. and ARTIore',
  description:
    'Terms published for artiore.com on April 16, 2026, between you and The Secret Affaire Inc. Governing law is Canada and the Province of Ontario.',
  lead: 'Last updated April 16, 2026. These terms are a legally binding agreement between you and The Secret Affaire Inc. concerning artiore.com and related services.',
  blocks: [
    { kind: 'note', text: framing },
    {
      kind: 'paragraphs',
      text: [
        'By accessing or using the Service, you agree to the terms. If you do not agree, you may not use the Service.',
        `Contact in the terms: The Secret Affaire Inc., Zain Ul Abdin, ${links.policyEmailAddress}.`,
      ],
    },
    {
      kind: 'heading',
      text: '2. Description of the service',
    },
    {
      kind: 'paragraphs',
      text: [
        'The terms describe Artiore as an AI-powered reasoning platform with structured decision-making tools. The items they list are:',
      ],
    },
    {
      kind: 'list',
      items: [
        'Artiore reasoning engine: a dual-mode system (the terms say Quick Mode and Deep Mode) powered by OpenAI GPT-5.2',
        'Artiore framework: a six-layer decision-making framework. The terms name the layers as Clarity, Reasoning, Archives, Witness, Upliftment, and Human Upliftment. The framework page names Clarity, Reasoning, Archives, Derivatives, AI in the margin, and Human upliftment. Both lists are published. This page does not silently pick one.',
        'The Codex (blog): educational content on security, decision-making, and strategic thinking',
        'Accessibility features: the terms say 19 or more tools, including text-to-speech, font controls, high contrast, dyslexia-friendly fonts, reading aids, and motion controls',
        'Multi-language support: the terms say content is available in 8 languages — English, Arabic, Urdu, French, Spanish, German, Chinese, and Hindi. This artiais.com site is published in English. It does not ship partial translations of these pages.',
        'An Islamic theological framework: Quranic verses, Names of Allah, and Islamic principles, as the terms describe them',
      ],
    },
    {
      kind: 'heading',
      text: '3. Accounts',
    },
    {
      kind: 'paragraphs',
      text: [
        'The terms say Artiore does not require registration or an account. All features are available without authentication. If accounts are introduced later, the terms say they will be updated and users notified.',
      ],
    },
    {
      kind: 'heading',
      text: '4. Acceptable use',
    },
    {
      kind: 'list',
      title: 'You agree not to',
      items: [
        'Use the Service in violation of applicable law',
        'Attempt unauthorized access to the Service or connected systems',
        'Use automated systems to send more requests than a human can reasonably produce',
        'Introduce viruses, trojan horses, worms, logic bombs, or other harmful material',
        'Send advertising or promotional material without prior written consent',
        'Impersonate the Company, an employee, another user, or any other person',
        'Use the AI features to generate harmful, illegal, or unethical content',
        'Attempt to reverse engineer, decompile, or disassemble any portion of the Service',
      ],
    },
    {
      kind: 'heading',
      text: '5. Intellectual property',
    },
    {
      kind: 'paragraphs',
      text: [
        'The Service and its contents, including the framework, the reasoning engine, and the design, are owned by The Secret Affaire Inc., its licensors, or other providers, and are protected by Canadian and international intellectual-property laws.',
        'Trademarks named: Artiore, the Artiore logo, the Artiore Framework Seal, and related names, logos, product and service names, designs, and slogans. You may not use those marks without prior written permission.',
      ],
    },
    {
      kind: 'heading',
      text: '6. AI-generated content',
    },
    {
      kind: 'list',
      items: [
        'AI-generated content is for informational and educational purposes only',
        'Responses may contain errors, inaccuracies, or outdated information',
        'You should not rely solely on AI-generated content for critical decisions without independent verification',
        'The Company does not guarantee accuracy, completeness, or reliability',
        'AI-generated content is not professional advice — legal, financial, medical, or otherwise',
      ],
    },
    {
      kind: 'heading',
      text: '7. Third-party services',
    },
    {
      kind: 'paragraphs',
      text: [
        'The terms name OpenAI for AI reasoning, and Bitcoin, Ethereum, and PayPal for donations. Your use of those services is subject to their own terms. The Company is not responsible for third-party practices.',
      ],
    },
    {
      kind: 'heading',
      text: '8. Donations',
    },
    {
      kind: 'paragraphs',
      text: [
        'Artiore accepts voluntary donations via Bitcoin, Ethereum, and PayPal. Donations are voluntary and non-refundable. They do not entitle you to extra services, features, or benefits. They are not tax-deductible, because The Secret Affaire Inc. is not a registered charitable organization. This site does not publish wallet addresses or a PayPal link.',
      ],
    },
    {
      kind: 'heading',
      text: '9. Disclaimer of warranties',
    },
    {
      kind: 'paragraphs',
      text: [
        'The Service is provided “as is” and “as available”, without warranties of any kind, express or implied. The Company disclaims implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        'The Company does not warrant that the Service will be uninterrupted, secure, or available at any particular time or place; that errors will be corrected; that the Service is free of viruses; or that results will meet your requirements.',
      ],
    },
    {
      kind: 'heading',
      text: '10. Limitation of liability',
    },
    {
      kind: 'paragraphs',
      text: [
        'To the fullest extent provided by law, the Company, its affiliates, and their licensors, service providers, employees, agents, officers, and directors are not liable for damages of any kind arising out of your use, or inability to use, the Service. The terms list direct, indirect, special, incidental, consequential, and punitive damages, including personal injury, emotional distress, loss of revenue, profits, business, savings, use, goodwill, and data, whether caused by tort, breach of contract, or otherwise, even if foreseeable.',
      ],
    },
    {
      kind: 'heading',
      text: '11. Indemnification',
    },
    {
      kind: 'paragraphs',
      text: [
        'You agree to defend, indemnify, and hold harmless The Secret Affaire Inc. and its affiliates, licensors, service providers, and their officers, directors, employees, contractors, agents, suppliers, successors, and assigns from claims arising out of your violation of the terms or your use of the Service, including reasonable attorneys’ fees.',
      ],
    },
    {
      kind: 'heading',
      text: '12. Governing law',
    },
    {
      kind: 'paragraphs',
      text: [
        'The terms are governed by the laws of Canada and the Province of Ontario, without regard to conflict-of-law provisions. Legal action is brought exclusively in the federal or provincial courts located in Ontario, Canada, and you consent to that jurisdiction.',
      ],
    },
    {
      kind: 'heading',
      text: '13. Changes to the terms',
    },
    {
      kind: 'paragraphs',
      text: [
        'The Company may modify the terms at its discretion. If a revision is material, it will give at least 30 days’ notice before the new terms take effect. Continuing to use the Service after that is agreement. If you do not agree, you are no longer authorized to use the Service.',
      ],
    },
    {
      kind: 'heading',
      text: '14. Termination',
    },
    {
      kind: 'paragraphs',
      text: [
        'The Company may terminate or suspend access immediately, without prior notice, for any reason, including a breach. On termination, the right to use the Service ceases. Provisions that by nature should survive — ownership, warranty disclaimers, indemnity, and limitations of liability — survive.',
      ],
    },
    {
      kind: 'heading',
      text: '15. Accessibility',
    },
    {
      kind: 'paragraphs',
      text: [
        'The Company says it is committed to digital accessibility and applies relevant standards. The terms say the Service includes 19 or more accessibility features for visual impairments, hearing impairments, motor disabilities, cognitive disabilities, learning disabilities, photosensitivity, and vestibular disorders.',
        `The terms say the Company strives to conform to WCAG 2.1 Level AAA. Difficulty accessing the Service can be reported to ${links.policyEmailAddress}.`,
      ],
    },
    {
      kind: 'heading',
      text: '16. Islamic content',
    },
    {
      kind: 'paragraphs',
      text: [
        'Artiore incorporates Islamic theological principles, Quranic verses, and references to the Names of Allah as part of its philosophical framework. The terms say this content is for educational and spiritual reflection. The Company says it is not a body of religious scholars. For authoritative Islamic guidance, consult qualified scholars and recognized institutions.',
      ],
    },
    {
      kind: 'heading',
      text: '17. Entire agreement',
    },
    {
      kind: 'paragraphs',
      text: [
        'The terms, together with the privacy policy, are the entire agreement between you and The Secret Affaire Inc. regarding the Service, and they supersede prior understandings.',
      ],
    },
    {
      kind: 'heading',
      text: '18. Contact',
    },
    {
      kind: 'paragraphs',
      text: [`The Secret Affaire Inc., Zain Ul Abdin, ${links.policyEmailAddress}, artiore.com.`],
    },
    {
      kind: 'actions',
      items: [
        { label: 'Terms on artiore.com', href: links.artioreTerms },
        { label: 'Privacy policy', href: '/privacy' },
        { label: 'Email artiore@outlook.com', href: links.policyEmail },
      ],
    },
  ],
}

export const legalPages: PageDocument[] = [privacyPage, termsPage]
