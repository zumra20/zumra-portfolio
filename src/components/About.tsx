import { education, profile } from '../data/content'
import { SectionReveal } from './SectionReveal'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container section-grid">
        <SectionReveal>
          <p className="section-label">About</p>
          <h2 id="about-title" className="section-title">
            Building reliable
            <br />
            Flutter products
          </h2>
        </SectionReveal>
        <SectionReveal delay={80} className="about-content">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="section-copy about-copy">
              {paragraph}
            </p>
          ))}
          <div className="education-card">
            <p className="education-label">Education</p>
            <h3 className="education-degree">{education.degree}</h3>
            <p className="education-school">{education.school}</p>
            <p className="education-period">{education.period}</p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
