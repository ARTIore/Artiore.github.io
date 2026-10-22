import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { normalizePath } from './content/urls'
import { preloadRoute, readRoute } from './route-data'

function PageSwitch() {
  const location = useLocation()
  const pathname = normalizePath(location.pathname)
  const cached = readRoute(pathname)
  const [shownPath, setShownPath] = useState(cached ? pathname : '')

  if (cached && shownPath !== pathname) {
    setShownPath(pathname)
  }

  useEffect(() => {
    if (readRoute(pathname)) return
    let active = true
    void preloadRoute(pathname).then(() => {
      if (active) setShownPath(pathname)
    })
    return () => {
      active = false
    }
  }, [pathname])

  const page = readRoute(pathname)
  if (page === undefined || shownPath !== pathname) {
    return <p className="text-muted">Loading this page.</p>
  }
  return page
}

export function AppRoutes() {
  const location = useLocation()
  const pathname = normalizePath(location.pathname)

  return (
    <Routes location={{ ...location, pathname }}>
      <Route element={<SiteLayout />}>
        <Route element={<PageSwitch />} path="*" />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
