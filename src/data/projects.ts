export type ProjectCardData = {
  slug: string
  title: string
  description: string
  technologies: string[]
  href: string
  preview: {
    src: string
    alt: string
  }
}

export type ProjectScreenshot = {
  title: string
  caption: string
  src: string
  alt: string
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

export type ProjectDetail = {
  slug: string
  title: string
  summary: string
  description: string
  facts: ProjectFact[]
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
    slug: 'muse-inventory-management',
    title: 'Muse Inventory Management',
    summary:
      'Production inventory software for a corporate event planning company, covering inventory, events, reservations, and gifting in one workflow.',
    description:
      'Production full-stack inventory management system for Muse Event Company, replacing Excel/Drobxox workflows',
    facts: [
      { label: 'Use Case', value: 'Corporate event inventory' },
      { label: 'Users', value: 'Real internal operations staff' },
      { label: 'Scope', value: 'Inventory, events, reservations, gifting' },
      { label: 'Deploy', value: 'Vercel frontend, Neon database' },
    ],
    transformation: {
      heading: 'From Spreadsheets And Dropbox To Real Software',
      summary:
        'Muse is a growing corporate event planning company relying heavily on excel and dropbox for workfows. They told me their biggest headache was inventory management: lost items, broken data, and expensive mistakes.\n\nI built a custom inventory management app to replace their system. It makes reservations and returns easy, reduces errors, and keeps inventory fully accounted for.',
      before: {
        label: 'Before',
        caption: 'Inventory lived in spreadsheets and ad hoc file-sharing workflows.',
        src: '/projects/muse/muse-excel.png',
        alt: 'Muse inventory spreadsheet used before the software was built',
      },
      after: {
        label: 'After',
        caption: 'A clear inventory system with searchable data, reservations, and event workflows.',
        src: '/projects/muse/muse-inventory-page.png',
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
        src: '/projects/muse/muse-inventory-page.png',
        alt: 'Muse inventory page showing item quantities, reserved counts, locations, and reserve actions',
      },
      {
        title: 'Events Workflow',
        caption:
          'Event list connecting venues, dates, inventory allocations, and gift status so teams can plan from one screen.',
        src: '/projects/muse/muse-events-page.png',
        alt: 'Muse events page showing event details, assigned inventory, and gifts',
      },
      {
        title: 'Reservations Approval Flow',
        caption:
          'Reservation management view for approving requests, tracking quantities, and handling item returns without losing inventory state.',
        src: '/projects/muse/muse-reservations-page.png',
        alt: 'Muse reservations page showing approval actions, quantities, and return workflow',
      },
      {
        title: 'Gifting Inventory',
        caption:
          'Dedicated gifting inventory screen for managing event gifts separately from standard operational inventory.',
        src: '/projects/muse/muse-gifts-page.png',
        alt: 'Muse gifting page showing gift inventory items and usage actions',
      },
    ],
    links: {
      live: 'https://muse-inventory-management.vercel.app',
      github: 'https://github.com/waaron5/muse-inventory-management',
    },
  },
  {
    slug: 'wearable-health-data',
    title: 'Wearable Health Data',
    summary:
      'My "passion project," a mobile app that gives me an AI snapshot of my overall health from wearable data.',
    description:
      'My "passion project," a mobile app that gives me an AI snapshot of my overall health from wearable data.',
    facts: [
      { label: 'Use Case', value: 'Internal operations reporting' },
      { label: 'Users', value: 'Project managers and team leads' },
      { label: 'Focus', value: 'Ownership, blockers, status tracking' },
      { label: 'Stack', value: 'Node.js, Express, PostgreSQL' },
    ],
    problem:
      'Operations and delivery teams were relying on spreadsheets and status emails, which created lag, duplicate entry, and weak visibility into blockers.',
    solution:
      'I shipped a centralized dashboard with role-based views, shared filters, and a consistent update flow so teams could track ownership, blockers, and progress from one interface.',
    impact: [
      'Estimated 8-10 hours saved per week across project managers and team leads by eliminating duplicate status consolidation.',
      'Reduced stale or conflicting status reports by an estimated 40% through single-source updates.',
      'Faster decision-making during standups because blockers and SLA risks were visible in real time.',
    ],
    stackSummary:
      'Node.js and Express power the application layer, PostgreSQL stores workflow data, and REST APIs support shared status views across teams.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    screenshots: [
      {
        title: 'Operations Overview',
        caption:
          'A consolidated view of active initiatives, blockers, and ownership status for internal stakeholders.',
        src: '/projects/ops-overview.svg',
        alt: 'Operations dashboard overview with status cards and filters mockup',
      },
      {
        title: 'Workflow Detail Panel',
        caption:
          'Focused task panel showing assignees, dependency risks, and action history to reduce context switching.',
        src: '/projects/ops-workflow.svg',
        alt: 'Operations workflow detail panel with tasks and activity timeline mockup',
      },
    ],
    links: {
      live: 'https://example.com/ops-dashboard',
      github: 'https://github.com/',
    },
  },
  {
    slug: 'credit-card-finder',
    title: 'Credit Card Finder',
    summary:
      'A performance-focused web app that streamlined content publishing and improved release velocity.',
    description:
      'Implemented a modern web application with fast page loads, accessible interaction patterns, and deployment automation to support rapid release cycles.',
    facts: [
      { label: 'Use Case', value: 'Content publishing workflow' },
      { label: 'Users', value: 'Editors and readers' },
      { label: 'Focus', value: 'Fast pages and faster releases' },
      { label: 'Stack', value: 'React, TypeScript, Vercel' },
    ],
    problem:
      'Publishing new content required too many manual steps, and slow pages created extra friction for both editors and readers.',
    solution:
      'I introduced an optimized frontend architecture with reusable UI patterns, accessible interaction states, and automated deployment checks to make publishing faster and more reliable.',
    impact: [
      'Cut estimated release prep time by 50% through deployment automation and standardized content workflows.',
      'Improved page responsiveness, reducing perceived load delays and bounce risk on content-heavy routes.',
      'Lowered QA defect churn by introducing consistent UI behavior and reusable component patterns.',
    ],
    stackSummary:
      'React and TypeScript handle the frontend experience, Vercel manages deployment, and CI/CD automation keeps releases fast and repeatable.',
    technologies: ['React', 'TypeScript', 'Vercel', 'CI/CD'],
    screenshots: [
      {
        title: 'Content Dashboard',
        caption:
          'Editor-facing dashboard for drafting, previewing, and shipping content without manual handoffs.',
        src: '/projects/content-dashboard.svg',
        alt: 'Content delivery dashboard for authors and editors mockup',
      },
      {
        title: 'Performance-Optimized Reader View',
        caption:
          'Reader interface optimized for fast interaction and clear typography across desktop and mobile.',
        src: '/projects/content-performance.svg',
        alt: 'Content web app reader interface optimized for performance mockup',
      },
    ],
    links: {
      live: 'https://muse-inventory-management.vercel.app',
      github: 'https://github.com/waaron5/muse-inventory-management',
    },
  },
]

export const projects: ProjectCardData[] = projectDetails.slice(0, 2).map((project) => {
  const firstScreenshot = project.screenshots[0]

  return {
    slug: project.slug,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    href: `/projects/${project.slug}`,
    preview: {
      src: firstScreenshot.src,
      alt: firstScreenshot.alt,
    },
  }
})

export function getProjectDetailBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails.find((project) => project.slug === slug)
}
