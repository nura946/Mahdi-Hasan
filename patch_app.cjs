const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes('CoursePlan')) {
  code = code.replace(
    /import \{ WorkExtras \} from "\.\/components\/sections\/WorkExtras";/,
    'import { WorkExtras } from "./components/sections/WorkExtras";\\nimport { CoursePlan } from "./components/sections/CoursePlan";'
  );

  code = code.replace(
    /<\/main>\\s*<ImageGallery \/>/,
    '</main>\\n      <CoursePlan />\\n      <ImageGallery />'
  );
  
  // also add a route condition for course plan
  code = code.replace(
    /  if \(currentHash === "#core-expertise"\) \{/,
    `  if (currentHash === "#course-plan") {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <CoursePlan />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentHash === "#core-expertise") {`
  );

  fs.writeFileSync('src/App.tsx', code);
  console.log("Patched App.tsx");
} else {
  console.log("Already patched");
}
