import { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { TrustBadges } from "./components/sections/TrustBadges";
import { About } from "./components/sections/About";
import { WhyLearnFromMe } from "./components/sections/WhyLearnFromMe";
import { TrainingExperience } from "./components/sections/TrainingExperience";
import { Services } from "./components/sections/Services";
import { Projects } from "./components/sections/Projects";
import { SpecialWork } from "./components/sections/SpecialWork";
import { Transformation } from "./components/sections/Transformation";
import { DigitalLibrary } from "./components/sections/DigitalLibrary";
import { Currently } from "./components/sections/Currently";
import { UpcomingSoon } from "./components/sections/UpcomingSoon";
import { CoreExpertise } from "./components/sections/CoreExpertise";
import { AwardsHonours } from "./components/sections/AwardsHonours";
import { ResearchPublications } from "./components/sections/ResearchPublications";
import { ImageGallery } from "./components/sections/ImageGallery";
import { Uses } from "./components/sections/Uses";
import { ExplorePortfolio } from "./components/sections/ExplorePortfolio";
import { WorkExtras } from "./components/sections/WorkExtras";
import { Media } from "./components/sections/Media";
import { Footer } from "./components/layout/Footer";

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (currentHash === "#services") {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <Services />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentHash === "#why-learn-from-me") {
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

  if (currentHash === "#special-work") {
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

  if (currentHash === "#training-experience") {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <TrainingExperience />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentHash === "#transformation") {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <Transformation />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentHash === "#digital-library") {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <DigitalLibrary />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentHash === "#currently") {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <Currently />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentHash === "#upcoming-soon") {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <UpcomingSoon />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentHash === "#core-expertise") {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <CoreExpertise />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentHash === "#awards-honours") {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <AwardsHonours />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentHash === "#explore") {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <ExplorePortfolio />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentHash === "#uses") {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <Uses />
        </main>
        <Footer />
      </div>
    );
  }

  if (currentHash === "#research-publications") {
    return (
      <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
        <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20">
          <ResearchPublications />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[url('/portfolio-bg.jpg.jpeg')] bg-cover bg-center bg-fixed text-gray-900 dark:text-gray-100 selection:bg-brand/30 font-sans transition-colors duration-300 relative z-0">
      <div className="fixed inset-0 bg-white/85 dark:bg-[#0a0a0a]/90 backdrop-blur-[2px] -z-10" />
      <Navbar />
      <Hero />
      <TrustBadges />
      <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
        <About />
        <Projects />
      </main>
      <ImageGallery />
      <main className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
        <Media />
      </main>
      <Footer />
    </div>
  );
}
