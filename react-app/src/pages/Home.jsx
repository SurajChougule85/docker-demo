import React from 'react'

export default function Home() {
  return (
    <div className="page home container">
      <section className="hero">
        <div className="hero-content">
          <h2>Build Fast. Ship Faster.</h2>
          <p className="lead">A small React + Vite starter app, containerized with Docker and served by Nginx. Fast refresh for development and optimized production builds.</p>
          <div className="cta-row">
            <a className="btn primary" href="#features">Explore features</a>
            <a className="btn ghost" href="/about">Learn more</a>
          </div>
        </div>
        <div className="hero-illustration" aria-hidden>
          <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="200" rx="12" fill="#EEF2FF" />
            <path d="M40 140 L90 60 L150 130 L220 40 L280 140" stroke="#6366F1" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        </div>
      </section>

      <section id="features" className="features">
        <h3>Features</h3>
        <div className="cards">
          <article className="card">
            <h4>Lightweight</h4>
            <p>Vite provides instant dev server start and lightning-fast HMR.</p>
          </article>
          <article className="card">
            <h4>Containerized</h4>
            <p>Docker + Nginx for consistent environments and simple deployment.</p>
          </article>
          <article className="card">
            <h4>Routing</h4>
            <p>Client-side routing with `react-router-dom` for SPA navigation.</p>
          </article>
        </div>
      </section>
    </div>
  )
}
