import { blogSummaries, type BlogSummary } from './blog-summaries'
import { links } from './links'
import type { PageDocument } from './types'

export type BlogMeta = BlogSummary

const summary = Object.fromEntries(blogSummaries.map((item) => [item.slug, item])) as Record<string, BlogSummary>

const published = '2026-04-16'

export const blogPosts: Array<BlogMeta & { page: PageDocument }> = [
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
            'The essay points developers to artiore.com/api-documentation. That address responds with “Cannot GET /api-documentation”. No public API is documented on artiais.com.',
            'The essay’s “looking forward” section says the network continues to expand, that Artiais continues work on reasoning, performance, and infrastructure, and that the Consortium continues work on ethical standards, research, and community. Those are the author’s forward-looking lines in the April 16, 2026 essay. They are not a separate product roadmap published on this site.',
          ],
        },
        {
          kind: 'actions',
          items: [
            { label: 'Try ARTIore', href: links.artioreTry },
            { label: 'About ARTIore', href: '/about' },
            { label: 'No public API', href: '/api-documentation' },
            { label: 'Artiore Consortium', href: links.consortium },
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
