import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="container site-footer-content">
        <p className="site-footer-name">{profile.name}</p>
        <p className="site-footer-statement">{profile.tagline}</p>
        <p className="site-footer-rights">© {year} All rights reserved.</p>
      </div>
    </footer>
  )
}
