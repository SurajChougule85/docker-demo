import React from 'react'

export default function Contact() {
  return (
    <div className="page contact container">
      <header className="section-header">
        <h2>Contact Us</h2>
        <p className="lead">Questions, feedback, or help? Send us a message and we'll reply soon.</p>
      </header>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" placeholder="How can we help?"></textarea>
        </label>
        <div className="form-actions">
          <button className="btn primary" type="submit">Send Message</button>
        </div>
      </form>

      <aside className="contact-meta">
        <p>Email: <a href="mailto:hello@example.com">hello@example.com</a></p>
        <p>Location: Remote</p>
      </aside>
    </div>
  )
}
