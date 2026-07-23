import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Moon, Sun, Menu, X, ChevronDown, Languages, MessageCircle } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

type NavLink = {
  labelEn: string;
  labelBn: string;
  href?: string;
  subLinks?: { labelEn: string; labelBn: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
  { labelEn: "Home", labelBn: "হোম", href: "#home" },
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
      { labelEn: "Chat with Mahdi", labelBn: "মাহদীর সাথে কথা বলুন", href: "https://wa.me/8801993479343" },
    ],
  },
  { labelEn: "Projects", labelBn: "প্রজেক্টস", href: "#projects" },
  { labelEn: "Contact", labelBn: "যোগাযোগ", href: "#contact" },
];

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { language, setLanguage, t } = useLanguage();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand origin-left z-50"
        style={{ scaleX }}
      />

      <header className="fixed top-0 w-full z-40 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 h-20 flex items-center justify-between">
          <a
            href="#home"
            className="font-display text-xl font-bold tracking-tight"
          >
            Mahdi Hasan<span className="text-brand">.</span>
          </a>

          <nav className="hidden lg:flex flex-1 justify-center space-x-6 items-center">
            {NAV_LINKS.map((link) =>
              link.subLinks ? (
                <div key={link.labelEn} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2">
                    {t(link.labelEn, link.labelBn)}
                    <ChevronDown
                      size={16}
                      className="group-hover:rotate-180 transition-transform duration-200"
                    />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56">
                    <div className="bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-xl shadow-lg p-2 flex flex-col">
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.labelEn}
                          href={sub.href}
                          target={sub.href.startsWith("http") ? "_blank" : undefined}
                          rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-colors text-center"
                        >
                          {sub.labelEn === "Chat with Mahdi" && <MessageCircle size={16} />}
                          {t(sub.labelEn, sub.labelBn)}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.labelEn}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {t(link.labelEn, link.labelBn)}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 active:text-brand transition-all text-sm font-medium"
              aria-label="Toggle language"
            >
              <Languages size={18} />
              <span className="hidden md:inline">{language === 'en' ? 'BN' : 'EN'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 active:text-brand dark:active:text-brand active:scale-95 transition-all"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="lg:hidden p-2 text-gray-600 dark:text-gray-400 active:text-brand dark:active:text-brand active:scale-95 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col space-y-4 shadow-lg overflow-y-auto max-h-[calc(100vh-5rem)]"
          >
            {NAV_LINKS.map((link) =>
              link.subLinks ? (
                <div
                  key={link.labelEn}
                  className="flex flex-col space-y-3 pt-2 pb-2 border-y border-gray-100 dark:border-gray-800/50"
                >
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {t(link.labelEn, link.labelBn)}
                  </span>
                  <div className="flex flex-col space-y-3 pl-4">
                    {link.subLinks.map((sub) => (
                      <a
                        key={sub.labelEn}
                        href={sub.href}
                        target={sub.href.startsWith("http") ? "_blank" : undefined}
                        rel={sub.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2"
                      >
                        {sub.labelEn === "Chat with Mahdi" && <MessageCircle size={18} />}
                        {t(sub.labelEn, sub.labelBn)}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.labelEn}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-600 dark:text-gray-400"
                >
                  {t(link.labelEn, link.labelBn)}
                </a>
              ),
            )}
          </motion.div>
        )}
      </header>
    </>
  );
}
