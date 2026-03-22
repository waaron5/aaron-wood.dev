import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container section-content">
        <h2>{profile.about.heading}</h2>
        <div className="about-body">
          <p className="about-summary">{profile.about.summary}</p>
          <div className="about-highlight">
            <p>{profile.about.highlight}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
