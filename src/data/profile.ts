export const profile = {
  name: 'Aaron Wood',
  role: 'Full Stack Developer',
  tagline:
    'Full-stack developer building production software used by 200+ BYU faculty and staff. Creator of custom-built business software for a corporate event company. AI-native developer using Claude/Codex to ship faster.',
  headshotSrc: '/headshot.jpg',
  headshotAlt: 'Aaron Wood headshot',
  githubUrl: 'https://github.com/waaron5',
  linkedInUrl: 'https://www.linkedin.com/in/aaron-wood-cs/',
  email: 'aarondnwd@gmail.com',
  phone: '+1 (801) 870-6959',
  resumePath: '/Aaron-Wood-Resume.pdf',
  about: {
    heading: 'About Aaron',
    summary:
      'Aaron is a full-stack developer and computer science student at BYU. He’s passionate about building software that solves real problems and makes a difference to users.\n\nAt BYU FHSS Technology Services, Aaron works on production TypeScript, Angular, Prisma, and PostgreSQL applications used by 200+ faculty and staff. He ships features and bug fixes across large existing codebases, works through Git and code reviews, and contributes to software people rely on.\n\nHe is also building a custom inventory and reservation system for Muse Event Company. The app replaces messy Excel and Dropbox workflows with a cleaner system for managing events, inventory, reservations, date conflicts, partial quantities, and admin approvals. View the project below.',
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
  { label: 'Phone', href: 'tel:+18018706959' },
]
