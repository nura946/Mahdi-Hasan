import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { useState, useRef } from 'react';
import type { MouseEvent, TouchEvent } from 'react';

const TESTIMONIALS = [
  { text: "স্যারের কারণে আমার হাতের লেখা সম্পূর্ণ বদলে গেছে।", author: "Student" },
  { text: "A truly transformative approach to teaching handwriting. The methodology is outstanding.", author: "Teacher" },
  { text: "We have seen remarkable improvement in just a few weeks. Highly recommended!", author: "Parent" },
];

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as MouseEvent).clientX;
    }

    const newPosition = ((clientX - left) / width) * 100;
    setPosition(Math.min(Math.max(newPosition, 0), 100));
  };


  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video md:aspect-[2/1] rounded-3xl overflow-hidden cursor-ew-resize select-none bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-950">
        <div className="text-center opacity-40">
           <p className="font-handwriting text-2xl md:text-4xl text-gray-800 dark:text-gray-300 transform -rotate-2">
             Madi hasn handriting is hard to read...
           </p>
           <span className="absolute bottom-4 right-6 text-sm font-bold text-gray-400">BEFORE</span>
        </div>
      </div>

      {/* After Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 flex items-center justify-center p-8 bg-white dark:bg-[#0a0a0a]"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="text-center">
           <p className="font-serif italic text-3xl md:text-5xl text-gray-900 dark:text-white">
             Mahdi Hasan's handwriting is elegant and clear.
           </p>
           <span className="absolute bottom-4 left-6 text-sm font-bold text-brand">AFTER</span>
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-brand pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-brand flex items-center justify-center">
          <div className="w-1 h-3 bg-gray-300 mx-[1px] rounded-full" />
          <div className="w-1 h-3 bg-gray-300 mx-[1px] rounded-full" />
        </div>
      </div>
    </div>
  );
}

const GALLERY_IMAGES = [
  '/gallery-pic-1.jpg.jpg',
  '/gallery-pic-2.jpg.png',
  '/gallery-pic-3.jpg.jpeg',
  '/gallery-pic-4.jpg.png',
  '/gallery-pic-5.jpg.jpg',
  '/gallery-pic-6.jpg.jpg',
  '/gallery-pic-7.jpg.jpg',
  '/gallery-pic-8.jpg.jpg',
  '/gallery-pic-9.jpg.jpg',
];

const VIDEO_IDS = [
  '7H5pItAMO7I',
  'nIClZs35vk8',
  'aMz39UHhGIE'
];

export function Media() {
  return (
    <section className="py-24 space-y-32">
      
      {/* Before vs After */}
      <div>
        <SectionHeading 
          title="The Transformation." 
          subtitle="Drag the slider to see the difference structured training makes."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BeforeAfterSlider />
        </motion.div>
      </div>

      {/* Testimonials */}
      <div>
        <SectionHeading title="Testimonials." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[32px] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex flex-col"
            >
              <div className="text-brand mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 italic flex-1">"{t.text}"</p>
              <p className="font-bold text-gray-900 dark:text-white">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Videos & Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <SectionHeading title="Videos." />
          <div className="space-y-6">
            {VIDEO_IDS.map((id, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden relative border border-gray-200 dark:border-gray-800"
              >
                 <iframe 
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                 />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <SectionHeading title="Gallery." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden relative"
              >
                 <img 
                    src={src}
                    alt={`Gallery Image ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-500"
                 />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
