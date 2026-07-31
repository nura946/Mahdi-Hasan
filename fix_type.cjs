const fs = require('fs');
let code = fs.readFileSync('src/components/sections/ExplorePortfolio.tsx', 'utf8');

code = code.replace(
  'for (const [key, values] of Object.entries(activeFilters)) {',
  'for (const [key, values] of Object.entries(activeFilters) as [string, string[]][]) {'
);

fs.writeFileSync('src/components/sections/ExplorePortfolio.tsx', code);
console.log("Type fixed");
