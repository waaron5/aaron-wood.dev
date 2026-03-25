import type { ProjectCardData } from '../data/projects'

type ProjectCardProps = {
  project: ProjectCardData
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <h3>{project.title}</h3>
      </div>
      <div className="project-image-placeholder">
        <img src={project.preview.src} alt={project.preview.alt} loading="lazy" />
      </div>
      <p className="project-description">{project.description}</p>
      {project.technologies.length > 0 && (
        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
      <a href={project.href} className="project-link">
        View Project
        <span className="project-link-arrow" aria-hidden="true">
          →
        </span>
      </a>
    </article>
  )
}
