import { SectionHeading } from '../ui/SectionHeading';
import { motion } from 'motion/react';

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

export function Uses() {
  return (
    <section className="py-24 max-w-3xl mx-auto">
      <SectionHeading title="Uses." />
      <div className="flex flex-wrap gap-3 mt-12 justify-center">
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="px-6 py-4 rounded-2xl bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 shadow-sm"
          >
            {tool}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
