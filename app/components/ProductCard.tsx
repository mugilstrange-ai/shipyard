import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/app/data/products";
import { formatPrice } from "@/app/data/products";
import { assetPath } from "@/app/lib/paths";
export default function ProductCard({ product }: { product: Product }) {
  return <Link href={`/products/${product.id}`} className="product-card">
    <div className="product-visual" style={{background: product.color}}>
      <Image src={assetPath(product.image)} alt={product.imageAlt} width={640} height={640} sizes="(max-width: 730px) 50vw, (max-width: 1100px) 33vw, 25vw" className="product-image" />
      {product.badge && <span className="badge">{product.badge}</span>}
      <span className="arrow">↗</span>
    </div>
    <div className="product-meta">
      <div><span className="category">{product.category}</span><h3>{product.name}</h3></div>
      <strong>{formatPrice(product.price)}</strong>
    </div>
  </Link>;
}
