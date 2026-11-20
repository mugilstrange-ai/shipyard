import Link from "next/link";
import type { Product } from "@/app/data/products";
import { formatPrice } from "@/app/data/products";
export default function ProductCard({ product }: { product: Product }) {
  return <Link href={`/products/${product.id}`} className="product-card">
    <div className="product-visual" style={{background: product.color}}>
      <span role="img" aria-label={product.name} className="product-emoji">{product.emoji}</span>
      {product.badge && <span className="badge">{product.badge}</span>}
      <span className="arrow">↗</span>
    </div>
    <div className="product-meta">
      <div><span className="category">{product.category}</span><h3>{product.name}</h3></div>
      <strong>{formatPrice(product.price)}</strong>
    </div>
  </Link>;
}
