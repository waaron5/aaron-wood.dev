import type { Project } from '../components/ProjectCard'

export const projects: Project[] = [
  {
    title: 'Developer Portfolio Platform',
    description:
      'Designed and built a high-performance personal portfolio with responsive sections, theme persistence, and reusable data-driven components optimized for maintainability.',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS Variables'],
    href: 'https://github.com/',
  },
  {
    title: 'Ops Dashboard for Internal Teams',
    description:
      'Built an internal dashboard to centralize reporting and workflow status, reducing manual cross-team updates and improving visibility across active initiatives.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    href: 'https://github.com/',
  },
  {
    title: 'Content Delivery Web App',
    description:
      'Implemented a modern web application with fast page loads, accessible interaction patterns, and deployment automation to support rapid release cycles.',
    technologies: ['React', 'TypeScript', 'Vercel', 'CI/CD'],
    href: 'https://github.com/',
  },
]
