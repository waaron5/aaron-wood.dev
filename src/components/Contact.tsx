import { profile, socialLinks } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container section-content">
        <div className="contact-header">
          <h2>{profile.contact.heading}</h2>
          <p>{profile.contact.message}</p>
        </div>

        <div className="contact-cta">
          <a href={`mailto:${profile.email}`} className="button button-primary button-large">
            Email Me
          </a>
        </div>

        <div className="contact-divider">or find me on</div>

        <ul className="contact-links">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
