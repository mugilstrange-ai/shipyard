import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = { title: {default:"North Goods — Thoughtful Everyday Objects",template:"%s | North Goods"},description:"A curated catalog of beautiful everyday products." };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><div className="announcement">THOUGHTFULLY CHOSEN. MADE FOR EVERYDAY LIVING. ✳</div>
    <header className="header"><div className="container header-inner"><Link href="/" className="logo">✳ north<span>goods</span><b>.</b></Link><nav aria-label="Main navigation"><Link href="/#shop">Shop all</Link><Link href="/#story">Our story</Link></nav><Link href="/#shop" className="header-cta">Explore collection ↗</Link></div></header>
    <main>{children}</main>
    <footer id="story" className="footer"><div className="container footer-inner"><div><p className="logo">✳ northgoods.</p><h2>Good things make<br/>every day better.</h2></div><div><p>Little objects. Lots of joy. Thoughtfully chosen for the everyday.</p><Link href="/#shop">Back to collection ↗</Link></div></div><div className="container copyright">© North Goods. Demo storefront built with Next.js and TypeScript.</div></footer>
  </body></html>;
}
