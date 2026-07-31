const fs = require('fs');

// Patch Logo.tsx
const logoCode = `import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 relative group cursor-pointer transition-transform duration-300 hover:scale-105">
      {/* Icon portion matching the reference */}
      <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
        {/* Outer yellow partial circle */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-yellow-400" fill="none">
          <path d="M 50 10 A 40 40 0 1 0 90 50" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <circle cx="20" cy="25" r="4" fill="currentColor" />
          <circle cx="85" cy="85" r="4" fill="currentColor" />
          <path d="M 75 90 L 75 98 M 71 94 L 79 94" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
        {/* Inner yellow circle */}
        <div className="absolute top-[45%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-yellow-400 rounded-full z-0"></div>
        {/* Pencil drawing */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full z-10" fill="none">
          {/* Pencil Body */}
          <path d="M 65 20 L 80 35 L 45 70 L 30 70 L 30 55 Z" stroke="currentColor" className="text-gray-800 dark:text-gray-100" strokeWidth="4" strokeLinejoin="round" />
          {/* Pencil lines */}
          <path d="M 65 20 L 80 35 M 40 65 L 30 70 L 35 60" fill="none" stroke="currentColor" className="text-gray-800 dark:text-gray-100" strokeWidth="3" strokeLinejoin="round" />
          {/* Pencil Tip */}
          <path d="M 45 70 L 30 70 L 30 55 Z" fill="currentColor" className="text-gray-800 dark:text-gray-100" />
          {/* Squiggly line */}
          <path d="M 30 70 Q 40 85, 60 70 T 90 60" stroke="currentColor" className="text-gray-800 dark:text-gray-100" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      
      {/* Text portion */}
      <div className="font-display text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        MD. Mahdi Hasan<span className="text-brand">.</span>
      </div>
    </div>
  );
}
`;
fs.writeFileSync('src/components/Logo.tsx', logoCode);
console.log("Logo updated");

// Patch Hero
let heroCode = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');
heroCode = heroCode.replace(
  /\{t\("Welcome to Mahdi Hasan Riyad's Portfolio", "মাহদী হাসান রিয়াদের পোর্টফোলিওতে স্বাগতম"\)\}/,
  '{t("Welcome to MD. Mahdi Hasan\'s Portfolio", "মো. মাহদী হাসানের পোর্টফোলিওতে স্বাগতম")}'
);
fs.writeFileSync('src/components/sections/Hero.tsx', heroCode);
console.log("Hero updated");

