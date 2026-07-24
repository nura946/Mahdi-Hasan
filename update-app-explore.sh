#!/bin/bash
sed -i 's/import { Uses } from ".\/components\/sections\/Uses";/import { Uses } from ".\/components\/sections\/Uses";\nimport { ExplorePortfolio } from ".\/components\/sections\/ExplorePortfolio";/' src/App.tsx

sed -i '/if (currentHash === "#uses") {/i \
  if (currentHash === "#explore") {\
    return (\
      <div className="min-h-screen bg-[url('\''/portfolio-bg.jpg.jpeg'\'')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">\
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />\
        <Navbar />\
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">\
          <ExplorePortfolio />\
        </main>\
        <Footer />\
      </div>\
    );\
  }\
' src/App.tsx
