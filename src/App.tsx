import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'
import ProjectDetailPage from './components/ProjectDetailPage'
import { getProjectDetailBySlug } from './data/projects'

function normalizePath(pathname: string): string {
  const normalized = pathname.replace(/\/+$/, '')
  return normalized === '' ? '/' : normalized
}

function getProjectSlug(pathname: string): string | null {
  const match = pathname.match(/^\/projects\/([^/]+)$/)
  return match ? decodeURIComponent(match[1]) : null
}

function App() {
  useEffect(() => {
    if (window.location.pathname !== '/') {
      return
    }

    const hash = window.location.hash
    if (!hash.startsWith('#')) {
      return
    }

    const targetId = decodeURIComponent(hash.slice(1))
    if (!targetId) {
      return
    }

    const rafId = window.requestAnimationFrame(() => {
      const target = document.getElementById(targetId)
      if (!(target instanceof HTMLElement)) {
        return
      }

      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => {
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  const pathname = normalizePath(window.location.pathname)
  const projectSlug = getProjectSlug(pathname)
  const project = projectSlug ? getProjectDetailBySlug(projectSlug) : undefined
  const isProjectRoute = pathname.startsWith('/projects/')

  return (
    <>
      {project ? (
        <ProjectDetailPage project={project} />
      ) : isProjectRoute ? (
        <NotFoundPage />
      ) : (
        <>
          <Navbar />
          <HomePage />
        </>
      )}
    </>
  )
}

export default App
