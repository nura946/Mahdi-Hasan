import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'motion/react';

const TESTIMONIALS = [
  { text: "স্যারের কারণে আমার হাতের লেখা সম্পূর্ণ বদলে গেছে।", author: "Student" },
  { text: "A truly transformative approach to teaching handwriting. The methodology is outstanding.", author: "Teacher" },
  { text: "We have seen remarkable improvement in just a few weeks. Highly recommended!", author: "Parent" },
];

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
