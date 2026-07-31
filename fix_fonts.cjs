const fs = require('fs');
let cssCode = fs.readFileSync('src/index.css', 'utf8');

cssCode = cssCode.replace(
  'family=Inter:wght@400;500;600;700',
  'family=Inter:wght@400;500;600;700;800;900'
);

fs.writeFileSync('src/index.css', cssCode);
console.log("Fonts updated");
