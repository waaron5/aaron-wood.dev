export type SkillCategory = {
  name: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'Angular', 'TypeScript', 'HTML/CSS'],
  },
  {
    name: 'Backend & Data',
    items: ['tRPC', 'Prisma', 'Python', 'SQL', 'AWS'],
  },
  {
    name: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Claude Code', 'Codex', 'Copilot'],
  },
]

export const skills = skillCategories.flatMap((cat) => cat.items)
