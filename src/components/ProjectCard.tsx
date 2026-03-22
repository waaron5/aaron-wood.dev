export type Project = {
  title: string
  description: string
  technologies?: string[]
  href: string
}

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <h3>{project.title}</h3>
      </div>
      <div className="project-image-placeholder" aria-hidden="true">
        <span>Project Preview</span>
      </div>
      <p className="project-description">{project.description}</p>
      {project.technologies && project.technologies.length > 0 && (
        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
      <a href={project.href} target="_blank" rel="noreferrer" className="project-link">
        View Project
        <span className="project-link-arrow" aria-hidden="true">
          →
        </span>
      </a>
    </article>
  )
}
