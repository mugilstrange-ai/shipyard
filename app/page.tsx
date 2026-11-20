import Catalog from "@/app/components/Catalog";
import { products } from "@/app/data/products";
export default function HomePage() {
  return <><section className="hero"><div className="container hero-inner">
    <div className="hero-copy"><p className="eyebrow">✳ EVERYDAY, BUT BETTER / VOL. 01</p>
      <h1>The art of<br/><em>living</em> well<span>.</span></h1>
      <p>Considered essentials for spaces, moments, and everything in between. Beautifully simple. Simply beautiful.</p>
      <a className="primary-button" href="#shop">Shop the collection ↗</a>
      <div className="hero-bottom">01 / 01 — CURATED FOR EVERYDAY</div>
    </div>
    <div className="hero-visual"><div className="hero-circle"/><span className="hero-star">✳</span><div className="hero-seal">GOOD<br/>THINGS<br/>INSIDE ↗</div><div className="hero-label">THE EVERYDAY EDIT / 01</div></div>
    </div></section><div className="ticker">GOOD DESIGN ✳ EVERYDAY OBJECTS ✳ TIMELESS STYLE ✳ GOOD DESIGN ✳</div>
    <Catalog products={products}/>
    <div className="container closing">Less ordinary.<br/><em>More everyday.</em></div>
  </>;
}
