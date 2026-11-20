import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const raw = JSON.parse(readFileSync("evidence/mobile.report.json","utf8"));
const score = Math.round((raw.categories.performance.score ?? 0)*100);
const audits=raw.audits || {};
const metrics=["first-contentful-paint","largest-contentful-paint","speed-index","total-blocking-time","cumulative-layout-shift"];
const rows=metrics.map(id=>`| ${audits[id]?.title??id} | ${audits[id]?.displayValue??"n/a"} |`);
const opps=Object.values(audits).filter(a=>a?.details?.type==="opportunity"&&a.numericValue>0).sort((a,b)=>(b.details?.overallSavingsMs||0)-(a.details?.overallSavingsMs||0)).slice(0,4);
const notes=opps.map(a=>`- ${a.title}: ${Math.round(a.details?.overallSavingsMs||0)}ms estimated savings`);
mkdirSync("evidence",{recursive:true});
const summary=`# Mobile Lighthouse performance audit

Target: built production static export at http://127.0.0.1:4173/shipyard/ (not a dev server).

**Mobile Performance: ${score}/100**

| Metric | Reported result |
| --- | --- |
${rows.join("\n")}

## Opportunities
${notes.length?notes.join("\n"):"- No measurable opportunities were listed."}

The full Lighthouse HTML and JSON reports are attached to this workflow's artifacts; the report screenshot was captured from the HTML report.
`;
writeFileSync("evidence/lighthouse-summary.md",summary);
const readme=readFileSync("README.md","utf8");
writeFileSync("README.md",readme.replace(/Mobile Lighthouse Performance: (?:PENDING|\d+\/100)/,"Mobile Lighthouse Performance: "+score+"/100"));
console.log("Measured Mobile Lighthouse score:",score);
if(score<90)process.exitCode=1;
