const fs = require('fs');
let code = fs.readFileSync('src/index.css', 'utf8');

const newImports = `@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@500;600;700&family=Inter:wght@400;500;600;700&family=Dancing+Script:wght@700&display=swap');
@import url('https://fonts.maateen.me/kalpurush/font.css');
@import "tailwindcss";`;

code = code.replace(/@import url\('https:\/\/fonts\.maateen\.me\/kalpurush\/font\.css'\);[\s\S]*?@import "tailwindcss";/, newImports);

code = code.replace(/--font-sans:.*?;/, '--font-sans: "Inter", "Kalpurush", ui-sans-serif, system-ui, sans-serif;');
code = code.replace(/--font-display:.*?;/, '--font-display: "Inter", "Kalpurush", ui-sans-serif, system-ui, sans-serif;\n  --font-caption: "Inter", "Hind Siliguri", ui-sans-serif, system-ui, sans-serif;\n  --font-script: "Dancing Script", cursive;');

fs.writeFileSync('src/index.css', code);
console.log("CSS updated");
