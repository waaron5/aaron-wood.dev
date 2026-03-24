import { profile } from '../data/profile'

function GitHubIcon() {
  return (
    <svg
      className="button-icon"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94a2.1 2.1 0 0 0-.89-1.16c-.73-.5.06-.49.06-.49a1.66 1.66 0 0 1 1.2.81 1.68 1.68 0 0 0 2.3.66 1.68 1.68 0 0 1 .5-1.05c-1.78-.2-3.64-.89-3.64-3.95a3.1 3.1 0 0 1 .82-2.15 2.88 2.88 0 0 1 .08-2.12s.67-.21 2.2.82a7.57 7.57 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.31.74.34 1.58.08 2.12a3.1 3.1 0 0 1 .82 2.15c0 3.07-1.87 3.75-3.65 3.95a1.88 1.88 0 0 1 .53 1.45c0 1.05-.01 1.9-.01 2.16 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  )
}

function ViewInWebsiteIcon() {
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
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
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

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-content">
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src={profile.headshotSrc}
            alt={profile.headshotAlt}
            width="320"
            height="320"
          />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="subtitle">{profile.role}</p>
          <p className="lead">{profile.tagline}</p>

          <div className="hero-actions" aria-label="Primary actions">
            <a
              className="button button-primary"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <span className="button-affordance" aria-hidden="true">
                <GitHubIcon />
              </span>
            </a>
            <a
              className="button button-secondary"
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
            >
              <span>View Resume</span>
              <span className="button-affordance" aria-hidden="true">
                <ViewInWebsiteIcon />
              </span>
            </a>
            <a
              className="button button-secondary"
              href={`mailto:${profile.email}`}
            >
              <span>Email Me</span>
              <span className="button-affordance" aria-hidden="true">
                <EnvelopeIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
