import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const RESEARCH = [
  { year: '2026', title: 'Scientific Handwriting Method' },
  { year: '2025', title: 'Arabic Handwriting Guide' },
  { year: '2025', title: 'Bangla Letter Formation System' },
];

export function ResearchPublications() {
  return (
    <section id="research-publications" className="py-24 bg-gray-50/50 dark:bg-gray-900/20 rounded-3xl mt-12 mb-24">
      <div className="px-6">
        <a 
          href="#"
          className="inline-flex items-center text-brand hover:text-green-700 dark:hover:text-green-400 font-medium mb-8 transition-colors"
        >
          ← Back to Home
        </a>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Research & Publications" subtitle="My ongoing work and published materials." />
        
        {/* Research */}
        <div className="mt-12 space-y-6 max-w-3xl mx-auto">
          {RESEARCH.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-baseline gap-6 pb-6 border-b border-gray-100 dark:border-gray-800 last:border-0"
            >
              <span className="text-sm font-mono text-gray-400 dark:text-gray-500 w-12">{item.year}</span>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-200">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Publications */}
        <div className="mt-16 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#0a0a0a] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center"
          >
            <div className="inline-flex items-center justify-center p-3 bg-brand/10 text-brand rounded-xl mb-4">
              <BookOpen size={28} />
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">হাতের লেখা শিখার বৈজ্ঞানিক কৌশল</h4>
            <p className="text-gray-500 dark:text-gray-400">
              A comprehensive guide to learning the scientific techniques of handwriting.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
