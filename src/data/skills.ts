export type SkillCategory = {
  name: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    items: ['Angular', 'TypeScript', 'HTML', 'CSS', 'SCSS'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'tRPC', 'Prisma'],
  },
  {
    name: 'Languages',
    items: ['TypeScript', 'Python', 'SQL'],
  },
  {
    name: 'Databases',
    items: ['PostgreSQL'],
  },
  {
    name: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'Claude', 'Codex', 'Copilot'],
  },
]

export const skills = skillCategories.flatMap((cat) => cat.items)
