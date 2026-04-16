export type Locale = 'en' | 'fr'

export type FeatureCard = {
  title: string
  description: string
}

export type ContentItem = {
  title: string
  category: string
  summary: string
  href: string
}

export type PageCopy = {
  title: string
  lead: string
  sections: FeatureCard[]
}

export type LocaleContent = {
  siteTitle: string
  tagline: string
  heroStatement: string
  heroSubStatement: string
  ctaPrimary: string
  ctaSecondary: string
  nav: {
    home: string
    about: string
    philosophy: string
    framework: string
    engine: string
    dossier: string
    resources: string
    blog: string
    caseStudies: string
    applications: string
    implementation: string
    systemDocs: string
    apiDocs: string
    contact: string
  }
  mission: {
    title: string
    body: string
  }
  duo: FeatureCard
  pillars: FeatureCard[]
  featuredDossier: FeatureCard
  support: FeatureCard & { cta: string }
  footerStatement: string
  blog: ContentItem[]
  resources: ContentItem[]
  pages: Record<string, PageCopy>
}

export const content: Record<Locale, LocaleContent> = {
  en: {
    siteTitle: 'ARTIore',
    tagline: 'Human intuition + AI precision.',
    heroStatement:
      'They built systems you were never meant to understand. ARTIore changes that.',
    heroSubStatement:
      'Not by adding more noise, but by turning chaos into clarity through explainable intelligence.',
    ctaPrimary: 'Try Demo Access',
    ctaSecondary: 'Read the Dossier',
    nav: {
      home: 'Home',
      about: 'About',
      philosophy: 'Philosophy',
      framework: 'Framework',
      engine: 'Engine',
      dossier: 'Dossier',
      resources: 'Resources',
      blog: 'Blog',
      caseStudies: 'Case Studies',
      applications: 'Applications',
      implementation: 'Implementation',
      systemDocs: 'System Docs',
      apiDocs: 'API Docs',
      contact: 'Contact / Access',
    },
    mission: {
      title: 'Clarity as protection',
      body: 'ARTIore maps hidden structure inside fragmented reality so teams can detect risk early, act with precision, and preserve sovereignty.',
    },
    duo: {
      title: 'Human + AI is a strategic duo',
      description:
        'AI detects weak signals at scale. Humans validate context, ethics, and consequences. Together, they produce trustworthy intelligence.',
    },
    pillars: [
      {
        title: 'Pattern detection',
        description: 'Reveal what repeats beneath noise: hidden dependencies, leverage points, and systemic drift.',
      },
      {
        title: 'Clarity engine',
        description: 'Translate complexity into readable signals, narratives, and explainable evidence chains.',
      },
      {
        title: 'Protection by awareness',
        description: 'Move before damage compounds. Control through understanding, not fear.',
      },
    ],
    featuredDossier: {
      title: 'Featured dossier: Fragmented Supply Risk',
      description:
        'See how ARTIore linked isolated anomalies into one explainable cascade model 42 days before visible disruption.',
    },
    support: {
      title: 'Support independent intelligence',
      description:
        'Help keep this platform open, sovereign, and focused on clarity-first intelligence for people and institutions.',
      cta: 'Support ARTIore',
    },
    footerStatement:
      'This isn’t just AI. It’s awareness — built to turn complexity into clear, human-actionable intelligence.',
    blog: [
      {
        title: 'Signal Over Noise: Building Trustworthy AI Briefings',
        category: 'Analysis',
        summary: 'How explainable chains improve confidence in high-stakes decisions.',
        href: '/blog',
      },
      {
        title: 'From Fragmented Data to Coherent Dossiers',
        category: 'Method',
        summary: 'A practical model for connecting weak signals across disconnected systems.',
        href: '/blog',
      },
    ],
    resources: [
      {
        title: 'Clarity Framework One-Pager',
        category: 'Framework',
        summary: 'Core principles for pattern-led, explainable intelligence work.',
        href: '/resources',
      },
      {
        title: 'Implementation Readiness Checklist',
        category: 'Operations',
        summary: 'Assess your team’s readiness for a human+AI intelligence stack.',
        href: '/implementation',
      },
    ],
    pages: {
      about: {
        title: 'About ARTIore',
        lead: 'A precision platform for seeing hidden structures and acting with confidence.',
        sections: [
          { title: 'Purpose', description: 'Reduce complexity without reducing truth.' },
          { title: 'Position', description: 'Independent, explainable, and clarity-first by design.' },
        ],
      },
      philosophy: {
        title: 'Philosophy',
        lead: 'Awareness before damage. Understanding before reaction.',
        sections: [
          { title: 'Ethos', description: 'Restraint, precision, and accountability in every output.' },
          { title: 'Intent', description: 'Replace manipulation with legible intelligence.' },
        ],
      },
      framework: {
        title: 'Framework',
        lead: 'A modular system for converting fragmented complexity into decision-grade clarity.',
        sections: [
          { title: 'Map', description: 'Capture entities, relations, and pressure points.' },
          { title: 'Explain', description: 'Show why a signal matters and what it changes.' },
        ],
      },
      engine: {
        title: 'Engine',
        lead: 'Explainable AI workflows tuned for reliability, provenance, and human oversight.',
        sections: [
          { title: 'Inference', description: 'Multi-step signal correlation with confidence scoring.' },
          { title: 'Verification', description: 'Human review checkpoints to maintain trust and control.' },
        ],
      },
      dossier: {
        title: 'Dossier',
        lead: 'Case-ready intelligence narratives with traceable evidence layers.',
        sections: [
          { title: 'Briefings', description: 'Concise intelligence summaries for executive decisions.' },
          { title: 'Timelines', description: 'Structured narratives linking causes to probable outcomes.' },
        ],
      },
      resources: {
        title: 'Resources',
        lead: 'Operational guides and frameworks for clarity-first teams.',
        sections: [
          { title: 'Playbooks', description: 'Deploy repeatable intelligence workflows rapidly.' },
          { title: 'Templates', description: 'Standardized outputs for analysis, incidents, and reporting.' },
        ],
      },
      blog: {
        title: 'Blog',
        lead: 'Field notes on pattern intelligence, explainability, and sovereignty.',
        sections: [
          { title: 'Research', description: 'Methods and lessons from real complexity domains.' },
          { title: 'Editorial', description: 'Sharp commentary on trust, systems, and AI responsibility.' },
        ],
      },
      caseStudies: {
        title: 'Case Studies',
        lead: 'How ARTIore converts scattered signals into clear intervention paths.',
        sections: [
          { title: 'Crisis Mapping', description: 'Early warning model reduced blind spots across 5 systems.' },
          { title: 'Policy Intelligence', description: 'Explainable pattern tracking improved response timing.' },
        ],
      },
      applications: {
        title: 'Applications',
        lead: 'Current and future deployment paths for high-trust intelligence work.',
        sections: [
          { title: 'AI Demo Area', description: 'Upcoming guided sandbox for explainable signal analysis.' },
          { title: 'Dashboard', description: 'Future mission console for live pattern monitoring.' },
        ],
      },
      implementation: {
        title: 'Implementation',
        lead: 'A staged rollout model for teams adopting human+AI intelligence.',
        sections: [
          { title: 'Phase 1', description: 'Scope questions, data boundaries, and governance guardrails.' },
          { title: 'Phase 2', description: 'Integrate engine workflows and train human review loops.' },
        ],
      },
      systemDocs: {
        title: 'System Documentation',
        lead: 'Architecture, data flow, and operational constraints.',
        sections: [
          { title: 'Topology', description: 'Service boundaries and signal transport map.' },
          { title: 'Observability', description: 'Traceability and auditability standards for every run.' },
        ],
      },
      apiDocs: {
        title: 'API Documentation',
        lead: 'Composable interfaces for ingest, analysis, and explainable outputs.',
        sections: [
          { title: 'Endpoints', description: 'Structured routes for ingestion, scoring, and reporting.' },
          { title: 'Schemas', description: 'Typed payloads with metadata for provenance and confidence.' },
        ],
      },
      contact: {
        title: 'Contact / Access',
        lead: 'Request access, partnerships, or implementation guidance.',
        sections: [
          { title: 'Access', description: 'Ask for private demo credentials and onboarding details.' },
          { title: 'Partnerships', description: 'Collaborate on high-trust intelligence applications.' },
        ],
      },
    },
  },
  fr: {
    siteTitle: 'ARTIore',
    tagline: 'Intuition humaine + précision IA.',
    heroStatement:
      'Ils ont construit des systèmes que vous ne deviez jamais comprendre. ARTIore change cela.',
    heroSubStatement:
      'Pas en ajoutant du bruit, mais en transformant le chaos en clarté grâce à une intelligence explicable.',
    ctaPrimary: 'Demander une démo',
    ctaSecondary: 'Lire le dossier',
    nav: {
      home: 'Accueil',
      about: 'À propos',
      philosophy: 'Philosophie',
      framework: 'Cadre',
      engine: 'Moteur',
      dossier: 'Dossier',
      resources: 'Ressources',
      blog: 'Blog',
      caseStudies: 'Études de cas',
      applications: 'Applications',
      implementation: 'Mise en œuvre',
      systemDocs: 'Docs système',
      apiDocs: 'Docs API',
      contact: 'Contact / Accès',
    },
    mission: {
      title: 'La clarté comme protection',
      body: 'ARTIore cartographie les structures cachées dans la réalité fragmentée pour détecter les risques tôt et agir avec précision.',
    },
    duo: {
      title: 'Humain + IA : un duo stratégique',
      description:
        'L’IA détecte les signaux faibles à grande échelle. L’humain valide le contexte, l’éthique et les conséquences.',
    },
    pillars: [
      {
        title: 'Détection de motifs',
        description: 'Révéler ce qui se répète sous le bruit.',
      },
      {
        title: 'Moteur de clarté',
        description: 'Transformer la complexité en signaux lisibles et explicables.',
      },
      {
        title: 'Protection par conscience',
        description: 'Agir avant les dommages, avec compréhension plutôt que peur.',
      },
    ],
    featuredDossier: {
      title: 'Dossier à la une : risque logistique fragmenté',
      description: 'ARTIore a relié des anomalies isolées en un modèle causal explicable 42 jours avant la perturbation visible.',
    },
    support: {
      title: 'Soutenir une intelligence indépendante',
      description: 'Aidez à maintenir une plateforme souveraine orientée vers la clarté.',
      cta: 'Soutenir ARTIore',
    },
    footerStatement:
      'Ce n’est pas seulement de l’IA. C’est de la conscience opérationnelle pour transformer la complexité en clarté.',
    blog: [
      {
        title: 'Signal plutôt que bruit',
        category: 'Analyse',
        summary: 'Pourquoi les chaînes explicables renforcent la confiance.',
        href: '/blog',
      },
      {
        title: 'Des données fragmentées au dossier cohérent',
        category: 'Méthode',
        summary: 'Relier les signaux faibles à travers des systèmes déconnectés.',
        href: '/blog',
      },
    ],
    resources: [
      {
        title: 'Cadre de clarté en une page',
        category: 'Cadre',
        summary: 'Principes centraux d’une intelligence explicable.',
        href: '/resources',
      },
      {
        title: 'Checklist de mise en œuvre',
        category: 'Opérations',
        summary: 'Évaluer la préparation de votre équipe.',
        href: '/implementation',
      },
    ],
    pages: {
      about: {
        title: 'À propos d’ARTIore',
        lead: 'Une plateforme de précision pour révéler les structures cachées.',
        sections: [
          { title: 'But', description: 'Réduire la complexité sans réduire la vérité.' },
          { title: 'Positionnement', description: 'Indépendant, explicable, orienté clarté.' },
        ],
      },
      philosophy: {
        title: 'Philosophie',
        lead: 'Conscience avant dommage. Compréhension avant réaction.',
        sections: [
          { title: 'Éthos', description: 'Retenue, précision et responsabilité.' },
          { title: 'Intention', description: 'Remplacer la manipulation par l’intelligible.' },
        ],
      },
      framework: {
        title: 'Cadre',
        lead: 'Un système modulaire pour transformer la fragmentation en clarté.',
        sections: [
          { title: 'Cartographier', description: 'Capturer entités, relations et tensions.' },
          { title: 'Expliquer', description: 'Montrer pourquoi chaque signal compte.' },
        ],
      },
      engine: {
        title: 'Moteur',
        lead: 'Flux IA explicables avec supervision humaine.',
        sections: [
          { title: 'Inférence', description: 'Corrélation de signaux avec score de confiance.' },
          { title: 'Vérification', description: 'Contrôles humains pour garantir la confiance.' },
        ],
      },
      dossier: {
        title: 'Dossier',
        lead: 'Narratifs d’intelligence traçables et actionnables.',
        sections: [
          { title: 'Briefings', description: 'Synthèses claires pour décisions stratégiques.' },
          { title: 'Chronologies', description: 'Relier causes, signaux et impacts probables.' },
        ],
      },
      resources: {
        title: 'Ressources',
        lead: 'Guides opérationnels pour les équipes orientées clarté.',
        sections: [
          { title: 'Playbooks', description: 'Déployer des flux d’intelligence réplicables.' },
          { title: 'Modèles', description: 'Formats standard pour analyse et reporting.' },
        ],
      },
      blog: {
        title: 'Blog',
        lead: 'Notes de terrain sur motifs, explicabilité et souveraineté.',
        sections: [
          { title: 'Recherche', description: 'Méthodes testées sur des environnements complexes.' },
          { title: 'Éditorial', description: 'Réflexions sur confiance, systèmes et IA.' },
        ],
      },
      caseStudies: {
        title: 'Études de cas',
        lead: 'Comment ARTIore transforme les signaux dispersés en plans d’action.',
        sections: [
          { title: 'Cartographie de crise', description: 'Réduction des angles morts sur 5 systèmes.' },
          { title: 'Intelligence politique', description: 'Meilleur timing de réponse grâce aux motifs.' },
        ],
      },
      applications: {
        title: 'Applications',
        lead: 'Déploiements actuels et futurs pour l’intelligence de confiance.',
        sections: [
          { title: 'Zone démo IA', description: 'Sandbox guidée à venir pour l’analyse explicable.' },
          { title: 'Tableau de bord', description: 'Console future de surveillance des motifs.' },
        ],
      },
      implementation: {
        title: 'Mise en œuvre',
        lead: 'Déploiement progressif pour adopter une intelligence humain+IA.',
        sections: [
          { title: 'Phase 1', description: 'Périmètre, données et garde-fous de gouvernance.' },
          { title: 'Phase 2', description: 'Intégration des flux moteur et boucle humaine.' },
        ],
      },
      systemDocs: {
        title: 'Documentation système',
        lead: 'Architecture, flux de données et contraintes opérationnelles.',
        sections: [
          { title: 'Topologie', description: 'Frontières de services et transport du signal.' },
          { title: 'Observabilité', description: 'Standards de traçabilité et d’audit.' },
        ],
      },
      apiDocs: {
        title: 'Documentation API',
        lead: 'Interfaces composables pour ingestion, analyse et restitution.',
        sections: [
          { title: 'Endpoints', description: 'Routes structurées pour ingestion et scoring.' },
          { title: 'Schémas', description: 'Payloads typés avec métadonnées de provenance.' },
        ],
      },
      contact: {
        title: 'Contact / Accès',
        lead: 'Demander l’accès, un partenariat ou un accompagnement.',
        sections: [
          { title: 'Accès', description: 'Demandez des identifiants de démonstration privée.' },
          { title: 'Partenariats', description: 'Co-construire des cas d’usage de confiance.' },
        ],
      },
    },
  },
}
