import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { DocumentView } from './components/content/DocumentView'
import { allDocuments } from './content/registry'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import EnginePage from './pages/EnginePage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import SystemDocsPage from './pages/SystemDocsPage'

function AppRoutes() {
  const location = useLocation()
  const pathname =
    location.pathname.length > 1 && location.pathname.endsWith('/')
      ? location.pathname.slice(0, -1)
      : location.pathname

  return (
    <Routes location={{ ...location, pathname }}>
      <Route element={<SiteLayout />}>
        <Route element={<HomePage />} path="/" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<EnginePage />} path="/engine" />
        <Route element={<SystemDocsPage />} path="/system-documentation" />
        <Route element={<BlogPage />} path="/blog" />
        {allDocuments.map((page) => (
          <Route element={<DocumentView page={page} />} key={page.path} path={page.path} />
        ))}
        <Route element={<NotFoundPage />} path="*" />
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
