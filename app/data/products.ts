export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  color: string;
  features: string[];
  badge?: string;
};

export const products: Product[] = [
  {id:"arc-desk-lamp",name:"Arc Desk Lamp",price:6499,category:"Lighting",description:"A sculptural desk lamp with a cozy, welcoming glow. A beautiful companion for late-night pages and peaceful mornings.",image:"/products/arc-desk-lamp.svg",imageAlt:"Modern sculptural desk lamp with a tapered lampshade and warm neutral finish",color:"#e7d7bc",features:["Adjustable metal shade","Warm ambient light","Modern matte finish"],badge:"Bestseller"},
  {id:"ripple-ceramic-vase",name:"Ripple Ceramic Vase",price:2499,category:"Home",description:"Soft lines, hand-finished texture and an earthy ceramic glaze. Lovely with flowers or left simply as it is.",image:"/products/ripple-ceramic-vase.svg",imageAlt:"Terracotta ceramic vase with a rounded body and narrow neck",color:"#e7c1ab",features:["Hand-finished ceramic","Water-resistant interior","Minimal silhouette"],badge:"New"},
  {id:"canvas-weekender",name:"Canvas Weekender",price:4999,category:"Bags",description:"An understated, spacious carryall for long weekends and the unexpected journeys in between.",image:"/products/canvas-weekender.svg",imageAlt:"Olive canvas weekender duffel bag with leather handles",color:"#cdd4be",features:["Durable cotton canvas","Interior storage pockets","Adjustable shoulder strap"]},
  {id:"cloud-knit-throw",name:"Cloud Knit Throw",price:3499,category:"Home",description:"An irresistibly soft, generously sized throw for the moments that deserve slowing down.",image:"/products/cloud-knit-throw.svg",imageAlt:"Folded soft cream chunky knit throw blanket",color:"#dedbd4",features:["Soft textured knit","Generous size","Easy-care fibers"],badge:"Popular"},
  {id:"everyday-tote",name:"Everyday Tote",price:1899,category:"Bags",description:"The tote that goes everywhere. An effortlessly versatile everyday companion.",image:"/products/everyday-tote.svg",imageAlt:"Sand beige canvas tote bag with long handles",color:"#ead5b7",features:["Thick canvas construction","Easy-access inner pocket","Comfortable carry handles"]},
  {id:"studio-headphones",name:"Studio Headphones",price:8999,category:"Tech",description:"Thoughtfully designed headphones for immersive sound and distraction-free afternoons.",image:"/products/studio-headphones.svg",imageAlt:"Modern over-ear studio headphones in matte gray",color:"#d0d3d8",features:["Wireless Bluetooth audio","Comfortable over-ear fit","USB-C rechargeable"],badge:"New"},
  {id:"pour-over-set",name:"Pour-Over Set",price:2999,category:"Kitchen",description:"A beautifully simple set to turn your morning coffee into a daily ritual.",image:"/products/pour-over-set.svg",imageAlt:"Ceramic pour-over coffee dripper above a clear glass server",color:"#dce0d1",features:["Ceramic coffee dripper","Heat-resistant serving cup","Reusable filter"]},
  {id:"minimalist-watch",name:"Minimalist Watch",price:7299,category:"Accessories",description:"Quietly confident. A classic watch with refined details that never go out of style.",image:"/products/minimalist-watch.svg",imageAlt:"Minimalist wristwatch with a tan leather strap",color:"#dfcbb4",features:["Quartz movement","Sleek steel case","Comfortable strap"]}
];

export function getProduct(id: string): Product | undefined {
  return products.find(product => product.id === id);
}
export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(price);
}
