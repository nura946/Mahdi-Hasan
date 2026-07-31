const fs = require('fs');
let code = fs.readFileSync('src/components/Logo.tsx', 'utf8');

code = code.replace(
  'font-display text-xl md:text-2xl font-black tracking-tight',
  'font-display text-2xl md:text-3xl font-black tracking-tight'
);

fs.writeFileSync('src/components/Logo.tsx', code);
console.log("Logo size updated");
