import Link from "next/link";
export default function NotFound() {
  return <section className="container not-found"><p className="eyebrow">OOPS / PAGE NOT FOUND</p><div className="error-code">404<span>.</span></div><h1>Nothing here, but plenty to discover.</h1><p>That item may have moved. The good stuff is still waiting for you.</p><Link className="primary-button" href="/">Back to the shop ↗</Link></section>;
}
