import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const FOCUS = [
  'Teaching',
  'Developing AI Handwriting Evaluator',
  'Building Mahdi Handwriting Academy',
  'Recording New Course',
  'Writing Book'
];

export function Currently() {
  return (
    <section id="currently" className="py-24 bg-gray-50/50 dark:bg-gray-900/20 rounded-3xl mt-12 mb-24">
      <div className="px-6">
        <a 
          href="#"
          className="inline-flex items-center text-brand hover:text-green-700 dark:hover:text-green-400 font-medium mb-8 transition-colors"
        >
          ← Back to Home
        </a>
      </div>
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading title="Currently." />
        <ul className="space-y-4 mt-12">
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
    </section>
  );
}
