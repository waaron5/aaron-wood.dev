export function isExternalLink(url: string): boolean {
  return /^https?:\/\//.test(url)
}

export function isPlaceholderLink(url: string): boolean {
  const normalized = url.trim()

  if (!normalized || normalized === '#') {
    return true
  }

  return (
    normalized === 'https://github.com/' ||
    normalized === 'https://www.linkedin.com/' ||
    normalized === 'https://linkedin.com/' ||
    normalized.includes('example.com')
  )
}

export function hasRealLink(url: string): boolean {
  return !isPlaceholderLink(url)
}
