const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

code = code.replace(/--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;/, '--font-sans: "Kalpurush", "Inter", ui-sans-serif, system-ui, sans-serif;');
code = code.replace(/--font-display: "Inter", ui-sans-serif, system-ui, sans-serif;/, '--font-display: "Kalpurush", "Inter", ui-sans-serif, system-ui, sans-serif;');

fs.writeFileSync('src/index.css', code);
console.log("Fixed font");
