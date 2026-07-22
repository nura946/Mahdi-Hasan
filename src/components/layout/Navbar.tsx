import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';

type NavLink = {
  label: string;
  href?: string;
  subLinks?: { label: string; href: string; }[];
};

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { 
    label: 'Academic', 
    subLinks: [
      { label: 'Research & Publications', href: '#research-publications' },
      { label: 'Training Experience', href: '#training-experience' },
      { label: 'Core Expertise', href: '#core-expertise' },
      { label: 'Awards & Honours', href: '#awards-honours' }
    ]
  },
  { 
    label: 'More', 
    subLinks: [
      { label: 'Why Learn From Me', href: '#why-learn-from-me' },
      { label: 'Special Work', href: '#special-work' },
      { label: 'The Transformation', href: '#transformation' },
      { label: 'Digital Library', href: '#digital-library' },
      { label: 'Currently', href: '#currently' },
      { label: 'Upcoming Soon..', href: '#upcoming-soon' }
    ]
  },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand origin-left z-50"
        style={{ scaleX }}
      />
      
      <header className="fixed top-0 w-full z-40 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 h-20 flex items-center justify-between">
          <a href="#home" className="font-display text-xl font-bold tracking-tight">
            Mahdi Hasan<span className="text-brand">.</span>
          </a>

          <nav className="hidden lg:flex flex-1 justify-center space-x-6 items-center">
            {NAV_LINKS.map((link) => (
              link.subLinks ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-2">
                    {link.label}
                    <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56">
                    <div className="bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-xl shadow-lg p-2 flex flex-col">
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-colors text-center"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          <div className="flex items-center space-x-4">
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
            {NAV_LINKS.map((link) => (
              link.subLinks ? (
                <div key={link.label} className="flex flex-col space-y-3 pt-2 pb-2 border-y border-gray-100 dark:border-gray-800/50">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {link.label}
                  </span>
                  <div className="flex flex-col space-y-3 pl-4">
                    {link.subLinks.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-gray-600 dark:text-gray-400"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-600 dark:text-gray-400"
                >
                  {link.label}
                </a>
              )
            ))}
          </motion.div>
        )}
      </header>
    </>
  );
}
