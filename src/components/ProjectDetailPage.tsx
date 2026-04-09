import { useState } from 'react'
import type { ProjectDetail } from '../data/projects'
import Footer from './Footer'

type ProjectDetailPageProps = {
  project: ProjectDetail
}

function isExternalLink(url: string): boolean {
  return /^https?:\/\//.test(url)
}

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

function ExternalLinkIcon() {
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

function RightArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  )
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const [selectedScreenshotSrc, setSelectedScreenshotSrc] = useState(
    project.screenshots[0]?.src ?? '',
  )

  const liveLinkProps = isExternalLink(project.links.live)
    ? { target: '_blank', rel: 'noreferrer' as const }
    : {}
  const githubLinkProps = isExternalLink(project.links.github)
    ? { target: '_blank', rel: 'noreferrer' as const }
    : {}
  const selectedScreenshot =
    project.screenshots.find((screenshot) => screenshot.src === selectedScreenshotSrc) ??
    project.screenshots[0]
  const sectionLinks = [
    { href: '#problem', label: 'Problem' },
    { href: '#solution', label: 'Solution' },
    { href: '#impact', label: 'Impact' },
    { href: '#screenshots', label: 'Screenshots' },
    { href: '#stack', label: 'Stack' },
  ]

  return (
    <>
      <header className="navbar-wrap">
        <nav className="navbar container" aria-label="Project page">
          <a className="project-back-link" href="/#projects">
            <span className="project-back-link-arrow" aria-hidden="true">
              ←
            </span>
            Back to Projects
          </a>
        </nav>
      </header>

      <main className="project-page-main">
        <section className="section project-hero">
          <div className="container project-hero-content">
            <p className="eyebrow">Case Study</p>
            <h1>{project.title}</h1>
            <p className="project-page-summary">{project.summary}</p>
            <div className="hero-actions" aria-label={`${project.title} project links`}>
              <a className="button button-primary" href={project.links.live} {...liveLinkProps}>
                <span>Live Demo</span>
                <span className="button-affordance" aria-hidden="true">
                  <ExternalLinkIcon />
                </span>
              </a>
              <a className="button button-secondary" href={project.links.github} {...githubLinkProps}>
                <span>GitHub</span>
                <span className="button-affordance" aria-hidden="true">
                  <GitHubIcon />
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className="section project-overview-section">
          <div className="container project-overview-shell">
            {project.transformation ? (
              <>
                <div className="project-overview-copy">
                  <p className="eyebrow">Transformation</p>
                  <h2>{project.transformation.heading}</h2>
                  <p className="project-section-copy">{project.transformation.summary}</p>
                </div>

                <div className="project-transformation" aria-label={`${project.title} before and after`}>
                  <figure className="project-transformation-card">
                    <div className="project-transformation-label">{project.transformation.before.label}</div>
                    <img
                      src={project.transformation.before.src}
                      alt={project.transformation.before.alt}
                      loading="lazy"
                    />
                    <figcaption>{project.transformation.before.caption}</figcaption>
                  </figure>

                  <div className="project-transformation-arrow" aria-hidden="true">
                    <RightArrowIcon />
                  </div>

                  <figure className="project-transformation-card">
                    <div className="project-transformation-label">{project.transformation.after.label}</div>
                    <img
                      src={project.transformation.after.src}
                      alt={project.transformation.after.alt}
                      loading="lazy"
                    />
                    <figcaption>{project.transformation.after.caption}</figcaption>
                  </figure>
                </div>
              </>
            ) : (
              <>
                <div className="project-overview-copy">
                  <p className="eyebrow">Overview</p>
                  <h2>At A Glance</h2>
                  <p className="project-section-copy">{project.description}</p>
                </div>

                <dl className="project-facts-grid" aria-label={`${project.title} quick facts`}>
                  {project.facts.map((fact) => (
                    <div className="project-fact-card" key={`${fact.label}-${fact.value}`}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}

            <nav className="project-jump-nav" aria-label="Project sections">
              {sectionLinks.map((link) => (
                <a key={link.href} href={link.href} className="project-jump-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section id="problem" className="section section-alt">
          <div className="container project-section-shell">
            <div className="project-section-heading">
              <p className="eyebrow">Context</p>
              <h2>Problem</h2>
            </div>
            <div className="project-section-body">
              <p className="project-section-copy">{project.problem}</p>
            </div>
          </div>
        </section>

        <section id="solution" className="section">
          <div className="container project-section-shell">
            <div className="project-section-heading">
              <p className="eyebrow">Build</p>
              <h2>Solution</h2>
            </div>
            <div className="project-section-body">
              <p className="project-section-copy">{project.solution}</p>
            </div>
          </div>
        </section>

        <section id="impact" className="section section-alt">
          <div className="container project-section-shell">
            <div className="project-section-heading">
              <p className="eyebrow">Results</p>
              <h2>Impact</h2>
            </div>
            <div className="project-section-body">
              <ul className="project-impact-grid">
                {project.impact.map((item) => (
                  <li className="project-impact-item" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="screenshots" className="section">
          <div className="container project-section-shell">
            <div className="project-section-heading">
              <p className="eyebrow">Proof</p>
              <h2>Screenshots</h2>
            </div>
            <div className="project-section-body">
              <figure className="project-shot project-shot-featured">
                <img
                  src={selectedScreenshot.src}
                  alt={selectedScreenshot.alt}
                  loading="lazy"
                />
                <figcaption>
                  <h3>{selectedScreenshot.title}</h3>
                  <p>{selectedScreenshot.caption}</p>
                </figcaption>
              </figure>

              {project.screenshots.length > 1 ? (
                <div className="project-shot-selector" aria-label="Choose screenshot">
                  {project.screenshots.map((screenshot) => (
                    <button
                      key={screenshot.src}
                      type="button"
                      className={`project-shot-toggle${screenshot.src === selectedScreenshot.src ? ' is-active' : ''}`}
                      onClick={() => setSelectedScreenshotSrc(screenshot.src)}
                      aria-pressed={screenshot.src === selectedScreenshot.src}
                    >
                      <img src={screenshot.src} alt="" loading="lazy" aria-hidden="true" />
                      <span>{screenshot.title}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section id="stack" className="section section-alt">
          <div className="container project-section-shell">
            <div className="project-section-heading">
              <p className="eyebrow">Technical</p>
              <h2>Stack</h2>
            </div>
            <div className="project-section-body">
              <p className="project-stack-note">{project.stackSummary}</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
