import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustBadges } from './components/sections/TrustBadges';
import { About } from './components/sections/About';
import { WhyLearnFromMe } from './components/sections/WhyLearnFromMe';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { SpecialWork } from './components/sections/SpecialWork';
import { ImageGallery } from './components/sections/ImageGallery';
import { WorkExtras } from './components/sections/WorkExtras';
import { Media } from './components/sections/Media';
import { Footer } from './components/layout/Footer';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#why-learn-from-me') {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <WhyLearnFromMe />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentHash === '#special-work') {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <SpecialWork />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
      <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
        <Hero />
      </main>
      <TrustBadges />
      <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
        <About />
        <Experience />
        <Projects />
      </main>
      <ImageGallery />
      <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
        <WorkExtras />
        <Media />
      </main>
      <Footer />
    </div>
  );
}
