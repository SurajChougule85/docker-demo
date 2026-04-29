import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <header className="site-header container">
          <div className="brand">
            <a href="/" aria-label="Home" className="brand-link">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-logo">
                <rect x="2" y="2" width="20" height="20" rx="6" fill="var(--accent)" />
                <path d="M7 12h10M7 8h10M7 16h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="app-title">React Docker App</span>
            </a>
          </div>

          <nav className="site-nav" aria-label="Main navigation">
            <NavLink to="/" end className={({isActive})=> isActive ? 'active' : undefined}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? 'active' : undefined}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive ? 'active' : undefined}>Contact</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer>
          <p>Built with Vite and served via Nginx in Docker.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}
