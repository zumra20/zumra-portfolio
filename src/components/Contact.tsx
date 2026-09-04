import { profile } from '../data/content'
import { SectionReveal } from './SectionReveal'

export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <SectionReveal>
          <p className="section-label">Contact</p>
          <h2 id="contact-title" className="section-title">
            Let’s talk about your next app
          </h2>
          <p className="section-lead">
            I’m available for Flutter Developer roles. Email is the fastest way to reach me.
          </p>
        </SectionReveal>

        <SectionReveal delay={80} className="contact-actions">
          <a className="contact-link contact-link-primary" href={`mailto:${profile.email}`}>
            <span className="contact-link-label">Email</span>
            <span className="contact-link-value">{profile.email}</span>
          </a>
          <a className="contact-link" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
            <span className="contact-link-label">Phone</span>
            <span className="contact-link-value">{profile.phone}</span>
          </a>
          <a
            className="contact-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">GitHub</span>
            <span className="contact-link-value">{profile.githubHandle}</span>
          </a>
          <a
            className="contact-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">LinkedIn</span>
            <span className="contact-link-value">zumra-siddique</span>
          </a>
        </SectionReveal>
      </div>
    </section>
  )
}
