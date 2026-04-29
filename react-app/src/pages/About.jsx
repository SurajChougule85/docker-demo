import React from 'react'

export default function About() {
  return (
    <div className="page about container">
      <header className="section-header">
        <h2>About This Project</h2>
        <p className="lead">A minimal starter showcasing modern front-end tooling and containerized deployment.</p>
      </header>

      <section className="details">
        <h3>Why this stack?</h3>
        <ul>
          <li><strong>Vite</strong> — super fast dev server and optimized builds.</li>
          <li><strong>React 18</strong> — modern APIs and concurrent features.</li>
          <li><strong>Docker + Nginx</strong> — reproducible deployment and static file serving.</li>
        </ul>
      </section>

      <section className="team">
        <h3>Get Started</h3>
        <ol>
          <li>Run `npm install` inside the `react-app` folder.</li>
          <li>Develop with `npm run dev` and build with `npm run build`.</li>
          <li>Use the provided `Dockerfile` and `docker-compose.yml` to deploy.</li>
        </ol>
      </section>
    </div>
  )
}
