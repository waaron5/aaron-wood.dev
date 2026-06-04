export type ProjectCardData = {
  slug: string
  title: string
  description: string
  technologies: string[]
  href: string
  preview: {
    alt: string
    src?: string
    frames?: {
      src: string
      alt: string
    }[]
  }
}

export type ProjectScreenshot = {
  title: string
  caption: string
  src: string
  alt: string
  format?: 'landscape' | 'portrait'
}

export type ProjectFact = {
  label: string
  value: string
}

export type ProjectTransformation = {
  heading: string
  summary: string
  before: {
    label: string
    caption: string
    src: string
    alt: string
  }
  after: {
    label: string
    caption: string
    src: string
    alt: string
  }
}

export type ProjectOverviewVideo = {
  embedUrl: string
  title: string
  format?: 'landscape' | 'portrait'
}

export type ProjectDetail = {
  slug: string
  title: string
  summary: string
  description: string
  overviewHighlights?: string[]
  facts: ProjectFact[]
  overviewVideo?: ProjectOverviewVideo
  transformation?: ProjectTransformation
  problem: string
  solution: string
  impact: string[]
  stackSummary: string
  technologies: string[]
  screenshots: ProjectScreenshot[]
  links: {
    live: string
    github: string
  }
}

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'varsten-ai-cost-optimization',
    title: 'Varsten AI Cost Optimization',
    summary:
      'AI spend command center for measuring model costs, surfacing optimization opportunities, applying savings levers, and proving customer impact.',
    description:
      'Full-stack AI cost optimization platform for finding waste, applying savings levers, and proving measurable reductions in AI spend',
    facts: [
      { label: 'Use Case', value: 'AI cost optimization' },
      { label: 'Users', value: 'AI operations and platform teams' },
      { label: 'Scope', value: 'Command center, levers, guardrails, proof' },
      { label: 'Focus', value: 'Savings, trust, and governance' },
    ],
    transformation: {
      heading: 'From Hidden AI Waste To Measured Savings',
      summary:
        'AI-heavy teams need more than raw usage dashboards. They need to know where spend is leaking, which recommendations are safe to apply, and whether those actions actually reduced customer cost.\n\nI built Varsten as an operational command center for AI spend. It prioritizes savings opportunities, exposes controllable optimization levers, adds guardrails for budget risk, and gives teams a proof layer for measured savings.',
      before: {
        label: 'Command Center',
        caption: 'Prioritized recommendations turn AI spend data into concrete savings decisions.',
        src: '/projects/varsten/varsten-home.png',
        alt: 'Varsten command center showing AI spend, savings, trust score, decision queue, and recent actions',
      },
      after: {
        label: 'Proof',
        caption: 'Savings proof connects applied recommendations to measurable customer impact.',
        src: '/projects/varsten/varsten-proof.png',
        alt: 'Varsten proof page showing counterfactual spend, actual spend, gross saved, and net savings',
      },
    },
    problem:
      'AI product teams can burn budget quickly across models, routes, prompts, failed requests, and repeated calls. Without a focused operations layer, it is hard to know which changes are worth applying and how much value they created.',
    solution:
      'I built a full-stack platform with a command center for spend decisions, optimization levers for routing and caching behavior, guardrails for budget rules, and proof views that summarize measured savings.',
    impact: [
      'Turned scattered AI usage and cost signals into a prioritized decision queue with estimated monthly savings.',
      'Created operational levers for smart routing, semantic caching, token trimming, cheaper model evaluation, and batching.',
      'Added guardrails and proof views so teams can manage cost risk while reporting concrete savings outcomes.',
    ],
    stackSummary:
      'React and TypeScript drive the product interface, FastAPI handles service endpoints, PostgreSQL supports the savings data model, and AI APIs provide the cost and workload context that Varsten optimizes.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'AI APIs'],
    screenshots: [
      {
        title: 'Command Center',
        caption:
          'Overview dashboard showing spend, saved amount, annualized savings, trust score, open decisions, top waste, and recent optimization actions.',
        src: '/projects/varsten/varsten-home.png',
        alt: 'Varsten command center dashboard with AI spend metrics, decision queue, top waste, and recent actions',
      },
      {
        title: 'Optimization Levers',
        caption:
          'Engine view for controlling smart routing, semantic cache, token trim, cheaper model recommendations, and batching behavior.',
        src: '/projects/varsten/varsten-levers.png',
        alt: 'Varsten engine levers page showing AI savings controls and active optimization toggles',
      },
      {
        title: 'Budget Guardrails',
        caption:
          'Guardrails view for setting customer, feature, and team budget rules with review thresholds and hard caps.',
        src: '/projects/varsten/varsten-gaurdrails.png',
        alt: 'Varsten guardrails page showing budget rules and an add budget rule form',
      },
      {
        title: 'Savings Proof',
        caption:
          'Proof page comparing counterfactual spend, actual optimized spend, gross saved amount, and net customer savings.',
        src: '/projects/varsten/varsten-proof.png',
        alt: 'Varsten proof page showing savings attribution metrics and a measurement note',
      },
    ],
    links: {
      live: '',
      github: '',
    },
  },
  {
    slug: 'muse-inventory-management',
    title: 'Muse Inventory Management',
    summary:
      'Production inventory software for a corporate event planning company, covering inventory, events, reservations, and gifting in one workflow.',
    description:
      'Production full-stack inventory management system for Muse Event Company, replacing Excel/Dropbox workflows',
    facts: [
      { label: 'Use Case', value: 'Corporate event inventory' },
      { label: 'Users', value: 'Real internal operations staff' },
      { label: 'Scope', value: 'Inventory, events, reservations, gifting' },
      { label: 'Deploy', value: 'Vercel frontend, Neon database' },
    ],
    transformation: {
      heading: 'From Spreadsheets And Dropbox To Software',
      summary:
        'Muse is a growing corporate event planning company relying heavily on excel and dropbox for workflows. They told me their biggest headache was inventory management: lost items, broken data, and expensive mistakes.\n\nI built a custom inventory management app to replace their system. It makes reservations and returns easy, reduces errors, and keeps inventory fully accounted for.',
      before: {
        label: 'Before',
        caption: 'Inventory lived in spreadsheets and ad hoc file-sharing workflows.',
        src: '/projects/muse/muse-excel.png',
        alt: 'Muse inventory spreadsheet used before the software was built',
      },
      after: {
        label: 'After',
        caption: 'A clear inventory system with searchable data, reservations, and event workflows.',
        src: '/projects/muse/muse-inventory.png',
        alt: 'Muse inventory management software interface showing searchable inventory and reservation actions',
      },
    },
    problem:
      'Muse needed a clearer way to track physical inventory across events. Manual processes made it hard to see what was available, what was reserved, and what each event still needed.',
    solution:
      'I built a full-stack Next.js application with dedicated views for inventory, events, reservations, and gifting. The app centralizes those workflows on a shared relational model using Prisma and PostgreSQL, then ships on Vercel with Neon.',
    impact: [
      'Replaced fragmented tracking with one shared system used by real operations staff.',
      'Made inventory availability, reservation status, and event allocations easy to scan from one interface.',
      'Delivered a production workflow for event prep, gift management, and approval-based reservations.',
    ],
    stackSummary:
      'Next.js and TypeScript drive the frontend, Prisma handles data access, PostgreSQL runs on Neon, and the application is deployed on Vercel.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel', 'Neon'],
    screenshots: [
      {
        title: 'Inventory Overview',
        caption:
          'Searchable inventory view showing quantities, reserved counts, locations, and quick reserve actions for operational staff.',
        src: '/projects/muse/muse-inventory.png',
        alt: 'Muse inventory page showing item quantities, reserved counts, locations, and reserve actions',
      },
      {
        title: 'Events Workflow',
        caption:
          'Event list connecting venues, dates, inventory allocations, and gift status so teams can plan from one screen.',
        src: '/projects/muse/muse-events.png',
        alt: 'Muse events page showing event details, assigned inventory, and gifts',
      },
      {
        title: 'Item Detail And Reservations',
        caption:
          'Item detail view showing quantity, location, reservation history, and the action staff use to reserve inventory from one place.',
        src: '/projects/muse/muse-item-details.png',
        alt: 'Muse item detail page showing inventory metadata and reservation actions',
      },
      {
        title: 'Add Item Flow',
        caption:
          'New item form for adding inventory images, descriptions, quantities, locations, and operational notes.',
        src: '/projects/muse/muse-add-item.png',
        alt: 'Muse add item page showing fields for item image, name, description, quantity, location, and notes',
      },
    ],
    links: {
      live: 'https://muse-inventory-management.vercel.app',
      github: 'https://github.com/waaron5/muse-inventory-management',
    },
  },
  {
    slug: 'ai-wearable-insights',
    title: 'AI Wearable Insights',
    summary:
      'My "passion project," a mobile app that gives me an AI snapshot of my overall health from wearable data.',
    description:
      'My "passion project," a mobile app that gives me an AI snapshot of my overall health from wearable data.',
    overviewHighlights: [
      "Dashboard: A clear snapshot of today's key health metrics and recent weekly trends.",
      "Chat: An AI assistant that explains the user's health data and why it matters.",
      'History: A week-by-week view that makes changes in health patterns easy to track over time.',
      'Settings: Controls for email notifications, optional data sharing, and account preferences.',
    ],
    overviewVideo: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/5tnXrVCMmKs',
      title: 'AI Wearable Insights app demo',
      format: 'portrait',
    },
    facts: [
      { label: 'Use Case', value: 'Personal wearable health insights' },
      { label: 'Users', value: 'Individual health-conscious users' },
      { label: 'Focus', value: 'AI-driven health analysis and trends' },
      { label: 'Stack', value: 'Expo, React Native, TypeScript, FastAPI, PostgreSQL' },
    ],
    problem:
      'Wearable devices generate daily health data but most companion apps bury it in raw numbers with no interpretation. I wanted something that actually told me what my data meant and whether my health trends were improving.',
    solution:
      'I built a mobile app that ingests wearable data and runs it through an AI model to produce a daily health snapshot, a conversational chat assistant for asking questions about the data, and a week-by-week history view for spotting changes over time.',
    impact: [
      'Replaced passive metric logging with an active AI-powered daily summary of health signals, activity, and recovery patterns.',
      'Made weekly trend changes easy to identify with a dedicated history view built around how health actually shifts over time.',
      'Added a conversational layer so I can ask specific questions about my data instead of interpreting raw numbers myself.',
    ],
    stackSummary:
      'Expo and React Native power the mobile app, TypeScript keeps the codebase consistent, FastAPI handles the backend services, and PostgreSQL stores the health data.',
    technologies: ['Expo', 'React Native', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    screenshots: [
      {
        title: 'Daily Dashboard',
        caption:
          "A quick snapshot of today's core health signals, activity, recovery, and trend indicators in one place.",
        src: '/projects/panivo/dashboard-panivo.png',
        alt: 'Wearable health dashboard showing daily metrics, charts, and recovery signals',
        format: 'portrait',
      },
      {
        title: 'AI Health Chat',
        caption:
          'An in-app assistant that explains what changed in the data and gives more context on why it matters.',
        src: '/projects/panivo/chat-panivo.png',
        alt: 'Wearable health chat screen with AI-generated explanations and recommendations',
        format: 'portrait',
      },
      {
        title: 'Weekly History',
        caption:
          'A scrollable history view for comparing patterns over time and spotting changes across recent weeks.',
        src: '/projects/panivo/history-panivo.png',
        alt: 'Wearable health history screen showing weekly charts and health trends',
        format: 'portrait',
      },
      {
        title: 'Settings',
        caption:
          'Controls for preferences, notifications, and data-sharing options tied to the wearable experience.',
        src: '/projects/panivo/settings-panivo.png',
        alt: 'Wearable health settings screen with account preferences and notification options',
        format: 'portrait',
      },
    ],
    links: {
      live: 'https://www.youtube.com/watch?v=5tnXrVCMmKs',
      github: 'https://github.com/waaron5/ai-wearable-insights.git',
    },
  },
]

export const projects: ProjectCardData[] = projectDetails.map((project) => {
  const firstScreenshot = project.screenshots[0]
  const wearablePreviewFrames =
    project.slug === 'ai-wearable-insights'
      ? project.screenshots.slice(0, 4).map((screenshot) => ({
          src: screenshot.src,
          alt: screenshot.alt,
        }))
      : undefined

  return {
    slug: project.slug,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    href: `/projects/${project.slug}`,
    preview: {
      alt:
        wearablePreviewFrames?.length
          ? 'Wearable health app preview showing dashboard, AI chat, history, and settings screenshots in a clean collage.'
          : firstScreenshot.alt,
      src: wearablePreviewFrames?.length ? undefined : firstScreenshot.src,
      frames: wearablePreviewFrames,
    },
  }
})

export function getProjectDetailBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug)
}
