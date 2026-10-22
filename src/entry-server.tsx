import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppRoutes } from './App'
import { preloadRoute } from './route-data'

export async function render(location: string) {
  const path = location.startsWith('/') ? location : `/${location}`
  await preloadRoute(path)
  return renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  )
}
