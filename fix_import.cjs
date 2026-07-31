const fs = require('fs');
let code = fs.readFileSync('src/components/sections/CoursePlan.tsx', 'utf8');

code = code.replace(/..\/..\/context\/LanguageContext/, '../../lib/LanguageContext');

fs.writeFileSync('src/components/sections/CoursePlan.tsx', code);
console.log("Fixed import");
