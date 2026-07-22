import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';

const RESOURCES = ['Notes', 'Worksheets', 'PDF Guides', 'Books', 'Articles', 'Downloads'];

export function DigitalLibrary() {
  return (
    <section id="digital-library" className="py-24 bg-gray-50/50 dark:bg-gray-900/20 rounded-3xl mt-12 mb-24">
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
          title="Digital Library." 
          subtitle="Free resources, worksheets, and guides to help you start."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {RESOURCES.map((res, i) => (
            <motion.a
              key={res}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-brand/30 transition-colors group"
            >
              <div className="flex items-center gap-3 text-gray-900 dark:text-white font-medium">
                <FileText size={20} className="text-gray-400 group-hover:text-brand transition-colors" />
                {res}
              </div>
              <Download size={18} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
