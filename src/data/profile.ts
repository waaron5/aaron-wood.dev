export const profile = {
  name: 'Aaron Wood',
  role: 'Full Stack Developer',
  tagline:
    'Built production software used by 200+ professionals',
  headshotSrc: '/headshot-placeholder.svg',
  headshotAlt: 'Aaron Wood headshot',
  githubUrl: 'https://github.com/',
  linkedInUrl: 'https://www.linkedin.com/',
  email: 'aaron@aaron-wood.dev',
  resumePath: 'https://www.linkedin.com/',
  about: {
    heading: 'About Me',
    summary:
      'I am a developer focused on building maintainable web applications that are easy to use and easy to scale. I enjoy turning ambiguous ideas into clear technical plans, shipping iterative improvements, and collaborating closely with stakeholders to deliver measurable results.',
    highlight:
      'My approach combines product thinking, modern frontend engineering, and pragmatic backend design to deliver features that perform well in production.',
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
