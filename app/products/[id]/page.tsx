import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductCard from "@/app/components/ProductCard";
import { getProduct, products, formatPrice } from "@/app/data/products";
type Props = {params: Promise<{id: string}>};
export function generateStaticParams() { return products.map(p => ({id:p.id})); }
export async function generateMetadata({params}:Props):Promise<Metadata> {
  const {id} = await params; const p = getProduct(id);
  return {title:p?.name ?? "Product not found",description:p?.description};
}
export default async function ProductDetail({params}:Props) {
  const {id} = await params; const product = getProduct(id);
  if (!product) notFound();
  const related = products.filter(p=>p.id!==id).sort((a,b)=>Number(b.category===product.category)-Number(a.category===product.category)).slice(0,4);
  return <div className="container">
    <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/#shop">Shop</Link><span>/</span>{product.name}</nav>
    <section className="detail"><div className="detail-visual" style={{background:product.color}}><span role="img" aria-label={product.name}>{product.emoji}</span></div><div className="detail-copy">
      <p className="eyebrow">NORTH GOODS / {product.category.toUpperCase()}</p><h1>{product.name}<span>.</span></h1><p className="detail-price">{formatPrice(product.price)}</p><hr/>
      <h2>A little about this one</h2><p className="description">{product.description}</p><h3>The details</h3><ul>{product.features.map(f=><li key={f}>{f}</li>)}</ul>
      <p className="detail-note">✳ Curated with care, for everyday living.</p>
      <Link href="/#shop" className="back">← Continue shopping</Link></div></section>
    <section className="related"><p className="eyebrow">YOU MAY ALSO LOVE</p><h2>A few more favorites<span>.</span></h2><div className="product-grid">{related.map(p=><ProductCard key={p.id} product={p}/>)}</div></section>
  </div>;
}
