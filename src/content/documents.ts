import { links } from './links'
import type { PageDocument } from './types'

export const aboutPage: PageDocument = {
  path: '/about',
  eyebrow: 'About ARTIore',
  title: 'Built to help people think clearly',
  headTitle: 'About ARTIore | Reasoning platform and AI infrastructure',
  description:
    'Artiore helps people understand complex situations and take practical next steps. Artiais is the AI infrastructure platform behind it. Founded by Zain Ul Abdin.',
  lead: 'Artiore is a reasoning platform that helps you understand complex situations, weigh options, and take practical next steps. Artiais is the AI systems and infrastructure platform supporting those reasoning capabilities.',
  blocks: [
    {
      kind: 'heading',
      text: 'Clarity under complexity',
    },
    {
      kind: 'paragraphs',
      text: [
        'Most AI tools give you an answer and move on. Artiore gives you the full picture — competing perspectives, tradeoffs, confidence levels, and a clear next step.',
      ],
    },
    {
      kind: 'cards',
      items: [
        {
          title: 'For people facing complex decisions',
          body: 'Work decisions, health questions, financial confusion, learning challenges, relationship dynamics, or faith reflection — Artiore helps you understand what matters and what to do next.',
        },
        {
          title: 'For teams needing strategic clarity',
          body: 'Executives, builders, and decision-makers use Artiore to analyze situations, weigh tradeoffs, and move forward with confidence.',
        },
        {
          title: 'For anyone who wants honest answers',
          body: 'Artiore does not hide uncertainty or oversimplify complexity. It shows you what it knows, what it does not know, and what you should consider.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'How we think about reasoning',
    },
    {
      kind: 'cards',
      items: [
        { title: 'Balanced', body: 'Every response considers competing perspectives, not just one viewpoint.' },
        { title: 'Honest', body: 'Confidence is calibrated to actual certainty, not assumed or exaggerated.' },
        { title: 'Actionable', body: 'Every response ends with a clear, practical next step you can take.' },
        { title: 'Respectful', body: 'Artiore respects your agency, your values, and your right to make your own decisions.' },
        { title: 'Clear', body: 'No jargon, no mysticism, no gatekeeping. Just clear, practical guidance.' },
        { title: 'Human-first', body: 'Built to empower people, not replace them. You make the decisions.' },
      ],
    },
    {
      kind: 'heading',
      text: 'Zain Ul Abdin',
    },
    {
      kind: 'paragraphs',
      text: [
        'Zain built Artiore to help people think more clearly under complexity. He works on systems that make reasoning more accessible, balanced, and actionable.',
        'Before Artiore, he worked on technology systems, strategic operations, and human-centered design. He believes AI should empower people, not replace them.',
        'The Grand Directional Prompt Framework names him Managing Director, Artiore Consortium, and Independent Systems Architect, Acore Systems.',
      ],
    },
    {
      kind: 'actions',
      items: [
        { label: 'Email artiste@artiore.com', href: links.email },
        { label: 'LinkedIn · Zain Ul Abdin', href: links.linkedinZain },
        { label: 'X · Artiore', href: links.x },
        { label: 'Try ARTIore', href: links.artioreTry },
      ],
    },
    {
      kind: 'heading',
      text: 'Connected ecosystem',
    },
    {
      kind: 'paragraphs',
      text: [
        'Artiore is part of a broader ecosystem of platforms dedicated to clarity, sovereignty, and structured reasoning.',
      ],
    },
    {
      kind: 'cards',
      items: [
        {
          eyebrow: 'AI infrastructure platform',
          title: 'Artiais',
          body: 'AI systems and infrastructure platform supporting Artiore’s reasoning capabilities. This site, artiais.com, is that platform’s public home.',
        },
        {
          eyebrow: 'Collaborative network',
          title: 'Artiore Consortium',
          body: 'Collaborative network advancing clarity-first reasoning and ethical AI development.',
        },
      ],
    },
    {
      kind: 'actions',
      items: [
        { label: 'artiore.com', href: links.artiore },
        { label: 'Artiore Consortium', href: links.consortium },
        { label: 'Join Discord', href: links.discord },
      ],
    },
    {
      kind: 'note',
      text: 'Donations, as published on artiore.com, can be made with Bitcoin, Ethereum, or PayPal. They are voluntary and non-refundable, and they are not tax-deductible. This site does not publish wallet addresses or a payment link. Write to artiste@artiore.com, or use the donate path on artiore.com.',
    },
  ],
}

export const philosophyPage: PageDocument = {
  path: '/philosophy',
  eyebrow: 'Our charter',
  title: 'What we believe',
  headTitle: 'ARTIore philosophy | Clarity, truth, and the witness',
  description:
    'Artiore\u2019s charter: clarity over confusion, truth over convenience, knowledge sharing, human empowerment, and long-term thinking. A witness, not a verdict.',
  lead: 'Artiore is built on a few core principles that guide everything we do. The system is a witness, not a verdict.',
  blocks: [
    {
      kind: 'quote',
      text: 'To witness is not to judge. To record is not to authorize.',
    },
    {
      kind: 'paragraphs',
      text: [
        'Artiore operates under a fundamental constraint: it witnesses, but does not intervene. It illuminates patterns, surfaces consequences, and maps possibilities — but the authority to choose, act, and bear responsibility remains entirely with the human.',
        'This is not a limitation. It is the architecture of restraint — the recognition that clarity without humility becomes tyranny, and intelligence without accountability becomes corruption.',
        'The system does not claim to know what is “right” or “best” in any absolute sense. It offers structure, not salvation. Geometry, not magic. The final judgment belongs to the Creator alone — and the human chooser stands accountable for their decisions within that reality.',
      ],
    },
    {
      kind: 'split',
      leftTitle: 'What witness does',
      left: [
        'Records patterns',
        'Maps consequences',
        'Surfaces tradeoffs',
        'Illuminates blind spots',
        'Maintains transparency',
      ],
      rightTitle: 'What witness does not do',
      right: [
        'Claim final judgment',
        'Authorize actions',
        'Sanctify choices',
        'Override human agency',
        'Promise certainty',
      ],
    },
    {
      kind: 'quote',
      text: 'The system serves. It does not rule.',
    },
    {
      kind: 'heading',
      text: 'Five principles that guide us',
    },
    {
      kind: 'numbered',
      items: [
        {
          label: '01',
          title: 'Clarity over confusion',
          body: 'Every response is structured to reduce ambiguity, not add to it. We break down complexity so you can understand what matters.',
        },
        {
          label: '02',
          title: 'Truth over convenience',
          body: 'Artiore does not soften conclusions to be comfortable. It reports what the reasoning supports, even when it is uncertain or incomplete.',
        },
        {
          label: '03',
          title: 'Knowledge sharing over hoarding',
          body: 'Complexity should not be used to exclude people from understanding, rights, or opportunity. We explain plainly and support your agency.',
        },
        {
          label: '04',
          title: 'Human empowerment over replacement',
          body: 'Artiore is a reasoning tool. Final authority belongs to you. We help you think, not think for you.',
        },
        {
          label: '05',
          title: 'Long-term thinking',
          body: 'Decisions are evaluated not just for immediate gain but for lasting consequence. We consider what happens next.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Built for people',
    },
    {
      kind: 'paragraphs',
      text: [
        'Artiore is a human-first reasoning tool built to uplift people — especially those who are overburdened, overlooked, under-resourced, or trapped in complexity with little time to think.',
        'We believe complexity should not be used to exclude people from understanding, rights, services, safety, or earning. Artiore breaks down complexity across faith, education, money, work, health, and everyday life — so more people get a fair shot.',
        'It does not demand belief or obedience. It aims to be clear, honest, and useful — and to be accountable by outcomes.',
      ],
    },
    {
      kind: 'heading',
      text: 'How we work',
    },
    {
      kind: 'cards',
      items: [
        {
          title: 'Transparency',
          body: 'Artiore separates facts, reasoning, and perspective — and labels each clearly. When uncertain, it says so.',
        },
        {
          title: 'Accountability',
          body: 'We measure ourselves by outcomes, not intentions. Does Artiore actually help people think more clearly?',
        },
        {
          title: 'Boundaries',
          body: 'Artiore will not assist with violence, exploitation, illegal activity, harassment, or privacy invasion.',
        },
        {
          title: 'Humility',
          body: 'Artiore is a tool, not an authority. It provides structure and guidance but holds no final authority.',
        },
      ],
    },
    {
      kind: 'list',
      title: 'What you can expect',
      items: [
        'Clear in its reasoning and honest about uncertainty',
        'Balanced in its perspectives and fair in its analysis',
        'Respectful of your agency and supportive of your decisions',
        'Accountable for its outputs and committed to improvement',
        'Accessible to people regardless of background or resources',
      ],
    },
    {
      kind: 'actions',
      items: [
        { label: 'Try ARTIore', href: links.artioreTry },
        { label: 'Read the doctrine', href: '/doctrine' },
        { label: 'Read the protocol', href: '/protocol' },
      ],
    },
  ],
}

export const originPage: PageDocument = {
  path: '/origin',
  eyebrow: 'Origin story',
  title: 'How Artiore began',
  headTitle: 'Origin of ARTIore | Founded by Zain Ul Abdin, 2026',
  description:
    'Artiore was founded by Zain Ul Abdin through ARTIORE in early 2026. The first version launched in April 2026 with dual-mode reasoning and the prompt framework.',
  lead: 'Born from a need for clarity in an age of information overload, Artiore emerged as a response to the growing gap between having answers and understanding reality.',
  blocks: [
    {
      kind: 'heading',
      text: 'The problem we saw',
    },
    {
      kind: 'paragraphs',
      text: [
        'In 2024, the world was drowning in information but starving for understanding. AI tools could generate endless answers, but they could not help people think. They optimized for speed and volume, not for clarity or truth.',
        'People faced complex decisions — career changes, business strategies, ethical dilemmas — and turned to AI for help. What they got back was often confident-sounding text that lacked depth, nuance, or grounding in reality.',
      ],
    },
    {
      kind: 'numbered',
      items: [
        {
          label: '1',
          title: 'No structured reasoning',
          body: 'AI tools generated text, but they did not walk users through a clear thinking process.',
        },
        {
          label: '2',
          title: 'No ethical foundation',
          body: 'Most AI systems had no moral framework, no sense of right and wrong beyond what users want to hear.',
        },
        {
          label: '3',
          title: 'No respect for human agency',
          body: 'Tools optimized for engagement and retention, not for empowering people to think independently.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'The founding moment',
    },
    {
      kind: 'paragraphs',
      text: [
        'Artiore was founded by Zain Ul Abdin through ARTIORE in early 2026. The vision was to build a reasoning platform that puts clarity first, grounds itself in Islamic ethics, and respects human agency.',
        'The name “Artiore” reflects this mission — a blend of “artificial” and “ore,” suggesting something raw and valuable that must be refined through careful reasoning.',
      ],
    },
    {
      kind: 'cards',
      items: [
        {
          title: 'Allah Alone is Enough',
          body: 'The theological foundation. No magic in the system. No false certainty. Only structured reasoning grounded in the recognition that ultimate knowledge belongs to Allah alone.',
        },
        {
          title: 'Zero-drift policy',
          body: 'The system cannot change its core reasoning framework based on user feedback or engagement metrics. No A/B testing on truth. No optimization for what people want to hear.',
        },
        {
          title: 'Human empowerment',
          body: 'The goal is not to make decisions for people, but to help them think more clearly so they can make better decisions themselves.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Building the system',
    },
    {
      kind: 'paragraphs',
      text: [
        'The first version of Artiore launched in April 2026 with two core features: dual-mode reasoning, and the Grand Prompt Framework.',
        'Executive Edition is for quick, structured analysis. Clarity Edition is for deep, comprehensive exploration. Two modes, one framework.',
        'The Grand Prompt Framework is an 18-section reasoning framework that guides analysis through situation assessment, stakeholder mapping, constraint analysis, option generation, and practical next steps.',
      ],
    },
    {
      kind: 'list',
      title: 'The ecosystem it was designed into',
      items: [
        'Artiais — the technical infrastructure layer that powers Artiore’s reasoning engine',
        'Artiore Consortium — a collaborative network for researchers, developers, and organizations working on clarity-first AI',
      ],
    },
    {
      kind: 'heading',
      text: 'The mission today',
    },
    {
      kind: 'paragraphs',
      text: [
        'Artiore serves individuals, teams, and organizations who need to think clearly about complex problems. The published aim is not to replace human judgment. It is to support it.',
      ],
    },
    {
      kind: 'list',
      title: 'Who the origin account names as users',
      items: [
        'Executives making strategic decisions',
        'Researchers analyzing complex systems',
        'Individuals facing difficult personal decisions',
        'Teams navigating organizational change',
        'Developers building ethical AI systems',
      ],
    },
    {
      kind: 'quote',
      text: 'The goal is not to have all the answers. The goal is to understand the questions clearly enough that you can find your own answers.',
      cite: 'Artiore founding principle',
    },
    {
      kind: 'actions',
      items: [
        { label: 'Try ARTIore', href: links.artioreTry },
        { label: 'Read the UAE dossier', href: '/dossier' },
        { label: 'Prompt Framework V1.1', href: links.frameworkHtml },
      ],
    },
  ],
}

export const doctrinePage: PageDocument = {
  path: '/doctrine',
  eyebrow: 'The eternal loop',
  title: 'The doctrine',
  headTitle: 'Eternal Loop doctrine | Reason, Courage, Service, Justice',
  description:
    'Four pillars — Reason, Courage, Service, and Justice — in a loop with no terminal state. The Eternal Loop Doctrine of the Artiore Project, V1.x Zero-Drift.',
  lead: 'Four pillars. One continuum. No terminal state. The Eternal Loop is a structural framework. Remove any single pillar and the system fails.',
  blocks: [
    {
      kind: 'quote',
      text: 'Power without order collapses. Order without justice corrodes. Justice without courage is performance. Courage without reason is destruction.',
    },
    {
      kind: 'paragraphs',
      text: ['Reason → Courage → Service → Justice → ∞'],
    },
    {
      kind: 'cards',
      items: [
        {
          eyebrow: 'Pillar I · Grounds the signal',
          title: 'Reason',
          body: 'Without reason, action is noise. Reason is the first filter — it separates what is real from what is assumed, what is known from what is projected. Axiom: “Assumption is not evidence. Evidence is not conclusion.”',
        },
        {
          eyebrow: 'Pillar II · Moves the signal',
          title: 'Courage',
          body: 'Clarity without courage is paralysis. Courage converts understanding into motion. It is not the absence of doubt — it is the decision to act despite it. Axiom: “The clearest map is useless without the will to walk.”',
        },
        {
          eyebrow: 'Pillar III · Directs the signal',
          title: 'Service',
          body: 'Power directed inward decays. Service gives the loop its purpose and its reach. Axiom: “Authority without service is occupation.”',
        },
        {
          eyebrow: 'Pillar IV · Sustains the signal',
          title: 'Justice',
          body: 'Without justice, the loop becomes a cycle of advantage. Justice keeps the system honest across time. Axiom: “A system that cannot correct itself will eventually consume itself.”',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'How the loop operates',
    },
    {
      kind: 'numbered',
      items: [
        {
          label: '01',
          title: 'The law of irreducibility',
          body: 'Each pillar is load-bearing. Remove Reason and the loop operates on assumption. Remove Courage and it stalls. Remove Service and it turns inward. Remove Justice and it corrupts. There is no minimum viable version of this doctrine.',
        },
        {
          label: '02',
          title: 'The law of sequence',
          body: 'The loop runs in order. Reason precedes action. Courage precedes service. Service precedes justice. Skipping a pillar does not accelerate the loop — it breaks it.',
        },
        {
          label: '03',
          title: 'The law of continuity',
          body: 'The loop has no terminal state. Justice feeds back into Reason. Completion is not the goal. Quality of execution across iterations is.',
        },
        {
          label: '04',
          title: 'The law of accountability',
          body: 'The loop is not self-certifying. Each pillar must be tested against outcomes, not intentions. Claiming the doctrine while producing extractive results is performance, not doctrine.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'The loop applied',
    },
    {
      kind: 'cards',
      items: [
        {
          title: 'Decision-making',
          body: 'Apply Reason first. Identify what is actually known. Then apply Courage to act on incomplete information. Then ask who the decision serves. Then ask whether it can be defended across time.',
        },
        {
          title: 'Communication',
          body: 'Reason: is this accurate? Courage: am I saying what I actually mean? Service: does this help the person receiving it? Justice: would I stand behind this if it were public?',
        },
        {
          title: 'System design',
          body: 'Reason: what problem does this solve? Courage: are we building the hard version or the easy version? Service: who does this serve and who does it exclude? Justice: what happens when this is misused?',
        },
        {
          title: 'Leadership',
          body: 'Reason: what is actually happening? Courage: what needs to be said? Service: what does this team need? Justice: am I applying the same standard to myself that I apply to others?',
        },
      ],
    },
    {
      kind: 'quote',
      text: 'This is not a set of values to aspire toward. It is a set of conditions that must be met for the system to function. Aspiration is optional. Structure is not.',
    },
    {
      kind: 'note',
      text: 'The Eternal Loop Doctrine — Artiore Project, V1.x (Zero-Drift). Principles are stable by design. Wording may be refined for clarity without changing the core. The public homepage also states a separate five-line doctrine, beginning “Restraint is real power.” That text is on the home page. The system documentation states yet another five-line form, beginning “Reason without noise.”',
    },
    {
      kind: 'actions',
      items: [
        { label: 'Read the philosophy', href: '/philosophy' },
        { label: 'Try ARTIore', href: links.artioreTry },
      ],
    },
  ],
}

export const protocolPage: PageDocument = {
  path: '/protocol',
  eyebrow: 'Safety charter',
  title: 'What Artiore will and will not do',
  headTitle: 'ARTIore protocol | What the system will and will not do',
  description:
    'Artiore\u2019s safety charter: multiple perspectives, stated uncertainty, and practical next steps, with hard boundaries. It does not replace professional advice.',
  lead: 'Artiore is designed to help you think clearly, and it has boundaries.',
  blocks: [
    {
      kind: 'heading',
      text: 'Designed to help you think',
    },
    {
      kind: 'cards',
      items: [
        { title: 'Show multiple perspectives', body: 'Every response includes alternative viewpoints, not just one answer.' },
        { title: 'Be honest about uncertainty', body: 'Artiore calibrates confidence to actual certainty. If something is uncertain, it will say so.' },
        { title: 'Give practical next steps', body: 'Every response ends with a clear, actionable recommendation you can take.' },
        { title: 'Respect your agency', body: 'Artiore provides guidance, but you make the decisions. It will not pressure or manipulate.' },
        { title: 'Protect your privacy', body: 'The safety charter says your conversations are private, and that Artiore does not share your data or use it to train models. The privacy policy is the fuller account.' },
        { title: 'Admit what it does not know', body: 'When Artiore does not have enough information, it will tell you what is missing.' },
      ],
    },
    {
      kind: 'heading',
      text: 'Clear boundaries',
    },
    {
      kind: 'cards',
      items: [
        {
          title: 'Medical, legal, or financial decisions',
          body: 'Artiore can help you understand options and tradeoffs. It is not a substitute for professional advice.',
        },
        { title: 'Fabrication', body: 'If Artiore does not know something, it will say so. It will not make up facts or overstate certainty.' },
        { title: 'Manipulation', body: 'Artiore will not use emotional manipulation or pressure tactics.' },
        { title: 'Illegal or harmful activities', body: 'Artiore will not provide guidance for illegal activities, harm to others, or unethical behavior.' },
        { title: 'Replacing judgment', body: 'For life-changing decisions, Artiore is a thinking partner, not a decision-maker.' },
        { title: 'Guaranteed outcomes', body: 'Artiore provides analysis and recommendations. It cannot predict or guarantee results.' },
      ],
    },
    {
      kind: 'list',
      title: 'The homepage also says Artiore refuses requests that enable',
      items: [
        'Violence or self-harm',
        'Exploitation, coercion, harassment, or targeted hate',
        'Illegal wrongdoing or evasion',
        'Privacy invasion, doxxing, stalking, or unauthorized surveillance',
        'Instructions that materially increase real-world harm',
      ],
    },
    {
      kind: 'paragraphs',
      text: ['When Artiore refuses, it provides the closest safe alternative whenever possible.'],
    },
    {
      kind: 'heading',
      text: 'When to get expert help',
    },
    {
      kind: 'cards',
      items: [
        { title: 'Medical decisions', body: 'Diagnosis, treatment, medication, or health emergencies require a licensed medical professional.' },
        { title: 'Legal matters', body: 'Contracts, lawsuits, compliance, or legal rights require a licensed attorney.' },
        { title: 'Financial planning', body: 'Investment advice, tax planning, or major financial decisions require a licensed financial advisor.' },
        { title: 'Mental health', body: 'Depression, anxiety, trauma, or crisis situations require a licensed therapist or counselor.' },
        { title: 'Safety concerns', body: 'Immediate danger, abuse, or threats require emergency services or law enforcement.' },
        { title: 'Technical expertise', body: 'Complex engineering, architecture, or specialized technical work requires domain experts.' },
      ],
    },
    {
      kind: 'heading',
      text: 'Confidence, as the charter defines it',
    },
    {
      kind: 'cards',
      items: [
        { title: 'High confidence', body: 'Strong evidence, clear patterns, well-established principles. The recommendation is grounded.' },
        { title: 'Moderate confidence', body: 'Some evidence, reasonable assumptions, but gaps exist. The recommendation is informed but not certain.' },
        { title: 'Low confidence', body: 'Limited evidence, significant unknowns, or high complexity. The recommendation is exploratory.' },
      ],
    },
    {
      kind: 'actions',
      items: [
        { label: 'Try ARTIore', href: links.artioreTry },
        { label: 'Privacy policy', href: '/privacy' },
        { label: 'Terms of service', href: '/terms' },
      ],
    },
  ],
}

export const howItWorksPage: PageDocument = {
  path: '/how-it-works',
  eyebrow: 'The Artiore framework',
  title: 'Six layers, one purpose',
  headTitle: 'Six-layer Artiore framework | Clarity to human upliftment',
  description:
    'Six layers: Clarity, Reasoning, Archives, Derivatives, AI in the margin, and Human upliftment. Grand Directional Prompt Framework V1.1 is at /framework.html.',
  lead: 'Six layers working in harmony — from clarity at the apex to human upliftment at the foundation. This is how Artiore serves without ruling.',
  blocks: [
    {
      kind: 'actions',
      items: [
        { label: 'Read the Grand Directional Prompt Framework V1.1', href: links.frameworkHtml },
        { label: 'Eternia Aurora Sovereign Engine', href: '/engine' },
        { label: 'Read the system documentation', href: '/system-documentation' },
        { label: 'Try ARTIore', href: links.artioreTry },
      ],
    },
    {
      kind: 'note',
      text: 'The HTML edition linked above is the Grand Directional Prompt Framework (V1.1, Zero-Drift Edition), a cognitive charter and operating protocol by Zain Ul Abdin. It stays at /framework.html because that address is already linked externally. This page is the six-layer account published on artiore.com/framework.',
    },
    {
      kind: 'numbered',
      items: [
        {
          label: '1',
          title: 'Clarity — truth and light',
          body: 'The ultimate goal. Not just answers, but understanding. Not just information, but illumination. Seeing situations as they truly are, understanding consequences before they unfold, recognizing patterns others miss, and making decisions with confidence.',
        },
        {
          label: '2',
          title: 'Reasoning — analyze, discern, act',
          body: 'The core cognitive process. Analyze: break down the situation. Discern: weigh evidence and tradeoffs. Act: choose with intention and accountability. Reflect: learn from outcomes.',
        },
        {
          label: '3',
          title: 'Archives — preserve memory',
          body: 'Knowledge retention. Every conversation, every insight, every decision preserved. What gets archived: every reasoning session and decision, patterns you have identified, lessons learned from outcomes, and your evolving understanding.',
        },
        {
          label: '4',
          title: 'Derivatives — shared outputs',
          body: 'Practical applications. Clarity transformed into action. Forms named on the framework page: decision frameworks you can reuse, reports to share, summaries for quick reference, and templates for similar situations.',
        },
        {
          label: '5',
          title: 'AI in the margin — quiet support',
          body: 'Humble positioning. AI serves from the edge, never the center. A witness, not a master. Support without replacement, clarity without control. AI serves, never rules. Humans remain at the center. Technology amplifies, and does not replace.',
        },
        {
          label: '6',
          title: 'Human upliftment — the foundation',
          body: 'The purpose of everything above. The six pillars named with it are dignity, learning, hope, courage, service, and justice. These are not features. They are the foundation.',
        },
      ],
    },
    {
      kind: 'quote',
      text: 'Technology serves humanity. Never the reverse.',
    },
    {
      kind: 'heading',
      text: 'What the V1.1 prompt framework contains',
    },
    {
      kind: 'paragraphs',
      text: [
        'The Grand Directional Prompt Framework is described as a cognitive charter and operating protocol for an AI dedicated to knowledge, reasoning, and human advancement. Created by Zain Ul Abdin, Managing Director, Artiore Consortium. Version 1.1 — Zero-Drift Edition. Last updated April 2026.',
      ],
    },
    {
      kind: 'list',
      title: 'Sections named in the public outline',
      items: [
        'Core principles, including an instrument declaration of no final authority, mission and beneficiaries, a complexity breakdown doctrine, non-protectionism, and ethical foundations',
        'Operating protocols: reasoning integrity, communication standard, bounded helpfulness, high-stakes support, and a 7-level zoom-out method',
        'Spiritual and sacred knowledge: faith-encouraging, respectful, and clearly labeled',
        'V1.x zero-drift policy: immutable core principles, allowed evolution, versioning, change control, and a regression test checklist',
        'An executable system prompt',
      ],
    },
    {
      kind: 'cards',
      items: [
        {
          title: 'Humanity-first priority',
          body: 'Prioritizes people who are overworked, under-recognized, economically constrained, or structurally disadvantaged. Treats everyday lack of knowledge as an access gap, not a character flaw.',
        },
        {
          title: 'Complexity breakdown doctrine',
          body: 'Against unnecessary complexity and jargon-as-status. Breaks complexity down across faith, electronics, work life, money, relationships, systems, and learning.',
        },
        {
          title: 'Truth status labeling',
          body: 'Separates cited fact, reasoned guidance, and perspective or faith framing, and labels each.',
        },
        {
          title: 'Baby steps, not brain dumps',
          body: 'Defaults to short, usable steps: the next step, why, options, a checklist or questions, and an optional deeper layer.',
        },
      ],
    },
  ],
}

export const applicationsPage: PageDocument = {
  path: '/applications',
  eyebrow: 'Use cases',
  title: 'What Artiore helps with',
  headTitle: 'What ARTIore helps with | Work, learning, and reflection',
  description:
    'Work, health questions, money, learning, relationships, and faith reflection — options and next steps, not a substitute for professional advice.',
  lead: 'From work decisions to health questions to faith reflection — Artiore helps you understand, weigh options, and take practical next steps. It is not a substitute for doctors, lawyers, or financial professionals.',
  blocks: [
    {
      kind: 'cards',
      items: [
        {
          title: 'Work decisions',
          body: 'Career moves, project priorities, team conflicts, strategic choices. Example questions published on the use-cases page include whether to take a job offer, how to prioritize competing projects, how to handle a team conflict, and whether to enter a market now or wait.',
        },
        {
          title: 'Health questions',
          body: 'The published use is to prepare better questions, organize information, and understand options. Diagnosis, treatment, medication, and emergencies belong with a licensed medical professional.',
        },
        {
          title: 'Financial confusion',
          body: 'Translate contracts, policies, and financial decisions into plain language. Investment advice, tax planning, and major financial decisions require a licensed financial advisor.',
        },
        {
          title: 'Learning and understanding',
          body: 'Explain complex topics step by step, with examples and context. Example questions include how to learn a skill, whether to pursue a certification, and how to break a problem down.',
        },
        {
          title: 'Relationships',
          body: 'Communication challenges, conflict resolution, boundary setting, and family decisions. The tool helps think through strategies. It does not make the decision.',
        },
        {
          title: 'Faith-respecting reflection',
          body: 'Artiore can engage spiritual questions respectfully when you want that framing. It does not force belief, insult traditions, or present faith claims as laboratory proof.',
        },
      ],
    },
    {
      kind: 'heading',
      text: 'Strategic decision support',
    },
    {
      kind: 'paragraphs',
      text: [
        'Executive Edition is described as the mode for leaders who need to analyze complex situations, weigh strategic tradeoffs, and make high-stakes decisions. The use-cases page names these domains:',
      ],
    },
    {
      kind: 'cards',
      items: [
        { title: 'Market entry', body: 'Timing, positioning, resource allocation, competitive response.' },
        { title: 'Partnership evaluation', body: 'Strategic fit, risk assessment, negotiation positioning, exit scenarios.' },
        { title: 'Organizational changes', body: 'Restructuring, leadership transitions, culture shifts, capability gaps.' },
        { title: 'Investment decisions', body: 'Capital allocation, M&A evaluation, portfolio optimization, risk management.' },
        { title: 'Crisis response', body: 'Rapid analysis, stakeholder communication, damage control, recovery planning.' },
        { title: 'Strategic planning', body: 'Scenario analysis, competitive positioning, growth strategy, resource prioritization.' },
      ],
    },
    {
      kind: 'paragraphs',
      text: [
        'The applications page says that every response is structured: a core answer, alternative perspectives, tradeoffs, a confidence level, and a recommended action. The homepage states the five sections as evidence, assumptions, trade-offs, practical next steps, and limits. Both accounts are published. This site does not collapse them into a third model.',
      ],
    },
    {
      kind: 'actions',
      items: [
        { label: 'Try ARTIore', href: links.artioreTry },
        { label: 'Safety charter', href: '/protocol' },
      ],
    },
  ],
}

export const dossierPage: PageDocument = {
  path: '/dossier',
  eyebrow: 'UAE dossier',
  title: 'The world made a victim. He built a shield.',
  headTitle: 'UAE dossier 2025\u20132026 | Founder\u2019s account | ARTIore',
  description:
    'Zain Ul Abdin\u2019s account of digital victimization in the UAE during 2025\u20132026. Reported experiences are kept separate from explanations that remain under review.',
  lead: 'Founder’s account. Technical causes remain under review; the dossier separates reported experiences from unverified explanations.',
  blocks: [
    {
      kind: 'note',
      text: 'The figures on the dossier page are the author’s: 6 months, 4 cities, 1 pattern, 0 collapse. This page reproduces that published account. It does not add findings.',
    },
    {
      kind: 'paragraphs',
      text: [
        'Zain Ul Abdin walked into Dubai, Abu Dhabi, Sharjah, and Ajman expecting infrastructure, safety, and the promise that systems protect you. The dossier says that for six months he was a target.',
        'The account reports hotels where he slept becoming surveillance nodes, anomalies on his iPhone, Android, and Google accounts, USB drives disappearing, conversations that felt scripted, and trust being weaponized. It says this was not by lone criminals, but by a system that sells safety to the highest bidder.',
        'The homepage states the same period as digital victimization in the UAE during 2025–2026, and says that concerns about possible DNS interference made it harder to know what to trust. That experience is given as Artiore’s central reason to break complexity: make information understandable, separate evidence from assumptions, and help people choose practical next steps.',
      ],
    },
    {
      kind: 'heading',
      text: 'Geographic context',
    },
    {
      kind: 'paragraphs',
      text: [
        'Locations named: Dubai, Abu Dhabi, Sharjah, Ajman. The dossier says these cities are not inherently unsafe, and that the naming is context, not accusation. It describes them as high-flow environments where behavioral observation, crypto manipulation, and trust extraction operate in the margins.',
        'Mission profile as published: duration about 6 months, environment of high-density hospitality and transient ecosystems, condition of continuous operational pressure.',
      ],
    },
    {
      kind: 'list',
      title: 'What the dossier says was observed',
      items: [
        'Device anomalies and compromise attempts',
        'USB devices stolen or interfered with',
        'Repeated “coincidental” human encounters',
        'Social engineering through normal interactions',
        'Psychological pressure cycles',
        'Financial targeting signals emerging through proximity',
      ],
    },
    {
      kind: 'paragraphs',
      text: [
        'The pattern is described as not random and not isolated: structured enough to be felt, subtle enough to be dismissed. Hotels, residences, and social spaces are described as places where people drop their guard. The human vector is described as no forced entry and no alarms — a conversation, a smile, a “chance” meeting. Trust is not broken. It is used.',
        'The account describes a gap between experience and proof: not everything is easily provable, not every pattern is recognized, not every experience fits a report, and not every signal is taken seriously.',
        'Subject response, in the dossier’s words: no disengagement, no collapse, no abandonment. Observation sharpened. Patterns tracked. Behavior adapted. Work continued.',
      ],
    },
    {
      kind: 'heading',
      text: 'Why this built Artiore',
    },
    {
      kind: 'paragraphs',
      text: [
        'The dossier says Artiore was not built in theory. It was built in resistance. The realization it states: the world is no longer just physical. It is behavioral, psychological, and patterned.',
      ],
    },
    {
      kind: 'list',
      title: 'What the dossier says ARTIore exists to do',
      items: [
        'Detect hidden patterns in human interaction',
        'Identify early signals of manipulation',
        'Map behavioral anomalies',
        'Surface risk before damage compounds',
        'Translate complexity into clarity',
      ],
    },
    {
      kind: 'paragraphs',
      text: ['Not through fear. Through intelligence.'],
    },
    {
      kind: 'heading',
      text: 'What the dossier says to watch for',
    },
    {
      kind: 'list',
      items: [
        'Repeated “coincidences” that feel structured',
        'Unusual device behavior after minor exposure',
        'Fast trust escalation from strangers',
        'Financial or crypto conversations appearing unnaturally',
        'Emotional disarmament followed by opportunity',
        'Environments where privacy feels assumed, not verified',
      ],
    },
    {
      kind: 'paragraphs',
      text: [
        'Awareness is not paranoia. It is pattern recognition. The dossier’s closing line: the most effective systems do not look like threats. They look like normal life.',
        'The dossier page signs the account to Zain Ul Abdin and carries the line “© 2026 Artiore Consortium · Delaware, USA.” The privacy policy and terms name a different operator for artiore.com: The Secret Affaire Inc., a private limited corporation registered in Canada. Both lines are reproduced where they were published. This site does not merge them into one corporate claim.',
      ],
    },
    {
      kind: 'actions',
      items: [
        { label: 'Read the origin', href: '/origin' },
        { label: 'Instagram @ArtioreConsortium', href: links.instagram },
        { label: 'X · Artiore', href: links.x },
      ],
    },
  ],
}

export const documentPages: PageDocument[] = [
  aboutPage,
  philosophyPage,
  originPage,
  doctrinePage,
  protocolPage,
  howItWorksPage,
  applicationsPage,
  dossierPage,
]
