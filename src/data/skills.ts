export type SkillCategory = {
  name: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
  },
  {
    name: 'Tools & Development',
    items: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Vercel'],
  },
]

export const skills = skillCategories.flatMap((cat) => cat.items)
