"use client";
import { useEffect } from "react";
import Link from "next/link";
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("ShipYard route error:", error); }, [error]);
  return <section role="alert" className="container route-error">
    <p className="eyebrow">SOMETHING WENT WRONG</p>
    <h1>We hit a little snag<span className="orange">.</span></h1>
    <p>We couldn’t load this page just now. You can retry without losing your place, or return to the collection.</p>
    <button type="button" className="primary-button" onClick={reset}>Try again ↻</button>
    <Link className="secondary-link" href="/">Back to the shop ↗</Link>
  </section>;
}
