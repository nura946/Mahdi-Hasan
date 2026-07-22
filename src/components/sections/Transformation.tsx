import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import type { MouseEvent, TouchEvent } from 'react';

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

export function Transformation() {
  return (
    <section id="transformation" className="py-24 bg-gray-50/50 dark:bg-gray-900/20 rounded-3xl mt-12 mb-24">
      <div className="px-6">
        <a 
          href="#"
          className="inline-flex items-center text-brand hover:text-green-700 dark:hover:text-green-400 font-medium mb-8 transition-colors"
        >
          ← Back to Home
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="The Transformation." 
          subtitle="Drag the slider to see the difference structured training makes."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <BeforeAfterSlider />
        </motion.div>
      </div>
    </section>
  );
}
