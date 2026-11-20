"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Client boundary is intentional: no ssr:false inside a Server Component.
const Reviews = dynamic(() => import("./Reviews"), {
  ssr: false,
  loading: () => <div className="review-skeleton" role="status">Loading customer reviews…</div>,
});

export default function LazyReviews({ productName }: { productName: string }) {
  const [nearViewport, setNearViewport] = useState(false);
  const element = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = element.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) { setNearViewport(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setNearViewport(true); observer.disconnect(); }
    }, { rootMargin: "350px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return <section className="container reviews-block" ref={element} aria-label={`Customer reviews for ${productName}`}>
    {nearViewport ? <Reviews productName={productName} /> : <div className="review-skeleton" role="status">Customer reviews appear as you scroll.</div>}
  </section>;
}
