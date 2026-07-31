const fs = require('fs');

const code = `import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 relative group cursor-pointer transition-transform duration-300 hover:scale-105">
      {/* Icon portion matching the reference */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        {/* Outer yellow partial circle */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-yellow-400" fill="none">
          <path d="M 50 10 A 40 40 0 1 0 90 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <circle cx="20" cy="25" r="3" fill="currentColor" />
          <circle cx="85" cy="85" r="3" fill="currentColor" />
          <path d="M 75 90 L 75 98 M 71 94 L 79 94" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        {/* Inner yellow circle */}
        <div className="absolute top-[45%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full z-0"></div>
        {/* Pencil drawing */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full z-10" fill="none">
          {/* Pencil Body */}
          <path d="M 65 20 L 80 35 L 45 70 L 30 70 L 30 55 Z" stroke="currentColor" className="text-gray-800 dark:text-gray-100" strokeWidth="4" strokeLinejoin="round" />
          {/* Pencil lines */}
          <path d="M 65 20 L 80 35 M 40 65 L 30 70 L 35 60" fill="none" stroke="currentColor" className="text-gray-800 dark:text-gray-100" strokeWidth="3" strokeLinejoin="round" />
          {/* Pencil Tip */}
          <path d="M 45 70 L 30 70 L 30 55 Z" fill="currentColor" className="text-gray-800 dark:text-gray-100" />
          {/* Squiggly line */}
          <path d="M 30 70 Q 40 85, 60 70 T 90 60" stroke="currentColor" className="text-gray-800 dark:text-gray-100" strokeWidth="3" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      
      {/* Text portion */}
      <div className="relative hidden sm:block ml-1">
        <h1 
          className="font-script text-3xl md:text-4xl leading-none tracking-wider font-bold relative z-10"
          style={{
            background: 'linear-gradient(to right, #ffcf33, #ff6b6b, #ff0055)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.8)',
            filter: 'drop-shadow(2px 3px 2px rgba(0,0,0,0.8))'
          }}
        >
          Mahdi Hasan Riyad
        </h1>
        {/* Dark Mode Shadow/Outline Backup */}
        <h1 
          className="font-script text-3xl md:text-4xl leading-none tracking-wider font-bold absolute inset-0 z-0 opacity-100 dark:opacity-100 text-black"
          style={{
            WebkitTextStroke: '4px black',
            transform: 'translate(2px, 3px)'
          }}
        >
          Mahdi Hasan Riyad
        </h1>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/Logo.tsx', code);
console.log("Logo created safely");
