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

export type ProjectDetail = {
  slug: string
  title: string
  summary: string
  description: string
  problem: string
  solution: string
  impact: string[]
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
      'A fast, content-driven portfolio architecture designed to clearly communicate outcomes, not just features.',
    description:
      'Designed and built a high-performance personal portfolio with responsive sections, theme persistence, and reusable data-driven components optimized for maintainability.',
    problem:
      'The previous portfolio format made it difficult to quickly understand project outcomes, and updating project narratives required repetitive manual edits across multiple sections.',
    solution:
      'I rebuilt the site as a modular React + TypeScript application with reusable project data models, section-level components, and a dedicated case-study structure so each project can tell a complete story in one place.',
    impact: [
      'Estimated 60% reduction in time required to publish or refresh project content.',
      'Clearer storytelling improved interview and recruiter conversations by keeping discussions focused on impact instead of implementation details.',
      'Reduced maintenance overhead by centralizing project content and layout patterns into reusable components.',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'CSS Variables'],
    screenshots: [
      {
        title: 'Home Hero + Navigation',
        caption:
          'Top-of-page layout balancing strong personal branding with direct paths into projects and contact actions.',
        src: '/projects/portfolio-home.svg',
        alt: 'Portfolio homepage hero and primary navigation mockup',
      },
      {
        title: 'Project Case Study View',
        caption:
          'Dedicated project page template highlighting problem, solution, impact, and visuals in a scannable format.',
        src: '/projects/portfolio-case-study.svg',
        alt: 'Portfolio project case study page mockup',
      },
    ],
    links: {
      live: 'https://aaron-wood.dev/',
      github: 'https://github.com/',
    },
  },
  {
    slug: 'wearable-health-data',
    title: 'Wearable Health Data',
    summary:
      'An internal operations hub that replaced fragmented spreadsheet reporting with a unified workflow dashboard.',
    description:
      'Built an internal dashboard to centralize reporting and workflow status, reducing manual cross-team updates and improving visibility across active initiatives.',
    problem:
      'Operations and delivery teams were relying on disconnected spreadsheets and status emails, creating reporting lag, duplicate entries, and inconsistent escalation signals.',
    solution:
      'I shipped a centralized dashboard with role-based views, shared status filters, and a consistent update workflow so teams could track ownership, blockers, and progress from one interface.',
    impact: [
      'Estimated 8-10 hours saved per week across project managers and team leads by eliminating duplicate status consolidation.',
      'Reduced stale or conflicting status reports by an estimated 40% through single-source updates.',
      'Faster decision-making during standups because blockers and SLA risks were visible in real time.',
    ],
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
    problem:
      'Publishing new content required too many manual steps, and slow page experiences were creating friction for both editors and end users on lower-bandwidth connections.',
    solution:
      'I introduced an optimized frontend architecture with reusable UI patterns, accessibility-first interaction states, and automated deployment checks to make publishing faster and more reliable.',
    impact: [
      'Cut estimated release prep time by 50% through deployment automation and standardized content workflows.',
      'Improved page responsiveness, reducing perceived load delays and bounce risk on content-heavy routes.',
      'Lowered QA defect churn by introducing consistent UI behavior and reusable component patterns.',
    ],
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
      live: 'https://example.com/content-delivery',
      github: 'https://github.com/',
    },
  },
]

export const projects: ProjectCardData[] = projectDetails.map((project) => {
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
