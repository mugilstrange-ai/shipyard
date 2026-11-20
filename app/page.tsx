import type { Metadata } from "next";
import Catalog from "@/app/components/Catalog";
export const metadata: Metadata = {
  title: "Shop Curated Everyday Essentials",
  description: "Browse eight carefully chosen design-led home goods, travel bags, audio essentials and accessories at North Goods.",
  alternates: {canonical:"/"},
  openGraph: {type:"website",url:"/",title:"Discover Thoughtful Everyday Goods | North Goods",description:"Explore the curated North Goods collection: useful objects, beautiful details, everyday joy.",images:[{url:"/og-home.png",width:1200,height:630,alt:"A North Goods collection of thoughtful everyday objects"}]},
  twitter: {card:"summary_large_image",title:"Shop Curated Everyday Essentials | North Goods",description:"Beautifully considered objects for your everyday routines.",images:["/og-home.png"]}
};
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
