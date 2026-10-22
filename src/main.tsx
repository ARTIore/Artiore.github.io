import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'
import { preloadRoute } from './route-data'
import './index.css'

const root = document.getElementById('root')
if (!root) throw new Error('Missing #root')

await preloadRoute(window.location.pathname)

hydrateRoot(
  root,
  <StrictMode>
    <App />
  </StrictMode>,
)
