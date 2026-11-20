/** Accessible route-level placeholder for navigation and streamed segments. */
export default function Loading() {
  return <section className="container route-loader" role="status" aria-busy="true" aria-live="polite">
    <p className="eyebrow">PREPARING YOUR COLLECTION</p>
    <span className="sr-only">Loading ShipYard's curated products…</span>
    <div className="loader-block loader-bar" aria-hidden="true" />
    <div className="loader-block loader-hero" aria-hidden="true" />
    <div className="loader-grid" aria-hidden="true">
      {Array.from({length:4},(_,i)=><div className="loader-block" key={i} />)}
    </div>
  </section>;
}
