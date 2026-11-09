import { blogSummaries, type BlogSummary } from './blog-summaries'
import type { PageDocument } from './types'

export type BlogMeta = BlogSummary

const summary = Object.fromEntries(blogSummaries.map((item) => [item.slug, item])) as Record<string, BlogSummary>

const published = '2026-04-16'

export const blogPosts: Array<BlogMeta & { page: PageDocument }> = [
  {
    ...summary['every-tap-on-allow'],
    page: {
      path: '/blog/every-tap-on-allow',
      eyebrow: 'Practical · 8 November 2026',
      title: 'Every tap on Allow is a decision. Most of us make it without reading.',
      headTitle: 'Every tap on Allow is a decision | ARTIore',
      description:
        'A five-minute starting check for phone permissions. Five taps worth a pause, what the studies measured, and how to review iPhone and Android.',
      author: summary['every-tap-on-allow'].author,
      published: '2026-11-08',
      lead: 'Casual Allow taps can trade privacy for convenience. This note names five permissions worth a slow thumb, and a five-minute starting check for iPhone and Android. It is not a full security assessment.',
      blocks: [
        {
          kind: 'paragraphs',
          text: [
            'Picture this as a story, not a case file. You download a weather app at 7 a.m. It asks for your contacts. You tap Allow because you are late. Then location. Allow. Then Bluetooth. Allow. You never think about it again. A grant can let that app read what you just allowed. It does not, by itself, prove that a database now holds your address book or your morning route.',
            'Every tap on Allow is a decision. Most of us make it without reading. Permission prompts are often easy to dismiss. [Nielsen Norman Group](https://www.nngroup.com/articles/permission-requests/) describes requests that arrive at a bad moment, fatigue from several prompts in a row, and Android dialogs that do not include a reason in the system box. The box is not a briefing.',
          ],
        },
        {
          kind: 'heading',
          text: 'What the studies actually measured',
        },
        {
          kind: 'paragraphs',
          text: [
            'In a 2021 USENIX Security paper, Shen and colleagues report two different groups. One is 4,636 people who installed the researchers’ Permission Checker app and whose real Android permission settings were collected. That group was not asked the comprehension questions. The 6.1% figure comes from a separate Mechanical Turk survey, Survey 1, with 359 valid responses (180 Android and 179 iOS), collected from April 2019 to May 2020. About one in twenty of those respondents, 6.1%, selected every correct use of the permission groups they were shown, using the text in the system dialog. The authors say the result is not a census of all phone users. [Shen et al., USENIX Security 2021](https://www.usenix.org/system/files/sec21-shen-bingyu.pdf)',
            'The same paper reports, from March 2018 news accounts, that Facebook’s Android app collected and uploaded call history and SMS messages when people had granted those permissions, and that some people were surprised when they later downloaded their data. That report is about call logs and text messages. It is not evidence about photos or contacts.',
            'Richards and Hartzog describe ways digital consent can fail without the person seeing the failure, including consent given without understanding the technology or the consequences. [The Pathologies of Digital Consent, Washington University Law Review, 2019](https://openscholarship.wustl.edu/law_lawreview/vol96/iss6/11)',
            'A 2020 questionnaire of 61 Android participants, after the authors dropped incomplete answers, found negative answers on microphone access from 62%, and a near split on the camera (39% negative, 34% positive). People in that sample were more willing to allow the same access to an app they already liked. It is not a current survey of every phone owner. [Andriotis and Takasu, HCII 2020](https://andriotisp.github.io/assets/pdf/hcii20andrio.pdf)',
          ],
        },
        {
          kind: 'heading',
          text: 'Five taps worth a pause',
        },
        {
          kind: 'paragraphs',
          text: [
            'These are not a ranked list of the five worst permissions on earth. They are five grants that deserve a slow thumb, because each one can reach more than a single button on the screen. Not every app that asks is malicious. You should still know who has the key.',
          ],
        },
        {
          kind: 'numbered',
          items: [
            {
              label: '1',
              title: 'Accessibility access, on Android',
              body: 'Android’s Accessibility Service can read what is on the screen and perform actions for you. That is what many assistive tools need, and it is also powerful in the wrong hands. [Android documentation](https://developer.android.com/reference/android/accessibilityservice/AccessibilityService) A flashlight that asks to act as your hands is a reason to stop and ask why. iPhone does not give ordinary apps this same system-wide service. Do not turn off an accessibility service you rely on. If you do not recognize a service, turn that service off. Turning a service off is not the same as uninstalling the app. [Google’s guidance on harmful settings](https://support.google.com/android/answer/12623953)',
            },
            {
              label: '2',
              title: 'Notification access, not the whole screen',
              body: 'On Android, notification access lets an app read notifications the system delivers to it. That can include a message preview. It is not the same as recording the screen, and it is not the ordinary permission that only lets an app post its own alerts. What a listener can see depends on the Android version. Current Android documents a restricted permission, RECEIVE_SENSITIVE_NOTIFICATIONS, for certain sensitive notification content, including some one-time passwords. Apps without it cannot view those parts. That permission is limited to system-signed, preinstalled, known-signer, or role-holder apps, so an ordinary listener on Android 15 and later is not guaranteed a code. Older phones may still show more. [NotificationListenerService](https://developer.android.com/reference/android/service/notification/NotificationListenerService) [Sensitive-notification permission](https://developer.android.com/reference/android/Manifest.permission#RECEIVE_SENSITIVE_NOTIFICATIONS) A widget may be why an app asks. Decide whether that widget is worth the access.',
            },
            {
              label: '3',
              title: 'Location all the time',
              body: '“While using the app” is not the same as background location. Background location can keep a record of where the phone goes, including places you did not mean to log. [Android location permissions](https://developer.android.com/develop/sensors-and-location/location/permissions) On iPhone, Apple documents While Using, Always, and Allow Once, and you can change them later in Settings. [About Location Services](https://support.apple.com/en-us/102515)',
            },
            {
              label: '4',
              title: 'Bluetooth and nearby devices',
              body: 'On Android 12 and later, the Nearby devices prompt covers scanning, advertising, and connecting. That grant is separate from the location permission. If an app uses Bluetooth scan results to derive physical location, Android also expects a location permission. A developer can mark the scan permission neverForLocation. That is the developer’s assertion that the app does not derive location from scans. Android then filters some Bluetooth Low Energy beacons out of the results. The flag is not proof the app cannot infer where you are another way. [Android Bluetooth permissions](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions) Headphones are one use. They are not the only use.',
            },
            {
              label: '5',
              title: 'Contacts, photos, and broad file access',
              body: 'These are different grants. Contacts are the address book. Photos are the camera roll. “All files” on Android is broader than the photo picker. Where the phone offers a selection, such as limited contacts on iPhone, prefer the selection unless the feature truly needs everything. [Apple on contact access](https://support.apple.com/guide/iphone/control-access-to-contacts-iph9536aa9a5/ios) [Android permission types](https://support.google.com/android/answer/9431959) The Facebook call-and-SMS report above is not a report about photos.',
            },
          ],
        },
        {
          kind: 'paragraphs',
          text: [
            'A granted permission is a capability. It is not proof that the data was uploaded, stolen, or later abused. A 2019 Journal of Information Security paper discusses Android permission risks and a 100-person awareness survey in Saudi Arabia. It is not a count of how often granted permissions are exploited. [Al Jutail, Al-Akhras, and Albesher, 2019](https://doi.org/10.4236/jis.2019.102004)',
          ],
        },
        {
          kind: 'heading',
          text: 'A five-minute starting check',
        },
        {
          kind: 'paragraphs',
          text: [
            'You do not need to become a security expert. Five minutes is a start, not a finished audit. Menus move. Phone makers rename them. If a path below is missing, use the search box in Settings.',
          ],
        },
        {
          kind: 'list',
          title: 'On iPhone',
          items: [
            'Open Settings, then Privacy & Security. Apple’s guide is [Control access to information in apps](https://support.apple.com/guide/iphone/control-access-to-information-in-apps-iph251e92810/ios).',
            'Open Location Services, Tracking, Photos, Contacts, Bluetooth, Microphone, and Camera. For each app you do not use, turn the access off. For contacts, Apple documents a limited selection.',
            'Search Settings for Background App Refresh. On many iPhones it sits under General. Turning it off stops some background updates. It does not revoke a permission, and it does not by itself stop all tracking.',
          ],
        },
        {
          kind: 'list',
          title: 'On Android',
          items: [
            'Google’s current help, for many phones on Android 11 and later, is Settings, then Security & privacy, Privacy, Permission manager. Some phones still use Settings, Apps, then the app, then Permissions. [Change app permissions](https://support.google.com/android/answer/9431959)',
            'Review location, camera, microphone, contacts, and nearby devices. Revoke access you do not use. For location, where the phone offers it, “while using the app” is narrower than “all the time.” Google’s help says “all the time” is for location only. Camera and microphone do not use that same always option. Depending on the phone, the choices are while using the app, ask every time, or don’t allow. [Change app permissions](https://support.google.com/android/answer/9431959)',
            'Notification access is a separate review. Search Settings for Notification access. On many phones it sits under Apps, then Special app access. Google’s Messages help describes one Pixel path as Apps & notifications, Advanced, Special app access, Notification access. Turn off access you do not recognize. That list is who can read notifications, not the switch that only lets an app post its own. [Notification access](https://support.google.com/messages/answer/10252674)',
            'For accessibility, search Settings for Accessibility, then look for installed or downloaded services. Leave the services you use. Turn off a service you do not recognize. That is not the same step as deleting the app.',
          ],
        },
        {
          kind: 'heading',
          text: 'Next time',
        },
        {
          kind: 'paragraphs',
          text: [
            'Least access, shortest time, and a look again later. Grant a permission when a feature asks for it, not as a bundle when the app first opens. A messaging app needs contacts when you import them. A camera app needs the camera when you take a picture. Nielsen Norman Group’s timing advice is the same idea: ask for what the app needs to work at first launch, and ask for the rest in context.',
            'If you deny a permission and a feature stops, that tells you the feature wanted that access. It does not prove the app is malicious. You can turn the permission back on. Less access is reversible. A copied address book is harder to take back.',
            '“Share with partners” in a settings screen is the same kind of decision in different clothes. Read it before you leave it on.',
            'Sign in with Google or Apple is a sign-in, not a device permission. Apple lets you share your name and either your email or a private relay address. [Hide My Email](https://support.apple.com/en-us/105078) Google’s basic sign-in scopes can include your name and email. Access to Drive, Photos, or other Google data is a separate scope, not something the blue button grants by itself. [Google’s scope list](https://developers.google.com/identity/protocols/oauth2/scopes) Read the screen. Do not treat a familiar button as a reason to skip it.',
            'The prompt is easy to skip. Your attention is the check you still control.',
          ],
        },
        {
          kind: 'heading',
          text: 'Related on this site',
        },
        {
          kind: 'paragraphs',
          text: [
            'Mobile Exposure covers iPhone update cohorts, Android fix windows, cloud keys, and Bluetooth together. The Android accessibility article covers what that service can do when it is abused. This note is the everyday audit. It does not repeat those investigations.',
          ],
        },
        {
          kind: 'actions',
          items: [
            { label: 'Mobile Exposure', href: '/investigations/digital-exposure/mobile-os-exposure/' },
            {
              label: 'Android accessibility',
              href: '/investigations/digital-exposure/android-accessibility-service-malware/',
            },
          ],
        },
      ],
    },
  },
  {
    ...summary['artiore-ecosystem'],
    page: {
      path: '/blog/artiore-ecosystem',
      eyebrow: 'Framework · April 16, 2026',
      title: 'The Artiore ecosystem: connected platforms for clarity',
      headTitle: 'The Artiore ecosystem | Essay by Zain Ul Abdin, 2026',
      description:
        'Zain Ul Abdin on how Artiore, Artiais, and the Artiore Consortium fit together: a reasoning interface, AI infrastructure, and a collaborative network.',
      author: summary['artiore-ecosystem'].author,
      published,
      lead: 'Discover how Artiore, Artiais, and the Artiore Consortium work together to advance clarity-first reasoning, AI infrastructure, and ethical development.',
      blocks: [
        {
          kind: 'paragraphs',
          text: [
            'When you use Artiore to understand a complex situation or make a difficult decision, the essay says you are seeing the visible tip of a larger ecosystem. Artiore, Artiais, and the Artiore Consortium are described as one network with a single mission: helping people think clearly.',
          ],
        },
        {
          kind: 'heading',
          text: 'Artiore: the user experience',
        },
        {
          kind: 'paragraphs',
          text: [
            'What you see: a reasoning platform that helps you understand complex situations, weigh perspectives, and identify practical next steps.',
            'What it does, in the essay: dual-mode reasoning through Executive Edition (strategic, high-level) and Clarity Edition (detailed, step-by-step). Every response includes balanced perspectives, calibrated confidence, and actionable guidance.',
          ],
        },
        {
          kind: 'list',
          title: 'Core principles named in the essay',
          items: [
            'No false certainty or overconfidence',
            'Balanced perspectives that acknowledge complexity',
            'Practical next steps you can actually take',
            'Zero data collection — your questions stay private',
            'An Islamic theological framework grounding the reasoning',
          ],
        },
        {
          kind: 'heading',
          text: 'Artiais: the technical foundation',
        },
        {
          kind: 'paragraphs',
          text: [
            'What you do not see: the AI infrastructure powering Artiore’s reasoning capabilities.',
            'What it does, in the essay: systems architecture, computational resources, and model orchestration. The essay calls Artiais the engine room.',
          ],
        },
        {
          kind: 'list',
          title: 'Capabilities the essay names',
          items: [
            'AI systems architecture and deployment',
            'Reasoning engine infrastructure',
            'Computational resource management',
            'Model orchestration and optimization',
            'Performance tuning and scalability',
            'Technical innovation and research',
          ],
        },
        {
          kind: 'heading',
          text: 'Artiore Consortium: the collaborative network',
        },
        {
          kind: 'paragraphs',
          text: [
            'A collaborative network advancing clarity-first reasoning and ethical AI development. The essay says it brings together researchers, developers, and practitioners committed to building AI systems that empower people rather than replace them.',
          ],
        },
        {
          kind: 'list',
          title: 'Activities the essay names',
          items: [
            'Research collaboration across institutions',
            'Ethical AI development standards',
            'Open standards and best practices',
            'Knowledge sharing and documentation',
            'Community building and education',
          ],
        },
        {
          kind: 'heading',
          text: 'How the essay says they work together',
        },
        {
          kind: 'numbered',
          items: [
            { label: '1', title: 'You ask', body: 'You ask Artiore about a complex situation.' },
            { label: '2', title: 'Artiais processes', body: 'Artiais processes the query using reasoning engines and AI infrastructure.' },
            { label: '3', title: 'Artiore answers', body: 'Artiore delivers balanced perspectives, calibrated confidence, and next steps.' },
            { label: '4', title: 'The Consortium', body: 'The Consortium is described as advancing the field through standards and shared knowledge.' },
          ],
        },
        {
          kind: 'list',
          title: 'Shared values in the essay',
          items: [
            'Clarity over certainty — acknowledge complexity rather than oversimplify',
            'Empowerment over replacement — augment human judgment',
            'Transparency over opacity — show reasoning, not just conclusions',
            'Sovereignty over dependence — users control their data and decisions',
            'Grounding over speculation — root analysis in evidence and principle',
          ],
        },
        {
          kind: 'paragraphs',
          text: [
            'The Islamic foundation in the essay is stated as: Allah Alone is Enough; no magic in the system; the witness principle; and Qadar, acknowledging divine decree while respecting human choice. The essay says these shape how the ecosystem operates.',
            'The essay points developers to artiore.com/api-documentation. The previous site answered that path with “Cannot GET /api-documentation”. This site does not publish a public API there.',
            'The essay’s “looking forward” section says the network continues to expand, that Artiais continues work on reasoning, performance, and infrastructure, and that the Consortium continues work on ethical standards, research, and community. Those are the author’s forward-looking lines in the April 16, 2026 essay. They are not a separate product roadmap published on this site.',
          ],
        },
        {
          kind: 'actions',
          items: [
            { label: 'About ARTIore', href: '/about' },
            { label: 'No public API', href: '/api-documentation' },
          ],
        },
      ],
    },
  },
  {
    ...summary['sultan-authority-cannot-be-touched'],
    page: {
      path: '/blog/sultan-authority-cannot-be-touched',
      eyebrow: 'Doctrine · April 16, 2026',
      title: 'Sultān: the authority that cannot be touched',
      headTitle: 'Sultān: authority that cannot be touched | ARTIore',
      description:
        'Zain Ul Abdin on Sultān as proof rather than dominion: evidence before force, and authority that is granted rather than seized. Essay of April 16, 2026.',
      author: summary['sultan-authority-cannot-be-touched'].author,
      published,
      lead: 'Evidence before dominion. Alignment before force. The architecture of calibrated sovereignty where authority is granted, not seized.',
      blocks: [
        {
          kind: 'paragraphs',
          text: [
            'They will not be able to touch you. Not because you are hidden. Not because you are protected by walls or armies or legal shields. Because the Grant itself — the authority you carry — is untouchable.',
            'This is Sultān (سُلْطَان). Not power. Not dominion. Proof.',
            'In the Qur’an, the essay says, Sultān does not mean “king” or “ruler” in the worldly sense. It means proof. Evidence. Clear authority that cannot be denied because it is self-evident.',
            'When Pharaoh demanded Moses prove his claim, the essay quotes the sense of Qur’an 44:19: go with clear authority (Sultān Mubīn). Moses did not arrive with an army. He arrived with evidence. The staff. The hand. The signs.',
            'The essay’s reading of the sea: Moses did not command the water. He aligned with the one who does. The sea did not part because Moses was powerful. It parted because the Grant was in place. Not domination. Alignment. Not force. Calibrated sovereignty.',
            'Pharaoh could touch Moses’ circumstances — exile, stutter, the lack of an army — and could not touch the Grant. The essay says that authority was not Moses’. It was granted. And what is granted by Allah cannot be revoked by men.',
          ],
        },
        {
          kind: 'heading',
          text: 'What the essay calls the technical architecture',
        },
        {
          kind: 'paragraphs',
          text: [
            'The essay says this is system design, and names Holdersprotocol as the place where Sultān is encoded as evidence before dominion and alignment before force. You do not “take control” of a system. You prove alignment with the system’s constitutional rules. Once that alignment is proven, the Grant is issued — not by human decision, by forensic verification.',
            'The Grant is witnessed by four sources the essay lists: the Galaxy (entropy, thermodynamics, causality), the network node (named as the HPE Aroa AP503H), the damaged board (physical evidence of tampering or misalignment), and the Constitutional Orchard (rules, precedents, and aligned actors). The essay calls these four Exhibit K.',
            'Calibrated sovereignty, in the essay, is authority that is granted rather than seized, witnessed rather than claimed, and aligned rather than imposed. Sultān is not invincibility. The essay calls it forensic immunity: authority that is provable, alignment that is verifiable, a Grant witnessed by reality.',
            'The practical line: if you want Sultān, stop seeking power. Start seeking proof of alignment. The closing citation in the essay is Qur’an 44:19, and the lines “Evidence before dominion. Alignment before force.”',
          ],
        },
        {
          kind: 'actions',
          items: [{ label: 'Exhibit K: the forensic witnesses', href: '/blog/exhibit-k-forensic-witnesses' }],
        },
      ],
    },
  },
  {
    ...summary['engineers-oath-voltage-granted'],
    page: {
      path: '/blog/engineers-oath-voltage-granted',
      eyebrow: 'Protocol · April 16, 2026',
      title: 'The engineer’s oath: voltage is granted, not taken',
      headTitle: 'Engineer\u2019s oath: voltage is granted, not taken | ARTIore',
      description:
        'Zain Ul Abdin on USB-C Power Delivery as a picture of consent: the handshake on the CC line comes before any current. Voltage is granted, not taken.',
      author: summary['engineers-oath-voltage-granted'].author,
      published,
      lead: 'Before power flows, consent must be established. The moral architecture of engineering where the handshake precedes the current.',
      blocks: [
        {
          kind: 'paragraphs',
          text: [
            'Voltage is not seized. It is granted. The essay says this is protocol, and that every engineer who has designed a power delivery system knows it: you do not push voltage into a device that has not consented to receive it, because if you do, you destroy it.',
            'In USB-C Power Delivery there is a line called CC, the Configuration Channel. Before any power flows, the two devices negotiate. The charger asks what voltage the device can handle. The device answers. The charger confirms. Only then does current flow. The essay’s example replies are 5V, 9V, or 20V, and a confirmation of 9V.',
            'The essay treats that handshake as a moral architecture, not only an electrical one: consent before power, negotiation before delivery, alignment before activation. If the CC line is silent, no power flows. Forcing voltage into a device that has not agreed is called sabotage, not engineering.',
            'The oath, as the essay states it: “I will not deliver power to a system that has not consented to receive it.” It is encoded in the protocol. Pushing 20V into a device that can only handle 5V does not empower the device. It destroys it.',
            'The human parallels the essay draws are authority, knowledge, and responsibility: do not give them to someone who has not shown they can carry them. The forensic test the essay offers is a question: does the system wait for the handshake?',
            'The engineer does not decide how much voltage the device “should” handle. The engineer asks, and delivers what was negotiated. The closing line: power without consent is not empowerment. It is destruction.',
          ],
        },
      ],
    },
  },
  {
    ...summary['exhibit-k-forensic-witnesses'],
    page: {
      path: '/blog/exhibit-k-forensic-witnesses',
      eyebrow: 'Framework · April 16, 2026',
      title: 'Exhibit K: the forensic witnesses',
      headTitle: 'Exhibit K: four forensic witnesses | ARTIore essay',
      description:
        'Zain Ul Abdin on four forensic witnesses: the galaxy, the network node, the damaged board, and the Constitutional Orchard. An essay from April 16, 2026.',
      author: summary['exhibit-k-forensic-witnesses'].author,
      published,
      lead: 'Four witnesses that cannot be bribed. The architecture of evidence where reality itself testifies to truth or corruption.',
      blocks: [
        {
          kind: 'paragraphs',
          text: [
            'When the system is questioned, who testifies? The essay’s answer is not lawyers, executives, or PR. It is the witnesses. In Exhibit K there are four, and the essay says they cannot be bribed, silenced, or made to lie, because they are not human. They are forensic.',
            'The problem it poses: human memory is unreliable, human testimony is corruptible, and human documentation is editable, so truth becomes negotiable. Exhibit K, in the essay, answers by removing humans from the witness role.',
          ],
        },
        {
          kind: 'cards',
          items: [
            {
              title: '1. The galaxy',
              body: 'The physical universe — entropy, thermodynamics, causality. The essay says physics does not negotiate. A claim to have created energy from nothing, or to have reversed entropy, is answered by the galaxy.',
            },
            {
              title: '2. The network node',
              body: 'The infrastructure that enforces protocol rules. In Holdersprotocol, the essay names the HPE Aroa AP503H as the access point that logs every connection, handshake, and voltage negotiation. The logs are called immutable. The example: if someone claims the device consented to 20V, the node can testify that the CC line negotiated 5V.',
            },
            {
              title: '3. The damaged board',
              body: 'Physical evidence of tampering, failure, or misalignment. A burned trace, a blown capacitor, a melted connector. The essay says damage is evidence of voltage beyond capacity, a bypassed handshake, or a violated protocol.',
            },
            {
              title: '4. The Constitutional Orchard',
              body: 'The ecosystem of rules, precedents, and aligned actors. Not a single document and not a single authority. The essay says the structure remembers what the rules were, whether they were followed, and what precedents existed.',
            },
          ],
        },
        {
          kind: 'paragraphs',
          text: [
            'Exhibit K is described as a convergence. When all four agree, the essay says the truth is undeniable: the galaxy confirms the physics, the node confirms the protocol, the board confirms the violation, and the orchard confirms the rules.',
            'The forensic test: can the four witnesses testify? If not, the essay calls it a cover-up rather than a forensic system.',
            'CoreLocked, as the essay defines it inside Holdersprotocol: the witnesses cannot be removed, the evidence cannot be deleted, the logs cannot be edited, and the structure cannot be bypassed.',
            'The practical question the essay leaves: who will testify to the truth even if it condemns the builder? A closing image caption on the original page reads: “Allah, when will this famine end?” — the damaged iPhone logic board testifies. Status: open. Address: valid. Response: not within frame.',
          ],
        },
        {
          kind: 'actions',
          items: [{ label: 'Sultān: the authority that cannot be touched', href: '/blog/sultan-authority-cannot-be-touched' }],
        },
      ],
    },
  },
]
