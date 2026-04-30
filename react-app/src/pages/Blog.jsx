import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  { id: '1', title: 'Deploying React with Docker', excerpt: 'A short guide to containerizing a Vite React app and serving via Nginx.' },
  { id: '2', title: 'Fast Refresh with Vite', excerpt: 'How Vite improves developer experience with instant HMR.' },
]

export default function Blog() {
  return (
    <div className="page blog container">
      <header className="section-header">
        <h2>Blog</h2>
        <p className="lead">Latest posts on development, deployment, and tooling.</p>
      </header>

      <section className="posts">
        {posts.map(p => (
          <article key={p.id} className="post-card">
            <h3>{p.title}</h3>
            <p className="excerpt">{p.excerpt}</p>
            <p><Link to={`/blog/${p.id}`} className="btn ghost">Read</Link></p>
          </article>
        ))}
      </section>
    </div>
  )
}
