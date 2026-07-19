import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'motion/react';

const SPECIAL_WORKS = [
  '/special-work-1.jpg.jpg',
  '/special-work-2.jpg.jpg',
  '/special-work-3.jpg.jpg',
  '/special-work-4.jpg.jpeg',
];

export function SpecialWork() {
  return (
    <section id="special-work" className="py-24">
      <SectionHeading 
        title="Special Work." 
        subtitle="Some of my best handwriting transformations and special pieces."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {SPECIAL_WORKS.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="aspect-[4/5] bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden relative group"
          >
            <img 
              src={src}
              alt={`Special Work ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-all duration-700"
              onError={(e) => {
                e.currentTarget.src = `https://images.unsplash.com/photo-1583089892943-e02e5bbce192?w=600&q=80&ixlib=rb-4.0.3`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               <span className="text-white font-medium">Special Piece {i + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
