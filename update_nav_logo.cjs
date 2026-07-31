const fs = require('fs');

// Patch Navbar.tsx
let navCode = fs.readFileSync('src/components/layout/Navbar.tsx', 'utf8');

const oldNavLinks = `const NAV_LINKS: NavLink[] = [
  { labelEn: "Home", labelBn: "হোম", href: "#home" },
  { labelEn: "Course Plan", labelBn: "কোর্স প্ল্যান", href: "#course-plan" },
  { labelEn: "Services", labelBn: "সার্ভিসেস", href: "#services" },
  {
    labelEn: "Academic",
    labelBn: "একাডেমিক",
    subLinks: [
      { labelEn: "Research & Publications", labelBn: "গবেষণা ও প্রকাশনা", href: "#research-publications" },
      { labelEn: "Training Experience", labelBn: "প্রশিক্ষণের অভিজ্ঞতা", href: "#training-experience" },
      { labelEn: "Core Expertise", labelBn: "মূল দক্ষতা", href: "#core-expertise" },
      { labelEn: "Awards & Honours", labelBn: "পুরস্কার ও সম্মাননা", href: "#awards-honours" },
    ],
  },
  {
    labelEn: "Learn More",
    labelBn: "আরও জানুন",
    subLinks: [
      { labelEn: "About", labelBn: "সম্পর্কে", href: "#about" },
      { labelEn: "Why Learn From Me", labelBn: "কেন আমার কাছে শিখবেন", href: "#why-learn-from-me" },
      { labelEn: "Special Work", labelBn: "বিশেষ কাজ", href: "#special-work" },
      { labelEn: "The Transformation", labelBn: "পরিবর্তন", href: "#transformation" },
      { labelEn: "Digital Library", labelBn: "ডিজিটাল লাইব্রেরি", href: "#digital-library" },
      { labelEn: "Currently", labelBn: "বর্তমানে", href: "#currently" },
      { labelEn: "Upcoming Soon..", labelBn: "শীঘ্রই আসছে..", href: "#upcoming-soon" },
      { labelEn: "Uses.", labelBn: "ব্যবহারসমূহ", href: "#uses" },
      { labelEn: "Chat with Mahdi", labelBn: "মাহদীর সাথে কথা বলুন", href: "https://wa.me/8801993479343" },
    ],
  },
  { labelEn: "Projects", labelBn: "প্রজেক্টস", href: "#projects" },
  { labelEn: "Explore", labelBn: "এক্সপ্লোর", href: "#explore" },
  { labelEn: "Contact", labelBn: "যোগাযোগ", href: "#contact" },
];`;

const newNavLinks = `const NAV_LINKS: NavLink[] = [
  { labelEn: "Home", labelBn: "হোম", href: "#home" },
  { labelEn: "Course Plan", labelBn: "কোর্স প্ল্যান", href: "#course-plan" },
  { 
    labelEn: "Services", 
    labelBn: "সার্ভিসেস", 
    subLinks: [
      { labelEn: "Our Services", labelBn: "আমাদের সার্ভিসেস", href: "#services" },
      { labelEn: "Projects", labelBn: "প্রজেক্টস", href: "#projects" },
      { labelEn: "Explore", labelBn: "এক্সপ্লোর", href: "#explore" }
    ]
  },
  {
    labelEn: "Academic",
    labelBn: "একাডেমিক",
    subLinks: [
      { labelEn: "Research & Publications", labelBn: "গবেষণা ও প্রকাশনা", href: "#research-publications" },
      { labelEn: "Training Experience", labelBn: "প্রশিক্ষণের অভিজ্ঞতা", href: "#training-experience" },
      { labelEn: "Core Expertise", labelBn: "মূল দক্ষতা", href: "#core-expertise" },
      { labelEn: "Awards & Honours", labelBn: "পুরস্কার ও সম্মাননা", href: "#awards-honours" },
    ],
  },
  {
    labelEn: "Learn More",
    labelBn: "আরও জানুন",
    subLinks: [
      { labelEn: "About", labelBn: "সম্পর্কে", href: "#about" },
      { labelEn: "Why Learn From Me", labelBn: "কেন আমার কাছে শিখবেন", href: "#why-learn-from-me" },
      { labelEn: "Special Work", labelBn: "বিশেষ কাজ", href: "#special-work" },
      { labelEn: "The Transformation", labelBn: "পরিবর্তন", href: "#transformation" },
      { labelEn: "Digital Library", labelBn: "ডিজিটাল লাইব্রেরি", href: "#digital-library" },
      { labelEn: "Currently", labelBn: "বর্তমানে", href: "#currently" },
      { labelEn: "Upcoming Soon..", labelBn: "শীঘ্রই আসছে..", href: "#upcoming-soon" },
      { labelEn: "Uses.", labelBn: "ব্যবহারসমূহ", href: "#uses" },
      { labelEn: "Chat with Mahdi", labelBn: "মাহদীর সাথে কথা বলুন", href: "https://wa.me/8801993479343" },
    ],
  },
  { labelEn: "Contact", labelBn: "যোগাযোগ", href: "#contact" },
];`;

navCode = navCode.replace(oldNavLinks, newNavLinks);

// Add spacing to the nav container
navCode = navCode.replace(
  '<nav className="hidden lg:flex flex-1 justify-center space-x-6 items-center">',
  '<nav className="hidden lg:flex flex-1 justify-center lg:ml-12 space-x-6 xl:space-x-8 items-center">'
);

fs.writeFileSync('src/components/layout/Navbar.tsx', navCode);
console.log("Navbar updated");

// Patch Logo.tsx
let logoCode = fs.readFileSync('src/components/Logo.tsx', 'utf8');

// Make the text bolder
logoCode = logoCode.replace(
  'font-bold tracking-tight text-gray-900',
  'font-black tracking-tight text-gray-900'
);

fs.writeFileSync('src/components/Logo.tsx', logoCode);
console.log("Logo updated");
