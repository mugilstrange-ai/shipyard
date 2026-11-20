import type { Metadata } from "next";
import Link from "next/link";
import { DM_Sans, Playfair_Display } from "next/font/google";
const dmSans = DM_Sans({subsets:["latin"],display:"swap",variable:"--font-dm-sans"});
const playfair = Playfair_Display({subsets:["latin"],display:"swap",variable:"--font-playfair"});
import "./globals.css";
import { BASE_PATH } from "./lib/paths";
export const metadata: Metadata = {
  metadataBase: new URL("https://mugilstrange-ai.github.io"),
  title: { default: "North Goods", template: "%s | North Goods" },
  description: "Discover thoughtfully designed everyday essentials at North Goods.",
  openGraph: {
    type: "website", siteName: "North Goods",
    title: "North Goods - Everyday Objects, Thoughtfully Chosen",
    description: "Design-led everyday essentials for home, travel and work.",
    images: [{url:`${BASE_PATH}/og-home.png`,width:1200,height:630,alt:"North Goods everyday objects collection"}]
  },
  twitter: {card:"summary_large_image"}
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}><body><div className="announcement">THOUGHTFULLY CHOSEN. MADE FOR EVERYDAY LIVING. ✳</div>
    <header className="header"><div className="container header-inner"><Link href="/" className="logo">✳ north<span>goods</span><b>.</b></Link><nav aria-label="Main navigation"><Link href="/#shop">Shop all</Link><Link href="/about">Our story</Link></nav><Link href="/#shop" className="header-cta">Explore collection ↗</Link></div></header>
    <main>{children}</main>
    <footer id="story" className="footer"><div className="container footer-inner"><div><p className="logo">✳ northgoods.</p><h2>Good things make<br/>every day better.</h2></div><div><p>Little objects. Lots of joy. Thoughtfully chosen for the everyday.</p><Link href="/#shop">Back to collection ↗</Link></div></div><div className="container copyright">© North Goods. Demo storefront built with Next.js and TypeScript.</div></footer>
  </body></html>;
}
