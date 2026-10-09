import { Suspense, lazy, useEffect } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageTransition from './components/layout/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Route-level code splitting: the heaviest pages load on demand.
const Photos = lazy(() => import('./pages/Photos'))
const Videos = lazy(() => import('./pages/Videos'))

function Layout() {
  const { pathname } = useLocation()

  // Restart at the top of the page on navigation (instant, so it never fights the transition).
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-accent-contrast"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="min-h-[70vh]">
        <Suspense fallback={<div className="min-h-[60vh]" aria-hidden />}>
          <PageTransition key={pathname}>
            <Outlet />
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
