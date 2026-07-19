import { SectionHeading } from '../ui/SectionHeading';

const GALLERY_IMAGES = [
  '/img-1.jpg.jpeg',
  '/img-2.jpg.jpeg',
  '/img-3.jpg.jpeg',
  '/img-4.jpg.jpeg',
  '/img-5.jpg.jpeg',
  '/img-6.jpg.jpeg',
  '/img-7.jpg.jpeg',
  '/img-8.jpg.jpeg',
  '/img-9.jpg.jpeg',
  '/img-10.jpg.jpeg',
];

export function ImageGallery() {
  return (
    <section id="gallery" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <SectionHeading 
          title="Moments & Memories." 
          subtitle="Glimpses from workshops, sessions, and success stories."
        />
      </div>

      <div className="relative flex flex-col gap-6 w-full">
        {/* Top Row - Left to Right */}
        <div className="flex w-max animate-infinite-scroll-right hover:[animation-play-state:paused] will-change-transform">
          <div className="flex gap-6 pr-6">
            {GALLERY_IMAGES.map((src, i) => (
              <div key={`top1-${i}`} className="w-[280px] sm:w-[320px] md:w-[400px] shrink-0 group relative overflow-hidden rounded-[20px] shadow-lg border border-gray-200 dark:border-gray-800">
                <img 
                  src={src} 
                  alt={`Gallery ${i}`} 
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-6 pr-6">
            {GALLERY_IMAGES.map((src, i) => (
              <div key={`top2-${i}`} className="w-[280px] sm:w-[320px] md:w-[400px] shrink-0 group relative overflow-hidden rounded-[20px] shadow-lg border border-gray-200 dark:border-gray-800">
                <img 
                  src={src} 
                  alt={`Gallery ${i}`} 
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Right to Left */}
        <div className="flex w-max animate-infinite-scroll-left hover:[animation-play-state:paused] will-change-transform">
          <div className="flex gap-6 pr-6">
            {/* Reverse the array for variety */}
            {[...GALLERY_IMAGES].reverse().map((src, i) => (
              <div key={`bottom1-${i}`} className="w-[280px] sm:w-[320px] md:w-[400px] shrink-0 group relative overflow-hidden rounded-[20px] shadow-lg border border-gray-200 dark:border-gray-800">
                <img 
                  src={src} 
                  alt={`Gallery ${i}`} 
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-6 pr-6">
            {[...GALLERY_IMAGES].reverse().map((src, i) => (
              <div key={`bottom2-${i}`} className="w-[280px] sm:w-[320px] md:w-[400px] shrink-0 group relative overflow-hidden rounded-[20px] shadow-lg border border-gray-200 dark:border-gray-800">
                <img 
                  src={src} 
                  alt={`Gallery ${i}`} 
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white/90 to-transparent dark:from-[#0a0a0a]/90" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white/90 to-transparent dark:from-[#0a0a0a]/90" />
      </div>
    </section>
  );
}
