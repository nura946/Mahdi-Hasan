const fs = require('fs');
let code = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');

if (!code.includes('Course Plan')) {
  code = code.replace(
    /\{ labelEn: "Home", labelBn: "হোম", href: "#home" \},/,
    '{ labelEn: "Home", labelBn: "হোম", href: "#home" },\\n  { labelEn: "Course Plan", labelBn: "কোর্স প্ল্যান", href: "#course-plan" },'
  );
  fs.writeFileSync('src/components/layout/Navbar.tsx', code);
  console.log("Patched Navbar");
} else {
  console.log("Already patched");
}
