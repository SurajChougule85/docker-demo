import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page notfound container">
      <h2>404 — Page Not Found</h2>
      <p>We couldn't find the page you were looking for.</p>
      <p>
        <Link to="/" className="btn ghost">Go back home</Link>
      </p>
    </div>
  )
}
