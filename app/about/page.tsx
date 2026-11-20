import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
 title: "About Our Story",
 description: "Learn why North Goods curates useful, beautiful objects and how thoughtful design can make everyday moments feel special.",
 alternates:{canonical:"/about"},
 openGraph:{type:"website",url:"/about",title:"Our Story: Why North Goods Exists",description:"We believe small, considered design choices make the everyday a little better. Get to know North Goods.",images:[{url:"/og-about.png",width:1200,height:630,alt:"The story and design philosophy behind North Goods"}]},
 twitter:{card:"summary_large_image",title:"About North Goods - Our Story",description:"How we choose good things for everyday living.",images:["/og-about.png"]}
};
export default function AboutPage(){
 return <article className="about-page"><p className="eyebrow">A LITTLE ABOUT US / OUR STORY</p><h1>Good things make every day better<span className="orange">.</span></h1>
 <p className="lead">North Goods is a thoughtfully curated collection of objects for everyday life. We believe good design should be useful, inviting and quietly joyful.</p>
 <div className="about-grid"><section><p className="about-number">01 / PURPOSE</p><h2>Made for the moments in between.</h2><p>Objects for the rituals that make daily life brighter.</p></section><section><p className="about-number">02 / APPROACH</p><h2>Less noise. More meaning.</h2><p>Considered essentials for home, travel and work.</p></section><section><p className="about-number">03 / PROMISE</p><h2>Things worth keeping.</h2><p>Timeless designs made to suit your everyday routines.</p></section></div>
 <Link className="hero-button" href="/#shop">Shop the collection ↗</Link></article>;
}
