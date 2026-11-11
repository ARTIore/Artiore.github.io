import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppRoutes } from './App'
import { setServerCommentSnapshot, type ReaderComment } from './content/comments'
import { preloadRoute } from './route-data'

function loadCommentSnapshot() {
  const holder = globalThis as { __ARTIORE_READER_COMMENTS__?: Record<string, ReaderComment[]> }
  const data = holder.__ARTIORE_READER_COMMENTS__
  setServerCommentSnapshot(data && typeof data === 'object' ? data : {})
}

export async function render(location: string) {
  loadCommentSnapshot()
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
