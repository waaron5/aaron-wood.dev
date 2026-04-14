export const profile = {
  name: 'Aaron Wood',
  role: 'Full Stack Developer',
  tagline:
    'Building apps used by 200+ BYU faculty/staff; built an inventory system for Muse to replace Excel/Dropbox workflows',
  headshotSrc: '/headshot.jpg',
  headshotAlt: 'Aaron Wood headshot',
  githubUrl: 'https://github.com/waaron5',
  linkedInUrl: 'https://www.linkedin.com/in/aaron-wood-cs/',
  email: 'aarondnwd@gmail.com',
  resumePath: '/Aaron-Wood-Resume.pdf',
  about: {
    heading: 'About Aaron',
    summary:
      'Aaron Wood is a computer science student at BYU focused on building software that actually gets used. He has worked on full stack applications serving 200+ faculty and staff and is currently building an inventory system for a corporate event company to replace messy Excel and Dropbox workflows. His work prioritizes clarity, speed, and usability over unnecessary complexity.\n\nHe gravitates toward frontend development and user experience, with hands-on experience in TypeScript, Angular, and modern web tooling. At the same time, he is pushing deeper into backend systems, databases, and architecture so he can own features end to end. He cares about understanding how things work beneath the surface, not just getting them to run.\n\nAaron moves quickly and uses AI to accelerate how he designs and ships real products. He is most interested in solving practical problems and building tools that noticeably improve how people work.\n\nOutside of software, he is interested in retro games, health, finding creative ways to use AI, and understanding data to make better decisions.',
  },
  contact: {
    heading: 'Get In Touch',
    message:
      'I am open to full-time roles, contract work, and collaboration on ambitious projects. Send a message and I will get back to you soon.',
  },
}

export const socialLinks = [
  { label: 'LinkedIn', href: profile.linkedInUrl },
  { label: 'Email', href: `mailto:${profile.email}` },
]
