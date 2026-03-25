import type { ProjectDetail } from '../data/projects'

type ProjectDetailPageProps = {
  project: ProjectDetail
}

function isExternalLink(url: string): boolean {
  return /^https?:\/\//.test(url)
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
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
          </div>
        </section>

        <section className="section section-alt">
          <div className="container project-detail-flow">
            <article className="project-detail-card">
              <h2>1. Problem</h2>
              <p>{project.problem}</p>
            </article>

            <article className="project-detail-card">
              <h2>2. Solution</h2>
              <p>{project.solution}</p>
            </article>

            <article className="project-detail-card">
              <h2>3. Impact</h2>
              <ul className="project-impact-list">
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="project-detail-card">
              <h2>4. Screenshots / UI</h2>
              <div className="project-shot-grid">
                {project.screenshots.map((screenshot) => (
                  <figure className="project-shot" key={screenshot.src}>
                    <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
                    <figcaption>
                      <h3>{screenshot.title}</h3>
                      <p>{screenshot.caption}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>

            <article className="project-detail-card">
              <h2>5. Tech Stack</h2>
              <p className="project-stack-note">Brief stack used for design, delivery, and iteration.</p>
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>

            <article className="project-detail-card">
              <h2>6. Links</h2>
              <div className="project-resource-links">
                <a
                  className="button button-primary"
                  href={project.links.live}
                  {...(isExternalLink(project.links.live)
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  Live App
                </a>
                <a
                  className="button button-secondary"
                  href={project.links.github}
                  {...(isExternalLink(project.links.github)
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                >
                  GitHub
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}
