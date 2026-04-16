import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import type { SecondaryPageKey } from '../content/site'

const SecondaryPage = lazy(() => import('../pages/SecondaryPage'))

const secondaryRoutes: SecondaryPageKey[] = [
  'about',
  'philosophy',
  'framework',
  'engine',
  'dossier',
  'resources',
  'blog',
  'case-studies',
  'applications',
  'implementation',
  'system-documentation',
  'api-documentation',
  'access',
  'try-demo',
]

function SecondaryRoute({ pageKey }: { pageKey: SecondaryPageKey }) {
  return (
    <Suspense fallback={null}>
      <SecondaryPage pageKey={pageKey} />
    </Suspense>
  )
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          {secondaryRoutes.map((pageKey) => (
            <Route key={pageKey} path={`/${pageKey}`} element={<SecondaryRoute pageKey={pageKey} />} />
          ))}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
