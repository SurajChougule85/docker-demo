import React from 'react'

export default function Services() {
  return (
    <div className="page services container">
      <header className="section-header">
        <h2>Our Services</h2>
        <p className="lead">Practical services to help you build, deploy, and scale modern web apps.</p>
      </header>

      <section className="service-list">
        <article className="card">
          <h4>Consulting</h4>
          <p>Architecture reviews, migration plans, and performance tuning for React apps.</p>
        </article>
        <article className="card">
          <h4>Containerization</h4>
          <p>Dockerfile and compose setups, CI-friendly builds, and deployment guidance.</p>
        </article>
        <article className="card">
          <h4>UI / UX</h4>
          <p>Design system work, accessibility reviews, and component libraries.</p>
        </article>
      </section>
    </div>
  )
}
