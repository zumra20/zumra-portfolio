import { profile } from '../data/content'
import { SectionReveal } from './SectionReveal'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-name">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="container">
        <div className="hero-inner">
          <SectionReveal>
            <p className="hero-availability">{profile.availability}</p>
            <h1 id="hero-name" className="hero-name">
              {profile.name}
            </h1>
            <p className="hero-title">
              {profile.title}
              <span className="hero-dot" aria-hidden="true">
                ·
              </span>
              {profile.location}
            </p>
            <p className="hero-intro">{profile.introduction}</p>
            <ul className="hero-focus">
              {profile.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View work
              </a>
              <a
                className="btn btn-secondary"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn btn-ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
