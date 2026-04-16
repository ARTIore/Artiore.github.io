import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const PhilosophyPage = lazy(() => import('./pages/PhilosophyPage'))
const FrameworkPage = lazy(() => import('./pages/FrameworkPage'))
const EnginePage = lazy(() => import('./pages/EnginePage'))
const DossierPage = lazy(() => import('./pages/DossierPage'))
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'))
const ApplicationsPage = lazy(() => import('./pages/ApplicationsPage'))
const ImplementationPage = lazy(() => import('./pages/ImplementationPage'))
const SystemDocsPage = lazy(() => import('./pages/SystemDocsPage'))
const ApiDocsPage = lazy(() => import('./pages/ApiDocsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const TodoPage = lazy(() => import('./pages/TodoPage'))

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="grid min-h-screen place-items-center bg-[#05080f] text-slate-200">
            Loading intelligence layer...
          </div>
        }
      >
        <Routes>
          <Route element={<SiteLayout />}>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<PhilosophyPage />} path="/philosophy" />
            <Route element={<FrameworkPage />} path="/framework" />
            <Route element={<EnginePage />} path="/engine" />
            <Route element={<DossierPage />} path="/dossier" />
            <Route element={<ResourcesPage />} path="/resources" />
            <Route element={<BlogPage />} path="/blog" />
            <Route element={<CaseStudiesPage />} path="/case-studies" />
            <Route element={<ApplicationsPage />} path="/applications" />
            <Route element={<ImplementationPage />} path="/implementation" />
            <Route element={<SystemDocsPage />} path="/system-documentation" />
            <Route element={<ApiDocsPage />} path="/api-documentation" />
            <Route element={<ContactPage />} path="/contact" />
            <Route element={<TodoPage />} path="/todo" />
            <Route element={<Navigate replace to="/" />} path="*" />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
