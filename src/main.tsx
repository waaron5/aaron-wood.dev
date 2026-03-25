import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/variables.css'
import './styles/globals.css'
import './styles/sections.css'
import './styles/project-pages.css'
import './styles/animations.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
