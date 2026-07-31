const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/\\nimport \{ CoursePlan \}/, '\nimport { CoursePlan }');
code = code.replace(/<\/main>\\n      <CoursePlan \/>\\n      <ImageGallery \/>/, '</main>\n      <CoursePlan />\n      <ImageGallery />');

fs.writeFileSync('src/App.tsx', code);
console.log("Fixed App.tsx");
