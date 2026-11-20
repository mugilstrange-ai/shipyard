"use client";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/app/data/products";

export default function Catalog({ products }: { products: Product[] }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = products.filter(p => (category === "All" || p.category === category) &&
      (p.name+" "+p.description+" "+p.category).toLowerCase().includes(q));
    if(sort === "price-asc") result.sort((a,b) => a.price-b.price);
    if(sort === "price-desc") result.sort((a,b) => b.price-a.price);
    return result;
  }, [category,query,sort,products]);
  return <section id="shop" className="container catalog">
    <div className="section-header"><div><p className="eyebrow">THE EDIT / 001</p><h2>Objects worth keeping<span>.</span></h2>
    <p className="muted">Useful things. Beautiful details. Everyday joy.</p></div><p className="product-count">{visible.length} PRODUCTS</p></div>
    <div className="toolbar">
      <div className="categories">{categories.map(c => <button key={c} type="button" aria-pressed={category===c} className={category===c?"selected":""} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      <div className="filters"><label className="sr-only" htmlFor="search">Search products</label><input id="search" placeholder="Search products..." value={query} onChange={e=>setQuery(e.target.value)}/><label className="sr-only" htmlFor="sort">Sort products</label><select id="sort" value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Featured</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option></select></div>
    </div>
    {visible.length ? <div className="product-grid">{visible.map(p => <ProductCard key={p.id} product={p}/>)}</div>
      : <div className="empty"><h3>No products found</h3><p>Try a different search or category.</p><button onClick={()=>{setQuery("");setCategory("All");setSort("featured")}}>Reset filters</button></div>}
  </section>;
}
