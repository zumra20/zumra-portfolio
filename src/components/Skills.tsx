import { skillGroups } from '../data/content'
import { SectionReveal } from './SectionReveal'

export function Skills() {
  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionReveal>
          <p className="section-label">Skills</p>
          <h2 id="skills-title" className="section-title">
            Tools I work with
          </h2>
          <p className="section-lead">
            The stack I use to ship Flutter apps from UI to backend integration.
          </p>
        </SectionReveal>

        <div className="skills-groups">
          {skillGroups.map((group, index) => (
            <SectionReveal key={group.title} delay={index * 50} className="skill-group">
              <h3 className="skill-group-title">{group.title}</h3>
              <ul className="skills-list">
                {group.items.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
