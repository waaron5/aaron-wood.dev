import { skillCategories } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container section-content">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category">
              <h3>{category.name}</h3>
              <ul className="pill-list" aria-label={`${category.name} Skills`}>
                {category.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
