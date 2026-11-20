import fs from "node:fs/promises";
const base="http://localhost:3000";
const urls=["/","/about","/products/arc-desk-lamp","/products/ripple-ceramic-vase","/products/canvas-weekender","/products/cloud-knit-throw","/products/everyday-tote","/products/studio-headphones","/products/pour-over-set","/products/minimalist-watch"];
const results=[], allTitles=new Set(),allDescs=new Set();
await fs.mkdir("evidence",{recursive:true});
for(const route of urls){
 const r=await fetch(base+route);if(!r.ok)throw Error(route+" HTTP "+r.status);
 const html=await r.text();
 const tags=[...html.matchAll(/<meta\b[^>]*>/g)].map(m=>m[0]);
 const mt=(n,k)=>tags.find(t=>t.includes(`${k}="${n}"`));
 const val=t=>t?.match(/content="([^"]*)"/)?.[1]??null;
 const title=html.match(/<title[^>]*>(.*?)<\/title>/s)?.[1], desc=val(mt("description","name"));
 const ogtitle=val(mt("og:title","property")), ogdesc=val(mt("og:description","property")), image=val(mt("og:image","property"));
 if(!title||!desc||!ogtitle||!ogdesc||!image||!image.startsWith("http"))throw Error("Missing metadata on "+route);
 if(allTitles.has(title)||allDescs.has(desc))throw Error("Duplicate SEO text on "+route);
 allTitles.add(title);allDescs.add(desc);
 const ir=await fetch(image); if(!ir.ok||!ir.headers.get("content-type")?.includes("image/"))throw Error("OG image missing "+image);
 const relevant=[html.match(/<title[^>]*>.*?<\/title>/s)?.[0],mt("description","name"),mt("og:title","property"),mt("og:description","property"),mt("og:image","property"),mt("og:url","property")];
 const label=route==="/"?"home":route==="/about"?"about":route==="/products/arc-desk-lamp"?"product-arc":null;
 if(label){await fs.writeFile(`evidence/${label}-source.html`,html);await fs.writeFile(`evidence/${label}-tags.txt`,relevant.filter(Boolean).join("\n")+"\n");console.log("HTML-SOURCE "+route+"\n"+relevant.filter(Boolean).join("\n"));}
 results.push({route,title,description:desc,ogTitle:ogtitle,ogDescription:ogdesc,ogImage:image});
 console.log("PASS",route,title);
}
await fs.writeFile("evidence/results.json",JSON.stringify({passed:true,routes:results},null,2));
console.log("SUCCESS: 10 unique routes, OG tags, image HTTP responses and descriptions verified.");
