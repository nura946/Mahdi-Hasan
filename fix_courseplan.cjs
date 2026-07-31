const fs = require('fs');
let code = fs.readFileSync('src/components/sections/CoursePlan.tsx', 'utf8');

code = code.replace(/\\`/g, '`');
code = code.replace(/\\\$/g, '$');

fs.writeFileSync('src/components/sections/CoursePlan.tsx', code);
console.log("Fixed CoursePlan.tsx");
