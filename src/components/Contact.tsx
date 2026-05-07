import { profile, socialLinks } from '../data/profile'
import { hasRealLink, isExternalLink } from '../utils/links'

function LinkedInIcon() {
  return (
    <svg
      className="button-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.09V21h-4v-5.41c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg
      className="button-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      className="button-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function Contact() {
  const visibleLinks = socialLinks.filter((link) =>
    link.href.startsWith('mailto:') ? true : hasRealLink(link.href),
  )

  return (
    <section id="contact" className="section">
      <div className="container section-content">
        <div className="contact-header">
          <h2>{profile.contact.heading}</h2>
          <p>{profile.contact.message}</p>
          {profile.phone ? (
            <p className="contact-phone">
              <strong>Phone:</strong>{' '}
              <a href={`tel:${profile.phone.replace(/[^+0-9]/g, '')}`}>
                {profile.phone}
              </a>
            </p>
          ) : null}
        </div>

        <ul className="contact-links">
          {visibleLinks.map((link) => {
            const isEmailLink = link.href.startsWith('mailto:')
            const isPhoneLink = link.href.startsWith('tel:')
            const externalLinkProps =
              !isEmailLink && !isPhoneLink && isExternalLink(link.href)
                ? { target: '_blank', rel: 'noreferrer' as const }
                : {}

            return (
              <li key={link.label}>
                <a
                  className={`button ${isEmailLink ? 'button-primary' : 'button-secondary'}`}
                  href={link.href}
                  {...externalLinkProps}
                >
                  <span>{link.label}</span>
                  <span className="button-affordance" aria-hidden="true">
                    {isEmailLink ? (
                      <EnvelopeIcon />
                    ) : isPhoneLink ? (
                      <PhoneIcon />
                    ) : (
                      <LinkedInIcon />
                    )}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
