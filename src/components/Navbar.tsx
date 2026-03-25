import { useEffect, useState, type MouseEvent } from 'react'

type NavbarProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const SHOW_THEME_TOGGLE = false

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavItemClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault()
    setMenuOpen(false)

    const target = document.querySelector(href)
    if (!(target instanceof HTMLElement)) {
      return
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', href)
  }

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.querySelector(item.href))
      .filter((element): element is HTMLElement => element instanceof HTMLElement)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveSection(`#${visibleEntry.target.id}`)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.2, 0.5, 0.8],
      },
    )

    sectionElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    const media = window.matchMedia('(min-width: 921px)')
    const handleBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    media.addEventListener('change', handleBreakpoint)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      media.removeEventListener('change', handleBreakpoint)
    }
  }, [])

  return (
    <header className="navbar-wrap">
      <nav
        className={`navbar container${menuOpen ? ' nav-open' : ''}`}
        aria-label="Main"
      >
        <a className="brand" href="#hero" aria-label="Go to top">
          Aaron Wood
        </a>

        <div className="nav-controls">
          <button
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="primary-nav-links"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="menu-toggle-icon" aria-hidden="true">
              <span className="menu-toggle-bar" />
              <span className="menu-toggle-bar" />
              <span className="menu-toggle-bar" />
            </span>
          </button>

          {SHOW_THEME_TOGGLE && (
            <button className="theme-toggle" type="button" onClick={onToggleTheme}>
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          )}
        </div>

        <ul className="nav-links" id="primary-nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(event) => handleNavItemClick(event, item.href)}
                aria-current={activeSection === item.href ? 'page' : undefined}
                className={activeSection === item.href ? 'is-active' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
