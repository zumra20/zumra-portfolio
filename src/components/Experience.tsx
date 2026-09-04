import { experience } from '../data/content'
import { SectionReveal } from './SectionReveal'

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionReveal>
          <p className="section-label">Experience</p>
          <h2 id="experience-title" className="section-title">
            Professional experience
          </h2>
          <p className="section-lead">
            Production Flutter work across Android and iOS.
          </p>
        </SectionReveal>

        <ol className="experience-list">
          {experience.map((item, index) => (
            <SectionReveal key={item.id} delay={index * 80} as="li" className="experience-item">
              <div className="experience-meta">
                <p className="experience-period">{item.period}</p>
                <h3 className="experience-role">{item.role}</h3>
                <p className="experience-company">Cross-platform mobile applications</p>
              </div>
              <ul className="experience-highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
