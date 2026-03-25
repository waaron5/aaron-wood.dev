export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <section className="section">
        <div className="container not-found-content">
          <p className="eyebrow">404</p>
          <h1>Page Not Found</h1>
          <p>The requested page does not exist.</p>
          <a className="button button-primary" href="/">
            Back to Home
          </a>
        </div>
      </section>
    </main>
  )
}
