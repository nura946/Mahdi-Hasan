const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');

code = code.replace(/\{ labelEn: "Home", labelBn: "হোম", href: "#home" \},\\n  \{ labelEn: "Course Plan"/, '{ labelEn: "Home", labelBn: "হোম", href: "#home" },\n  { labelEn: "Course Plan"');

fs.writeFileSync('src/components/layout/Navbar.tsx', code);
console.log("Fixed Navbar.tsx");
