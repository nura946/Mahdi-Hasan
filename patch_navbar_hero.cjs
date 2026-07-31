const fs = require('fs');

// Patch Navbar
let navCode = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');
navCode = navCode.replace(
  /import \{ Moon, Sun, Menu, X, ChevronDown, Languages, MessageCircle \} from "lucide-react";/,
  'import { Moon, Sun, Menu, X, ChevronDown, Languages, MessageCircle } from "lucide-react";\nimport { Logo } from "../Logo";'
);
navCode = navCode.replace(
  /Mahdi Hasan<span className="text-brand">\.<\/span>/,
  '<Logo />'
);
fs.writeFileSync('src/components/layout/Navbar.tsx', navCode);
console.log("Navbar patched");

// Patch Hero
let heroCode = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');
heroCode = heroCode.replace(
  /\{t\("Welcome to Mahdi Hasan's Portfolio", "মাহদী হাসানের পোর্টফোলিওতে স্বাগতম"\)\}/,
  '{t("Welcome to Mahdi Hasan Riyad\'s Portfolio", "মাহদী হাসান রিয়াদের পোর্টফোলিওতে স্বাগতম")}'
);
fs.writeFileSync('src/components/sections/Hero.tsx', heroCode);
console.log("Hero patched");

