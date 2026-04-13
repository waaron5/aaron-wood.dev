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
    items: ['TypeScript', 'Node.js', 'tRPC', 'Prisma'],
  },
  {
    name: 'Languages',
    items: ['Python', 'C++', 'SQL'],
  },
  {
    name: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'PostgreSQL', 'Claude', 'Codex', 'Copilot'],
  },
]

export const skills = skillCategories.flatMap((cat) => cat.items)
