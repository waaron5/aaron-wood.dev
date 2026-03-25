export const profile = {
  name: 'Aaron Wood',
  role: 'Full Stack Developer',
  tagline:
    '200+ users across applications built on the BYU FHSS web team and for Muse event company.',
  headshotSrc: '/headshot.jpg',
  headshotAlt: 'Aaron Wood headshot',
  githubUrl: 'https://github.com/',
  linkedInUrl: 'https://www.linkedin.com/',
  email: 'aaron@aaron-wood.dev',
  resumePath: 'https://www.linkedin.com/',
  about: {
    heading: 'About Aaron',
    summary:
      'Aaron is business-minded. Time saved, money saved, and user experience are all at the forefront of his mind during production. Whether building enterprise software or a personal health dashboard, it\'s the end product that excites him, and the endless possibilities of what can be built. In this new age of AI, Aaron has become an expert in leveraging agents to build better and faster, without neglecting foundational knowledge of software architecture and decision making. He\'s looking forward to working on his next big project in the workforce.',
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
