import { useState } from 'react'
import { projects, type Project } from '../data/content'
import { SectionReveal } from './SectionReveal'

function ProjectCard({ project }: { project: Project }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const hasImages = project.images.length > 0
  const activeImage = hasImages ? project.images[activeIndex] : null

  return (
    <article className="project-card">
      <div className="project-media-wrap">
        <div className="project-media">
          {activeImage ? (
            <img
              src={activeImage}
              alt={`${project.name} screenshot ${activeIndex + 1}`}
              loading="lazy"
            />
          ) : (
            <span className="project-media-label">Screenshots to be added</span>
          )}
        </div>

        {hasImages && project.images.length > 1 && (
          <div
            className="project-thumbs"
            role="tablist"
            aria-label={`${project.name} screenshots`}
          >
            {project.images.map((image, index) => (
              <button
                key={image}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                className={`project-thumb${index === activeIndex ? ' is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={image} alt="" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="project-body">
        <div className="project-heading">
          <h3 className="project-name">{project.name}</h3>
          <span className="project-year">{project.status ?? project.year}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <ul className="project-tech-list">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {project.link && project.linkLabel ? (
          <a
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.linkLabel}
            <span aria-hidden="true"> →</span>
          </a>
        ) : (
          <span className="project-link-muted">Private / in progress</span>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section section-alt" aria-labelledby="projects-title">
      <div className="container">
        <SectionReveal>
          <p className="section-label">Selected work</p>
          <h2 id="projects-title" className="section-title">
            Apps I’ve built
          </h2>
          <p className="section-lead">
            Live Play Store apps, client systems, and personal Flutter projects.
          </p>
        </SectionReveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <SectionReveal key={project.id} delay={(index % 3) * 50}>
              <ProjectCard project={project} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
