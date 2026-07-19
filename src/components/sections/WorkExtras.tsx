import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'motion/react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';

const RESEARCH = [
  { year: '2026', title: 'Scientific Handwriting Method' },
  { year: '2025', title: 'Arabic Handwriting Guide' },
  { year: '2025', title: 'Bangla Letter Formation System' },
];

const FOCUS = [
  'Teaching',
  'Developing AI Handwriting Evaluator',
  'Building Mahdi Handwriting Academy',
  'Recording New Course',
  'Writing Book'
];

const TOOLS = [
  'Google AI Studio',
  'Photoshop',
  'Canva',
  'VS Code',
  'CapCut',
  'Premiere Pro',
  'Camera & Lenses',
  'MacBook'
];

export function WorkExtras() {
  return (
    <section className="py-24 space-y-32">
      
      {/* Research & Publications */}
      <div>
        <SectionHeading title="Research & Publications." />
        <div className="space-y-6 max-w-3xl">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {/* Currently */}
        <div>
          <SectionHeading title="Currently." />
          <ul className="space-y-4">
            {FOCUS.map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
              >
                <CheckCircle2 size={20} className="text-brand shrink-0" />
                <span className="text-lg">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Uses */}
        <div>
          <SectionHeading title="Uses." />
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-3 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Library */}
      <div id="resources">
        <SectionHeading 
          title="Digital Library." 
          subtitle="Free resources, worksheets, and guides to help you start."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Notes', 'Worksheets', 'PDF Guides', 'Books', 'Articles', 'Downloads'].map((res, i) => (
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
