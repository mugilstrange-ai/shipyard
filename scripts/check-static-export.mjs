import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
const root="out";
const routes=[
["Home","index.html"],
["About","about/index.html"],
["Product","products/arc-desk-lamp/index.html"],
["Not Found","404.html"]
];
for(const [label,path] of routes){
  const p=join(root,path);
  if(!existsSync(p))throw new Error(`Missing static route ${label}: ${p}`);
  const html=readFileSync(p,"utf8");
  if(!html.includes("<title>"))throw new Error(`Missing title in ${p}`);
  console.log(`PASS ${label}: ${p}`);
}
for(const asset of ["products/arc-desk-lamp.svg","hero-star.svg","og-home.png","og-about.png"]){
  const p=join(root,asset);
  if(!existsSync(p))throw new Error(`Missing public asset: ${p}`);
  console.log(`PASS asset: ${p}`);
}
const home=readFileSync(join(root,"index.html"),"utf8");
if(!home.includes("/shipyard/_next/") || !home.includes("/shipyard/hero-star.svg")) throw new Error("Missing GitHub Pages basePath in generated homepage");
console.log("PASS basePath and exported HTML references");
