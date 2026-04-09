export const profile = {
  name: 'Aaron Wood',
  role: 'Full Stack Developer',
  tagline:
    'Contributed to apps used by 200+ BYU faculty/staff; built an inventory system for Muse to replace Excel/Dropbox workflows',
  headshotSrc: '/headshot.jpg',
  headshotAlt: 'Aaron Wood headshot',
  githubUrl: 'https://github.com/',
  linkedInUrl: 'https://www.linkedin.com/',
  email: 'aaron@aaron-wood.dev',
  resumePath: 'https://www.linkedin.com/',
  about: {
    heading: 'About Aaron',
    summary:
      'Aaron Wood is a computer science student at BYU focused on building practical, real-world software that people actually use. He has experience contributing to full stack applications serving 200+ faculty and staff and is currently developing an inventory management system for a corporate event company to replace error-prone Excel and Dropbox workflows. His work emphasizes clarity, speed, and usability over unnecessary complexity.\n\nHe is strongest in frontend development and user experience, with hands-on experience in TypeScript, Angular, and modern web tooling. At the same time, he is actively pushing deeper into backend architecture, databases, and system design so he can confidently own features end to end. He values understanding how systems work under the hood, not just getting things to function.\n\nAaron moves quickly and uses AI as a force multiplier to design and ship complete products, not just prototypes. He is especially interested in building software that simplifies messy real-world processes and creates measurable improvements in how people work.\n\nBeyond coding, he is interested in health, longevity, and using data to help people make better decisions. He is motivated by building tools that are both technically solid and genuinely useful.',
    highlight:
      'I build practical software that turns messy workflows into clear, usable products.',
  },
  contact: {
    heading: 'Get In Touch',
    message:
      'I am open to full-time roles, contract work, and collaboration on ambitious web projects. Send a message and I will get back to you soon.',
  },
}

export const socialLinks = [
  { label: 'LinkedIn', href: profile.linkedInUrl },
  { label: 'Email', href: `mailto:${profile.email}` },
]
