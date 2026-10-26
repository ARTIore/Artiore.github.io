import { links } from './links'
import type { PageDocument } from './types'

export const resourcesPage: PageDocument = {
  path: '/resources',
  eyebrow: 'The Codex',
  title: 'Knowledge base',
  headTitle: 'ARTIore resources | Codex articles, glossary, and gates',
  description:
    'Articles, a glossary, and knowledge areas from the Artiore Codex: the output model, fair chance, six gates, humility, and the Eternal Loop doctrine.',
  lead: 'Articles, reference material, and a working glossary on the Artiore reasoning framework — its architecture, doctrine, and application. The insights below are the ones published on artiore.com/resources.',
  blocks: [
    {
      kind: 'cards',
      items: [
        {
          eyebrow: 'Foundation · 4 min',
          title: 'What makes Artiore different from a standard AI interface',
          body: 'Most AI tools return answers. Artiore returns structured reasoning. Key insight: “The difference is not capability — it is architecture. An answer without structure is a conclusion without a path. You cannot audit it, challenge it, or build on it.”',
        },
        {
          eyebrow: 'Principles · 5 min',
          title: 'The fair chance principle',
          body: 'Complexity is often used — intentionally or not — to exclude people from understanding their rights, options, and opportunities. Key insight: “Access to structured reasoning should not be a function of education, wealth, or proximity to experts. The system exists to close that gap.”',
        },
        {
          eyebrow: 'Framework · 6 min',
          title: 'How the Artiore output model works',
          body: 'A five-part structured output: Core Answer, Alternative Perspectives, Tradeoffs, Confidence Level, and Recommended Action. Key insight: “Each block in the output is a failure mode it prevents. Confidence Level exists because false certainty is the most dangerous form of misinformation.”',
        },
        {
          eyebrow: 'Application · 7 min',
          title: 'Using Artiore for strategic decisions',
          body: 'Key insight: “The protocol does not tell you what to decide. It tells you what you are actually deciding — which is often different from what you think you are deciding.”',
        },
        {
          eyebrow: 'Design · 4 min',
          title: 'Humility as a system property',
          body: 'Artiore is designed to hold no final authority. Key insight: “A system that claims final authority is a system that has replaced judgment with compliance. The goal is augmented reasoning, not outsourced decision-making.”',
        },
        {
          eyebrow: 'Transparency · 5 min',
          title: 'Separating facts, reasoning, and perspective',
          body: 'Key insight: “When facts and inferences are blended without distinction, the reader cannot evaluate the output. They can only accept or reject it wholesale — which is not reasoning.”',
        },
        {
          eyebrow: 'Protocol · 6 min',
          title: 'The six gates',
          body: 'Before a response is issued, it passes through six sequential gates: Truth, Measure, Integrity, Safety, Directive, and Proof. A gate cannot be skipped. A gate cannot be partially passed. Key insight: “Skipping the Measure Gate to reach the Directive Gate produces confident, unmeasured action.”',
        },
        {
          eyebrow: 'Doctrine · 5 min',
          title: 'The Eternal Loop',
          body: 'Reason, Courage, Service, Justice. Key insight: “The loop has no terminal state. Justice without Reason produces righteous error. Courage without Service produces isolated strength. The system only works when all four are active simultaneously.”',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Glossary',
    },
    {
      kind: 'cards',
      items: [
        { title: 'Distortion', body: 'Any gap between the question as posed and the question that should be answered. Classified as Minor, Significant, or Critical.' },
        { title: 'Artifact', body: 'A usable output — a document, decision, framework, or draft — that remains after an exchange. The measure of a completed cycle.' },
        { title: 'Gate', body: 'A sequential evaluation checkpoint that every response must pass before being issued. Six gates. No skipping. No partial passage.' },
        { title: 'Confidence level', body: 'A calibrated signal of certainty. Not a disclaimer — a structural indicator of how much additional information is required before acting.' },
        { title: 'Velocity drift', body: 'The failure mode of responding before the gates have been run. Produces fast output that fails on accuracy, integrity, or safety.' },
        { title: 'Frame capture', body: 'Accepting the questioner’s framing without testing it. Produces answers to the wrong question with high confidence.' },
        { title: 'Eternal Loop', body: 'The four-pillar doctrine: Reason → Courage → Service → Justice → ∞. A continuum with no terminal state.' },
        { title: 'Distribution engine', body: 'The system that calibrates response depth to question stakes. Simple questions receive simple answers. High-stakes questions receive complete answers.' },
      ],
    },
    {
      kind: 'heading',
      text: 'Knowledge areas',
    },
    {
      kind: 'cards',
      items: [
        {
          title: 'Decision intelligence',
          body: 'How structured reasoning improves decisions under uncertainty. Covers the five-block output model, confidence calibration, and tradeoff analysis.',
        },
        {
          title: 'Framework design',
          body: 'Gate design, distortion detection, and the response architecture.',
        },
        {
          title: 'Human empowerment',
          body: 'Using AI as a reasoning instrument, not a replacement for judgment. Covers the fair chance principle, agency, and access.',
        },
        {
          title: 'Operational doctrine',
          body: 'The Sulemani Protocol: six gates, prohibitions, failure modes, and the definition of success. The access page describes the protocol documentation as covering distortion detection, response architecture, failure modes, and the definition of success.',
        },
      ],
    },
    {
      kind: 'paragraphs',
      text: [
        'The Codex page also offers an “Artiore Companion” PDF, described as a portable reference covering the framework, the Sulemani Protocol, and the Eternal Loop. That file is published on artiore.com. It is not hosted in this repository, so this page does not pretend to offer the download.',
      ],
    },
    {
      kind: 'actions',
      items: [
        { label: 'Companion handbook on artiore.com', href: links.artioreCompanion },
        { label: 'Prompt Framework V1.1', href: links.frameworkHtml },
        { label: 'Read the doctrine', href: '/doctrine' },
        { label: 'Read the protocol', href: '/protocol' },
      ],
    },
  ],
}

export const caseStudiesPage: PageDocument = {
  path: '/case-studies',
  eyebrow: 'Case studies',
  title: 'Published examples',
  headTitle: 'ARTIore case studies | Four examples, as published',
  description:
    'Four examples from artiore.com: an infrastructure migration, a security incident, feature prioritization, and an EHR vendor selection. Figures are as published.',
  lead: 'These are the four examples published on artiore.com/case-studies. The page calls them real-world examples of the four-pillar framework. The figures below are copied from that page. This site does not add results.',
  blocks: [
    {
      kind: 'cards',
      items: [
        {
          eyebrow: 'Technology leadership',
          title: 'Infrastructure migration decision',
          body: 'Challenge, as published: a mid-size SaaS company deciding whether to migrate from on-premise infrastructure to cloud services, involving $2M+ in costs, an 18-month timeline, and operational risk. Approach: the four-pillar framework, beyond a typical cost-benefit calculation. Pillars named: Reason, Courage, Service. Metrics named: decision confidence High, stakeholder alignment 100%, timeline variance −8%, cost variance −15%. Outcome as published: decision made with full stakeholder alignment; migration completed 2 months ahead of schedule with 15% cost savings.',
        },
        {
          eyebrow: 'Cybersecurity',
          title: 'Security incident response protocol',
          body: 'Challenge, as published: unusual network activity that could indicate compromise, and a choice between immediate shutdown and continued monitoring. Approach: structure the decision under pressure. Pillars named: Reason, Courage, Justice. Metrics named: response time 4 hours, data loss 0%, business continuity 85%, compliance status Full. Outcome as published: incident contained within 4 hours, zero data loss, forensic trail preserved.',
        },
        {
          eyebrow: 'Product management',
          title: 'Product feature prioritization',
          body: 'Challenge, as published: 15 feature requests, limited engineering capacity, and conflicting stakeholder priorities. Approach: the Service pillar, reframing priority around utility rather than popularity or politics. Pillars named: Service, Justice, Reason. Metrics named: 5 of 15 features prioritized, team alignment 100%, user satisfaction +23%, political conflict −90%. Outcome as published: a roadmap of 5 features, an aligned engineering team, and stakeholders who understood the tradeoffs.',
        },
        {
          eyebrow: 'Procurement',
          title: 'Critical vendor selection',
          body: 'Challenge, as published: a healthcare organization selecting an electronic health record vendor, affecting 500+ staff and 50,000+ patients, as a 10-year commitment. Approach: evaluation beyond feature checklists and sales presentations. Pillars named: Reason, Service, Justice. Metrics named: staff approval 95%, implementation time on schedule, patient satisfaction +18%, vendor accountability contractual. Outcome as published: vendor selected with 95% staff approval, implementation completed on time, patient satisfaction increased 18%.',
        },
      ],
    },
    {
      kind: 'paragraphs',
      text: [
        'The case-studies page says Artiore is available with no training required and no implementation timeline. The try page is the live reasoning surface.',
      ],
    },
    {
      kind: 'actions',
      items: [
        { label: 'Try ARTIore', href: links.artioreTry },
        { label: 'Read the doctrine', href: '/doctrine' },
      ],
    },
  ],
}

export const implementationPage: PageDocument = {
  path: '/implementation',
  eyebrow: 'Implementation guides',
  title: 'Guides published for the four pillars',
  headTitle: 'ARTIore implementation | Five guides for the four pillars',
  description:
    'Five guides on artiore.com: getting started, team decisions, rapid decisions, personal decisions, and vendor evaluation. Full steps stay on that page.',
  lead: 'The implementation page publishes five guides for applying the four-pillar framework. Each guide has a level and a time. The expanded steps are behind “Show implementation steps” on artiore.com and were not in the text captured for this site, so they are not rewritten here.',
  blocks: [
    {
      kind: 'cards',
      items: [
        {
          eyebrow: 'Beginner · 15 minutes',
          title: 'Getting started with Artiore',
          body: 'Learn the fundamentals of structured reasoning and how to apply the four-pillar framework to your first decision.',
        },
        {
          eyebrow: 'Intermediate · 30 minutes',
          title: 'Using Artiore for team decisions',
          body: 'Apply structured reasoning to group decision-making, aiming at alignment and less political friction.',
        },
        {
          eyebrow: 'Advanced · 10 minutes',
          title: 'Rapid decision-making under pressure',
          body: 'Apply the framework when time is limited and stakes are high.',
        },
        {
          eyebrow: 'Beginner · 20 minutes',
          title: 'Personal decision-making with Artiore',
          body: 'Apply structured reasoning to personal decisions such as career changes, major purchases, or life transitions.',
        },
        {
          eyebrow: 'Intermediate · 45 minutes',
          title: 'Vendor and partner evaluation',
          body: 'Evaluate vendors, contractors, or partners with structured criteria and transparent scoring.',
        },
      ],
    },
    {
      kind: 'paragraphs',
      text: [
        'The page’s closing instruction is: start with a real decision, analyze it through all four pillars, and see how structured reasoning changes the picture. The try surface is artiore.com/try.',
      ],
    },
    {
      kind: 'actions',
      items: [
        { label: 'Open the guides on artiore.com', href: links.artioreImplementation },
        { label: 'Try ARTIore', href: links.artioreTry },
        { label: 'Read the case studies', href: '/case-studies' },
      ],
    },
  ],
}

export const apiPage: PageDocument = {
  path: '/api-documentation',
  eyebrow: 'API',
  title: 'No public API is available',
  headTitle: 'No public API is published | ARTIore on artiais.com',
  description:
    'artiais.com does not publish a public API. artiore.com/api-documentation responds with “Cannot GET /api-documentation”. No endpoints or schemas here.',
  noindex: true,
  sitemap: false,
  lead: 'There is no public API to document on artiais.com. There are no endpoints and no schemas on this site.',
  blocks: [
    {
      kind: 'paragraphs',
      text: [
        'The address artiore.com/api-documentation responds with “Cannot GET /api-documentation”. A blog post on the ecosystem points developers at that address. The address does not serve documentation.',
        'Use the reasoning platform at artiore.com/try. Read the Grand Directional Prompt Framework at /framework.html. Play Eternia Aurora Sovereign Engine in the browser. Write to artiore@outlook.com if you need to ask about access.',
      ],
    },
    {
      kind: 'actions',
      items: [
        { label: 'Try ARTIore', href: links.artioreTry },
        { label: 'Prompt Framework V1.1', href: links.frameworkHtml },
        { label: 'Eternia Aurora Sovereign Engine', href: '/engine' },
        { label: 'Email artiore@outlook.com', href: links.email },
      ],
    },
  ],
}

export const libraryPages: PageDocument[] = [resourcesPage, caseStudiesPage, implementationPage, apiPage]
