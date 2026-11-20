"use client";
import { useMemo, useState } from "react";

// Demo reviews: interactive below-the-fold content, deliberately code-split.
const sampleReviews = [
  {author:"Aarav K.",rating:5,title:"Beautifully made",text:"Lovely details and a very considered finish. It fits right into my everyday routine."},
  {author:"Meera P.",rating:5,title:"Just what I hoped for",text:"Arrived exactly as described. The design feels thoughtful without being fussy."},
  {author:"Dev S.",rating:4,title:"Excellent everyday pick",text:"Simple, practical and really nice to look at. Would recommend."},
  {author:"Sana R.",rating:5,title:"A little bit special",text:"One of those purchases that makes a regular day feel a bit brighter."},
  {author:"Ishaan M.",rating:4,title:"Very happy with it",text:"Good finish and a timeless design. Would love to see more colors."},
  {author:"Riya G.",rating:5,title:"Fantastic addition",text:"The details look even better in person and the quality feels great."}
];
export default function Reviews({productName}: {productName:string}) {
  const [rating,setRating] = useState(0);
  const [expanded,setExpanded] = useState(false);
  const shown = useMemo(() => {
    const filtered=sampleReviews.filter(r => rating===0 || r.rating===rating);
    return expanded ? filtered : filtered.slice(0,3);
  }, [rating,expanded]);
  return <>
    <div className="reviews-heading"><div><p className="eyebrow">FROM OUR COMMUNITY</p><h2>What people are saying<span className="orange">.</span></h2></div>
      <div className="reviews-score" aria-label="Average rating 4.7 out of 5"><strong>4.7 / 5</strong> ★★★★★<br/>Sample customer reviews for {productName}</div>
    </div>
    <div className="review-filters" aria-label="Review rating filter">{[0,5,4].map(n=><button key={n} type="button" aria-pressed={rating===n} onClick={()=>{setRating(n);setExpanded(false)}}>{n===0?"All reviews":`${n} stars`}</button>)}</div>
    <div className="review-list">{shown.map(r=><article key={r.author} className="review-item"><div className="review-stars" aria-label={`${r.rating} out of 5 stars`}>{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</div><h3>{r.title}</h3><p>{r.text}</p><footer>{r.author}</footer></article>)}</div>
    {!expanded && sampleReviews.filter(r=>rating===0||r.rating===rating).length>3 && <button type="button" className="primary-button" onClick={()=>setExpanded(true)}>See all reviews ↓</button>}
  </>;
}
