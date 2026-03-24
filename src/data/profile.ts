export const profile = {
  name: 'Aaron Wood',
  role: 'Full Stack Developer',
  tagline:
    'Building production software used by 200+ professionals',
  headshotSrc: '/headshot.jpg',
  headshotAlt: 'Aaron Wood headshot',
  githubUrl: 'https://github.com/',
  linkedInUrl: 'https://www.linkedin.com/',
  email: 'aaron@aaron-wood.dev',
  resumePath: 'https://www.linkedin.com/',
  about: {
    heading: 'About Aaron',
    summary:
      'Aaron is business-minded. He keeps the ultimate goal at the forefront of his mind throughout production. Wether building an internal tool for a company or a personal project... ',
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
