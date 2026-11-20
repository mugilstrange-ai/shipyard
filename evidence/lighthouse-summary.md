# Mobile Lighthouse performance audit

Target: built production static export at http://127.0.0.1:4173/shipyard/ (not a dev server).

**Mobile Performance: 96/100**

| Metric | Reported result |
| --- | --- |
| First Contentful Paint | 0.8 s |
| Largest Contentful Paint | 2.6 s |
| Speed Index | 0.8 s |
| Total Blocking Time | 130 ms |
| Cumulative Layout Shift | 0 |

## Opportunities
- Eliminate render-blocking resources: 102ms estimated savings
- Initial server response time was short: 0ms estimated savings

The full Lighthouse HTML and JSON reports are attached to this workflow's artifacts; the report screenshot was captured from the HTML report.
